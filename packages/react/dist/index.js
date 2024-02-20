var ie=Object.create;var N=Object.defineProperty;var pe=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var le=Object.getPrototypeOf,ce=Object.prototype.hasOwnProperty;var de=(r,n)=>{for(var o in n)N(r,o,{get:n[o],enumerable:!0})},J=(r,n,o,u)=>{if(n&&typeof n=="object"||typeof n=="function")for(let a of ue(n))!ce.call(r,a)&&a!==o&&N(r,a,{get:()=>n[a],enumerable:!(u=pe(n,a))||u.enumerable});return r};var Q=(r,n,o)=>(o=r!=null?ie(le(r)):{},J(n||!r||!r.__esModule?N(o,"default",{value:r,enumerable:!0}):o,r)),fe=r=>J(N({},"__esModule",{value:!0}),r);var ye={};de(ye,{Head:()=>te,Link:()=>oe,createInertiaApp:()=>V,router:()=>ge,useForm:()=>W,usePage:()=>q,useRemember:()=>E});module.exports=fe(ye);var se=require("@inertiajs/core");var Z=require("@inertiajs/core"),ee=require("react");var R=require("@inertiajs/core"),T=require("react");var z=require("react"),G=(0,z.createContext)(void 0);G.displayName="InertiaHeadContext";var w=G;var X=require("react"),Y=(0,X.createContext)(void 0);Y.displayName="InertiaPageContext";var O=Y;function $({children:r,initialPage:n,initialComponent:o,resolveComponent:u,titleCallback:a,onHeadUpdate:v}){let[c,S]=(0,T.useState)({component:o||null,page:n,key:null,preserveScroll:!1}),d=(0,T.useMemo)(()=>(0,R.createHeadManager)(typeof window>"u",a||(f=>f),v||(()=>{})),[]);if((0,T.useLayoutEffect)(()=>{c.preserveScroll||R.router.resetScrollPositions()},[c]),(0,T.useEffect)(()=>{R.router.init({initialPage:n,resolveComponent:u,swapComponent:async({component:f,page:e,preserveState:l,preserveScroll:s})=>{S(m=>({component:f,page:e,key:l?m.key:Date.now(),preserveScroll:!!s}))},handleScrollResetExternally:!0}),R.router.on("navigate",()=>d.forceUpdate())},[]),!c.component)return(0,T.createElement)(w.Provider,{value:d},(0,T.createElement)(O.Provider,{value:c.page},null));let P=r||(({Component:f,props:e,key:l})=>{let s=(0,T.createElement)(f,{key:l,...e});return typeof f.layout=="function"?f.layout(s):Array.isArray(f.layout)?f.layout.concat(s).reverse().reduce((m,F)=>(0,T.createElement)(F,{children:m,...e})):s});return(0,T.createElement)(w.Provider,{value:d},(0,T.createElement)(O.Provider,{value:c.page},P({Component:c.component,key:c.key,props:c.page.props})))}$.displayName="Inertia";async function V({id:r="app",resolve:n,setup:o,title:u,progress:a={},page:v,render:c}){let S=typeof window>"u",d=S?null:document.getElementById(r),P=v||JSON.parse(d.dataset.page),f=s=>Promise.resolve(n(s)).then(m=>m.default||m),e=[],l=await f(P.component).then(s=>o({el:d,App:$,props:{initialPage:P,initialComponent:s,resolveComponent:f,titleCallback:u,onHeadUpdate:S?m=>e=m:null}}));if(!S&&a&&(0,Z.setupProgress)(a),S){let s=await c((0,ee.createElement)("div",{id:r,"data-page":JSON.stringify(P)},l));return{head:e,body:s}}}var h=Q(require("react"),1);var me=function({children:r,title:n}){let o=(0,h.useContext)(w),u=(0,h.useMemo)(()=>o.createProvider(),[o]);(0,h.useEffect)(()=>()=>{u.disconnect()},[u]);function a(e){return["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(e.type)>-1}function v(e){let l=Object.keys(e.props).reduce((s,m)=>{if(["head-key","children","dangerouslySetInnerHTML"].includes(m))return s;let F=e.props[m];return F===""?s+` ${m}`:s+` ${m}="${F}"`},"");return`<${e.type}${l}>`}function c(e){return typeof e.props.children=="string"?e.props.children:e.props.children.reduce((l,s)=>l+S(s),"")}function S(e){let l=v(e);return e.props.children&&(l+=c(e)),e.props.dangerouslySetInnerHTML&&(l+=e.props.dangerouslySetInnerHTML.__html),a(e)||(l+=`</${e.type}>`),l}function d(e){return h.default.cloneElement(e,{inertia:e.props["head-key"]!==void 0?e.props["head-key"]:""})}function P(e){return S(d(e))}function f(e){let l=h.default.Children.toArray(e).filter(s=>s).map(s=>P(s));return n&&!l.find(s=>s.startsWith("<title"))&&l.push(`<title inertia>${n}</title>`),l}return u.update(f(r)),null},te=me;var I=require("@inertiajs/core"),A=require("react"),C=()=>{},re=(0,A.forwardRef)(({children:r,as:n="a",data:o={},href:u,method:a="get",preserveScroll:v=!1,preserveState:c=null,replace:S=!1,only:d=[],headers:P={},queryStringArrayFormat:f="brackets",onClick:e=C,onCancelToken:l=C,onBefore:s=C,onStart:m=C,onProgress:F=C,onFinish:L=C,onCancel:k=C,onSuccess:B=C,onError:D=C,...U},H)=>{let M=(0,A.useCallback)(i=>{e(i),(0,I.shouldIntercept)(i)&&(i.preventDefault(),I.router.visit(u,{data:o,method:a,preserveScroll:v,preserveState:c??a!=="get",replace:S,only:d,headers:P,onCancelToken:l,onBefore:s,onStart:m,onProgress:F,onFinish:L,onCancel:k,onSuccess:B,onError:D}))},[o,u,a,v,c,S,d,P,e,l,s,m,F,L,k,B,D]);n=n.toLowerCase(),a=a.toLowerCase();let[b,t]=(0,I.mergeDataIntoQueryString)(a,u||"",o,f);return u=b,o=t,n==="a"&&a!=="get"&&console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${u}" method="${a}" as="button">...</Link>`),(0,A.createElement)(n,{...U,...n==="a"?{href:u}:{},ref:H,onClick:M},r)});re.displayName="InertiaLink";var oe=re;var _=require("@inertiajs/core"),ne=Q(require("lodash.isequal"),1),y=require("react");var K=require("@inertiajs/core"),j=require("react");function E(r,n){let[o,u]=(0,j.useState)(()=>{let a=K.router.restore(n);return a!==void 0?a:r});return(0,j.useEffect)(()=>{K.router.remember(o,n)},[o,n]),[o,u]}function W(r,n){let o=(0,y.useRef)(null),u=typeof r=="string"?r:null,[a,v]=(0,y.useState)((typeof r=="string"?n:r)||{}),c=(0,y.useRef)(null),S=(0,y.useRef)(null),[d,P]=u?E(a,`${u}:data`):(0,y.useState)(a),[f,e]=u?E({},`${u}:errors`):(0,y.useState)({}),[l,s]=(0,y.useState)(!1),[m,F]=(0,y.useState)(!1),[L,k]=(0,y.useState)(null),[B,D]=(0,y.useState)(!1),[U,H]=(0,y.useState)(!1),M=t=>t;(0,y.useEffect)(()=>(o.current=!0,()=>{o.current=!1}),[]);let b=(0,y.useCallback)((t,i,p={})=>{let x={...p,onCancelToken:g=>{if(c.current=g,p.onCancelToken)return p.onCancelToken(g)},onBefore:g=>{if(D(!1),H(!1),clearTimeout(S.current),p.onBefore)return p.onBefore(g)},onStart:g=>{if(F(!0),p.onStart)return p.onStart(g)},onProgress:g=>{if(k(g),p.onProgress)return p.onProgress(g)},onSuccess:g=>{if(o.current&&(F(!1),k(null),e({}),s(!1),D(!0),H(!0),S.current=setTimeout(()=>{o.current&&H(!1)},2e3)),p.onSuccess)return p.onSuccess(g)},onError:g=>{if(o.current&&(F(!1),k(null),e(g),s(!0)),p.onError)return p.onError(g)},onCancel:()=>{if(o.current&&(F(!1),k(null)),p.onCancel)return p.onCancel()},onFinish:()=>{if(o.current&&(F(!1),k(null)),c.current=null,p.onFinish)return p.onFinish()}};t==="delete"?_.router.delete(i,{...x,data:M(d)}):_.router[t](i,M(d),x)},[d,e]);return{data:d,setData(t,i){P(typeof t=="string"?{...d,[t]:i}:typeof t=="function"?p=>t(p):t)},isDirty:!(0,ne.default)(d,a),errors:f,hasErrors:l,processing:m,progress:L,wasSuccessful:B,recentlySuccessful:U,transform(t){M=t},setDefaults(t,i){v(typeof t>"u"?()=>d:p=>({...p,...typeof t=="string"?{[t]:i}:t}))},reset(...t){t.length===0?P(a):P(Object.keys(a).filter(i=>t.includes(i)).reduce((i,p)=>(i[p]=a[p],i),{...d}))},setError(t,i){e(p=>{let x={...p,...typeof t=="string"?{[t]:i}:t};return s(Object.keys(x).length>0),x})},clearErrors(...t){e(i=>{let p=Object.keys(i).reduce((x,g)=>({...x,...t.length>0&&!t.includes(g)?{[g]:i[g]}:{}}),{});return s(Object.keys(p).length>0),p})},submit:b,get(t,i){b("get",t,i)},post(t,i){b("post",t,i)},put(t,i){b("put",t,i)},patch(t,i){b("patch",t,i)},delete(t,i){b("delete",t,i)},cancel(){c.current&&c.current.cancel()}}}var ae=require("react");function q(){let r=(0,ae.useContext)(O);if(!r)throw new Error("usePage must be used within the Inertia component");return r}var ge=se.router;
//# sourceMappingURL=index.js.map
