import{d as x,j as t,a as f,e as y}from"./index-Bi1Gsx-r.js";import{U as _}from"./UserOutlined-CLrKOxEC.js";import"./objectSpread2-C4CkhkJ7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./UserOutlined-D3qSKySR.js";const v="_homeHeader_1evpt_1",C="_logo_1evpt_15",L="_project_1evpt_23",b="_footer_1evpt_33",S="_gabLeft_1evpt_40",r={homeHeader:v,logo:C,project:L,footer:b,gabLeft:S};function H(){const n=x();return t.jsxs("div",{className:r.homeHeader,children:[t.jsxs("div",{className:r.logo,children:[t.jsx("img",{width:38,src:"https://static.huolala.cn/image/ed865c5ae9528f7b4aa7e9fbd8747db50e5f304d.png",alt:"logo"}),"Mars用户端"]}),t.jsx("div",{children:n.userName})]})}const R=window.React.useEffect,s=window.React.useState,p=window.antd.Card,E=window.antd.Col,N=window.antd.Layout,T=window.antd.Row,z=window.antd.Pagination,P=window.antd.Spin,k=window.antd.Empty,A=window.antd.Button;function D(){const[n,a]=s(!0),[g,h]=s([]),[i,j]=s(0),[c,u]=s(1),d=f();R(()=>{l()},[]);const l=async(e=c)=>{try{a(!0);const o=await y({pageNum:e,pageSize:12});a(!1),h((o==null?void 0:o.list)||[]),j((o==null?void 0:o.total)||0)}catch{a(!1)}},m=async e=>{d(`/project/stg/${e}`)},w=e=>{u(e),l(e)};return t.jsxs(t.Fragment,{children:[t.jsx(H,{}),t.jsxs(N.Content,{className:r.project,children:[t.jsx(P,{spinning:n,size:"large",children:t.jsx(T,{gutter:[20,20],children:g.map(e=>t.jsx(E,{span:6,children:t.jsx(p,{hoverable:!0,children:t.jsx("div",{onClick:()=>m(e.id),children:t.jsx(p.Meta,{style:{cursor:"pointer"},avatar:t.jsx("img",{src:e.logo,style:{width:32}}),title:e.name,description:t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{position:"absolute",top:15,right:15}}),t.jsx("p",{style:{color:"rgba(0, 0, 0, 0.88)"},children:e.remark}),t.jsxs("p",{style:{marginTop:10},children:[t.jsx(_,{style:{fontSize:14,marginRight:5}}),e.sso_name,"  ",e.updated_at]})]})})})})},e.id))})}),i>0?t.jsx(z,{style:{textAlign:"right",marginTop:16},total:i,current:c,pageSize:12,showTotal:e=>`总共 ${e} 条`,onChange:w}):!n&&t.jsx(k,{style:{marginTop:100},children:t.jsx(A,{type:"primary",onClick:()=>d("/project/0/config"),children:"创建项目"})})]})]})}export{D as default};