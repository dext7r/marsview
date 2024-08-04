import{j as a,L as b,m as v}from"./index-BdozwHxb.js";const w=()=>{const z="canvasBox",f=document.querySelector(`#${z}`);let d=window.innerWidth,m=window.innerHeight;f.width=d,f.height=m;const y=0,g=0,j=600,c=function(s){return s*Math.PI/180},x=function(){return Math.sin(Math.floor(Math.random()*360)*Math.PI/180)},t={obj:{x:y,y:g,z:j},dest:{x:0,y:0,z:1},dist:{x:0,y:0,z:200},ang:{cplane:0,splane:0,ctheta:0,stheta:0},zoom:1,disp:{x:d/2,y:m/2,z:0},upd(){t.dist.x=t.dest.x-t.obj.x,t.dist.y=t.dest.y-t.obj.y,t.dist.z=t.dest.z-t.obj.z,t.ang.cplane=-t.dist.z/Math.sqrt(t.dist.x*t.dist.x+t.dist.z*t.dist.z),t.ang.splane=t.dist.x/Math.sqrt(t.dist.x*t.dist.x+t.dist.z*t.dist.z),t.ang.ctheta=Math.sqrt(t.dist.x*t.dist.x+t.dist.z*t.dist.z)/Math.sqrt(t.dist.x*t.dist.x+t.dist.y*t.dist.y+t.dist.z*t.dist.z),t.ang.stheta=-t.dist.y/Math.sqrt(t.dist.x*t.dist.x+t.dist.y*t.dist.y+t.dist.z*t.dist.z)}},r={parts:{sz(s,i){return{x:s.x*i.x,y:s.y*i.y,z:s.z*i.z}},rot:{x(s,i){return{x:s.x,y:s.y*Math.cos(c(i.x))-s.z*Math.sin(c(i.x)),z:s.y*Math.sin(c(i.x))+s.z*Math.cos(c(i.x))}},y(s,i){return{x:s.x*Math.cos(c(i.y))+s.z*Math.sin(c(i.y)),y:s.y,z:-s.x*Math.sin(c(i.y))+s.z*Math.cos(c(i.y))}},z(s,i){return{x:s.x*Math.cos(c(i.z))-s.y*Math.sin(c(i.z)),y:s.x*Math.sin(c(i.z))+s.y*Math.cos(c(i.z)),z:s.z}}},pos(s,i){return{x:s.x+i.x,y:s.y+i.y,z:s.z+i.z}}},pov:{plane(s){return{x:s.x*t.ang.cplane+s.z*t.ang.splane,y:s.y,z:s.x*-t.ang.splane+s.z*t.ang.cplane}},theta(s){return{x:s.x,y:s.y*t.ang.ctheta-s.z*t.ang.stheta,z:s.y*t.ang.stheta+s.z*t.ang.ctheta}},set(s){return{x:s.x-t.obj.x,y:s.y-t.obj.y,z:s.z-t.obj.z}}},persp(s){return{x:s.x*t.dist.z/s.z*t.zoom,y:s.y*t.dist.z/s.z*t.zoom,z:s.z*t.zoom,p:t.dist.z/s.z}},disp(s,i){return{x:s.x+i.x,y:-s.y+i.y,z:s.z+i.z,p:s.p}},steps(s,i,l,e,h){let n=r.parts.sz(s,i);return n=r.parts.rot.x(n,l),n=r.parts.rot.y(n,l),n=r.parts.rot.z(n,l),n=r.parts.pos(n,e),n=r.pov.plane(n),n=r.pov.theta(n),n=r.pov.set(n),n=r.persp(n),n=r.disp(n,h),n}};(function(){const s=function(e){this.transIn={},this.transOut={},this.transIn.vtx=e.vtx,this.transIn.sz=e.sz,this.transIn.rot=e.rot,this.transIn.pos=e.pos};s.prototype.vupd=function(){this.transOut=r.steps(this.transIn.vtx,this.transIn.sz,this.transIn.rot,this.transIn.pos,t.disp)};const i=function(){this.vel=.04,this.lim=360,this.diff=300,this.initPos=100,this.toX=y,this.toY=g,this.go()};i.prototype.go=function(){this.canvas=document.getElementById(z),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.$=this.canvas.getContext("2d"),this.$.globalCompositeOperation="source-over",this.varr=[],this.dist=[],this.calc=[];for(let e=0,h=300;e<h;e+=1)this.add();this.rotObj={x:0,y:0,z:0},this.objSz={x:d/5,y:m/5,z:d/5}},i.prototype.add=function(){this.varr.push(new s({vtx:{x:x(),y:x(),z:x()},sz:{x:0,y:0,z:0},rot:{x:20,y:-20,z:0},pos:{x:this.diff*Math.sin(360*Math.random()*Math.PI/180),y:this.diff*Math.sin(360*Math.random()*Math.PI/180),z:this.diff*Math.sin(360*Math.random()*Math.PI/180)}})),this.calc.push({x:360*Math.random(),y:360*Math.random(),z:360*Math.random()})},i.prototype.upd=function(){t.obj.x+=(this.toX-t.obj.x)*.025,t.obj.y+=(this.toY-t.obj.y)*.025},i.prototype.draw=function(){this.$.clearRect(0,0,this.canvas.width,this.canvas.height),t.upd(),this.rotObj.x+=.05,this.rotObj.y+=.05,this.rotObj.z+=.05;for(let e=0;e<this.varr.length;e+=1){for(const n in this.calc[e])Object.prototype.hasOwnProperty.call(this.calc[e],n)&&(this.calc[e][n]+=this.vel,this.calc[e][n]>this.lim&&(this.calc[e][n]=0));if(this.varr[e].transIn.pos={x:this.diff*Math.cos(this.calc[e].x*Math.PI/180),y:this.diff*Math.sin(this.calc[e].y*Math.PI/180),z:this.diff*Math.sin(this.calc[e].z*Math.PI/180)},this.varr[e].transIn.rot=this.rotObj,this.varr[e].transIn.sz=this.objSz,this.varr[e].vupd(),this.varr[e].transOut.p<0)continue;const h=this.$.createRadialGradient(this.varr[e].transOut.x,this.varr[e].transOut.y,this.varr[e].transOut.p,this.varr[e].transOut.x,this.varr[e].transOut.y,this.varr[e].transOut.p*2);this.$.globalCompositeOperation="lighter",h.addColorStop(0,"hsla(255, 255%, 255%, 1)"),h.addColorStop(.5,`hsla(${e+2}, 79%, 50%, 1)`),h.addColorStop(1,`hsla(${e}, 79%, 50%, .5)`),this.$.fillStyle=h,this.$.beginPath(),this.$.arc(this.varr[e].transOut.x,this.varr[e].transOut.y,this.varr[e].transOut.p*2,0,Math.PI*2,!1),this.$.fill(),this.$.closePath()}},i.prototype.anim=function(){window.requestAnimationFrame=function(){return window.requestAnimationFrame||function(h,n){window.setTimeout(h,1e3/30)}}();const e=(function(){this.upd(),this.draw(),window.requestAnimationFrame(e)}).bind(this);window.requestAnimationFrame(e)},i.prototype.run=function(){this.anim()},new i().run()})()},M="_welcome_1h46z_1",_="_bg_1h46z_5",I="_canvas_1h46z_13",N="_content_1h46z_19",O="_title_1h46z_24",P="_desc_1h46z_29",$="_btnGroup_1h46z_35",C="_cube_1h46z_39",q="_module_1h46z_61",B="_moduleList_1h46z_70",L="_moduleItem_1h46z_76",S="_footer_1h46z_94",k="_beian_1h46z_110",o={welcome:M,bg:_,canvas:I,content:N,title:O,desc:P,btnGroup:$,cube:C,"img1-anim":"_img1-anim_1h46z_1",module:q,moduleList:B,moduleItem:L,footer:S,beian:k},G=window.React.useEffect,u=window.antd.Button;function E(){G(()=>{w()},[]);const p=()=>{v.info("敬请期待")};return a.jsxs("div",{className:o.welcome,children:[a.jsxs("section",{className:o.bg,children:[a.jsx("canvas",{id:"canvasBox",className:o.canvas}),a.jsxs("div",{className:o.content,children:[a.jsx("h1",{className:o.title,children:"Mars零代码搭建平台"}),a.jsx("p",{className:o.desc,children:"让搭建更简单，让开发更高效"}),a.jsxs("div",{className:o.btnGroup,children:[a.jsx(u,{type:"primary",ghost:!0,size:"large",onClick:p,children:"产品文档"}),a.jsx(b,{to:"/projects",children:a.jsx(u,{type:"primary",size:"large",children:"快速开始"})})]})]}),a.jsx("div",{className:o.cube})]}),a.jsxs("section",{className:o.module,style:{backgroundColor:"#fff"},children:[a.jsx("h1",{children:"模块介绍"}),a.jsxs("div",{className:o.moduleList,children:[a.jsxs("div",{className:o.moduleItem,children:[a.jsx("img",{src:"https://static.huolala.cn/image/fefd2550853f0e631595c78f4b5a98370202ccf9.png?x-oss-process=image/format,webp"}),a.jsx("span",{children:"项目配置"})]}),a.jsxs("div",{className:o.moduleItem,children:[a.jsx("img",{src:"https://static.huolala.cn/image/7d390cbf7677017c02f3888247570a8d289792e8.png?x-oss-process=image/format,webp"}),a.jsx("span",{children:"权限管理"})]}),a.jsxs("div",{className:o.moduleItem,children:[a.jsx("img",{src:"https://static.huolala.cn/image/3fa9d193029fb70407b2744a78e9b925b882a021.png?x-oss-process=image/format,webp"}),a.jsx("span",{children:"编辑器"})]}),a.jsxs("div",{className:o.moduleItem,children:[a.jsx("img",{src:"https://static.huolala.cn/image/7449c59a3fd379b798ff4e6911ccc834b118ed2b.png?x-oss-process=image/format,webp"}),a.jsx("span",{children:"用户访问"})]})]})]}),a.jsxs("section",{className:o.module,style:{backgroundColor:"#fafafa"},children:[a.jsx("h1",{children:"平台特色"}),a.jsxs("div",{className:o.moduleList,children:[a.jsxs("div",{className:o.moduleItem,children:[a.jsx("img",{src:"https://static.huolala.cn/image/3b9603655469f34281714192b98385fd8ea86223.png?x-oss-process=image/format,webp",style:{width:90}}),a.jsx("span",{children:"逻辑编排"})]}),a.jsxs("div",{className:o.moduleItem,children:[a.jsx("img",{src:"https://static.huolala.cn/image/b68b0170f8c226f92817b71da5277e4ddfb75bbe.png?x-oss-process=image/format,webp",style:{width:90}}),a.jsx("span",{children:"权限分配"})]}),a.jsxs("div",{className:o.moduleItem,children:[a.jsx("img",{src:"https://static.huolala.cn/image/3376e53cdfe7f7d1f736e02b1dc250a10a82bd6a.png?x-oss-process=image/format,webp",style:{width:90}}),a.jsx("span",{children:"源码生成"})]}),a.jsxs("div",{className:o.moduleItem,children:[a.jsx("img",{src:"https://static.huolala.cn/image/7087104082205dafa5ce3317fcdb7fbbdbe7b810.png?x-oss-process=image/format,webp",style:{width:90}}),a.jsx("span",{children:"接口配置"})]}),a.jsxs("div",{className:o.moduleItem,children:[a.jsx("img",{src:"https://static.huolala.cn/image/7255728e00cc796c09b0ff3a9016b565ec888368.png?x-oss-process=image/format,webp",style:{width:90}}),a.jsx("span",{children:"发布、回滚"})]})]})]}),a.jsxs("section",{className:o.footer,children:[a.jsx("img",{src:"https://static.huolala.cn/image/326c8f7604b9026624d530ab52a188989135f1dd.png?x-oss-process=image/format,webp"}),a.jsx("h1",{children:"欢迎使用Mars零代码搭建平台"}),a.jsx(b,{to:"/projects",children:a.jsx(u,{type:"primary",size:"large",children:"快速开始"})}),a.jsx("p",{className:o.beian,children:a.jsx("a",{href:"https://beian.miit.gov.cn/#/Integrated/index",children:"京ICP备14041985号-2"})})]})]})}export{E as default};