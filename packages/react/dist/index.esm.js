import{router as Fe}from"@inertiajs/core";import{setupProgress as ee}from"@inertiajs/core";import{createElement as te}from"react";import{createHeadManager as z,router as L}from"@inertiajs/core";import{createElement as b,useEffect as G,useLayoutEffect as X,useMemo as Y,useState as Z}from"react";import{createContext as J}from"react";var N=J(void 0);N.displayName="InertiaHeadContext";var A=N;import{createContext as Q}from"react";var $=Q(void 0);$.displayName="InertiaPageContext";var E=$;function w({children:d,initialPage:c,initialComponent:s,resolveComponent:p,titleCallback:a,onHeadUpdate:T}){let[u,P]=Z({component:s||null,page:c,key:null,preserveScroll:!1}),l=Y(()=>z(typeof window>"u",a||(f=>f),T||(()=>{})),[]);if(X(()=>{u.preserveScroll||L.resetScrollPositions()},[u]),G(()=>{L.init({initialPage:c,resolveComponent:p,swapComponent:async({component:f,page:e,preserveState:i,preserveScroll:r})=>{P(m=>({component:f,page:e,key:i?m.key:Date.now(),preserveScroll:!!r}))},handleScrollResetExternally:!0}),L.on("navigate",()=>l.forceUpdate())},[]),!u.component)return b(A.Provider,{value:l},b(E.Provider,{value:u.page},null));let y=d||(({Component:f,props:e,key:i})=>{let r=b(f,{key:i,...e});return typeof f.layout=="function"?f.layout(r):Array.isArray(f.layout)?f.layout.concat(r).reverse().reduce((m,S)=>b(S,{children:m,...e})):r});return b(A.Provider,{value:l},b(E.Provider,{value:u.page},y({Component:u.component,key:u.key,props:u.page.props})))}w.displayName="Inertia";async function j({id:d="app",resolve:c,setup:s,title:p,progress:a={},page:T,render:u}){let P=typeof window>"u",l=P?null:document.getElementById(d),y=T||JSON.parse(l.dataset.page),f=r=>Promise.resolve(c(r)).then(m=>m.default||m),e=[],i=await f(y.component).then(r=>s({el:l,App:w,props:{initialPage:y,initialComponent:r,resolveComponent:f,titleCallback:p,onHeadUpdate:P?m=>e=m:null}}));if(!P&&a&&ee(a),P){let r=await u(te("div",{id:d,"data-page":JSON.stringify(y)},i));return{head:e,body:r}}}import U,{useContext as re,useEffect as oe,useMemo as ne}from"react";var ae=function({children:d,title:c}){let s=re(A),p=ne(()=>s.createProvider(),[s]);oe(()=>()=>{p.disconnect()},[p]);function a(e){return["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(e.type)>-1}function T(e){let i=Object.keys(e.props).reduce((r,m)=>{if(["head-key","children","dangerouslySetInnerHTML"].includes(m))return r;let S=e.props[m];return S===""?r+` ${m}`:r+` ${m}="${S}"`},"");return`<${e.type}${i}>`}function u(e){return typeof e.props.children=="string"?e.props.children:e.props.children.reduce((i,r)=>i+P(r),"")}function P(e){let i=T(e);return e.props.children&&(i+=u(e)),e.props.dangerouslySetInnerHTML&&(i+=e.props.dangerouslySetInnerHTML.__html),a(e)||(i+=`</${e.type}>`),i}function l(e){return U.cloneElement(e,{inertia:e.props["head-key"]!==void 0?e.props["head-key"]:""})}function y(e){return P(l(e))}function f(e){let i=U.Children.toArray(e).filter(r=>r).map(r=>y(r));return c&&!i.find(r=>r.startsWith("<title"))&&i.push(`<title inertia>${c}</title>`),i}return p.update(f(d)),null},se=ae;import{mergeDataIntoQueryString as ie,router as pe,shouldIntercept as ue}from"@inertiajs/core";import{createElement as le,forwardRef as ce,useCallback as de}from"react";var F=()=>{},V=ce(({children:d,as:c="a",data:s={},href:p,method:a="get",preserveScroll:T=!1,preserveState:u=null,replace:P=!1,only:l=[],headers:y={},queryStringArrayFormat:f="brackets",onClick:e=F,onCancelToken:i=F,onBefore:r=F,onStart:m=F,onProgress:S=F,onFinish:H=F,onCancel:v=F,onSuccess:M=F,onError:x=F,...O},R)=>{let I=de(o=>{e(o),ue(o)&&(o.preventDefault(),pe.visit(p,{data:s,method:a,preserveScroll:T,preserveState:u??a!=="get",replace:P,only:l,headers:y,onCancelToken:i,onBefore:r,onStart:m,onProgress:S,onFinish:H,onCancel:v,onSuccess:M,onError:x}))},[s,p,a,T,u,P,l,y,e,i,r,m,S,H,v,M,x]);c=c.toLowerCase(),a=a.toLowerCase();let[h,t]=ie(a,p||"",s,f);return p=h,s=t,c==="a"&&a!=="get"&&console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${p}" method="${a}" as="button">...</Link>`),le(c,{...O,...c==="a"?{href:p}:{},ref:R,onClick:I},d)});V.displayName="InertiaLink";var fe=V;import{router as _}from"@inertiajs/core";import ye from"lodash.isequal";import{useCallback as Pe,useEffect as Se,useRef as B,useState as C}from"react";import{router as K}from"@inertiajs/core";import{useEffect as me,useState as ge}from"react";function D(d,c){let[s,p]=ge(()=>{let a=K.restore(c);return a!==void 0?a:d});return me(()=>{K.remember(s,c)},[s,c]),[s,p]}function W(d,c){let s=B(null),p=typeof d=="string"?d:null,[a,T]=C((typeof d=="string"?c:d)||{}),u=B(null),P=B(null),[l,y]=p?D(a,`${p}:data`):C(a),[f,e]=p?D({},`${p}:errors`):C({}),[i,r]=C(!1),[m,S]=C(!1),[H,v]=C(null),[M,x]=C(!1),[O,R]=C(!1),I=t=>t;Se(()=>(s.current=!0,()=>{s.current=!1}),[]);let h=Pe((t,o,n={})=>{let k={...n,onCancelToken:g=>{if(u.current=g,n.onCancelToken)return n.onCancelToken(g)},onBefore:g=>{if(x(!1),R(!1),clearTimeout(P.current),n.onBefore)return n.onBefore(g)},onStart:g=>{if(S(!0),n.onStart)return n.onStart(g)},onProgress:g=>{if(v(g),n.onProgress)return n.onProgress(g)},onSuccess:g=>{if(s.current&&(S(!1),v(null),e({}),r(!1),x(!0),R(!0),P.current=setTimeout(()=>{s.current&&R(!1)},2e3)),n.onSuccess)return n.onSuccess(g)},onError:g=>{if(s.current&&(S(!1),v(null),e(g),r(!0)),n.onError)return n.onError(g)},onCancel:()=>{if(s.current&&(S(!1),v(null)),n.onCancel)return n.onCancel()},onFinish:()=>{if(s.current&&(S(!1),v(null)),u.current=null,n.onFinish)return n.onFinish()}};t==="delete"?_.delete(o,{...k,data:I(l)}):_[t](o,I(l),k)},[l,e]);return{data:l,setData(t,o){y(typeof t=="string"?{...l,[t]:o}:typeof t=="function"?n=>t(n):t)},isDirty:!ye(l,a),errors:f,hasErrors:i,processing:m,progress:H,wasSuccessful:M,recentlySuccessful:O,transform(t){I=t},setDefaults(t,o){T(typeof t>"u"?()=>l:n=>({...n,...typeof t=="string"?{[t]:o}:t}))},reset(...t){t.length===0?y(a):y(Object.keys(a).filter(o=>t.includes(o)).reduce((o,n)=>(o[n]=a[n],o),{...l}))},setError(t,o){e(n=>{let k={...n,...typeof t=="string"?{[t]:o}:t};return r(Object.keys(k).length>0),k})},clearErrors(...t){e(o=>{let n=Object.keys(o).reduce((k,g)=>({...k,...t.length>0&&!t.includes(g)?{[g]:o[g]}:{}}),{});return r(Object.keys(n).length>0),n})},submit:h,get(t,o){h("get",t,o)},post(t,o){h("post",t,o)},put(t,o){h("put",t,o)},patch(t,o){h("patch",t,o)},delete(t,o){h("delete",t,o)},cancel(){u.current&&u.current.cancel()}}}import{useContext as Te}from"react";function q(){let d=Te(E);if(!d)throw new Error("usePage must be used within the Inertia component");return d}var Pt=Fe;export{se as Head,fe as Link,j as createInertiaApp,Pt as router,W as useForm,q as usePage,D as useRemember};
//# sourceMappingURL=index.esm.js.map
