import Editor from '@monaco-editor/react';
import React, { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useDebounceFn } from 'ahooks';
import { Form } from 'antd';
import { Spin } from 'antd';
import SetterRender from '@/components/SetterRender/SetterRender';
import { Allotment } from 'allotment';
import ComPreview from './ComPreview';
import 'allotment/dist/style.css';
import './index.less';

/**
 * 组件配置编辑
 */

export default memo(
  forwardRef((_: any, ref: React.ForwardedRef<{ getCode: () => void }>) => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [config, setConfig] = useState<{ attrs: any; config: any; events: any; methods: any } | null>(null);
    const [loading, setLoading] = useState(false);
    const [refreshTag, setRefreshTag] = useState(0);
    const editorRef = useRef<any>(null);
    const [form] = Form.useForm();

    useImperativeHandle(ref, () => {
      return {
        getCode() {
          return code;
        },
        refresh() {
          setRefreshTag(refreshTag + 1);
        },
      };
    });

    // 默认读取一次配置代码
    useEffect(() => {
      const value = localStorage.getItem('config-code') || '';
      setCode(value || '');
    }, []);

    // 输入后，更新配置
    const onChange = (value: string = '') => {
      setCode(value);
    };

    useEffect(() => {
      compileConfig(code);
    }, [code]);

    // 根据代码获取配置对象
    const compileConfig = async (text: string) => {
      if (!text) return;
      localStorage.setItem('config-code', text);
      // 编译后的代码，通过Blob对象来创建URL
      const blob = new Blob([text], { type: 'application/javascript' });
      const url = URL.createObjectURL(blob);

      try {
        const module = await import(url);
        const defaultValue = module.default || {};
        // 调用模块的默认导出函数
        setConfig({ ...defaultValue });
        form.setFieldsValue(defaultValue.config?.props || {});
        localStorage.setItem('config-compile', JSON.stringify(defaultValue));
        setLoading(false);
        setError('');
        URL.revokeObjectURL(url);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
        console.error('模块加载失败:', error);
      }
    };

    const { run } = useDebounceFn(onChange, { wait: 500 });

    // 初始化配置器值
    const handleSetterChange = () => {
      try {
        const values = form.getFieldsValue();
        if (config) {
          setConfig((prev: any) => {
            return {
              ...prev,
              config: {
                ...prev.config,
                props: values,
              },
            };
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    const formLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 },
    };

    return (
      <div className="code-editor">
        <Allotment>
          <Allotment.Pane minSize={300}>
            <Editor
              language="javascript"
              value={code}
              onChange={(value) => {
                setLoading(true);
                run(value);
              }}
              options={{
                lineNumbers: 'on',
                minimap: {
                  enabled: false,
                },
              }}
              onMount={(editor) => (editorRef.current = editor)}
            />
          </Allotment.Pane>
          <Allotment.Pane minSize={700}>
            <Spin spinning={loading} tip="正在编译中...">
              <ComPreview config={config?.config} refreshTag={refreshTag} />
              {error && <p style={{ color: 'red', lineHeight: '30px', padding: 30 }}>{error}</p>}
            </Spin>
          </Allotment.Pane>
          <Allotment.Pane minSize={300}>
            <Form
              form={form}
              style={{ paddingBottom: 20 }}
              {...formLayout}
              layout="horizontal"
              labelAlign="right"
              onValuesChange={handleSetterChange}
            >
              <SetterRender attrs={config?.attrs || []} form={form} />
            </Form>
          </Allotment.Pane>
        </Allotment>
      </div>
    );
  }),
);
