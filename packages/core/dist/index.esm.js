import{default as B}from"axios";function R(t,e){let i;return function(...n){clearTimeout(i),i=setTimeout(()=>t.apply(this,n),e)}}function f(t,e){return document.dispatchEvent(new CustomEvent(`inertia:${t}`,e))}var M=t=>f("before",{cancelable:!0,detail:{visit:t}}),j=t=>f("error",{detail:{errors:t}}),H=t=>f("exception",{cancelable:!0,detail:{exception:t}}),F=t=>f("finish",{detail:{visit:t}}),$=t=>f("invalid",{cancelable:!0,detail:{response:t}}),S=t=>f("navigate",{detail:{page:t}}),q=t=>f("progress",{detail:{progress:t}}),W=t=>f("start",{detail:{visit:t}}),K=t=>f("success",{detail:{page:t}});function I(t){return t instanceof File||t instanceof Blob||t instanceof FileList&&t.length>0||t instanceof FormData&&Array.from(t.values()).some(e=>I(e))||typeof t=="object"&&t!==null&&Object.values(t).some(e=>I(e))}function A(t,e=new FormData,i=null){t=t||{};for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&J(e,X(i,n),t[n]);return e}function X(t,e){return t?t+"["+e+"]":e}function J(t,e,i){if(Array.isArray(i))return Array.from(i.keys()).forEach(n=>J(t,X(e,n.toString()),i[n]));if(i instanceof Date)return t.append(e,i.toISOString());if(i instanceof File)return t.append(e,i,i.name);if(i instanceof Blob)return t.append(e,i);if(typeof i=="boolean")return t.append(e,i?"1":"0");if(typeof i=="string")return t.append(e,i);if(typeof i=="number")return t.append(e,`${i}`);if(i==null)return t.append(e,"");A(i,t,e)}var z={modal:null,listener:null,show(t){typeof t=="object"&&(t=`All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(t)}`);let e=document.createElement("html");e.innerHTML=t,e.querySelectorAll("a").forEach(n=>n.setAttribute("target","_top")),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",()=>this.hide());let i=document.createElement("iframe");if(i.style.backgroundColor="white",i.style.borderRadius="5px",i.style.width="100%",i.style.height="100%",this.modal.appendChild(i),document.body.prepend(this.modal),document.body.style.overflow="hidden",!i.contentWindow)throw new Error("iframe not yet ready.");i.contentWindow.document.open(),i.contentWindow.document.write(e.outerHTML),i.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape(t){t.keyCode===27&&this.hide()}};import te from"deepmerge";import*as O from"qs";function v(t){return new URL(t.toString(),window.location.toString())}function k(t,e,i,n="brackets"){let o=/^https?:\/\//.test(e.toString()),c=o||e.toString().startsWith("/"),h=!c&&!e.toString().startsWith("#")&&!e.toString().startsWith("?"),m=e.toString().includes("?")||t==="get"&&Object.keys(i).length,b=e.toString().includes("#"),a=new URL(e.toString(),"http://localhost");return t==="get"&&Object.keys(i).length&&(a.search=O.stringify(te(O.parse(a.search,{ignoreQueryPrefix:!0}),i),{encodeValuesOnly:!0,arrayFormat:n}),i={}),[[o?`${a.protocol}//${a.host}`:"",c?a.pathname:"",h?a.pathname.substring(1):"",m?a.search:"",b?a.hash:""].join(""),i]}function w(t){return t=new URL(t.href),t.hash="",t}var _=typeof window>"u",N=class{constructor(){this.visitId=null;this.handleScrollResetExternally=!1}init({initialPage:e,resolveComponent:i,swapComponent:n,handleScrollResetExternally:o}){this.page=e,this.resolveComponent=i,this.swapComponent=n,this.handleScrollResetExternally=!!o,this.setNavigationType(),this.clearRememberedStateOnReload(),this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()}setNavigationType(){this.navigationType=window.performance&&window.performance.getEntriesByType("navigation").length>0?window.performance.getEntriesByType("navigation")[0].type:"navigate"}clearRememberedStateOnReload(){this.navigationType==="reload"&&window.history.state?.rememberedState&&delete window.history.state.rememberedState}handleInitialPageVisit(e){this.page.url+=window.location.hash,this.setPage(e,{preserveState:!0}).then(()=>S(e))}setupEventListeners(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",R(this.handleScrollEvent.bind(this),100),!0)}scrollRegions(){return document.querySelectorAll("[scroll-region]")}handleScrollEvent(e){typeof e.target.hasAttribute=="function"&&e.target.hasAttribute("scroll-region")&&this.saveScrollPositions()}saveScrollPositions(){this.replaceState({...this.page,scrollRegions:Array.from(this.scrollRegions()).map(e=>({top:e.scrollTop,left:e.scrollLeft}))})}resetScrollPositions(){window.scrollTo(0,0),this.scrollRegions().forEach(e=>{typeof e.scrollTo=="function"?e.scrollTo(0,0):(e.scrollTop=0,e.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&setTimeout(()=>document.getElementById(window.location.hash.slice(1))?.scrollIntoView())}resetScrollPositionsIfNotHandledExternally(){this.handleScrollResetExternally||this.resetScrollPositions()}restoreScrollPositions(){this.page.scrollRegions&&this.scrollRegions().forEach((e,i)=>{let n=this.page.scrollRegions[i];if(n)typeof e.scrollTo=="function"?e.scrollTo(n.left,n.top):(e.scrollTop=n.top,e.scrollLeft=n.left);else return})}isBackForwardVisit(){return window.history.state&&this.navigationType==="back_forward"}handleBackForwardVisit(e){window.history.state.version=e.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(()=>{this.restoreScrollPositions(),S(e)})}locationVisit(e,i){try{let n={preserveScroll:i};window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify(n)),window.location.href=e.href,w(window.location).href===w(e).href&&window.location.reload()}catch{return!1}}isLocationVisit(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}}handleLocationVisit(e){let i=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),e.url+=window.location.hash,e.rememberedState=window.history.state?.rememberedState??{},e.scrollRegions=window.history.state?.scrollRegions??[],this.setPage(e,{preserveScroll:i.preserveScroll,preserveState:!0}).then(()=>{i.preserveScroll&&this.restoreScrollPositions(),S(e)})}isLocationVisitResponse(e){return!!(e&&e.status===409&&e.headers["x-inertia-location"])}isInertiaResponse(e){return!!e?.headers["x-inertia"]}createVisitId(){return this.visitId={},this.visitId}cancelVisit(e,{cancelled:i=!1,interrupted:n=!1}){e&&!e.completed&&!e.cancelled&&!e.interrupted&&(e.cancelToken.abort(),e.onCancel(),e.completed=!1,e.cancelled=i,e.interrupted=n,F(e),e.onFinish(e))}finishVisit(e){!e.cancelled&&!e.interrupted&&(e.completed=!0,e.cancelled=!1,e.interrupted=!1,F(e),e.onFinish(e))}resolvePreserveOption(e,i){return typeof e=="function"?e(i):e==="errors"?Object.keys(i.props.errors||{}).length>0:e}cancel(){this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}visit(e,{method:i="get",data:n={},replace:o=!1,preserveScroll:c=!1,preserveState:h=!1,only:m=[],headers:b={},errorBag:a="",forceFormData:l=!1,onCancelToken:g=()=>{},onBefore:L=()=>{},onStart:d=()=>{},onProgress:p=()=>{},onFinish:T=()=>{},onCancel:y=()=>{},onSuccess:D=()=>{},onError:U=()=>{},queryStringArrayFormat:C="brackets"}={}){let x=typeof e=="string"?v(e):e;if((I(n)||l)&&!(n instanceof FormData)&&(n=A(n)),!(n instanceof FormData)){let[r,s]=k(i,x,n,C);x=v(r),n=s}let P={url:x,method:i,data:n,replace:o,preserveScroll:c,preserveState:h,only:m,headers:b,errorBag:a,forceFormData:l,queryStringArrayFormat:C,cancelled:!1,completed:!1,interrupted:!1};if(L(P)===!1||!M(P))return;this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();let G=this.createVisitId();this.activeVisit={...P,onCancelToken:g,onBefore:L,onStart:d,onProgress:p,onFinish:T,onCancel:y,onSuccess:D,onError:U,queryStringArrayFormat:C,cancelToken:new AbortController},g({cancel:()=>{this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}}),W(P),d(P),B({method:i,url:w(x).href,data:i==="get"?{}:n,params:i==="get"?n:{},signal:this.activeVisit.cancelToken.signal,headers:{...b,Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0,...m.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":m.join(",")}:{},...a&&a.length?{"X-Inertia-Error-Bag":a}:{},...this.page.version?{"X-Inertia-Version":this.page.version}:{}},onUploadProgress:r=>{n instanceof FormData&&(r.percentage=r.progress?Math.round(r.progress*100):0,q(r),p(r))}}).then(r=>{if(!this.isInertiaResponse(r))return Promise.reject({response:r});let s=r.data;m.length&&s.component===this.page.component&&(s.props={...this.page.props,...s.props}),c=this.resolvePreserveOption(c,s),h=this.resolvePreserveOption(h,s),h&&window.history.state?.rememberedState&&s.component===this.page.component&&(s.rememberedState=window.history.state.rememberedState);let E=x,V=v(s.url);return E.hash&&!V.hash&&w(E).href===V.href&&(V.hash=E.hash,s.url=V.href),this.setPage(s,{visitId:G,replace:o,preserveScroll:c,preserveState:h})}).then(()=>{let r=this.page.props.errors||{};if(Object.keys(r).length>0){let s=a?r[a]?r[a]:{}:r;return j(s),U(s)}return K(this.page),D(this.page)}).catch(r=>{if(this.isInertiaResponse(r.response))return this.setPage(r.response.data,{visitId:G});if(this.isLocationVisitResponse(r.response)){let s=v(r.response.headers["x-inertia-location"]),E=x;E.hash&&!s.hash&&w(E).href===s.href&&(s.hash=E.hash),this.locationVisit(s,c===!0)}else if(r.response)$(r.response)&&z.show(r.response.data);else return Promise.reject(r)}).then(()=>{this.activeVisit&&this.finishVisit(this.activeVisit)}).catch(r=>{if(!B.isCancel(r)){let s=H(r);if(this.activeVisit&&this.finishVisit(this.activeVisit),s)return Promise.reject(r)}})}setPage(e,{visitId:i=this.createVisitId(),replace:n=!1,preserveScroll:o=!1,preserveState:c=!1}={}){return Promise.resolve(this.resolveComponent(e.component)).then(h=>{i===this.visitId&&(e.scrollRegions=e.scrollRegions||[],e.rememberedState=e.rememberedState||{},n=n||v(e.url).href===window.location.href,n?this.replaceState(e):this.pushState(e),this.swapComponent({component:h,page:e,preserveState:c,preserveScroll:o}).then(()=>{o||this.resetScrollPositionsIfNotHandledExternally(),n||S(e)}))})}pushState(e){this.page=e,window.history.pushState(e,"",e.url)}replaceState(e){this.page=e,window.history.replaceState(e,"",e.url)}handlePopstateEvent(e){if(e.state!==null){let i=e.state,n=this.createVisitId();Promise.resolve(this.resolveComponent(i.component)).then(o=>{n===this.visitId&&(this.page=i,this.swapComponent({component:o,page:i,preserveState:!1,preserveScroll:!0}).then(()=>{this.restoreScrollPositions(),S(i)}))})}else{let i=v(this.page.url);i.hash=window.location.hash,this.replaceState({...this.page,url:i.href}),this.resetScrollPositions()}}get(e,i={},n={}){return this.visit(e,{...n,method:"get",data:i})}reload(e={}){return this.visit(window.location.href,{...e,preserveScroll:!0,preserveState:!0})}replace(e,i={}){return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${i.method??"get"}() instead.`),this.visit(e,{preserveState:!0,...i,replace:!0})}post(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"post",data:i})}put(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"put",data:i})}patch(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"patch",data:i})}delete(e,i={}){return this.visit(e,{preserveState:!0,...i,method:"delete"})}remember(e,i="default"){_||this.replaceState({...this.page,rememberedState:{...this.page?.rememberedState,[i]:e}})}restore(e="default"){if(!_)return window.history.state?.rememberedState?.[e]}on(e,i){let n=o=>{let c=i(o);o.cancelable&&!o.defaultPrevented&&c===!1&&o.preventDefault()};return document.addEventListener(`inertia:${e}`,n),()=>document.removeEventListener(`inertia:${e}`,n)}};var ie={buildDOMElement(t){let e=document.createElement("template");e.innerHTML=t;let i=e.content.firstChild;if(!t.startsWith("<script "))return i;let n=document.createElement("script");return n.innerHTML=i.innerHTML,i.getAttributeNames().forEach(o=>{n.setAttribute(o,i.getAttribute(o)||"")}),n},isInertiaManagedElement(t){return t.nodeType===Node.ELEMENT_NODE&&t.getAttribute("inertia")!==null},findMatchingElementIndex(t,e){let i=t.getAttribute("inertia");return i!==null?e.findIndex(n=>n.getAttribute("inertia")===i):-1},update:R(function(t){let e=t.map(n=>this.buildDOMElement(n));Array.from(document.head.childNodes).filter(n=>this.isInertiaManagedElement(n)).forEach(n=>{let o=this.findMatchingElementIndex(n,e);if(o===-1){n?.parentNode?.removeChild(n);return}let c=e.splice(o,1)[0];c&&!n.isEqualNode(c)&&n?.parentNode?.replaceChild(c,n)}),e.forEach(n=>document.head.appendChild(n))},1)};function Q(t,e,i){let n={},o=0;function c(){let l=o+=1;return n[l]=[],l.toString()}function h(l){l===null||Object.keys(n).indexOf(l)===-1||(delete n[l],a())}function m(l,g=[]){l!==null&&Object.keys(n).indexOf(l)>-1&&(n[l]=g),a()}function b(){let l=e(""),g={...l?{title:`<title inertia="">${l}</title>`}:{}},L=Object.values(n).reduce((d,p)=>d.concat(p),[]).reduce((d,p)=>{if(p.indexOf("<")===-1)return d;if(p.indexOf("<title ")===0){let y=p.match(/(<title [^>]+>)(.*?)(<\/title>)/);return d.title=y?`${y[1]}${e(y[2])}${y[3]}`:p,d}let T=p.match(/ inertia="[^"]+"/);return T?d[T[0]]=p:d[Object.keys(d).length]=p,d},g);return Object.values(L)}function a(){t?i(b()):ie.update(b())}return a(),{forceUpdate:a,createProvider:function(){let l=c();return{update:g=>m(l,g),disconnect:()=>h(l)}}}}import u from"nprogress";var Y=null;function ne(t){document.addEventListener("inertia:start",re.bind(null,t)),document.addEventListener("inertia:progress",oe),document.addEventListener("inertia:finish",se)}function re(t){Y=setTimeout(()=>u.start(),t)}function oe(t){u.isStarted()&&t.detail.progress?.percentage&&u.set(Math.max(u.status,t.detail.progress.percentage/100*.9))}function se(t){if(clearTimeout(Y),u.isStarted())t.detail.visit.completed?u.done():t.detail.visit.interrupted?u.set(0):t.detail.visit.cancelled&&(u.done(),u.remove());else return}function ae(t){let e=document.createElement("style");e.type="text/css",e.textContent=`
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${t};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${t}, 0 0 5px ${t};
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${t};
      border-left-color: ${t};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,document.head.appendChild(e)}function Z({delay:t=250,color:e="#29d",includeCSS:i=!0,showSpinner:n=!1}={}){ne(t),u.configure({showSpinner:n}),i&&ae(e)}function ee(t){let e=t.currentTarget.tagName.toLowerCase()==="a";return!(t.target&&(t?.target).isContentEditable||t.defaultPrevented||e&&t.which>1||e&&t.altKey||e&&t.ctrlKey||e&&t.metaKey||e&&t.shiftKey)}var Oe=new N;export{Q as createHeadManager,v as hrefToUrl,k as mergeDataIntoQueryString,Oe as router,Z as setupProgress,ee as shouldIntercept,w as urlWithoutHash};
//# sourceMappingURL=index.esm.js.map
