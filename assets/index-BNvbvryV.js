var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=class{ballCount=document.getElementById(`bc`);speed=document.getElementById(`speed`);speedVal=document.getElementById(`speed-value`);variation=document.getElementById(`size-variation`);variationVal=document.getElementById(`size-variation-value`);force=document.getElementById(`force`);forceVal=document.getElementById(`force-value`);forceRadius=document.getElementById(`force-radius`);forceRadiusVal=document.getElementById(`force-radius-value`);matSel=document.getElementById(`mat`);constructor(){this.ballCount.value=`100`,this.speed.value=`1`,this.speedVal.textContent=this.speed.value,this.speed.addEventListener(`input`,()=>{this.speedVal.textContent=this.speed.value}),this.variation.value=`6`,this.variationVal.textContent=this.variation.value,this.variation.addEventListener(`change`,()=>{this.variationVal.textContent=this.variation.value}),this.force.value=`1`,this.forceVal.textContent=this.force.value,this.force.addEventListener(`input`,()=>{this.forceVal.textContent=this.force.value}),this.forceRadius.value=`70`,this.forceRadiusVal.textContent=this.forceRadius.value,this.forceRadius.addEventListener(`input`,()=>{this.forceRadiusVal.textContent=this.forceRadius.value}),this.matSel.value=`10`}exportState(){return{count:Math.max(1,Math.min(1e4,+this.ballCount.value)),speed:+this.speedVal.textContent,variation:+this.variationVal.textContent,force:+this.forceVal.textContent,forceRadius:+this.forceRadiusVal.textContent,mat:+this.matSel.value}}},u=class{scale=document.getElementById(`video-scale`);scaleVal=document.getElementById(`vs-value`);scene=document.getElementById(`scenes`);constructor(){this.scale.value=`0.5`,this.scaleVal.textContent=this.scale.value,this.scale.addEventListener(`input`,()=>{this.scaleVal.textContent=this.scale.value}),this.scene.value=`1`}exportState(){return{scale:+this.scaleVal.textContent,scene:+this.scene.value}}},d=class{scale=document.getElementById(`text-scale`);scaleVal=document.getElementById(`ts-value`);constructor(){this.scale.value=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?`1.7`:`1`,this.scaleVal.textContent=this.scale.value,this.scale.addEventListener(`input`,()=>{this.scaleVal.textContent=this.scale.value})}exportState(){return{scale:+this.scaleVal.textContent}}},f,p,m,h,g,_={},v=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function b(e,t){for(var n in t)e[n]=t[n];return e}function x(e){var t=e.parentNode;t&&t.removeChild(e)}function S(e,t,n){var r,i,a,o,s=arguments;if(t=b({},t),arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(s[r]);if(n!=null&&(t.children=n),e!=null&&e.defaultProps!=null)for(i in e.defaultProps)t[i]===void 0&&(t[i]=e.defaultProps[i]);return o=t.key,(a=t.ref)!=null&&delete t.ref,o!=null&&delete t.key,C(e,t,o,a)}function C(e,t,n,r){var i={type:e,props:t,key:n,ref:r,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return f.vnode&&f.vnode(i),i}function w(e){return e.children}function T(e){if(e==null||typeof e==`boolean`)return null;if(typeof e==`string`||typeof e==`number`)return C(null,e,null,null);if(e.__e!=null||e.__c!=null){var t=C(e.type,e.props,e.key,null);return t.__e=e.__e,t}return e}function E(e,t){this.props=e,this.context=t}function D(e,t){if(t==null)return e.__p?D(e.__p,e.__p.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?D(e):null}function O(e){var t,n;if((e=e.__p)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return O(e)}}function k(e){(!e.__d&&(e.__d=!0)&&p.push(e)===1||h!==f.debounceRendering)&&(h=f.debounceRendering,(f.debounceRendering||m)(A))}function A(){var e,t,n,r,i,a,o,s;for(p.sort(function(e,t){return t.__v.__b-e.__v.__b});e=p.pop();)e.__d&&(n=void 0,r=void 0,a=(i=(t=e).__v).__e,o=t.__P,s=t.u,t.u=!1,o&&(n=[],r=ne(o,i,b({},i),t.__n,o.ownerSVGElement!==void 0,null,n,s,a??D(i)),re(n,i),r!=a&&O(i)))}function j(e,t,n,r,i,a,o,s,c){var l,u,d,f,p,m,h,g=n&&n.__k||v,y=g.length;if(s==_&&(s=a==null?y?D(n,0):null:a[0]),l=0,t.__k=ee(t.__k,function(n){if(n!=null){if(n.__p=t,n.__b=t.__b+1,(d=g[l])===null||d&&n.key==d.key&&n.type===d.type)g[l]=void 0;else for(u=0;u<y;u++){if((d=g[u])&&n.key==d.key&&n.type===d.type){g[u]=void 0;break}d=null}if(f=ne(e,n,d||=_,r,i,a,o,null,s,c),(u=n.ref)&&d.ref!=u&&(h||=[]).push(u,n.__c||f,n),f!=null){if(m??=f,n.l!=null)f=n.l,n.l=null;else if(a==d||f!=s||f.parentNode==null){n:if(s==null||s.parentNode!==e)e.appendChild(f);else{for(p=s,u=0;(p=p.nextSibling)&&u<y;u+=2)if(p==f)break n;e.insertBefore(f,s)}t.type==`option`&&(e.value=``)}s=f.nextSibling,typeof t.type==`function`&&(t.l=f)}}return l++,n}),t.__e=m,a!=null&&typeof t.type!=`function`)for(l=a.length;l--;)a[l]!=null&&x(a[l]);for(l=y;l--;)g[l]!=null&&ae(g[l],g[l]);if(h)for(l=0;l<h.length;l++)ie(h[l],h[++l],h[++l])}function ee(e,t,n){if(n??=[],e==null||typeof e==`boolean`)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)ee(e[r],t,n);else n.push(t?t(T(e)):e);return n}function M(e,t,n,r,i){for(var a in n)a in t||te(e,a,null,n[a],r);for(a in t)i&&typeof t[a]!=`function`||a===`value`||a===`checked`||n[a]===t[a]||te(e,a,t[a],n[a],r)}function N(e,t,n){t[0]===`-`?e.setProperty(t,n):e[t]=typeof n==`number`&&!1===y.test(t)?n+`px`:n??``}function te(e,t,n,r,i){var a,o,s,c,l;if(!((t=i?t===`className`?`class`:t:t===`class`?`className`:t)===`key`||t===`children`))if(t===`style`)if(a=e.style,typeof n==`string`)a.cssText=n;else{if(typeof r==`string`&&(a.cssText=``,r=null),r)for(o in r)n&&o in n||N(a,o,``);if(n)for(s in n)r&&n[s]===r[s]||N(a,s,n[s])}else t[0]===`o`&&t[1]===`n`?(c=t!==(t=t.replace(/Capture$/,``)),l=t.toLowerCase(),t=(l in e?l:t).slice(2),n?(r||e.addEventListener(t,P,c),(e.t||={})[t]=n):e.removeEventListener(t,P,c)):t!==`list`&&t!==`tagName`&&t!==`form`&&!i&&t in e?e[t]=n??``:typeof n!=`function`&&t!==`dangerouslySetInnerHTML`&&(t===(t=t.replace(/^xlink:?/,``))?n==null||!1===n?e.removeAttribute(t):e.setAttribute(t,n):n==null||!1===n?e.removeAttributeNS(`http://www.w3.org/1999/xlink`,t.toLowerCase()):e.setAttributeNS(`http://www.w3.org/1999/xlink`,t.toLowerCase(),n))}function P(e){return this.t[e.type](f.event?f.event(e):e)}function ne(e,t,n,r,i,a,o,s,c,l){var u,d,p,m,h,g,_,v,y,x,S=t.type;if(t.constructor!==void 0)return null;(u=f.__b)&&u(t);try{n:if(typeof S==`function`){if(v=t.props,y=(u=S.contextType)&&r[u.__c],x=u?y?y.props.value:u.__p:r,n.__c?_=(d=t.__c=n.__c).__p=d.__E:(`prototype`in S&&S.prototype.render?t.__c=d=new S(v,x):(t.__c=d=new E(v,x),d.constructor=S,d.render=oe),y&&y.sub(d),d.props=v,d.state||={},d.context=x,d.__n=r,p=d.__d=!0,d.__h=[]),d.__s??=d.state,S.getDerivedStateFromProps!=null&&b(d.__s==d.state?d.__s=b({},d.__s):d.__s,S.getDerivedStateFromProps(v,d.__s)),p)S.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&o.push(d);else{if(S.getDerivedStateFromProps==null&&s==null&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(v,x),!s&&d.shouldComponentUpdate!=null&&!1===d.shouldComponentUpdate(v,d.__s,x)){for(d.props=v,d.state=d.__s,d.__d=!1,d.__v=t,t.__e=c==null?null:c===n.__e?n.__e:c,t.__k=n.__k,u=0;u<t.__k.length;u++)t.__k[u]&&(t.__k[u].__p=t);break n}d.componentWillUpdate!=null&&d.componentWillUpdate(v,d.__s,x)}for(m=d.props,h=d.state,d.context=x,d.props=v,d.state=d.__s,(u=f.__r)&&u(t),d.__d=!1,d.__v=t,d.__P=e,u=d.render(d.props,d.state,d.context),t.__k=ee(u!=null&&u.type==w&&u.key==null?u.props.children:u),d.getChildContext!=null&&(r=b(b({},r),d.getChildContext())),p||d.getSnapshotBeforeUpdate==null||(g=d.getSnapshotBeforeUpdate(m,h)),j(e,t,n,r,i,a,o,c,l),d.base=t.__e;u=d.__h.pop();)d.__s&&(d.state=d.__s),u.call(d);p||m==null||d.componentDidUpdate==null||d.componentDidUpdate(m,h,g),_&&(d.__E=d.__p=null)}else t.__e=F(n.__e,t,n,r,i,a,o,l);(u=f.diffed)&&u(t)}catch(e){f.__e(e,t,n)}return t.__e}function re(e,t){for(var n;n=e.pop();)try{n.componentDidMount()}catch(e){f.__e(e,n.__v)}f.__c&&f.__c(t)}function F(e,t,n,r,i,a,o,s){var c,l,u,d,f=n.props,p=t.props;if(i=t.type===`svg`||i,e==null&&a!=null){for(c=0;c<a.length;c++)if((l=a[c])!=null&&(t.type===null?l.nodeType===3:l.localName===t.type)){e=l,a[c]=null;break}}if(e==null){if(t.type===null)return document.createTextNode(p);e=i?document.createElementNS(`http://www.w3.org/2000/svg`,t.type):document.createElement(t.type),a=null}return t.type===null?f!==p&&(a!=null&&(a[a.indexOf(e)]=null),e.data=p):t!==n&&(a!=null&&(a=v.slice.call(e.childNodes)),u=(f=n.props||_).dangerouslySetInnerHTML,d=p.dangerouslySetInnerHTML,s||(d||u)&&(d&&u&&d.__html==u.__html||(e.innerHTML=d&&d.__html||``)),M(e,p,f,i,s),t.__k=t.props.children,d||j(e,t,n,r,t.type!==`foreignObject`&&i,a,o,_,s),s||(`value`in p&&p.value!==void 0&&p.value!==e.value&&(e.value=p.value==null?``:p.value),`checked`in p&&p.checked!==void 0&&p.checked!==e.checked&&(e.checked=p.checked))),e}function ie(e,t,n){try{typeof e==`function`?e(t):e.current=t}catch(e){f.__e(e,n)}}function ae(e,t,n){var r,i,a;if(f.unmount&&f.unmount(e),(r=e.ref)&&ie(r,null,t),n||typeof e.type==`function`||(n=(i=e.__e)!=null),e.__e=e.l=null,(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){f.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&ae(r[a],t,n);i!=null&&x(i)}function oe(e,t,n){return this.constructor(e,n)}function I(e,t,n){var r,i,a;f.__p&&f.__p(e,t),i=(r=n===g)?null:n&&n.__k||t.__k,e=S(w,null,[e]),a=[],ne(t,r?t.__k=e:(n||t).__k=e,i||_,_,t.ownerSVGElement!==void 0,n&&!r?[n]:i?null:v.slice.call(t.childNodes),a,!1,n||_,r),re(a,e)}f={},E.prototype.setState=function(e,t){var n=this.__s!==this.state&&this.__s||(this.__s=b({},this.state));(typeof e!=`function`||(e=e(n,this.props)))&&b(n,e),e!=null&&this.__v&&(this.u=!1,t&&this.__h.push(t),k(this))},E.prototype.forceUpdate=function(e){this.__v&&(e&&this.__h.push(e),this.u=!0,k(this))},E.prototype.render=w,p=[],m=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,h=f.debounceRendering,f.__e=function(e,t,n){for(var r;t=t.__p;)if((r=t.__c)&&!r.__p)try{if(r.constructor&&r.constructor.getDerivedStateFromError!=null)r.setState(r.constructor.getDerivedStateFromError(e));else{if(r.componentDidCatch==null)continue;r.componentDidCatch(e)}return k(r.__E=r)}catch(t){e=t}throw e},g=_;function se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return t&&se(e.prototype,t),n&&se(e,n),e}function R(){return R=Object.assign||function(e){for(var t=arguments,n=1;n<arguments.length;n++){var r=t[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},R.apply(this,arguments)}var z=`(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,B=`[\\s|\\(]+(`+z+`)[,|\\s]+(`+z+`)[,|\\s]+(`+z+`)\\s*\\)?`,V=`[\\s|\\(]+(`+z+`)[,|\\s]+(`+z+`)[,|\\s]+(`+z+`)[,|\\s]+(`+z+`)\\s*\\)?`,ce=RegExp(`rgb`+B),le=RegExp(`rgba`+V),ue=RegExp(`hsl`+B),de=RegExp(`hsla`+V),fe=`^(?:#?|0x?)`,H=`([0-9a-fA-F]{1})`,pe=`([0-9a-fA-F]{2})`,U=RegExp(fe+H+H+H+`$`),me=RegExp(fe+H+H+H+H+`$`),W=RegExp(fe+pe+pe+pe+`$`),he=RegExp(fe+pe+pe+pe+pe+`$`),G=2e3,K=4e4,ge=Math.log,_e=Math.round,ve=Math.floor;function ye(e,t,n){return Math.min(Math.max(e,t),n)}function be(e,t){var n=e.indexOf(`%`)>-1,r=parseFloat(e);return n?t/100*r:r}function xe(e){return parseInt(e,16)}function Se(e){return e.toString(16).padStart(2,`0`)}var Ce=function(){function e(e,t){this.$={h:0,s:0,v:0,a:1},e&&this.set(e),this.onChange=t,this.initialValue=R({},this.$)}var t=e.prototype;return t.set=function(t){if(typeof t==`string`)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t)?this.hexString=t:/^rgba?/.test(t)?this.rgbString=t:/^hsla?/.test(t)&&(this.hslString=t);else if(typeof t==`object`)t instanceof e?this.hsva=t.hsva:`r`in t&&`g`in t&&`b`in t?this.rgb=t:`h`in t&&`s`in t&&`v`in t?this.hsv=t:`h`in t&&`s`in t&&`l`in t?this.hsl=t:`kelvin`in t&&(this.kelvin=t.kelvin);else throw Error(`Invalid color value`)},t.setChannel=function(e,t,n){var r;this[e]=R({},this[e],(r={},r[t]=n,r))},t.reset=function(){this.hsva=this.initialValue},t.clone=function(){return new e(this)},t.unbind=function(){this.onChange=void 0},e.hsvToRgb=function(e){var t=e.h/60,n=e.s/100,r=e.v/100,i=ve(t),a=t-i,o=r*(1-n),s=r*(1-a*n),c=r*(1-(1-a)*n),l=i%6,u=[r,s,o,o,c,r][l],d=[c,r,r,s,o,o][l],f=[o,o,c,r,r,s][l];return{r:ye(u*255,0,255),g:ye(d*255,0,255),b:ye(f*255,0,255)}},e.rgbToHsv=function(e){var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=i-a,s=0,c=i,l=i===0?0:o/i;switch(i){case a:s=0;break;case t:s=(n-r)/o+(n<r?6:0);break;case n:s=(r-t)/o+2;break;case r:s=(t-n)/o+4;break}return{h:s*60%360,s:ye(l*100,0,100),v:ye(c*100,0,100)}},e.hsvToHsl=function(e){var t=e.s/100,n=e.v/100,r=(2-t)*n,i=r<=1?r:2-r,a=i<1e-9?0:t*n/i;return{h:e.h,s:ye(a*100,0,100),l:ye(r*50,0,100)}},e.hslToHsv=function(e){var t=e.l*2,n=e.s*(t<=100?t:200-t)/100,r=t+n<1e-9?0:2*n/(t+n);return{h:e.h,s:ye(r*100,0,100),v:ye((t+n)/2,0,100)}},e.kelvinToRgb=function(e){var t=e/100,n,r,i;return t<66?(n=255,r=-155.25485562709179-.44596950469579133*(r=t-2)+104.49216199393888*ge(r),i=t<20?0:-254.76935184120902+.8274096064007395*(i=t-10)+115.67994401066147*ge(i)):(n=351.97690566805693+.114206453784165*(n=t-55)-40.25366309332127*ge(n),r=325.4494125711974+.07943456536662342*(r=t-50)-28.0852963507957*ge(r),i=255),{r:ye(ve(n),0,255),g:ye(ve(r),0,255),b:ye(ve(i),0,255)}},e.rgbToKelvin=function(t){for(var n=t.r,r=t.b,i=.4,a=G,o=K,s;o-a>i;){s=(o+a)*.5;var c=e.kelvinToRgb(s);c.b/c.r>=r/n?o=s:a=s}return s},L(e,[{key:`hsv`,get:function(){var e=this.$;return{h:e.h,s:e.s,v:e.v}},set:function(e){var t=this.$;if(e=R({},t,e),this.onChange){var n={h:!1,v:!1,s:!1,a:!1};for(var r in t)n[r]=e[r]!=t[r];this.$=e,(n.h||n.s||n.v||n.a)&&this.onChange(this,n)}else this.$=e}},{key:`hsva`,get:function(){return R({},this.$)},set:function(e){this.hsv=e}},{key:`hue`,get:function(){return this.$.h},set:function(e){this.hsv={h:e}}},{key:`saturation`,get:function(){return this.$.s},set:function(e){this.hsv={s:e}}},{key:`value`,get:function(){return this.$.v},set:function(e){this.hsv={v:e}}},{key:`alpha`,get:function(){return this.$.a},set:function(e){this.hsv=R({},this.hsv,{a:e})}},{key:`kelvin`,get:function(){return e.rgbToKelvin(this.rgb)},set:function(t){this.rgb=e.kelvinToRgb(t)}},{key:`red`,get:function(){return this.rgb.r},set:function(e){this.rgb=R({},this.rgb,{r:e})}},{key:`green`,get:function(){return this.rgb.g},set:function(e){this.rgb=R({},this.rgb,{g:e})}},{key:`blue`,get:function(){return this.rgb.b},set:function(e){this.rgb=R({},this.rgb,{b:e})}},{key:`rgb`,get:function(){var t=e.hsvToRgb(this.$),n=t.r,r=t.g,i=t.b;return{r:_e(n),g:_e(r),b:_e(i)}},set:function(t){this.hsv=R({},e.rgbToHsv(t),{a:t.a===void 0?1:t.a})}},{key:`rgba`,get:function(){return R({},this.rgb,{a:this.alpha})},set:function(e){this.rgb=e}},{key:`hsl`,get:function(){var t=e.hsvToHsl(this.$),n=t.h,r=t.s,i=t.l;return{h:_e(n),s:_e(r),l:_e(i)}},set:function(t){this.hsv=R({},e.hslToHsv(t),{a:t.a===void 0?1:t.a})}},{key:`hsla`,get:function(){return R({},this.hsl,{a:this.alpha})},set:function(e){this.hsl=e}},{key:`rgbString`,get:function(){var e=this.rgb;return`rgb(`+e.r+`, `+e.g+`, `+e.b+`)`},set:function(e){var t,n,r,i,a=1;if((t=ce.exec(e))?(n=be(t[1],255),r=be(t[2],255),i=be(t[3],255)):(t=le.exec(e))&&(n=be(t[1],255),r=be(t[2],255),i=be(t[3],255),a=be(t[4],1)),t)this.rgb={r:n,g:r,b:i,a};else throw Error(`Invalid rgb string`)}},{key:`rgbaString`,get:function(){var e=this.rgba;return`rgba(`+e.r+`, `+e.g+`, `+e.b+`, `+e.a+`)`},set:function(e){this.rgbString=e}},{key:`hexString`,get:function(){var e=this.rgb;return`#`+Se(e.r)+Se(e.g)+Se(e.b)},set:function(e){var t,n,r,i,a=255;if((t=U.exec(e))?(n=xe(t[1])*17,r=xe(t[2])*17,i=xe(t[3])*17):(t=me.exec(e))?(n=xe(t[1])*17,r=xe(t[2])*17,i=xe(t[3])*17,a=xe(t[4])*17):(t=W.exec(e))?(n=xe(t[1]),r=xe(t[2]),i=xe(t[3])):(t=he.exec(e))&&(n=xe(t[1]),r=xe(t[2]),i=xe(t[3]),a=xe(t[4])),t)this.rgb={r:n,g:r,b:i,a:a/255};else throw Error(`Invalid hex string`)}},{key:`hex8String`,get:function(){var e=this.rgba;return`#`+Se(e.r)+Se(e.g)+Se(e.b)+Se(ve(e.a*255))},set:function(e){this.hexString=e}},{key:`hslString`,get:function(){var e=this.hsl;return`hsl(`+e.h+`, `+e.s+`%, `+e.l+`%)`},set:function(e){var t,n,r,i,a=1;if((t=ue.exec(e))?(n=be(t[1],360),r=be(t[2],100),i=be(t[3],100)):(t=de.exec(e))&&(n=be(t[1],360),r=be(t[2],100),i=be(t[3],100),a=be(t[4],1)),t)this.hsl={h:n,s:r,l:i,a};else throw Error(`Invalid hsl string`)}},{key:`hslaString`,get:function(){var e=this.hsla;return`hsla(`+e.h+`, `+e.s+`%, `+e.l+`%, `+e.a+`)`},set:function(e){this.hslString=e}}]),e}(),we={sliderShape:`bar`,sliderType:`value`,minTemperature:2200,maxTemperature:11e3};function Te(e){var t=e.width,n=e.sliderSize,r=e.borderWidth,i=e.handleRadius,a=e.padding,o=e.sliderShape,s=e.layoutDirection===`horizontal`;return n??=a*2+i*2,o===`circle`?{handleStart:e.padding+e.handleRadius,handleRange:t-a*2-i*2,width:t,height:t,cx:t/2,cy:t/2,radius:t/2-r/2}:{handleStart:n/2,handleRange:t-n,radius:n/2,x:0,y:0,width:s?n:t,height:s?t:n}}function Ee(e,t){var n=t.hsva,r=t.rgb;switch(e.sliderType){case`red`:return r.r/2.55;case`green`:return r.g/2.55;case`blue`:return r.b/2.55;case`alpha`:return n.a*100;case`kelvin`:var i=e.minTemperature,a=e.maxTemperature-i,o=(t.kelvin-i)/a*100;return Math.max(0,Math.min(o,100));case`hue`:return n.h/=3.6;case`saturation`:return n.s;default:return n.v}}function De(e,t,n){var r=Te(e),i=r.handleRange,a=r.handleStart,o=e.layoutDirection===`horizontal`?-1*n+i+a:t-a;o=Math.max(Math.min(o,i),0);var s=Math.round(100/i*o);switch(e.sliderType){case`kelvin`:var c=e.minTemperature;return c+(e.maxTemperature-c)*(s/100);case`alpha`:return s/100;case`hue`:return s*3.6;case`red`:case`blue`:case`green`:return s*2.55;default:return s}}function Oe(e,t){var n=Te(e),r=n.width,i=n.height,a=n.handleRange,o=n.handleStart,s=e.layoutDirection===`horizontal`,c=Ee(e,t),l=s?r/2:i/2,u=o+c/100*a;return s&&(u=-1*u+a+o*2),{x:s?l:u,y:s?u:l}}function ke(e,t){var n=t.hsv,r=t.rgb;switch(e.sliderType){case`red`:return[[0,`rgb(0,`+r.g+`,`+r.b+`)`],[100,`rgb(255,`+r.g+`,`+r.b+`)`]];case`green`:return[[0,`rgb(`+r.r+`,0,`+r.b+`)`],[100,`rgb(`+r.r+`,255,`+r.b+`)`]];case`blue`:return[[0,`rgb(`+r.r+`,`+r.g+`,0)`],[100,`rgb(`+r.r+`,`+r.g+`,255)`]];case`alpha`:return[[0,`rgba(`+r.r+`,`+r.g+`,`+r.b+`,0)`],[100,`rgb(`+r.r+`,`+r.g+`,`+r.b+`)`]];case`kelvin`:for(var i=[],a=e.minTemperature,o=e.maxTemperature,s=8,c=o-a,l=a,u=0;l<o;l+=c/s,u+=1){var d=Ce.kelvinToRgb(l),f=d.r,p=d.g,m=d.b;i.push([100/s*u,`rgb(`+f+`,`+p+`,`+m+`)`])}return i;case`hue`:return[[0,`#f00`],[16.666,`#ff0`],[33.333,`#0f0`],[50,`#0ff`],[66.666,`#00f`],[83.333,`#f0f`],[100,`#f00`]];case`saturation`:var h=Ce.hsvToHsl({h:n.h,s:0,v:n.v}),g=Ce.hsvToHsl({h:n.h,s:100,v:n.v});return[[0,`hsl(`+h.h+`,`+h.s+`%,`+h.l+`%)`],[100,`hsl(`+g.h+`,`+g.s+`%,`+g.l+`%)`]];default:var _=Ce.hsvToHsl({h:n.h,s:n.s,v:100});return[[0,`#000`],[100,`hsl(`+_.h+`,`+_.s+`%,`+_.l+`%)`]]}}var Ae=Math.PI*2,je=function(e,t){return(e%t+t)%t},Me=function(e,t){return Math.sqrt(e*e+t*t)};function Ne(e){return e.width/2-e.padding-e.handleRadius-e.borderWidth}function Pe(e,t,n){var r=Fe(e),i=r.cx,a=r.cy,o=e.width/2;return Me(i-t,a-n)<o}function Fe(e){var t=e.width/2;return{width:e.width,radius:t-e.borderWidth,cx:t,cy:t}}function Ie(e,t,n){var r=e.wheelAngle,i=e.wheelDirection;return n&&i===`clockwise`?t=r+t:i===`clockwise`?t=360-r+t:n&&i===`anticlockwise`?t=r+180-t:i===`anticlockwise`&&(t=r-t),je(t,360)}function q(e,t){var n=t.hsv,r=Fe(e),i=r.cx,a=r.cy,o=Ne(e),s=(180+Ie(e,n.h,!0))*(Ae/360),c=n.s/100*o,l=e.wheelDirection===`clockwise`?-1:1;return{x:i+c*Math.cos(s)*l,y:a+c*Math.sin(s)*l}}function Le(e,t,n){var r=Fe(e),i=r.cx,a=r.cy,o=Ne(e);t=i-t,n=a-n;var s=Ie(e,Math.atan2(-n,-t)*(360/Ae)),c=Math.min(Me(t,n),o);return{h:Math.round(s),s:Math.round(100/o*c)}}function Re(e){var t=e.width,n=e.boxHeight,r=e.padding,i=e.handleRadius;return{width:t,height:n??t,radius:r+i}}function ze(e,t,n){var r=Re(e),i=r.width,a=r.height,o=r.radius,s=o,c=i-o*2,l=a-o*2,u=(t-s)/c*100,d=(n-s)/l*100;return{s:Math.max(0,Math.min(u,100)),v:Math.max(0,Math.min(100-d,100))}}function Be(e,t){var n=Re(e),r=n.width,i=n.height,a=n.radius,o=t.hsv,s=a,c=r-a*2,l=i-a*2;return{x:s+o.s/100*c,y:s+(l-o.v/100*l)}}function Ve(e,t){return[[[0,`#fff`],[100,`hsl(`+t.hue+`,100%,50%)`]],[[0,`rgba(0,0,0,0)`],[100,`#000`]]]}var He;function Ue(e){He||=document.getElementsByTagName(`base`);var t=window.navigator.userAgent,n=/^((?!chrome|android).)*safari/i.test(t),r=/iPhone|iPod|iPad/i.test(t),i=window.location;return(n||r)&&He.length>0?i.protocol+`//`+i.host+i.pathname+i.search+e:e}function We(e,t,n,r){for(var i=0;i<r.length;i++){var a=r[i].x-t,o=r[i].y-n;if(Math.sqrt(a*a+o*o)<e.handleRadius)return i}return null}function Ge(e){return{boxSizing:`border-box`,border:e.borderWidth+`px solid `+e.borderColor}}function Ke(e,t,n){return e+`-gradient(`+t+`, `+n.map(function(e){var t=e[0];return e[1]+` `+t+`%`}).join(`,`)+`)`}function qe(e){return typeof e==`string`?e:e+`px`}var Je={width:300,height:300,color:`#fff`,colors:[],padding:6,layoutDirection:`vertical`,borderColor:`#fff`,borderWidth:0,handleRadius:8,activeHandleRadius:null,handleSvg:null,handleProps:{x:0,y:0},wheelLightness:!0,wheelAngle:0,wheelDirection:`anticlockwise`,sliderSize:null,sliderMargin:12,boxHeight:null},Ye=[`mousemove`,`touchmove`,`mouseup`,`touchend`],Xe=function(e){function t(t){e.call(this,t),this.uid=(Math.random()+1).toString(36).substring(5)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(e){var t=this.handleEvent.bind(this),n={onMouseDown:t,ontouchstart:t},r=e.layoutDirection===`horizontal`,i=e.margin===null?e.sliderMargin:e.margin,a={overflow:`visible`,display:r?`inline-block`:`block`};return e.index>0&&(a[r?`marginLeft`:`marginTop`]=i),S(w,null,e.children(this.uid,n,a))},t.prototype.handleEvent=function(e){var t=this,n=this.props.onInput,r=this.base.getBoundingClientRect();e.preventDefault();var i=e.touches?e.changedTouches[0]:e,a=i.clientX-r.left,o=i.clientY-r.top;switch(e.type){case`mousedown`:case`touchstart`:n(a,o,0)!==!1&&Ye.forEach(function(e){document.addEventListener(e,t,{passive:!1})});break;case`mousemove`:case`touchmove`:n(a,o,1);break;case`mouseup`:case`touchend`:n(a,o,2),Ye.forEach(function(e){document.removeEventListener(e,t,{passive:!1})});break}},t}(E);function Ze(e){var t=e.r,n=e.url,r=t,i=t;return S(`svg`,{className:`IroHandle IroHandle--`+e.index+` `+(e.isActive?`IroHandle--isActive`:``),style:{"-webkit-tap-highlight-color":`rgba(0, 0, 0, 0);`,transform:`translate(`+qe(e.x)+`, `+qe(e.y)+`)`,willChange:`transform`,top:qe(-t),left:qe(-t),width:qe(t*2),height:qe(t*2),position:`absolute`,overflow:`visible`}},n&&S(`use`,Object.assign({xlinkHref:Ue(n)},e.props)),!n&&S(`circle`,{cx:r,cy:i,r:t,fill:`none`,"stroke-width":2,stroke:`#000`}),!n&&S(`circle`,{cx:r,cy:i,r:t-2,fill:e.fill,"stroke-width":2,stroke:`#fff`}))}Ze.defaultProps={fill:`none`,x:0,y:0,r:8,url:null,props:{x:0,y:0}};function Qe(e){var t=e.activeIndex,n=t!==void 0&&t<e.colors.length?e.colors[t]:e.color,r=Te(e),i=r.width,a=r.height,o=r.radius,s=Oe(e,n),c=ke(e,n);function l(t,r,i){var a=De(e,t,r);e.parent.inputActive=!0,n[e.sliderType]=a,e.onInput(i,e.id)}return S(Xe,Object.assign({},e,{onInput:l}),function(t,r,l){return S(`div`,Object.assign({},r,{className:`IroSlider`,style:Object.assign({},{position:`relative`,width:qe(i),height:qe(a),borderRadius:qe(o),background:`conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)`,backgroundSize:`8px 8px`},l)}),S(`div`,{className:`IroSliderGradient`,style:Object.assign({},{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,borderRadius:qe(o),background:Ke(`linear`,e.layoutDirection===`horizontal`?`to top`:`to right`,c)},Ge(e))}),S(Ze,{isActive:!0,index:n.index,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:s.x,y:s.y}))})}Qe.defaultProps=Object.assign({},we);function $e(e){var t=Re(e),n=t.width,r=t.height,i=t.radius,a=e.colors,o=e.parent,s=e.activeIndex,c=s!==void 0&&s<e.colors.length?e.colors[s]:e.color,l=Ve(e,c),u=a.map(function(t){return Be(e,t)});function d(t,n,r){if(r===0){var i=We(e,t,n,u);i===null?(o.inputActive=!0,c.hsv=ze(e,t,n),e.onInput(r,e.id)):o.setActiveColor(i)}else r===1&&(o.inputActive=!0,c.hsv=ze(e,t,n));e.onInput(r,e.id)}return S(Xe,Object.assign({},e,{onInput:d}),function(t,o,s){return S(`div`,Object.assign({},o,{className:`IroBox`,style:Object.assign({},{width:qe(n),height:qe(r),position:`relative`},s)}),S(`div`,{className:`IroBox`,style:Object.assign({},{width:`100%`,height:`100%`,borderRadius:qe(i)},Ge(e),{background:Ke(`linear`,`to bottom`,l[1])+`,`+Ke(`linear`,`to right`,l[0])})}),a.filter(function(e){return e!==c}).map(function(t){return S(Ze,{isActive:!1,index:t.index,fill:t.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:u[t.index].x,y:u[t.index].y})}),S(Ze,{isActive:!0,index:c.index,fill:c.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:u[c.index].x,y:u[c.index].y}))})}var et=`conic-gradient(red, yellow, lime, aqua, blue, magenta, red)`,tt=`conic-gradient(red, magenta, blue, aqua, lime, yellow, red)`;function nt(e){var t=Fe(e).width,n=e.colors;e.borderWidth;var r=e.parent,i=e.color,a=i.hsv,o=n.map(function(t){return q(e,t)}),s={position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,borderRadius:`50%`,boxSizing:`border-box`};function c(t,n,a){if(a===0){if(!Pe(e,t,n))return!1;var s=We(e,t,n,o);s===null?(r.inputActive=!0,i.hsv=Le(e,t,n),e.onInput(a,e.id)):r.setActiveColor(s)}else a===1&&(r.inputActive=!0,i.hsv=Le(e,t,n));e.onInput(a,e.id)}return S(Xe,Object.assign({},e,{onInput:c}),function(r,c,l){return S(`div`,Object.assign({},c,{className:`IroWheel`,style:Object.assign({},{width:qe(t),height:qe(t),position:`relative`},l)}),S(`div`,{className:`IroWheelHue`,style:Object.assign({},s,{transform:`rotateZ(`+(e.wheelAngle+90)+`deg)`,background:e.wheelDirection===`clockwise`?et:tt})}),S(`div`,{className:`IroWheelSaturation`,style:Object.assign({},s,{background:`radial-gradient(circle closest-side, #fff, transparent)`})}),e.wheelLightness&&S(`div`,{className:`IroWheelLightness`,style:Object.assign({},s,{background:`#000`,opacity:1-a.v/100})}),S(`div`,{className:`IroWheelBorder`,style:Object.assign({},s,Ge(e))}),n.filter(function(e){return e!==i}).map(function(t){return S(Ze,{isActive:!1,index:t.index,fill:t.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:o[t.index].x,y:o[t.index].y})}),S(Ze,{isActive:!0,index:i.index,fill:i.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:o[i.index].x,y:o[i.index].y}))})}function rt(e){var t=function(t,n){var r,i=document.createElement(`div`);I(S(e,Object.assign({},{ref:function(e){return r=e}},n)),i);function a(){var e=t instanceof Element?t:document.querySelector(t);e.appendChild(r.base),r.onMount(e)}return document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,a):a(),r};return t.prototype=e.prototype,Object.assign(t,e),t.__component=e,t}var it=function(e){function t(t){var n=this;e.call(this,t),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=t.id,(t.colors.length>0?t.colors:[t.color]).forEach(function(e){return n.addColor(e)}),this.setActiveColor(0),this.state=Object.assign({},t,{color:this.color,colors:this.colors,layout:t.layout})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.addColor=function(e,t){t===void 0&&(t=this.colors.length);var n=new Ce(e,this.onColorChange.bind(this));this.colors.splice(t,0,n),this.colors.forEach(function(e,t){return e.index=t}),this.state&&this.setState({colors:this.colors}),this.deferredEmit(`color:init`,n)},t.prototype.removeColor=function(e){var t=this.colors.splice(e,1)[0];t.unbind(),this.colors.forEach(function(e,t){return e.index=t}),this.state&&this.setState({colors:this.colors}),t.index===this.color.index&&this.setActiveColor(0),this.emit(`color:remove`,t)},t.prototype.setActiveColor=function(e){this.color=this.colors[e],this.state&&this.setState({color:this.color}),this.emit(`color:setActive`,this.color)},t.prototype.setColors=function(e,t){var n=this;t===void 0&&(t=0),this.colors.forEach(function(e){return e.unbind()}),this.colors=[],e.forEach(function(e){return n.addColor(e)}),this.setActiveColor(t),this.emit(`color:setAll`,this.colors)},t.prototype.on=function(e,t){var n=this,r=this.events;(Array.isArray(e)?e:[e]).forEach(function(e){(r[e]||(r[e]=[])).push(t),n.deferredEvents[e]&&(n.deferredEvents[e].forEach(function(e){t.apply(null,e)}),n.deferredEvents[e]=[])})},t.prototype.off=function(e,t){var n=this;(Array.isArray(e)?e:[e]).forEach(function(e){var r=n.events[e];r&&r.splice(r.indexOf(t),1)})},t.prototype.emit=function(e){for(var t=this,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];var i=this.activeEvents;i.hasOwnProperty(e)&&i[e]||(i[e]=!0,(this.events[e]||[]).forEach(function(e){return e.apply(t,n)}),i[e]=!1)},t.prototype.deferredEmit=function(e){for(var t,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];var i=this.deferredEvents;(t=this).emit.apply(t,[e].concat(n)),(i[e]||(i[e]=[])).push(n)},t.prototype.setOptions=function(e){this.setState(e)},t.prototype.resize=function(e){this.setOptions({width:e})},t.prototype.reset=function(){this.colors.forEach(function(e){return e.reset()}),this.setState({colors:this.colors})},t.prototype.onMount=function(e){this.el=e,this.deferredEmit(`mount`,this)},t.prototype.onColorChange=function(e,t){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit(`input:change`,e,t)),this.emit(`color:change`,e,t)},t.prototype.emitInputEvent=function(e,t){e===0?this.emit(`input:start`,this.color,t):e===1?this.emit(`input:move`,this.color,t):e===2&&this.emit(`input:end`,this.color,t)},t.prototype.render=function(e,t){var n=this,r=t.layout;if(!Array.isArray(r)){switch(r){default:r=[{component:nt},{component:Qe}]}t.transparency&&r.push({component:Qe,options:{sliderType:`alpha`}})}return S(`div`,{class:`IroColorPicker`,id:t.id,style:{display:t.display}},r.map(function(e,r){var i=e.component,a=e.options;return S(i,Object.assign({},t,a,{ref:void 0,onInput:n.emitInputEvent.bind(n),parent:n,index:r}))}))},t}(E);it.defaultProps=Object.assign({},Je,{colors:[],display:`block`,id:null,layout:`default`,margin:null});var at=rt(it),ot;(function(e){e.version=`5.5.2`,e.Color=Ce,e.ColorPicker=at,(function(e){e.h=S,e.ComponentBase=Xe,e.Handle=Ze,e.Slider=Qe,e.Wheel=nt,e.Box=$e})(e.ui||={})})(ot||={});var st=ot,ct=class{colorPicker=st.ColorPicker(`#picker`,{layoutDirection:`horizontal`,borderWidth:1,width:200,layout:[{component:st.ui.Slider,options:{sliderType:`hue`}},{component:st.ui.Slider,options:{sliderType:`alpha`}},{component:st.ui.Box,options:{}}]});size=document.getElementById(`brush-size`);sizeValue=document.getElementById(`bs-value`);clear=document.getElementById(`draw-clear`);should=!1;constructor(){this.size.value=`4`,this.sizeValue.textContent=this.size.value,this.size.addEventListener(`input`,()=>{this.sizeValue.textContent=this.size.value}),this.clear.addEventListener(`click`,()=>{this.should=!0})}exportState(){let e={color:this.colorPicker.color.rgb,alpha:this.colorPicker.color.alpha,size:+this.sizeValue.textContent,clear:this.should};return this.should=!1,e}},lt=class{state;hideSettings=document.getElementById(`hide-settings`);settings=document.getElementById(`settings`);videoInput=document.getElementById(`video-upload`);videoName=document.getElementById(`video-name`);audioInput=document.getElementById(`audio-upload`);audioName=document.getElementById(`audio-name`);mode=document.getElementById(`mode`);modePrev=``;sky=document.getElementById(`sky`);playPause=document.getElementById(`play-pause`);volume=document.getElementById(`video-volume`);volumeValue=document.getElementById(`vv-value`);radianceModifier=document.getElementById(`radiance-modifier`);radianceModifierValue=document.getElementById(`rm-value`);probeCount=document.getElementById(`probe-count`);pcValue=document.getElementById(`pc-value`);ballsPanel=new l;videoPanel=new u;lyricsPanel=new d;drawPanel=new ct;constructor(e){this.state=e;let t=this.state.settings,n=this.state.video,r=this.state.audio,i=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);this.mode.value=this.modePrev=`lyrics`,document.getElementById(this.mode.value+`-panel`).style.display=`flex`,this.sky.value=`none`,n.volume=r.volume=.5,this.volume.value=`0.5`,t.radiance=1,this.radianceModifier.value=`1`,t.probeCount=i?800:1024,this.probeCount.value=i?`800`:`1024`,this.volumeValue.textContent=this.volume.value,this.radianceModifierValue.textContent=this.radianceModifier.value,this.pcValue.textContent=this.probeCount.value,this.hideSettings.addEventListener(`click`,()=>{let e=this.settings.classList.toggle(`hidden`);this.hideSettings.textContent=e?`Show Settings`:`Hide Settings`}),this.playPause.addEventListener(`click`,()=>{this.mode.value===`lyrics`?this.mode.value===`lyrics`&&this.state.toggleAudio(!1):this.state.toggleVideo(!1)}),this.mode.addEventListener(`change`,()=>{this.mode.value!==this.modePrev&&(document.getElementById(this.modePrev+`-panel`).style.display=`none`,document.getElementById(this.mode.value+`-panel`).style.display=`flex`,this.modePrev=this.mode.value,this.mode.value!==`lyrics`&&this.state.toggleAudio(!0),this.mode.value!==`video`&&this.state.toggleVideo(!0),this.mode.value===`video`?this.radianceModifier.value=`2`:this.radianceModifier.value=`1`,this.radianceModifier.dispatchEvent(new Event(`input`)),this.state.changeMode())}),this.sky.addEventListener(`change`,()=>{this.state.changeSky(this.sky.value)}),this.volume.addEventListener(`input`,()=>{this.state.setMediaVolume(+this.volume.value),this.volumeValue.textContent=this.volume.value}),this.radianceModifier.addEventListener(`input`,()=>{t.radiance=+this.radianceModifier.value,this.radianceModifierValue.textContent=this.radianceModifier.value}),this.probeCount.addEventListener(`change`,()=>{t.probeCount=+this.probeCount.value,this.pcValue.textContent=this.probeCount.value,this.state.changeRes()}),this.videoInput.addEventListener(`change`,()=>{let e=this.videoInput.files[0],t=document.createElement(`video`);t.src=URL.createObjectURL(e),this.videoName.textContent=e.name,t.addEventListener(`canplay`,()=>{this.state.loadVideo(t)},{once:!0})}),this.audioInput.addEventListener(`change`,()=>{if(this.state.audio.loading){console.log(`cant upload while waiting response!`);return}let e=this.audioInput.files[0],t=document.createElement(`audio`),n=URL.createObjectURL(e),r=e.name.split(`-`),i=r[0].trim(),a=r[1].trim().replace(/\.[^/.]+$/,``);t.src=n,this.audioName.textContent=e.name,t.addEventListener(`canplay`,()=>{this.mode.value=`lyrics`,this.mode.dispatchEvent(new Event(`change`)),this.state.loadAudio(t,i,a)},{once:!0})})}},ut=1e3,dt=1001,ft=1002,pt=1003,mt=1004,ht=1005,gt=1006,_t=1007,vt=1008,yt=1009,bt=1010,xt=1011,St=1012,Ct=1013,wt=1014,Tt=1015,Et=1016,Dt=1017,Ot=1018,kt=1020,At=35902,jt=35899,Mt=1021,Nt=1022,Pt=1023,Ft=1026,It=1027,Lt=1028,Rt=1029,zt=1030,Bt=1031,Vt=1033,Ht=33776,Ut=33777,Wt=33778,Gt=33779,Kt=35840,qt=35841,Jt=35842,Yt=35843,Xt=36196,Zt=37492,Qt=37496,$t=37488,en=37489,tn=37490,nn=37491,rn=37808,an=37809,on=37810,sn=37811,cn=37812,ln=37813,un=37814,dn=37815,fn=37816,pn=37817,mn=37818,hn=37819,gn=37820,_n=37821,vn=36492,yn=36494,bn=36495,xn=36283,Sn=36284,Cn=36285,wn=36286,Tn=2300,En=2301,Dn=2302,On=2303,kn=2400,An=2401,jn=2402,Mn=3200,Nn=3201,Pn=`srgb`,Fn=`srgb-linear`,In=`linear`,Ln=`srgb`,Rn=7680,zn=35044,Bn=`300 es`,Vn=2e3;function Hn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Un(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Wn(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Gn(){let e=Wn(`canvas`);return e.style.display=`block`,e}var Kn={},qn=null;function Jn(...e){let t=`THREE.`+e.shift();qn?qn(`log`,t,...e):console.log(t,...e)}function Yn(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function J(...e){e=Yn(e);let t=`THREE.`+e.shift();if(qn)qn(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Y(...e){e=Yn(e);let t=`THREE.`+e.shift();if(qn)qn(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Xn(...e){let t=e.join(` `);t in Kn||(Kn[t]=!0,J(...e))}function Zn(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Qn={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},er=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),tr=Math.PI/180,nr=180/Math.PI;function rr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(er[e&255]+er[e>>8&255]+er[e>>16&255]+er[e>>24&255]+`-`+er[t&255]+er[t>>8&255]+`-`+er[t>>16&15|64]+er[t>>24&255]+`-`+er[n&63|128]+er[n>>8&255]+`-`+er[n>>16&255]+er[n>>24&255]+er[r&255]+er[r>>8&255]+er[r>>16&255]+er[r>>24&255]).toLowerCase()}function ir(e,t,n){return Math.max(t,Math.min(n,e))}function ar(e,t){return(e%t+t)%t}function or(e,t,n){return(1-n)*e+n*t}function sr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function cr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var lr=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ir(this.x,e.x,t.x),this.y=ir(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ir(this.x,e,t),this.y=ir(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ir(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ir(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ur=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:J(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ir(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ir(this.x,e.x,t.x),this.y=ir(this.y,e.y,t.y),this.z=ir(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ir(this.x,e,t),this.y=ir(this.y,e,t),this.z=ir(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ir(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dr.copy(this).projectOnVector(e),this.sub(dr)}reflect(e){return this.sub(dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ir(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dr=new X,fr=new ur,Z=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(pr.makeScale(e,t)),this}rotate(e){return this.premultiply(pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pr=new Z,mr=new Z().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hr=new Z().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gr(){let e={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=vr(e.r),e.g=vr(e.g),e.b=vr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=yr(e.r),e.g=yr(e.g),e.b=yr(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?In:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Xn(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Xn(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Fn]:{primaries:t,whitePoint:r,transfer:In,toXYZ:mr,fromXYZ:hr,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:r,transfer:Ln,toXYZ:mr,fromXYZ:hr,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),e}var _r=gr();function vr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function yr(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var br,xr=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=Wn(`canvas`)),br.width=e.width,br.height=e.height;let t=br.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=br}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Wn(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=vr(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(vr(t[e]/255)*255):t[e]=vr(t[e]);return{data:t,width:e.width,height:e.height}}else return J(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Sr=0,Cr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:Sr++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(wr(r[t].image)):e.push(wr(r[t]))}else e=wr(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function wr(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?xr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(J(`Texture: Unable to serialize Texture.`),{})}var Tr=0,Er=new X,Dr=class e extends $n{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=dt,i=dt,a=gt,o=vt,s=Pt,c=yt,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:Tr++}),this.uuid=rr(),this.name=``,this.source=new Cr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new lr(0,0),this.repeat=new lr(1,1),this.center=new lr(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Er).x}get height(){return this.source.getSize(Er).y}get depth(){return this.source.getSize(Er).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){J(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){J(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ut:e.x-=Math.floor(e.x);break;case dt:e.x=e.x<0?0:1;break;case ft:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ut:e.y-=Math.floor(e.y);break;case dt:e.y=e.y<0?0:1;break;case ft:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dr.DEFAULT_IMAGE=null,Dr.DEFAULT_MAPPING=300,Dr.DEFAULT_ANISOTROPY=1;var Or=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ir(this.x,e.x,t.x),this.y=ir(this.y,e.y,t.y),this.z=ir(this.z,e.z,t.z),this.w=ir(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ir(this.x,e,t),this.y=ir(this.y,e,t),this.z=ir(this.z,e,t),this.w=ir(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ir(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kr=class extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Or(0,0,e,t),this.scissorTest=!1,this.viewport=new Or(0,0,e,t),this.textures=[];let r=new Dr({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Cr(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ar=class extends kr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},jr=class extends Dr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pt,this.minFilter=pt,this.wrapR=dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Mr=class extends Dr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pt,this.minFilter=pt,this.wrapR=dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nr=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),i=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ir,e,Lr)}lookAt(e,t,n){let r=this.elements;return Br.subVectors(e,t),Br.lengthSq()===0&&(Br.z=1),Br.normalize(),Rr.crossVectors(n,Br),Rr.lengthSq()===0&&(Math.abs(n.z)===1?Br.x+=1e-4:Br.z+=1e-4,Br.normalize(),Rr.crossVectors(n,Br)),Rr.normalize(),zr.crossVectors(Br,Rr),r[0]=Rr.x,r[4]=zr.x,r[8]=Br.x,r[1]=Rr.y,r[5]=zr.y,r[9]=Br.y,r[2]=Rr.z,r[6]=zr.z,r[10]=Br.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*ee+c*P,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*ee+f*P,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*ee+g*P,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*ee+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Pr.set(r[0],r[1],r[2]).length(),o=Pr.set(r[4],r[5],r[6]).length(),s=Pr.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Fr.copy(this);let c=1/a,l=1/o,u=1/s;return Fr.elements[0]*=c,Fr.elements[1]*=c,Fr.elements[2]*=c,Fr.elements[4]*=l,Fr.elements[5]*=l,Fr.elements[6]*=l,Fr.elements[8]*=u,Fr.elements[9]*=u,Fr.elements[10]*=u,t.setFromRotationMatrix(Fr),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Vn,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Vn,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pr=new X,Fr=new Nr,Ir=new X(0,0,0),Lr=new X(1,1,1),Rr=new X,zr=new X,Br=new X,Vr=new Nr,Hr=new ur,Ur=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ir(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ir(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ir(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ir(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ir(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ir(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:J(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hr.setFromEuler(this),this.setFromQuaternion(Hr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ur.DEFAULT_ORDER=`XYZ`;var Wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Gr=0,Kr=new X,qr=new ur,Jr=new Nr,Yr=new X,Xr=new X,Zr=new X,Qr=new ur,$r=new X(1,0,0),ei=new X(0,1,0),ti=new X(0,0,1),ni={type:`added`},ri={type:`removed`},ii={type:`childadded`,child:null},ai={type:`childremoved`,child:null},oi=class e extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:Gr++}),this.uuid=rr(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new X,n=new Ur,r=new ur,i=new X(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nr},normalMatrix:{value:new Z}}),this.matrix=new Nr,this.matrixWorld=new Nr,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis($r,e)}rotateY(e){return this.rotateOnAxis(ei,e)}rotateZ(e){return this.rotateOnAxis(ti,e)}translateOnAxis(e,t){return Kr.copy(e).applyQuaternion(this.quaternion),this.position.add(Kr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($r,e)}translateY(e){return this.translateOnAxis(ei,e)}translateZ(e){return this.translateOnAxis(ti,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jr.lookAt(Xr,Yr,this.up):Jr.lookAt(Yr,Xr,this.up),this.quaternion.setFromRotationMatrix(Jr),r&&(Jr.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(Jr),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Y(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ni),ii.child=e,this.dispatchEvent(ii),ii.child=null):Y(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ri),ai.child=e,this.dispatchEvent(ai),ai.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ni),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,Zr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,Qr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};oi.DEFAULT_UP=new X(0,1,0),oi.DEFAULT_MATRIX_AUTO_UPDATE=!0,oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=class extends oi{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ci={type:`move`},li=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ci)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ui={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},fi={h:0,s:0,l:0};function pi(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var mi=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_r.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_r.workingColorSpace){return this.r=e,this.g=t,this.b=n,_r.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_r.workingColorSpace){if(e=ar(e,1),t=ir(t,0,1),n=ir(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=pi(i,r,e+1/3),this.g=pi(i,r,e),this.b=pi(i,r,e-1/3)}return _r.colorSpaceToWorking(this,r),this}setStyle(e,t=Pn){function n(t){t!==void 0&&parseFloat(t)<1&&J(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:J(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);J(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){let n=ui[e.toLowerCase()];return n===void 0?J(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return _r.workingToColorSpace(hi.copy(this),e),Math.round(ir(hi.r*255,0,255))*65536+Math.round(ir(hi.g*255,0,255))*256+Math.round(ir(hi.b*255,0,255))}getHexString(e=Pn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_r.workingColorSpace){_r.workingToColorSpace(hi.copy(this),t);let n=hi.r,r=hi.g,i=hi.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=_r.workingColorSpace){return _r.workingToColorSpace(hi.copy(this),t),e.r=hi.r,e.g=hi.g,e.b=hi.b,e}getStyle(e=Pn){_r.workingToColorSpace(hi.copy(this),e);let t=hi.r,n=hi.g,r=hi.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(fi);let n=or(di.h,fi.h,t),r=or(di.s,fi.s,t),i=or(di.l,fi.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hi=new mi;mi.NAMES=ui;var gi=class extends oi{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=new X,vi=new X,yi=new X,bi=new X,xi=new X,Si=new X,Ci=new X,wi=new X,Ti=new X,Ei=new X,Di=new Or,Oi=new Or,ki=new Or,Ai=class e{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_i.subVectors(e,t),r.cross(_i);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){_i.subVectors(r,t),vi.subVectors(n,t),yi.subVectors(e,t);let a=_i.dot(_i),o=_i.dot(vi),s=_i.dot(yi),c=vi.dot(vi),l=vi.dot(yi),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,bi)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,bi.x),s.addScaledVector(a,bi.y),s.addScaledVector(o,bi.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Di.setScalar(0),Oi.setScalar(0),ki.setScalar(0),Di.fromBufferAttribute(e,t),Oi.fromBufferAttribute(e,n),ki.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Di,i.x),a.addScaledVector(Oi,i.y),a.addScaledVector(ki,i.z),a}static isFrontFacing(e,t,n,r){return _i.subVectors(n,t),vi.subVectors(e,t),_i.cross(vi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),_i.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;xi.subVectors(r,n),Si.subVectors(i,n),wi.subVectors(e,n);let s=xi.dot(wi),c=Si.dot(wi);if(s<=0&&c<=0)return t.copy(n);Ti.subVectors(e,r);let l=xi.dot(Ti),u=Si.dot(Ti);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(xi,a);Ei.subVectors(e,i);let f=xi.dot(Ei),p=Si.dot(Ei);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Si,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Ci.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Ci,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(xi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ji=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ni):Ni.fromBufferAttribute(r,t),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Pi.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Pi.copy(e.boundingBox)),Pi.applyMatrix4(e.matrixWorld),this.union(Pi)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),Hi.subVectors(this.max,Vi),Fi.subVectors(e.a,Vi),Ii.subVectors(e.b,Vi),Li.subVectors(e.c,Vi),Ri.subVectors(Ii,Fi),zi.subVectors(Li,Ii),Bi.subVectors(Fi,Li);let t=[0,-Ri.z,Ri.y,0,-zi.z,zi.y,0,-Bi.z,Bi.y,Ri.z,0,-Ri.x,zi.z,0,-zi.x,Bi.z,0,-Bi.x,-Ri.y,Ri.x,0,-zi.y,zi.x,0,-Bi.y,Bi.x,0];return!Gi(t,Fi,Ii,Li,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Gi(t,Fi,Ii,Li,Hi))?!1:(Ui.crossVectors(Ri,zi),t=[Ui.x,Ui.y,Ui.z],Gi(t,Fi,Ii,Li,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new X,new X,new X,new X,new X,new X,new X,new X],Ni=new X,Pi=new ji,Fi=new X,Ii=new X,Li=new X,Ri=new X,zi=new X,Bi=new X,Vi=new X,Hi=new X,Ui=new X,Wi=new X;function Gi(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Wi.fromArray(e,a);let o=i.x*Math.abs(Wi.x)+i.y*Math.abs(Wi.y)+i.z*Math.abs(Wi.z),s=t.dot(Wi),c=n.dot(Wi),l=r.dot(Wi);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ki=new X,qi=new lr,Ji=0,Yi=class extends $n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:Ji++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=zn,this.updateRanges=[],this.gpuType=Tt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qi.fromBufferAttribute(this,t),qi.applyMatrix3(e),this.setXY(t,qi.x,qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ki.fromBufferAttribute(this,t),Ki.applyMatrix3(e),this.setXYZ(t,Ki.x,Ki.y,Ki.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ki.fromBufferAttribute(this,t),Ki.applyMatrix4(e),this.setXYZ(t,Ki.x,Ki.y,Ki.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ki.fromBufferAttribute(this,t),Ki.applyNormalMatrix(e),this.setXYZ(t,Ki.x,Ki.y,Ki.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ki.fromBufferAttribute(this,t),Ki.transformDirection(e),this.setXYZ(t,Ki.x,Ki.y,Ki.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=cr(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=cr(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=cr(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cr(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=cr(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=cr(t,this.array),n=cr(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=cr(t,this.array),n=cr(n,this.array),r=cr(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=cr(t,this.array),n=cr(n,this.array),r=cr(r,this.array),i=cr(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},Xi=class extends Yi{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Zi=class extends Yi{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Qi=class extends Yi{constructor(e,t,n){super(new Float32Array(e),t,n)}},$i=new ji,ea=new X,ta=new X,na=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?$i.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);let t=ea.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ea,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(ta)),this.expandByPoint(ea.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ra=0,ia=new Nr,aa=new oi,oa=new X,sa=new ji,ca=new ji,la=new X,ua=class e extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:ra++}),this.uuid=rr(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hn(e)?Zi:Xi)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ia.makeRotationFromQuaternion(e),this.applyMatrix4(ia),this}rotateX(e){return ia.makeRotationX(e),this.applyMatrix4(ia),this}rotateY(e){return ia.makeRotationY(e),this.applyMatrix4(ia),this}rotateZ(e){return ia.makeRotationZ(e),this.applyMatrix4(ia),this}translate(e,t,n){return ia.makeTranslation(e,t,n),this.applyMatrix4(ia),this}scale(e,t,n){return ia.makeScale(e,t,n),this.applyMatrix4(ia),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oa).negate(),this.translate(oa.x,oa.y,oa.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Qi(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&J(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Y(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];sa.setFromBufferAttribute(n),this.morphTargetsRelative?(la.addVectors(this.boundingBox.min,sa.min),this.boundingBox.expandByPoint(la),la.addVectors(this.boundingBox.max,sa.max),this.boundingBox.expandByPoint(la)):(this.boundingBox.expandByPoint(sa.min),this.boundingBox.expandByPoint(sa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Y(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Y(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(sa.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ca.setFromBufferAttribute(n),this.morphTargetsRelative?(la.addVectors(sa.min,ca.min),sa.expandByPoint(la),la.addVectors(sa.max,ca.max),sa.expandByPoint(la)):(sa.expandByPoint(ca.min),sa.expandByPoint(ca.max))}sa.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)la.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(la));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)la.fromBufferAttribute(a,t),o&&(oa.fromBufferAttribute(e,t),la.add(oa)),r=Math.max(r,n.distanceToSquared(la))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Y(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Y(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Yi(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new X,s[e]=new X;let c=new X,l=new X,u=new X,d=new lr,f=new lr,p=new lr,m=new X,h=new X;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new X,y=new X,b=new X,x=new X;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Yi(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new X,i=new X,a=new X,o=new X,s=new X,c=new X,l=new X,u=new X;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)la.fromBufferAttribute(e,t),la.normalize(),e.setXYZ(t,la.x,la.y,la.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Yi(a,r,i)}if(this.index===null)return J(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},da=0,fa=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:da++}),this.uuid=rr(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mi(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rn,this.stencilZFail=Rn,this.stencilZPass=Rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){J(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){J(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},pa=new X,ma=new X,ha=new X,ga=new X,_a=new X,va=new X,ya=new X,ba=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pa)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pa.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pa.copy(this.origin).addScaledVector(this.direction,t),pa.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ma.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),ga.copy(this.origin).sub(ma);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ha),o=ga.dot(this.direction),s=-ga.dot(ha),c=ga.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ma).addScaledVector(ha,d),f}intersectSphere(e,t){pa.subVectors(e.center,this.origin);let n=pa.dot(this.direction),r=pa.dot(pa)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pa)!==null}intersectTriangle(e,t,n,r,i){_a.subVectors(t,e),va.subVectors(n,e),ya.crossVectors(_a,va);let a=this.direction.dot(ya),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ga.subVectors(this.origin,e);let s=o*this.direction.dot(va.crossVectors(ga,va));if(s<0)return null;let c=o*this.direction.dot(_a.cross(ga));if(c<0||s+c>a)return null;let l=-o*ga.dot(ya);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xa=class extends fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new mi(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sa=new Nr,Ca=new ba,wa=new na,Ta=new X,Ea=new X,Da=new X,Oa=new X,ka=new X,Aa=new X,ja=new X,Ma=new X,Na=class extends oi{constructor(e=new ua,t=new xa){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Aa.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ka.fromBufferAttribute(s,e),a?Aa.addScaledVector(ka,r):Aa.addScaledVector(ka.sub(t),r))}t.add(Aa)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(i),Ca.copy(e.ray).recast(e.near),!(wa.containsPoint(Ca.origin)===!1&&(Ca.intersectSphere(wa,Ta)===null||Ca.origin.distanceToSquared(Ta)>(e.far-e.near)**2))&&(Sa.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(Sa),!(n.boundingBox!==null&&Ca.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ca)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Fa(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Fa(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Fa(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Fa(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function Pa(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ma.copy(s),Ma.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ma);return l<n.near||l>n.far?null:{distance:l,point:Ma.clone(),object:e}}function Fa(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ea),e.getVertexPosition(c,Da),e.getVertexPosition(l,Oa);let u=Pa(e,t,n,r,Ea,Da,Oa,ja);if(u){let e=new X;Ai.getBarycoord(ja,Ea,Da,Oa,e),i&&(u.uv=Ai.getInterpolatedAttribute(i,s,c,l,e,new lr)),a&&(u.uv1=Ai.getInterpolatedAttribute(a,s,c,l,e,new lr)),o&&(u.normal=Ai.getInterpolatedAttribute(o,s,c,l,e,new X),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new X,materialIndex:0};Ai.getNormal(Ea,Da,Oa,t.normal),u.face=t,u.barycoord=e}return u}var Ia=class extends Dr{constructor(e=null,t=1,n=1,r,i,a,o,s,c=pt,l=pt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},La=class extends Yi{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ra=new Nr,za=new Nr,Ba=[],Va=new ji,Ha=new Nr,Ua=new Na,Wa=new na,Ga=class extends Na{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new La(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ha)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ra),Va.copy(e.boundingBox).applyMatrix4(Ra),this.boundingBox.union(Va)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new na),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ra),Wa.copy(e.boundingSphere).applyMatrix4(Ra),this.boundingSphere.union(Wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ua.geometry=this.geometry,Ua.material=this.material,Ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(n),e.ray.intersectsSphere(Wa)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ra),za.multiplyMatrices(n,Ra),Ua.matrixWorld=za,Ua.raycast(e,Ba);for(let e=0,n=Ba.length;e<n;e++){let n=Ba[e];n.instanceId=i,n.object=this,t.push(n)}Ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new La(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ia(new Float32Array(r*this.count),r,this.count,Lt,Tt));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ka=new X,qa=new X,Ja=new Z,Ya=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ka.subVectors(n,t).cross(qa.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ka),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ja.getNormalMatrix(e),r=this.coplanarPoint(Ka).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xa=new na,Za=new lr(.5,.5),Qa=new X,$a=class{constructor(e=new Ya,t=new Ya,n=new Ya,r=new Ya,i=new Ya,a=new Ya){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xa)}intersectsSprite(e){return Xa.center.set(0,0,0),Xa.radius=.7071067811865476+Za.distanceTo(e.center),Xa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xa)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},eo=class extends Dr{constructor(e,t,n,r,i=gt,a=gt,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let l=this;function u(){l.needsUpdate=!0,l._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}`requestVideoFrameCallback`in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;!(`requestVideoFrameCallback`in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},to=class extends Dr{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},no=class extends Dr{constructor(e,t,n=wt,r,i,a,o=pt,s=pt,c,l=Ft,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ro=class extends no{constructor(e,t=wt,n=301,r,i,a=pt,o=pt,s,c=Ft){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},io=class extends Dr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ao=class e extends ua{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Qi(c,3)),this.setAttribute(`normal`,new Qi(l,3)),this.setAttribute(`uv`,new Qi(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new X;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},oo=class e extends ua{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new X,l=new lr;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Qi(a,3)),this.setAttribute(`normal`,new Qi(o,3)),this.setAttribute(`uv`,new Qi(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},so=class e extends ua{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Qi(p,3)),this.setAttribute(`normal`,new Qi(m,3)),this.setAttribute(`uv`,new Qi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},co=class e extends ua{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new X,p=new lr;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Qi(s,3)),this.setAttribute(`normal`,new Qi(c,3)),this.setAttribute(`uv`,new Qi(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function lo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(fo(i))i.isRenderTargetTexture?(J(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(fo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function uo(e){let t={};for(let n=0;n<e.length;n++){let r=lo(e[n]);for(let e in r)t[e]=r[e]}return t}function fo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function po(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function mo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_r.workingColorSpace}var ho={clone:lo,merge:uo},go=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_o=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vo=class extends fa{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=go,this.fragmentShader=_o,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=po(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},yo=class extends vo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},bo=class extends fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Mn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xo=class extends fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function So(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Co=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},wo=class extends Co{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kn,endingEnd:kn}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case An:i=e,o=2*t-n;break;case jn:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case An:a=e,s=2*n-t;break;case jn:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},To=class extends Co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Eo=class extends Co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Do=class extends Co{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Oo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=So(t,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Do(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Tn:t=this.InterpolantFactoryMethodDiscrete;break;case En:t=this.InterpolantFactoryMethodLinear;break;case Dn:t=this.InterpolantFactoryMethodSmooth;break;case On:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return J(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tn;case this.InterpolantFactoryMethodLinear:return En;case this.InterpolantFactoryMethodSmooth:return Dn;case this.InterpolantFactoryMethodBezier:return On}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Y(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Y(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Y(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Y(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Un(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Y(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Dn,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Oo.prototype.ValueTypeName=``,Oo.prototype.TimeBufferType=Float32Array,Oo.prototype.ValueBufferType=Float32Array,Oo.prototype.DefaultInterpolation=En;var ko=class extends Oo{constructor(e,t,n){super(e,t,n)}};ko.prototype.ValueTypeName=`bool`,ko.prototype.ValueBufferType=Array,ko.prototype.DefaultInterpolation=Tn,ko.prototype.InterpolantFactoryMethodLinear=void 0,ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends Oo{constructor(e,t,n,r){super(e,t,n,r)}};Ao.prototype.ValueTypeName=`color`;var jo=class extends Oo{constructor(e,t,n,r){super(e,t,n,r)}};jo.prototype.ValueTypeName=`number`;var Mo=class extends Co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ur.slerpFlat(i,0,a,c-o,a,c,s);return i}},No=class extends Oo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Mo(this.times,this.values,this.getValueSize(),e)}};No.prototype.ValueTypeName=`quaternion`,No.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends Oo{constructor(e,t,n){super(e,t,n)}};Po.prototype.ValueTypeName=`string`,Po.prototype.ValueBufferType=Array,Po.prototype.DefaultInterpolation=Tn,Po.prototype.InterpolantFactoryMethodLinear=void 0,Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends Oo{constructor(e,t,n,r){super(e,t,n,r)}};Fo.prototype.ValueTypeName=`vector`;var Io=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Lo=class{constructor(e){this.manager=e===void 0?Io:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Lo.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Ro=new X,zo=new ur,Bo=new X,Vo=class extends oi{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Nr,this.projectionMatrix=new Nr,this.projectionMatrixInverse=new Nr,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ro,zo,Bo),Bo.x===1&&Bo.y===1&&Bo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,zo,Bo.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ro,zo,Bo),Bo.x===1&&Bo.y===1&&Bo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,zo,Bo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ho=new X,Uo=new lr,Wo=new lr,Go=class extends Vo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ho.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ho.x,Ho.y).multiplyScalar(-e/Ho.z),Ho.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ho.x,Ho.y).multiplyScalar(-e/Ho.z)}getViewSize(e,t){return this.getViewBounds(e,Uo,Wo),t.subVectors(Wo,Uo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ko=class extends Vo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qo=class extends ua{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Jo=-90,Yo=1,Xo=class extends oi{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Go(Jo,Yo,e,t);r.layers=this.layers,this.add(r);let i=new Go(Jo,Yo,e,t);i.layers=this.layers,this.add(i);let a=new Go(Jo,Yo,e,t);a.layers=this.layers,this.add(a);let o=new Go(Jo,Yo,e,t);o.layers=this.layers,this.add(o);let s=new Go(Jo,Yo,e,t);s.layers=this.layers,this.add(s);let c=new Go(Jo,Yo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Zo=class extends Go{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Qo=`\\[\\]\\.:\\/`,$o=RegExp(`[`+Qo+`]`,`g`),es=`[^`+Qo+`]`,ts=`[^`+Qo.replace(`\\.`,``)+`]`,ns=`((?:WC+[\\/:])*)`.replace(`WC`,es),rs=`(WCOD+)?`.replace(`WCOD`,ts),is=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,es),as=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,es),os=RegExp(`^`+ns+rs+is+as+`$`),ss=[`material`,`materials`,`bones`,`map`],cs=class{constructor(e,t,n){let r=n||ls.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ls=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace($o,``)}static parseTrackName(e){let t=os.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ss.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){J(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Y(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Y(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Y(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Y(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Y(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Y(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Y(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Y(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Y(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Y(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ls.Composite=cs,ls.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ls.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ls.prototype.GetterByBindingType=[ls.prototype._getValue_direct,ls.prototype._getValue_array,ls.prototype._getValue_arrayElement,ls.prototype._getValue_toArray],ls.prototype.SetterByBindingTypeAndVersioning=[[ls.prototype._setValue_direct,ls.prototype._setValue_direct_setNeedsUpdate,ls.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ls.prototype._setValue_array,ls.prototype._setValue_array_setNeedsUpdate,ls.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ls.prototype._setValue_arrayElement,ls.prototype._setValue_arrayElement_setNeedsUpdate,ls.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ls.prototype._setValue_fromArray,ls.prototype._setValue_fromArray_setNeedsUpdate,ls.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function us(e,t,n,r){let i=ds(r);switch(n){case Mt:return e*t;case Lt:return e*t/i.components*i.byteLength;case Rt:return e*t/i.components*i.byteLength;case zt:return e*t*2/i.components*i.byteLength;case Bt:return e*t*2/i.components*i.byteLength;case Nt:return e*t*3/i.components*i.byteLength;case Pt:return e*t*4/i.components*i.byteLength;case Vt:return e*t*4/i.components*i.byteLength;case Ht:case Ut:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Wt:case Gt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qt:case Yt:return Math.max(e,16)*Math.max(t,8)/4;case Kt:case Jt:return Math.max(e,8)*Math.max(t,8)/2;case Xt:case Zt:case $t:case en:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Qt:case tn:case nn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case rn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case an:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case on:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case sn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case cn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ln:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case un:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case dn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case fn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case pn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case mn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case hn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case gn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case _n:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case vn:case yn:case bn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case xn:case Sn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Cn:case wn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ds(e){switch(e){case yt:case bt:return{byteLength:1,components:1};case St:case xt:case Et:return{byteLength:2,components:1};case Dt:case Ot:return{byteLength:2,components:4};case wt:case Ct:case Tt:return{byteLength:4,components:1};case At:case jt:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`184`}})),typeof window<`u`&&(window.__THREE__?J(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`184`);function fs(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ps(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new mi(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Z},alphaMap:{value:null},alphaMapTransform:{value:new Z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Z}},envmap:{envMap:{value:null},envMapRotation:{value:new Z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Z},normalScale:{value:new lr(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mi(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new mi(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Z},alphaTest:{value:0},uvTransform:{value:new Z}},sprite:{diffuse:{value:new mi(16777215)},opacity:{value:1},center:{value:new lr(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Z},alphaMap:{value:null},alphaMapTransform:{value:new Z},alphaTest:{value:0}}},ms={basic:{uniforms:uo([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:uo([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new mi(0)},envMapIntensity:{value:1}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:uo([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new mi(0)},specular:{value:new mi(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:uo([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new mi(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:uo([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new mi(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:uo([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:uo([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:uo([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:uo([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:uo([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:uo([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new Z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Z}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distance:{uniforms:uo([$.common,$.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distance_vert,fragmentShader:Q.distance_frag},shadow:{uniforms:uo([$.lights,$.fog,{color:{value:new mi(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};ms.physical={uniforms:uo([ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Z},clearcoatNormalScale:{value:new lr(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Z},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Z},sheen:{value:0},sheenColor:{value:new mi(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Z},transmissionSamplerSize:{value:new lr},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Z},attenuationDistance:{value:0},attenuationColor:{value:new mi(0)},specularColor:{value:new mi(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Z},anisotropyVector:{value:new lr},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Z}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var hs={r:0,b:0,g:0},gs=new Nr,_s=new Z;_s.set(-1,0,0,0,1,0,0,0,1);function vs(e,t,n,r,i,a){let o=new mi(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Na(new ao(1,1,1),new vo({name:`BackgroundCubeMaterial`,uniforms:lo(ms.backgroundCube.uniforms),vertexShader:ms.backgroundCube.vertexShader,fragmentShader:ms.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(gs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_s),l.material.toneMapped=_r.getTransfer(i.colorSpace)!==Ln,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Na(new so(2,2),new vo({name:`BackgroundMaterial`,uniforms:lo(ms.background.uniforms),vertexShader:ms.background.vertexShader,fragmentShader:ms.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,`map`,{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=_r.getTransfer(i.colorSpace)!==Ln,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(hs,mo(e)),n.buffers.color.setClear(hs.r,hs.g,hs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ys(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function bs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function xs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(J(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&J(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ss(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ya,s=new Z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Cs=4,ws=[.125,.215,.35,.446,.526,.582],Ts=20,Es=256,Ds=new Ko,Os=new mi,ks=null,As=0,js=0,Ms=!1,Ns=new X,Ps=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ns}=i;ks=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ks,As,js),this._renderer.xr.enabled=Ms,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ks=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:Et,format:Pt,colorSpace:Fn,depthBuffer:!1},r=Is(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Is(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fs(r)),this._blurMaterial=zs(r,e,t),this._ggxMaterial=Rs(r,e,t)}return r}_compileMaterial(e){let t=new Na(new ua,e);this._renderer.compile(t,Ds)}_sceneToCubeUV(e,t,n,r,i){let a=new Go(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Os),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Na(new ao,new xa({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Os),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ls(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ls(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ds)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Cs?n-d+Cs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ls(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ds),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ls(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ds)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&Y(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Ts-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Ts;m>Ts&&J(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);let h=[],g=0;for(let e=0;e<Ts;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ls(t,3*v*(r>_-Cs?r-_+Cs:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ds)}};function Fs(e){let t=[],n=[],r=[],i=e,a=e-Cs+1+ws.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Cs?s=ws[o-e+Cs-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new ua;h.setAttribute(`position`,new Yi(f,3)),h.setAttribute(`uv`,new Yi(p,2)),h.setAttribute(`faceIndex`,new Yi(m,1)),r.push(new Na(h,null)),i>Cs&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Is(e,t,n){let r=new Ar(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ls(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Rs(e,t,n){return new vo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zs(e,t,n){let r=new Float32Array(Ts),i=new X(0,1,0);return new vo({name:`SphericalGaussianBlur`,defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bs(){return new vo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vs(){return new vo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Us=class extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new to(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ao(5,5,5),i=new vo({name:`CubemapFromEquirect`,uniforms:lo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Na(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=gt),new Xo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ws(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Us(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ps(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ps(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Gs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Xn(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ks(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Zi:Xi)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function qs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Js(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Y(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ys(e,t,n){let r=new WeakMap,i=new Or;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new jr(h,p,m,u);g.type=Tt,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new lr(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Xs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Zs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Qs(e,t,n,r,i){let a=new Ar(t,n,{type:e,depthBuffer:r,stencilBuffer:i,depthTexture:r?new no(t,n):void 0}),o=new Ar(t,n,{type:Et,depthBuffer:!1,stencilBuffer:!1}),s=new ua;s.setAttribute(`position`,new Qi([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new Qi([0,2,0,0,2,0],2));let c=new yo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Na(s,c),u=new Ko(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,g=[],_=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<g.length;n++){let r=g[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){g=e,_=g.length>0&&g[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<g.length;e++){let r=g[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&g.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return _===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<g.length;i++){let a=g[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},_r.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=Zs[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var $s=new Dr,ec=new no(1,1),tc=new jr,nc=new Mr,rc=new to,ic=[],ac=[],oc=new Float32Array(16),sc=new Float32Array(9),cc=new Float32Array(4);function lc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ic[i];if(a===void 0&&(a=new Float32Array(i),ic[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function uc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function dc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function fc(e,t){let n=ac[t];n===void 0&&(n=new Int32Array(t),ac[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function pc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(uc(n,t))return;e.uniform2fv(this.addr,t),dc(n,t)}}function hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(uc(n,t))return;e.uniform3fv(this.addr,t),dc(n,t)}}function gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(uc(n,t))return;e.uniform4fv(this.addr,t),dc(n,t)}}function _c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(uc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),dc(n,t)}else{if(uc(n,r))return;cc.set(r),e.uniformMatrix2fv(this.addr,!1,cc),dc(n,r)}}function vc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(uc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),dc(n,t)}else{if(uc(n,r))return;sc.set(r),e.uniformMatrix3fv(this.addr,!1,sc),dc(n,r)}}function yc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(uc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),dc(n,t)}else{if(uc(n,r))return;oc.set(r),e.uniformMatrix4fv(this.addr,!1,oc),dc(n,r)}}function bc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(uc(n,t))return;e.uniform2iv(this.addr,t),dc(n,t)}}function Sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(uc(n,t))return;e.uniform3iv(this.addr,t),dc(n,t)}}function Cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(uc(n,t))return;e.uniform4iv(this.addr,t),dc(n,t)}}function wc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(uc(n,t))return;e.uniform2uiv(this.addr,t),dc(n,t)}}function Ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(uc(n,t))return;e.uniform3uiv(this.addr,t),dc(n,t)}}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(uc(n,t))return;e.uniform4uiv(this.addr,t),dc(n,t)}}function Oc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ec.compareFunction=n.isReversedDepthBuffer()?518:515,a=ec):a=$s,n.setTexture2D(t||a,i)}function kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||nc,i)}function Ac(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||rc,i)}function jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||tc,i)}function Mc(e){switch(e){case 5126:return pc;case 35664:return mc;case 35665:return hc;case 35666:return gc;case 35674:return _c;case 35675:return vc;case 35676:return yc;case 5124:case 35670:return bc;case 35667:case 35671:return xc;case 35668:case 35672:return Sc;case 35669:case 35673:return Cc;case 5125:return wc;case 36294:return Tc;case 36295:return Ec;case 36296:return Dc;case 35678:case 36198:case 36298:case 36306:case 35682:return Oc;case 35679:case 36299:case 36307:return kc;case 35680:case 36300:case 36308:case 36293:return Ac;case 36289:case 36303:case 36311:case 36292:return jc}}function Nc(e,t){e.uniform1fv(this.addr,t)}function Pc(e,t){let n=lc(t,this.size,2);e.uniform2fv(this.addr,n)}function Fc(e,t){let n=lc(t,this.size,3);e.uniform3fv(this.addr,n)}function Ic(e,t){let n=lc(t,this.size,4);e.uniform4fv(this.addr,n)}function Lc(e,t){let n=lc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Rc(e,t){let n=lc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function zc(e,t){let n=lc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Bc(e,t){e.uniform1iv(this.addr,t)}function Vc(e,t){e.uniform2iv(this.addr,t)}function Hc(e,t){e.uniform3iv(this.addr,t)}function Uc(e,t){e.uniform4iv(this.addr,t)}function Wc(e,t){e.uniform1uiv(this.addr,t)}function Gc(e,t){e.uniform2uiv(this.addr,t)}function Kc(e,t){e.uniform3uiv(this.addr,t)}function qc(e,t){e.uniform4uiv(this.addr,t)}function Jc(e,t,n){let r=this.cache,i=t.length,a=fc(n,i);uc(r,a)||(e.uniform1iv(this.addr,a),dc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ec:$s;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Yc(e,t,n){let r=this.cache,i=t.length,a=fc(n,i);uc(r,a)||(e.uniform1iv(this.addr,a),dc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||nc,a[e])}function Xc(e,t,n){let r=this.cache,i=t.length,a=fc(n,i);uc(r,a)||(e.uniform1iv(this.addr,a),dc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||rc,a[e])}function Zc(e,t,n){let r=this.cache,i=t.length,a=fc(n,i);uc(r,a)||(e.uniform1iv(this.addr,a),dc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||tc,a[e])}function Qc(e){switch(e){case 5126:return Nc;case 35664:return Pc;case 35665:return Fc;case 35666:return Ic;case 35674:return Lc;case 35675:return Rc;case 35676:return zc;case 5124:case 35670:return Bc;case 35667:case 35671:return Vc;case 35668:case 35672:return Hc;case 35669:case 35673:return Uc;case 5125:return Wc;case 36294:return Gc;case 36295:return Kc;case 36296:return qc;case 35678:case 36198:case 36298:case 36306:case 35682:return Jc;case 35679:case 36299:case 36307:return Yc;case 35680:case 36300:case 36308:case 36293:return Xc;case 36289:case 36303:case 36311:case 36292:return Zc}}var $c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mc(t.type)}},el=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qc(t.type)}},tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function rl(e,t){e.seq.push(t),e.map[t.id]=t}function il(e,t,n){let r=e.name,i=r.length;for(nl.lastIndex=0;;){let a=nl.exec(r),o=nl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){rl(n,l===void 0?new $c(s,e,t):new el(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new tl(s),rl(n,e)),n=e}}}var al=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);il(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ol(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var sl=37297,cl=0;function ll(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ul=new Z;function dl(e){_r._getMatrix(ul,_r.workingColorSpace,e);let t=`mat3( ${ul.elements.map(e=>e.toFixed(4))} )`;switch(_r.getTransfer(e)){case In:return[t,`LinearTransferOETF`];case Ln:return[t,`sRGBTransferOETF`];default:return J(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function fl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ll(e.getShaderSource(t),r)}else return i}function pl(e,t){let n=dl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ml={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function hl(e,t){let n=ml[t];return n===void 0?(J(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var gl=new X;function _l(){return _r.getLuminanceCoefficients(gl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${gl.x.toFixed(4)}, ${gl.y.toFixed(4)}, ${gl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function vl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(xl).join(`
`)}function yl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function bl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function xl(e){return e!==``}function Sl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(e){return e.replace(wl,Dl)}var El=new Map;function Dl(e,t){let n=Q[t];if(n===void 0){let e=El.get(t);if(e!==void 0)n=Q[e],J(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Tl(n)}var Ol=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(e){return e.replace(Ol,Al)}function Al(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function jl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ml={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Nl(e){return Ml[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Pl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Fl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Pl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Il={302:`ENVMAP_MODE_REFRACTION`};function Ll(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Il[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Rl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function zl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Rl[e.combine]||`ENVMAP_BLENDING_NONE`}function Bl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Vl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Nl(n),l=Fl(n),u=Ll(n),d=zl(n),f=Bl(n),p=vl(n),m=yl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(xl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(xl).join(`
`),_.length>0&&(_+=`
`)):(g=[jl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(xl).join(`
`),_=[jl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:hl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,pl(`linearToOutputTexel`,n.outputColorSpace),_l(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(xl).join(`
`)),o=Tl(o),o=Sl(o,n),o=Cl(o,n),s=Tl(s),s=Sl(s,n),s=Cl(s,n),o=kl(o),s=kl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ol(i,i.VERTEX_SHADER,y),S=ol(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=fl(i,x,`vertex`),n=fl(i,S,`fragment`);Y(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):J(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new al(i,h),T=bl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,sl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Hl=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wl(e),t.set(e,n)),n}},Wl=class{constructor(e){this.id=Hl++,this.code=e,this.usedTimes=0}};function Gl(e){return e===1030||e===37490||e===36285}function Kl(e,t,n,r,i,a){let o=new Wr,s=new Ul,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&J(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ms[C];D=e.vertexShader,O=e.fragmentShader}else D=i.vertexShader,O=i.fragmentShader,s.update(i),k=s.getVertexShaderID(i),A=s.getFragmentShaderID(i);let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,F=!!i.lightMap,ie=!!i.bumpMap,ae=!!i.normalMap,oe=!!i.displacementMap,I=!!i.emissiveMap,se=!!i.metalnessMap,L=!!i.roughnessMap,R=i.anisotropy>0,z=i.clearcoat>0,B=i.dispersion>0,V=i.iridescence>0,ce=i.sheen>0,le=i.transmission>0,ue=R&&!!i.anisotropyMap,de=z&&!!i.clearcoatMap,fe=z&&!!i.clearcoatNormalMap,H=z&&!!i.clearcoatRoughnessMap,pe=V&&!!i.iridescenceMap,U=V&&!!i.iridescenceThicknessMap,me=ce&&!!i.sheenColorMap,W=ce&&!!i.sheenRoughnessMap,he=!!i.specularMap,G=!!i.specularColorMap,K=!!i.specularIntensityMap,ge=le&&!!i.transmissionMap,_e=le&&!!i.thicknessMap,ve=!!i.gradientMap,ye=!!i.alphaMap,be=i.alphaTest>0,xe=!!i.alphaHash,Se=!!i.extensions,Ce=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ce=e.toneMapping);let we={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:_r.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:F,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:I,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&Gl(i.normalMap.format),metalnessMap:se,roughnessMap:L,anisotropy:R,anisotropyMap:ue,clearcoat:z,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:H,dispersion:B,iridescence:V,iridescenceMap:pe,iridescenceThicknessMap:U,sheen:ce,sheenColorMap:me,sheenRoughnessMap:W,specularMap:he,specularColorMap:G,specularIntensityMap:K,transmission:le,transmissionMap:ge,thicknessMap:_e,gradientMap:ve,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ye,alphaTest:be,alphaHash:xe,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:F&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:I&&m(i.emissiveMap.channel),metalnessMapUv:se&&m(i.metalnessMap.channel),roughnessMapUv:L&&m(i.roughnessMap.channel),anisotropyMapUv:ue&&m(i.anisotropyMap.channel),clearcoatMapUv:de&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:U&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:W&&m(i.sheenRoughnessMap.channel),specularMapUv:he&&m(i.specularMap.channel),specularColorMapUv:G&&m(i.specularColorMap.channel),specularIntensityMapUv:K&&m(i.specularIntensityMap.channel),transmissionMapUv:ge&&m(i.transmissionMap.channel),thicknessMapUv:_e&&m(i.thicknessMap.channel),alphaMapUv:ye&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ae||R),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||ye),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&_r.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:I&&i.emissiveMap.isVideoTexture===!0&&_r.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Se&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Se&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ms[t];n=ho.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Vl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ql(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Jl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Xl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Jl),r.length>1&&r.sort(t||Yl),i.length>1&&i.sort(t||Yl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Zl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Xl,e.set(t,[i])):n>=r.length?(i=new Xl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ql(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new X,color:new mi};break;case`SpotLight`:n={position:new X,direction:new X,color:new mi,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new X,color:new mi,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new X,skyColor:new mi,groundColor:new mi};break;case`RectAreaLight`:n={color:new mi,position:new X,halfWidth:new X,halfHeight:new X};break}return e[t.id]=n,n}}}function $l(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lr};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lr};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lr,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var eu=0;function tu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function nu(e){let t=new Ql,n=$l(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new X);let i=new X,a=new Nr,o=new Nr;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(tu);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=eu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ru(e){let t=new nu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function iu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ru(e),t.set(n,[a])):r>=i.length?(a=new ru(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var au=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ou=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,su=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],cu=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],lu=new Nr,uu=new X,du=new X;function fu(e,t,n){let r=new $a,i=new lr,a=new lr,o=new Or,s=new bo,c=new xo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new vo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lr},radius:{value:4}},vertexShader:au,fragmentShader:ou}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ua;m.setAttribute(`position`,new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Na(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(J(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){J(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){J(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ar(i.x,i.y,{format:zt,type:Et,minFilter:gt,magFilter:gt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new no(i.x,i.y,Tt),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Ft,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=pt,d.map.depthTexture.magFilter=pt}else l.isPointLight?(d.map=new Us(i.x),d.map.depthTexture=new ro(i.x,wt)):(d.map=new Ar(i.x,i.y),d.map.depthTexture=new no(i.x,i.y,wt)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Ft,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=gt,d.map.depthTexture.magFilter=gt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=pt,d.map.depthTexture.magFilter=pt);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),uu.setFromMatrixPosition(l.matrixWorld),e.position.copy(uu),du.copy(e.position),du.add(su[t]),e.up.copy(cu[t]),e.lookAt(du),e.updateMatrixWorld(),n.makeTranslation(-uu.x,-uu.y,-uu.z),lu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(lu,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ar(i.x,i.y,{format:zt,type:Et})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function pu(e,t){function n(){let t=!1,n=new Or,r=null,i=new Or(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?se(e.DEPTH_TEST):L(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Qn[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?se(e.STENCIL_TEST):L(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new mi(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),F=e.getParameter(e.VIEWPORT),ie=new Or().fromArray(re),ae=new Or().fromArray(F);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let I={};I[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),I[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),I[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),se(e.DEPTH_TEST),o.setFunc(3),de(!1),fe(1),se(e.CULL_FACE),le(0);function se(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function L(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function R(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function z(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function B(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let V={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};V[103]=e.MIN,V[104]=e.MAX;let ce={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(L(e.BLEND),g=!1);return}if(g===!1&&(se(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Y(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Y(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Y(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Y(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(V[n],V[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ce[r],ce[i],ce[o],ce[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ue(t,n){t.side===2?L(e.CULL_FACE):se(e.CULL_FACE);let r=t.side===1;n&&(r=!r),de(r),t.blending===1&&t.transparent===!1?le(0):le(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),pe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?se(e.SAMPLE_ALPHA_TO_COVERAGE):L(e.SAMPLE_ALPHA_TO_COVERAGE)}function de(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function fe(t){t===0?L(e.CULL_FACE):(se(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function H(t){t!==k&&(M&&e.lineWidth(t),k=t)}function pe(t,n,r){t?(se(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):L(e.POLYGON_OFFSET_FILL)}function U(t){t?se(e.SCISSOR_TEST):L(e.SCISSOR_TEST)}function me(t){t===void 0&&(t=e.TEXTURE0+ee-1),P!==t&&(e.activeTexture(t),P=t)}function W(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+ee-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||I[t]),i.type=t,i.texture=n)}function he(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function G(){try{e.compressedTexImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function K(){try{e.compressedTexImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function ge(){try{e.texSubImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function _e(){try{e.texSubImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function ve(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function ye(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function be(){try{e.texStorage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function xe(){try{e.texStorage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function Se(){try{e.texImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function Ce(){try{e.texImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function we(t){return d[t]===void 0?e.getParameter(t):d[t]}function Te(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ee(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function De(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Oe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ke(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ae(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new mi(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:se,disable:L,bindFramebuffer:R,drawBuffers:z,useProgram:B,setBlending:le,setMaterial:ue,setFlipSided:de,setCullFace:fe,setLineWidth:H,setPolygonOffset:pe,setScissorTest:U,activeTexture:me,bindTexture:W,unbindTexture:he,compressedTexImage2D:G,compressedTexImage3D:K,texImage2D:Se,texImage3D:Ce,pixelStorei:Te,getParameter:we,updateUBOMapping:Oe,uniformBlockBinding:ke,texStorage2D:be,texStorage3D:xe,texSubImage2D:ge,texSubImage3D:_e,compressedTexSubImage2D:ve,compressedTexSubImage3D:ye,scissor:Ee,viewport:De,reset:Ae}}function mu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lr,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Wn(`canvas`)}function g(e,t,n){let r=1,i=G(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),J(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&J(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];J(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||J(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?In:_r.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,J(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&J(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&W(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)J(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)J(`WebGLRenderer: Texture marked for update but image is incomplete`);else{L(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){L(a,t,i);return}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){L(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){R(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let re={[ut]:e.REPEAT,[dt]:e.CLAMP_TO_EDGE,[ft]:e.MIRRORED_REPEAT},F={[pt]:e.NEAREST,[mt]:e.NEAREST_MIPMAP_NEAREST,[ht]:e.NEAREST_MIPMAP_LINEAR,[gt]:e.LINEAR,[_t]:e.LINEAR_MIPMAP_NEAREST,[vt]:e.LINEAR_MIPMAP_LINEAR},ie={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ae(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&J(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,re[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,re[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,re[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,F[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,F[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ie[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function oe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function I(e,t,n){return Math.floor(Math.floor(e/n)/t)}function se(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=I(n.start,r.width,4),c=I(t.start,r.width,4);n.start<=i+1&&a===c&&I(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function L(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=oe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=_r.getPrimaries(_r.workingColorSpace),r=o.colorSpace===``?null:_r.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=he(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ae(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===It,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture)if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&se(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023)if(r!==null)if(C){if(T)if(o.layerUpdates.size>0){let t=us(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0);else J(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?J(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}else if(o.isDataArrayTexture)if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T)if(o.layerUpdates.size>0){let i=us(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w)if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}let r=e.RGBA,i=e.RGBA,a=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,r,i,a,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=G(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=G(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function R(t,o,s){if(o.image.length!==6)return;let c=oe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=_r.getPrimaries(_r.workingColorSpace),r=o.colorSpace===``?null:_r.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=he(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ae(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?J(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=G(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function z(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,U(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function B(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;me(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,U(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,U(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);me(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,U(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,U(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function V(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ae(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=U(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`Unknown depthTexture format`)}function ce(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)V(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?V(i.__webglFramebuffer[0],t,0):V(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),B(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),B(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function le(t,n,i){let a=r.get(t);n!==void 0&&z(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ce(t)}function ue(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&me(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=U(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),B(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ae(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)z(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else z(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ae(c,a),z(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ae(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)z(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else z(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&ce(t)}function de(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let fe=[],H=[];function pe(t){if(t.samples>0){if(me(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(fe.length=0,H.length=0,fe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(fe.push(l),H.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,H)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function U(e){return Math.min(i.maxSamples,e.samples)}function me(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function W(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function he(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(_r.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&J(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Y(`WebGLTextures: Unsupported texture color space:`,n)),t}function G(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=N,this.setTexture2DArray=te,this.setTexture3D=P,this.setTextureCube=ne,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=z,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function hu(e,t){function n(n,r=``){let i,a=_r.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var gu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_u=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vo({vertexShader:gu,fragmentShader:_u,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Na(new so(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends $n{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new vu,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new lr,C=null,w=new Go;w.viewport=new Or;let T=new Go;T.viewport=new Or;let E=[w,T],D=new Zo,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new li,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new li,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new li,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function j(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,j),r.removeEventListener(`inputsourceschange`,ee);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,k=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&J(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&J(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,j),r.addEventListener(`inputsourceschange`,ee),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?It:Ft,a=_.stencil?kt:wt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ar(d.textureWidth,d.textureHeight,{format:Pt,type:yt,depthTexture:new no(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ar(f.framebufferWidth,f.framebufferHeight,{format:Pt,type:yt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ee(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let M=new X,N=new X;function te(e,t,n){M.setFromMatrixPosition(t.matrixWorld),N.setFromMatrixPosition(n.matrixWorld);let r=M.distanceTo(N),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function P(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let i=e.parent,a=D.cameras;P(D,i);for(let e=0;e<a.length;e++)P(a[e],i);a.length===2?te(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),ne(e,D,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=nr*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let re=null;function F(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new Go,o.layers.enable(n),o.viewport=new Or,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new io,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}re&&re(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ie=new fs;ie.setAnimationLoop(F),this.setAnimationLoop=function(e){re=e},this.dispose=function(){}}},bu=new Nr,xu=new Z;xu.set(-1,0,0,0,1,0,0,0,1);function Su(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,mo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(bu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(xu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Cu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Y(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):ArrayBuffer.isView(o)?i.__data.set(new o.constructor(o.buffer,o.byteOffset,i.__data.length)):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?J(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):J(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var wu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tu=null;function Eu(){return Tu===null&&(Tu=new Ia(wu,16,16,zt,Et),Tu.name=`DFG_LUT`,Tu.minFilter=gt,Tu.magFilter=gt,Tu.wrapS=dt,Tu.wrapT=dt,Tu.generateMipmaps=!1,Tu.needsUpdate=!0),Tu}var Du=class{constructor(e={}){let{canvas:t=Gn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=yt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Vt,Bt,Rt]),g=new Set([yt,wt,St,kt,Dt,Ot]),_=new Uint32Array(4),v=new Int32Array(4),y=new X,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null;this._outputColorSpace=Pn;let O=0,k=0,A=null,j=-1,ee=null,M=new Or,N=new Or,te=null,P=new mi(0),ne=0,re=t.width,F=t.height,ie=1,ae=null,oe=null,I=new Or(0,0,re,F),se=new Or(0,0,re,F),L=!1,R=new $a,z=!1,B=!1,V=new Nr,ce=new X,le=new Or,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function fe(){return A===null?ie:1}let H=n;function pe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r184`),t.addEventListener(`webglcontextlost`,Fe,!1),t.addEventListener(`webglcontextrestored`,Ie,!1),t.addEventListener(`webglcontextcreationerror`,q,!1),H===null){let t=`webgl2`;if(H=pe(t,e),H===null)throw pe(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw Y(`WebGLRenderer: `+e.message),e}let U,me,W,he,G,K,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me;function Ne(){U=new Gs(H),U.init(),Ae=new hu(H,U),me=new xs(H,U,e,Ae),W=new pu(H,U),me.reversedDepthBuffer&&d&&W.buffers.depth.setReversed(!0),he=new Js(H),G=new ql,K=new mu(H,U,W,G,me,Ae,he),ge=new Ws(T),_e=new ps(H),je=new ys(H,_e),ve=new Ks(H,_e,he,je),ye=new Xs(H,ve,_e,je,he),De=new Ys(H,me,K),we=new Ss(G),be=new Kl(T,ge,U,me,je,we),xe=new Su(T,G),Se=new Zl,Ce=new iu(U),Ee=new vs(T,ge,W,ye,p,s),Te=new fu(T,ye,me),Me=new Cu(H,he,me,W),Oe=new bs(H,U,he),ke=new qs(H,U,he),he.programs=be.programs,T.capabilities=me,T.extensions=U,T.properties=G,T.renderLists=Se,T.shadowMap=Te,T.state=W,T.info=he}Ne(),m!==1009&&(w=new Qs(m,t.width,t.height,r,i));let Pe=new yu(T,H);this.xr=Pe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let e=U.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=U.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(e){e!==void 0&&(ie=e,this.setSize(re,F,!1))},this.getSize=function(e){return e.set(re,F)},this.setSize=function(e,n,r=!0){if(Pe.isPresenting){J(`WebGLRenderer: Can't change size while VR device is presenting.`);return}re=e,F=n,t.width=Math.floor(e*ie),t.height=Math.floor(n*ie),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(re*ie,F*ie).floor()},this.setDrawingBufferSize=function(e,n,r){re=e,F=n,ie=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){Y(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){J(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(M)},this.getViewport=function(e){return e.copy(I)},this.setViewport=function(e,t,n,r){e.isVector4?I.set(e.x,e.y,e.z,e.w):I.set(e,t,n,r),W.viewport(M.copy(I).multiplyScalar(ie).round())},this.getScissor=function(e){return e.copy(se)},this.setScissor=function(e,t,n,r){e.isVector4?se.set(e.x,e.y,e.z,e.w):se.set(e,t,n,r),W.scissor(N.copy(se).multiplyScalar(ie).round())},this.getScissorTest=function(){return L},this.setScissorTest=function(e){W.setScissorTest(L=e)},this.setOpaqueSort=function(e){ae=e},this.setTransparentSort=function(e){oe=e},this.getClearColor=function(e){return e.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(A!==null){let t=A.texture.format;e=h.has(t)}if(e){let e=A.texture.type,t=g.has(e),n=Ee.getClearColor(),r=Ee.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,H.clearBufferuiv(H.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,H.clearBufferiv(H.COLOR,0,v))}else r|=H.COLOR_BUFFER_BIT}t&&(r|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&H.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Fe,!1),t.removeEventListener(`webglcontextrestored`,Ie,!1),t.removeEventListener(`webglcontextcreationerror`,q,!1),Ee.dispose(),Se.dispose(),Ce.dispose(),G.dispose(),ge.dispose(),ye.dispose(),je.dispose(),Me.dispose(),be.dispose(),Pe.dispose(),Pe.removeEventListener(`sessionstart`,Ue),Pe.removeEventListener(`sessionend`,We),Ge.stop()};function Fe(e){e.preventDefault(),Jn(`WebGLRenderer: Context Lost.`),E=!0}function Ie(){Jn(`WebGLRenderer: Context Restored.`),E=!1;let e=he.autoReset,t=Te.enabled,n=Te.autoUpdate,r=Te.needsUpdate,i=Te.type;Ne(),he.autoReset=e,Te.enabled=t,Te.autoUpdate=n,Te.needsUpdate=r,Te.type=i}function q(e){Y(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Le(e){let t=e.target;t.removeEventListener(`dispose`,Le),Re(t)}function Re(e){ze(e),G.remove(e)}function ze(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){be.releaseProgram(e)}),e.isShaderMaterial&&be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ue);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=tt(e,t,n,r,i);W.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;je.setup(i,r,s,n,c);let h,g=Oe;if(c!==null&&(h=_e.get(c),g=ke,g.setIndex(h)),i.isMesh)r.wireframe===!0?(W.setLineWidth(r.wireframeLinewidth*fe()),g.setMode(H.LINES)):g.setMode(H.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),W.setLineWidth(e*fe()),i.isLineSegments?g.setMode(H.LINES):i.isLineLoop?g.setMode(H.LINE_LOOP):g.setMode(H.LINE_STRIP)}else i.isPoints?g.setMode(H.POINTS):i.isSprite&&g.setMode(H.TRIANGLES);if(i.isBatchedMesh)if(U.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?_e.get(c).bytesPerElement:1,o=G.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(H,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Be(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ze(e,t,n),e.side=0,e.needsUpdate=!0,Ze(e,t,n),e.side=2):Ze(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),x=Ce.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Be(a,n,e),r.add(a)}else Be(t,n,e),r.add(t)}),x=C.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){G.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}U.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ve=null;function He(e){Ve&&Ve(e)}function Ue(){Ge.stop()}function We(){Ge.start()}let Ge=new fs;Ge.setAnimationLoop(He),typeof self<`u`&&Ge.setContext(self),this.setAnimationLoop=function(e){Ve=e,Pe.setAnimationLoop(e),e===null?Ge.stop():Ge.start()},Pe.addEventListener(`sessionstart`,Ue),Pe.addEventListener(`sessionend`,We),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Y(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Pe.enabled===!0&&Pe.isPresenting===!0,r=w!==null&&(A===null||n)&&w.begin(T,A);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(t),t=Pe.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,A),x=Ce.get(e,C.length),x.init(t),x.state.textureUnits=K.getTextureUnits(),C.push(x),V.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),R.setFromProjectionMatrix(V,Vn,t.reversedDepth),B=this.localClippingEnabled,z=we.init(this.clippingPlanes,B),b=Se.get(e,S.length),b.init(),S.push(b),Pe.enabled===!0&&Pe.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&Ke(e,t,-1/0,T.sortObjects)}Ke(e,t,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(ae,oe),de=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,de&&Ee.addToRenderList(b,e),this.info.render.frame++,z===!0&&we.beginShadows();let i=x.state.shadowsArray;if(Te.render(i,e,t),z===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Je(n,r,e,a)}de&&Ee.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];qe(b,e,n,n.viewport)}}else r.length>0&&Je(n,r,e,t),de&&Ee.render(e),qe(b,e,t)}A!==null&&k===0&&(K.updateMultisampleRenderTarget(A),K.updateRenderTargetMipmap(A)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),je.resetDefaultState(),j=-1,ee=null,C.pop(),C.length>0?(x=C[C.length-1],K.setTextureUnits(x.state.textureUnits),z===!0&&we.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function Ke(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||R.intersectsSprite(e)){r&&le.setFromMatrixPosition(e.matrixWorld).applyMatrix4(V);let t=ye.update(e),i=e.material;i.visible&&b.push(e,t,i,n,le.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||R.intersectsObject(e))){let t=ye.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),le.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),le.copy(e.boundingSphere.center)),le.applyMatrix4(e.matrixWorld).applyMatrix4(V)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&b.push(e,t,s,n,le.z,o)}}else i.visible&&b.push(e,t,i,n,le.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ke(i[e],t,n,r)}function qe(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),z===!0&&we.setGlobalState(T.clippingPlanes,n),r&&W.viewport(M.copy(r)),i.length>0&&Ye(i,t,n),a.length>0&&Ye(a,t,n),o.length>0&&Ye(o,t,n),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Je(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=U.has(`EXT_color_buffer_half_float`)||U.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Ar(1,1,{generateMipmaps:!0,type:e?Et:yt,minFilter:vt,samples:Math.max(4,me.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_r.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||M;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(P),ne=T.getClearAlpha(),ne<1&&T.setClearColor(16777215,.5),T.clear(),de&&Ee.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),z===!0&&we.setGlobalState(T.clippingPlanes,r),Ye(e,n,r),K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a),U.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Xe(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(P,ne),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Ye(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Xe(o,t,n,s,l,c)}}function Xe(e,t,n,r,i,a){e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Ze(e,t,n){t.isScene!==!0&&(t=ue);let r=G.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=be.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ge.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Le),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return $e(e,s),d}else s.uniforms=be.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=be.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=we.uniform),$e(e,s),r.needsLights=rt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Qe(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=al.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function $e(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function et(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function tt(e,t,n,r,i){t.isScene!==!0&&(t=ue),K.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=A===null?T.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:_r.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ge.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=G.get(r),y=x.state.lights;if(z===!0&&(B===!0||e!==ee)){let t=e===ee&&r.id===j;we.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==we.numPlanes||v.numIntersection!==we.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Ze(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(W.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==j&&(j=r.id,w=!0),v.needsLights){let e=et(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ee!==e){W.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(H,`projectionMatrix`,e.projectionMatrix),O.setValue(H,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(H,ce.setFromMatrixPosition(e.matrixWorld)),me.logarithmicDepthBuffer&&O.setValue(H,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(H,`isOrthographic`,e.isOrthographicCamera===!0),ee!==e&&(ee=e,w=!0,E=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&O.setValue(H,`directionalShadowMap`,y.state.directionalShadowMap,K),y.state.spotShadowMap.length>0&&O.setValue(H,`spotShadowMap`,y.state.spotShadowMap,K),y.state.pointShadowMap.length>0&&O.setValue(H,`pointShadowMap`,y.state.pointShadowMap,K)),i.isSkinnedMesh){O.setOptional(H,i,`bindMatrix`),O.setOptional(H,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(H,`boneTexture`,e.boneTexture,K))}i.isBatchedMesh&&(O.setOptional(H,i,`batchingTexture`),O.setValue(H,`batchingTexture`,i._matricesTexture,K),O.setOptional(H,i,`batchingIdTexture`),O.setValue(H,`batchingIdTexture`,i._indirectTexture,K),O.setOptional(H,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(H,`batchingColorTexture`,i._colorsTexture,K));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0)&&De.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(H,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Eu()),w){if(O.setValue(H,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&nt(k,E),a&&r.fog===!0&&xe.refreshFogUniforms(k,a),xe.refreshMaterialUniforms(k,r,ie,F,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}al.upload(H,Qe(v),k,K)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(al.upload(H,Qe(v),k,K),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(H,`center`,i.center),O.setValue(H,`modelViewMatrix`,i.modelViewMatrix),O.setValue(H,`normalMatrix`,i.normalMatrix),O.setValue(H,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Me.update(n,S),Me.bind(n,S)}}return S}function nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function rt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(e,t,n){let r=G.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let it=H.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){A=e,O=t,k=n;let r=null,i=!1,a=!1;if(e){let o=G.get(e);if(o.__useDefaultFramebuffer!==void 0){W.bindFramebuffer(H.FRAMEBUFFER,o.__webglFramebuffer),M.copy(e.viewport),N.copy(e.scissor),te=e.scissorTest,W.viewport(M),W.scissor(N),W.setScissorTest(te),j=-1;return}else if(o.__webglFramebuffer===void 0)K.setupRenderTarget(e);else if(o.__hasExternalTextures)K.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&G.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);K.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&K.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,M.copy(e.viewport),N.copy(e.scissor),te=e.scissorTest}else M.copy(I).multiplyScalar(ie).floor(),N.copy(se).multiplyScalar(ie).floor(),te=L;if(n!==0&&(r=it),W.bindFramebuffer(H.FRAMEBUFFER,r)&&W.drawBuffers(e,r),W.viewport(M),W.scissor(N),W.setScissorTest(te),i){let r=G.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=G.get(e.textures[t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=G.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,t.__webglTexture,n)}j=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Y(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){W.bindFramebuffer(H.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s),!me.textureFormatReadable(c)){Y(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!me.textureTypeReadable(l)){Y(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&H.readPixels(t,n,r,i,Ae.convert(c),Ae.convert(l),a)}finally{let e=A===null?null:G.get(A).__webglFramebuffer;W.bindFramebuffer(H.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){W.bindFramebuffer(H.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s),!me.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!me.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,d),H.bufferData(H.PIXEL_PACK_BUFFER,a.byteLength,H.STREAM_READ),H.readPixels(t,n,r,i,Ae.convert(l),Ae.convert(u),0);let f=A===null?null:G.get(A).__webglFramebuffer;W.bindFramebuffer(H.FRAMEBUFFER,f);let p=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Zn(H,p,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,d),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,a),H.deleteBuffer(d),H.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;K.setTexture2D(e,0),H.copyTexSubImage2D(H.TEXTURE_2D,n,0,0,o,s,i,a),W.unbindTexture()};let at=H.createFramebuffer(),ot=H.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ae.convert(t.format),_=Ae.convert(t.type),v;t.isData3DTexture?(K.setTexture3D(t,0),v=H.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(K.setTexture2DArray(t,0),v=H.TEXTURE_2D_ARRAY):(K.setTexture2D(t,0),v=H.TEXTURE_2D),W.activeTexture(H.TEXTURE0),W.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,t.flipY),W.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),W.pixelStorei(H.UNPACK_ALIGNMENT,t.unpackAlignment);let y=W.getParameter(H.UNPACK_ROW_LENGTH),b=W.getParameter(H.UNPACK_IMAGE_HEIGHT),x=W.getParameter(H.UNPACK_SKIP_PIXELS),S=W.getParameter(H.UNPACK_SKIP_ROWS),C=W.getParameter(H.UNPACK_SKIP_IMAGES);W.pixelStorei(H.UNPACK_ROW_LENGTH,h.width),W.pixelStorei(H.UNPACK_IMAGE_HEIGHT,h.height),W.pixelStorei(H.UNPACK_SKIP_PIXELS,l),W.pixelStorei(H.UNPACK_SKIP_ROWS,u),W.pixelStorei(H.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=G.get(e),r=G.get(t),h=G.get(n.__renderTarget),g=G.get(r.__renderTarget);W.bindFramebuffer(H.READ_FRAMEBUFFER,h.__webglFramebuffer),W.bindFramebuffer(H.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,G.get(e).__webglTexture,i,d+n),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,G.get(t).__webglTexture,a,m+n)),H.blitFramebuffer(l,u,o,s,f,p,o,s,H.DEPTH_BUFFER_BIT,H.NEAREST);W.bindFramebuffer(H.READ_FRAMEBUFFER,null),W.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||G.has(e)){let n=G.get(e),r=G.get(t);W.bindFramebuffer(H.READ_FRAMEBUFFER,at),W.bindFramebuffer(H.DRAW_FRAMEBUFFER,ot);for(let e=0;e<c;e++)w?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,n.__webglTexture,i),T?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,r.__webglTexture,a),i===0?T?H.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):H.copyTexSubImage2D(v,a,f,p,l,u,o,s):H.blitFramebuffer(l,u,o,s,f,p,o,s,H.COLOR_BUFFER_BIT,H.NEAREST);W.bindFramebuffer(H.READ_FRAMEBUFFER,null),W.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?H.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h);W.pixelStorei(H.UNPACK_ROW_LENGTH,y),W.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b),W.pixelStorei(H.UNPACK_SKIP_PIXELS,x),W.pixelStorei(H.UNPACK_SKIP_ROWS,S),W.pixelStorei(H.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&H.generateMipmap(v),W.unbindTexture()},this.initRenderTarget=function(e){G.get(e).__webglFramebuffer===void 0&&K.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?K.setTextureCube(e,0):e.isData3DTexture?K.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?K.setTexture2DArray(e,0):K.setTexture2D(e,0),W.unbindTexture()},this.resetState=function(){O=0,k=0,A=null,W.reset(),je.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_r._getDrawingBufferColorSpace(e),t.unpackColorSpace=_r._getUnpackColorSpace()}},Ou=class{constructor({trackGPU:e=!1,trackCPT:t=!1,trackHz:n=!1,trackFPS:r=!0,logsPerSecond:i=4,graphsPerSecond:a=30,samplesLog:o=40,samplesGraph:s=10,precision:c=2}={}){this.gl=null,this.ext=null,this.gpuDevice=null,this.gpuBackend=null,this.renderer=null,this.activeQuery=null,this.gpuQueries=[],this.threeRendererPatched=!1,this.webgpuNative=!1,this.gpuQuerySet=null,this.gpuResolveBuffer=null,this.gpuReadBuffers=[],this.gpuWriteBufferIndex=0,this.gpuFrameCount=0,this.pendingResolve=null,this.frameTimes=[],this.frameTimesHead=0,this.renderCount=0,this.cpuStartTime=0,this.totalCpuDuration=0,this.totalGpuDuration=0,this.totalGpuDurationCompute=0,this.averageFps={logs:[],graph:[]},this.averageCpu={logs:[],graph:[]},this.averageGpu={logs:[],graph:[]},this.averageGpuCompute={logs:[],graph:[]},this.trackGPU=e,this.trackCPT=t,this.trackHz=n,this.trackFPS=r,this.samplesLog=o,this.samplesGraph=s,this.precision=c,this.logsPerSecond=i,this.graphsPerSecond=a;let l=performance.now();this.prevGraphTime=l,this.beginTime=l,this.prevTextTime=l,this.prevCpuTime=l}async init(e){if(!e){console.error(`Stats: The "canvas" parameter is undefined.`);return}if(!this.handleThreeRenderer(e)&&!await this.handleWebGPURenderer(e)&&!this.handleNativeWebGPU(e))if(this.initializeWebGL(e)){this.trackGPU&&this.initializeGPUTracking();return}else console.error(`Stats-gl: Failed to initialize WebGL context`)}handleNativeWebGPU(e){return e&&typeof e.createCommandEncoder==`function`&&typeof e.createQuerySet==`function`&&e.queue?(this.gpuDevice=e,this.webgpuNative=!0,this.trackGPU&&e.features?.has(`timestamp-query`)&&(this.initializeWebGPUTiming(),this.onWebGPUTimestampSupported()),!0):!1}initializeWebGPUTiming(){if(this.gpuDevice){this.gpuQuerySet=this.gpuDevice.createQuerySet({type:`timestamp`,count:2}),this.gpuResolveBuffer=this.gpuDevice.createBuffer({size:16,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC});for(let e=0;e<2;e++)this.gpuReadBuffers.push(this.gpuDevice.createBuffer({size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}))}}handleThreeRenderer(e){return e.isWebGLRenderer&&!this.threeRendererPatched?(this.patchThreeRenderer(e),this.gl=e.getContext(),this.trackGPU&&this.initializeGPUTracking(),!0):!1}async handleWebGPURenderer(e){return e.isWebGPURenderer?(this.renderer=e,(this.trackGPU||this.trackCPT)&&(e.backend.trackTimestamp=!0,e._initialized||await e.init(),e.hasFeature(`timestamp-query`)&&this.onWebGPUTimestampSupported()),this.info=e.info,this.gpuBackend=e.backend,this.gpuDevice=e.backend?.device||null,this.patchThreeWebGPU(e),!0):!1}onWebGPUTimestampSupported(){}initializeWebGL(e){if(e instanceof WebGL2RenderingContext)this.gl=e;else if(e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas){if(this.gl=e.getContext(`webgl2`),!this.gl)return console.error(`Stats: Unable to obtain WebGL2 context.`),!1}else return console.error(`Stats: Invalid input type. Expected WebGL2RenderingContext, HTMLCanvasElement, or OffscreenCanvas.`),!1;return!0}initializeGPUTracking(){this.gl&&(this.ext=this.gl.getExtension(`EXT_disjoint_timer_query_webgl2`),this.ext&&this.onGPUTrackingInitialized())}onGPUTrackingInitialized(){}getTimestampWrites(){if(!(!this.webgpuNative||!this.gpuQuerySet))return{querySet:this.gpuQuerySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}begin(e){this.beginProfiling(),!this.webgpuNative&&(!this.gl||!this.ext||(this.activeQuery&&this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.activeQuery=this.gl.createQuery(),this.activeQuery&&this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,this.activeQuery)))}end(e){if(this.renderCount++,this.webgpuNative&&e&&this.gpuQuerySet&&this.gpuResolveBuffer&&this.gpuReadBuffers.length>0){this.gpuFrameCount++;let t=this.gpuReadBuffers[this.gpuWriteBufferIndex];t.mapState===`unmapped`&&(e.resolveQuerySet(this.gpuQuerySet,0,2,this.gpuResolveBuffer,0),e.copyBufferToBuffer(this.gpuResolveBuffer,0,t,0,16)),this.endProfiling();return}this.gl&&this.ext&&this.activeQuery&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.gpuQueries.push({query:this.activeQuery}),this.activeQuery=null),this.endProfiling()}async resolveTimestampsAsync(){if(!this.webgpuNative||this.gpuReadBuffers.length===0)return this.totalGpuDuration;if(this.pendingResolve)return this.pendingResolve;let e=(this.gpuWriteBufferIndex+1)%2,t=this.gpuReadBuffers[e];if(this.gpuWriteBufferIndex=(this.gpuWriteBufferIndex+1)%2,this.gpuFrameCount<2||t.mapState!==`unmapped`)return this.totalGpuDuration;this.pendingResolve=this._resolveTimestamps(t);try{return await this.pendingResolve}finally{this.pendingResolve=null}}async _resolveTimestamps(e){try{await e.mapAsync(GPUMapMode.READ);let t=new BigInt64Array(e.getMappedRange()),n=t[0],r=t[1];e.unmap();let i=Number(r-n);return this.totalGpuDuration=i/1e6,this.totalGpuDuration}catch{return this.totalGpuDuration}}processGpuQueries(){if(!(!this.gl||!this.ext)){this.totalGpuDuration=0;for(let e=this.gpuQueries.length-1;e>=0;e--){let t=this.gpuQueries[e],n=this.gl.getQueryParameter(t.query,this.gl.QUERY_RESULT_AVAILABLE),r=this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);if(n&&!r){let n=this.gl.getQueryParameter(t.query,this.gl.QUERY_RESULT)*1e-6;this.totalGpuDuration+=n,this.gl.deleteQuery(t.query),this.gpuQueries.splice(e,1)}}}}processWebGPUTimestamps(){this.totalGpuDuration=this.info.render.timestamp,this.totalGpuDurationCompute=this.info.compute.timestamp}beginProfiling(){this.cpuStartTime=performance.now()}endProfiling(){this.totalCpuDuration+=performance.now()-this.cpuStartTime}calculateFps(){let e=performance.now(),t=e-1e3;for(this.frameTimes.push(e);this.frameTimesHead<this.frameTimes.length&&this.frameTimes[this.frameTimesHead]<=t;)this.frameTimesHead++;return this.frameTimesHead>128&&(this.frameTimes=this.frameTimes.slice(this.frameTimesHead),this.frameTimesHead=0),Math.round(this.frameTimes.length-this.frameTimesHead)}updateAverages(){this.addToAverage(this.totalCpuDuration,this.averageCpu),this.addToAverage(this.totalGpuDuration,this.averageGpu),this.info&&this.totalGpuDurationCompute!==void 0&&this.addToAverage(this.totalGpuDurationCompute,this.averageGpuCompute)}addToAverage(e,t){for(t.logs.push(e);t.logs.length>this.samplesLog;)t.logs.shift();for(t.graph.push(e);t.graph.length>this.samplesGraph;)t.graph.shift()}resetCounters(){this.renderCount=0,this.totalCpuDuration=0,this.beginTime=performance.now()}getData(){let e=this.averageFps.logs,t=this.averageCpu.logs,n=this.averageGpu.logs,r=this.averageGpuCompute.logs;return{fps:e.length>0?e[e.length-1]:0,cpu:t.length>0?t[t.length-1]:0,gpu:n.length>0?n[n.length-1]:0,gpuCompute:r.length>0?r[r.length-1]:0}}patchThreeWebGPU(e){let t=e.info.reset,n=this;e.info.reset=function(){n.beginProfiling(),t.call(this)}}patchThreeRenderer(e){let t=e.render,n=this;e.render=function(e,r){n.begin(),t.call(this,e,r),n.end()},this.threeRendererPatched=!0}dispose(){if(this.gl){if(this.activeQuery&&this.ext){try{this.gl.endQuery(this.ext.TIME_ELAPSED_EXT)}catch{}this.gl.deleteQuery(this.activeQuery),this.activeQuery=null}for(let e of this.gpuQueries)this.gl.deleteQuery(e.query);this.gpuQueries.length=0}this.gpuQuerySet&&=(this.gpuQuerySet.destroy(),null),this.gpuResolveBuffer&&=(this.gpuResolveBuffer.destroy(),null);for(let e of this.gpuReadBuffers)e.mapState===`mapped`&&e.unmap(),e.destroy();this.gpuReadBuffers.length=0,this.gpuFrameCount=0,this.pendingResolve=null,this.webgpuNative=!1,this.gl=null,this.ext=null,this.info=void 0,this.gpuDevice=null,this.gpuBackend=null,this.renderer=null,this.frameTimes.length=0,this.frameTimesHead=0,this.averageFps.logs.length=0,this.averageFps.graph.length=0,this.averageCpu.logs.length=0,this.averageCpu.graph.length=0,this.averageGpu.logs.length=0,this.averageGpu.graph.length=0,this.averageGpuCompute.logs.length=0,this.averageGpuCompute.graph.length=0}},ku=class{constructor(e,t,n){this.id=0,this.name=e,this.fg=t,this.bg=n,this.gradient=null,this.PR=Math.round(typeof window<`u`&&window.devicePixelRatio||1),this.WIDTH=90*this.PR,this.HEIGHT=48*this.PR,this.TEXT_X=3*this.PR,this.TEXT_Y=2*this.PR,this.GRAPH_X=3*this.PR,this.GRAPH_Y=15*this.PR,this.GRAPH_WIDTH=84*this.PR,this.GRAPH_HEIGHT=30*this.PR,this.canvas=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(this.WIDTH,this.HEIGHT),this.canvas.width=this.WIDTH,this.canvas.height=this.HEIGHT,this.canvas.style.width=`90px`,this.canvas.style.height=`48px`,this.canvas.style.position=`absolute`,this.canvas.style.cssText=`width:90px;height:48px;background-color: transparent !important;`,this.context=this.canvas.getContext(`2d`),this.initializeCanvas()}createGradient(){if(!this.context)throw Error(`No context`);let e=this.context.createLinearGradient(0,this.GRAPH_Y,0,this.GRAPH_Y+this.GRAPH_HEIGHT),t,n=this.fg;switch(this.fg.toLowerCase()){case`#0ff`:t=`#006666`;break;case`#0f0`:t=`#006600`;break;case`#ff0`:t=`#666600`;break;case`#e1e1e1`:t=`#666666`;break;default:t=this.bg;break}return e.addColorStop(0,t),e.addColorStop(1,n),e}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font=`bold `+9*this.PR+`px Helvetica,Arial,sans-serif`,this.context.textBaseline=`top`,this.gradient=this.createGradient(),this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT),this.context.fillStyle=this.fg,this.context.fillText(this.name,this.TEXT_X,this.TEXT_Y),this.context.fillStyle=this.bg,this.context.globalAlpha=.9,this.context.fillRect(this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH,this.GRAPH_HEIGHT))}update(e,t,n=0,r=``){if(!this.context||!this.gradient)return;let i=Math.min(1/0,e),a=Math.max(t,e);this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.GRAPH_Y);let o=`${e.toFixed(n)} ${this.name}`;this.context.fillStyle=this.fg,this.context.fillText(o,this.TEXT_X,this.TEXT_Y);let s=this.TEXT_X+this.context.measureText(o).width;r&&(this.context.fillStyle=`#f90`,this.context.fillText(r,s,this.TEXT_Y),s+=this.context.measureText(r).width),this.context.fillStyle=this.fg,this.context.fillText(` (${i.toFixed(n)}-${parseFloat(a.toFixed(n))})`,s,this.TEXT_Y)}updateGraph(e,t){if(!this.context||!this.gradient)return;e===0&&t===0&&(t=1),t=Math.max(t,e,.1),e=Math.max(e,0);let n=Math.round(this.GRAPH_X),r=Math.round(this.GRAPH_Y),i=Math.round(this.GRAPH_WIDTH),a=Math.round(this.GRAPH_HEIGHT),o=Math.round(this.PR);this.context.drawImage(this.canvas,n+o,r,i-o,a,n,r,i-o,a),this.context.fillStyle=this.bg,this.context.fillRect(n+i-o,r,o,a);let s=Math.min(a,Math.round(e/t*a));s>0&&(this.context.globalAlpha=.9,this.context.fillStyle=this.gradient,this.context.fillRect(n+i-o,r+(a-s),o,s)),this.context.globalAlpha=1}},Au=class extends ku{constructor(e,t,n){super(e,t,n),this.vsyncValue=0,this.SMALL_HEIGHT=9*this.PR,this.HEIGHT=this.SMALL_HEIGHT,this.WIDTH=35*this.PR,this.TEXT_Y=0*this.PR,this.canvas.height=this.HEIGHT,this.canvas.width=this.WIDTH,this.canvas.style.height=`9px`,this.canvas.style.width=`35px`,this.canvas.style.cssText=`
            width: 35px;
            height: 9px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: transparent !important;
            pointer-events: none;
        `,this.initializeCanvas()}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font=`bold `+9*this.PR+`px Helvetica,Arial,sans-serif`,this.context.textBaseline=`top`,this.context.globalAlpha=1)}update(e,t,n=0){this.context&&(this.vsyncValue=e,this.context.clearRect(0,0,this.WIDTH,this.HEIGHT),this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillText(`${e.toFixed(0)}Hz`,this.TEXT_X,this.TEXT_Y))}updateGraph(e,t){}setOffset(e,t){this.canvas.style.transform=`translate(${e}px, ${t}px)`}},ju=class extends ku{constructor(e){super(e,`#fff`,`#111`),this.currentBitmap=null,this.sourceAspect=1,this.initializeCanvas()}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!0,this.context.font=`bold `+9*this.PR+`px Helvetica,Arial,sans-serif`,this.context.textBaseline=`top`,this.context.fillStyle=`#000`,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT),this.drawLabelOverlay())}drawLabelOverlay(){this.context&&(this.context.fillStyle=`rgba(0, 0, 0, 0.5)`,this.context.fillRect(0,0,this.WIDTH,this.GRAPH_Y),this.context.fillStyle=this.fg,this.context.fillText(this.name,this.TEXT_X,this.TEXT_Y))}setSourceSize(e,t){this.sourceAspect=e/t}updateTexture(e){if(!this.context)return;this.currentBitmap&&this.currentBitmap.close(),this.currentBitmap=e,this.context.fillStyle=`#000`,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT);let t=this.WIDTH/this.HEIGHT,n,r,i,a;this.sourceAspect>t?(n=this.WIDTH,r=this.WIDTH/this.sourceAspect,i=0,a=(this.HEIGHT-r)/2):(r=this.HEIGHT,n=this.HEIGHT*this.sourceAspect,i=(this.WIDTH-n)/2,a=0),this.context.drawImage(e,i,a,n,r),this.drawLabelOverlay()}setLabel(e){this.name=e,this.drawLabelOverlay()}update(e,t,n=0,r=``){}updateGraph(e,t){}dispose(){this.currentBitmap&&=(this.currentBitmap.close(),null)}},Mu=class{constructor(e,t=90,n=48){this.previewFbo=null,this.previewTexture=null,this.gl=e,this.previewWidth=t,this.previewHeight=n,this.pixels=new Uint8Array(t*n*4),this.flippedPixels=new Uint8Array(t*n*4),this.initResources()}resize(e,t){e===this.previewWidth&&t===this.previewHeight||(this.previewWidth=e,this.previewHeight=t,this.pixels=new Uint8Array(e*t*4),this.flippedPixels=new Uint8Array(e*t*4),this.dispose(),this.initResources())}initResources(){let e=this.gl;this.previewTexture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.previewTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,this.previewWidth,this.previewHeight,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.previewFbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.previewFbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.previewTexture,0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null)}async capture(e,t,n,r=`default`){let i=this.gl,a=i.getParameter(i.READ_FRAMEBUFFER_BINDING),o=i.getParameter(i.DRAW_FRAMEBUFFER_BINDING);i.bindFramebuffer(i.READ_FRAMEBUFFER,e),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,this.previewFbo),i.blitFramebuffer(0,0,t,n,0,0,this.previewWidth,this.previewHeight,i.COLOR_BUFFER_BIT,i.LINEAR),i.bindFramebuffer(i.READ_FRAMEBUFFER,this.previewFbo),i.readPixels(0,0,this.previewWidth,this.previewHeight,i.RGBA,i.UNSIGNED_BYTE,this.pixels),i.bindFramebuffer(i.READ_FRAMEBUFFER,a),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,o);let s=this.flipY(this.pixels,this.previewWidth,this.previewHeight),c=new ImageData(new Uint8ClampedArray(s),this.previewWidth,this.previewHeight);return createImageBitmap(c)}flipY(e,t,n){let r=t*4;for(let t=0;t<n;t++){let i=t*r,a=(n-1-t)*r;this.flippedPixels.set(e.subarray(i,i+r),a)}return this.flippedPixels}removeSource(e){}dispose(){let e=this.gl;this.previewFbo&&=(e.deleteFramebuffer(this.previewFbo),null),this.previewTexture&&=(e.deleteTexture(this.previewTexture),null)}},Nu=class{constructor(e,t=90,n=48){this.previewTexture=null,this.stagingBuffer=null,this.blitPipeline=null,this.sampler=null,this.bindGroupLayout=null,this.initialized=!1,this.device=e,this.previewWidth=t,this.previewHeight=n,this.pixelsBuffer=new Uint8ClampedArray(t*n*4)}resize(e,t){e===this.previewWidth&&t===this.previewHeight||(this.previewWidth=e,this.previewHeight=t,this.pixelsBuffer=new Uint8ClampedArray(e*t*4),this.previewTexture&&this.previewTexture.destroy(),this.stagingBuffer&&this.stagingBuffer.destroy(),this.previewTexture=null,this.stagingBuffer=null,this.initialized&&this.createSizeResources())}createSizeResources(){let e=this.device;this.previewTexture=e.createTexture({size:{width:this.previewWidth,height:this.previewHeight},format:`rgba8unorm`,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC});let t=Math.ceil(this.previewWidth*4/256)*256;this.stagingBuffer=e.createBuffer({size:t*this.previewHeight,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}async initResources(){if(this.initialized)return;let e=this.device;this.createSizeResources(),this.sampler=e.createSampler({minFilter:`linear`,magFilter:`linear`});let t=e.createShaderModule({code:`
        @group(0) @binding(0) var texSampler: sampler;
        @group(0) @binding(1) var texInput: texture_2d<f32>;

        struct VertexOutput {
          @builtin(position) position: vec4f,
          @location(0) uv: vec2f
        }

        @vertex
        fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
          var positions = array<vec2f, 3>(
            vec2f(-1.0, -1.0),
            vec2f(3.0, -1.0),
            vec2f(-1.0, 3.0)
          );
          var uvs = array<vec2f, 3>(
            vec2f(0.0, 1.0),
            vec2f(2.0, 1.0),
            vec2f(0.0, -1.0)
          );

          var output: VertexOutput;
          output.position = vec4f(positions[vertexIndex], 0.0, 1.0);
          output.uv = uvs[vertexIndex];
          return output;
        }

        @fragment
        fn fragmentMain(@location(0) uv: vec2f) -> @location(0) vec4f {
          return textureSample(texInput, texSampler, uv);
        }
      `});this.bindGroupLayout=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{type:`filtering`}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:`float`}}]}),this.blitPipeline=e.createRenderPipeline({layout:e.createPipelineLayout({bindGroupLayouts:[this.bindGroupLayout]}),vertex:{module:t,entryPoint:`vertexMain`},fragment:{module:t,entryPoint:`fragmentMain`,targets:[{format:`rgba8unorm`}]},primitive:{topology:`triangle-list`}}),this.initialized=!0}async capture(e){if(await this.initResources(),!this.previewTexture||!this.stagingBuffer||!this.blitPipeline||!this.sampler||!this.bindGroupLayout)return null;let t=this.device,n=t.createBindGroup({layout:this.bindGroupLayout,entries:[{binding:0,resource:this.sampler},{binding:1,resource:e.createView()}]}),r=t.createCommandEncoder(),i=r.beginRenderPass({colorAttachments:[{view:this.previewTexture.createView(),loadOp:`clear`,storeOp:`store`,clearValue:{r:0,g:0,b:0,a:1}}]});i.setPipeline(this.blitPipeline),i.setBindGroup(0,n),i.draw(3),i.end();let a=Math.ceil(this.previewWidth*4/256)*256;r.copyTextureToBuffer({texture:this.previewTexture},{buffer:this.stagingBuffer,bytesPerRow:a},{width:this.previewWidth,height:this.previewHeight}),t.queue.submit([r.finish()]),await this.stagingBuffer.mapAsync(GPUMapMode.READ);let o=new Uint8Array(this.stagingBuffer.getMappedRange());for(let e=0;e<this.previewHeight;e++){let t=e*a,n=e*this.previewWidth*4;this.pixelsBuffer.set(o.subarray(t,t+this.previewWidth*4),n)}this.stagingBuffer.unmap();let s=new ImageData(new Uint8ClampedArray(this.pixelsBuffer),this.previewWidth,this.previewHeight);return createImageBitmap(s)}dispose(){this.previewTexture&&this.previewTexture.destroy(),this.stagingBuffer&&this.stagingBuffer.destroy(),this.previewTexture=null,this.stagingBuffer=null,this.blitPipeline=null,this.sampler=null,this.bindGroupLayout=null,this.initialized=!1}};function Pu(e,t){return e.isWebGLRenderTarget&&e.__webglFramebuffer?{framebuffer:e.__webglFramebuffer,width:e.width||1,height:e.height||1}:null}function Fu(e,t){return e.isRenderTarget&&e.texture&&t.get&&t.get(e.texture)?.texture||null}var Iu=class e extends Ou{constructor({trackGPU:t=!1,trackCPT:n=!1,trackHz:r=!1,trackFPS:i=!0,logsPerSecond:a=4,graphsPerSecond:o=30,samplesLog:s=40,samplesGraph:c=10,precision:l=2,minimal:u=!1,horizontal:d=!0,mode:f=0}={}){super({trackGPU:t,trackCPT:n,trackHz:r,trackFPS:i,logsPerSecond:a,graphsPerSecond:o,samplesLog:s,samplesGraph:c,precision:l}),this.fpsPanel=null,this.msPanel=null,this.gpuPanel=null,this.gpuPanelCompute=null,this.vsyncPanel=null,this.workerCpuPanel=null,this.texturePanels=new Map,this.texturePanelRow=null,this.textureCaptureWebGL=null,this.textureCaptureWebGPU=null,this.textureSourcesWebGL=new Map,this.textureSourcesWebGPU=new Map,this.texturePreviewWidth=90,this.texturePreviewHeight=48,this.lastRendererWidth=0,this.lastRendererHeight=0,this.textureUpdatePending=!1,this.updateCounter=0,this.lastMin={},this.lastMax={},this.lastValue={},this.VSYNC_RATES=[{refreshRate:60,frameTime:16.67},{refreshRate:75,frameTime:13.33},{refreshRate:90,frameTime:11.11},{refreshRate:120,frameTime:8.33},{refreshRate:144,frameTime:6.94},{refreshRate:165,frameTime:6.06},{refreshRate:240,frameTime:4.17}],this.detectedVSync=null,this.frameTimeHistory=[],this.HISTORY_SIZE=120,this.VSYNC_THRESHOLD=.05,this.lastFrameTime=0,this.externalData=null,this.hasNewExternalData=!1,this.isWorker=!1,this.averageWorkerCpu={logs:[],graph:[]},this.handleClick=e=>{e.preventDefault(),this.showPanel(++this.mode%this.dom.children.length)},this.handleResize=()=>{this.fpsPanel&&this.resizePanel(this.fpsPanel),this.msPanel&&this.resizePanel(this.msPanel),this.workerCpuPanel&&this.resizePanel(this.workerCpuPanel),this.gpuPanel&&this.resizePanel(this.gpuPanel),this.gpuPanelCompute&&this.resizePanel(this.gpuPanelCompute)},this.mode=f,this.horizontal=d,this.minimal=u,this.dom=document.createElement(`div`),this.initializeDOM(),this._panelId=0,this.trackFPS&&(this.fpsPanel=this.addPanel(new e.Panel(`FPS`,`#0ff`,`#002`)),this.msPanel=this.addPanel(new e.Panel(`CPU`,`#0f0`,`#020`))),this.trackGPU&&(this.gpuPanel=this.addPanel(new e.Panel(`GPU`,`#ff0`,`#220`))),this.trackCPT&&(this.gpuPanelCompute=this.addPanel(new e.Panel(`CPT`,`#e1e1e1`,`#212121`))),this.trackHz===!0&&(this.vsyncPanel=new Au(``,`#f0f`,`#202`),this.dom.appendChild(this.vsyncPanel.canvas),this.vsyncPanel.setOffset(56,35)),this.setupEventListeners()}initializeDOM(){this.dom.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0.9;
      z-index: 10000;
      ${this.minimal?`cursor: pointer;`:``}
    `}setupEventListeners(){this.minimal?(this.dom.addEventListener(`click`,this.handleClick),this.showPanel(this.mode)):window.addEventListener(`resize`,this.handleResize)}updateTexturePreviewDimensions(){if(!this.renderer)return;let e=this.renderer.domElement?.width||0,t=this.renderer.domElement?.height||0;if(e===this.lastRendererWidth&&t===this.lastRendererHeight||e===0||t===0)return;this.lastRendererWidth=e,this.lastRendererHeight=t;let n=e/t,r,i;if(n>1.875?(r=90,i=Math.round(90/n)):(i=48,r=Math.round(48*n)),r=Math.max(r,16),i=Math.max(i,16),r!==this.texturePreviewWidth||i!==this.texturePreviewHeight){this.texturePreviewWidth=r,this.texturePreviewHeight=i,this.textureCaptureWebGL&&this.textureCaptureWebGL.resize(r,i),this.textureCaptureWebGPU&&this.textureCaptureWebGPU.resize(r,i);for(let n of this.texturePanels.values())n.setSourceSize(e,t)}}onWebGPUTimestampSupported(){}onGPUTrackingInitialized(){}setData(t){if(this.externalData=t,this.hasNewExternalData=!0,!this.isWorker&&this.msPanel){this.isWorker=!0,this.workerCpuPanel=new e.Panel(`WRK`,`#f90`,`#220`);let t=this.msPanel.id+1;this.workerCpuPanel.id=t,this.gpuPanel&&this.gpuPanel.id>=t&&(this.gpuPanel.id++,this.resizePanel(this.gpuPanel)),this.gpuPanelCompute&&this.gpuPanelCompute.id>=t&&(this.gpuPanelCompute.id++,this.resizePanel(this.gpuPanelCompute));let n=this.msPanel.canvas;n.nextSibling?this.dom.insertBefore(this.workerCpuPanel.canvas,n.nextSibling):this.dom.appendChild(this.workerCpuPanel.canvas),this.resizePanel(this.workerCpuPanel),this._panelId++}}update(){this.externalData?this.updateFromExternalData():this.updateFromInternalData()}updateFromExternalData(){let e=this.externalData;this.endProfiling(),this.addToAverage(this.totalCpuDuration,this.averageCpu),this.totalCpuDuration=0,this.hasNewExternalData&&=(this.addToAverage(e.cpu,this.averageWorkerCpu),this.addToAverage(e.fps,this.averageFps),this.addToAverage(e.gpu,this.averageGpu),this.addToAverage(e.gpuCompute,this.averageGpuCompute),!1),this.renderPanels()}updateFromInternalData(){this.endProfiling(),this.webgpuNative?this.resolveTimestampsAsync():this.info?this.processWebGPUTimestamps():this.processGpuQueries(),this.updateAverages(),this.resetCounters(),this.renderPanels()}renderPanels(){let e=performance.now();if(!this.isWorker){for(this.frameTimes.push(e);this.frameTimes.length>0&&this.frameTimes[0]<=e-1e3;)this.frameTimes.shift();let t=Math.round(this.frameTimes.length);this.addToAverage(t,this.averageFps)}let t=e>=this.prevTextTime+1e3/this.logsPerSecond,n=e>=this.prevGraphTime+1e3/this.graphsPerSecond,r=this.isWorker?` ⛭`:``;if(this.updatePanelComponents(this.fpsPanel,this.averageFps,0,t,n,r),this.updatePanelComponents(this.msPanel,this.averageCpu,this.precision,t,n,``),this.workerCpuPanel&&this.isWorker&&this.updatePanelComponents(this.workerCpuPanel,this.averageWorkerCpu,this.precision,t,n,` ⛭`),this.gpuPanel&&this.updatePanelComponents(this.gpuPanel,this.averageGpu,this.precision,t,n,r),this.trackCPT&&this.gpuPanelCompute&&this.updatePanelComponents(this.gpuPanelCompute,this.averageGpuCompute,this.precision,t,n,r),t&&(this.prevTextTime=e),n&&(this.prevGraphTime=e,this.texturePanels.size>0&&!this.textureUpdatePending&&(this.textureUpdatePending=!0,this.updateTexturePanels().finally(()=>{this.textureUpdatePending=!1})),this.captureStatsGLNodes()),this.vsyncPanel!==null){this.detectVSync(e);let n=this.detectedVSync?.refreshRate||0;t&&n>0&&this.vsyncPanel.update(n,n)}}resetCounters(){this.renderCount=0,this.totalCpuDuration=0,this.beginTime=performance.now()}resizePanel(e){e.canvas.style.position=`absolute`,this.minimal?e.canvas.style.display=`none`:(e.canvas.style.display=`block`,this.horizontal?(e.canvas.style.top=`0px`,e.canvas.style.left=e.id*e.WIDTH/e.PR+`px`):(e.canvas.style.left=`0px`,e.canvas.style.top=e.id*e.HEIGHT/e.PR+`px`))}addPanel(e){return e.canvas&&(this.dom.appendChild(e.canvas),e.id=this._panelId,this.resizePanel(e),this._panelId++),e}showPanel(e){for(let t=0;t<this.dom.children.length;t++){let n=this.dom.children[t];n.style.display=t===e?`block`:`none`}this.mode=e}addTexturePanel(e){this.texturePanelRow||(this.texturePanelRow=document.createElement(`div`),this.texturePanelRow.style.cssText=`
        position: absolute;
        top: 48px;
        left: 0;
        display: flex;
        flex-direction: row;
      `,this.dom.appendChild(this.texturePanelRow));let t=new ju(e);return t.canvas.style.position=`relative`,t.canvas.style.left=``,t.canvas.style.top=``,this.texturePanelRow.appendChild(t.canvas),this.texturePanels.set(e,t),t}setTexture(e,t){this.updateTexturePreviewDimensions(),this.gl&&!this.textureCaptureWebGL&&(this.textureCaptureWebGL=new Mu(this.gl,this.texturePreviewWidth,this.texturePreviewHeight)),this.gpuDevice&&!this.textureCaptureWebGPU&&(this.textureCaptureWebGPU=new Nu(this.gpuDevice,this.texturePreviewWidth,this.texturePreviewHeight));let n=this.texturePanels.get(e);if(t.isWebGLRenderTarget&&this.gl){let r=Pu(t,this.gl);r&&(this.textureSourcesWebGL.set(e,{target:t,...r}),n&&n.setSourceSize(r.width,r.height));return}if(t.isRenderTarget&&this.gpuBackend){let r=Fu(t,this.gpuBackend);r&&(this.textureSourcesWebGPU.set(e,r),n&&t.width&&t.height&&n.setSourceSize(t.width,t.height));return}if(t&&typeof t.createView==`function`){this.textureSourcesWebGPU.set(e,t);return}}setTextureWebGL(e,t,n,r){this.updateTexturePreviewDimensions(),this.gl&&!this.textureCaptureWebGL&&(this.textureCaptureWebGL=new Mu(this.gl,this.texturePreviewWidth,this.texturePreviewHeight)),this.textureSourcesWebGL.set(e,{target:{isWebGLRenderTarget:!0},framebuffer:t,width:n,height:r});let i=this.texturePanels.get(e);i&&i.setSourceSize(n,r)}setTextureBitmap(e,t,n,r){let i=this.texturePanels.get(e);i&&(n!==void 0&&r!==void 0&&i.setSourceSize(n,r),i.updateTexture(t))}removeTexturePanel(e){let t=this.texturePanels.get(e);t&&(t.dispose(),t.canvas.remove(),this.texturePanels.delete(e),this.textureSourcesWebGL.delete(e),this.textureSourcesWebGPU.delete(e))}async updateTexturePanels(){if(this.updateTexturePreviewDimensions(),this.textureCaptureWebGL)for(let[e,t]of this.textureSourcesWebGL){let n=this.texturePanels.get(e);if(n){let r=t.framebuffer,i=t.width,a=t.height;t.target.isWebGLRenderTarget&&t.target.__webglFramebuffer&&(r=t.target.__webglFramebuffer,i=t.target.width||i,a=t.target.height||a);let o=await this.textureCaptureWebGL.capture(r,i,a,e);o&&n.updateTexture(o)}}if(this.textureCaptureWebGPU)for(let[e,t]of this.textureSourcesWebGPU){let n=this.texturePanels.get(e);if(n){let e=await this.textureCaptureWebGPU.capture(t);e&&n.updateTexture(e)}}}captureStatsGLNodes(){let e=this._statsGLCaptures;if(!(!e||e.size===0||!this.renderer))for(let t of e.values())t.capture&&t.capture(this.renderer)}detectVSync(e){if(this.lastFrameTime===0){this.lastFrameTime=e;return}let t=e-this.lastFrameTime;if(this.lastFrameTime=e,this.frameTimeHistory.push(t),this.frameTimeHistory.length>this.HISTORY_SIZE&&this.frameTimeHistory.shift(),this.frameTimeHistory.length<60)return;let n=this.frameTimeHistory.reduce((e,t)=>e+t)/this.frameTimeHistory.length,r=this.frameTimeHistory.reduce((e,t)=>e+(t-n)**2,0)/this.frameTimeHistory.length;if(Math.sqrt(r)>2){this.detectedVSync=null;return}let i=null,a=1/0;for(let e of this.VSYNC_RATES){let t=Math.abs(n-e.frameTime);t<a&&(a=t,i=e)}i&&a/i.frameTime<=this.VSYNC_THRESHOLD?this.detectedVSync=i:this.detectedVSync=null}updatePanelComponents(e,t,n,r,i,a=``){if(!e||t.logs.length===0)return;let o=String(e.id);o in this.lastMin||(this.lastMin[o]=1/0,this.lastMax[o]=0,this.lastValue[o]=0);let s=t.logs[t.logs.length-1];this.lastMax[o]=Math.max(...t.logs),this.lastMin[o]=Math.min(this.lastMin[o],s),this.lastValue[o]=this.lastValue[o]*.7+s*.3;let c=Math.max(Math.max(...t.logs),...t.graph.slice(-this.samplesGraph));this.updateCounter++,r&&e.update(this.lastValue[o],this.lastMax[o],n,a),i&&e.updateGraph(s,c)}updatePanel(e,t,n=2){if(!e||t.logs.length===0)return;let r=performance.now();e.name in this.lastMin||(this.lastMin[e.name]=1/0,this.lastMax[e.name]=0,this.lastValue[e.name]=0);let i=t.logs[t.logs.length-1],a=Math.max(...t.logs.slice(-30));this.lastMin[e.name]=Math.min(this.lastMin[e.name],i),this.lastMax[e.name]=Math.max(this.lastMax[e.name],i),this.lastValue[e.name]=this.lastValue[e.name]*.7+i*.3;let o=Math.max(a,...t.graph.slice(-this.samplesGraph));this.updateCounter++,this.updateCounter%(this.logsPerSecond*2)==0&&(this.lastMax[e.name]=a,this.lastMin[e.name]=i),e.update&&(r>=this.prevCpuTime+1e3/this.logsPerSecond&&e.update(this.lastValue[e.name],i,this.lastMax[e.name],o,n),r>=this.prevGraphTime+1e3/this.graphsPerSecond&&(e.updateGraph(i,o),this.prevGraphTime=r))}get domElement(){return this.dom}dispose(){this.minimal?this.dom.removeEventListener(`click`,this.handleClick):window.removeEventListener(`resize`,this.handleResize),this.textureCaptureWebGL&&=(this.textureCaptureWebGL.dispose(),null),this.textureCaptureWebGPU&&=(this.textureCaptureWebGPU.dispose(),null);for(let e of this.texturePanels.values())e.dispose();this.texturePanels.clear(),this.textureSourcesWebGL.clear(),this.textureSourcesWebGPU.clear();let e=this._statsGLCaptures;if(e){for(let t of e.values())t.dispose&&t.dispose();e.clear()}this.texturePanelRow&&=(this.texturePanelRow.remove(),null),this.dom.remove(),this.fpsPanel=null,this.msPanel=null,this.gpuPanel=null,this.gpuPanelCompute=null,this.vsyncPanel=null,this.workerCpuPanel=null,this.frameTimeHistory.length=0,this.averageWorkerCpu.logs.length=0,this.averageWorkerCpu.graph.length=0,super.dispose()}};Iu.Panel=ku,Iu.PanelTexture=ju;var Lu=Iu;function Ru(){return new vo({uniforms:{size:{value:null},cascade:{value:null},count:{value:null},frustum:{value:null},prev:{value:null},rays:{value:null},rsize:{value:null},sky:{value:null},opt:{value:null}},glslVersion:Bn,vertexShader:`
            out vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;

            in vec2 vUv;
            uniform vec2 size;
            uniform int cascade;
            uniform int count;
            uniform int frustum;

            uniform sampler2D prev;
            uniform sampler2D rays;
            uniform vec2 rsize;
            uniform int opt;
            uniform sampler2D sky;

            out vec4 fragColor;

            #define TAU 6.283185

            struct Light {
                vec3 rad;
                float tran;
            };

            Light curRay(int plane, int index, vec2 probe, int count) {
                vec2 loc = vec2(plane * count + index, floor(probe.y) / float(opt)) + 0.5;
                loc /= rsize;

                Light l;

                if(floor(loc) != vec2(0.0)) {
                    //sky is not contant emission everywhere its infinitely far away
                    l.rad = vec3(0.0);
                    l.tran = 1.0;
                    return l;
                }

                vec4 s = texture(rays, loc);
                l.rad = s.rgb;
                l.tran = s.a;

                return l;
            }

            vec3 upperCone(vec2 probe, int index, float top, float bottom) {

                vec2 pos = vec2(probe.x + float(index), floor(probe.y) / float(opt) + 0.5) / size;
                if(floor(pos) == vec2(0.0)) return texture(prev, pos).rgb;

                //atp sample sky, get corresponding weight for the upper cone
                //our dir is going to be the middle of the cone

                float angle = (top + bottom) / 2.0; //this is fine because consecutive rays in c1 and above never jump quadrants

                if(angle < 0.0) angle += TAU; //cvrt -pi..0 to pi..2pi
                angle += 1.5708 * float(frustum);
                angle = mod(angle, TAU);
                angle = angle / TAU;

                vec4 ss = texture(sky, vec2(angle, 0.5)); //linear
                return ss.rgb * (top - bottom);
            }

            void main() {
                ivec2 coord = ivec2(gl_FragCoord.xy);

                int twoN = 1 << cascade;
                int twoN1 = twoN * 2;
                int count = twoN + 1;

                int plane = coord.x / twoN;
                int index = coord.x % twoN;

                vec2 probe = vec2(plane * twoN, coord.y * opt) + 0.5;

                int even = plane % 2 == 0 ? 2 : 1;

                ivec2 downRay = ivec2(twoN, 2 * index - twoN);
                ivec2 upRay = ivec2(twoN, 2 * (index + 1) - twoN);

                int downCone = index * 2;
                int upCone = index * 2 + 1;

                //A_n+1(j) = ang(v_n+1(j + 1/2)) - ang(v_n+1(j - 1/2)) eq 13 there is a little switch up between the paper and integer indexes here
                float one = atan(float(2 * downCone - twoN1), float(twoN1));
                float two = atan(float(2 * upCone - twoN1), float(twoN1));
                float three = atan(float(2 * (upCone + 1) - twoN1), float(twoN1));

                float downWeight = two - one;
                float upWeight = three - two;

                vec3 downVal = upperCone(probe + vec2(even * downRay), downCone, two, one);
                vec3 upVal = upperCone(probe + vec2(even * upRay), upCone, three, two);

                Light dTrace = curRay(plane, index, probe, count);
                Light uTrace = curRay(plane, index + 1, probe, count);

                vec3 radDown = downWeight * dTrace.rad + dTrace.tran * downVal;
                vec3 radUp = upWeight * uTrace.rad + uTrace.tran * upVal;

                if(even == 2) {

                    Light dTraceNext = curRay(plane + 1, index,  probe + vec2(downRay), count);
                    Light uTraceNext = curRay(plane + 1, index + 1, probe + vec2(upRay), count);

                    vec3 dRad = dTrace.rad + (dTrace.tran * dTraceNext.rad);
                    float dTran = dTrace.tran * dTraceNext.tran;

                    vec3 uRad = uTrace.rad + (uTrace.tran * uTraceNext.rad);
                    float uTran = uTrace.tran * uTraceNext.tran;

                    radDown = dRad * downWeight + dTran * downVal;
                    radUp = uRad * upWeight + uTran * upVal;

                    vec3 nearDown = upperCone(probe, downCone, 0.0, 0.0);
                    vec3 nearUp = upperCone(probe, upCone, 0.0, 0.0);

                    radDown = (radDown + nearDown) / 2.0;
                    radUp = (radUp + nearUp) / 2.0;
                }

                fragColor = vec4(radDown + radUp, 1.0);
            }

        `})}function zu(){return new vo({uniforms:{cascade:{value:null},frustum:{value:null},rays:{value:null},rsize:{value:null},opt:{value:null}},glslVersion:Bn,vertexShader:`
            out vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;

            out vec4 fragColor;

            in vec2 vUv;
            uniform int cascade;
            uniform int frustum;
            uniform sampler2D rays;
            uniform vec2 rsize;
            uniform int opt;

            struct Light {
                vec3 rad;
                float tran;
            };

            Light extend(int k1, int k2, int plane, vec2 probe, ivec2 coord) {
                //when 2k is even k1 and k2 are the same thing
                //when 2k is odd k1 is k2 = k1 + 1 or k1 = k2 + 1 depending on  F- or F+

                int twoP = 1 << (cascade - 1);
                int prev = twoP + 1;

                vec2 loc = vec2(plane * 2 * prev + k1, coord.y) + 0.5;
                loc /= rsize;

                vec4 s = texture(rays, loc);
                vec3 rad = s.rgb;
                float tran = s.a;

                ivec2 dir = ivec2(twoP, 2 * k1 - twoP);
                vec2 tnvk = probe + vec2(dir);

                vec2 loc2 = vec2((plane * 2 + 1) * prev + k2, floor(tnvk.y) / float(opt)) + 0.5;
                loc2 /= rsize; //can be out of bounds

                Light l;

                if(floor(loc2) != vec2(0.0)) {
                    l.rad = rad;
                    l.tran = tran;
                    return l;
                }

                vec4 su = texture(rays, loc2);
                vec3 radTnvk = su.rgb;
                float tranTnvk = su.a;

                l.rad = rad + (tran * radTnvk);
                l.tran = tran * tranTnvk;

                return l;
            }


            void main() {
                ivec2 coord = ivec2(gl_FragCoord.xy);

                int twoN = 1 << cascade;

                int count = twoN + 1;

                int plane = coord.x / count;
                int ind = coord.x % count;

                vec2 probe = vec2(plane * twoN, coord.y * opt) + 0.5;

                //if ind is even we only need rayLower
                int rayLower = ind / 2;
                int rayUpper = (ind % 2 == 0) ? rayLower : rayLower + 1;

                Light l = extend(rayLower, rayUpper, plane, probe, coord);
                vec3 radOut = l.rad;
                float tranOut = l.tran;

                if(ind % 2 == 1) {
                    Light u = extend(rayUpper, rayLower, plane, probe, coord);
                    radOut = (l.rad + u.rad) / 2.0;
                    tranOut = (l.tran + u.tran) / 2.0;
                }

                fragColor = vec4(radOut, tranOut);
            }

        `})}function Bu(){return new vo({uniforms:{size:{value:null},cascade:{value:null},frustum:{value:null},emissAbsrp:{value:null},opt:{value:null}},glslVersion:Bn,vertexShader:`
            out vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;

            out vec4 fragColor;

            in vec2 vUv;
            uniform vec2 size;
            uniform int cascade;
            uniform int frustum;
            uniform sampler2D emissAbsrp;
            uniform sampler2D emissivity;
            uniform int opt;

            struct Light {
                vec3 rad;
                float tran;
            };

            Light DDA(vec2 probe, vec2 dir) {
                Light l;
                l.rad = vec3(0.0);
                l.tran = 1.0;

                vec2 sgn = sign(dir);
                vec2 base = floor(probe);

                vec2 dist = vec2(sqrt(1.0 + (dir.y / dir.x) * (dir.y / dir.x)),
                                 sqrt(1.0 + (dir.x / dir.y) * (dir.x / dir.y)));

                vec2 frac = fract(probe);
                vec2 ray;

                ray.x = (dir.x < 0.0) ? (frac.x * dist.x) : ((1.0 - frac.x) * dist.x);
                ray.y = (dir.y < 0.0) ? (frac.y * dist.y) : ((1.0 - frac.y) * dist.y);

                float cur = 0.0;
                float mx = length(dir);

                for(int i = 0; ; ++i) {
                    if(cur >= mx) break;
                    float next = min(ray.x, ray.y);
                    float step = min(next, mx) - cur;
                    cur = next;

                    vec2 c = (base + vec2(0.5)) / size;

                    if(floor(c) != vec2(0.0)) {
                        //we reached the sky!
                        break;
                    }

                    //rotating idea from yaazarai's but without flipping, old syntax was breaking mobile
                    //also be careful where uv(0, 0) is changes the below eqs
                    vec2 rotate[4];
                    rotate[0] = c;
                    rotate[1] = vec2(1.0 - c.y, c.x);
                    rotate[2] = 1.0 - c;
                    rotate[3] = vec2(c.y, 1.0 - c.x);

                    //ok so this part is a little confusing, first of rn absortion values are between 0 to 1 but absrp 1 gives tran = 0.24 at max step length so it can be bigger?
                    vec4 emissAbsrp = pow(texture(emissAbsrp, rotate[frustum]), vec4(2.2));
                    vec3 emiss = emissAbsrp.rgb;
                    float absrp = emissAbsrp.a;

                    //way to think about this is if absrp is 0.0 then transmittance is 1.0 meaning all light passes through and emits none
                    //if absrp going to infinity then transmittance is going to 0. If absrp inf then only emit, anywhere in between means you emit some and let some
                    //but also eq 4 on the paper comes out to be divided by absrp but we don't do that?

                    //what I dont understand is, if absrp 0.0 lets all the light through then a light source should have infinite absrp for this to properly work?
                    //but then you would also divide by inf absrp???? i dont know maybe this is a problem of representing things in the 0 to 1 range
                    //logic is if absrp 1 then its a fully opaque object. if absrp remained 1.0 then tran becomes 0.24 - 0.36 which is not what we want
                    //you could also just give absrp values > 1 to the texture which probably makes more sense than just jumping the value but again anything below 1 becomes related to volumetrics
                    //even with volumetrics since anything absrp > 0 leads to tran being < 1, in just a few steps l.tran becomes small anyways so it shouldnt differ much
                    //anyways since I overlay opque surface that is handled

                    //whaaa? look later

                    float tran = exp(-absrp * step); //eq2
                    vec3 rad = emiss * (1.0 - tran); //eq4 (no absrp div)

                    l.rad += l.tran * rad; //eq5
                    l.tran *= tran; //eq6

                    if (ray.x < ray.y) {
                        base.x += sgn.x;
                        ray.x += dist.x;
                    } else {
                        base.y += sgn.y;
                        ray.y += dist.y;
                    }
                }

                return l;
            }


            void main() {
                ivec2 coord = ivec2(gl_FragCoord.xy);

                int twoN = 1 << cascade;
                int count = twoN + 1;

                int plane = coord.x / count;
                int ind = coord.x % count;

                vec2 probe = vec2(plane * twoN, coord.y * opt) + 0.5;
                ivec2 dir = ivec2(twoN, 2 * ind - twoN);

                Light trace = DDA(probe, vec2(dir));

                fragColor = vec4(trace.rad, trace.tran);
            }

        `})}function Vu(){return new vo({uniforms:{multiplier:{value:0},size:{value:null},f1:{value:null},f2:{value:null},f3:{value:null},f4:{value:null}},glslVersion:Bn,vertexShader:`
            out vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;

            in vec2 vUv;
            uniform float multiplier;
            uniform vec2 size;
            uniform sampler2D f1;
            uniform sampler2D f2;
            uniform sampler2D f3;
            uniform sampler2D f4;

            out vec4 fragColor;

            #define TAU 6.283185

            void main() {
                vec4 rad = vec4(0.0);
                vec2 c = vUv;
                vec2 offset = vec2(1.0, 1.0) / size;

                rad += texture(f1, c  + vec2(offset.x, 0.0) );
                rad += texture(f2, vec2(c.y, 1.0 - c.x) + vec2(offset.y, 0.0) );
                rad += texture(f3, 1.0 - c + vec2(offset.x, 0.0) );
                rad += texture(f4, vec2(1.0 - c.y, c.x) + vec2(offset.y, 0.0) );

                vec4 norm = rad / TAU * multiplier;
                fragColor = vec4(pow(norm.rgb , vec3(1.0 / 2.2)), 1.0);
            }

        `})}var Hu=class{state;renderer;scene;camera;width;height;fixWidth;fixHeight;ccWidth;ccHeight;opt;modelRT;skyData;raysW;raysH;conesW;conesH;frustums;final;traceShader;extendShader;coneShader;sumShader;displayMaterial;geometry;mesh;frameCount;constructor(e){this.state=e,this.renderer=new Du({canvas:this.state.canvas,antialias:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(0,0),this.renderer.info.autoReset=!1,this.renderer.outputColorSpace=Fn,this.scene=new gi,this.camera=new Ko(-1,1,1,-1,0,1),this.calculateBounds(),this.targets(),this.shaders(),this.sky(`none`),this.renderer.setSize(this.width,this.height,!1),this.renderer.setAnimationLoop(this.render.bind(this)),this.frameCount=0}calculateBounds(){this.width=Math.floor(this.state.canvas.clientWidth*this.state.dpr),this.height=Math.floor(this.state.canvas.clientHeight*this.state.dpr),this.fixWidth=this.state.settings.probeCount,this.fixHeight=Math.floor(this.fixWidth/(this.width/this.height)),this.fixHeight%2==1&&(this.fixHeight+=1),this.height>this.width&&(this.fixHeight=this.state.settings.probeCount,this.fixWidth=Math.floor(this.fixHeight/(this.height/this.width)),this.fixWidth%2==1&&(this.fixWidth+=1)),this.ccWidth=Math.ceil(Math.log2(this.fixWidth)),this.ccHeight=Math.ceil(Math.log2(this.fixHeight)),this.opt=2}targets(){let e={minFilter:pt,magFilter:pt,type:Et},t={minFilter:gt,magFilter:gt,type:Et};this.modelRT?.dispose(),this.modelRT=new Ar(this.fixWidth,this.fixHeight,e),this.raysW?.forEach(e=>{e.dispose()}),this.raysH?.forEach(e=>{e.dispose()}),this.raysW=[],this.raysH=[];for(let n=0;n<this.ccWidth;++n){let r=this.fixHeight/this.opt,i=Math.ceil(this.fixWidth/2**n)*(2**n+1),a=n===0?t:e;this.raysW.push(new Ar(i,r,a))}for(let n=0;n<this.ccHeight;++n){let r=this.fixWidth/this.opt,i=Math.ceil(this.fixHeight/2**n)*(2**n+1),a=n===0?t:e;this.raysH.push(new Ar(i,r,a))}this.conesW?.forEach(e=>{e.dispose()}),this.conesH?.forEach(e=>{e.dispose()}),this.conesW=[],this.conesH=[];for(let n=1;n<this.ccWidth;++n){let r=this.fixHeight/this.opt,i=Math.ceil(this.fixWidth/2**n)*2**n,a=n===1?t:e;this.conesW.push(new Ar(i,r,a))}for(let n=1;n<this.ccHeight;++n){let r=this.fixWidth/this.opt,i=Math.ceil(this.fixHeight/2**n)*2**n,a=n===1?t:e;this.conesH.push(new Ar(i,r,a))}this.frustums?.forEach(e=>{e.dispose()}),this.frustums=[];for(let e=0;e<4;++e)e%2==0?this.frustums.push(new Ar(this.fixWidth,this.fixHeight/this.opt,t)):this.frustums.push(new Ar(this.fixHeight,this.fixWidth/this.opt,t))}shaders(){this.traceShader=Bu(),this.extendShader=zu(),this.coneShader=Ru(),this.sumShader=Vu(),this.displayMaterial=new xa,this.geometry=new so(2,2),this.mesh=new Na(this.geometry,this.traceShader),this.scene.add(this.mesh)}sky(e){let t=new Float32Array(800),n=new mi;for(let r=0;r<200;++r)n.set(0,0,0),r<=50&&e===`rainbow`&&n.setHSL(r/50,1,.5,Pn),t[r*4]=n.r,t[r*4+1]=n.g,t[r*4+2]=n.b,t[r*4+3]=1;this.skyData?.dispose(),this.skyData=new Ia(t,200,1,Pt,Tt),this.skyData.needsUpdate=!0}resize(){this.calculateBounds(),this.targets(),this.state.active.resize(this.fixWidth,this.fixHeight),this.renderer.setSize(this.width,this.height,!1)}render(){(Math.floor(this.state.canvas.clientWidth*this.state.dpr)!==this.width||Math.floor(this.state.canvas.clientHeight*this.state.dpr)!==this.height)&&this.resize(),this.state.update(),this.state.active.volumetrics(!1),this.renderer.setRenderTarget(this.modelRT),this.renderer.clear(),this.renderer.render(this.state.active.scene,this.state.active.camera);for(let e=0;e<4;++e){let t,n,r,i,a;e%2==0?(t=this.ccWidth,n=this.conesW,r=this.raysW,i=this.fixWidth,a=this.fixHeight):(t=this.ccHeight,n=this.conesH,r=this.raysH,i=this.fixHeight,a=this.fixWidth),this.mesh.material=this.traceShader,this.traceShader.uniforms.size.value=[i,a],this.traceShader.uniforms.cascade.value=0,this.traceShader.uniforms.frustum.value=e,this.traceShader.uniforms.emissAbsrp.value=this.modelRT.texture,this.traceShader.uniforms.opt.value=this.opt,this.renderer.setRenderTarget(r[0]),this.renderer.render(this.scene,this.camera),this.mesh.material=this.extendShader;for(let n=1;n<t;++n)this.extendShader.uniforms.cascade.value=n,this.extendShader.uniforms.frustum.value=e,this.extendShader.uniforms.rays.value=r[n-1].texture,this.extendShader.uniforms.rsize.value=[r[n-1].width,r[n-1].height],this.extendShader.uniforms.opt.value=this.opt,this.renderer.setRenderTarget(r[n]),this.renderer.render(this.scene,this.camera);this.mesh.material=this.coneShader;for(let i=t-1;i>=0;--i){let a=i===t-1?1:n[i].width,o=i===t-1?1:n[i].height,s=i===t-1?null:n[i].texture;this.coneShader.uniforms.size.value=[a,o],this.coneShader.uniforms.cascade.value=i,this.coneShader.uniforms.count.value=t,this.coneShader.uniforms.frustum.value=e,this.coneShader.uniforms.prev.value=s,this.coneShader.uniforms.rays.value=r[i].texture,this.coneShader.uniforms.rsize.value=[r[i].width,r[i].height],this.coneShader.uniforms.sky.value=this.skyData,this.coneShader.uniforms.opt.value=this.opt,this.renderer.setRenderTarget(i===0?this.frustums[e]:n[i-1]),this.renderer.render(this.scene,this.camera)}}this.mesh.material=this.sumShader,this.sumShader.uniforms.multiplier.value=this.state.settings.radiance,this.sumShader.uniforms.size.value=[this.fixWidth,this.fixHeight],this.sumShader.uniforms.f1.value=this.frustums[0].texture,this.sumShader.uniforms.f2.value=this.frustums[1].texture,this.sumShader.uniforms.f3.value=this.frustums[2].texture,this.sumShader.uniforms.f4.value=this.frustums[3].texture,this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.state.active.volumetrics(!0),this.renderer.render(this.state.active.volScene,this.state.active.camera),this.frameCount+=1,this.state.stats.update();let e=this.state.stats.getData().fps,t=(1e3/e).toFixed(1);document.getElementById(`fps`).textContent=e+` (`+t+`ms)`,this.renderer.info.reset()}},Uu=class{scene;volScene;camera;width;height;constructor(e,t){this.width=e,this.height=t,this.scene=new gi,this.volScene=new gi,this.camera=new Ko(-this.width/2,this.width/2,this.height/2,-this.height/2,0,1)}resize(e,t){this.width=e,this.height=t,this.camera=new Ko(-this.width/2,this.width/2,this.height/2,-this.height/2,0,1),this.reset()}},Wu=class extends Uu{mesh;volMesh;variant=1;constructor(e,t){super(e,t),this.createScene()}reset(){this.dispose(),this.scene.clear(),this.volScene.clear(),this.createScene()}createScene(){this.scene.clear();let e=new so(1,1),t=new xa({color:16777215});this.mesh=new Na(e,t),this.variant===2&&this.ring(),this.scene.add(this.mesh)}update(e,t,n,r){if(r.scene!==this.variant){this.variant=r.scene,this.reset();return}!this.mesh.material.map&&e&&(this.mesh.material.needsUpdate=!0),this.mesh.material.map=e,(t===0||n===0)&&(t=this.width,n=this.height);let i=Math.min(this.width/t,this.height/n)*r.scale,a=t*i,o=n*i;this.mesh.scale.set(a,o,1),this.variant===2&&this.ringUpdate(a,o,r.scale)}volumetrics(e){e?this.volScene.add(this.mesh):this.scene.add(this.mesh)}dispose(){this.mesh.material.dispose(),this.mesh.geometry.dispose(),this.volMesh?.geometry.dispose(),this.volMesh?.material.dispose()}ring(){let e=new oo(1,12),t=new xa({blending:0,opacity:.45,color:new mi().setRGB(0,0,0)});this.volMesh=new Ga(e,t,20),this.scene.add(this.volMesh)}ringUpdate(e,t,n){if(this.variant===2){let r=new oi;for(let i=0;i<this.volMesh.count;i++){let a=i/this.volMesh.count*Math.PI*2+performance.now()*5e-4,o=Math.hypot(e,t)/2*1.1,s=Math.min(this.width,this.height)/20*n;r.position.set(Math.cos(a)*o,Math.sin(a)*o,0),r.scale.set(s,s,1),r.updateMatrix(),this.volMesh.setMatrixAt(i,r.matrix)}this.volMesh.instanceMatrix.needsUpdate=!0}}},Gu=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define(`Matter`,[],r):typeof e==`object`?e.Matter=r():n.Matter=r()})(e,function(){return(function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){typeof Symbol<`u`&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:`Module`}),Object.defineProperty(e,`__esModule`,{value:!0})},n.t=function(e,t){if(t&1&&(e=n(e)),t&8||t&4&&typeof e==`object`&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,`default`,{enumerable:!0,value:e}),t&2&&typeof e!=`string`)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,`a`,t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=``,n(n.s=20)})([(function(e,t){var n={};e.exports=n,(function(){n._baseDelta=1e3/60,n._nextId=0,n._seed=0,n._nowStartTime=+new Date,n._warnedOnce={},n._decomp=null,n.extend=function(e,t){var r,i;typeof t==`boolean`?(r=2,i=t):(r=1,i=!0);for(var a=r;a<arguments.length;a++){var o=arguments[a];if(o)for(var s in o)i&&o[s]&&o[s].constructor===Object&&(!e[s]||e[s].constructor===Object)?(e[s]=e[s]||{},n.extend(e[s],i,o[s])):e[s]=o[s]}return e},n.clone=function(e,t){return n.extend({},t,e)},n.keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)t.push(n);return t},n.values=function(e){var t=[];if(Object.keys){for(var n=Object.keys(e),r=0;r<n.length;r++)t.push(e[n[r]]);return t}for(var i in e)t.push(e[i]);return t},n.get=function(e,t,n,r){t=t.split(`.`).slice(n,r);for(var i=0;i<t.length;i+=1)e=e[t[i]];return e},n.set=function(e,t,r,i,a){var o=t.split(`.`).slice(i,a);return n.get(e,t,0,-1)[o[o.length-1]]=r,r},n.shuffle=function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(n.random()*(t+1)),i=e[t];e[t]=e[r],e[r]=i}return e},n.choose=function(e){return e[Math.floor(n.random()*e.length)]},n.isElement=function(e){return typeof HTMLElement<`u`?e instanceof HTMLElement:!!(e&&e.nodeType&&e.nodeName)},n.isArray=function(e){return Object.prototype.toString.call(e)===`[object Array]`},n.isFunction=function(e){return typeof e==`function`},n.isPlainObject=function(e){return typeof e==`object`&&e.constructor===Object},n.isString=function(e){return toString.call(e)===`[object String]`},n.clamp=function(e,t,n){return e<t?t:e>n?n:e},n.sign=function(e){return e<0?-1:1},n.now=function(){if(typeof window<`u`&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-n._nowStartTime},n.random=function(t,n){return t=t===void 0?0:t,n=n===void 0?1:n,t+e()*(n-t)};var e=function(){return n._seed=(n._seed*9301+49297)%233280,n._seed/233280};n.colorToNumber=function(e){return e=e.replace(`#`,``),e.length==3&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)},n.logLevel=1,n.log=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.log.apply(console,[`matter-js:`].concat(Array.prototype.slice.call(arguments)))},n.info=function(){console&&n.logLevel>0&&n.logLevel<=2&&console.info.apply(console,[`matter-js:`].concat(Array.prototype.slice.call(arguments)))},n.warn=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.warn.apply(console,[`matter-js:`].concat(Array.prototype.slice.call(arguments)))},n.warnOnce=function(){var e=Array.prototype.slice.call(arguments).join(` `);n._warnedOnce[e]||(n.warn(e),n._warnedOnce[e]=!0)},n.deprecated=function(e,t,r){e[t]=n.chain(function(){n.warnOnce(`🔅 deprecated 🔅`,r)},e[t])},n.nextId=function(){return n._nextId++},n.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},n.map=function(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r+=1)n.push(t(e[r]));return n},n.topologicalSort=function(e){var t=[],r=[],i=[];for(var a in e)!r[a]&&!i[a]&&n._topologicalSort(a,r,i,e,t);return t},n._topologicalSort=function(e,t,r,i,a){var o=i[e]||[];r[e]=!0;for(var s=0;s<o.length;s+=1){var c=o[s];r[c]||t[c]||n._topologicalSort(c,t,r,i,a)}r[e]=!1,t[e]=!0,a.push(e)},n.chain=function(){for(var e=[],t=0;t<arguments.length;t+=1){var n=arguments[t];n._chained?e.push.apply(e,n._chained):e.push(n)}var r=function(){for(var t,n=Array(arguments.length),r=0,i=arguments.length;r<i;r++)n[r]=arguments[r];for(r=0;r<e.length;r+=1){var a=e[r].apply(t,n);a!==void 0&&(t=a)}return t};return r._chained=e,r},n.chainPathBefore=function(e,t,r){return n.set(e,t,n.chain(r,n.get(e,t)))},n.chainPathAfter=function(e,t,r){return n.set(e,t,n.chain(n.get(e,t),r))},n.setDecomp=function(e){n._decomp=e},n.getDecomp=function(){var e=n._decomp;try{!e&&typeof window<`u`&&(e=window.decomp),!e&&typeof global<`u`&&(e=global.decomp)}catch{e=null}return e}})()}),(function(e,t){var n={};e.exports=n,(function(){n.create=function(e){var t={min:{x:0,y:0},max:{x:0,y:0}};return e&&n.update(t,e),t},n.update=function(e,t,n){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var r=0;r<t.length;r++){var i=t[r];i.x>e.max.x&&(e.max.x=i.x),i.x<e.min.x&&(e.min.x=i.x),i.y>e.max.y&&(e.max.y=i.y),i.y<e.min.y&&(e.min.y=i.y)}n&&(n.x>0?e.max.x+=n.x:e.min.x+=n.x,n.y>0?e.max.y+=n.y:e.min.y+=n.y)},n.contains=function(e,t){return t.x>=e.min.x&&t.x<=e.max.x&&t.y>=e.min.y&&t.y<=e.max.y},n.overlaps=function(e,t){return e.min.x<=t.max.x&&e.max.x>=t.min.x&&e.max.y>=t.min.y&&e.min.y<=t.max.y},n.translate=function(e,t){e.min.x+=t.x,e.max.x+=t.x,e.min.y+=t.y,e.max.y+=t.y},n.shift=function(e,t){var n=e.max.x-e.min.x,r=e.max.y-e.min.y;e.min.x=t.x,e.max.x=t.x+n,e.min.y=t.y,e.max.y=t.y+r}})()}),(function(e,t){var n={};e.exports=n,(function(){n.create=function(e,t){return{x:e||0,y:t||0}},n.clone=function(e){return{x:e.x,y:e.y}},n.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},n.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},n.rotate=function(e,t,n){var r=Math.cos(t),i=Math.sin(t);n||={};var a=e.x*r-e.y*i;return n.y=e.x*i+e.y*r,n.x=a,n},n.rotateAbout=function(e,t,n,r){var i=Math.cos(t),a=Math.sin(t);r||={};var o=n.x+((e.x-n.x)*i-(e.y-n.y)*a);return r.y=n.y+((e.x-n.x)*a+(e.y-n.y)*i),r.x=o,r},n.normalise=function(e){var t=n.magnitude(e);return t===0?{x:0,y:0}:{x:e.x/t,y:e.y/t}},n.dot=function(e,t){return e.x*t.x+e.y*t.y},n.cross=function(e,t){return e.x*t.y-e.y*t.x},n.cross3=function(e,t,n){return(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x)},n.add=function(e,t,n){return n||={},n.x=e.x+t.x,n.y=e.y+t.y,n},n.sub=function(e,t,n){return n||={},n.x=e.x-t.x,n.y=e.y-t.y,n},n.mult=function(e,t){return{x:e.x*t,y:e.y*t}},n.div=function(e,t){return{x:e.x/t,y:e.y/t}},n.perp=function(e,t){return t=t===!0?-1:1,{x:t*-e.y,y:t*e.x}},n.neg=function(e){return{x:-e.x,y:-e.y}},n.angle=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)},n._temp=[n.create(),n.create(),n.create(),n.create(),n.create(),n.create()]})()}),(function(e,t,n){var r={};e.exports=r;var i=n(2),a=n(0);(function(){r.create=function(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r],a={x:i.x,y:i.y,index:r,body:t,isInternal:!1};n.push(a)}return n},r.fromPath=function(e,t){var n=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,i=[];return e.replace(n,function(e,t,n){i.push({x:parseFloat(t),y:parseFloat(n)})}),r.create(i,t)},r.centre=function(e){for(var t=r.area(e,!0),n={x:0,y:0},a,o,s,c=0;c<e.length;c++)s=(c+1)%e.length,a=i.cross(e[c],e[s]),o=i.mult(i.add(e[c],e[s]),a),n=i.add(n,o);return i.div(n,6*t)},r.mean=function(e){for(var t={x:0,y:0},n=0;n<e.length;n++)t.x+=e[n].x,t.y+=e[n].y;return i.div(t,e.length)},r.area=function(e,t){for(var n=0,r=e.length-1,i=0;i<e.length;i++)n+=(e[r].x-e[i].x)*(e[r].y+e[i].y),r=i;return t?n/2:Math.abs(n)/2},r.inertia=function(e,t){for(var n=0,r=0,a=e,o,s,c=0;c<a.length;c++)s=(c+1)%a.length,o=Math.abs(i.cross(a[s],a[c])),n+=o*(i.dot(a[s],a[s])+i.dot(a[s],a[c])+i.dot(a[c],a[c])),r+=o;return t/6*(n/r)},r.translate=function(e,t,n){n=n===void 0?1:n;var r=e.length,i=t.x*n,a=t.y*n,o;for(o=0;o<r;o++)e[o].x+=i,e[o].y+=a;return e},r.rotate=function(e,t,n){if(t!==0){var r=Math.cos(t),i=Math.sin(t),a=n.x,o=n.y,s=e.length,c,l,u,d;for(d=0;d<s;d++)c=e[d],l=c.x-a,u=c.y-o,c.x=a+(l*r-u*i),c.y=o+(l*i+u*r);return e}},r.contains=function(e,t){for(var n=t.x,r=t.y,i=e.length,a=e[i-1],o,s=0;s<i;s++){if(o=e[s],(n-a.x)*(o.y-a.y)+(r-a.y)*(a.x-o.x)>0)return!1;a=o}return!0},r.scale=function(e,t,n,a){if(t===1&&n===1)return e;a||=r.centre(e);for(var o,s,c=0;c<e.length;c++)o=e[c],s=i.sub(o,a),e[c].x=a.x+s.x*t,e[c].y=a.y+s.y*n;return e},r.chamfer=function(e,t,n,r,o){typeof t==`number`?t=[t]:t||=[8],n=n===void 0?-1:n,r||=2,o||=14;for(var s=[],c=0;c<e.length;c++){var l=e[c-1>=0?c-1:e.length-1],u=e[c],d=e[(c+1)%e.length],f=t[c<t.length?c:t.length-1];if(f===0){s.push(u);continue}var p=i.normalise({x:u.y-l.y,y:l.x-u.x}),m=i.normalise({x:d.y-u.y,y:u.x-d.x}),h=Math.sqrt(2*f**2),g=i.mult(a.clone(p),f),_=i.normalise(i.mult(i.add(p,m),.5)),v=i.sub(u,i.mult(_,h)),y=n;n===-1&&(y=f**.32*1.75),y=a.clamp(y,r,o),y%2==1&&(y+=1);for(var b=Math.acos(i.dot(p,m))/y,x=0;x<y;x++)s.push(i.add(i.rotate(g,b*x),v))}return s},r.clockwiseSort=function(e){var t=r.mean(e);return e.sort(function(e,n){return i.angle(t,e)-i.angle(t,n)}),e},r.isConvex=function(e){var t=0,n=e.length,r,i,a,o;if(n<3)return null;for(r=0;r<n;r++)if(i=(r+1)%n,a=(r+2)%n,o=(e[i].x-e[r].x)*(e[a].y-e[i].y),o-=(e[i].y-e[r].y)*(e[a].x-e[i].x),o<0?t|=1:o>0&&(t|=2),t===3)return!1;return t===0?null:!0},r.hull=function(e){var t=[],n=[],r,a;for(e=e.slice(0),e.sort(function(e,t){var n=e.x-t.x;return n===0?e.y-t.y:n}),a=0;a<e.length;a+=1){for(r=e[a];n.length>=2&&i.cross3(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(a=e.length-1;a>=0;--a){for(r=e[a];t.length>=2&&i.cross3(t[t.length-2],t[t.length-1],r)<=0;)t.pop();t.push(r)}return t.pop(),n.pop(),t.concat(n)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(2),o=n(7),s=n(0),c=n(1),l=n(11);(function(){r._timeCorrection=!0,r._inertiaScale=4,r._nextCollidingGroupId=1,r._nextNonCollidingGroupId=-1,r._nextCategory=1,r._baseDelta=1e3/60,r.create=function(t){var n={id:s.nextId(),type:`body`,label:`Body`,parts:[],plugin:{},angle:0,vertices:i.fromPath(`L 0 0 L 40 0 L 40 40 L 0 40`),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:1e3/60,_original:null},r=s.extend(n,t);return e(r,t),r},r.nextGroup=function(e){return e?r._nextNonCollidingGroupId--:r._nextCollidingGroupId++},r.nextCategory=function(){return r._nextCategory<<=1,r._nextCategory};var e=function(e,t){t||={},r.set(e,{bounds:e.bounds||c.create(e.vertices),positionPrev:e.positionPrev||a.clone(e.position),anglePrev:e.anglePrev||e.angle,vertices:e.vertices,parts:e.parts||[e],isStatic:e.isStatic,isSleeping:e.isSleeping,parent:e.parent||e}),i.rotate(e.vertices,e.angle,e.position),l.rotate(e.axes,e.angle),c.update(e.bounds,e.vertices,e.velocity),r.set(e,{axes:t.axes||e.axes,area:t.area||e.area,mass:t.mass||e.mass,inertia:t.inertia||e.inertia});var n=e.isStatic?`#14151f`:s.choose([`#f19648`,`#f5d259`,`#f55a3c`,`#063e7b`,`#ececd1`]),o=e.isStatic?`#555`:`#ccc`,u=e.isStatic&&e.render.fillStyle===null?1:0;e.render.fillStyle=e.render.fillStyle||n,e.render.strokeStyle=e.render.strokeStyle||o,e.render.lineWidth=e.render.lineWidth||u,e.render.sprite.xOffset+=-(e.bounds.min.x-e.position.x)/(e.bounds.max.x-e.bounds.min.x),e.render.sprite.yOffset+=-(e.bounds.min.y-e.position.y)/(e.bounds.max.y-e.bounds.min.y)};r.set=function(e,t,n){for(var i in typeof t==`string`&&(i=t,t={},t[i]=n),t)if(Object.prototype.hasOwnProperty.call(t,i))switch(n=t[i],i){case`isStatic`:r.setStatic(e,n);break;case`isSleeping`:o.set(e,n);break;case`mass`:r.setMass(e,n);break;case`density`:r.setDensity(e,n);break;case`inertia`:r.setInertia(e,n);break;case`vertices`:r.setVertices(e,n);break;case`position`:r.setPosition(e,n);break;case`angle`:r.setAngle(e,n);break;case`velocity`:r.setVelocity(e,n);break;case`angularVelocity`:r.setAngularVelocity(e,n);break;case`speed`:r.setSpeed(e,n);break;case`angularSpeed`:r.setAngularSpeed(e,n);break;case`parts`:r.setParts(e,n);break;case`centre`:r.setCentre(e,n);break;default:e[i]=n}},r.setStatic=function(e,t){for(var n=0;n<e.parts.length;n++){var r=e.parts[n];t?(r.isStatic||(r._original={restitution:r.restitution,friction:r.friction,mass:r.mass,inertia:r.inertia,density:r.density,inverseMass:r.inverseMass,inverseInertia:r.inverseInertia}),r.restitution=0,r.friction=1,r.mass=r.inertia=r.density=1/0,r.inverseMass=r.inverseInertia=0,r.positionPrev.x=r.position.x,r.positionPrev.y=r.position.y,r.anglePrev=r.angle,r.angularVelocity=0,r.speed=0,r.angularSpeed=0,r.motion=0):r._original&&=(r.restitution=r._original.restitution,r.friction=r._original.friction,r.mass=r._original.mass,r.inertia=r._original.inertia,r.density=r._original.density,r.inverseMass=r._original.inverseMass,r.inverseInertia=r._original.inverseInertia,null),r.isStatic=t}},r.setMass=function(e,t){e.inertia=e.inertia/(e.mass/6)*(t/6),e.inverseInertia=1/e.inertia,e.mass=t,e.inverseMass=1/e.mass,e.density=e.mass/e.area},r.setDensity=function(e,t){r.setMass(e,t*e.area),e.density=t},r.setInertia=function(e,t){e.inertia=t,e.inverseInertia=1/e.inertia},r.setVertices=function(e,t){t[0].body===e?e.vertices=t:e.vertices=i.create(t,e),e.axes=l.fromVertices(e.vertices),e.area=i.area(e.vertices),r.setMass(e,e.density*e.area);var n=i.centre(e.vertices);i.translate(e.vertices,n,-1),r.setInertia(e,r._inertiaScale*i.inertia(e.vertices,e.mass)),i.translate(e.vertices,e.position),c.update(e.bounds,e.vertices,e.velocity)},r.setParts=function(e,t,n){var a;for(t=t.slice(0),e.parts.length=0,e.parts.push(e),e.parent=e,a=0;a<t.length;a++){var o=t[a];o!==e&&(o.parent=e,e.parts.push(o))}if(e.parts.length!==1){if(n=n===void 0?!0:n,n){var s=[];for(a=0;a<t.length;a++)s=s.concat(t[a].vertices);i.clockwiseSort(s);var c=i.hull(s),l=i.centre(c);r.setVertices(e,c),i.translate(e.vertices,l)}var u=r._totalProperties(e);e.area=u.area,e.parent=e,e.position.x=u.centre.x,e.position.y=u.centre.y,e.positionPrev.x=u.centre.x,e.positionPrev.y=u.centre.y,r.setMass(e,u.mass),r.setInertia(e,u.inertia),r.setPosition(e,u.centre)}},r.setCentre=function(e,t,n){n?(e.positionPrev.x+=t.x,e.positionPrev.y+=t.y,e.position.x+=t.x,e.position.y+=t.y):(e.positionPrev.x=t.x-(e.position.x-e.positionPrev.x),e.positionPrev.y=t.y-(e.position.y-e.positionPrev.y),e.position.x=t.x,e.position.y=t.y)},r.setPosition=function(e,t,n){var r=a.sub(t,e.position);n?(e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.velocity.x=r.x,e.velocity.y=r.y,e.speed=a.magnitude(r)):(e.positionPrev.x+=r.x,e.positionPrev.y+=r.y);for(var o=0;o<e.parts.length;o++){var s=e.parts[o];s.position.x+=r.x,s.position.y+=r.y,i.translate(s.vertices,r),c.update(s.bounds,s.vertices,e.velocity)}},r.setAngle=function(e,t,n){var r=t-e.angle;n?(e.anglePrev=e.angle,e.angularVelocity=r,e.angularSpeed=Math.abs(r)):e.anglePrev+=r;for(var o=0;o<e.parts.length;o++){var s=e.parts[o];s.angle+=r,i.rotate(s.vertices,r,e.position),l.rotate(s.axes,r),c.update(s.bounds,s.vertices,e.velocity),o>0&&a.rotateAbout(s.position,r,e.position,s.position)}},r.setVelocity=function(e,t){var n=e.deltaTime/r._baseDelta;e.positionPrev.x=e.position.x-t.x*n,e.positionPrev.y=e.position.y-t.y*n,e.velocity.x=(e.position.x-e.positionPrev.x)/n,e.velocity.y=(e.position.y-e.positionPrev.y)/n,e.speed=a.magnitude(e.velocity)},r.getVelocity=function(e){var t=r._baseDelta/e.deltaTime;return{x:(e.position.x-e.positionPrev.x)*t,y:(e.position.y-e.positionPrev.y)*t}},r.getSpeed=function(e){return a.magnitude(r.getVelocity(e))},r.setSpeed=function(e,t){r.setVelocity(e,a.mult(a.normalise(r.getVelocity(e)),t))},r.setAngularVelocity=function(e,t){var n=e.deltaTime/r._baseDelta;e.anglePrev=e.angle-t*n,e.angularVelocity=(e.angle-e.anglePrev)/n,e.angularSpeed=Math.abs(e.angularVelocity)},r.getAngularVelocity=function(e){return(e.angle-e.anglePrev)*r._baseDelta/e.deltaTime},r.getAngularSpeed=function(e){return Math.abs(r.getAngularVelocity(e))},r.setAngularSpeed=function(e,t){r.setAngularVelocity(e,s.sign(r.getAngularVelocity(e))*t)},r.translate=function(e,t,n){r.setPosition(e,a.add(e.position,t),n)},r.rotate=function(e,t,n,i){if(!n)r.setAngle(e,e.angle+t,i);else{var a=Math.cos(t),o=Math.sin(t),s=e.position.x-n.x,c=e.position.y-n.y;r.setPosition(e,{x:n.x+(s*a-c*o),y:n.y+(s*o+c*a)},i),r.setAngle(e,e.angle+t,i)}},r.scale=function(e,t,n,a){var o=0,s=0;a||=e.position;for(var u=0;u<e.parts.length;u++){var d=e.parts[u];i.scale(d.vertices,t,n,a),d.axes=l.fromVertices(d.vertices),d.area=i.area(d.vertices),r.setMass(d,e.density*d.area),i.translate(d.vertices,{x:-d.position.x,y:-d.position.y}),r.setInertia(d,r._inertiaScale*i.inertia(d.vertices,d.mass)),i.translate(d.vertices,{x:d.position.x,y:d.position.y}),u>0&&(o+=d.area,s+=d.inertia),d.position.x=a.x+(d.position.x-a.x)*t,d.position.y=a.y+(d.position.y-a.y)*n,c.update(d.bounds,d.vertices,e.velocity)}e.parts.length>1&&(e.area=o,e.isStatic||(r.setMass(e,e.density*o),r.setInertia(e,s))),e.circleRadius&&(t===n?e.circleRadius*=t:e.circleRadius=null)},r.update=function(e,t){t=(t===void 0?1e3/60:t)*e.timeScale;var n=t*t,o=r._timeCorrection?t/(e.deltaTime||t):1,u=1-e.frictionAir*(t/s._baseDelta),d=(e.position.x-e.positionPrev.x)*o,f=(e.position.y-e.positionPrev.y)*o;e.velocity.x=d*u+e.force.x/e.mass*n,e.velocity.y=f*u+e.force.y/e.mass*n,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.deltaTime=t,e.angularVelocity=(e.angle-e.anglePrev)*u*o+e.torque/e.inertia*n,e.anglePrev=e.angle,e.angle+=e.angularVelocity;for(var p=0;p<e.parts.length;p++){var m=e.parts[p];i.translate(m.vertices,e.velocity),p>0&&(m.position.x+=e.velocity.x,m.position.y+=e.velocity.y),e.angularVelocity!==0&&(i.rotate(m.vertices,e.angularVelocity,e.position),l.rotate(m.axes,e.angularVelocity),p>0&&a.rotateAbout(m.position,e.angularVelocity,e.position,m.position)),c.update(m.bounds,m.vertices,e.velocity)}},r.updateVelocities=function(e){var t=r._baseDelta/e.deltaTime,n=e.velocity;n.x=(e.position.x-e.positionPrev.x)*t,n.y=(e.position.y-e.positionPrev.y)*t,e.speed=Math.sqrt(n.x*n.x+n.y*n.y),e.angularVelocity=(e.angle-e.anglePrev)*t,e.angularSpeed=Math.abs(e.angularVelocity)},r.applyForce=function(e,t,n){var r={x:t.x-e.position.x,y:t.y-e.position.y};e.force.x+=n.x,e.force.y+=n.y,e.torque+=r.x*n.y-r.y*n.x},r._totalProperties=function(e){for(var t={mass:0,area:0,inertia:0,centre:{x:0,y:0}},n=e.parts.length===1?0:1;n<e.parts.length;n++){var r=e.parts[n],i=r.mass===1/0?1:r.mass;t.mass+=i,t.area+=r.area,t.inertia+=r.inertia,t.centre=a.add(t.centre,a.mult(r.position,i))}return t.centre=a.div(t.centre,t.mass),t}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(0);(function(){r.on=function(e,t,n){for(var r=t.split(` `),i,a=0;a<r.length;a++)i=r[a],e.events=e.events||{},e.events[i]=e.events[i]||[],e.events[i].push(n);return n},r.off=function(e,t,n){if(!t){e.events={};return}typeof t==`function`&&(n=t,t=i.keys(e.events).join(` `));for(var r=t.split(` `),a=0;a<r.length;a++){var o=e.events[r[a]],s=[];if(n&&o)for(var c=0;c<o.length;c++)o[c]!==n&&s.push(o[c]);e.events[r[a]]=s}},r.trigger=function(e,t,n){var r,a,o,s,c=e.events;if(c&&i.keys(c).length>0){n||={},r=t.split(` `);for(var l=0;l<r.length;l++)if(a=r[l],o=c[a],o){s=i.clone(n,!1),s.name=a,s.source=e;for(var u=0;u<o.length;u++)o[u].apply(e,[s])}}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(5),a=n(0),o=n(1),s=n(4);(function(){r.create=function(e){return a.extend({id:a.nextId(),type:`composite`,parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:`Composite`,plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},e)},r.setModified=function(e,t,n,i){if(e.isModified=t,t&&e.cache&&(e.cache.allBodies=null,e.cache.allConstraints=null,e.cache.allComposites=null),n&&e.parent&&r.setModified(e.parent,t,n,i),i)for(var a=0;a<e.composites.length;a++){var o=e.composites[a];r.setModified(o,t,n,i)}},r.add=function(e,t){var n=[].concat(t);i.trigger(e,`beforeAdd`,{object:t});for(var o=0;o<n.length;o++){var s=n[o];switch(s.type){case`body`:if(s.parent!==s){a.warn(`Composite.add: skipped adding a compound body part (you must add its parent instead)`);break}r.addBody(e,s);break;case`constraint`:r.addConstraint(e,s);break;case`composite`:r.addComposite(e,s);break;case`mouseConstraint`:r.addConstraint(e,s.constraint);break}}return i.trigger(e,`afterAdd`,{object:t}),e},r.remove=function(e,t,n){var a=[].concat(t);i.trigger(e,`beforeRemove`,{object:t});for(var o=0;o<a.length;o++){var s=a[o];switch(s.type){case`body`:r.removeBody(e,s,n);break;case`constraint`:r.removeConstraint(e,s,n);break;case`composite`:r.removeComposite(e,s,n);break;case`mouseConstraint`:r.removeConstraint(e,s.constraint);break}}return i.trigger(e,`afterRemove`,{object:t}),e},r.addComposite=function(e,t){return e.composites.push(t),t.parent=e,r.setModified(e,!0,!0,!1),e},r.removeComposite=function(e,t,n){var i=a.indexOf(e.composites,t);if(i!==-1){var o=r.allBodies(t);r.removeCompositeAt(e,i);for(var s=0;s<o.length;s++)o[s].sleepCounter=0}if(n)for(var s=0;s<e.composites.length;s++)r.removeComposite(e.composites[s],t,!0);return e},r.removeCompositeAt=function(e,t){return e.composites.splice(t,1),r.setModified(e,!0,!0,!1),e},r.addBody=function(e,t){return e.bodies.push(t),r.setModified(e,!0,!0,!1),e},r.removeBody=function(e,t,n){var i=a.indexOf(e.bodies,t);if(i!==-1&&(r.removeBodyAt(e,i),t.sleepCounter=0),n)for(var o=0;o<e.composites.length;o++)r.removeBody(e.composites[o],t,!0);return e},r.removeBodyAt=function(e,t){return e.bodies.splice(t,1),r.setModified(e,!0,!0,!1),e},r.addConstraint=function(e,t){return e.constraints.push(t),r.setModified(e,!0,!0,!1),e},r.removeConstraint=function(e,t,n){var i=a.indexOf(e.constraints,t);if(i!==-1&&r.removeConstraintAt(e,i),n)for(var o=0;o<e.composites.length;o++)r.removeConstraint(e.composites[o],t,!0);return e},r.removeConstraintAt=function(e,t){return e.constraints.splice(t,1),r.setModified(e,!0,!0,!1),e},r.clear=function(e,t,n){if(n)for(var i=0;i<e.composites.length;i++)r.clear(e.composites[i],t,!0);return t?e.bodies=e.bodies.filter(function(e){return e.isStatic}):e.bodies.length=0,e.constraints.length=0,e.composites.length=0,r.setModified(e,!0,!0,!1),e},r.allBodies=function(e){if(e.cache&&e.cache.allBodies)return e.cache.allBodies;for(var t=[].concat(e.bodies),n=0;n<e.composites.length;n++)t=t.concat(r.allBodies(e.composites[n]));return e.cache&&(e.cache.allBodies=t),t},r.allConstraints=function(e){if(e.cache&&e.cache.allConstraints)return e.cache.allConstraints;for(var t=[].concat(e.constraints),n=0;n<e.composites.length;n++)t=t.concat(r.allConstraints(e.composites[n]));return e.cache&&(e.cache.allConstraints=t),t},r.allComposites=function(e){if(e.cache&&e.cache.allComposites)return e.cache.allComposites;for(var t=[].concat(e.composites),n=0;n<e.composites.length;n++)t=t.concat(r.allComposites(e.composites[n]));return e.cache&&(e.cache.allComposites=t),t},r.get=function(e,t,n){var i,a;switch(n){case`body`:i=r.allBodies(e);break;case`constraint`:i=r.allConstraints(e);break;case`composite`:i=r.allComposites(e).concat(e);break}return i?(a=i.filter(function(e){return e.id.toString()===t.toString()}),a.length===0?null:a[0]):null},r.move=function(e,t,n){return r.remove(e,t),r.add(n,t),e},r.rebase=function(e){for(var t=r.allBodies(e).concat(r.allConstraints(e)).concat(r.allComposites(e)),n=0;n<t.length;n++)t[n].id=a.nextId();return e},r.translate=function(e,t,n){for(var i=n?r.allBodies(e):e.bodies,a=0;a<i.length;a++)s.translate(i[a],t);return e},r.rotate=function(e,t,n,i){for(var a=Math.cos(t),o=Math.sin(t),c=i?r.allBodies(e):e.bodies,l=0;l<c.length;l++){var u=c[l],d=u.position.x-n.x,f=u.position.y-n.y;s.setPosition(u,{x:n.x+(d*a-f*o),y:n.y+(d*o+f*a)}),s.rotate(u,t)}return e},r.scale=function(e,t,n,i,a){for(var o=a?r.allBodies(e):e.bodies,c=0;c<o.length;c++){var l=o[c],u=l.position.x-i.x,d=l.position.y-i.y;s.setPosition(l,{x:i.x+u*t,y:i.y+d*n}),s.scale(l,t,n)}return e},r.bounds=function(e){for(var t=r.allBodies(e),n=[],i=0;i<t.length;i+=1){var a=t[i];n.push(a.bounds.min,a.bounds.max)}return o.create(n)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(4),a=n(5),o=n(0);(function(){r._motionWakeThreshold=.18,r._motionSleepThreshold=.08,r._minBias=.9,r.update=function(e,t){for(var n=t/o._baseDelta,a=r._motionSleepThreshold,s=0;s<e.length;s++){var c=e[s],l=i.getSpeed(c),u=i.getAngularSpeed(c),d=l*l+u*u;if(c.force.x!==0||c.force.y!==0){r.set(c,!1);continue}var f=Math.min(c.motion,d),p=Math.max(c.motion,d);c.motion=r._minBias*f+(1-r._minBias)*p,c.sleepThreshold>0&&c.motion<a?(c.sleepCounter+=1,c.sleepCounter>=c.sleepThreshold/n&&r.set(c,!0)):c.sleepCounter>0&&--c.sleepCounter}},r.afterCollisions=function(e){for(var t=r._motionSleepThreshold,n=0;n<e.length;n++){var i=e[n];if(i.isActive){var a=i.collision,o=a.bodyA.parent,s=a.bodyB.parent;if(!(o.isSleeping&&s.isSleeping||o.isStatic||s.isStatic)&&(o.isSleeping||s.isSleeping)){var c=o.isSleeping&&!o.isStatic?o:s,l=c===o?s:o;!c.isStatic&&l.motion>t&&r.set(c,!1)}}}},r.set=function(e,t){var n=e.isSleeping;t?(e.isSleeping=!0,e.sleepCounter=e.sleepThreshold,e.positionImpulse.x=0,e.positionImpulse.y=0,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.anglePrev=e.angle,e.speed=0,e.angularSpeed=0,e.motion=0,n||a.trigger(e,`sleepStart`)):(e.isSleeping=!1,e.sleepCounter=0,n&&a.trigger(e,`sleepEnd`))}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(9);(function(){var e=[],t={overlap:0,axis:null},n={overlap:0,axis:null};r.create=function(e,t){return{pair:null,collided:!1,bodyA:e,bodyB:t,parentA:e.parent,parentB:t.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},r.collides=function(e,o,s){if(r._overlapAxes(t,e.vertices,o.vertices,e.axes),t.overlap<=0||(r._overlapAxes(n,o.vertices,e.vertices,o.axes),n.overlap<=0))return null;var c=s&&s.table[a.id(e,o)],l;c?l=c.collision:(l=r.create(e,o),l.collided=!0,l.bodyA=e.id<o.id?e:o,l.bodyB=e.id<o.id?o:e,l.parentA=l.bodyA.parent,l.parentB=l.bodyB.parent),e=l.bodyA,o=l.bodyB;var u=t.overlap<n.overlap?t:n,d=l.normal,f=l.tangent,p=l.penetration,m=l.supports,h=u.overlap,g=u.axis,_=g.x,v=g.y,y=o.position.x-e.position.x,b=o.position.y-e.position.y;_*y+v*b>=0&&(_=-_,v=-v),d.x=_,d.y=v,f.x=-v,f.y=_,p.x=_*h,p.y=v*h,l.depth=h;var x=r._findSupports(e,o,d,1),S=0;if(i.contains(e.vertices,x[0])&&(m[S++]=x[0]),i.contains(e.vertices,x[1])&&(m[S++]=x[1]),S<2){var C=r._findSupports(o,e,d,-1);i.contains(o.vertices,C[0])&&(m[S++]=C[0]),S<2&&i.contains(o.vertices,C[1])&&(m[S++]=C[1])}return S===0&&(m[S++]=x[0]),l.supportCount=S,l},r._overlapAxes=function(e,t,n,r){var i=t.length,a=n.length,o=t[0].x,s=t[0].y,c=n[0].x,l=n[0].y,u=r.length,d=Number.MAX_VALUE,f=0,p,m,h,g,_,v;for(_=0;_<u;_++){var y=r[_],b=y.x,x=y.y,S=o*b+s*x,C=c*b+l*x,w=S,T=C;for(v=1;v<i;v+=1)g=t[v].x*b+t[v].y*x,g>w?w=g:g<S&&(S=g);for(v=1;v<a;v+=1)g=n[v].x*b+n[v].y*x,g>T?T=g:g<C&&(C=g);if(m=w-C,h=T-S,p=m<h?m:h,p<d&&(d=p,f=_,p<=0))break}e.axis=r[f],e.overlap=d},r._findSupports=function(t,n,r,i){var a=n.vertices,o=a.length,s=t.position.x,c=t.position.y,l=r.x*i,u=r.y*i,d=a[0],f=d,p=l*(s-f.x)+u*(c-f.y),m,h,g;for(g=1;g<o;g+=1)f=a[g],h=l*(s-f.x)+u*(c-f.y),h<p&&(p=h,d=f);return m=a[(o+d.index-1)%o],p=l*(s-m.x)+u*(c-m.y),f=a[(d.index+1)%o],l*(s-f.x)+u*(c-f.y)<p?(e[0]=d,e[1]=f,e):(e[0]=d,e[1]=m,e)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(16);(function(){r.create=function(e,t){var n=e.bodyA,a=e.bodyB,o={id:r.id(n,a),bodyA:n,bodyB:a,collision:e,contacts:[i.create(),i.create()],contactCount:0,separation:0,isActive:!0,isSensor:n.isSensor||a.isSensor,timeCreated:t,timeUpdated:t,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return r.update(o,e,t),o},r.update=function(e,t,n){var r=t.supports,i=t.supportCount,a=e.contacts,o=t.parentA,s=t.parentB;e.isActive=!0,e.timeUpdated=n,e.collision=t,e.separation=t.depth,e.inverseMass=o.inverseMass+s.inverseMass,e.friction=o.friction<s.friction?o.friction:s.friction,e.frictionStatic=o.frictionStatic>s.frictionStatic?o.frictionStatic:s.frictionStatic,e.restitution=o.restitution>s.restitution?o.restitution:s.restitution,e.slop=o.slop>s.slop?o.slop:s.slop,e.contactCount=i,t.pair=e;var c=r[0],l=a[0],u=r[1],d=a[1];(d.vertex===c||l.vertex===u)&&(a[1]=l,a[0]=l=d,d=a[1]),l.vertex=c,d.vertex=u},r.setActive=function(e,t,n){t?(e.isActive=!0,e.timeUpdated=n):(e.isActive=!1,e.contactCount=0)},r.id=function(e,t){return e.id<t.id?e.id.toString(36)+`:`+t.id.toString(36):t.id.toString(36)+`:`+e.id.toString(36)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(2),o=n(7),s=n(1),c=n(11),l=n(0);(function(){r._warming=.4,r._torqueDampen=1,r._minLength=1e-6,r.create=function(e){var t=e;t.bodyA&&!t.pointA&&(t.pointA={x:0,y:0}),t.bodyB&&!t.pointB&&(t.pointB={x:0,y:0});var n=t.bodyA?a.add(t.bodyA.position,t.pointA):t.pointA,r=t.bodyB?a.add(t.bodyB.position,t.pointB):t.pointB,i=a.magnitude(a.sub(n,r));t.length=t.length===void 0?i:t.length,t.id=t.id||l.nextId(),t.label=t.label||`Constraint`,t.type=`constraint`,t.stiffness=t.stiffness||(t.length>0?1:.7),t.damping=t.damping||0,t.angularStiffness=t.angularStiffness||0,t.angleA=t.bodyA?t.bodyA.angle:t.angleA,t.angleB=t.bodyB?t.bodyB.angle:t.angleB,t.plugin={};var o={visible:!0,lineWidth:2,strokeStyle:`#ffffff`,type:`line`,anchors:!0};return t.length===0&&t.stiffness>.1?(o.type=`pin`,o.anchors=!1):t.stiffness<.9&&(o.type=`spring`),t.render=l.extend(o,t.render),t},r.preSolveAll=function(e){for(var t=0;t<e.length;t+=1){var n=e[t],r=n.constraintImpulse;n.isStatic||r.x===0&&r.y===0&&r.angle===0||(n.position.x+=r.x,n.position.y+=r.y,n.angle+=r.angle)}},r.solveAll=function(e,t){for(var n=l.clamp(t/l._baseDelta,0,1),i=0;i<e.length;i+=1){var a=e[i],o=!a.bodyA||a.bodyA&&a.bodyA.isStatic,s=!a.bodyB||a.bodyB&&a.bodyB.isStatic;(o||s)&&r.solve(e[i],n)}for(i=0;i<e.length;i+=1)a=e[i],o=!a.bodyA||a.bodyA&&a.bodyA.isStatic,s=!a.bodyB||a.bodyB&&a.bodyB.isStatic,!o&&!s&&r.solve(e[i],n)},r.solve=function(e,t){var n=e.bodyA,i=e.bodyB,o=e.pointA,s=e.pointB;if(!(!n&&!i)){n&&!n.isStatic&&(a.rotate(o,n.angle-e.angleA,o),e.angleA=n.angle),i&&!i.isStatic&&(a.rotate(s,i.angle-e.angleB,s),e.angleB=i.angle);var c=o,l=s;if(n&&(c=a.add(n.position,o)),i&&(l=a.add(i.position,s)),!(!c||!l)){var u=a.sub(c,l),d=a.magnitude(u);d<r._minLength&&(d=r._minLength);var f=(d-e.length)/d,p=e.stiffness>=1||e.length===0?e.stiffness*t:e.stiffness*t*t,m=e.damping*t,h=a.mult(u,f*p),g=(n?n.inverseMass:0)+(i?i.inverseMass:0),_=g+((n?n.inverseInertia:0)+(i?i.inverseInertia:0)),v,y,b,x,S;if(m>0){var C=a.create();b=a.div(u,d),S=a.sub(i&&a.sub(i.position,i.positionPrev)||C,n&&a.sub(n.position,n.positionPrev)||C),x=a.dot(b,S)}n&&!n.isStatic&&(y=n.inverseMass/g,n.constraintImpulse.x-=h.x*y,n.constraintImpulse.y-=h.y*y,n.position.x-=h.x*y,n.position.y-=h.y*y,m>0&&(n.positionPrev.x-=m*b.x*x*y,n.positionPrev.y-=m*b.y*x*y),v=a.cross(o,h)/_*r._torqueDampen*n.inverseInertia*(1-e.angularStiffness),n.constraintImpulse.angle-=v,n.angle-=v),i&&!i.isStatic&&(y=i.inverseMass/g,i.constraintImpulse.x+=h.x*y,i.constraintImpulse.y+=h.y*y,i.position.x+=h.x*y,i.position.y+=h.y*y,m>0&&(i.positionPrev.x+=m*b.x*x*y,i.positionPrev.y+=m*b.y*x*y),v=a.cross(s,h)/_*r._torqueDampen*i.inverseInertia*(1-e.angularStiffness),i.constraintImpulse.angle+=v,i.angle+=v)}}},r.postSolveAll=function(e){for(var t=0;t<e.length;t++){var n=e[t],l=n.constraintImpulse;if(!(n.isStatic||l.x===0&&l.y===0&&l.angle===0)){o.set(n,!1);for(var u=0;u<n.parts.length;u++){var d=n.parts[u];i.translate(d.vertices,l),u>0&&(d.position.x+=l.x,d.position.y+=l.y),l.angle!==0&&(i.rotate(d.vertices,l.angle,n.position),c.rotate(d.axes,l.angle),u>0&&a.rotateAbout(d.position,l.angle,n.position,d.position)),s.update(d.bounds,d.vertices,n.velocity)}l.angle*=r._warming,l.x*=r._warming,l.y*=r._warming}}},r.pointAWorld=function(e){return{x:(e.bodyA?e.bodyA.position.x:0)+(e.pointA?e.pointA.x:0),y:(e.bodyA?e.bodyA.position.y:0)+(e.pointA?e.pointA.y:0)}},r.pointBWorld=function(e){return{x:(e.bodyB?e.bodyB.position.x:0)+(e.pointB?e.pointB.x:0),y:(e.bodyB?e.bodyB.position.y:0)+(e.pointB?e.pointB.y:0)}},r.currentLength=function(e){var t=(e.bodyA?e.bodyA.position.x:0)+(e.pointA?e.pointA.x:0),n=(e.bodyA?e.bodyA.position.y:0)+(e.pointA?e.pointA.y:0),r=(e.bodyB?e.bodyB.position.x:0)+(e.pointB?e.pointB.x:0),i=(e.bodyB?e.bodyB.position.y:0)+(e.pointB?e.pointB.y:0),a=t-r,o=n-i;return Math.sqrt(a*a+o*o)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(2),a=n(0);(function(){r.fromVertices=function(e){for(var t={},n=0;n<e.length;n++){var r=(n+1)%e.length,o=i.normalise({x:e[r].y-e[n].y,y:e[n].x-e[r].x}),s=o.y===0?1/0:o.x/o.y;s=s.toFixed(3).toString(),t[s]=o}return a.values(t)},r.rotate=function(e,t){if(t!==0)for(var n=Math.cos(t),r=Math.sin(t),i=0;i<e.length;i++){var a=e[i],o=a.x*n-a.y*r;a.y=a.x*r+a.y*n,a.x=o}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(0),o=n(4),s=n(1),c=n(2);(function(){r.rectangle=function(e,t,n,r,s){s||={};var c={label:`Rectangle Body`,position:{x:e,y:t},vertices:i.fromPath(`L 0 0 L `+n+` 0 L `+n+` `+r+` L 0 `+r)};if(s.chamfer){var l=s.chamfer;c.vertices=i.chamfer(c.vertices,l.radius,l.quality,l.qualityMin,l.qualityMax),delete s.chamfer}return o.create(a.extend({},c,s))},r.trapezoid=function(e,t,n,r,s,c){c||={},s>=1&&a.warn(`Bodies.trapezoid: slope parameter must be < 1.`),s*=.5;var l=(1-s*2)*n,u=n*s,d=u+l,f=d+u,p=s<.5?`L 0 0 L `+u+` `+-r+` L `+d+` `+-r+` L `+f+` 0`:`L 0 0 L `+d+` `+-r+` L `+f+` 0`,m={label:`Trapezoid Body`,position:{x:e,y:t},vertices:i.fromPath(p)};if(c.chamfer){var h=c.chamfer;m.vertices=i.chamfer(m.vertices,h.radius,h.quality,h.qualityMin,h.qualityMax),delete c.chamfer}return o.create(a.extend({},m,c))},r.circle=function(e,t,n,i,o){i||={};var s={label:`Circle Body`,circleRadius:n};o||=25;var c=Math.ceil(Math.max(10,Math.min(o,n)));return c%2==1&&(c+=1),r.polygon(e,t,c,n,a.extend({},s,i))},r.polygon=function(e,t,n,s,c){if(c||={},n<3)return r.circle(e,t,s,c);for(var l=2*Math.PI/n,u=``,d=l*.5,f=0;f<n;f+=1){var p=d+f*l,m=Math.cos(p)*s,h=Math.sin(p)*s;u+=`L `+m.toFixed(3)+` `+h.toFixed(3)+` `}var g={label:`Polygon Body`,position:{x:e,y:t},vertices:i.fromPath(u)};if(c.chamfer){var _=c.chamfer;g.vertices=i.chamfer(g.vertices,_.radius,_.quality,_.qualityMin,_.qualityMax),delete c.chamfer}return o.create(a.extend({},g,c))},r.fromVertices=function(e,t,n,r,l,u,d,f){var p=a.getDecomp(),m=!!(p&&p.quickDecomp),h,g,_,v,y,b,x,S,C,w;for(r||={},g=[],l=l===void 0?!1:l,u=u===void 0?.01:u,d=d===void 0?10:d,f=f===void 0?.01:f,a.isArray(n[0])||(n=[n]),C=0;C<n.length;C+=1)if(y=n[C],_=i.isConvex(y),v=!_,v&&!m&&a.warnOnce(`Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices.`),_||!m)y=_?i.clockwiseSort(y):i.hull(y),g.push({position:{x:e,y:t},vertices:y});else{var T=y.map(function(e){return[e.x,e.y]});p.makeCCW(T),u!==!1&&p.removeCollinearPoints(T,u),f!==!1&&p.removeDuplicatePoints&&p.removeDuplicatePoints(T,f);var E=p.quickDecomp(T);for(b=0;b<E.length;b++){var D=E[b].map(function(e){return{x:e[0],y:e[1]}});d>0&&i.area(D)<d||g.push({position:i.centre(D),vertices:D})}}for(b=0;b<g.length;b++)g[b]=o.create(a.extend(g[b],r));if(l){var O=5;for(b=0;b<g.length;b++){var k=g[b];for(x=b+1;x<g.length;x++){var A=g[x];if(s.overlaps(k.bounds,A.bounds)){var j=k.vertices,ee=A.vertices;for(S=0;S<k.vertices.length;S++)for(w=0;w<A.vertices.length;w++){var M=c.magnitudeSquared(c.sub(j[(S+1)%j.length],ee[w])),N=c.magnitudeSquared(c.sub(j[S],ee[(w+1)%ee.length]));M<O&&N<O&&(j[S].isInternal=!0,ee[w].isInternal=!0)}}}}}return g.length>1?(h=o.create(a.extend({parts:g.slice(0)},r)),o.setPosition(h,{x:e,y:t}),h):g[0]}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(0),a=n(8);(function(){r.create=function(e){return i.extend({bodies:[],collisions:[],pairs:null},e)},r.setBodies=function(e,t){e.bodies=t.slice(0)},r.clear=function(e){e.bodies=[],e.collisions=[]},r.collisions=function(e){var t=e.pairs,n=e.bodies,i=n.length,o=r.canCollide,s=a.collides,c=e.collisions,l=0,u,d;for(n.sort(r._compareBoundsX),u=0;u<i;u++){var f=n[u],p=f.bounds,m=f.bounds.max.x,h=f.bounds.max.y,g=f.bounds.min.y,_=f.isStatic||f.isSleeping,v=f.parts.length,y=v===1;for(d=u+1;d<i;d++){var b=n[d],x=b.bounds;if(x.min.x>m)break;if(!(h<x.min.y||g>x.max.y)&&!(_&&(b.isStatic||b.isSleeping))&&o(f.collisionFilter,b.collisionFilter)){var S=b.parts.length;if(y&&S===1){var C=s(f,b,t);C&&(c[l++]=C)}else for(var w=+(v>1),T=+(S>1),E=w;E<v;E++)for(var D=f.parts[E],p=D.bounds,O=T;O<S;O++){var k=b.parts[O],x=k.bounds;if(!(p.min.x>x.max.x||p.max.x<x.min.x||p.max.y<x.min.y||p.min.y>x.max.y)){var C=s(D,k,t);C&&(c[l++]=C)}}}}}return c.length!==l&&(c.length=l),c},r.canCollide=function(e,t){return e.group===t.group&&e.group!==0?e.group>0:(e.mask&t.category)!==0&&(t.mask&e.category)!==0},r._compareBoundsX=function(e,t){return e.bounds.min.x-t.bounds.min.x}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(0);(function(){r.create=function(e){var t={};return e||i.log(`Mouse.create: element was undefined, defaulting to document.body`,`warn`),t.element=e||document.body,t.absolute={x:0,y:0},t.position={x:0,y:0},t.mousedownPosition={x:0,y:0},t.mouseupPosition={x:0,y:0},t.offset={x:0,y:0},t.scale={x:1,y:1},t.wheelDelta=0,t.button=-1,t.pixelRatio=parseInt(t.element.getAttribute(`data-pixel-ratio`),10)||1,t.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},t.mousemove=function(e){var n=r._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&(t.button=0,e.preventDefault()),t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.sourceEvents.mousemove=e},t.mousedown=function(e){var n=r._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches?(t.button=0,e.preventDefault()):t.button=e.button,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mousedownPosition.x=t.position.x,t.mousedownPosition.y=t.position.y,t.sourceEvents.mousedown=e},t.mouseup=function(e){var n=r._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&e.preventDefault(),t.button=-1,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mouseupPosition.x=t.position.x,t.mouseupPosition.y=t.position.y,t.sourceEvents.mouseup=e},t.mousewheel=function(e){t.wheelDelta=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail)),e.preventDefault(),t.sourceEvents.mousewheel=e},r.setElement(t,t.element),t},r.setElement=function(e,t){e.element=t,t.addEventListener(`mousemove`,e.mousemove,{passive:!0}),t.addEventListener(`mousedown`,e.mousedown,{passive:!0}),t.addEventListener(`mouseup`,e.mouseup,{passive:!0}),t.addEventListener(`wheel`,e.mousewheel,{passive:!1}),t.addEventListener(`touchmove`,e.mousemove,{passive:!1}),t.addEventListener(`touchstart`,e.mousedown,{passive:!1}),t.addEventListener(`touchend`,e.mouseup,{passive:!1})},r.clearSourceEvents=function(e){e.sourceEvents.mousemove=null,e.sourceEvents.mousedown=null,e.sourceEvents.mouseup=null,e.sourceEvents.mousewheel=null,e.wheelDelta=0},r.setOffset=function(e,t){e.offset.x=t.x,e.offset.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},r.setScale=function(e,t){e.scale.x=t.x,e.scale.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},r._getRelativeMousePosition=function(e,t,n){var r=t.getBoundingClientRect(),i=document.documentElement||document.body.parentNode||document.body,a=window.pageXOffset===void 0?i.scrollLeft:window.pageXOffset,o=window.pageYOffset===void 0?i.scrollTop:window.pageYOffset,s=e.changedTouches,c,l;return s?(c=s[0].pageX-r.left-a,l=s[0].pageY-r.top-o):(c=e.pageX-r.left-a,l=e.pageY-r.top-o),{x:c/(t.clientWidth/(t.width||t.clientWidth)*n),y:l/(t.clientHeight/(t.height||t.clientHeight)*n)}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(0);(function(){r._registry={},r.register=function(e){if(r.isPlugin(e)||i.warn(`Plugin.register:`,r.toString(e),`does not implement all required fields.`),e.name in r._registry){var t=r._registry[e.name],n=r.versionParse(e.version).number,a=r.versionParse(t.version).number;n>a?(i.warn(`Plugin.register:`,r.toString(t),`was upgraded to`,r.toString(e)),r._registry[e.name]=e):n<a?i.warn(`Plugin.register:`,r.toString(t),`can not be downgraded to`,r.toString(e)):e!==t&&i.warn(`Plugin.register:`,r.toString(e),`is already registered to different plugin object`)}else r._registry[e.name]=e;return e},r.resolve=function(e){return r._registry[r.dependencyParse(e).name]},r.toString=function(e){return typeof e==`string`?e:(e.name||`anonymous`)+`@`+(e.version||e.range||`0.0.0`)},r.isPlugin=function(e){return e&&e.name&&e.version&&e.install},r.isUsed=function(e,t){return e.used.indexOf(t)>-1},r.isFor=function(e,t){var n=e.for&&r.dependencyParse(e.for);return!e.for||t.name===n.name&&r.versionSatisfies(t.version,n.range)},r.use=function(e,t){if(e.uses=(e.uses||[]).concat(t||[]),e.uses.length===0){i.warn(`Plugin.use:`,r.toString(e),`does not specify any dependencies to install.`);return}for(var n=r.dependencies(e),a=i.topologicalSort(n),o=[],s=0;s<a.length;s+=1)if(a[s]!==e.name){var c=r.resolve(a[s]);if(!c){o.push(`❌ `+a[s]);continue}r.isUsed(e,c.name)||(r.isFor(c,e)||(i.warn(`Plugin.use:`,r.toString(c),`is for`,c.for,`but installed on`,r.toString(e)+`.`),c._warned=!0),c.install?c.install(e):(i.warn(`Plugin.use:`,r.toString(c),`does not specify an install function.`),c._warned=!0),c._warned?(o.push(`🔶 `+r.toString(c)),delete c._warned):o.push(`✅ `+r.toString(c)),e.used.push(c.name))}o.length>0&&i.info(o.join(`  `))},r.dependencies=function(e,t){var n=r.dependencyParse(e),a=n.name;if(t||={},!(a in t)){e=r.resolve(e)||e,t[a]=i.map(e.uses||[],function(t){r.isPlugin(t)&&r.register(t);var a=r.dependencyParse(t),o=r.resolve(t);return o&&!r.versionSatisfies(o.version,a.range)?(i.warn(`Plugin.dependencies:`,r.toString(o),`does not satisfy`,r.toString(a),`used by`,r.toString(n)+`.`),o._warned=!0,e._warned=!0):o||(i.warn(`Plugin.dependencies:`,r.toString(t),`used by`,r.toString(n),`could not be resolved.`),e._warned=!0),a.name});for(var o=0;o<t[a].length;o+=1)r.dependencies(t[a][o],t);return t}},r.dependencyParse=function(e){return i.isString(e)?(/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(e)||i.warn(`Plugin.dependencyParse:`,e,`is not a valid dependency string.`),{name:e.split(`@`)[0],range:e.split(`@`)[1]||`*`}):{name:e.name,range:e.range||e.version}},r.versionParse=function(e){var t=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;t.test(e)||i.warn(`Plugin.versionParse:`,e,`is not a valid version or range.`);var n=t.exec(e),r=Number(n[4]),a=Number(n[5]),o=Number(n[6]);return{isRange:!!(n[1]||n[2]),version:n[3],range:e,operator:n[1]||n[2]||``,major:r,minor:a,patch:o,parts:[r,a,o],prerelease:n[7],number:r*1e8+a*1e4+o}},r.versionSatisfies=function(e,t){t||=`*`;var n=r.versionParse(t),i=r.versionParse(e);if(n.isRange){if(n.operator===`*`||e===`*`)return!0;if(n.operator===`>`)return i.number>n.number;if(n.operator===`>=`)return i.number>=n.number;if(n.operator===`~`)return i.major===n.major&&i.minor===n.minor&&i.patch>=n.patch;if(n.operator===`^`)return n.major>0?i.major===n.major&&i.number>=n.number:n.minor>0?i.minor===n.minor&&i.patch>=n.patch:i.patch===n.patch}return e===t||e===`*`}})()}),(function(e,t){var n={};e.exports=n,(function(){n.create=function(e){return{vertex:e,normalImpulse:0,tangentImpulse:0}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(7),a=n(18),o=n(13),s=n(19),c=n(5),l=n(6),u=n(10),d=n(0),f=n(4);(function(){r._deltaMax=1e3/60,r.create=function(e){e||={};var t=d.extend({positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},e);return t.world=e.world||l.create({label:`World`}),t.pairs=e.pairs||s.create(),t.detector=e.detector||o.create(),t.detector.pairs=t.pairs,t.grid={buckets:[]},t.world.gravity=t.gravity,t.broadphase=t.grid,t.metrics={},t},r.update=function(e,t){var n=d.now(),f=e.world,p=e.detector,m=e.pairs,h=e.timing,g=h.timestamp,_;t>r._deltaMax&&d.warnOnce(`Matter.Engine.update: delta argument is recommended to be less than or equal to`,r._deltaMax.toFixed(3),`ms.`),t=t===void 0?d._baseDelta:t,t*=h.timeScale,h.timestamp+=t,h.lastDelta=t;var v={timestamp:h.timestamp,delta:t};c.trigger(e,`beforeUpdate`,v);var y=l.allBodies(f),b=l.allConstraints(f);for(f.isModified&&(o.setBodies(p,y),l.setModified(f,!1,!1,!0)),e.enableSleeping&&i.update(y,t),r._bodiesApplyGravity(y,e.gravity),t>0&&r._bodiesUpdate(y,t),c.trigger(e,`beforeSolve`,v),u.preSolveAll(y),_=0;_<e.constraintIterations;_++)u.solveAll(b,t);u.postSolveAll(y);var x=o.collisions(p);s.update(m,x,g),e.enableSleeping&&i.afterCollisions(m.list),m.collisionStart.length>0&&c.trigger(e,`collisionStart`,{pairs:m.collisionStart,timestamp:h.timestamp,delta:t});var S=d.clamp(20/e.positionIterations,0,1);for(a.preSolvePosition(m.list),_=0;_<e.positionIterations;_++)a.solvePosition(m.list,t,S);for(a.postSolvePosition(y),u.preSolveAll(y),_=0;_<e.constraintIterations;_++)u.solveAll(b,t);for(u.postSolveAll(y),a.preSolveVelocity(m.list),_=0;_<e.velocityIterations;_++)a.solveVelocity(m.list,t);return r._bodiesUpdateVelocities(y),m.collisionActive.length>0&&c.trigger(e,`collisionActive`,{pairs:m.collisionActive,timestamp:h.timestamp,delta:t}),m.collisionEnd.length>0&&c.trigger(e,`collisionEnd`,{pairs:m.collisionEnd,timestamp:h.timestamp,delta:t}),r._bodiesClearForces(y),c.trigger(e,`afterUpdate`,v),e.timing.lastElapsed=d.now()-n,e},r.merge=function(e,t){if(d.extend(e,t),t.world){e.world=t.world,r.clear(e);for(var n=l.allBodies(e.world),a=0;a<n.length;a++){var o=n[a];i.set(o,!1),o.id=d.nextId()}}},r.clear=function(e){s.clear(e.pairs),o.clear(e.detector)},r._bodiesClearForces=function(e){for(var t=e.length,n=0;n<t;n++){var r=e[n];r.force.x=0,r.force.y=0,r.torque=0}},r._bodiesApplyGravity=function(e,t){var n=t.scale===void 0?.001:t.scale,r=e.length;if(!(t.x===0&&t.y===0||n===0))for(var i=0;i<r;i++){var a=e[i];a.isStatic||a.isSleeping||(a.force.y+=a.mass*t.y*n,a.force.x+=a.mass*t.x*n)}},r._bodiesUpdate=function(e,t){for(var n=e.length,r=0;r<n;r++){var i=e[r];i.isStatic||i.isSleeping||f.update(i,t)}},r._bodiesUpdateVelocities=function(e){for(var t=e.length,n=0;n<t;n++)f.updateVelocities(e[n])}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(0),o=n(1);(function(){r._restingThresh=2,r._restingThreshTangent=Math.sqrt(6),r._positionDampen=.9,r._positionWarming=.8,r._frictionNormalMultiplier=5,r._frictionMaxStatic=Number.MAX_VALUE,r.preSolvePosition=function(e){var t,n,r,i=e.length;for(t=0;t<i;t++)n=e[t],n.isActive&&(r=n.contactCount,n.collision.parentA.totalContacts+=r,n.collision.parentB.totalContacts+=r)},r.solvePosition=function(e,t,n){var i,o,s,c,l,u,d,f,p=r._positionDampen*(n||1),m=a.clamp(t/a._baseDelta,0,1),h=e.length;for(i=0;i<h;i++)o=e[i],!(!o.isActive||o.isSensor)&&(s=o.collision,c=s.parentA,l=s.parentB,u=s.normal,o.separation=s.depth+u.x*(l.positionImpulse.x-c.positionImpulse.x)+u.y*(l.positionImpulse.y-c.positionImpulse.y));for(i=0;i<h;i++)o=e[i],!(!o.isActive||o.isSensor)&&(s=o.collision,c=s.parentA,l=s.parentB,u=s.normal,f=o.separation-o.slop*m,(c.isStatic||l.isStatic)&&(f*=2),c.isStatic||c.isSleeping||(d=p/c.totalContacts,c.positionImpulse.x+=u.x*f*d,c.positionImpulse.y+=u.y*f*d),l.isStatic||l.isSleeping||(d=p/l.totalContacts,l.positionImpulse.x-=u.x*f*d,l.positionImpulse.y-=u.y*f*d))},r.postSolvePosition=function(e){for(var t=r._positionWarming,n=e.length,a=i.translate,s=o.update,c=0;c<n;c++){var l=e[c],u=l.positionImpulse,d=u.x,f=u.y,p=l.velocity;if(l.totalContacts=0,d!==0||f!==0){for(var m=0;m<l.parts.length;m++){var h=l.parts[m];a(h.vertices,u),s(h.bounds,h.vertices,p),h.position.x+=d,h.position.y+=f}l.positionPrev.x+=d,l.positionPrev.y+=f,d*p.x+f*p.y<0?(u.x=0,u.y=0):(u.x*=t,u.y*=t)}}},r.preSolveVelocity=function(e){var t=e.length,n,r;for(n=0;n<t;n++){var i=e[n];if(!(!i.isActive||i.isSensor)){var a=i.contacts,o=i.contactCount,s=i.collision,c=s.parentA,l=s.parentB,u=s.normal,d=s.tangent;for(r=0;r<o;r++){var f=a[r],p=f.vertex,m=f.normalImpulse,h=f.tangentImpulse;if(m!==0||h!==0){var g=u.x*m+d.x*h,_=u.y*m+d.y*h;c.isStatic||c.isSleeping||(c.positionPrev.x+=g*c.inverseMass,c.positionPrev.y+=_*c.inverseMass,c.anglePrev+=c.inverseInertia*((p.x-c.position.x)*_-(p.y-c.position.y)*g)),l.isStatic||l.isSleeping||(l.positionPrev.x-=g*l.inverseMass,l.positionPrev.y-=_*l.inverseMass,l.anglePrev-=l.inverseInertia*((p.x-l.position.x)*_-(p.y-l.position.y)*g))}}}}},r.solveVelocity=function(e,t){var n=t/a._baseDelta,i=n*n*n,o=-r._restingThresh*n,s=r._restingThreshTangent,c=r._frictionNormalMultiplier*n,l=r._frictionMaxStatic,u=e.length,d,f,p,m;for(p=0;p<u;p++){var h=e[p];if(!(!h.isActive||h.isSensor)){var g=h.collision,_=g.parentA,v=g.parentB,y=g.normal.x,b=g.normal.y,x=g.tangent.x,S=g.tangent.y,C=h.inverseMass,w=h.friction*h.frictionStatic*c,T=h.contacts,E=h.contactCount,D=1/E,O=_.position.x-_.positionPrev.x,k=_.position.y-_.positionPrev.y,A=_.angle-_.anglePrev,j=v.position.x-v.positionPrev.x,ee=v.position.y-v.positionPrev.y,M=v.angle-v.anglePrev;for(m=0;m<E;m++){var N=T[m],te=N.vertex,P=te.x-_.position.x,ne=te.y-_.position.y,re=te.x-v.position.x,F=te.y-v.position.y,ie=O-ne*A,ae=k+P*A,oe=j-F*M,I=ee+re*M,se=ie-oe,L=ae-I,R=y*se+b*L,z=x*se+S*L,B=h.separation+R,V=Math.min(B,1);V=B<0?0:V;var ce=V*w;z<-ce||z>ce?(f=z>0?z:-z,d=h.friction*(z>0?1:-1)*i,d<-f?d=-f:d>f&&(d=f)):(d=z,f=l);var le=P*b-ne*y,ue=re*b-F*y,de=D/(C+_.inverseInertia*le*le+v.inverseInertia*ue*ue),fe=(1+h.restitution)*R*de;if(d*=de,R<o)N.normalImpulse=0;else{var H=N.normalImpulse;N.normalImpulse+=fe,N.normalImpulse>0&&(N.normalImpulse=0),fe=N.normalImpulse-H}if(z<-s||z>s)N.tangentImpulse=0;else{var pe=N.tangentImpulse;N.tangentImpulse+=d,N.tangentImpulse<-f&&(N.tangentImpulse=-f),N.tangentImpulse>f&&(N.tangentImpulse=f),d=N.tangentImpulse-pe}var U=y*fe+x*d,me=b*fe+S*d;_.isStatic||_.isSleeping||(_.positionPrev.x+=U*_.inverseMass,_.positionPrev.y+=me*_.inverseMass,_.anglePrev+=(P*me-ne*U)*_.inverseInertia),v.isStatic||v.isSleeping||(v.positionPrev.x-=U*v.inverseMass,v.positionPrev.y-=me*v.inverseMass,v.anglePrev-=(re*me-F*U)*v.inverseInertia)}}}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(9),a=n(0);(function(){r.create=function(e){return a.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},e)},r.update=function(e,t,n){var r=i.update,a=i.create,o=i.setActive,s=e.table,c=e.list,l=c.length,u=l,d=e.collisionStart,f=e.collisionEnd,p=e.collisionActive,m=t.length,h=0,g=0,_=0,v,y,b;for(b=0;b<m;b++)v=t[b],y=v.pair,y?(y.isActive&&(p[_++]=y),r(y,v,n)):(y=a(v,n),s[y.id]=y,d[h++]=y,c[u++]=y);for(u=0,l=c.length,b=0;b<l;b++)y=c[b],y.timeUpdated>=n?c[u++]=y:(o(y,!1,n),y.collision.bodyA.sleepCounter>0&&y.collision.bodyB.sleepCounter>0?c[u++]=y:(f[g++]=y,delete s[y.id]));c.length!==u&&(c.length=u),d.length!==h&&(d.length=h),f.length!==g&&(f.length=g),p.length!==_&&(p.length=_)},r.clear=function(e){return e.table={},e.list.length=0,e.collisionStart.length=0,e.collisionActive.length=0,e.collisionEnd.length=0,e}})()}),(function(e,t,n){var r=e.exports=n(21);r.Axes=n(11),r.Bodies=n(12),r.Body=n(4),r.Bounds=n(1),r.Collision=n(8),r.Common=n(0),r.Composite=n(6),r.Composites=n(22),r.Constraint=n(10),r.Contact=n(16),r.Detector=n(13),r.Engine=n(17),r.Events=n(5),r.Grid=n(23),r.Mouse=n(14),r.MouseConstraint=n(24),r.Pair=n(9),r.Pairs=n(19),r.Plugin=n(15),r.Query=n(25),r.Render=n(26),r.Resolver=n(18),r.Runner=n(27),r.SAT=n(28),r.Sleeping=n(7),r.Svg=n(29),r.Vector=n(2),r.Vertices=n(3),r.World=n(30),r.Engine.run=r.Runner.run,r.Common.deprecated(r.Engine,`run`,`Engine.run ➤ use Matter.Runner.run(engine) instead`)}),(function(e,t,n){var r={};e.exports=r;var i=n(15),a=n(0);(function(){r.name=`matter-js`,r.version=`0.20.0`,r.uses=[],r.used=[],r.use=function(){i.use(r,Array.prototype.slice.call(arguments))},r.before=function(e,t){return e=e.replace(/^Matter./,``),a.chainPathBefore(r,e,t)},r.after=function(e,t){return e=e.replace(/^Matter./,``),a.chainPathAfter(r,e,t)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(6),a=n(10),o=n(0),s=n(4),c=n(12),l=o.deprecated;(function(){r.stack=function(e,t,n,r,a,o,c){for(var l=i.create({label:`Stack`}),u=e,d=t,f,p=0,m=0;m<r;m++){for(var h=0,g=0;g<n;g++){var _=c(u,d,g,m,f,p);if(_){var v=_.bounds.max.y-_.bounds.min.y,y=_.bounds.max.x-_.bounds.min.x;v>h&&(h=v),s.translate(_,{x:y*.5,y:v*.5}),u=_.bounds.max.x+a,i.addBody(l,_),f=_,p+=1}else u+=a}d+=h+o,u=e}return l},r.chain=function(e,t,n,r,s,c){for(var l=e.bodies,u=1;u<l.length;u++){var d=l[u-1],f=l[u],p=d.bounds.max.y-d.bounds.min.y,m=d.bounds.max.x-d.bounds.min.x,h=f.bounds.max.y-f.bounds.min.y,g=f.bounds.max.x-f.bounds.min.x,_={bodyA:d,pointA:{x:m*t,y:p*n},bodyB:f,pointB:{x:g*r,y:h*s}},v=o.extend(_,c);i.addConstraint(e,a.create(v))}return e.label+=` Chain`,e},r.mesh=function(e,t,n,r,s){var c=e.bodies,l,u,d,f,p;for(l=0;l<n;l++){for(u=1;u<t;u++)d=c[u-1+l*t],f=c[u+l*t],i.addConstraint(e,a.create(o.extend({bodyA:d,bodyB:f},s)));if(l>0)for(u=0;u<t;u++)d=c[u+(l-1)*t],f=c[u+l*t],i.addConstraint(e,a.create(o.extend({bodyA:d,bodyB:f},s))),r&&u>0&&(p=c[u-1+(l-1)*t],i.addConstraint(e,a.create(o.extend({bodyA:p,bodyB:f},s)))),r&&u<t-1&&(p=c[u+1+(l-1)*t],i.addConstraint(e,a.create(o.extend({bodyA:p,bodyB:f},s))))}return e.label+=` Mesh`,e},r.pyramid=function(e,t,n,i,a,o,c){return r.stack(e,t,n,i,a,o,function(t,r,o,l,u,d){var f=Math.min(i,Math.ceil(n/2)),p=u?u.bounds.max.x-u.bounds.min.x:0;if(!(l>f)){l=f-l;var m=l,h=n-1-l;if(!(o<m||o>h))return d===1&&s.translate(u,{x:(o+(n%2==1?1:-1))*p,y:0}),c(e+(u?o*p:0)+o*a,r,o,l,u,d)}})},r.newtonsCradle=function(e,t,n,r,o){for(var s=i.create({label:`Newtons Cradle`}),l=0;l<n;l++){var u=1.9,d=c.circle(e+r*u*l,t+o,r,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),f=a.create({pointA:{x:e+r*u*l,y:t},bodyB:d});i.addBody(s,d),i.addConstraint(s,f)}return s},l(r,`newtonsCradle`,`Composites.newtonsCradle ➤ moved to newtonsCradle example`),r.car=function(e,t,n,r,o){var l=s.nextGroup(!0),u=20,d=-n*.5+u,f=n*.5-u,p=0,m=i.create({label:`Car`}),h=c.rectangle(e,t,n,r,{collisionFilter:{group:l},chamfer:{radius:r*.5},density:2e-4}),g=c.circle(e+d,t+p,o,{collisionFilter:{group:l},friction:.8}),_=c.circle(e+f,t+p,o,{collisionFilter:{group:l},friction:.8}),v=a.create({bodyB:h,pointB:{x:d,y:p},bodyA:g,stiffness:1,length:0}),y=a.create({bodyB:h,pointB:{x:f,y:p},bodyA:_,stiffness:1,length:0});return i.addBody(m,h),i.addBody(m,g),i.addBody(m,_),i.addConstraint(m,v),i.addConstraint(m,y),m},l(r,`car`,`Composites.car ➤ moved to car example`),r.softBody=function(e,t,n,i,a,s,l,u,d,f){d=o.extend({inertia:1/0},d),f=o.extend({stiffness:.2,render:{type:`line`,anchors:!1}},f);var p=r.stack(e,t,n,i,a,s,function(e,t){return c.circle(e,t,u,d)});return r.mesh(p,n,i,l,f),p.label=`Soft Body`,p},l(r,`softBody`,`Composites.softBody ➤ moved to softBody and cloth examples`)})()}),(function(e,t,n){var r={};e.exports=r;var i=n(9),a=n(0),o=a.deprecated;(function(){r.create=function(e){return a.extend({buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48},e)},r.update=function(e,t,n,i){var a,o,s,c=n.world,l=e.buckets,u,d,f=!1;for(a=0;a<t.length;a++){var p=t[a];if(!(p.isSleeping&&!i)&&!(c.bounds&&(p.bounds.max.x<c.bounds.min.x||p.bounds.min.x>c.bounds.max.x||p.bounds.max.y<c.bounds.min.y||p.bounds.min.y>c.bounds.max.y))){var m=r._getRegion(e,p);if(!p.region||m.id!==p.region.id||i){(!p.region||i)&&(p.region=m);var h=r._regionUnion(m,p.region);for(o=h.startCol;o<=h.endCol;o++)for(s=h.startRow;s<=h.endRow;s++){d=r._getBucketId(o,s),u=l[d];var g=o>=m.startCol&&o<=m.endCol&&s>=m.startRow&&s<=m.endRow,_=o>=p.region.startCol&&o<=p.region.endCol&&s>=p.region.startRow&&s<=p.region.endRow;!g&&_&&_&&u&&r._bucketRemoveBody(e,u,p),(p.region===m||g&&!_||i)&&(u||=r._createBucket(l,d),r._bucketAddBody(e,u,p))}p.region=m,f=!0}}}f&&(e.pairsList=r._createActivePairsList(e))},o(r,`update`,`Grid.update ➤ replaced by Matter.Detector`),r.clear=function(e){e.buckets={},e.pairs={},e.pairsList=[]},o(r,`clear`,`Grid.clear ➤ replaced by Matter.Detector`),r._regionUnion=function(e,t){var n=Math.min(e.startCol,t.startCol),i=Math.max(e.endCol,t.endCol),a=Math.min(e.startRow,t.startRow),o=Math.max(e.endRow,t.endRow);return r._createRegion(n,i,a,o)},r._getRegion=function(e,t){var n=t.bounds,i=Math.floor(n.min.x/e.bucketWidth),a=Math.floor(n.max.x/e.bucketWidth),o=Math.floor(n.min.y/e.bucketHeight),s=Math.floor(n.max.y/e.bucketHeight);return r._createRegion(i,a,o,s)},r._createRegion=function(e,t,n,r){return{id:e+`,`+t+`,`+n+`,`+r,startCol:e,endCol:t,startRow:n,endRow:r}},r._getBucketId=function(e,t){return`C`+e+`R`+t},r._createBucket=function(e,t){return e[t]=[]},r._bucketAddBody=function(e,t,n){var r=e.pairs,a=i.id,o=t.length,s;for(s=0;s<o;s++){var c=t[s];if(!(n.id===c.id||n.isStatic&&c.isStatic)){var l=a(n,c),u=r[l];u?u[2]+=1:r[l]=[n,c,1]}}t.push(n)},r._bucketRemoveBody=function(e,t,n){var r=e.pairs,o=i.id,s;t.splice(a.indexOf(t,n),1);var c=t.length;for(s=0;s<c;s++){var l=r[o(n,t[s])];l&&--l[2]}},r._createActivePairsList=function(e){var t,n=e.pairs,r=a.keys(n),i=r.length,o=[],s;for(s=0;s<i;s++)t=n[r[s]],t[2]>0?o.push(t):delete n[r[s]];return o}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(7),o=n(14),s=n(5),c=n(13),l=n(10),u=n(6),d=n(0),f=n(1);(function(){r.create=function(e,t){var n=(e?e.mouse:null)||(t?t.mouse:null);n||(e&&e.render&&e.render.canvas?n=o.create(e.render.canvas):t&&t.element?n=o.create(t.element):(n=o.create(),d.warn(`MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected`)));var i=l.create({label:`Mouse Constraint`,pointA:n.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:`#90EE90`,lineWidth:3}}),a={type:`mouseConstraint`,mouse:n,element:null,body:null,constraint:i,collisionFilter:{category:1,mask:4294967295,group:0}},c=d.extend(a,t);return s.on(e,`beforeUpdate`,function(){var t=u.allBodies(e.world);r.update(c,t),r._triggerEvents(c)}),c},r.update=function(e,t){var n=e.mouse,r=e.constraint,o=e.body;if(n.button===0){if(r.bodyB)a.set(r.bodyB,!1),r.pointA=n.position;else for(var l=0;l<t.length;l++)if(o=t[l],f.contains(o.bounds,n.position)&&c.canCollide(o.collisionFilter,e.collisionFilter))for(var u=+(o.parts.length>1);u<o.parts.length;u++){var d=o.parts[u];if(i.contains(d.vertices,n.position)){r.pointA=n.position,r.bodyB=e.body=o,r.pointB={x:n.position.x-o.position.x,y:n.position.y-o.position.y},r.angleB=o.angle,a.set(o,!1),s.trigger(e,`startdrag`,{mouse:n,body:o});break}}}else r.bodyB=e.body=null,r.pointB=null,o&&s.trigger(e,`enddrag`,{mouse:n,body:o})},r._triggerEvents=function(e){var t=e.mouse,n=t.sourceEvents;n.mousemove&&s.trigger(e,`mousemove`,{mouse:t}),n.mousedown&&s.trigger(e,`mousedown`,{mouse:t}),n.mouseup&&s.trigger(e,`mouseup`,{mouse:t}),o.clearSourceEvents(t)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(2),a=n(8),o=n(1),s=n(12),c=n(3);(function(){r.collides=function(e,t){for(var n=[],r=t.length,i=e.bounds,s=a.collides,c=o.overlaps,l=0;l<r;l++){var u=t[l],d=u.parts.length,f=d===1?0:1;if(c(u.bounds,i))for(var p=f;p<d;p++){var m=u.parts[p];if(c(m.bounds,i)){var h=s(m,e);if(h){n.push(h);break}}}}return n},r.ray=function(e,t,n,a){a||=1e-100;for(var o=i.angle(t,n),c=i.magnitude(i.sub(t,n)),l=(n.x+t.x)*.5,u=(n.y+t.y)*.5,d=s.rectangle(l,u,c,a,{angle:o}),f=r.collides(d,e),p=0;p<f.length;p+=1){var m=f[p];m.body=m.bodyB=m.bodyA}return f},r.region=function(e,t,n){for(var r=[],i=0;i<e.length;i++){var a=e[i],s=o.overlaps(a.bounds,t);(s&&!n||!s&&n)&&r.push(a)}return r},r.point=function(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r];if(o.contains(i.bounds,t))for(var a=i.parts.length===1?0:1;a<i.parts.length;a++){var s=i.parts[a];if(o.contains(s.bounds,t)&&c.contains(s.vertices,t)){n.push(i);break}}}return n}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(4),a=n(0),o=n(6),s=n(1),c=n(5),l=n(2),u=n(14);(function(){var e,t;typeof window<`u`&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(function(){e(a.now())},1e3/60)},t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),r._goodFps=30,r._goodDelta=1e3/60,r.create=function(e){var t={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:`#14151f`,wireframeBackground:`#14151f`,wireframeStrokeStyle:`#bbb`,hasBounds:!!e.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},n=a.extend(t,e);return n.canvas&&(n.canvas.width=n.options.width||n.canvas.width,n.canvas.height=n.options.height||n.canvas.height),n.mouse=e.mouse,n.engine=e.engine,n.canvas=n.canvas||f(n.options.width,n.options.height),n.context=n.canvas.getContext(`2d`),n.textures={},n.bounds=n.bounds||{min:{x:0,y:0},max:{x:n.canvas.width,y:n.canvas.height}},n.controller=r,n.options.showBroadphase=!1,n.options.pixelRatio!==1&&r.setPixelRatio(n,n.options.pixelRatio),a.isElement(n.element)&&n.element.appendChild(n.canvas),n},r.run=function(t){(function i(a){t.frameRequestId=e(i),n(t,a),r.world(t,a),t.context.setTransform(t.options.pixelRatio,0,0,t.options.pixelRatio,0,0),(t.options.showStats||t.options.showDebug)&&r.stats(t,t.context,a),(t.options.showPerformance||t.options.showDebug)&&r.performance(t,t.context,a),t.context.setTransform(1,0,0,1,0,0)})()},r.stop=function(e){t(e.frameRequestId)},r.setPixelRatio=function(e,t){var n=e.options,r=e.canvas;t===`auto`&&(t=p(r)),n.pixelRatio=t,r.setAttribute(`data-pixel-ratio`,t),r.width=n.width*t,r.height=n.height*t,r.style.width=n.width+`px`,r.style.height=n.height+`px`},r.setSize=function(e,t,n){e.options.width=t,e.options.height=n,e.bounds.max.x=e.bounds.min.x+t,e.bounds.max.y=e.bounds.min.y+n,e.options.pixelRatio===1?(e.canvas.width=t,e.canvas.height=n):r.setPixelRatio(e,e.options.pixelRatio)},r.lookAt=function(e,t,n,r){r=r===void 0?!0:r,t=a.isArray(t)?t:[t],n||={x:0,y:0};for(var i={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},o=0;o<t.length;o+=1){var s=t[o],c=s.bounds?s.bounds.min:s.min||s.position||s,l=s.bounds?s.bounds.max:s.max||s.position||s;c&&l&&(c.x<i.min.x&&(i.min.x=c.x),l.x>i.max.x&&(i.max.x=l.x),c.y<i.min.y&&(i.min.y=c.y),l.y>i.max.y&&(i.max.y=l.y))}var d=i.max.x-i.min.x+2*n.x,f=i.max.y-i.min.y+2*n.y,p=e.canvas.height,m=e.canvas.width/p,h=d/f,g=1,_=1;h>m?_=h/m:g=m/h,e.options.hasBounds=!0,e.bounds.min.x=i.min.x,e.bounds.max.x=i.min.x+d*g,e.bounds.min.y=i.min.y,e.bounds.max.y=i.min.y+f*_,r&&(e.bounds.min.x+=d*.5-d*g*.5,e.bounds.max.x+=d*.5-d*g*.5,e.bounds.min.y+=f*.5-f*_*.5,e.bounds.max.y+=f*.5-f*_*.5),e.bounds.min.x-=n.x,e.bounds.max.x-=n.x,e.bounds.min.y-=n.y,e.bounds.max.y-=n.y,e.mouse&&(u.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.canvas.width,y:(e.bounds.max.y-e.bounds.min.y)/e.canvas.height}),u.setOffset(e.mouse,e.bounds.min))},r.startViewTransform=function(e){var t=e.bounds.max.x-e.bounds.min.x,n=e.bounds.max.y-e.bounds.min.y,r=t/e.options.width,i=n/e.options.height;e.context.setTransform(e.options.pixelRatio/r,0,0,e.options.pixelRatio/i,0,0),e.context.translate(-e.bounds.min.x,-e.bounds.min.y)},r.endViewTransform=function(e){e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0)},r.world=function(e,t){var n=a.now(),i=e.engine,d=i.world,f=e.canvas,p=e.context,m=e.options,g=e.timing,_=o.allBodies(d),v=o.allConstraints(d),y=m.wireframes?m.wireframeBackground:m.background,b=[],x=[],S,C={timestamp:i.timing.timestamp};if(c.trigger(e,`beforeRender`,C),e.currentBackground!==y&&h(e,y),p.globalCompositeOperation=`source-in`,p.fillStyle=`transparent`,p.fillRect(0,0,f.width,f.height),p.globalCompositeOperation=`source-over`,m.hasBounds){for(S=0;S<_.length;S++){var w=_[S];s.overlaps(w.bounds,e.bounds)&&b.push(w)}for(S=0;S<v.length;S++){var T=v[S],E=T.bodyA,D=T.bodyB,O=T.pointA,k=T.pointB;E&&(O=l.add(E.position,T.pointA)),D&&(k=l.add(D.position,T.pointB)),!(!O||!k)&&(s.contains(e.bounds,O)||s.contains(e.bounds,k))&&x.push(T)}r.startViewTransform(e),e.mouse&&(u.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.options.width,y:(e.bounds.max.y-e.bounds.min.y)/e.options.height}),u.setOffset(e.mouse,e.bounds.min))}else x=v,b=_,e.options.pixelRatio!==1&&e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0);!m.wireframes||i.enableSleeping&&m.showSleeping?r.bodies(e,b,p):(m.showConvexHulls&&r.bodyConvexHulls(e,b,p),r.bodyWireframes(e,b,p)),m.showBounds&&r.bodyBounds(e,b,p),(m.showAxes||m.showAngleIndicator)&&r.bodyAxes(e,b,p),m.showPositions&&r.bodyPositions(e,b,p),m.showVelocity&&r.bodyVelocity(e,b,p),m.showIds&&r.bodyIds(e,b,p),m.showSeparations&&r.separations(e,i.pairs.list,p),m.showCollisions&&r.collisions(e,i.pairs.list,p),m.showVertexNumbers&&r.vertexNumbers(e,b,p),m.showMousePosition&&r.mousePosition(e,e.mouse,p),r.constraints(x,p),m.hasBounds&&r.endViewTransform(e),c.trigger(e,`afterRender`,C),g.lastElapsed=a.now()-n},r.stats=function(e,t,n){for(var r=e.engine,i=r.world,a=o.allBodies(i),s=0,c=55,l=44,u=0,d=0,f=0;f<a.length;f+=1)s+=a[f].parts.length;var p={Part:s,Body:a.length,Cons:o.allConstraints(i).length,Comp:o.allComposites(i).length,Pair:r.pairs.list.length};for(var m in t.fillStyle=`#0e0f19`,t.fillRect(u,d,c*5.5,l),t.font=`12px Arial`,t.textBaseline=`top`,t.textAlign=`right`,p){var h=p[m];t.fillStyle=`#aaa`,t.fillText(m,u+c,d+8),t.fillStyle=`#eee`,t.fillText(h,u+c,d+26),u+=c}},r.performance=function(e,t){var n=e.engine,i=e.timing,o=i.deltaHistory,s=i.elapsedHistory,c=i.timestampElapsedHistory,l=i.engineDeltaHistory,u=i.engineUpdatesHistory,f=i.engineElapsedHistory,p=n.timing.lastUpdatesPerFrame,m=n.timing.lastDelta,h=d(o),g=d(s),_=d(l),v=d(u),y=d(f),b=d(c)/h||0,x=Math.round(h/m),S=1e3/h||0,C=4,w=12,T=60,E=34,D=10,O=69;t.fillStyle=`#0e0f19`,t.fillRect(0,50,w*5+T*6+22,E),r.status(t,D,O,T,C,o.length,Math.round(S)+` fps`,S/r._goodFps,function(e){return o[e]/h-1}),r.status(t,D+w+T,O,T,C,l.length,m.toFixed(2)+` dt`,r._goodDelta/m,function(e){return l[e]/_-1}),r.status(t,D+(w+T)*2,O,T,C,u.length,p+` upf`,a.clamp(v/x||1,0,1)**4,function(e){return u[e]/v-1}),r.status(t,D+(w+T)*3,O,T,C,f.length,y.toFixed(2)+` ut`,1-p*y/r._goodFps,function(e){return f[e]/y-1}),r.status(t,D+(w+T)*4,O,T,C,s.length,g.toFixed(2)+` rt`,1-g/r._goodFps,function(e){return s[e]/g-1}),r.status(t,D+(w+T)*5,O,T,C,c.length,b.toFixed(2)+` x`,b*b*b,function(e){return(c[e]/o[e]/b||0)-1})},r.status=function(e,t,n,r,i,o,s,c,l){e.strokeStyle=`#888`,e.fillStyle=`#444`,e.lineWidth=1,e.fillRect(t,n+7,r,1),e.beginPath(),e.moveTo(t,n+7-i*a.clamp(.4*l(0),-2,2));for(var u=0;u<r;u+=1)e.lineTo(t+u,n+7-(u<o?i*a.clamp(.4*l(u),-2,2):0));e.stroke(),e.fillStyle=`hsl(`+a.clamp(25+95*c,0,120)+`,100%,60%)`,e.fillRect(t,n-7,4,4),e.font=`12px Arial`,e.textBaseline=`middle`,e.textAlign=`right`,e.fillStyle=`#eee`,e.fillText(s,t+r,n-5)},r.constraints=function(e,t){for(var n=t,r=0;r<e.length;r++){var i=e[r];if(!(!i.render.visible||!i.pointA||!i.pointB)){var o=i.bodyA,s=i.bodyB,c=o?l.add(o.position,i.pointA):i.pointA,u;if(i.render.type===`pin`)n.beginPath(),n.arc(c.x,c.y,3,0,2*Math.PI),n.closePath();else{if(u=s?l.add(s.position,i.pointB):i.pointB,n.beginPath(),n.moveTo(c.x,c.y),i.render.type===`spring`)for(var d=l.sub(u,c),f=l.perp(l.normalise(d)),p=Math.ceil(a.clamp(i.length/5,12,20)),m,h=1;h<p;h+=1)m=h%2==0?1:-1,n.lineTo(c.x+d.x*(h/p)+f.x*m*4,c.y+d.y*(h/p)+f.y*m*4);n.lineTo(u.x,u.y)}i.render.lineWidth&&(n.lineWidth=i.render.lineWidth,n.strokeStyle=i.render.strokeStyle,n.stroke()),i.render.anchors&&(n.fillStyle=i.render.strokeStyle,n.beginPath(),n.arc(c.x,c.y,3,0,2*Math.PI),n.arc(u.x,u.y,3,0,2*Math.PI),n.closePath(),n.fill())}}},r.bodies=function(e,t,n){var r=n;e.engine;var i=e.options,a=i.showInternalEdges||!i.wireframes,o,s,c,l;for(c=0;c<t.length;c++)if(o=t[c],o.render.visible){for(l=+(o.parts.length>1);l<o.parts.length;l++)if(s=o.parts[l],s.render.visible){if(i.showSleeping&&o.isSleeping?r.globalAlpha=.5*s.render.opacity:s.render.opacity!==1&&(r.globalAlpha=s.render.opacity),s.render.sprite&&s.render.sprite.texture&&!i.wireframes){var u=s.render.sprite,d=m(e,u.texture);r.translate(s.position.x,s.position.y),r.rotate(s.angle),r.drawImage(d,d.width*-u.xOffset*u.xScale,d.height*-u.yOffset*u.yScale,d.width*u.xScale,d.height*u.yScale),r.rotate(-s.angle),r.translate(-s.position.x,-s.position.y)}else{if(s.circleRadius)r.beginPath(),r.arc(s.position.x,s.position.y,s.circleRadius,0,2*Math.PI);else{r.beginPath(),r.moveTo(s.vertices[0].x,s.vertices[0].y);for(var f=1;f<s.vertices.length;f++)!s.vertices[f-1].isInternal||a?r.lineTo(s.vertices[f].x,s.vertices[f].y):r.moveTo(s.vertices[f].x,s.vertices[f].y),s.vertices[f].isInternal&&!a&&r.moveTo(s.vertices[(f+1)%s.vertices.length].x,s.vertices[(f+1)%s.vertices.length].y);r.lineTo(s.vertices[0].x,s.vertices[0].y),r.closePath()}i.wireframes?(r.lineWidth=1,r.strokeStyle=e.options.wireframeStrokeStyle,r.stroke()):(r.fillStyle=s.render.fillStyle,s.render.lineWidth&&(r.lineWidth=s.render.lineWidth,r.strokeStyle=s.render.strokeStyle,r.stroke()),r.fill())}r.globalAlpha=1}}},r.bodyWireframes=function(e,t,n){var r=n,i=e.options.showInternalEdges,a,o,s,c,l;for(r.beginPath(),s=0;s<t.length;s++)if(a=t[s],a.render.visible)for(l=+(a.parts.length>1);l<a.parts.length;l++){for(o=a.parts[l],r.moveTo(o.vertices[0].x,o.vertices[0].y),c=1;c<o.vertices.length;c++)!o.vertices[c-1].isInternal||i?r.lineTo(o.vertices[c].x,o.vertices[c].y):r.moveTo(o.vertices[c].x,o.vertices[c].y),o.vertices[c].isInternal&&!i&&r.moveTo(o.vertices[(c+1)%o.vertices.length].x,o.vertices[(c+1)%o.vertices.length].y);r.lineTo(o.vertices[0].x,o.vertices[0].y)}r.lineWidth=1,r.strokeStyle=e.options.wireframeStrokeStyle,r.stroke()},r.bodyConvexHulls=function(e,t,n){var r=n,i,a,o;for(r.beginPath(),a=0;a<t.length;a++)if(i=t[a],!(!i.render.visible||i.parts.length===1)){for(r.moveTo(i.vertices[0].x,i.vertices[0].y),o=1;o<i.vertices.length;o++)r.lineTo(i.vertices[o].x,i.vertices[o].y);r.lineTo(i.vertices[0].x,i.vertices[0].y)}r.lineWidth=1,r.strokeStyle=`rgba(255,255,255,0.2)`,r.stroke()},r.vertexNumbers=function(e,t,n){var r=n,i,a,o;for(i=0;i<t.length;i++){var s=t[i].parts;for(o=+(s.length>1);o<s.length;o++){var c=s[o];for(a=0;a<c.vertices.length;a++)r.fillStyle=`rgba(255,255,255,0.2)`,r.fillText(i+`_`+a,c.position.x+(c.vertices[a].x-c.position.x)*.8,c.position.y+(c.vertices[a].y-c.position.y)*.8)}}},r.mousePosition=function(e,t,n){var r=n;r.fillStyle=`rgba(255,255,255,0.8)`,r.fillText(t.position.x+`  `+t.position.y,t.position.x+5,t.position.y-5)},r.bodyBounds=function(e,t,n){var r=n;e.engine;var i=e.options;r.beginPath();for(var a=0;a<t.length;a++)if(t[a].render.visible)for(var o=t[a].parts,s=+(o.length>1);s<o.length;s++){var c=o[s];r.rect(c.bounds.min.x,c.bounds.min.y,c.bounds.max.x-c.bounds.min.x,c.bounds.max.y-c.bounds.min.y)}i.wireframes?r.strokeStyle=`rgba(255,255,255,0.08)`:r.strokeStyle=`rgba(0,0,0,0.1)`,r.lineWidth=1,r.stroke()},r.bodyAxes=function(e,t,n){var r=n;e.engine;var i=e.options,a,o,s,c;for(r.beginPath(),o=0;o<t.length;o++){var l=t[o],u=l.parts;if(l.render.visible)if(i.showAxes)for(s=+(u.length>1);s<u.length;s++)for(a=u[s],c=0;c<a.axes.length;c++){var d=a.axes[c];r.moveTo(a.position.x,a.position.y),r.lineTo(a.position.x+d.x*20,a.position.y+d.y*20)}else for(s=+(u.length>1);s<u.length;s++)for(a=u[s],c=0;c<a.axes.length;c++)r.moveTo(a.position.x,a.position.y),r.lineTo((a.vertices[0].x+a.vertices[a.vertices.length-1].x)/2,(a.vertices[0].y+a.vertices[a.vertices.length-1].y)/2)}i.wireframes?(r.strokeStyle=`indianred`,r.lineWidth=1):(r.strokeStyle=`rgba(255, 255, 255, 0.4)`,r.globalCompositeOperation=`overlay`,r.lineWidth=2),r.stroke(),r.globalCompositeOperation=`source-over`},r.bodyPositions=function(e,t,n){var r=n;e.engine;var i=e.options,a,o,s,c;for(r.beginPath(),s=0;s<t.length;s++)if(a=t[s],a.render.visible)for(c=0;c<a.parts.length;c++)o=a.parts[c],r.arc(o.position.x,o.position.y,3,0,2*Math.PI,!1),r.closePath();for(i.wireframes?r.fillStyle=`indianred`:r.fillStyle=`rgba(0,0,0,0.5)`,r.fill(),r.beginPath(),s=0;s<t.length;s++)a=t[s],a.render.visible&&(r.arc(a.positionPrev.x,a.positionPrev.y,2,0,2*Math.PI,!1),r.closePath());r.fillStyle=`rgba(255,165,0,0.8)`,r.fill()},r.bodyVelocity=function(e,t,n){var r=n;r.beginPath();for(var a=0;a<t.length;a++){var o=t[a];if(o.render.visible){var s=i.getVelocity(o);r.moveTo(o.position.x,o.position.y),r.lineTo(o.position.x+s.x,o.position.y+s.y)}}r.lineWidth=3,r.strokeStyle=`cornflowerblue`,r.stroke()},r.bodyIds=function(e,t,n){var r=n,i,a;for(i=0;i<t.length;i++)if(t[i].render.visible){var o=t[i].parts;for(a=+(o.length>1);a<o.length;a++){var s=o[a];r.font=`12px Arial`,r.fillStyle=`rgba(255,255,255,0.5)`,r.fillText(s.id,s.position.x+10,s.position.y-10)}}},r.collisions=function(e,t,n){var r=n,i=e.options,a,o,s,c;for(r.beginPath(),s=0;s<t.length;s++)if(a=t[s],a.isActive)for(o=a.collision,c=0;c<a.contactCount;c++){var l=a.contacts[c].vertex;r.rect(l.x-1.5,l.y-1.5,3.5,3.5)}for(i.wireframes?r.fillStyle=`rgba(255,255,255,0.7)`:r.fillStyle=`orange`,r.fill(),r.beginPath(),s=0;s<t.length;s++)if(a=t[s],a.isActive&&(o=a.collision,a.contactCount>0)){var u=a.contacts[0].vertex.x,d=a.contacts[0].vertex.y;a.contactCount===2&&(u=(a.contacts[0].vertex.x+a.contacts[1].vertex.x)/2,d=(a.contacts[0].vertex.y+a.contacts[1].vertex.y)/2),o.bodyB===o.supports[0].body||o.bodyA.isStatic===!0?r.moveTo(u-o.normal.x*8,d-o.normal.y*8):r.moveTo(u+o.normal.x*8,d+o.normal.y*8),r.lineTo(u,d)}i.wireframes?r.strokeStyle=`rgba(255,165,0,0.7)`:r.strokeStyle=`orange`,r.lineWidth=1,r.stroke()},r.separations=function(e,t,n){var r=n,i=e.options,a,o,s,c,l;for(r.beginPath(),l=0;l<t.length;l++)if(a=t[l],a.isActive){o=a.collision,s=o.bodyA,c=o.bodyB;var u=1;!c.isStatic&&!s.isStatic&&(u=.5),c.isStatic&&(u=0),r.moveTo(c.position.x,c.position.y),r.lineTo(c.position.x-o.penetration.x*u,c.position.y-o.penetration.y*u),u=1,!c.isStatic&&!s.isStatic&&(u=.5),s.isStatic&&(u=0),r.moveTo(s.position.x,s.position.y),r.lineTo(s.position.x+o.penetration.x*u,s.position.y+o.penetration.y*u)}i.wireframes?r.strokeStyle=`rgba(255,165,0,0.5)`:r.strokeStyle=`orange`,r.stroke()},r.inspector=function(e,t){e.engine;var n=e.selected,r=e.render,i=r.options,a;if(i.hasBounds){var o=r.bounds.max.x-r.bounds.min.x,s=r.bounds.max.y-r.bounds.min.y,c=o/r.options.width,l=s/r.options.height;t.scale(1/c,1/l),t.translate(-r.bounds.min.x,-r.bounds.min.y)}for(var u=0;u<n.length;u++){var d=n[u].data;switch(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle=`rgba(255,165,0,0.9)`,t.setLineDash([1,2]),d.type){case`body`:a=d.bounds,t.beginPath(),t.rect(Math.floor(a.min.x-3),Math.floor(a.min.y-3),Math.floor(a.max.x-a.min.x+6),Math.floor(a.max.y-a.min.y+6)),t.closePath(),t.stroke();break;case`constraint`:var f=d.pointA;d.bodyA&&(f=d.pointB),t.beginPath(),t.arc(f.x,f.y,10,0,2*Math.PI),t.closePath(),t.stroke();break}t.setLineDash([]),t.translate(-.5,-.5)}e.selectStart!==null&&(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle=`rgba(255,165,0,0.6)`,t.fillStyle=`rgba(255,165,0,0.1)`,a=e.selectBounds,t.beginPath(),t.rect(Math.floor(a.min.x),Math.floor(a.min.y),Math.floor(a.max.x-a.min.x),Math.floor(a.max.y-a.min.y)),t.closePath(),t.stroke(),t.fill(),t.translate(-.5,-.5)),i.hasBounds&&t.setTransform(1,0,0,1,0,0)};var n=function(e,t){var n=e.engine,i=e.timing,a=i.historySize,o=n.timing.timestamp;i.delta=t-i.lastTime||r._goodDelta,i.lastTime=t,i.timestampElapsed=o-i.lastTimestamp||0,i.lastTimestamp=o,i.deltaHistory.unshift(i.delta),i.deltaHistory.length=Math.min(i.deltaHistory.length,a),i.engineDeltaHistory.unshift(n.timing.lastDelta),i.engineDeltaHistory.length=Math.min(i.engineDeltaHistory.length,a),i.timestampElapsedHistory.unshift(i.timestampElapsed),i.timestampElapsedHistory.length=Math.min(i.timestampElapsedHistory.length,a),i.engineUpdatesHistory.unshift(n.timing.lastUpdatesPerFrame),i.engineUpdatesHistory.length=Math.min(i.engineUpdatesHistory.length,a),i.engineElapsedHistory.unshift(n.timing.lastElapsed),i.engineElapsedHistory.length=Math.min(i.engineElapsedHistory.length,a),i.elapsedHistory.unshift(i.lastElapsed),i.elapsedHistory.length=Math.min(i.elapsedHistory.length,a)},d=function(e){for(var t=0,n=0;n<e.length;n+=1)t+=e[n];return t/e.length||0},f=function(e,t){var n=document.createElement(`canvas`);return n.width=e,n.height=t,n.oncontextmenu=function(){return!1},n.onselectstart=function(){return!1},n},p=function(e){var t=e.getContext(`2d`);return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)},m=function(e,t){var n=e.textures[t];return n||(n=e.textures[t]=new Image,n.src=t,n)},h=function(e,t){var n=t;/(jpg|gif|png)$/.test(t)&&(n=`url(`+t+`)`),e.canvas.style.background=n,e.canvas.style.backgroundSize=`contain`,e.currentBackground=t}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(5),a=n(17),o=n(0);(function(){r._maxFrameDelta=1e3/15,r._frameDeltaFallback=1e3/60,r._timeBufferMargin=1.5,r._elapsedNextEstimate=1,r._smoothingLowerBound=.1,r._smoothingUpperBound=.9,r.create=function(e){var t=o.extend({delta:1e3/60,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:1e3/30,lastUpdatesDeferred:0,enabled:!0},e);return t.fps=0,t},r.run=function(e,t){return e.timeBuffer=r._frameDeltaFallback,(function n(i){e.frameRequestId=r._onNextFrame(e,n),i&&e.enabled&&r.tick(e,t,i)})(),e},r.tick=function(t,n,s){var c=o.now(),l=t.delta,u=0,d=s-t.timeLastTick;if((!d||!t.timeLastTick||d>Math.max(r._maxFrameDelta,t.maxFrameTime))&&(d=t.frameDelta||r._frameDeltaFallback),t.frameDeltaSmoothing){t.frameDeltaHistory.push(d),t.frameDeltaHistory=t.frameDeltaHistory.slice(-t.frameDeltaHistorySize);var f=t.frameDeltaHistory.slice(0).sort();d=e(t.frameDeltaHistory.slice(f.length*r._smoothingLowerBound,f.length*r._smoothingUpperBound))||d}t.frameDeltaSnapping&&(d=1e3/Math.round(1e3/d)),t.frameDelta=d,t.timeLastTick=s,t.timeBuffer+=t.frameDelta,t.timeBuffer=o.clamp(t.timeBuffer,0,t.frameDelta+l*r._timeBufferMargin),t.lastUpdatesDeferred=0;var p=t.maxUpdates||Math.ceil(t.maxFrameTime/l),m={timestamp:n.timing.timestamp};i.trigger(t,`beforeTick`,m),i.trigger(t,`tick`,m);for(var h=o.now();l>0&&t.timeBuffer>=l*r._timeBufferMargin;){i.trigger(t,`beforeUpdate`,m),a.update(n,l),i.trigger(t,`afterUpdate`,m),t.timeBuffer-=l,u+=1;var g=o.now()-c,_=o.now()-h,v=g+r._elapsedNextEstimate*_/u;if(u>=p||v>t.maxFrameTime){t.lastUpdatesDeferred=Math.round(Math.max(0,t.timeBuffer/l-r._timeBufferMargin));break}}n.timing.lastUpdatesPerFrame=u,i.trigger(t,`afterTick`,m),t.frameDeltaHistory.length>=100&&(t.lastUpdatesDeferred&&Math.round(t.frameDelta/l)>p?o.warnOnce(`Matter.Runner: runner reached runner.maxUpdates, see docs.`):t.lastUpdatesDeferred&&o.warnOnce(`Matter.Runner: runner reached runner.maxFrameTime, see docs.`),t.isFixed!==void 0&&o.warnOnce(`Matter.Runner: runner.isFixed is now redundant, see docs.`),(t.deltaMin||t.deltaMax)&&o.warnOnce(`Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.`),t.fps!==0&&o.warnOnce(`Matter.Runner: runner.fps was replaced by runner.delta, see docs.`))},r.stop=function(e){r._cancelNextFrame(e)},r._onNextFrame=function(e,t){if(typeof window<`u`&&window.requestAnimationFrame)e.frameRequestId=window.requestAnimationFrame(t);else throw Error(`Matter.Runner: missing required global window.requestAnimationFrame.`);return e.frameRequestId},r._cancelNextFrame=function(e){if(typeof window<`u`&&window.cancelAnimationFrame)window.cancelAnimationFrame(e.frameRequestId);else throw Error(`Matter.Runner: missing required global window.cancelAnimationFrame.`)};var e=function(e){for(var t=0,n=e.length,r=0;r<n;r+=1)t+=e[r];return t/n||0}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(8),a=n(0).deprecated;(function(){r.collides=function(e,t){return i.collides(e,t)},a(r,`collides`,`SAT.collides ➤ replaced by Collision.collides`)})()}),(function(e,t,n){var r={};e.exports=r,n(1);var i=n(0);(function(){r.pathToVertices=function(e,t){typeof window<`u`&&!(`SVGPathSeg`in window)&&i.warn(`Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.`);var n,a,o,s,c,l,u,d,f,p,m=[],h,g,_=0,v=0,y=0;t||=15;var b=function(e,t,n){var r=n%2==1&&n>1;if(!f||e!=f.x||t!=f.y){f&&r?(h=f.x,g=f.y):(h=0,g=0);var i={x:h+e,y:g+t};(r||!f)&&(f=i),m.push(i),v=h+e,y=g+t}},x=function(e){var t=e.pathSegTypeAsLetter.toUpperCase();if(t!==`Z`){switch(t){case`M`:case`L`:case`T`:case`C`:case`S`:case`Q`:v=e.x,y=e.y;break;case`H`:v=e.x;break;case`V`:y=e.y;break}b(v,y,e.pathSegType)}};for(r._svgPathToAbsolute(e),o=e.getTotalLength(),l=[],n=0;n<e.pathSegList.numberOfItems;n+=1)l.push(e.pathSegList.getItem(n));for(u=l.concat();_<o;){if(p=e.getPathSegAtLength(_),c=l[p],c!=d){for(;u.length&&u[0]!=c;)x(u.shift());d=c}switch(c.pathSegTypeAsLetter.toUpperCase()){case`C`:case`T`:case`S`:case`Q`:case`A`:s=e.getPointAtLength(_),b(s.x,s.y,0);break}_+=t}for(n=0,a=u.length;n<a;++n)x(u[n]);return m},r._svgPathToAbsolute=function(e){for(var t,n,r,i,a,o,s=e.pathSegList,c=0,l=0,u=s.numberOfItems,d=0;d<u;++d){var f=s.getItem(d),p=f.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(p))`x`in f&&(c=f.x),`y`in f&&(l=f.y);else switch(`x1`in f&&(r=c+f.x1),`x2`in f&&(a=c+f.x2),`y1`in f&&(i=l+f.y1),`y2`in f&&(o=l+f.y2),`x`in f&&(c+=f.x),`y`in f&&(l+=f.y),p){case`m`:s.replaceItem(e.createSVGPathSegMovetoAbs(c,l),d);break;case`l`:s.replaceItem(e.createSVGPathSegLinetoAbs(c,l),d);break;case`h`:s.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(c),d);break;case`v`:s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(l),d);break;case`c`:s.replaceItem(e.createSVGPathSegCurvetoCubicAbs(c,l,r,i,a,o),d);break;case`s`:s.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(c,l,a,o),d);break;case`q`:s.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(c,l,r,i),d);break;case`t`:s.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(c,l),d);break;case`a`:s.replaceItem(e.createSVGPathSegArcAbs(c,l,f.r1,f.r2,f.angle,f.largeArcFlag,f.sweepFlag),d);break;case`z`:case`Z`:c=t,l=n;break}(p==`M`||p==`m`)&&(t=c,n=l)}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(6);n(0),(function(){r.create=i.create,r.add=i.add,r.remove=i.remove,r.clear=i.clear,r.addComposite=i.addComposite,r.addBody=i.addBody,r.addConstraint=i.addConstraint})()})])})}))(),1);function Ku(){return new vo({uniforms:{resolution:{value:null},videoTexture:{value:null},init:{value:null},time:{value:null}},glslVersion:Bn,vertexShader:`
            out vec3 vWorldPosition;

            void main() {
                vWorldPosition = (instanceMatrix * vec4(position, 1.0)).rgb;
                gl_Position = projectionMatrix * viewMatrix * instanceMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;
            in vec3 vWorldPosition;
            uniform vec2 resolution;
            uniform sampler2D videoTexture;
            uniform bool init;
            uniform float time;

            out vec4 fragColor;

            void main() {
                vec2 uv = (vWorldPosition.xy + (resolution / 2.0)) / resolution;
                if(init) {
                    fragColor = vec4(vec3(1.0), 30.0);
                }
                else {
                    fragColor = vec4(texture(videoTexture, uv).rgb, 30.0);
                }
            }
        `})}var qu=class extends Uu{circles;mesh;mat;walls;engine;p={count:100,speed:1,variation:6,force:1,forceRadius:70,mat:10};palettes=[[[0,1,1],[1,0,1],[.541,.169,.886],[1,.702,0]],[[.169,.675,.71],[1,.494,.235],[.435,.157,.722],[1,.839,.416]],[[1,0,.498],[0,1,1],[.188,0,.6],[1,.8,0]]];paletteIndex=0;constructor(e,t){super(e,t),this.circles=[],this.walls=[],this.createScene()}reset(){this.dispose(),this.scene.clear(),this.circles=[],this.walls=[],this.createScene()}createScene(){this.engine=Gu.default.Engine.create({gravity:{x:0,y:0,scale:0}});let e=new oo(1,12);this.p.mat===10?(this.mat=Ku(),this.mat.uniforms.resolution.value=[this.width,this.height]):this.mat=new xa({opacity:30,blending:0}),this.mesh=new Ga(e,this.mat,this.p.count);let t=new oi,n=new mi;for(let e=0;e<this.mesh.count;e++){let r=(Math.random()*2-1)*this.width/2,i=(Math.random()*2-1)*this.height/2,a=Math.max(Math.ceil(Math.random()*this.p.variation),1);t.scale.set(a,a,1),t.updateMatrix(),this.mesh.setMatrixAt(e,t.matrix),this.p.mat<10&&(n.setRGB(this.palettes[this.p.mat][e%4][0],this.palettes[this.p.mat][e%4][1],this.palettes[this.p.mat][e%4][2]),this.mesh.setColorAt(e,n));let o=Gu.default.Bodies.circle(r,i,a,{restitution:1,frictionAir:.005});Gu.default.Composite.add(this.engine.world,o),this.circles.push({body:o,size:a})}this.scene.add(this.mesh),this.volScene=this.scene;let r={isStatic:!0,restitution:.8};this.walls.push(Gu.default.Bodies.rectangle(0,this.height/2+100/2,this.width+100,100,r)),this.walls.push(Gu.default.Bodies.rectangle(0,-this.height/2-100/2,this.width+100,100,r)),this.walls.push(Gu.default.Bodies.rectangle(-this.width/2-100/2,0,100,this.height+100,r)),this.walls.push(Gu.default.Bodies.rectangle(this.width/2+100/2,0,100,this.height+100,r)),Gu.default.Composite.add(this.engine.world,this.walls)}update(e,t,n,r){if(this.p.count!==r.count||this.p.variation!==r.variation||this.p.mat!==r.mat){this.p=r,this.reset();return}this.p=r;let i=new oi;Gu.default.Engine.update(this.engine,Math.min(e,1/60*1e3));for(let e=0;e<this.circles.length;e++){let{body:t,size:n}=this.circles[e];(t.position.x<-this.width/2||t.position.x>this.width/2||t.position.y<-this.height/2||t.position.y>this.height/2)&&Gu.default.Body.setPosition(t,{x:0,y:0}),i.position.set(t.position.x,t.position.y,0),i.scale.set(n,n,1),i.updateMatrix(),this.mesh.setMatrixAt(e,i.matrix),t.speed<r.speed&&(t.speed===0&&Gu.default.Body.setVelocity(t,{x:Math.random()*2-1,y:Math.random()*2-1}),Gu.default.Body.setSpeed(t,r.speed))}this.mesh.instanceMatrix.needsUpdate=!0,this.changeSpeed(t),this.mat instanceof vo&&(this.mat.uniforms.videoTexture.value=n,this.mat.uniforms.init.value=!n)}changeSpeed(e){for(let t=0;t<this.circles.length;t++){let{body:n}=this.circles[t],r,i;if(e){let t=n.position.x-e.x,a=n.position.y-e.y;r=Math.atan2(a,t),i=Math.hypot(t,a)}else i=0,r=Math.random()*Math.PI*2;i<this.p.forceRadius&&Gu.default.Body.setVelocity(n,{x:n.velocity.x+this.p.force*Math.cos(r),y:n.velocity.y+this.p.force*Math.sin(r)})}}volumetrics(e){}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};function Ju(){var e=Object.create(null);function t(n,i){var a=n.id,o=n.name,s=n.dependencies;s===void 0&&(s=[]);var c=n.init;c===void 0&&(c=function(){});var l=n.getTransferables;if(l===void 0&&(l=null),!e[a])try{s=s.map(function(n){return n&&n.isWorkerModule&&(t(n,function(e){if(e instanceof Error)throw e}),n=e[n.id].value),n}),c=r(`<`+o+`>.init`,c),l&&=r(`<`+o+`>.getTransferables`,l);var u=null;typeof c==`function`?u=c.apply(void 0,s):console.error(`worker module init function failed to rehydrate`),e[a]={id:a,value:u,getTransferables:l},i(u)}catch(e){e&&e.noLog||console.error(e),i(e)}}function n(t,n){var r,i=t.id,a=t.args;(!e[i]||typeof e[i].value!=`function`)&&n(Error(`Worker module `+i+`: not found or its 'init' did not return a function`));try{var o=(r=e[i]).value.apply(r,a);o&&typeof o.then==`function`?o.then(s,function(e){return n(e instanceof Error?e:Error(``+e))}):s(o)}catch(e){n(e)}function s(t){try{var r=e[i].getTransferables&&e[i].getTransferables(t);(!r||!Array.isArray(r)||!r.length)&&(r=void 0),n(t,r)}catch(e){console.error(e),n(e)}}}function r(e,t){var n=void 0;self.troikaDefine=function(e){return n=e};var r=URL.createObjectURL(new Blob([`/** `+e.replace(/\*/g,``)+` **/

troikaDefine(
`+t+`
)`],{type:`application/javascript`}));try{importScripts(r)}catch(e){console.error(e)}return URL.revokeObjectURL(r),delete self.troikaDefine,n}self.addEventListener(`message`,function(e){var r=e.data,i=r.messageId,a=r.action,o=r.data;try{a===`registerModule`&&t(o,function(e){e instanceof Error?postMessage({messageId:i,success:!1,error:e.message}):postMessage({messageId:i,success:!0,result:{isCallable:typeof e==`function`}})}),a===`callModule`&&n(o,function(e,t){e instanceof Error?postMessage({messageId:i,success:!1,error:e.message}):postMessage({messageId:i,success:!0,result:e},t||void 0)})}catch(e){postMessage({messageId:i,success:!1,error:e.stack})}})}function Yu(e){var t=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];return t._getInitResult().then(function(t){if(typeof t==`function`)return t.apply(void 0,e);throw Error("Worker module function was called but `init` did not return a callable function")})};return t._getInitResult=function(){var n=e.dependencies,r=e.init;n=Array.isArray(n)?n.map(function(e){return e&&(e=e.onMainThread||e,e._getInitResult&&(e=e._getInitResult())),e}):[];var i=Promise.all(n).then(function(e){return r.apply(null,e)});return t._getInitResult=function(){return i},i},t}var Xu=function(){var e=!1;if(typeof window<`u`&&window.document!==void 0)try{new Worker(URL.createObjectURL(new Blob([``],{type:`application/javascript`}))).terminate(),e=!0}catch(e){console.log(`Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [`+e.message+`]`)}return Xu=function(){return e},e},Zu=0,Qu=0,$u=!1,ed=Object.create(null),td=Object.create(null),nd=Object.create(null);function rd(e){if((!e||typeof e.init!=`function`)&&!$u)throw Error("requires `options.init` function");var t=e.dependencies,n=e.init,r=e.getTransferables,i=e.workerId,a=Yu(e);i??=`#default`;var o=`workerModule`+ ++Zu,s=e.name||o,c=null;t&&=t.map(function(e){return typeof e==`function`&&!e.workerModuleData&&($u=!0,e=rd({workerId:i,name:`<`+s+`> function dependency: `+e.name,init:`function(){return (
`+ad(e)+`
)}`}),$u=!1),e&&e.workerModuleData&&(e=e.workerModuleData),e});function l(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(!Xu())return a.apply(void 0,e);if(!c){c=sd(i,`registerModule`,l.workerModuleData);var n=function(){c=null,td[i].delete(n)};(td[i]||(td[i]=new Set)).add(n)}return c.then(function(t){if(t.isCallable)return sd(i,`callModule`,{id:o,args:e});throw Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:o,name:s,dependencies:t,init:ad(n),getTransferables:r&&ad(r)},l.onMainThread=a,l}function id(e){td[e]&&td[e].forEach(function(e){e()}),ed[e]&&(ed[e].terminate(),delete ed[e])}function ad(e){var t=e.toString();return!/^function/.test(t)&&/^\w+\s*\(/.test(t)&&(t=`function `+t),t}function od(e){var t=ed[e];if(!t){var n=ad(Ju);t=ed[e]=new Worker(URL.createObjectURL(new Blob([`/** Worker Module Bootstrap: `+e.replace(/\*/g,``)+` **/

;(`+n+`)()`],{type:`application/javascript`}))),t.onmessage=function(e){var t=e.data,n=t.messageId,r=nd[n];if(!r)throw Error(`WorkerModule response with empty or unknown messageId`);delete nd[n],r(t)}}return t}function sd(e,t,n){return new Promise(function(r,i){var a=++Qu;nd[a]=function(e){e.success?r(e.result):i(Error(`Error in worker `+t+` call: `+e.error))},od(e).postMessage({messageId:a,action:t,data:n})})}function cd(){return function(e){function t(e,t,n,r,i,a,o,s){var c=1-o;s.x=c*c*e+2*c*o*n+o*o*i,s.y=c*c*t+2*c*o*r+o*o*a}function n(e,t,n,r,i,a,o,s,c,l){var u=1-c;l.x=u*u*u*e+3*u*u*c*n+3*u*c*c*i+c*c*c*o,l.y=u*u*u*t+3*u*u*c*r+3*u*c*c*a+c*c*c*s}function r(e,t){for(var n=/([MLQCZ])([^MLQCZ]*)/g,r,i,a,o,s;r=n.exec(e);){var c=r[2].replace(/^\s*|\s*$/g,``).split(/[,\s]+/).map(function(e){return parseFloat(e)});switch(r[1]){case`M`:o=i=c[0],s=a=c[1];break;case`L`:(c[0]!==o||c[1]!==s)&&t(`L`,o,s,o=c[0],s=c[1]);break;case`Q`:t(`Q`,o,s,o=c[2],s=c[3],c[0],c[1]);break;case`C`:t(`C`,o,s,o=c[4],s=c[5],c[0],c[1],c[2],c[3]);break;case`Z`:(o!==i||s!==a)&&t(`L`,o,s,i,a);break}}}function i(e,i,a){a===void 0&&(a=16);var o={x:0,y:0};r(e,function(e,r,s,c,l,u,d,f,p){switch(e){case`L`:i(r,s,c,l);break;case`Q`:for(var m=r,h=s,g=1;g<a;g++)t(r,s,u,d,c,l,g/(a-1),o),i(m,h,o.x,o.y),m=o.x,h=o.y;break;case`C`:for(var _=r,v=s,y=1;y<a;y++)n(r,s,u,d,f,p,c,l,y/(a-1),o),i(_,v,o.x,o.y),_=o.x,v=o.y;break}})}var a=`precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}`,o=`precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}`,s=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function l(e,t){var n=e.getContext?e.getContext(`webgl`,c):e,r=s.get(n);if(!r){var i=typeof WebGL2RenderingContext<`u`&&n instanceof WebGL2RenderingContext,a={},o={},l={},u=-1,d=[];n.canvas.addEventListener(`webglcontextlost`,function(e){m(),e.preventDefault()},!1);function e(e){var t=a[e];if(!t&&(t=a[e]=n.getExtension(e),!t))throw Error(e+` not supported`);return t}function t(e,t){var r=n.createShader(t);return n.shaderSource(r,e),n.compileShader(r),r}function c(r,a,s,c){if(!o[r]){var l={},u={},d=n.createProgram();n.attachShader(d,t(a,n.VERTEX_SHADER)),n.attachShader(d,t(s,n.FRAGMENT_SHADER)),n.linkProgram(d),o[r]={program:d,transaction:function(t){n.useProgram(d),t({setUniform:function(e,t){for(var r=[],i=arguments.length-2;i-- >0;)r[i]=arguments[i+2];var a=u[t]||(u[t]=n.getUniformLocation(d,t));n[`uniform`+e].apply(n,[a].concat(r))},setAttribute:function(t,r,a,o,s){var c=l[t];c||=l[t]={buf:n.createBuffer(),loc:n.getAttribLocation(d,t),data:null},n.bindBuffer(n.ARRAY_BUFFER,c.buf),n.vertexAttribPointer(c.loc,r,n.FLOAT,!1,0,0),n.enableVertexAttribArray(c.loc),i?n.vertexAttribDivisor(c.loc,o):e(`ANGLE_instanced_arrays`).vertexAttribDivisorANGLE(c.loc,o),s!==c.data&&(n.bufferData(n.ARRAY_BUFFER,s,a),c.data=s)}})}}}o[r].transaction(c)}function f(e,t){u++;try{n.activeTexture(n.TEXTURE0+u);var r=l[e];r||(r=l[e]=n.createTexture(),n.bindTexture(n.TEXTURE_2D,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST)),n.bindTexture(n.TEXTURE_2D,r),t(r,u)}finally{u--}}function p(e,t,r){var i=n.createFramebuffer();d.push(i),n.bindFramebuffer(n.FRAMEBUFFER,i),n.activeTexture(n.TEXTURE0+t),n.bindTexture(n.TEXTURE_2D,e),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);try{r(i)}finally{n.deleteFramebuffer(i),n.bindFramebuffer(n.FRAMEBUFFER,d[--d.length-1]||null)}}function m(){a={},o={},l={},u=-1,d.length=0}s.set(n,r={gl:n,isWebGL2:i,getExtension:e,withProgram:c,withTexture:f,withTextureFramebuffer:p,handleContextLoss:m})}t(r)}function u(e,t,n,r,i,s,c,u){c===void 0&&(c=15),u===void 0&&(u=null),l(e,function(e){var l=e.gl,d=e.withProgram,f=e.withTexture;f(`copy`,function(e,f){l.texImage2D(l.TEXTURE_2D,0,l.RGBA,i,s,0,l.RGBA,l.UNSIGNED_BYTE,t),d(`copy`,a,o,function(e){var t=e.setUniform,a=e.setAttribute;a(`aUV`,2,l.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),t(`1i`,`image`,f),l.bindFramebuffer(l.FRAMEBUFFER,u||null),l.disable(l.BLEND),l.colorMask(c&8,c&4,c&2,c&1),l.viewport(n,r,i,s),l.scissor(n,r,i,s),l.drawArrays(l.TRIANGLES,0,3)})})})}function d(e,t,n){var r=e.width,i=e.height;l(e,function(a){var o=a.gl,s=new Uint8Array(r*i*4);o.readPixels(0,0,r,i,o.RGBA,o.UNSIGNED_BYTE,s),e.width=t,e.height=n,u(o,s,0,0,r,i)})}var f=Object.freeze({__proto__:null,withWebGLContext:l,renderImageData:u,resizeWebGLCanvasWithoutClearing:d});function p(e,t,n,r,a,o){o===void 0&&(o=1);var s=new Uint8Array(e*t),c=r[2]-r[0],l=r[3]-r[1],u=[];i(n,function(e,t,n,r){u.push({x1:e,y1:t,x2:n,y2:r,minX:Math.min(e,n),minY:Math.min(t,r),maxX:Math.max(e,n),maxY:Math.max(t,r)})}),u.sort(function(e,t){return e.maxX-t.maxX});for(var d=0;d<e;d++)for(var f=0;f<t;f++){var p=h(r[0]+c*(d+.5)/e,r[1]+l*(f+.5)/t),m=(1-Math.abs(p)/a)**o/2;p<0&&(m=1-m),m=Math.max(0,Math.min(255,Math.round(m*255))),s[f*e+d]=m}return s;function h(e,t){for(var n=1/0,r=1/0,i=u.length;i--;){var a=u[i];if(a.maxX+r<=e)break;if(e+r>a.minX&&t-r<a.maxY&&t+r>a.minY){var o=g(e,t,a.x1,a.y1,a.x2,a.y2);o<n&&(n=o,r=Math.sqrt(n))}}return _(e,t)&&(r=-r),r}function _(e,t){for(var n=0,r=u.length;r--;){var i=u[r];if(i.maxX<=e)break;i.y1>t!=i.y2>t&&e<(i.x2-i.x1)*(t-i.y1)/(i.y2-i.y1)+i.x1&&(n+=i.y1<i.y2?1:-1)}return n!==0}}function m(e,t,n,r,i,a,o,s,c,l){a===void 0&&(a=1),s===void 0&&(s=0),c===void 0&&(c=0),l===void 0&&(l=0),h(e,t,n,r,i,a,o,null,s,c,l)}function h(e,t,n,r,i,a,o,s,c,l,d){a===void 0&&(a=1),c===void 0&&(c=0),l===void 0&&(l=0),d===void 0&&(d=0);for(var f=p(e,t,n,r,i,a),m=new Uint8Array(f.length*4),h=0;h<f.length;h++)m[h*4+d]=f[h];u(o,m,c,l,e,t,1<<3-d,s)}function g(e,t,n,r,i,a){var o=i-n,s=a-r,c=o*o+s*s,l=c?Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/c)):0,u=e-(n+l*o),d=t-(r+l*s);return u*u+d*d}var _=Object.freeze({__proto__:null,generate:p,generateIntoCanvas:m,generateIntoFramebuffer:h}),v=`precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}`,y=`precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}`,b=`precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}`,x=new Float32Array([0,0,2,0,0,2]),S=null,C=!1,w={},T=new WeakMap;function E(e){if(!C&&!A(e))throw Error(`WebGL generation not supported`)}function D(e,t,n,r,i,a,o){if(a===void 0&&(a=1),o===void 0&&(o=null),!o&&(o=S,!o)){var s=typeof OffscreenCanvas==`function`?new OffscreenCanvas(1,1):typeof document<`u`?document.createElement(`canvas`):null;if(!s)throw Error(`OffscreenCanvas or DOM canvas not supported`);o=S=s.getContext(`webgl`,{depth:!1})}E(o);var c=new Uint8Array(e*t*4);l(o,function(o){var s=o.gl,l=o.withTexture,u=o.withTextureFramebuffer;l(`readable`,function(o,l){s.texImage2D(s.TEXTURE_2D,0,s.RGBA,e,t,0,s.RGBA,s.UNSIGNED_BYTE,null),u(o,l,function(o){k(e,t,n,r,i,a,s,o,0,0,0),s.readPixels(0,0,e,t,s.RGBA,s.UNSIGNED_BYTE,c)})})});for(var u=new Uint8Array(e*t),d=0,f=0;d<c.length;d+=4)u[f++]=c[d];return u}function O(e,t,n,r,i,a,o,s,c,l){a===void 0&&(a=1),s===void 0&&(s=0),c===void 0&&(c=0),l===void 0&&(l=0),k(e,t,n,r,i,a,o,null,s,c,l)}function k(e,t,n,r,o,s,c,u,d,f,p){s===void 0&&(s=1),d===void 0&&(d=0),f===void 0&&(f=0),p===void 0&&(p=0),E(c);var m=[];i(n,function(e,t,n,r){m.push(e,t,n,r)}),m=new Float32Array(m),l(c,function(n){var i=n.gl,c=n.isWebGL2,l=n.getExtension,h=n.withProgram,g=n.withTexture,_=n.withTextureFramebuffer,S=n.handleContextLoss;if(g(`rawDistances`,function(n,g){(e!==n._lastWidth||t!==n._lastHeight)&&i.texImage2D(i.TEXTURE_2D,0,i.RGBA,n._lastWidth=e,n._lastHeight=t,0,i.RGBA,i.UNSIGNED_BYTE,null),h(`main`,v,y,function(a){var u=a.setAttribute,d=a.setUniform,f=!c&&l(`ANGLE_instanced_arrays`),p=!c&&l(`EXT_blend_minmax`);u(`aUV`,2,i.STATIC_DRAW,0,x),u(`aLineSegment`,4,i.DYNAMIC_DRAW,1,m),d.apply(void 0,[`4f`,`uGlyphBounds`].concat(r)),d(`1f`,`uMaxDistance`,o),d(`1f`,`uExponent`,s),_(n,g,function(n){i.enable(i.BLEND),i.colorMask(!0,!0,!0,!0),i.viewport(0,0,e,t),i.scissor(0,0,e,t),i.blendFunc(i.ONE,i.ONE),i.blendEquationSeparate(i.FUNC_ADD,c?i.MAX:p.MAX_EXT),i.clear(i.COLOR_BUFFER_BIT),c?i.drawArraysInstanced(i.TRIANGLES,0,3,m.length/4):f.drawArraysInstancedANGLE(i.TRIANGLES,0,3,m.length/4)})}),h(`post`,a,b,function(n){n.setAttribute(`aUV`,2,i.STATIC_DRAW,0,x),n.setUniform(`1i`,`tex`,g),i.bindFramebuffer(i.FRAMEBUFFER,u),i.disable(i.BLEND),i.colorMask(p===0,p===1,p===2,p===3),i.viewport(d,f,e,t),i.scissor(d,f,e,t),i.drawArrays(i.TRIANGLES,0,3)})}),i.isContextLost())throw S(),Error(`webgl context lost`)})}function A(e){var t=!e||e===S?w:e.canvas||e,n=T.get(t);if(n===void 0){C=!0;var r=null;try{var i=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],a=D(4,4,`M8,8L16,8L24,24L16,24Z`,[0,0,32,32],24,1,e);n=a&&i.length===a.length&&a.every(function(e,t){return e===i[t]}),n||(r=`bad trial run results`,console.info(i,a))}catch(e){n=!1,r=e.message}r&&console.warn(`WebGL SDF generation not supported:`,r),C=!1,T.set(t,n)}return n}var j=Object.freeze({__proto__:null,generate:D,generateIntoCanvas:O,generateIntoFramebuffer:k,isSupported:A});function ee(e,t,n,r,i,a){i===void 0&&(i=Math.max(r[2]-r[0],r[3]-r[1])/2),a===void 0&&(a=1);try{return D.apply(j,arguments)}catch(e){return console.info(`WebGL SDF generation failed, falling back to JS`,e),p.apply(_,arguments)}}function M(e,t,n,r,i,a,o,s,c,l){i===void 0&&(i=Math.max(r[2]-r[0],r[3]-r[1])/2),a===void 0&&(a=1),s===void 0&&(s=0),c===void 0&&(c=0),l===void 0&&(l=0);try{return O.apply(j,arguments)}catch(e){return console.info(`WebGL SDF generation failed, falling back to JS`,e),m.apply(_,arguments)}}return e.forEachPathCommand=r,e.generate=ee,e.generateIntoCanvas=M,e.javascript=_,e.pathToLineSegments=i,e.webgl=j,e.webglUtils=f,Object.defineProperty(e,`__esModule`,{value:!0}),e}({})}function ld(){return function(e){var t={R:`13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73`,EN:`1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9`,ES:`17,2,6dp+1,f+1,av,16vr,mx+1,4o,2`,ET:`z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj`,AN:`16o+5,2j+9,2+1,35,ed,1ff2+9,87+u`,CS:`18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b`,B:`a,3,f+2,2v,690`,S:`9,2,k`,WS:`c,k,4f4,1vk+a,u,1j,335`,ON:`x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i`,BN:`0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1`,NSM:`lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n`,AL:`16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d`,LRO:`6ct`,RLO:`6cu`,LRE:`6cq`,RLE:`6cr`,PDF:`6cs`,LRI:`6ee`,RLI:`6ef`,FSI:`6eg`,PDI:`6eh`},n={},r={};n.L=1,r[1]=`L`,Object.keys(t).forEach(function(e,t){n[e]=1<<t+1,r[n[e]]=e}),Object.freeze(n);var i=n.LRI|n.RLI|n.FSI,a=n.L|n.R|n.AL,o=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,s=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|i|n.PDI|s,l=null;function u(){if(!l){l=new Map;var e=function(e){if(t.hasOwnProperty(e)){var r=0;t[e].split(`,`).forEach(function(t){var i=t.split(`+`),a=i[0],o=i[1];a=parseInt(a,36),o=o?parseInt(o,36):0,l.set(r+=a,n[e]);for(var s=0;s<o;s++)l.set(++r,n[e])})}};for(var r in t)e(r)}}function d(e){return u(),l.get(e.codePointAt(0))||n.L}function f(e){return r[d(e)]}var p={pairs:`14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1`,canonical:`6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye`};function m(e,t){var n=36,r=0,i=new Map,a=t&&new Map,o;return e.split(`,`).forEach(function e(s){if(s.indexOf(`+`)!==-1)for(var c=+s;c--;)e(o);else{o=s;var l=s.split(`>`),u=l[0],d=l[1];u=String.fromCodePoint(r+=parseInt(u,n)),d=String.fromCodePoint(r+=parseInt(d,n)),i.set(u,d),t&&a.set(d,u)}}),{map:i,reverseMap:a}}var h,g,_;function v(){if(!h){var e=m(p.pairs,!0),t=e.map,n=e.reverseMap;h=t,g=n,_=m(p.canonical,!1).map}}function y(e){return v(),h.get(e)||null}function b(e){return v(),g.get(e)||null}function x(e){return v(),_.get(e)||null}var S=n.L,C=n.R,w=n.EN,T=n.ES,E=n.ET,D=n.AN,O=n.CS,k=n.B,A=n.S,j=n.ON,ee=n.BN,M=n.NSM,N=n.AL,te=n.LRO,P=n.RLO,ne=n.LRE,re=n.RLE,F=n.PDF,ie=n.LRI,ae=n.RLI,oe=n.FSI,I=n.PDI;function se(e,t){for(var n=125,r=new Uint32Array(e.length),l=0;l<e.length;l++)r[l]=d(e[l]);var u=new Map;function f(e,t){var n=r[e];r[e]=t,u.set(n,u.get(n)-1),n&o&&u.set(o,u.get(o)-1),u.set(t,(u.get(t)||0)+1),t&o&&u.set(o,(u.get(o)||0)+1)}for(var p=new Uint8Array(e.length),m=new Map,h=[],g=null,_=0;_<e.length;_++)g||h.push(g={start:_,end:e.length-1,level:t===`rtl`?1:t===`ltr`?0:qt(_,!1)}),r[_]&k&&(g.end=_,g=null);for(var v=re|ne|P|te|i|I|F|k,se=function(e){return e+(e&1?1:2)},L=function(e){return e+(e&1?2:1)},R=0;R<h.length;R++){g=h[R];var z=[{_level:g.level,_override:0,_isolate:0}],B=void 0,V=0,ce=0,le=0;u.clear();for(var ue=g.start;ue<=g.end;ue++){var de=r[ue];if(B=z[z.length-1],u.set(de,(u.get(de)||0)+1),de&o&&u.set(o,(u.get(o)||0)+1),de&v)if(de&(re|ne)){p[ue]=B._level;var fe=(de===re?L:se)(B._level);fe<=n&&!V&&!ce?z.push({_level:fe,_override:0,_isolate:0}):V||ce++}else if(de&(P|te)){p[ue]=B._level;var H=(de===P?L:se)(B._level);H<=n&&!V&&!ce?z.push({_level:H,_override:de&P?C:S,_isolate:0}):V||ce++}else if(de&i){de&oe&&(de=qt(ue+1,!0)===1?ae:ie),p[ue]=B._level,B._override&&f(ue,B._override);var pe=(de===ae?L:se)(B._level);pe<=n&&V===0&&ce===0?(le++,z.push({_level:pe,_override:0,_isolate:1,_isolInitIndex:ue})):V++}else if(de&I){if(V>0)V--;else if(le>0){for(ce=0;!z[z.length-1]._isolate;)z.pop();var U=z[z.length-1]._isolInitIndex;U!=null&&(m.set(U,ue),m.set(ue,U)),z.pop(),le--}B=z[z.length-1],p[ue]=B._level,B._override&&f(ue,B._override)}else de&F?(V===0&&(ce>0?ce--:!B._isolate&&z.length>1&&(z.pop(),B=z[z.length-1])),p[ue]=B._level):de&k&&(p[ue]=g.level);else p[ue]=B._level,B._override&&de!==ee&&f(ue,B._override)}for(var me=[],W=null,he=g.start;he<=g.end;he++){var G=r[he];if(!(G&s)){var K=p[he],ge=G&i,_e=G===I;W&&K===W._level?(W._end=he,W._endsWithIsolInit=ge):me.push(W={_start:he,_end:he,_level:K,_startsWithPDI:_e,_endsWithIsolInit:ge})}}for(var ve=[],ye=0;ye<me.length;ye++){var be=me[ye];if(!be._startsWithPDI||be._startsWithPDI&&!m.has(be._start)){for(var xe=[W=be],Se=void 0;W&&W._endsWithIsolInit&&(Se=m.get(W._end))!=null;)for(var Ce=ye+1;Ce<me.length;Ce++)if(me[Ce]._start===Se){xe.push(W=me[Ce]);break}for(var we=[],Te=0;Te<xe.length;Te++)for(var Ee=xe[Te],De=Ee._start;De<=Ee._end;De++)we.push(De);for(var Oe=p[we[0]],ke=g.level,Ae=we[0]-1;Ae>=0;Ae--)if(!(r[Ae]&s)){ke=p[Ae];break}var je=we[we.length-1],Me=p[je],Ne=g.level;if(!(r[je]&i)){for(var Pe=je+1;Pe<=g.end;Pe++)if(!(r[Pe]&s)){Ne=p[Pe];break}}ve.push({_seqIndices:we,_sosType:Math.max(ke,Oe)%2?C:S,_eosType:Math.max(Ne,Me)%2?C:S})}}for(var Fe=0;Fe<ve.length;Fe++){var Ie=ve[Fe],q=Ie._seqIndices,Le=Ie._sosType,Re=Ie._eosType,ze=p[q[0]]&1?C:S;if(u.get(M))for(var Be=0;Be<q.length;Be++){var Ve=q[Be];if(r[Ve]&M){for(var He=Le,Ue=Be-1;Ue>=0;Ue--)if(!(r[q[Ue]]&s)){He=r[q[Ue]];break}f(Ve,He&(i|I)?j:He)}}if(u.get(w))for(var We=0;We<q.length;We++){var Ge=q[We];if(r[Ge]&w)for(var Ke=We-1;Ke>=-1;Ke--){var qe=Ke===-1?Le:r[q[Ke]];if(qe&a){qe===N&&f(Ge,D);break}}}if(u.get(N))for(var Je=0;Je<q.length;Je++){var Ye=q[Je];r[Ye]&N&&f(Ye,C)}if(u.get(T)||u.get(O))for(var Xe=1;Xe<q.length-1;Xe++){var Ze=q[Xe];if(r[Ze]&(T|O)){for(var Qe=0,$e=0,et=Xe-1;et>=0&&(Qe=r[q[et]],Qe&s);et--);for(var tt=Xe+1;tt<q.length&&($e=r[q[tt]],$e&s);tt++);Qe===$e&&(r[Ze]===T?Qe===w:Qe&(w|D))&&f(Ze,Qe)}}if(u.get(w)){for(var nt=0;nt<q.length;nt++)if(r[q[nt]]&w){for(var rt=nt-1;rt>=0&&r[q[rt]]&(E|s);rt--)f(q[rt],w);for(nt++;nt<q.length&&r[q[nt]]&(E|s|w);nt++)r[q[nt]]!==w&&f(q[nt],w)}}if(u.get(E)||u.get(T)||u.get(O))for(var it=0;it<q.length;it++){var at=q[it];if(r[at]&(E|T|O)){f(at,j);for(var ot=it-1;ot>=0&&r[q[ot]]&s;ot--)f(q[ot],j);for(var st=it+1;st<q.length&&r[q[st]]&s;st++)f(q[st],j)}}if(u.get(w))for(var ct=0,lt=Le;ct<q.length;ct++){var ut=q[ct],dt=r[ut];dt&w?lt===S&&f(ut,S):dt&a&&(lt=dt)}if(u.get(o)){for(var ft=C|w|D,pt=ft|S,mt=[],ht=[],gt=0;gt<q.length;gt++)if(r[q[gt]]&o){var _t=e[q[gt]],vt=void 0;if(y(_t)!==null)if(ht.length<63)ht.push({char:_t,seqIndex:gt});else break;else if((vt=b(_t))!==null)for(var yt=ht.length-1;yt>=0;yt--){var bt=ht[yt].char;if(bt===vt||bt===b(x(_t))||y(x(bt))===_t){mt.push([ht[yt].seqIndex,gt]),ht.length=yt;break}}}mt.sort(function(e,t){return e[0]-t[0]});for(var xt=0;xt<mt.length;xt++){for(var St=mt[xt],Ct=St[0],wt=St[1],Tt=!1,Et=0,Dt=Ct+1;Dt<wt;Dt++){var Ot=q[Dt];if(r[Ot]&pt){Tt=!0;var kt=r[Ot]&ft?C:S;if(kt===ze){Et=kt;break}}}if(Tt&&!Et){Et=Le;for(var At=Ct-1;At>=0;At--){var jt=q[At];if(r[jt]&pt){var Mt=r[jt]&ft?C:S;Et=Mt===ze?ze:Mt;break}}}if(Et){if(r[q[Ct]]=r[q[wt]]=Et,Et!==ze){for(var Nt=Ct+1;Nt<q.length;Nt++)if(!(r[q[Nt]]&s)){d(e[q[Nt]])&M&&(r[q[Nt]]=Et);break}}if(Et!==ze){for(var Pt=wt+1;Pt<q.length;Pt++)if(!(r[q[Pt]]&s)){d(e[q[Pt]])&M&&(r[q[Pt]]=Et);break}}}}for(var Ft=0;Ft<q.length;Ft++)if(r[q[Ft]]&o){for(var It=Ft,Lt=Ft,Rt=Le,zt=Ft-1;zt>=0;zt--)if(r[q[zt]]&s)It=zt;else{Rt=r[q[zt]]&ft?C:S;break}for(var Bt=Re,Vt=Ft+1;Vt<q.length;Vt++)if(r[q[Vt]]&(o|s))Lt=Vt;else{Bt=r[q[Vt]]&ft?C:S;break}for(var Ht=It;Ht<=Lt;Ht++)r[q[Ht]]=Rt===Bt?Rt:ze;Ft=Lt}}}for(var Ut=g.start;Ut<=g.end;Ut++){var Wt=p[Ut],Gt=r[Ut];if(Wt&1?Gt&(S|w|D)&&p[Ut]++:Gt&C?p[Ut]++:Gt&(D|w)&&(p[Ut]+=2),Gt&s&&(p[Ut]=Ut===0?g.level:p[Ut-1]),Ut===g.end||d(e[Ut])&(A|k))for(var Kt=Ut;Kt>=0&&d(e[Kt])&c;Kt--)p[Kt]=g.level}}return{levels:p,paragraphs:h};function qt(t,n){for(var a=t;a<e.length;a++){var o=r[a];if(o&(C|N))return 1;if(o&(k|S)||n&&o===I)return 0;if(o&i){var s=Jt(a);a=s===-1?e.length:s}}return 0}function Jt(t){for(var n=1,a=t+1;a<e.length;a++){var o=r[a];if(o&k)break;if(o&I){if(--n===0)return a}else o&i&&n++}return-1}}var L=`14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1`,R;function z(){if(!R){var e=m(L,!0),t=e.map;e.reverseMap.forEach(function(e,n){t.set(n,e)}),R=t}}function B(e){return z(),R.get(e)||null}function V(e,t,n,r){var i=e.length;n=Math.max(0,n==null?0:+n),r=Math.min(i-1,r==null?i-1:+r);for(var a=new Map,o=n;o<=r;o++)if(t[o]&1){var s=B(e[o]);s!==null&&a.set(o,s)}return a}function ce(e,t,n,r){var i=e.length;n=Math.max(0,n==null?0:+n),r=Math.min(i-1,r==null?i-1:+r);var a=[];return t.paragraphs.forEach(function(i){var o=Math.max(n,i.start),s=Math.min(r,i.end);if(o<s){for(var l=t.levels.slice(o,s+1),u=s;u>=o&&d(e[u])&c;u--)l[u]=i.level;for(var f=i.level,p=1/0,m=0;m<l.length;m++){var h=l[m];h>f&&(f=h),h<p&&(p=h|1)}for(var g=f;g>=p;g--)for(var _=0;_<l.length;_++)if(l[_]>=g){for(var v=_;_+1<l.length&&l[_+1]>=g;)_++;_>v&&a.push([v+o,_+o])}}}),a}function le(e,t,n,r){var i=ue(e,t,n,r),a=[].concat(e);return i.forEach(function(n,r){a[r]=(t.levels[n]&1?B(e[n]):null)||e[n]}),a.join(``)}function ue(e,t,n,r){for(var i=ce(e,t,n,r),a=[],o=0;o<e.length;o++)a[o]=o;return i.forEach(function(e){for(var t=e[0],n=e[1],r=a.slice(t,n+1),i=r.length;i--;)a[n-i]=r[i]}),a}return e.closingToOpeningBracket=b,e.getBidiCharType=d,e.getBidiCharTypeName=f,e.getCanonicalBracket=x,e.getEmbeddingLevels=se,e.getMirroredCharacter=B,e.getMirroredCharactersMap=V,e.getReorderSegments=ce,e.getReorderedIndices=ue,e.getReorderedString=le,e.openingToClosingBracket=y,Object.defineProperty(e,`__esModule`,{value:!0}),e}({})}var ud=/\bvoid\s+main\s*\(\s*\)\s*{/g;function dd(e){let t=/^[ \t]*#include +<([\w\d./]+)>/gm;function n(e,t){let n=Q[t];return n?dd(n):e}return e.replace(t,n)}var fd=[];for(let e=0;e<256;e++)fd[e]=(e<16?`0`:``)+e.toString(16);function pd(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fd[e&255]+fd[e>>8&255]+fd[e>>16&255]+fd[e>>24&255]+`-`+fd[t&255]+fd[t>>8&255]+`-`+fd[t>>16&15|64]+fd[t>>24&255]+`-`+fd[n&63|128]+fd[n>>8&255]+`-`+fd[n>>16&255]+fd[n>>24&255]+fd[r&255]+fd[r>>8&255]+fd[r>>16&255]+fd[r>>24&255]).toUpperCase()}var md=Object.assign||function(){let e=arguments[0];for(let t=1,n=arguments.length;t<n;t++){let n=arguments[t];if(n)for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},hd=Date.now(),gd=new WeakMap,_d=new Map,vd=1e10;function yd(e,t){let n=Td(t),r=gd.get(e);if(r||gd.set(e,r=Object.create(null)),r[n])return new r[n];let i=`_onBeforeCompile${n}`,a=function(r,a){e.onBeforeCompile.call(this,r,a);let o=this.customProgramCacheKey()+`|`+r.vertexShader+`|`+r.fragmentShader,s=_d[o];s||=_d[o]=bd(this,r,t,n),r.vertexShader=s.vertexShader,r.fragmentShader=s.fragmentShader,md(r.uniforms,this.uniforms),t.timeUniform&&(r.uniforms[t.timeUniform]={get value(){return Date.now()-hd}}),this[i]&&this[i](r)},o=function(){return s(t.chained?e:e.clone())},s=function(r){let i=Object.create(r,c);return Object.defineProperty(i,`baseMaterial`,{value:e}),Object.defineProperty(i,`id`,{value:vd++}),i.uuid=pd(),i.uniforms=md({},r.uniforms,t.uniforms),i.defines=md({},r.defines,t.defines),i.defines[`TROIKA_DERIVED_MATERIAL_${n}`]=``,i.extensions=md({},r.extensions,t.extensions),i._listeners=void 0,i},c={constructor:{value:o},isDerivedMaterial:{value:!0},type:{get:()=>e.type,set:t=>{e.type=t}},isDerivedFrom:{writable:!0,configurable:!0,value:function(e){let t=this.baseMaterial;return e===t||t.isDerivedMaterial&&t.isDerivedFrom(e)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return e.customProgramCacheKey()+`|`+n}},onBeforeCompile:{get(){return a},set(e){this[i]=e}},copy:{writable:!0,configurable:!0,value:function(t){return e.copy.call(this,t),!e.isShaderMaterial&&!e.isDerivedMaterial&&(md(this.extensions,t.extensions),md(this.defines,t.defines),md(this.uniforms,ho.clone(t.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){return s(new e.constructor).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let n=this._depthMaterial;return n||(n=this._depthMaterial=yd(e.isDerivedMaterial?e.getDepthMaterial():new bo({depthPacking:Nn}),t),n.defines.IS_DEPTH_MATERIAL=``,n.uniforms=this.uniforms),n}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let n=this._distanceMaterial;return n||(n=this._distanceMaterial=yd(e.isDerivedMaterial?e.getDistanceMaterial():new xo,t),n.defines.IS_DISTANCE_MATERIAL=``,n.uniforms=this.uniforms),n}},dispose:{writable:!0,configurable:!0,value(){let{_depthMaterial:t,_distanceMaterial:n}=this;t&&t.dispose(),n&&n.dispose(),e.dispose.call(this)}}};return r[n]=o,new o}function bd(e,{vertexShader:t,fragmentShader:n},r,i){let{vertexDefs:a,vertexMainIntro:o,vertexMainOutro:s,vertexTransform:c,fragmentDefs:l,fragmentMainIntro:u,fragmentMainOutro:d,fragmentColorTransform:f,customRewriter:p,timeUniform:m}=r;if(a||=``,o||=``,s||=``,l||=``,u||=``,d||=``,(c||p)&&(t=dd(t)),(f||p)&&(n=n.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),n=dd(n)),p){let e=p({vertexShader:t,fragmentShader:n});t=e.vertexShader,n=e.fragmentShader}if(f){let e=[];n=n.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,t=>(e.push(t),``)),d=`${f}\n${e.join(`
`)}\n${d}`}if(m){let e=`\nuniform float ${m};\n`;a=e+a,l=e+l}return c&&(t=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${t}
`,a=`${a}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${c}
}
`,o=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${o}
`,t=t.replace(/\b(position|normal|uv)\b/g,(e,t,n,r)=>/\battribute\s+vec[23]\s+$/.test(r.substr(0,n))?t:`troika_${t}_${i}`),e.map&&e.map.channel>0||(t=t.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),t=xd(t,i,a,o,s),n=xd(n,i,l,u,d),{vertexShader:t,fragmentShader:n}}function xd(e,t,n,r,i){return(r||i||n)&&(e=e.replace(ud,`
${n}
void troikaOrigMain${t}() {`),e+=`
void main() {
  ${r}
  troikaOrigMain${t}();
  ${i}
}`),e}function Sd(e,t){return e===`uniforms`?void 0:typeof t==`function`?t.toString():t}var Cd=0,wd=new Map;function Td(e){let t=JSON.stringify(e,Sd),n=wd.get(t);return n??wd.set(t,n=++Cd),n}function Ed(){return typeof window>`u`&&(self.window=self),function(e){var t={parse:function(e){var n=t._bin,r=new Uint8Array(e);if(n.readASCII(r,0,4)==`ttcf`){var i=4;n.readUshort(r,i),i+=2,n.readUshort(r,i),i+=2;var a=n.readUint(r,i);i+=4;for(var o=[],s=0;s<a;s++){var c=n.readUint(r,i);i+=4,o.push(t._readFont(r,c))}return o}return[t._readFont(r,0)]},_readFont:function(e,n){var r=t._bin,i=n;r.readFixed(e,n),n+=4;var a=r.readUshort(e,n);n+=2,r.readUshort(e,n),n+=2,r.readUshort(e,n),n+=2,r.readUshort(e,n),n+=2;for(var o=[`cmap`,`head`,`hhea`,`maxp`,`hmtx`,`name`,`OS/2`,`post`,`loca`,`glyf`,`kern`,`CFF `,`GDEF`,`GPOS`,`GSUB`,`SVG `],s={_data:e,_offset:i},c={},l=0;l<a;l++){var u=r.readASCII(e,n,4);n+=4,r.readUint(e,n),n+=4;var d=r.readUint(e,n);n+=4;var f=r.readUint(e,n);n+=4,c[u]={offset:d,length:f}}for(l=0;l<o.length;l++){var p=o[l];c[p]&&(s[p.trim()]=t[p.trim()].parse(e,c[p].offset,c[p].length,s))}return s},_tabOffset:function(e,n,r){for(var i=t._bin,a=i.readUshort(e,r+4),o=r+12,s=0;s<a;s++){var c=i.readASCII(e,o,4);o+=4,i.readUint(e,o),o+=4;var l=i.readUint(e,o);if(o+=4,i.readUint(e,o),o+=4,c==n)return l}return 0}};t._bin={readFixed:function(e,t){return(e[t]<<8|e[t+1])+(e[t+2]<<8|e[t+3])/65540},readF2dot14:function(e,n){return t._bin.readShort(e,n)/16384},readInt:function(e,n){return t._bin._view(e).getInt32(n)},readInt8:function(e,n){return t._bin._view(e).getInt8(n)},readShort:function(e,n){return t._bin._view(e).getInt16(n)},readUshort:function(e,n){return t._bin._view(e).getUint16(n)},readUshorts:function(e,n,r){for(var i=[],a=0;a<r;a++)i.push(t._bin.readUshort(e,n+2*a));return i},readUint:function(e,n){return t._bin._view(e).getUint32(n)},readUint64:function(e,n){return 4294967296*t._bin.readUint(e,n)+t._bin.readUint(e,n+4)},readASCII:function(e,t,n){for(var r=``,i=0;i<n;i++)r+=String.fromCharCode(e[t+i]);return r},readUnicode:function(e,t,n){for(var r=``,i=0;i<n;i++){var a=e[t++]<<8|e[t++];r+=String.fromCharCode(a)}return r},_tdec:typeof window<`u`&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(e,n,r){var i=t._bin._tdec;return i&&n==0&&r==e.length?i.decode(e):t._bin.readASCII(e,n,r)},readBytes:function(e,t,n){for(var r=[],i=0;i<n;i++)r.push(e[t+i]);return r},readASCIIArray:function(e,t,n){for(var r=[],i=0;i<n;i++)r.push(String.fromCharCode(e[t+i]));return r},_view:function(e){return e._dataView||=e.buffer?new DataView(e.buffer,e.byteOffset,e.byteLength):new DataView(new Uint8Array(e).buffer)}},t._lctf={},t._lctf.parse=function(e,n,r,i,a){var o=t._bin,s={},c=n;o.readFixed(e,n),n+=4;var l=o.readUshort(e,n);n+=2;var u=o.readUshort(e,n);n+=2;var d=o.readUshort(e,n);return n+=2,s.scriptList=t._lctf.readScriptList(e,c+l),s.featureList=t._lctf.readFeatureList(e,c+u),s.lookupList=t._lctf.readLookupList(e,c+d,a),s},t._lctf.readLookupList=function(e,n,r){var i=t._bin,a=n,o=[],s=i.readUshort(e,n);n+=2;for(var c=0;c<s;c++){var l=i.readUshort(e,n);n+=2;var u=t._lctf.readLookupTable(e,a+l,r);o.push(u)}return o},t._lctf.readLookupTable=function(e,n,r){var i=t._bin,a=n,o={tabs:[]};o.ltype=i.readUshort(e,n),n+=2,o.flag=i.readUshort(e,n),n+=2;var s=i.readUshort(e,n);n+=2;for(var c=o.ltype,l=0;l<s;l++){var u=i.readUshort(e,n);n+=2;var d=r(e,c,a+u,o);o.tabs.push(d)}return o},t._lctf.numOfOnes=function(e){for(var t=0,n=0;n<32;n++)e>>>n&1&&t++;return t},t._lctf.readClassDef=function(e,n){var r=t._bin,i=[],a=r.readUshort(e,n);if(n+=2,a==1){var o=r.readUshort(e,n);n+=2;var s=r.readUshort(e,n);n+=2;for(var c=0;c<s;c++)i.push(o+c),i.push(o+c),i.push(r.readUshort(e,n)),n+=2}if(a==2){var l=r.readUshort(e,n);for(n+=2,c=0;c<l;c++)i.push(r.readUshort(e,n)),n+=2,i.push(r.readUshort(e,n)),n+=2,i.push(r.readUshort(e,n)),n+=2}return i},t._lctf.getInterval=function(e,t){for(var n=0;n<e.length;n+=3){var r=e[n],i=e[n+1];if(e[n+2],r<=t&&t<=i)return n}return-1},t._lctf.readCoverage=function(e,n){var r=t._bin,i={};i.fmt=r.readUshort(e,n),n+=2;var a=r.readUshort(e,n);return n+=2,i.fmt==1&&(i.tab=r.readUshorts(e,n,a)),i.fmt==2&&(i.tab=r.readUshorts(e,n,3*a)),i},t._lctf.coverageIndex=function(e,n){var r=e.tab;if(e.fmt==1)return r.indexOf(n);if(e.fmt==2){var i=t._lctf.getInterval(r,n);if(i!=-1)return r[i+2]+(n-r[i])}return-1},t._lctf.readFeatureList=function(e,n){var r=t._bin,i=n,a=[],o=r.readUshort(e,n);n+=2;for(var s=0;s<o;s++){var c=r.readASCII(e,n,4);n+=4;var l=r.readUshort(e,n);n+=2;var u=t._lctf.readFeatureTable(e,i+l);u.tag=c.trim(),a.push(u)}return a},t._lctf.readFeatureTable=function(e,n){var r=t._bin,i=n,a={},o=r.readUshort(e,n);n+=2,o>0&&(a.featureParams=i+o);var s=r.readUshort(e,n);n+=2,a.tab=[];for(var c=0;c<s;c++)a.tab.push(r.readUshort(e,n+2*c));return a},t._lctf.readScriptList=function(e,n){var r=t._bin,i=n,a={},o=r.readUshort(e,n);n+=2;for(var s=0;s<o;s++){var c=r.readASCII(e,n,4);n+=4;var l=r.readUshort(e,n);n+=2,a[c.trim()]=t._lctf.readScriptTable(e,i+l)}return a},t._lctf.readScriptTable=function(e,n){var r=t._bin,i=n,a={},o=r.readUshort(e,n);n+=2,o>0&&(a.default=t._lctf.readLangSysTable(e,i+o));var s=r.readUshort(e,n);n+=2;for(var c=0;c<s;c++){var l=r.readASCII(e,n,4);n+=4;var u=r.readUshort(e,n);n+=2,a[l.trim()]=t._lctf.readLangSysTable(e,i+u)}return a},t._lctf.readLangSysTable=function(e,n){var r=t._bin,i={};r.readUshort(e,n),n+=2,i.reqFeature=r.readUshort(e,n),n+=2;var a=r.readUshort(e,n);return n+=2,i.features=r.readUshorts(e,n,a),i},t.CFF={},t.CFF.parse=function(e,n,r){var i=t._bin;(e=new Uint8Array(e.buffer,n,r))[n=0],e[++n],e[++n],e[++n],n++;var a=[];n=t.CFF.readIndex(e,n,a);for(var o=[],s=0;s<a.length-1;s++)o.push(i.readASCII(e,n+a[s],a[s+1]-a[s]));n+=a[a.length-1];var c=[];n=t.CFF.readIndex(e,n,c);var l=[];for(s=0;s<c.length-1;s++)l.push(t.CFF.readDict(e,n+c[s],n+c[s+1]));n+=c[c.length-1];var u=l[0],d=[];n=t.CFF.readIndex(e,n,d);var f=[];for(s=0;s<d.length-1;s++)f.push(i.readASCII(e,n+d[s],d[s+1]-d[s]));if(n+=d[d.length-1],t.CFF.readSubrs(e,n,u),u.CharStrings){n=u.CharStrings,d=[],n=t.CFF.readIndex(e,n,d);var p=[];for(s=0;s<d.length-1;s++)p.push(i.readBytes(e,n+d[s],d[s+1]-d[s]));u.CharStrings=p}if(u.ROS){n=u.FDArray;var m=[];for(n=t.CFF.readIndex(e,n,m),u.FDArray=[],s=0;s<m.length-1;s++){var h=t.CFF.readDict(e,n+m[s],n+m[s+1]);t.CFF._readFDict(e,h,f),u.FDArray.push(h)}n+=m[m.length-1],n=u.FDSelect,u.FDSelect=[];var g=e[n];if(n++,g!=3)throw g;var _=i.readUshort(e,n);for(n+=2,s=0;s<_+1;s++)u.FDSelect.push(i.readUshort(e,n),e[n+2]),n+=3}return u.Encoding&&=t.CFF.readEncoding(e,u.Encoding,u.CharStrings.length),u.charset&&=t.CFF.readCharset(e,u.charset,u.CharStrings.length),t.CFF._readFDict(e,u,f),u},t.CFF._readFDict=function(e,n,r){var i;for(var a in n.Private&&(i=n.Private[1],n.Private=t.CFF.readDict(e,i,i+n.Private[0]),n.Private.Subrs&&t.CFF.readSubrs(e,i+n.Private.Subrs,n.Private)),n)[`FamilyName`,`FontName`,`FullName`,`Notice`,`version`,`Copyright`].indexOf(a)!=-1&&(n[a]=r[n[a]-426+35])},t.CFF.readSubrs=function(e,n,r){var i=t._bin,a=[];n=t.CFF.readIndex(e,n,a);var o,s=a.length;o=s<1240?107:s<33900?1131:32768,r.Bias=o,r.Subrs=[];for(var c=0;c<a.length-1;c++)r.Subrs.push(i.readBytes(e,n+a[c],a[c+1]-a[c]))},t.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],t.CFF.glyphByUnicode=function(e,t){for(var n=0;n<e.charset.length;n++)if(e.charset[n]==t)return n;return-1},t.CFF.glyphBySE=function(e,n){return n<0||n>255?-1:t.CFF.glyphByUnicode(e,t.CFF.tableSE[n])},t.CFF.readEncoding=function(e,n,r){t._bin;var i=[`.notdef`],a=e[n];if(n++,a!=0)throw`error: unknown encoding format: `+a;var o=e[n];n++;for(var s=0;s<o;s++)i.push(e[n+s]);return i},t.CFF.readCharset=function(e,n,r){var i=t._bin,a=[`.notdef`],o=e[n];if(n++,o==0)for(var s=0;s<r;s++){var c=i.readUshort(e,n);n+=2,a.push(c)}else{if(o!=1&&o!=2)throw`error: format: `+o;for(;a.length<r;){c=i.readUshort(e,n),n+=2;var l=0;for(o==1?(l=e[n],n++):(l=i.readUshort(e,n),n+=2),s=0;s<=l;s++)a.push(c),c++}}return a},t.CFF.readIndex=function(e,n,r){var i=t._bin,a=i.readUshort(e,n)+1,o=e[n+=2];if(n++,o==1)for(var s=0;s<a;s++)r.push(e[n+s]);else if(o==2)for(s=0;s<a;s++)r.push(i.readUshort(e,n+2*s));else if(o==3)for(s=0;s<a;s++)r.push(16777215&i.readUint(e,n+3*s-1));else if(a!=1)throw`unsupported offset size: `+o+`, count: `+a;return(n+=a*o)-1},t.CFF.getCharString=function(e,n,r){var i=t._bin,a=e[n],o=e[n+1];e[n+2],e[n+3],e[n+4];var s=1,c=null,l=null;a<=20&&(c=a,s=1),a==12&&(c=100*a+o,s=2),21<=a&&a<=27&&(c=a,s=1),a==28&&(l=i.readShort(e,n+1),s=3),29<=a&&a<=31&&(c=a,s=1),32<=a&&a<=246&&(l=a-139,s=1),247<=a&&a<=250&&(l=256*(a-247)+o+108,s=2),251<=a&&a<=254&&(l=256*-(a-251)-o-108,s=2),a==255&&(l=i.readInt(e,n+1)/65535,s=5),r.val=l??`o`+c,r.size=s},t.CFF.readCharString=function(e,n,r){for(var i=n+r,a=t._bin,o=[];n<i;){var s=e[n],c=e[n+1];e[n+2],e[n+3],e[n+4];var l=1,u=null,d=null;s<=20&&(u=s,l=1),s==12&&(u=100*s+c,l=2),s!=19&&s!=20||(u=s,l=2),21<=s&&s<=27&&(u=s,l=1),s==28&&(d=a.readShort(e,n+1),l=3),29<=s&&s<=31&&(u=s,l=1),32<=s&&s<=246&&(d=s-139,l=1),247<=s&&s<=250&&(d=256*(s-247)+c+108,l=2),251<=s&&s<=254&&(d=256*-(s-251)-c-108,l=2),s==255&&(d=a.readInt(e,n+1)/65535,l=5),o.push(d??`o`+u),n+=l}return o},t.CFF.readDict=function(e,n,r){for(var i=t._bin,a={},o=[];n<r;){var s=e[n],c=e[n+1];e[n+2],e[n+3],e[n+4];var l=1,u=null,d=null;if(s==28&&(d=i.readShort(e,n+1),l=3),s==29&&(d=i.readInt(e,n+1),l=5),32<=s&&s<=246&&(d=s-139,l=1),247<=s&&s<=250&&(d=256*(s-247)+c+108,l=2),251<=s&&s<=254&&(d=256*-(s-251)-c-108,l=2),s==255)throw d=i.readInt(e,n+1)/65535,l=5,`unknown number`;if(s==30){var f=[];for(l=1;;){var p=e[n+l];l++;var m=p>>4,h=15&p;if(m!=15&&f.push(m),h!=15&&f.push(h),h==15)break}for(var g=``,_=[0,1,2,3,4,5,6,7,8,9,`.`,`e`,`e-`,`reserved`,`-`,`endOfNumber`],v=0;v<f.length;v++)g+=_[f[v]];d=parseFloat(g)}s<=21&&(u=[`version`,`Notice`,`FullName`,`FamilyName`,`Weight`,`FontBBox`,`BlueValues`,`OtherBlues`,`FamilyBlues`,`FamilyOtherBlues`,`StdHW`,`StdVW`,`escape`,`UniqueID`,`XUID`,`charset`,`Encoding`,`CharStrings`,`Private`,`Subrs`,`defaultWidthX`,`nominalWidthX`][s],l=1,s==12&&(u=[`Copyright`,`isFixedPitch`,`ItalicAngle`,`UnderlinePosition`,`UnderlineThickness`,`PaintType`,`CharstringType`,`FontMatrix`,`StrokeWidth`,`BlueScale`,`BlueShift`,`BlueFuzz`,`StemSnapH`,`StemSnapV`,`ForceBold`,0,0,`LanguageGroup`,`ExpansionFactor`,`initialRandomSeed`,`SyntheticBase`,`PostScript`,`BaseFontName`,`BaseFontBlend`,0,0,0,0,0,0,`ROS`,`CIDFontVersion`,`CIDFontRevision`,`CIDFontType`,`CIDCount`,`UIDBase`,`FDArray`,`FDSelect`,`FontName`][c],l=2)),u==null?o.push(d):(a[u]=o.length==1?o[0]:o,o=[]),n+=l}return a},t.cmap={},t.cmap.parse=function(e,n,r){e=new Uint8Array(e.buffer,n,r),n=0;var i=t._bin,a={};i.readUshort(e,n),n+=2;var o=i.readUshort(e,n);n+=2;var s=[];a.tables=[];for(var c=0;c<o;c++){var l=i.readUshort(e,n);n+=2;var u=i.readUshort(e,n);n+=2;var d=i.readUint(e,n);n+=4;var f=`p`+l+`e`+u,p=s.indexOf(d);if(p==-1){var m;p=a.tables.length,s.push(d);var h=i.readUshort(e,d);h==0?m=t.cmap.parse0(e,d):h==4?m=t.cmap.parse4(e,d):h==6?m=t.cmap.parse6(e,d):h==12?m=t.cmap.parse12(e,d):console.debug(`unknown format: `+h,l,u,d),a.tables.push(m)}if(a[f]!=null)throw`multiple tables for one platform+encoding`;a[f]=p}return a},t.cmap.parse0=function(e,n){var r=t._bin,i={};i.format=r.readUshort(e,n),n+=2;var a=r.readUshort(e,n);n+=2,r.readUshort(e,n),n+=2,i.map=[];for(var o=0;o<a-6;o++)i.map.push(e[n+o]);return i},t.cmap.parse4=function(e,n){var r=t._bin,i=n,a={};a.format=r.readUshort(e,n),n+=2;var o=r.readUshort(e,n);n+=2,r.readUshort(e,n),n+=2;var s=r.readUshort(e,n);n+=2;var c=s/2;a.searchRange=r.readUshort(e,n),n+=2,a.entrySelector=r.readUshort(e,n),n+=2,a.rangeShift=r.readUshort(e,n),n+=2,a.endCount=r.readUshorts(e,n,c),n+=2*c,n+=2,a.startCount=r.readUshorts(e,n,c),n+=2*c,a.idDelta=[];for(var l=0;l<c;l++)a.idDelta.push(r.readShort(e,n)),n+=2;for(a.idRangeOffset=r.readUshorts(e,n,c),n+=2*c,a.glyphIdArray=[];n<i+o;)a.glyphIdArray.push(r.readUshort(e,n)),n+=2;return a},t.cmap.parse6=function(e,n){var r=t._bin,i={};i.format=r.readUshort(e,n),n+=2,r.readUshort(e,n),n+=2,r.readUshort(e,n),n+=2,i.firstCode=r.readUshort(e,n),n+=2;var a=r.readUshort(e,n);n+=2,i.glyphIdArray=[];for(var o=0;o<a;o++)i.glyphIdArray.push(r.readUshort(e,n)),n+=2;return i},t.cmap.parse12=function(e,n){var r=t._bin,i={};i.format=r.readUshort(e,n),n+=2,n+=2,r.readUint(e,n),n+=4,r.readUint(e,n),n+=4;var a=r.readUint(e,n);n+=4,i.groups=[];for(var o=0;o<a;o++){var s=n+12*o,c=r.readUint(e,s+0),l=r.readUint(e,s+4),u=r.readUint(e,s+8);i.groups.push([c,l,u])}return i},t.glyf={},t.glyf.parse=function(e,t,n,r){for(var i=[],a=0;a<r.maxp.numGlyphs;a++)i.push(null);return i},t.glyf._parseGlyf=function(e,n){var r=t._bin,i=e._data,a=t._tabOffset(i,`glyf`,e._offset)+e.loca[n];if(e.loca[n]==e.loca[n+1])return null;var o={};if(o.noc=r.readShort(i,a),a+=2,o.xMin=r.readShort(i,a),a+=2,o.yMin=r.readShort(i,a),a+=2,o.xMax=r.readShort(i,a),a+=2,o.yMax=r.readShort(i,a),a+=2,o.xMin>=o.xMax||o.yMin>=o.yMax)return null;if(o.noc>0){o.endPts=[];for(var s=0;s<o.noc;s++)o.endPts.push(r.readUshort(i,a)),a+=2;var c=r.readUshort(i,a);if(a+=2,i.length-a<c)return null;o.instructions=r.readBytes(i,a,c),a+=c;var l=o.endPts[o.noc-1]+1;for(o.flags=[],s=0;s<l;s++){var u=i[a];if(a++,o.flags.push(u),8&u){var d=i[a];a++;for(var f=0;f<d;f++)o.flags.push(u),s++}}for(o.xs=[],s=0;s<l;s++){var p=(2&o.flags[s])!=0,m=(16&o.flags[s])!=0;p?(o.xs.push(m?i[a]:-i[a]),a++):m?o.xs.push(0):(o.xs.push(r.readShort(i,a)),a+=2)}for(o.ys=[],s=0;s<l;s++)p=(4&o.flags[s])!=0,m=(32&o.flags[s])!=0,p?(o.ys.push(m?i[a]:-i[a]),a++):m?o.ys.push(0):(o.ys.push(r.readShort(i,a)),a+=2);var h=0,g=0;for(s=0;s<l;s++)h+=o.xs[s],g+=o.ys[s],o.xs[s]=h,o.ys[s]=g}else{var _;o.parts=[];do{_=r.readUshort(i,a),a+=2;var v={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(o.parts.push(v),v.glyphIndex=r.readUshort(i,a),a+=2,1&_){var y=r.readShort(i,a);a+=2;var b=r.readShort(i,a);a+=2}else y=r.readInt8(i,a),a++,b=r.readInt8(i,a),a++;2&_?(v.m.tx=y,v.m.ty=b):(v.p1=y,v.p2=b),8&_?(v.m.a=v.m.d=r.readF2dot14(i,a),a+=2):64&_?(v.m.a=r.readF2dot14(i,a),a+=2,v.m.d=r.readF2dot14(i,a),a+=2):128&_&&(v.m.a=r.readF2dot14(i,a),a+=2,v.m.b=r.readF2dot14(i,a),a+=2,v.m.c=r.readF2dot14(i,a),a+=2,v.m.d=r.readF2dot14(i,a),a+=2)}while(32&_);if(256&_){var x=r.readUshort(i,a);for(a+=2,o.instr=[],s=0;s<x;s++)o.instr.push(i[a]),a++}}return o},t.GDEF={},t.GDEF.parse=function(e,n,r,i){var a=n;n+=4;var o=t._bin.readUshort(e,n);return{glyphClassDef:o===0?null:t._lctf.readClassDef(e,a+o)}},t.GPOS={},t.GPOS.parse=function(e,n,r,i){return t._lctf.parse(e,n,r,i,t.GPOS.subt)},t.GPOS.subt=function(e,n,r,i){var a=t._bin,o=r,s={};if(s.fmt=a.readUshort(e,r),r+=2,n==1||n==2||n==3||n==7||n==8&&s.fmt<=2){var c=a.readUshort(e,r);r+=2,s.coverage=t._lctf.readCoverage(e,c+o)}if(n==1&&s.fmt==1){var l=a.readUshort(e,r);r+=2,l!=0&&(s.pos=t.GPOS.readValueRecord(e,r,l))}else if(n==2&&s.fmt>=1&&s.fmt<=2){l=a.readUshort(e,r),r+=2;var u=a.readUshort(e,r);r+=2;var d=t._lctf.numOfOnes(l),f=t._lctf.numOfOnes(u);if(s.fmt==1){s.pairsets=[];var p=a.readUshort(e,r);r+=2;for(var m=0;m<p;m++){var h=o+a.readUshort(e,r);r+=2;var g=a.readUshort(e,h);h+=2;for(var _=[],v=0;v<g;v++){var y=a.readUshort(e,h);h+=2,l!=0&&(T=t.GPOS.readValueRecord(e,h,l),h+=2*d),u!=0&&(E=t.GPOS.readValueRecord(e,h,u),h+=2*f),_.push({gid2:y,val1:T,val2:E})}s.pairsets.push(_)}}if(s.fmt==2){var b=a.readUshort(e,r);r+=2;var x=a.readUshort(e,r);r+=2;var S=a.readUshort(e,r);r+=2;var C=a.readUshort(e,r);for(r+=2,s.classDef1=t._lctf.readClassDef(e,o+b),s.classDef2=t._lctf.readClassDef(e,o+x),s.matrix=[],m=0;m<S;m++){var w=[];for(v=0;v<C;v++){var T=null,E=null;l!=0&&(T=t.GPOS.readValueRecord(e,r,l),r+=2*d),u!=0&&(E=t.GPOS.readValueRecord(e,r,u),r+=2*f),w.push({val1:T,val2:E})}s.matrix.push(w)}}}else if(n==4&&s.fmt==1)s.markCoverage=t._lctf.readCoverage(e,a.readUshort(e,r)+o),s.baseCoverage=t._lctf.readCoverage(e,a.readUshort(e,r+2)+o),s.markClassCount=a.readUshort(e,r+4),s.markArray=t.GPOS.readMarkArray(e,a.readUshort(e,r+6)+o),s.baseArray=t.GPOS.readBaseArray(e,a.readUshort(e,r+8)+o,s.markClassCount);else if(n==6&&s.fmt==1)s.mark1Coverage=t._lctf.readCoverage(e,a.readUshort(e,r)+o),s.mark2Coverage=t._lctf.readCoverage(e,a.readUshort(e,r+2)+o),s.markClassCount=a.readUshort(e,r+4),s.mark1Array=t.GPOS.readMarkArray(e,a.readUshort(e,r+6)+o),s.mark2Array=t.GPOS.readBaseArray(e,a.readUshort(e,r+8)+o,s.markClassCount);else{if(n==9&&s.fmt==1){var D=a.readUshort(e,r);r+=2;var O=a.readUint(e,r);if(r+=4,i.ltype==9)i.ltype=D;else if(i.ltype!=D)throw`invalid extension substitution`;return t.GPOS.subt(e,i.ltype,o+O)}console.debug(`unsupported GPOS table LookupType`,n,`format`,s.fmt)}return s},t.GPOS.readValueRecord=function(e,n,r){var i=t._bin,a=[];return a.push(1&r?i.readShort(e,n):0),n+=1&r?2:0,a.push(2&r?i.readShort(e,n):0),n+=2&r?2:0,a.push(4&r?i.readShort(e,n):0),n+=4&r?2:0,a.push(8&r?i.readShort(e,n):0),n+=8&r?2:0,a},t.GPOS.readBaseArray=function(e,n,r){var i=t._bin,a=[],o=n,s=i.readUshort(e,n);n+=2;for(var c=0;c<s;c++){for(var l=[],u=0;u<r;u++)l.push(t.GPOS.readAnchorRecord(e,o+i.readUshort(e,n))),n+=2;a.push(l)}return a},t.GPOS.readMarkArray=function(e,n){var r=t._bin,i=[],a=n,o=r.readUshort(e,n);n+=2;for(var s=0;s<o;s++){var c=t.GPOS.readAnchorRecord(e,r.readUshort(e,n+2)+a);c.markClass=r.readUshort(e,n),i.push(c),n+=4}return i},t.GPOS.readAnchorRecord=function(e,n){var r=t._bin,i={};return i.fmt=r.readUshort(e,n),i.x=r.readShort(e,n+2),i.y=r.readShort(e,n+4),i},t.GSUB={},t.GSUB.parse=function(e,n,r,i){return t._lctf.parse(e,n,r,i,t.GSUB.subt)},t.GSUB.subt=function(e,n,r,i){var a=t._bin,o=r,s={};if(s.fmt=a.readUshort(e,r),r+=2,n!=1&&n!=2&&n!=4&&n!=5&&n!=6)return null;if(n==1||n==2||n==4||n==5&&s.fmt<=2||n==6&&s.fmt<=2){var c=a.readUshort(e,r);r+=2,s.coverage=t._lctf.readCoverage(e,o+c)}if(n==1&&s.fmt>=1&&s.fmt<=2){if(s.fmt==1)s.delta=a.readShort(e,r),r+=2;else if(s.fmt==2){var l=a.readUshort(e,r);r+=2,s.newg=a.readUshorts(e,r,l),r+=2*s.newg.length}}else if(n==2&&s.fmt==1){l=a.readUshort(e,r),r+=2,s.seqs=[];for(var u=0;u<l;u++){var d=a.readUshort(e,r)+o;r+=2;var f=a.readUshort(e,d);s.seqs.push(a.readUshorts(e,d+2,f))}}else if(n==4)for(s.vals=[],l=a.readUshort(e,r),r+=2,u=0;u<l;u++){var p=a.readUshort(e,r);r+=2,s.vals.push(t.GSUB.readLigatureSet(e,o+p))}else if(n==5&&s.fmt==2){if(s.fmt==2){var m=a.readUshort(e,r);r+=2,s.cDef=t._lctf.readClassDef(e,o+m),s.scset=[];var h=a.readUshort(e,r);for(r+=2,u=0;u<h;u++){var g=a.readUshort(e,r);r+=2,s.scset.push(g==0?null:t.GSUB.readSubClassSet(e,o+g))}}}else if(n==6&&s.fmt==3){if(s.fmt==3){for(u=0;u<3;u++){l=a.readUshort(e,r),r+=2;for(var _=[],v=0;v<l;v++)_.push(t._lctf.readCoverage(e,o+a.readUshort(e,r+2*v)));r+=2*l,u==0&&(s.backCvg=_),u==1&&(s.inptCvg=_),u==2&&(s.ahedCvg=_)}l=a.readUshort(e,r),r+=2,s.lookupRec=t.GSUB.readSubstLookupRecords(e,r,l)}}else{if(n==7&&s.fmt==1){var y=a.readUshort(e,r);r+=2;var b=a.readUint(e,r);if(r+=4,i.ltype==9)i.ltype=y;else if(i.ltype!=y)throw`invalid extension substitution`;return t.GSUB.subt(e,i.ltype,o+b)}console.debug(`unsupported GSUB table LookupType`,n,`format`,s.fmt)}return s},t.GSUB.readSubClassSet=function(e,n){var r=t._bin.readUshort,i=n,a=[],o=r(e,n);n+=2;for(var s=0;s<o;s++){var c=r(e,n);n+=2,a.push(t.GSUB.readSubClassRule(e,i+c))}return a},t.GSUB.readSubClassRule=function(e,n){var r=t._bin.readUshort,i={},a=r(e,n),o=r(e,n+=2);n+=2,i.input=[];for(var s=0;s<a-1;s++)i.input.push(r(e,n)),n+=2;return i.substLookupRecords=t.GSUB.readSubstLookupRecords(e,n,o),i},t.GSUB.readSubstLookupRecords=function(e,n,r){for(var i=t._bin.readUshort,a=[],o=0;o<r;o++)a.push(i(e,n),i(e,n+2)),n+=4;return a},t.GSUB.readChainSubClassSet=function(e,n){var r=t._bin,i=n,a=[],o=r.readUshort(e,n);n+=2;for(var s=0;s<o;s++){var c=r.readUshort(e,n);n+=2,a.push(t.GSUB.readChainSubClassRule(e,i+c))}return a},t.GSUB.readChainSubClassRule=function(e,n){for(var r=t._bin,i={},a=[`backtrack`,`input`,`lookahead`],o=0;o<a.length;o++){var s=r.readUshort(e,n);n+=2,o==1&&s--,i[a[o]]=r.readUshorts(e,n,s),n+=2*i[a[o]].length}return s=r.readUshort(e,n),n+=2,i.subst=r.readUshorts(e,n,2*s),n+=2*i.subst.length,i},t.GSUB.readLigatureSet=function(e,n){var r=t._bin,i=n,a=[],o=r.readUshort(e,n);n+=2;for(var s=0;s<o;s++){var c=r.readUshort(e,n);n+=2,a.push(t.GSUB.readLigature(e,i+c))}return a},t.GSUB.readLigature=function(e,n){var r=t._bin,i={chain:[]};i.nglyph=r.readUshort(e,n),n+=2;var a=r.readUshort(e,n);n+=2;for(var o=0;o<a-1;o++)i.chain.push(r.readUshort(e,n)),n+=2;return i},t.head={},t.head.parse=function(e,n,r){var i=t._bin,a={};return i.readFixed(e,n),n+=4,a.fontRevision=i.readFixed(e,n),n+=4,i.readUint(e,n),n+=4,i.readUint(e,n),n+=4,a.flags=i.readUshort(e,n),n+=2,a.unitsPerEm=i.readUshort(e,n),n+=2,a.created=i.readUint64(e,n),n+=8,a.modified=i.readUint64(e,n),n+=8,a.xMin=i.readShort(e,n),n+=2,a.yMin=i.readShort(e,n),n+=2,a.xMax=i.readShort(e,n),n+=2,a.yMax=i.readShort(e,n),n+=2,a.macStyle=i.readUshort(e,n),n+=2,a.lowestRecPPEM=i.readUshort(e,n),n+=2,a.fontDirectionHint=i.readShort(e,n),n+=2,a.indexToLocFormat=i.readShort(e,n),n+=2,a.glyphDataFormat=i.readShort(e,n),n+=2,a},t.hhea={},t.hhea.parse=function(e,n,r){var i=t._bin,a={};return i.readFixed(e,n),n+=4,a.ascender=i.readShort(e,n),n+=2,a.descender=i.readShort(e,n),n+=2,a.lineGap=i.readShort(e,n),n+=2,a.advanceWidthMax=i.readUshort(e,n),n+=2,a.minLeftSideBearing=i.readShort(e,n),n+=2,a.minRightSideBearing=i.readShort(e,n),n+=2,a.xMaxExtent=i.readShort(e,n),n+=2,a.caretSlopeRise=i.readShort(e,n),n+=2,a.caretSlopeRun=i.readShort(e,n),n+=2,a.caretOffset=i.readShort(e,n),n+=2,n+=8,a.metricDataFormat=i.readShort(e,n),n+=2,a.numberOfHMetrics=i.readUshort(e,n),n+=2,a},t.hmtx={},t.hmtx.parse=function(e,n,r,i){for(var a=t._bin,o={aWidth:[],lsBearing:[]},s=0,c=0,l=0;l<i.maxp.numGlyphs;l++)l<i.hhea.numberOfHMetrics&&(s=a.readUshort(e,n),n+=2,c=a.readShort(e,n),n+=2),o.aWidth.push(s),o.lsBearing.push(c);return o},t.kern={},t.kern.parse=function(e,n,r,i){var a=t._bin,o=a.readUshort(e,n);if(n+=2,o==1)return t.kern.parseV1(e,n-2,r,i);var s=a.readUshort(e,n);n+=2;for(var c={glyph1:[],rval:[]},l=0;l<s;l++){n+=2,r=a.readUshort(e,n),n+=2;var u=a.readUshort(e,n);n+=2;var d=u>>>8;if((d&=15)!=0)throw`unknown kern table format: `+d;n=t.kern.readFormat0(e,n,c)}return c},t.kern.parseV1=function(e,n,r,i){var a=t._bin;a.readFixed(e,n),n+=4;var o=a.readUint(e,n);n+=4;for(var s={glyph1:[],rval:[]},c=0;c<o;c++){a.readUint(e,n),n+=4;var l=a.readUshort(e,n);n+=2,a.readUshort(e,n),n+=2;var u=l>>>8;if((u&=15)!=0)throw`unknown kern table format: `+u;n=t.kern.readFormat0(e,n,s)}return s},t.kern.readFormat0=function(e,n,r){var i=t._bin,a=-1,o=i.readUshort(e,n);n+=2,i.readUshort(e,n),n+=2,i.readUshort(e,n),n+=2,i.readUshort(e,n),n+=2;for(var s=0;s<o;s++){var c=i.readUshort(e,n);n+=2;var l=i.readUshort(e,n);n+=2;var u=i.readShort(e,n);n+=2,c!=a&&(r.glyph1.push(c),r.rval.push({glyph2:[],vals:[]}));var d=r.rval[r.rval.length-1];d.glyph2.push(l),d.vals.push(u),a=c}return n},t.loca={},t.loca.parse=function(e,n,r,i){var a=t._bin,o=[],s=i.head.indexToLocFormat,c=i.maxp.numGlyphs+1;if(s==0)for(var l=0;l<c;l++)o.push(a.readUshort(e,n+(l<<1))<<1);if(s==1)for(l=0;l<c;l++)o.push(a.readUint(e,n+(l<<2)));return o},t.maxp={},t.maxp.parse=function(e,n,r){var i=t._bin,a={},o=i.readUint(e,n);return n+=4,a.numGlyphs=i.readUshort(e,n),n+=2,o==65536&&(a.maxPoints=i.readUshort(e,n),n+=2,a.maxContours=i.readUshort(e,n),n+=2,a.maxCompositePoints=i.readUshort(e,n),n+=2,a.maxCompositeContours=i.readUshort(e,n),n+=2,a.maxZones=i.readUshort(e,n),n+=2,a.maxTwilightPoints=i.readUshort(e,n),n+=2,a.maxStorage=i.readUshort(e,n),n+=2,a.maxFunctionDefs=i.readUshort(e,n),n+=2,a.maxInstructionDefs=i.readUshort(e,n),n+=2,a.maxStackElements=i.readUshort(e,n),n+=2,a.maxSizeOfInstructions=i.readUshort(e,n),n+=2,a.maxComponentElements=i.readUshort(e,n),n+=2,a.maxComponentDepth=i.readUshort(e,n),n+=2),a},t.name={},t.name.parse=function(e,n,r){var i=t._bin,a={};i.readUshort(e,n),n+=2;var o=i.readUshort(e,n);n+=2,i.readUshort(e,n);for(var s,c=[`copyright`,`fontFamily`,`fontSubfamily`,`ID`,`fullName`,`version`,`postScriptName`,`trademark`,`manufacturer`,`designer`,`description`,`urlVendor`,`urlDesigner`,`licence`,`licenceURL`,`---`,`typoFamilyName`,`typoSubfamilyName`,`compatibleFull`,`sampleText`,`postScriptCID`,`wwsFamilyName`,`wwsSubfamilyName`,`lightPalette`,`darkPalette`],l=n+=2,u=0;u<o;u++){var d=i.readUshort(e,n);n+=2;var f=i.readUshort(e,n);n+=2;var p=i.readUshort(e,n);n+=2;var m=i.readUshort(e,n);n+=2;var h=i.readUshort(e,n);n+=2;var g=i.readUshort(e,n);n+=2;var _,v=c[m],y=l+12*o+g;if(d==0)_=i.readUnicode(e,y,h/2);else if(d==3&&f==0)_=i.readUnicode(e,y,h/2);else if(f==0)_=i.readASCII(e,y,h);else if(f==1)_=i.readUnicode(e,y,h/2);else if(f==3)_=i.readUnicode(e,y,h/2);else{if(d!=1)throw`unknown encoding `+f+`, platformID: `+d;_=i.readASCII(e,y,h),console.debug(`reading unknown MAC encoding `+f+` as ASCII`)}var b=`p`+d+`,`+p.toString(16);a[b]??(a[b]={}),a[b][v===void 0?m:v]=_,a[b]._lang=p}for(var x in a)if(a[x].postScriptName!=null&&a[x]._lang==1033)return a[x];for(var x in a)if(a[x].postScriptName!=null&&a[x]._lang==0)return a[x];for(var x in a)if(a[x].postScriptName!=null&&a[x]._lang==3084)return a[x];for(var x in a)if(a[x].postScriptName!=null)return a[x];for(var x in a){s=x;break}return console.debug(`returning name table with languageID `+a[s]._lang),a[s]},t[`OS/2`]={},t[`OS/2`].parse=function(e,n,r){var i=t._bin.readUshort(e,n);n+=2;var a={};if(i==0)t[`OS/2`].version0(e,n,a);else if(i==1)t[`OS/2`].version1(e,n,a);else if(i==2||i==3||i==4)t[`OS/2`].version2(e,n,a);else{if(i!=5)throw`unknown OS/2 table version: `+i;t[`OS/2`].version5(e,n,a)}return a},t[`OS/2`].version0=function(e,n,r){var i=t._bin;return r.xAvgCharWidth=i.readShort(e,n),n+=2,r.usWeightClass=i.readUshort(e,n),n+=2,r.usWidthClass=i.readUshort(e,n),n+=2,r.fsType=i.readUshort(e,n),n+=2,r.ySubscriptXSize=i.readShort(e,n),n+=2,r.ySubscriptYSize=i.readShort(e,n),n+=2,r.ySubscriptXOffset=i.readShort(e,n),n+=2,r.ySubscriptYOffset=i.readShort(e,n),n+=2,r.ySuperscriptXSize=i.readShort(e,n),n+=2,r.ySuperscriptYSize=i.readShort(e,n),n+=2,r.ySuperscriptXOffset=i.readShort(e,n),n+=2,r.ySuperscriptYOffset=i.readShort(e,n),n+=2,r.yStrikeoutSize=i.readShort(e,n),n+=2,r.yStrikeoutPosition=i.readShort(e,n),n+=2,r.sFamilyClass=i.readShort(e,n),n+=2,r.panose=i.readBytes(e,n,10),n+=10,r.ulUnicodeRange1=i.readUint(e,n),n+=4,r.ulUnicodeRange2=i.readUint(e,n),n+=4,r.ulUnicodeRange3=i.readUint(e,n),n+=4,r.ulUnicodeRange4=i.readUint(e,n),n+=4,r.achVendID=[i.readInt8(e,n),i.readInt8(e,n+1),i.readInt8(e,n+2),i.readInt8(e,n+3)],n+=4,r.fsSelection=i.readUshort(e,n),n+=2,r.usFirstCharIndex=i.readUshort(e,n),n+=2,r.usLastCharIndex=i.readUshort(e,n),n+=2,r.sTypoAscender=i.readShort(e,n),n+=2,r.sTypoDescender=i.readShort(e,n),n+=2,r.sTypoLineGap=i.readShort(e,n),n+=2,r.usWinAscent=i.readUshort(e,n),n+=2,r.usWinDescent=i.readUshort(e,n),n+=2},t[`OS/2`].version1=function(e,n,r){var i=t._bin;return n=t[`OS/2`].version0(e,n,r),r.ulCodePageRange1=i.readUint(e,n),n+=4,r.ulCodePageRange2=i.readUint(e,n),n+=4},t[`OS/2`].version2=function(e,n,r){var i=t._bin;return n=t[`OS/2`].version1(e,n,r),r.sxHeight=i.readShort(e,n),n+=2,r.sCapHeight=i.readShort(e,n),n+=2,r.usDefault=i.readUshort(e,n),n+=2,r.usBreak=i.readUshort(e,n),n+=2,r.usMaxContext=i.readUshort(e,n),n+=2},t[`OS/2`].version5=function(e,n,r){var i=t._bin;return n=t[`OS/2`].version2(e,n,r),r.usLowerOpticalPointSize=i.readUshort(e,n),n+=2,r.usUpperOpticalPointSize=i.readUshort(e,n),n+=2},t.post={},t.post.parse=function(e,n,r){var i=t._bin,a={};return a.version=i.readFixed(e,n),n+=4,a.italicAngle=i.readFixed(e,n),n+=4,a.underlinePosition=i.readShort(e,n),n+=2,a.underlineThickness=i.readShort(e,n),n+=2,a},t??={},t.U??={},t.U.codeToGlyph=function(e,t){var n=e.cmap,r=-1;if(n.p0e4==null?n.p3e1==null?n.p1e0==null?n.p0e3!=null&&(r=n.p0e3):r=n.p1e0:r=n.p3e1:r=n.p0e4,r==-1)throw`no familiar platform and encoding!`;var i=n.tables[r];if(i.format==0)return t>=i.map.length?0:i.map[t];if(i.format==4){for(var a=-1,o=0;o<i.endCount.length;o++)if(t<=i.endCount[o]){a=o;break}return a==-1||i.startCount[a]>t?0:65535&(i.idRangeOffset[a]==0?t+i.idDelta[a]:i.glyphIdArray[t-i.startCount[a]+(i.idRangeOffset[a]>>1)-(i.idRangeOffset.length-a)])}if(i.format==12){if(t>i.groups[i.groups.length-1][1])return 0;for(o=0;o<i.groups.length;o++){var s=i.groups[o];if(s[0]<=t&&t<=s[1])return s[2]+(t-s[0])}return 0}throw`unknown cmap table format `+i.format},t.U.glyphToPath=function(e,n){var r={cmds:[],crds:[]};if(e.SVG&&e.SVG.entries[n]){var i=e.SVG.entries[n];return i==null?r:(typeof i==`string`&&(i=t.SVG.toPath(i),e.SVG.entries[n]=i),i)}if(e.CFF){var a={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:e.CFF.Private?e.CFF.Private.defaultWidthX:0,open:!1},o=e.CFF,s=e.CFF.Private;if(o.ROS){for(var c=0;o.FDSelect[c+2]<=n;)c+=2;s=o.FDArray[o.FDSelect[c+1]].Private}t.U._drawCFF(e.CFF.CharStrings[n],a,o,s,r)}else e.glyf&&t.U._drawGlyf(n,e,r);return r},t.U._drawGlyf=function(e,n,r){var i=n.glyf[e];i??=n.glyf[e]=t.glyf._parseGlyf(n,e),i!=null&&(i.noc>-1?t.U._simpleGlyph(i,r):t.U._compoGlyph(i,n,r))},t.U._simpleGlyph=function(e,n){for(var r=0;r<e.noc;r++){for(var i=r==0?0:e.endPts[r-1]+1,a=e.endPts[r],o=i;o<=a;o++){var s=o==i?a:o-1,c=o==a?i:o+1,l=1&e.flags[o],u=1&e.flags[s],d=1&e.flags[c],f=e.xs[o],p=e.ys[o];if(o==i)if(l){if(!u){t.U.P.moveTo(n,f,p);continue}t.U.P.moveTo(n,e.xs[s],e.ys[s])}else u?t.U.P.moveTo(n,e.xs[s],e.ys[s]):t.U.P.moveTo(n,(e.xs[s]+f)/2,(e.ys[s]+p)/2);l?u&&t.U.P.lineTo(n,f,p):d?t.U.P.qcurveTo(n,f,p,e.xs[c],e.ys[c]):t.U.P.qcurveTo(n,f,p,(f+e.xs[c])/2,(p+e.ys[c])/2)}t.U.P.closePath(n)}},t.U._compoGlyph=function(e,n,r){for(var i=0;i<e.parts.length;i++){var a={cmds:[],crds:[]},o=e.parts[i];t.U._drawGlyf(o.glyphIndex,n,a);for(var s=o.m,c=0;c<a.crds.length;c+=2){var l=a.crds[c],u=a.crds[c+1];r.crds.push(l*s.a+u*s.b+s.tx),r.crds.push(l*s.c+u*s.d+s.ty)}for(c=0;c<a.cmds.length;c++)r.cmds.push(a.cmds[c])}},t.U._getGlyphClass=function(e,n){var r=t._lctf.getInterval(n,e);return r==-1?0:n[r+2]},t.U._applySubs=function(e,n,r,i){for(var a=e.length-n-1,o=0;o<r.tabs.length;o++)if(r.tabs[o]!=null){var s,c=r.tabs[o];if(!c.coverage||(s=t._lctf.coverageIndex(c.coverage,e[n]))!=-1){if(r.ltype==1)e[n],c.fmt==1?e[n]=e[n]+c.delta:e[n]=c.newg[s];else if(r.ltype==4)for(var l=c.vals[s],u=0;u<l.length;u++){var d=l[u],f=d.chain.length;if(!(f>a)){for(var p=!0,m=0,h=0;h<f;h++){for(;e[n+m+(1+h)]==-1;)m++;d.chain[h]!=e[n+m+(1+h)]&&(p=!1)}if(p){for(e[n]=d.nglyph,h=0;h<f+m;h++)e[n+h+1]=-1;break}}}else if(r.ltype==5&&c.fmt==2)for(var g=t._lctf.getInterval(c.cDef,e[n]),_=c.cDef[g+2],v=c.scset[_],y=0;y<v.length;y++){var b=v[y],x=b.input;if(!(x.length>a)){for(p=!0,h=0;h<x.length;h++){var S=t._lctf.getInterval(c.cDef,e[n+1+h]);if(g==-1&&c.cDef[S+2]!=x[h]){p=!1;break}}if(p){var C=b.substLookupRecords;for(u=0;u<C.length;u+=2)C[u],C[u+1]}}}else if(r.ltype==6&&c.fmt==3){if(!t.U._glsCovered(e,c.backCvg,n-c.backCvg.length)||!t.U._glsCovered(e,c.inptCvg,n)||!t.U._glsCovered(e,c.ahedCvg,n+c.inptCvg.length))continue;var w=c.lookupRec;for(y=0;y<w.length;y+=2){g=w[y];var T=i[w[y+1]];t.U._applySubs(e,n+g,T,i)}}}}},t.U._glsCovered=function(e,n,r){for(var i=0;i<n.length;i++)if(t._lctf.coverageIndex(n[i],e[r+i])==-1)return!1;return!0},t.U.glyphsToPath=function(e,n,r){for(var i={cmds:[],crds:[]},a=0,o=0;o<n.length;o++){var s=n[o];if(s!=-1){for(var c=o<n.length-1&&n[o+1]!=-1?n[o+1]:0,l=t.U.glyphToPath(e,s),u=0;u<l.crds.length;u+=2)i.crds.push(l.crds[u]+a),i.crds.push(l.crds[u+1]);for(r&&i.cmds.push(r),u=0;u<l.cmds.length;u++)i.cmds.push(l.cmds[u]);r&&i.cmds.push(`X`),a+=e.hmtx.aWidth[s],o<n.length-1&&(a+=t.U.getPairAdjustment(e,s,c))}}return i},t.U.P={},t.U.P.moveTo=function(e,t,n){e.cmds.push(`M`),e.crds.push(t,n)},t.U.P.lineTo=function(e,t,n){e.cmds.push(`L`),e.crds.push(t,n)},t.U.P.curveTo=function(e,t,n,r,i,a,o){e.cmds.push(`C`),e.crds.push(t,n,r,i,a,o)},t.U.P.qcurveTo=function(e,t,n,r,i){e.cmds.push(`Q`),e.crds.push(t,n,r,i)},t.U.P.closePath=function(e){e.cmds.push(`Z`)},t.U._drawCFF=function(e,n,r,i,a){for(var o=n.stack,s=n.nStems,c=n.haveWidth,l=n.width,u=n.open,d=0,f=n.x,p=n.y,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0,C=0,w={val:0,size:0};d<e.length;){t.CFF.getCharString(e,d,w);var T=w.val;if(d+=w.size,T==`o1`||T==`o18`)o.length%2!=0&&!c&&(l=o.shift()+i.nominalWidthX),s+=o.length>>1,o.length=0,c=!0;else if(T==`o3`||T==`o23`)o.length%2!=0&&!c&&(l=o.shift()+i.nominalWidthX),s+=o.length>>1,o.length=0,c=!0;else if(T==`o4`)o.length>1&&!c&&(l=o.shift()+i.nominalWidthX,c=!0),u&&t.U.P.closePath(a),p+=o.pop(),t.U.P.moveTo(a,f,p),u=!0;else if(T==`o5`)for(;o.length>0;)f+=o.shift(),p+=o.shift(),t.U.P.lineTo(a,f,p);else if(T==`o6`||T==`o7`)for(var E=o.length,D=T==`o6`,O=0;O<E;O++){var k=o.shift();D?f+=k:p+=k,D=!D,t.U.P.lineTo(a,f,p)}else if(T==`o8`||T==`o24`){E=o.length;for(var A=0;A+6<=E;)m=f+o.shift(),h=p+o.shift(),g=m+o.shift(),_=h+o.shift(),f=g+o.shift(),p=_+o.shift(),t.U.P.curveTo(a,m,h,g,_,f,p),A+=6;T==`o24`&&(f+=o.shift(),p+=o.shift(),t.U.P.lineTo(a,f,p))}else{if(T==`o11`)break;if(T==`o1234`||T==`o1235`||T==`o1236`||T==`o1237`)T==`o1234`&&(h=p,g=(m=f+o.shift())+o.shift(),C=_=h+o.shift(),y=_,x=p,f=(b=(v=(S=g+o.shift())+o.shift())+o.shift())+o.shift(),t.U.P.curveTo(a,m,h,g,_,S,C),t.U.P.curveTo(a,v,y,b,x,f,p)),T==`o1235`&&(m=f+o.shift(),h=p+o.shift(),g=m+o.shift(),_=h+o.shift(),S=g+o.shift(),C=_+o.shift(),v=S+o.shift(),y=C+o.shift(),b=v+o.shift(),x=y+o.shift(),f=b+o.shift(),p=x+o.shift(),o.shift(),t.U.P.curveTo(a,m,h,g,_,S,C),t.U.P.curveTo(a,v,y,b,x,f,p)),T==`o1236`&&(m=f+o.shift(),h=p+o.shift(),g=m+o.shift(),C=_=h+o.shift(),y=_,b=(v=(S=g+o.shift())+o.shift())+o.shift(),x=y+o.shift(),f=b+o.shift(),t.U.P.curveTo(a,m,h,g,_,S,C),t.U.P.curveTo(a,v,y,b,x,f,p)),T==`o1237`&&(m=f+o.shift(),h=p+o.shift(),g=m+o.shift(),_=h+o.shift(),S=g+o.shift(),C=_+o.shift(),v=S+o.shift(),y=C+o.shift(),b=v+o.shift(),x=y+o.shift(),Math.abs(b-f)>Math.abs(x-p)?f=b+o.shift():p=x+o.shift(),t.U.P.curveTo(a,m,h,g,_,S,C),t.U.P.curveTo(a,v,y,b,x,f,p));else if(T==`o14`){if(o.length>0&&!c&&(l=o.shift()+r.nominalWidthX,c=!0),o.length==4){var j=o.shift(),ee=o.shift(),M=o.shift(),N=o.shift(),te=t.CFF.glyphBySE(r,M),P=t.CFF.glyphBySE(r,N);t.U._drawCFF(r.CharStrings[te],n,r,i,a),n.x=j,n.y=ee,t.U._drawCFF(r.CharStrings[P],n,r,i,a)}u&&=(t.U.P.closePath(a),!1)}else if(T==`o19`||T==`o20`)o.length%2!=0&&!c&&(l=o.shift()+i.nominalWidthX),s+=o.length>>1,o.length=0,c=!0,d+=s+7>>3;else if(T==`o21`)o.length>2&&!c&&(l=o.shift()+i.nominalWidthX,c=!0),p+=o.pop(),f+=o.pop(),u&&t.U.P.closePath(a),t.U.P.moveTo(a,f,p),u=!0;else if(T==`o22`)o.length>1&&!c&&(l=o.shift()+i.nominalWidthX,c=!0),f+=o.pop(),u&&t.U.P.closePath(a),t.U.P.moveTo(a,f,p),u=!0;else if(T==`o25`){for(;o.length>6;)f+=o.shift(),p+=o.shift(),t.U.P.lineTo(a,f,p);m=f+o.shift(),h=p+o.shift(),g=m+o.shift(),_=h+o.shift(),f=g+o.shift(),p=_+o.shift(),t.U.P.curveTo(a,m,h,g,_,f,p)}else if(T==`o26`)for(o.length%2&&(f+=o.shift());o.length>0;)m=f,h=p+o.shift(),f=g=m+o.shift(),p=(_=h+o.shift())+o.shift(),t.U.P.curveTo(a,m,h,g,_,f,p);else if(T==`o27`)for(o.length%2&&(p+=o.shift());o.length>0;)h=p,g=(m=f+o.shift())+o.shift(),_=h+o.shift(),f=g+o.shift(),p=_,t.U.P.curveTo(a,m,h,g,_,f,p);else if(T==`o10`||T==`o29`){var ne=T==`o10`?i:r;if(o.length==0)console.debug(`error: empty stack`);else{var re=o.pop(),F=ne.Subrs[re+ne.Bias];n.x=f,n.y=p,n.nStems=s,n.haveWidth=c,n.width=l,n.open=u,t.U._drawCFF(F,n,r,i,a),f=n.x,p=n.y,s=n.nStems,c=n.haveWidth,l=n.width,u=n.open}}else if(T==`o30`||T==`o31`){var ie=o.length,ae=(A=0,T==`o31`);for(A+=ie-(E=-3&ie);A<E;)ae?(h=p,g=(m=f+o.shift())+o.shift(),p=(_=h+o.shift())+o.shift(),E-A==5?(f=g+o.shift(),A++):f=g,ae=!1):(m=f,h=p+o.shift(),g=m+o.shift(),_=h+o.shift(),f=g+o.shift(),E-A==5?(p=_+o.shift(),A++):p=_,ae=!0),t.U.P.curveTo(a,m,h,g,_,f,p),A+=4}else{if((T+``).charAt(0)==`o`)throw console.debug(`Unknown operation: `+T,e),T;o.push(T)}}}n.x=f,n.y=p,n.nStems=s,n.haveWidth=c,n.width=l,n.open=u};var n=t,r={Typr:n};return e.Typr=n,e.default=r,Object.defineProperty(e,`__esModule`,{value:!0}),e}({}).Typr}function Dd(){return function(e){var t=Uint8Array,n=Uint16Array,r=Uint32Array,i=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),a=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(e,t){for(var i=new n(31),a=0;a<31;++a)i[a]=t+=1<<e[a-1];var o=new r(i[30]);for(a=1;a<30;++a)for(var s=i[a];s<i[a+1];++s)o[s]=s-i[a]<<5|a;return[i,o]},c=s(i,2),l=c[0],u=c[1];l[28]=258,u[258]=28;for(var d=s(a,0)[0],f=new n(32768),p=0;p<32768;++p){var m=(43690&p)>>>1|(21845&p)<<1;m=(61680&(m=(52428&m)>>>2|(13107&m)<<2))>>>4|(3855&m)<<4,f[p]=((65280&m)>>>8|(255&m)<<8)>>>1}var h=function(e,t,r){for(var i=e.length,a=0,o=new n(t);a<i;++a)++o[e[a]-1];var s,c=new n(t);for(a=0;a<t;++a)c[a]=c[a-1]+o[a-1]<<1;if(r){s=new n(1<<t);var l=15-t;for(a=0;a<i;++a)if(e[a])for(var u=a<<4|e[a],d=t-e[a],p=c[e[a]-1]++<<d,m=p|(1<<d)-1;p<=m;++p)s[f[p]>>>l]=u}else for(s=new n(i),a=0;a<i;++a)e[a]&&(s[a]=f[c[e[a]-1]++]>>>15-e[a]);return s},g=new t(288);for(p=0;p<144;++p)g[p]=8;for(p=144;p<256;++p)g[p]=9;for(p=256;p<280;++p)g[p]=7;for(p=280;p<288;++p)g[p]=8;var _=new t(32);for(p=0;p<32;++p)_[p]=5;var v=h(g,9,1),y=h(_,5,1),b=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},x=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(7&t)&n},S=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(7&t)},C=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],w=function(e,t,n){var r=Error(t||C[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,w),!n)throw r;return r},T=function(e,s,c){var u=e.length;if(!u||c&&!c.l&&u<5)return s||new t(0);var f=!s||c,p=!c||c.i;c||={},s||=new t(3*u);var m,g=function(e){var n=s.length;if(e>n){var r=new t(Math.max(2*n,e));r.set(s),s=r}},_=c.f||0,C=c.p||0,T=c.b||0,E=c.l,D=c.d,O=c.m,k=c.n,A=8*u;do{if(!E){c.f=_=x(e,C,1);var j=x(e,C+1,3);if(C+=3,!j){var ee=e[(I=((m=C)/8|0)+(7&m&&1)+4)-4]|e[I-3]<<8,M=I+ee;if(M>u){p&&w(0);break}f&&g(T+ee),s.set(e.subarray(I,M),T),c.b=T+=ee,c.p=C=8*M;continue}if(j==1)E=v,D=y,O=9,k=5;else if(j==2){var N=x(e,C,31)+257,te=x(e,C+10,15)+4,P=N+x(e,C+5,31)+1;C+=14;for(var ne=new t(P),re=new t(19),F=0;F<te;++F)re[o[F]]=x(e,C+3*F,7);C+=3*te;var ie=b(re),ae=(1<<ie)-1,oe=h(re,ie,1);for(F=0;F<P;){var I,se=oe[x(e,C,ae)];if(C+=15&se,(I=se>>>4)<16)ne[F++]=I;else{var L=0,R=0;for(I==16?(R=3+x(e,C,3),C+=2,L=ne[F-1]):I==17?(R=3+x(e,C,7),C+=3):I==18&&(R=11+x(e,C,127),C+=7);R--;)ne[F++]=L}}var z=ne.subarray(0,N),B=ne.subarray(N);O=b(z),k=b(B),E=h(z,O,1),D=h(B,k,1)}else w(1);if(C>A){p&&w(0);break}}f&&g(T+131072);for(var V=(1<<O)-1,ce=(1<<k)-1,le=C;;le=C){var ue=(L=E[S(e,C)&V])>>>4;if((C+=15&L)>A){p&&w(0);break}if(L||w(2),ue<256)s[T++]=ue;else{if(ue==256){le=C,E=null;break}var de=ue-254;if(ue>264){var fe=i[F=ue-257];de=x(e,C,(1<<fe)-1)+l[F],C+=fe}var H=D[S(e,C)&ce],pe=H>>>4;if(H||w(3),C+=15&H,B=d[pe],pe>3&&(fe=a[pe],B+=S(e,C)&(1<<fe)-1,C+=fe),C>A){p&&w(0);break}f&&g(T+131072);for(var U=T+de;T<U;T+=4)s[T]=s[T-B],s[T+1]=s[T+1-B],s[T+2]=s[T+2-B],s[T+3]=s[T+3-B];T=U}}c.l=E,c.p=le,c.b=T,E&&(_=1,c.m=O,c.d=D,c.n=k)}while(!_);return T==s.length?s:function(e,i,a){(i==null||i<0)&&(i=0),(a==null||a>e.length)&&(a=e.length);var o=new(e instanceof n?n:e instanceof r?r:t)(a-i);return o.set(e.subarray(i,a)),o}(s,0,T)},E=new t(0),D=typeof TextDecoder<`u`&&new TextDecoder;try{D.decode(E,{stream:!0})}catch{}return e.convert_streams=function(e){var t=new DataView(e),n=0;function r(){var e=t.getUint16(n);return n+=2,e}function i(){var e=t.getUint32(n);return n+=4,e}function a(e){_.setUint16(v,e),v+=2}function o(e){_.setUint32(v,e),v+=4}for(var s={signature:i(),flavor:i(),length:i(),numTables:r(),reserved:r(),totalSfntSize:i(),majorVersion:r(),minorVersion:r(),metaOffset:i(),metaLength:i(),metaOrigLength:i(),privOffset:i(),privLength:i()},c=0;2**c<=s.numTables;)c++;c--;for(var l=16*2**c,u=16*s.numTables-l,d=12,f=[],p=0;p<s.numTables;p++)f.push({tag:i(),offset:i(),compLength:i(),origLength:i(),origChecksum:i()}),d+=16;var m,h=new Uint8Array(12+16*f.length+f.reduce((function(e,t){return e+t.origLength+4}),0)),g=h.buffer,_=new DataView(g),v=0;return o(s.flavor),a(s.numTables),a(l),a(c),a(u),f.forEach((function(e){o(e.tag),o(e.origChecksum),o(d),o(e.origLength),e.outOffset=d,(d+=e.origLength)%4!=0&&(d+=4-d%4)})),f.forEach((function(t){var n,r=e.slice(t.offset,t.offset+t.compLength);if(t.compLength!=t.origLength){var i=new Uint8Array(t.origLength);n=new Uint8Array(r,2),T(n,i)}else i=new Uint8Array(r);h.set(i,t.outOffset);var a=0;(d=t.outOffset+t.origLength)%4!=0&&(a=4-d%4),h.set(new Uint8Array(a).buffer,t.outOffset+t.origLength),m=d+a})),g.slice(0,m)},Object.defineProperty(e,`__esModule`,{value:!0}),e}({}).convert_streams}function Od(e,t){let n={M:2,L:2,Q:4,C:6,Z:0},r={C:`18g,ca,368,1kz`,D:`17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v`,R:`17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6`,L:`x9u,jff,a,fd,jv`,T:`4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n`},i;function a(e){if(!i){let e={R:2,L:1,D:4,C:16,U:32,T:8};i=new Map;for(let t in r){let n=0;r[t].split(`,`).forEach(r=>{let[a,o]=r.split(`+`);a=parseInt(a,36),o=o?parseInt(o,36):0,i.set(n+=a,e[t]);for(let r=o;r--;)i.set(++n,e[t])})}}return i.get(e)||32}let o=[null,`isol`,`init`,`fina`,`medi`];function s(e){let t=new Uint8Array(e.length),n=32,r=1,i=-1;for(let o=0;o<e.length;o++){let s=e.codePointAt(o),c=a(s)|0,l=1;c&8||(n&21?c&22?(l=3,(r===1||r===3)&&t[i]++):c&33&&(r===2||r===4)&&t[i]--:n&34&&(r===2||r===4)&&t[i]--,r=t[o]=l,n=c,i=o,s>65535&&o++)}return t}function c(t,n){let r=[];for(let i=0;i<n.length;i++){let a=n.codePointAt(i);a>65535&&i++,r.push(e.U.codeToGlyph(t,a))}let i=t.GSUB;if(i){let{lookupList:t,featureList:a}=i,c,l=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,u=[];a.forEach(i=>{if(l.test(i.tag))for(let a=0;a<i.tab.length;a++){if(u[i.tab[a]])continue;u[i.tab[a]]=!0;let l=t[i.tab[a]],d=/^(isol|init|fina|medi)$/.test(i.tag);d&&!c&&(c=s(n));for(let n=0;n<r.length;n++)(!c||!d||o[c[n]]===i.tag)&&e.U._applySubs(r,n,l,t)}})}return r}function l(t,n){let r=new Int16Array(n.length*3),i=0;for(;i<n.length;i++){let c=n[i];if(c===-1)continue;r[i*3+2]=t.hmtx.aWidth[c];let l=t.GPOS;if(l){let d=l.lookupList;for(let l=0;l<d.length;l++){let f=d[l];for(let l=0;l<f.tabs.length;l++){let d=f.tabs[l];if(f.ltype===1){if(e._lctf.coverageIndex(d.coverage,c)!==-1&&d.pos){s(d.pos,i);break}}else if(f.ltype===2){let t=null,r=a();if(r!==-1){let a=e._lctf.coverageIndex(d.coverage,n[r]);if(a!==-1){if(d.fmt===1){let e=d.pairsets[a];for(let n=0;n<e.length;n++)e[n].gid2===c&&(t=e[n])}else if(d.fmt===2){let i=e.U._getGlyphClass(n[r],d.classDef1),a=e.U._getGlyphClass(c,d.classDef2);t=d.matrix[i][a]}if(t){t.val1&&s(t.val1,r),t.val2&&s(t.val2,i);break}}}}else if(f.ltype===4){let t=e._lctf.coverageIndex(d.markCoverage,c);if(t!==-1){let s=a(o),c=s===-1?-1:e._lctf.coverageIndex(d.baseCoverage,n[s]);if(c!==-1){let e=d.markArray[t],n=d.baseArray[c][e.markClass];r[i*3]=n.x-e.x+r[s*3]-r[s*3+2],r[i*3+1]=n.y-e.y+r[s*3+1];break}}}else if(f.ltype===6){let o=e._lctf.coverageIndex(d.mark1Coverage,c);if(o!==-1){let s=a();if(s!==-1){let a=n[s];if(u(t,a)===3){let t=e._lctf.coverageIndex(d.mark2Coverage,a);if(t!==-1){let e=d.mark1Array[o],n=d.mark2Array[t][e.markClass];r[i*3]=n.x-e.x+r[s*3]-r[s*3+2],r[i*3+1]=n.y-e.y+r[s*3+1];break}}}}}}}}else if(t.kern&&!t.cff){let e=a();if(e!==-1){let i=t.kern.glyph1.indexOf(n[e]);if(i!==-1){let n=t.kern.rval[i].glyph2.indexOf(c);n!==-1&&(r[e*3+2]+=t.kern.rval[i].vals[n])}}}}return r;function a(e){for(let t=i-1;t>=0;t--)if(n[t]!==-1&&(!e||e(n[t])))return t;return-1}function o(e){return u(t,e)===1}function s(e,t){for(let n=0;n<3;n++)r[t*3+n]+=e[n]||0}}function u(t,n){let r=t.GDEF&&t.GDEF.glyphClassDef;return r?e.U._getGlyphClass(n,r):0}function d(...e){for(let t=0;t<e.length;t++)if(typeof e[t]==`number`)return e[t]}function f(t){let r=Object.create(null),i=t[`OS/2`],a=t.hhea,o=t.head.unitsPerEm,s=d(i&&i.sTypoAscender,a&&a.ascender,o),u={unitsPerEm:o,ascender:s,descender:d(i&&i.sTypoDescender,a&&a.descender,0),capHeight:d(i&&i.sCapHeight,s),xHeight:d(i&&i.sxHeight,s),lineGap:d(i&&i.sTypoLineGap,a&&a.lineGap),supportsCodePoint(n){return e.U.codeToGlyph(t,n)>0},forEachGlyph(i,a,o,s){let d=0,f=1/u.unitsPerEm*a,p=c(t,i),m=0,h=l(t,p);return p.forEach((c,l)=>{if(c!==-1){let i=r[c];if(!i){let{cmds:a,crds:o}=e.U.glyphToPath(t,c),s=``,l=0;for(let e=0,t=a.length;e<t;e++){let t=n[a[e]];s+=a[e];for(let e=1;e<=t;e++)s+=(e>1?`,`:``)+o[l++]}let u,d,f,p;if(o.length){u=d=1/0,f=p=-1/0;for(let e=0,t=o.length;e<t;e+=2){let t=o[e],n=o[e+1];t<u&&(u=t),n<d&&(d=n),t>f&&(f=t),n>p&&(p=n)}}else u=f=d=p=0;i=r[c]={index:c,advanceWidth:t.hmtx.aWidth[c],xMin:u,yMin:d,xMax:f,yMax:p,path:s}}s.call(null,i,d+h[l*3]*f,h[l*3+1]*f,m),d+=h[l*3+2]*f,o&&(d+=o*a)}m+=i.codePointAt(m)>65535?2:1}),d}};return u}return function(n){let r=new Uint8Array(n,0,4),i=e._bin.readASCII(r,0,4);if(i===`wOFF`)n=t(n);else if(i===`wOF2`)throw Error(`woff2 fonts not supported`);return f(e.parse(n)[0])}}var kd=rd({name:`Typr Font Parser`,dependencies:[Ed,Dd,Od],init(e,t,n){return n(e(),t())}});function Ad(){return function(e){var t=function(){this.buckets=new Map};t.prototype.add=function(e){var t=e>>5;this.buckets.set(t,(this.buckets.get(t)||0)|1<<(31&e))},t.prototype.has=function(e){var t=this.buckets.get(e>>5);return t!==void 0&&(t&1<<(31&e))!=0},t.prototype.serialize=function(){var e=[];return this.buckets.forEach((function(t,n){e.push((+n).toString(36)+`:`+t.toString(36))})),e.join(`,`)},t.prototype.deserialize=function(e){var t=this;this.buckets.clear(),e.split(`,`).forEach((function(e){var n=e.split(`:`);t.buckets.set(parseInt(n[0],36),parseInt(n[1],36))}))};var n=2**8,r=n-1,i=~r;function a(e){var t=function(e){return e&i}(e).toString(16),r=function(e){return(e&i)+n-1}(e).toString(16);return`codepoint-index/plane`+(e>>16)+`/`+t+`-`+r+`.json`}function o(e,t){var n=e&r,i=t.codePointAt(n/6|0);return((i=(i||48)-48)&1<<n%6)!=0}function s(e,t){var n;(n=e,n.replace(/U\+/gi,``).replace(/^,+|,+$/g,``).split(/,+/).map((function(e){return e.split(`-`).map((function(e){return parseInt(e.trim(),16)}))}))).forEach((function(e){var n=e[0],r=e[1];r===void 0&&(r=n),t(n,r)}))}function c(e,t){s(e,(function(e,n){for(var r=e;r<=n;r++)t(r)}))}var l={},u={},d=new WeakMap,f=`https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data`;function p(e){var n=d.get(e);return n||(n=new t,c(e.ranges,(function(e){return n.add(e)})),d.set(e,n)),n}var m,h=new Map;function g(e,t,n){return e[t]?t:e[n]?n:function(e){for(var t in e)return t}(e)}function _(e,t){var n=t;if(!e.includes(n)){n=1/0;for(var r=0;r<e.length;r++)Math.abs(e[r]-t)<Math.abs(n-t)&&(n=e[r])}return n}function v(e){return m||(m=new Set,c(`9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000`,(function(e){m.add(e)}))),m.has(e)}return e.CodePointSet=t,e.clearCache=function(){l={},u={}},e.getFontsForString=function(e,t){t===void 0&&(t={});var n,r=t.lang;r===void 0&&(r=/\p{Script=Hangul}/u.test(n=e)?`ko`:/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(n)?`ja`:`en`);var i=t.category;i===void 0&&(i=`sans-serif`);var s=t.style;s===void 0&&(s=`normal`);var c=t.weight;c===void 0&&(c=400);var d=(t.dataUrl||f).replace(/\/$/g,``),m=new Map,y=new Uint8Array(e.length),b={},x={},S=Array(e.length),C=new Map,w=!1;function T(e){var t=h.get(e);return t||(t=fetch(d+`/`+e).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json().then((function(e){if(!Array.isArray(e)||e[0]!==1)throw Error(`Incorrect schema version; need 1, got `+e[0]);return e[1]}))})).catch((function(t){if(d!==f)return w||=(console.error(`unicode-font-resolver: Failed loading from dataUrl "`+d+`", trying default CDN. `+t.message),!0),d=f,h.delete(e),T(e);throw t})),h.set(e,t)),t}for(var E=function(t){var n=e.codePointAt(t),r=a(n);S[t]=r,l[r]||C.has(r)||C.set(r,T(r).then((function(e){l[r]=e}))),n>65535&&(t++,D=t)},D=0;D<e.length;D++)E(D);return Promise.all(C.values()).then((function(){C.clear();for(var t=function(t){var i=e.codePointAt(t),a=null,s=l[S[t]],c=void 0;for(var d in s){var f=x[d];if(f===void 0&&(f=x[d]=new RegExp(d).test(r||`en`)),f){for(var p in c=d,s[d])if(o(i,s[d][p])){a=p;break}break}}if(!a){t:for(var m in s)if(m!==c){for(var h in s[m])if(o(i,s[m][h])){a=h;break t}}}a||=(console.debug(`No font coverage for U+`+i.toString(16)),`latin`),S[t]=a,u[a]||C.has(a)||C.set(a,T(`font-meta/`+a+`.json`).then((function(e){u[a]=e}))),i>65535&&(t++,n=t)},n=0;n<e.length;n++)t(n);return Promise.all(C.values())})).then((function(){for(var t=null,n=0;n<e.length;n++){var r=e.codePointAt(n);if(t&&(v(r)||p(t).has(r)))y[n]=y[n-1];else{t=u[S[n]];var a=b[t.id];if(!a){var o=t.typeforms,l=g(o,i,`sans-serif`),f=g(o[l],s,`normal`),h=_(o[l]?.[f],c);a=b[t.id]=d+`/font-files/`+t.id+`/`+l+`.`+f+`.`+h+`.woff`}var x=m.get(a);x??(x=m.size,m.set(a,x)),y[n]=x}r>65535&&(n++,y[n]=y[n-1])}return{fontUrls:Array.from(m.keys()),chars:y}}))},Object.defineProperty(e,`__esModule`,{value:!0}),e}({})}function jd(e,t){let n=Object.create(null),r=Object.create(null);function i(t,n){let r=e=>{console.error(`Failure loading font ${t}`,e)};try{let i=new XMLHttpRequest;i.open(`get`,t,!0),i.responseType=`arraybuffer`,i.onload=function(){if(i.status>=400)r(Error(i.statusText));else if(i.status>0)try{let r=e(i.response);r.src=t,n(r)}catch(e){r(e)}},i.onerror=r,i.send()}catch(e){r(e)}}function a(e,t){let a=n[e];a?t(a):r[e]?r[e].push(t):(r[e]=[t],i(e,t=>{t.src=e,n[e]=t,r[e].forEach(e=>e(t)),delete r[e]}))}return function(e,r,{lang:i,fonts:o=[],style:s=`normal`,weight:c=`normal`,unicodeFontsURL:l}={}){let u=new Uint8Array(e.length),d=[];e.length||h();let f=new Map,p=[];if(s!==`italic`&&(s=`normal`),typeof c!=`number`&&(c=c===`bold`?700:400),o&&!Array.isArray(o)&&(o=[o]),o=o.slice().filter(e=>!e.lang||e.lang.test(i)).reverse(),o.length){let t=0;(function r(i=0){for(let s=i,c=e.length;s<c;s++){let i=e.codePointAt(s);if(t===1&&d[u[s-1]].supportsCodePoint(i)||s>0&&/\s/.test(e[s]))u[s]=u[s-1],t===2&&(p[p.length-1][1]=s);else for(let e=u[s],c=o.length;e<=c;e++)if(e===c){let e=t===2?p[p.length-1]:p[p.length]=[s,s];e[1]=s,t=2}else{u[s]=e;let{src:c,unicodeRange:l}=o[e];if(!l||g(i,l)){let e=n[c];if(!e){a(c,()=>{r(s)});return}if(e.supportsCodePoint(i)){let n=f.get(e);typeof n!=`number`&&(n=d.length,d.push(e),f.set(e,n)),u[s]=n,t=1;break}}}i>65535&&s+1<c&&(u[s+1]=u[s],s++,t===2&&(p[p.length-1][1]=s))}m()})()}else p.push([0,e.length-1]),m();function m(){if(p.length){let n=p.map(t=>e.substring(t[0],t[1]+1)).join(`
`);t.getFontsForString(n,{lang:i||void 0,style:s,weight:c,dataUrl:l}).then(({fontUrls:e,chars:t})=>{let n=d.length,r=0;p.forEach(e=>{for(let i=0,a=e[1]-e[0];i<=a;i++)u[e[0]+i]=t[r++]+n;r++});let i=0;e.forEach((t,r)=>{a(t,t=>{d[r+n]=t,++i===e.length&&h()})})})}else h()}function h(){r({chars:u,fonts:d})}function g(e,t){for(let n=0;n<t.length;n++){let[r,i=r]=t[n];if(r<=e&&e<=i)return!0}return!1}}}var Md=rd({name:`FontResolver`,dependencies:[jd,kd,Ad],init(e,t,n){return e(t,n())}});function Nd(e,t){let n=1/0,r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i=`[^\\S\\u00A0]`,a=RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:t,lang:n,fonts:r,style:i,weight:a,preResolvedFonts:o,unicodeFontsURL:s},c){let l=({chars:e,fonts:t})=>{let n,r,i=[];for(let a=0;a<e.length;a++)e[a]===r?n.end=a:(r=e[a],i.push(n={start:a,end:a,fontObj:t[e[a]]}));c(i)};o?l(o):e(t,l,{lang:n,fonts:r,style:i,weight:a,unicodeFontsURL:s})}function s({text:e=``,font:s,lang:c,sdfGlyphSize:p=64,fontSize:m=400,fontWeight:h=1,fontStyle:g=`normal`,letterSpacing:_=0,lineHeight:v=`normal`,maxWidth:y=n,direction:b,textAlign:x=`left`,textIndent:S=0,whiteSpace:C=`normal`,overflowWrap:w=`normal`,anchorX:T=0,anchorY:E=0,metricsOnly:D=!1,unicodeFontsURL:O,preResolvedFonts:k=null,includeCaretPositions:A=!1,chunkedBoundsSize:j=8192,colorRanges:ee=null},M){let N=d(),te={fontLoad:0,typesetting:0};e.indexOf(`\r`)>-1&&(console.info(`Typesetter: got text with \\r chars; normalizing to \\n`),e=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),m=+m,_=+_,y=+y,v||=`normal`,S=+S,o({text:e,lang:c,style:g,weight:h,fonts:typeof s==`string`?[{src:s}]:s,unicodeFontsURL:O,preResolvedFonts:k},o=>{te.fontLoad=d()-N;let s=isFinite(y),c=null,p=null,h=null,g=null,O=null,k=null,P=null,ne=null,re=0,F=0,ie=C!==`nowrap`,ae=new Map,oe=d(),I=S,se=0,L=new f,R=[L];o.forEach(t=>{let{fontObj:n}=t,{ascender:o,descender:c,unitsPerEm:l,lineGap:u,capHeight:d,xHeight:p}=n,h=ae.get(n);if(!h){let e=m/l,t=v===`normal`?(o-c+u)*e:v*m,r=(t-(o-c)*e)/2,i=Math.min(t,(o-c)*e),a=(o+c)/2*e+i/2;h={index:ae.size,src:n.src,fontObj:n,fontSizeMult:e,unitsPerEm:l,ascender:o*e,descender:c*e,capHeight:d*e,xHeight:p*e,lineHeight:t,baseline:-r-o*e,caretTop:a,caretBottom:a-i},ae.set(n,h)}let{fontSizeMult:g}=h,b=e.slice(t.start,t.end+1),x,C;n.forEachGlyph(b,m,_,(n,o,c,l)=>{o+=se,l+=t.start,x=o,C=n;let u=e.charAt(l),d=n.advanceWidth*g,p=L.count,v;if(`isEmpty`in n||(n.isWhitespace=!!u&&new RegExp(i).test(u),n.canBreakAfter=!!u&&a.test(u),n.isEmpty=n.xMin===n.xMax||n.yMin===n.yMax||r.test(u)),!n.isWhitespace&&!n.isEmpty&&F++,ie&&s&&!n.isWhitespace&&o+d+I>y&&p){if(L.glyphAt(p-1).glyphObj.canBreakAfter)v=new f,I=-o;else for(let e=p;e--;)if(e===0&&w===`break-word`){v=new f,I=-o;break}else if(L.glyphAt(e).glyphObj.canBreakAfter){v=L.splitAt(e+1);let t=v.glyphAt(0).x;I-=t;for(let e=v.count;e--;)v.glyphAt(e).x-=t;break}v&&(L.isSoftWrapped=!0,L=v,R.push(L),re=y)}let b=L.glyphAt(L.count);b.glyphObj=n,b.x=o+I,b.y=c,b.width=d,b.charIndex=l,b.fontData=h,u===`
`&&(L=new f,R.push(L),I=-(o+d+_*m)+S)}),se=x+C.advanceWidth*g+_*m});let z=0;R.forEach(e=>{let t=!0;for(let n=e.count;n--;){let r=e.glyphAt(n);t&&!r.glyphObj.isWhitespace&&(e.width=r.x+r.width,e.width>re&&(re=e.width),t=!1);let{lineHeight:i,capHeight:a,xHeight:o,baseline:s}=r.fontData;i>e.lineHeight&&(e.lineHeight=i);let c=s-e.baseline;c<0&&(e.baseline+=c,e.cap+=c,e.ex+=c),e.cap=Math.max(e.cap,e.baseline+a),e.ex=Math.max(e.ex,e.baseline+o)}e.baseline-=z,e.cap-=z,e.ex-=z,z+=e.lineHeight});let B=0,V=0;if(T&&(typeof T==`number`?B=-T:typeof T==`string`&&(B=-re*(T===`left`?0:T===`center`?.5:T===`right`?1:l(T)))),E&&(typeof E==`number`?V=-E:typeof E==`string`&&(V=E===`top`?0:E===`top-baseline`?-R[0].baseline:E===`top-cap`?-R[0].cap:E===`top-ex`?-R[0].ex:E===`middle`?z/2:E===`bottom`?z:E===`bottom-baseline`?-R[R.length-1].baseline:l(E)*z)),!D){let r=t.getEmbeddingLevels(e,b);c=new Uint16Array(F),p=new Uint8Array(F),h=new Float32Array(F*2),g={},P=[n,n,-n,-n],ne=[],A&&(k=new Float32Array(e.length*4)),ee&&(O=new Uint8Array(F*3));let i=0,a=-1,o=-1,s,l;if(R.forEach((d,f)=>{let{count:m,width:_}=d;if(m>0){let f=0;for(let e=m;e--&&d.glyphAt(e).glyphObj.isWhitespace;)f++;let v=0,y=0;if(x===`center`)v=(re-_)/2;else if(x===`right`)v=re-_;else if(x===`justify`&&d.isSoftWrapped){let e=0;for(let t=m-f;t--;)d.glyphAt(t).glyphObj.isWhitespace&&e++;y=(re-_)/e}if(y||v){let e=0;for(let t=0;t<m;t++){let n=d.glyphAt(t),r=n.glyphObj;n.x+=v+e,y!==0&&r.isWhitespace&&t<m-f&&(e+=y,n.width+=y)}}let b=t.getReorderSegments(e,r,d.glyphAt(0).charIndex,d.glyphAt(d.count-1).charIndex);for(let e=0;e<b.length;e++){let[t,n]=b[e],r=1/0,i=-1/0;for(let e=0;e<m;e++)if(d.glyphAt(e).charIndex>=t){let t=e,a=e;for(;a<m;a++){let e=d.glyphAt(a);if(e.charIndex>n)break;a<m-f&&(r=Math.min(r,e.x),i=Math.max(i,e.x+e.width))}for(let e=t;e<a;e++){let t=d.glyphAt(e);t.x=i-(t.x+t.width-r)}break}}let S,C=e=>S=e;for(let f=0;f<m;f++){let m=d.glyphAt(f);S=m.glyphObj;let _=S.index,v=r.levels[m.charIndex]&1;if(v){let n=t.getMirroredCharacter(e[m.charIndex]);n&&m.fontData.fontObj.forEachGlyph(n,0,0,C)}if(A){let{charIndex:e,fontData:t}=m,n=m.x+B,r=m.x+m.width+B;k[e*4]=v?r:n,k[e*4+1]=v?n:r,k[e*4+2]=d.baseline+t.caretBottom+V,k[e*4+3]=d.baseline+t.caretTop+V;let i=e-a;i>1&&u(k,a,i),a=e}if(ee){let{charIndex:e}=m;for(;e>o;)o++,ee.hasOwnProperty(o)&&(l=ee[o])}if(!S.isWhitespace&&!S.isEmpty){let e=i++,{fontSizeMult:t,src:r,index:a}=m.fontData,o=g[r]||(g[r]={});o[_]||(o[_]={path:S.path,pathBounds:[S.xMin,S.yMin,S.xMax,S.yMax]});let u=m.x+B,f=m.y+d.baseline+V;h[e*2]=u,h[e*2+1]=f;let v=u+S.xMin*t,y=f+S.yMin*t,b=u+S.xMax*t,x=f+S.yMax*t;v<P[0]&&(P[0]=v),y<P[1]&&(P[1]=y),b>P[2]&&(P[2]=b),x>P[3]&&(P[3]=x),e%j===0&&(s={start:e,end:e,rect:[n,n,-n,-n]},ne.push(s)),s.end++;let C=s.rect;if(v<C[0]&&(C[0]=v),y<C[1]&&(C[1]=y),b>C[2]&&(C[2]=b),x>C[3]&&(C[3]=x),c[e]=_,p[e]=a,ee){let t=e*3;O[t]=l>>16&255,O[t+1]=l>>8&255,O[t+2]=l&255}}}}}),k){let t=e.length-a;t>1&&u(k,a,t)}}let ce=[];ae.forEach(({index:e,src:t,unitsPerEm:n,ascender:r,descender:i,lineHeight:a,capHeight:o,xHeight:s})=>{ce[e]={src:t,unitsPerEm:n,ascender:r,descender:i,lineHeight:a,capHeight:o,xHeight:s}}),te.typesetting=d()-oe,M({glyphIds:c,glyphFontIndices:p,glyphPositions:h,glyphData:g,fontData:ce,caretPositions:k,glyphColors:O,chunkedBounds:ne,fontSize:m,topBaseline:V+R[0].baseline,blockBounds:[B,V-z,B+re,V],visibleBounds:P,timings:te})})}function c(e,t){s({...e,metricsOnly:!0},e=>{let[n,r,i,a]=e.blockBounds;t({width:i-n,height:a-r})})}function l(e){let t=e.match(/^([\d.]+)%$/),n=t?parseFloat(t[1]):NaN;return isNaN(n)?0:n/100}function u(e,t,n){let r=e[t*4],i=e[t*4+1],a=e[t*4+2],o=e[t*4+3],s=(i-r)/n;for(let i=0;i<n;i++){let n=(t+i)*4;e[n]=r+s*i,e[n+1]=r+s*(i+1),e[n+2]=a,e[n+3]=o}}function d(){return(self.performance||Date).now()}function f(){this.data=[]}let p=[`glyphObj`,`x`,`y`,`width`,`charIndex`,`fontData`];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/p.length)},glyphAt(e){let t=f.flyweight;return t.data=this.data,t.index=e,t},splitAt(e){let t=new f;return t.data=this.data.splice(e*p.length),t}},f.flyweight=p.reduce((e,t,n,r)=>(Object.defineProperty(e,t,{get(){return this.data[this.index*p.length+n]},set(e){this.data[this.index*p.length+n]=e}}),e),{data:null,index:0}),{typeset:s,measure:c}}var Pd=()=>(self.performance||Date).now(),Fd=cd(),Id;function Ld(e,t,n,r,i,a,o,s,c,l,u=!0){return u?Hd(e,t,n,r,i,a,o,s,c,l).then(null,u=>(Id||=(console.warn(`WebGL SDF generation failed, falling back to JS`,u),!0),qd(e,t,n,r,i,a,o,s,c,l))):qd(e,t,n,r,i,a,o,s,c,l)}var Rd=[],zd=5,Bd=0;function Vd(){let e=Pd();for(;Rd.length&&Pd()-e<zd;)Rd.shift()();Bd=Rd.length?setTimeout(Vd,0):0}var Hd=(...e)=>new Promise((t,n)=>{Rd.push(()=>{let r=Pd();try{Fd.webgl.generateIntoCanvas(...e),t({timing:Pd()-r})}catch(e){n(e)}}),Bd||=setTimeout(Vd,0)}),Ud=4,Wd=2e3,Gd={},Kd=0;function qd(e,t,n,r,i,a,o,s,c,l){let u=`TroikaTextSDFGenerator_JS_`+ Kd++%Ud,d=Gd[u];return d||=Gd[u]={workerModule:rd({name:u,workerId:u,dependencies:[cd,Pd],init(e,t){let n=e().javascript.generate;return function(...e){let r=t();return{textureData:n(...e),timing:t()-r}}},getTransferables(e){return[e.textureData.buffer]}}),requests:0,idleTimer:null},d.requests++,clearTimeout(d.idleTimer),d.workerModule(e,t,n,r,i,a).then(({textureData:n,timing:r})=>{let i=Pd(),a=new Uint8Array(n.length*4);for(let e=0;e<n.length;e++)a[e*4+l]=n[e];return Fd.webglUtils.renderImageData(o,a,s,c,e,t,1<<3-l),r+=Pd()-i,--d.requests===0&&(d.idleTimer=setTimeout(()=>{id(u)},Wd)),{timing:r}})}function Jd(e){e._warm||=(Fd.webgl.isSupported(e),!0)}var Yd=Fd.webglUtils.resizeWebGLCanvasWithoutClearing,Xd={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048,useWorker:!0},Zd=new mi;function Qd(){return(self.performance||Date).now()}var $d=Object.create(null);function ef(e,t){e=rf({},e);let n=Qd(),{defaultFontURL:r}=Xd,i=[];if(r&&i.push({label:`default`,src:of(r)}),e.font&&i.push({label:`user`,src:of(e.font)}),e.font=i,e.text=``+e.text,e.sdfGlyphSize=e.sdfGlyphSize||Xd.sdfGlyphSize,e.unicodeFontsURL=e.unicodeFontsURL||Xd.unicodeFontsURL,e.colorRanges!=null){let t={};for(let n in e.colorRanges)if(e.colorRanges.hasOwnProperty(n)){let r=e.colorRanges[n];typeof r!=`number`&&(r=Zd.set(r).getHex()),t[n]=r}e.colorRanges=t}Object.freeze(e);let{textureWidth:a,sdfExponent:o}=Xd,{sdfGlyphSize:s}=e,c=a/s*4,l=$d[s];if(!l){let e=document.createElement(`canvas`);e.width=a,e.height=s*256/c,l=$d[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:e,sdfTexture:new Dr(e,void 0,void 0,void 0,gt,gt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,nf(l)}let{sdfTexture:u,sdfCanvas:d}=l;(Xd.useWorker?cf:lf)(e).then(r=>{let{glyphIds:i,glyphFontIndices:f,fontData:p,glyphPositions:m,fontSize:h,timings:g}=r,_=[],v=new Float32Array(i.length*4),y=0,b=0,x=Qd(),S=p.map(e=>{let t=l.glyphsByFont.get(e.src);return t||l.glyphsByFont.set(e.src,t=new Map),t});i.forEach((e,t)=>{let n=f[t],{src:a,unitsPerEm:o}=p[n],c=S[n].get(e);if(!c){let{path:t,pathBounds:i}=r.glyphData[a][e],o=Math.max(i[2]-i[0],i[3]-i[1])/s*(Xd.sdfMargin*s+.5),u=l.glyphCount++,d=[i[0]-o,i[1]-o,i[2]+o,i[3]+o];S[n].set(e,c={path:t,atlasIndex:u,sdfViewBox:d}),_.push(c)}let{sdfViewBox:u}=c,d=m[b++],g=m[b++],x=h/o;v[y++]=d+u[0]*x,v[y++]=g+u[1]*x,v[y++]=d+u[2]*x,v[y++]=g+u[3]*x,i[t]=c.atlasIndex}),g.quads=(g.quads||0)+(Qd()-x);let C=Qd();g.sdf={};let w=d.height,T=Math.ceil(l.glyphCount/c),E=2**Math.ceil(Math.log2(T*s));E>w&&(console.info(`Increasing SDF texture size ${w}->${E}`),Yd(d,a,E),u.dispose()),Promise.all(_.map(t=>tf(t,l,e.gpuAccelerateSDF).then(({timing:e})=>{g.sdf[t.atlasIndex]=e}))).then(()=>{_.length&&!l.contextLost&&(sf(l),u.needsUpdate=!0),g.sdfTotal=Qd()-C,g.total=Qd()-n,t(Object.freeze({parameters:e,sdfTexture:u,sdfGlyphSize:s,sdfExponent:o,glyphBounds:v,glyphAtlasIndices:i,glyphColors:r.glyphColors,caretPositions:r.caretPositions,chunkedBounds:r.chunkedBounds,ascender:r.ascender,descender:r.descender,lineHeight:r.lineHeight,capHeight:r.capHeight,xHeight:r.xHeight,topBaseline:r.topBaseline,blockBounds:r.blockBounds,visibleBounds:r.visibleBounds,timings:r.timings}))})}),Promise.resolve().then(()=>{l.contextLost||Jd(d)})}function tf({path:e,atlasIndex:t,sdfViewBox:n},{sdfGlyphSize:r,sdfCanvas:i,contextLost:a},o){if(a)return Promise.resolve({timing:-1});let{textureWidth:s,sdfExponent:c}=Xd,l=Math.max(n[2]-n[0],n[3]-n[1]),u=Math.floor(t/4);return Ld(r,r,e,n,l,c,i,u%(s/r)*r,Math.floor(u/(s/r))*r,t%4,o)}function nf(e){let t=e.sdfCanvas;t.addEventListener(`webglcontextlost`,t=>{console.log(`Context Lost`,t),t.preventDefault(),e.contextLost=!0}),t.addEventListener(`webglcontextrestored`,t=>{console.log(`Context Restored`,t),e.contextLost=!1;let n=[];e.glyphsByFont.forEach(t=>{t.forEach(t=>{n.push(tf(t,e,!0))})}),Promise.all(n).then(()=>{sf(e),e.sdfTexture.needsUpdate=!0})})}function rf(e,t){for(let n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var af;function of(e){return af||=typeof document>`u`?{}:document.createElement(`a`),af.href=e,af.href}function sf(e){if(typeof createImageBitmap!=`function`){console.info(`Safari<15: applying SDF canvas workaround`);let{sdfCanvas:t,sdfTexture:n}=e,{width:r,height:i}=t,a=e.sdfCanvas.getContext(`webgl`),o=n.image.data;(!o||o.length!==r*i*4)&&(o=new Uint8Array(r*i*4),n.image={width:r,height:i,data:o},n.flipY=!1,n.isDataTexture=!0),a.readPixels(0,0,r,i,a.RGBA,a.UNSIGNED_BYTE,o)}}var cf=rd({name:`Typesetter`,dependencies:[rd({name:`Typesetter`,dependencies:[Nd,Md,ld],init(e,t,n){return e(t,n())}})],init(e){return function(t){return new Promise(n=>{e.typeset(t,n)})}},getTransferables(e){let t=[];for(let n in e)e[n]&&e[n].buffer&&t.push(e[n].buffer);return t}}),lf=cf.onMainThread,uf={};function df(e){let t=uf[e];return t||=uf[e]=new so(1,1,e,e).translate(.5,.5,0),t}var ff=`aTroikaGlyphBounds`,pf=`aTroikaGlyphIndex`,mf=`aTroikaGlyphColor`,hf=class extends qo{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new na,this.boundingBox=new ji}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!=`number`||e<1)&&(e=1);let t=df(e);[`position`,`normal`,`uv`].forEach(e=>{this.attributes[e]=t.attributes[e].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,r,i){this.updateAttributeData(ff,e,4),this.updateAttributeData(pf,t,1),this.updateAttributeData(mf,i,3),this._blockBounds=n,this._chunkedBounds=r,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){let e=this._blockBounds;if(e){let{curveRadius:t,boundingBox:n}=this;if(t){let{PI:r,floor:i,min:a,max:o,sin:s,cos:c}=Math,l=r/2,u=r*2,d=Math.abs(t),f=e[0]/d,p=e[2]/d,m=i((f+l)/u)===i((p+l)/u)?a(s(f)*d,s(p)*d):-d,h=i((f-l)/u)===i((p-l)/u)?o(s(f)*d,s(p)*d):d,g=i((f+r)/u)===i((p+r)/u)?o(d-c(f)*d,d-c(p)*d):d*2;n.min.set(m,e[1],t<0?-g:0),n.max.set(h,e[3],t<0?0:g)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(pf).count,n=this._chunkedBounds;if(n)for(let r=n.length;r--;){t=n[r].end;let i=n[r].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,n){let r=this.getAttribute(e);t?r&&r.array.length===t.length?(r.array.set(t),r.needsUpdate=!0):(this.setAttribute(e,new La(t,n)),delete this._maxInstanceCount,this.dispose()):r&&this.deleteAttribute(e)}},gf=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,_f=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,vf=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,yf=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function bf(e){let t=yd(e,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new lr},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new Or(0,0,0,0)},uTroikaClipRect:{value:new Or(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new lr},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new mi},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Z},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:gf,vertexTransform:_f,fragmentDefs:vf,fragmentColorTransform:yf,customRewriter({vertexShader:e,fragmentShader:t}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(t)&&(t=t.replace(n,`varying vec3 vTroikaGlyphColor`).replace(/\bdiffuse\b/g,`vTroikaGlyphColor`),n.test(e)||(e=e.replace(ud,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:e,fragmentShader:t}}});return t.transparent=!0,t.forceSinglePass=!0,Object.defineProperties(t,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),t}var xf=new xa({color:16777215,side:2,transparent:!0}),Sf=8421504,Cf=new Nr,wf=new X,Tf=new X,Ef=[],Df=new X,Of=`+x+y`;function kf(e){return Array.isArray(e)?e[0]:e}var Af=()=>{let e=new Na(new so(1,1),xf);return Af=()=>e,e},jf=()=>{let e=new Na(new so(1,1,32,1),xf);return jf=()=>e,e},Mf={type:`syncstart`},Nf={type:`synccomplete`},Pf=[`font`,`fontSize`,`fontStyle`,`fontWeight`,`lang`,`letterSpacing`,`lineHeight`,`maxWidth`,`overflowWrap`,`text`,`direction`,`textAlign`,`textIndent`,`whiteSpace`,`anchorX`,`anchorY`,`colorRanges`,`sdfGlyphSize`],Ff=Pf.concat(`material`,`color`,`depthOffset`,`clipRect`,`curveRadius`,`orientation`,`glyphGeometryDetail`),If=class extends Na{constructor(){let e=new hf;super(e,null),this.text=``,this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction=`auto`,this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight=`normal`,this.fontStyle=`normal`,this.lang=null,this.letterSpacing=0,this.lineHeight=`normal`,this.maxWidth=1/0,this.overflowWrap=`normal`,this.textAlign=`left`,this.textIndent=0,this.whiteSpace=`normal`,this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Sf,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Of,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||=[]).push(e):(this._isSyncing=!0,this.dispatchEvent(Mf),ef({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||`normal`,fontStyle:this.fontStyle||`normal`,letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||`normal`,maxWidth:this.maxWidth,direction:this.direction||`auto`,textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);let n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(e=>e&&e())})),this.dispatchEvent(Nf),e&&e()})))}onBeforeRender(e,t,n,r,i,a){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return bf(e)}get material(){let e=this._derivedMaterial,t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=xf.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener(`dispose`,function n(){t.removeEventListener(`dispose`,n),e.dispose()})),this.hasOutline()){let t=e._outlineMtl;return t||(t=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),t.isTextOutlineMaterial=!0,t.depthWrite=!1,t.map=null,e.addEventListener(`dispose`,function n(){e.removeEventListener(`dispose`,n),t.dispose()})),[t,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return kf(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return kf(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){let t=e.isTextOutlineMaterial,n=e.uniforms,r=this.textRenderInfo;if(r){let{sdfTexture:e,blockBounds:i}=r;n.uTroikaSDFTexture.value=e,n.uTroikaSDFTextureSize.value.set(e.image.width,e.image.height),n.uTroikaSDFGlyphSize.value=r.sdfGlyphSize,n.uTroikaSDFExponent.value=r.sdfExponent,n.uTroikaTotalBounds.value.fromArray(i),n.uTroikaUseGlyphColors.value=!t&&!!r.glyphColors;let a=0,o=0,s=0,c,l,u,d=0,f=0;if(t){let{outlineWidth:e,outlineOffsetX:t,outlineOffsetY:n,outlineBlur:r,outlineOpacity:i}=this;a=this._parsePercent(e)||0,o=Math.max(0,this._parsePercent(r)||0),c=i,d=this._parsePercent(t)||0,f=this._parsePercent(n)||0}else s=Math.max(0,this._parsePercent(this.strokeWidth)||0),s&&(u=this.strokeColor,n.uTroikaStrokeColor.value.set(u??Sf),l=this.strokeOpacity,l??=1),c=this.fillOpacity;n.uTroikaEdgeOffset.value=a,n.uTroikaPositionOffset.value.set(d,f),n.uTroikaBlurRadius.value=o,n.uTroikaStrokeWidth.value=s,n.uTroikaStrokeOpacity.value=l,n.uTroikaFillOpacity.value=c??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)n.uTroikaClipRect.value.fromArray(p);else{let e=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(i[0]-e,i[1]-e,i[2]+e,i[3]+e)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;let i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{let t=e.hasOwnProperty(`color`)?e.color:e.color=new mi;(i!==t._input||typeof i==`object`)&&t.set(t._input=i)}let a=this.orientation||Of;if(a!==e._orientation){let t=n.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,``);let r=a!==Of&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(r){let[,e,n,i,a]=r;wf.set(0,0,0)[n]=e===`-`?1:-1,Tf.set(0,0,0)[a]=i===`-`?-1:1,Cf.lookAt(Df,wf.cross(Tf),Tf),t.setFromMatrix4(Cf)}else t.identity();e._orientation=a}}_parsePercent(e){if(typeof e==`string`){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new lr){t.copy(e);let n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new lr){return wf.copy(e),this.localPositionToTextCoords(this.worldToLocal(wf),t)}raycast(e,t){let{textRenderInfo:n,curveRadius:r}=this;if(n){let i=n.blockBounds,a=r?jf():Af(),o=a.geometry,{position:s,uv:c}=o.attributes;for(let e=0;e<c.count;e++){let t=i[0]+c.getX(e)*(i[2]-i[0]),n=i[1]+c.getY(e)*(i[3]-i[1]),a=0;r&&(a=r-Math.cos(t/r)*r,t=Math.sin(t/r)*r),s.setXYZ(e,t,n,a)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Ef.length=0,a.raycast(e,Ef);for(let e=0;e<Ef.length;e++)Ef[e].object=this,t.push(Ef[e])}}copy(e){let t=this.geometry;return super.copy(e),this.geometry=t,Ff.forEach(t=>{this[t]=e[t]}),this}clone(){return new this.constructor().copy(this)}};Pf.forEach(e=>{let t=`_private_`+e;Object.defineProperty(If.prototype,e,{get(){return this[t]},set(e){e!==this[t]&&(this[t]=e,this._needsSync=!0)}})}),new ji,new mi;var Lf=class extends Uu{scale;currentText;mesh;constructor(e,t){super(e,t),this.scale=1,this.currentText=`Hello Light!`,this.createScene()}reset(){this.update(this.currentText,null),this.mesh.fontSize=this.width/12,this.mesh.material.uniforms.width.value=this.width}createScene(){this.mesh=new If,this.mesh.material=new vo({uniforms:{time:{value:null},width:{value:null}},vertexShader:`
            varying vec2 vUv;
            varying float vIndex;
            uniform float time;
            uniform float width;

            void main() {
                vUv = uv;
                vIndex = aTroikaGlyphBounds.x;

                float norm = (aTroikaGlyphBounds.x + width / 2.0) / width;

                float offset = 0.0; //sin(norm * 3.5 + time * 1.7) * width * 0.03;

                vec4 mvPosition = modelMatrix * vec4(position, 1.0);
                mvPosition.x += offset;

                gl_Position = projectionMatrix * viewMatrix * mvPosition;
            }
        `,fragmentShader:`
            precision highp float;
            varying vec2 vUv;
            varying float vIndex;
            uniform float time;

            //https://iquilezles.org/articles/palettes/
            vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
                return a + b*cos(6.28318*(c*t+d));
            }

            void main() {
                vec2 p = vUv * 2.0;

                for(int i = 1; i < 10; i++) {
                    p.x += 0.4 / float(i) * sin(float(i) * 3.0 * p.y + time * 1.0 + vIndex);
                    p.y += 0.4 / float(i) * cos(float(i) * 3.0 * p.x + time * 1.0 + vIndex);
                }

                float r = cos(p.x + p.y + 1.0 + time) * 0.5 + 0.5;

                //0.8, 0.5, 0.4        0.2, 0.4, 0.2    2.0, 1.0, 1.0    0.00, 0.25, 0.25
                //0.5, 0.5, 0.5        0.5, 0.5, 0.5    1.0, 1.0, 1.0    0.30, 0.20, 0.20
                //0.5, 0.5, 0.5        0.5, 0.5, 0.5    1.0, 0.7, 0.4    0.00, 0.15, 0.20
                //0.5, 0.5, 0.5        0.5, 0.5, 0.5    1.0, 1.0, 1.0    0.00, 0.10, 0.20

                vec3 c0 = vec3(0.5, 0.5, 0.5);
                vec3 c1 = vec3(0.5, 0.5, 0.5);
                vec3 c2 = vec3(1.0, 1.0, 1.0);
                vec3 c3 = vec3(0.00, 0.10, 0.20);

                vec3 paletteColor = palette(r, c0, c1, c2, c3);
                gl_FragColor = vec4(paletteColor, 1.0);
            }`}),this.mesh.material.uniforms.width.value=this.width,this.mesh.fontSize=this.width/12,this.mesh.textAlign=`center`,this.mesh.anchorX=`center`,this.mesh.anchorY=`middle`,this.mesh.overflowWrap=`break-word`,this.mesh.material.defines.IS_DEPTH_MATERIAL=``,this.scene.add(this.mesh),this.volScene=this.scene,this.update(this.currentText,null)}update(e,t){this.scale=t?.scale??this.scale,e&&(this.currentText=e,this.mesh.text=this.currentText,this.mesh.sync()),this.mesh.maxWidth=this.width/this.scale,this.mesh.scale.set(this.scale,this.scale,1),this.mesh.material.uniforms.time.value=performance.now()*.001}volumetrics(e){}dispose(){this.mesh.material.dispose(),this.mesh.dispose()}},Rf=class{isReady;timedLyrics;prevIndex;abortController;async getLRCLIB(e,t){this.abortController&&this.abortController.abort(),this.abortController=new AbortController,this.isReady=!1,this.timedLyrics=[];let n=new URLSearchParams({track_name:e,artist_name:t}),r=await fetch(`https://lrclib.net/api/search?${n.toString()}`,{headers:{"x-user-agent":`Lights! v0.1.0 (https://github.com/HalilB84/lights)`},signal:this.abortController.signal}).catch(e=>{e.name===`AbortError`&&console.log(`aborted`)});if(!r){this.isReady=!0;return}if(!r.ok){console.log(`Error getting lyrics, LRCLIB didn't respond or something else went wrong`),this.isReady=!0;return}let i=await r.json();if(i.length===0){console.log(`No lyrics found`),this.isReady=!0;return}let a=i[0].syncedLyrics?.split(`
`)||[];i[0].instrumental==1&&(this.timedLyrics=[{time:0,lyric:`Instrumental`}]);for(let e of a){let t=e.substring(1,9).split(`:`),n=e.substring(10).trim();this.timedLyrics.push({time:parseFloat(t[0])*60+parseFloat(t[1]),lyric:n})}this.prevIndex=-1,this.isReady=!0}update(e){if(this.timedLyrics.length===0)return[`No lyrics found`,`init`];let t=this.timedLyrics.findLastIndex(t=>e>=t.time);if(t>=0){let e=t!==this.prevIndex;return this.prevIndex=t,[this.timedLyrics[t].lyric,e?`changed`:`null`]}return[`(Music)`,`init`]}},zf=class extends Uu{circles;videoTexture;mesh;volMesh;material;volMaterial;constructor(e,t){super(e,t),this.circles=[],this.videoTexture=null,this.createScene()}reset(){this.dispose(),this.scene.clear(),this.volScene.clear(),this.circles=[],this.createScene()}createScene(){let e=new oo(1,16),t=new co(.8,1,32,1,0);this.material=Ku(),this.material.uniforms.resolution.value=[this.width,this.height],this.volMaterial=new xa({blending:0,opacity:.5,color:new mi().setRGB(0,0,0)}),this.mesh=new Ga(t,this.material,48),this.volMesh=new Ga(e,this.volMaterial,52);let n=new oi,r=0,i=0;for(let e=0;e<10;e++)for(let t=0;t<10;t++){let a=this.width/10*(t+.5)-this.width/2,o=this.height/10*(e+.5)-this.height/2,s=Math.min(this.width,this.height)/50;n.position.set(a,o,0),n.scale.set(s,s,1),n.updateMatrix(),e<=1||t<=0||e>=8||t>=9?(this.volMesh.setMatrixAt(i,n.matrix),i+=1):(this.mesh.setMatrixAt(r,n.matrix),r+=1)}this.scene.add(this.mesh),this.scene.add(this.volMesh)}update(e){this.material.uniforms.videoTexture.value=e,this.material.uniforms.init.value=!e}volumetrics(e){e?this.volScene.add(this.mesh):this.scene.add(this.mesh)}dispose(){this.mesh.geometry.dispose(),this.volMesh.geometry.dispose(),this.material?.dispose(),this.volMaterial?.dispose()}};function Bf(){return new vo({uniforms:{m:{value:null},pm:{value:null},resolution:{value:null},size:{value:null},color:{value:null},alpha:{value:null},prev:{value:null}},glslVersion:Bn,vertexShader:`
            out vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;

            in vec2 vUv;

            uniform vec2 m;
            uniform vec2 pm;
            uniform vec2 resolution;
            uniform float size;
            uniform vec3 color;
            uniform float alpha;
            uniform sampler2D prev;

            out vec4 fragColor;

            //https://iquilezles.org/articles/distfunctions2d/
            float sdSegment( in vec2 p, in vec2 a, in vec2 b, in float r ) {
                vec2 ba = b-a;
                vec2 pa = p-a;
                float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
                return length(pa-h*ba)-r;
            }

            void main() {

                fragColor = texture(prev, vUv);

                if(sdSegment(vUv * resolution, pm, m, size) < 0.0) {
                    fragColor = vec4(color, alpha);
                }
            }
        `})}var Vf=class extends Uu{meshDraw;sceneDraw;mesh;meshOverlay;ping;pong;constructor(e,t){super(e,t),this.createScene()}reset(){this.scene.clear(),this.volScene.clear(),this.dispose(),this.createScene()}createScene(){this.ping=new Ar(this.width,this.height),this.pong=this.ping.clone();let e=new so(this.width,this.height),t=Bf();this.meshDraw=new Na(e,t),this.meshDraw.material.uniforms.resolution.value=[this.width,this.height],this.sceneDraw=new gi,this.sceneDraw.add(this.meshDraw),this.mesh=new Na(e,new xa({map:this.pong.texture,blending:0})),this.meshOverlay=new Na(e,new xa({map:this.pong.texture,blending:0,alphaTest:.99})),this.scene.add(this.mesh),this.volScene.add(this.meshOverlay)}update(e,t,n,r,i){i.clear&&(e.setRenderTarget(this.pong),e.clear(),e.setRenderTarget(this.ping),e.clear()),t&&(this.meshDraw.material.uniforms.color.value=[i.color.r/255,i.color.g/255,i.color.b/255],this.meshDraw.material.uniforms.alpha.value=i.alpha,this.meshDraw.material.uniforms.size.value=i.size,this.meshDraw.material.uniforms.m.value=[r.x,r.y],this.meshDraw.material.uniforms.pm.value=[n.x,n.y],this.meshDraw.material.uniforms.prev.value=this.pong.texture,e.setRenderTarget(this.ping),e.render(this.meshDraw,this.camera),this.mesh.material.map=this.ping.texture,this.meshOverlay.material.map=this.ping.texture,[this.ping,this.pong]=[this.pong,this.ping])}volumetrics(e){}dispose(){this.meshDraw.material.dispose(),this.meshDraw.geometry.dispose(),this.mesh.material.dispose(),this.mesh.geometry.dispose(),this.meshOverlay.material.dispose(),this.meshOverlay.geometry.dispose(),this.ping.dispose(),this.pong.dispose()}};new class{canvas;dpr;settings={radiance:0,probeCount:0};video={element:null,texture:null,height:0,width:0,volume:0};audio={element:null,volume:0,loading:!1};ui;hrc;lrcPlayer;active;mouse={x:9999,y:9999};mspos={x:9999,y:9999};pspos={x:9999,y:9999};audioUpdateFunction=()=>{};stats=new Lu({trackGPU:!0,trackHz:!1,trackCPT:!1,logsPerSecond:4,graphsPerSecond:30,samplesLog:40,samplesGraph:10,precision:2,horizontal:!0,minimal:!0,mode:0});lastTime=0;isInput=!1;matchPos=!1;constructor(){this.canvas=document.querySelector(`canvas`),this.dpr=window.devicePixelRatio,this.canvas.addEventListener(`mousemove`,e=>{this.mouse.x=e.clientX,this.mouse.y=this.canvas.clientHeight-e.clientY}),this.canvas.addEventListener(`mousedown`,()=>{this.isInput=!0,this.matchPos=!0}),this.canvas.addEventListener(`mouseup`,()=>{this.isInput=!1}),this.canvas.addEventListener(`mouseleave`,()=>{this.isInput=!1}),this.canvas.addEventListener(`touchmove`,e=>{this.mouse.x=e.touches[0].clientX,this.mouse.y=this.canvas.clientHeight-e.touches[0].clientY}),this.canvas.addEventListener(`touchstart`,e=>{this.isInput=!0,this.mouse.x=e.touches[0].clientX,this.mouse.y=this.canvas.clientHeight-e.touches[0].clientY,this.matchPos=!0}),this.canvas.addEventListener(`touchend`,()=>{this.isInput=!1}),this.ui=new lt(this),this.hrc=new Hu(this),this.lrcPlayer=new Rf,this.active=new Lf(this.hrc.fixWidth,this.hrc.fixHeight)}changeMode(){this.active?.dispose();let e=this.hrc.fixWidth,t=this.hrc.fixHeight;this.ui.mode.value===`video`?this.active=new Wu(e,t):this.ui.mode.value===`lyrics`?this.active=new Lf(e,t):this.ui.mode.value===`balls`?this.active=new qu(e,t):this.ui.mode.value===`holes`?this.active=new zf(e,t):this.ui.mode.value===`draw`&&(this.active=new Vf(e,t))}update(){let e=performance.now(),t=e-this.lastTime;this.lastTime=e;let n={x:this.mouse.x*this.dpr/(this.hrc.width/this.hrc.fixWidth)-this.hrc.fixWidth/2,y:this.mouse.y*this.dpr/(this.hrc.height/this.hrc.fixHeight)-this.hrc.fixHeight/2};this.mspos={x:n.x+this.hrc.fixWidth/2,y:n.y+this.hrc.fixHeight/2},this.matchPos&&=(this.pspos=this.mspos,!1),this.active instanceof Wu?this.active.update(this.video.texture,this.video.width,this.video.height,this.ui.videoPanel.exportState()):this.active instanceof Lf?this.active.update(null,this.ui.lyricsPanel.exportState()):this.active instanceof qu?this.active.update(t,n,this.video.texture,this.ui.ballsPanel.exportState()):this.active instanceof zf?this.active.update(this.video.texture):this.active instanceof Vf&&this.active.update(this.hrc.renderer,this.isInput,this.pspos,this.mspos,this.ui.drawPanel.exportState()),this.pspos=this.mspos}changeRes(){this.hrc.resize()}changeSky(e){this.hrc.sky(e)}setMediaVolume(e){this.video.volume=e,this.audio.volume=e,this.video.element&&(this.video.element.volume=e),this.audio.element&&(this.audio.element.volume=e)}loadVideo(e){this.video.element&&(this.video.element.pause(),URL.revokeObjectURL(this.video.element.src)),this.video.texture?.dispose(),this.video.element=e,this.video.element.volume=this.video.volume,this.video.height=e.videoHeight,this.video.width=e.videoWidth,this.video.texture=new eo(e),this.toggleVideo(!1),this.ui.mode.value===`lyrics`&&(this.ui.mode.value=`video`),this.ui.mode.dispatchEvent(new Event(`change`))}toggleVideo(e){let t=this.video.element;t&&(e?t.pause():t.paused?t.play():t.pause())}loadAudio(e,t,n){this.audio.element&&(this.audio.element.pause(),URL.revokeObjectURL(this.audio.element.src),this.audio.element.removeEventListener(`timeupdate`,this.audioUpdateFunction)),this.audio.element=e,this.audio.element.volume=this.audio.volume,this.active instanceof Lf&&this.active.update(`Loading lyrics...`,null),this.audio.loading=!0,this.lrcPlayer.getLRCLIB(t,n).then(()=>{this.audioUpdateFunction=()=>{let[t,n]=this.lrcPlayer.update(e.currentTime);(n===`init`||n===`changed`)&&this.active instanceof Lf&&this.active.update(t,null)},e.addEventListener(`timeupdate`,this.audioUpdateFunction),this.audio.loading=!1,this.toggleAudio(!1),this.ui.mode.value=`lyrics`,this.ui.mode.dispatchEvent(new Event(`change`))})}toggleAudio(e){let t=this.audio.element;!t||!this.lrcPlayer.isReady||(e?t.pause():t.paused?t.play():t.pause())}};