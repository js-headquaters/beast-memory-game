(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const Xe="https://js-headquaters.github.io/beast-memory-game/backing-93c23538.jpg";var ie,h,Pe,Oe,j,me,Ee,ae,N={},Ne=[],Ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,he=Array.isArray;function x(t,e){for(var i in e)t[i]=e[i];return t}function Be(t){var e=t.parentNode;e&&e.removeChild(t)}function et(t,e,i){var n,r,s,a={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?ie.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)a[s]===void 0&&(a[s]=t.defaultProps[s]);return Y(t,a,n,r,null)}function Y(t,e,i,n,r){var s={type:t,props:e,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Pe};return r==null&&h.vnode!=null&&h.vnode(s),s}function ne(t){return t.children}function G(t,e){this.props=t,this.context=e}function U(t,e){if(e==null)return t.__?U(t.__,t.__.__k.indexOf(t)+1):null;for(var i;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null)return i.__e;return typeof t.type=="function"?U(t):null}function Fe(t){var e,i;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null){t.__e=t.__c.base=i.__e;break}return Fe(t)}}function ge(t){(!t.__d&&(t.__d=!0)&&j.push(t)&&!Q.__r++||me!==h.debounceRendering)&&((me=h.debounceRendering)||Ee)(Q)}function Q(){var t,e,i,n,r,s,a,l,c;for(j.sort(ae);t=j.shift();)t.__d&&(e=j.length,n=void 0,r=void 0,s=void 0,l=(a=(i=t).__v).__e,(c=i.__P)&&(n=[],r=[],(s=x({},a)).__v=a.__v+1,fe(c,a,s,i.__n,c.ownerSVGElement!==void 0,a.__h!=null?[l]:null,n,l??U(a),a.__h,r),Ue(n,a,r),a.__e!=l&&Fe(a)),j.length>e&&j.sort(ae));Q.__r=0}function De(t,e,i,n,r,s,a,l,c,g,v){var o,w,f,u,d,P,p,y,T,$=0,b=n&&n.__k||Ne,D=b.length,A=D,O=e.length;for(i.__k=[],o=0;o<O;o++)(u=i.__k[o]=(u=e[o])==null||typeof u=="boolean"||typeof u=="function"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?Y(null,u,null,null,u):he(u)?Y(ne,{children:u},null,null,null):u.__b>0?Y(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)!=null?(u.__=i,u.__b=i.__b+1,(y=tt(u,b,p=o+$,A))===-1?f=N:(f=b[y]||N,b[y]=void 0,A--),fe(t,u,f,r,s,a,l,c,g,v),d=u.__e,(w=u.ref)&&f.ref!=w&&(f.ref&&de(f.ref,null,u),v.push(w,u.__c||d,u)),d!=null&&(P==null&&(P=d),(T=f===N||f.__v===null)?y==-1&&$--:y!==p&&(y===p+1?$++:y>p?A>O-p?$+=y-p:$--:$=y<p&&y==p-1?y-p:0),p=o+$,typeof u.type!="function"||y===p&&f.__k!==u.__k?typeof u.type=="function"||y===p&&!T?u.__d!==void 0?(c=u.__d,u.__d=void 0):c=d.nextSibling:c=He(t,d,c):c=Ge(u,c,t),typeof i.type=="function"&&(i.__d=c))):(f=b[o])&&f.key==null&&f.__e&&(f.__e==c&&(c=U(f)),le(f,f,!1),b[o]=null);for(i.__e=P,o=D;o--;)b[o]!=null&&(typeof i.type=="function"&&b[o].__e!=null&&b[o].__e==i.__d&&(i.__d=b[o].__e.nextSibling),le(b[o],b[o]))}function Ge(t,e,i){for(var n,r=t.__k,s=0;r&&s<r.length;s++)(n=r[s])&&(n.__=t,e=typeof n.type=="function"?Ge(n,e,i):He(i,n.__e,e));return e}function He(t,e,i){return i==null||i.parentNode!==t?t.insertBefore(e,null):e==i&&e.parentNode!=null||t.insertBefore(e,i),e.nextSibling}function tt(t,e,i,n){var r=t.key,s=t.type,a=i-1,l=i+1,c=e[i];if(c===null||c&&r==c.key&&s===c.type)return i;if(n>(c!=null?1:0))for(;a>=0||l<e.length;){if(a>=0){if((c=e[a])&&r==c.key&&s===c.type)return a;a--}if(l<e.length){if((c=e[l])&&r==c.key&&s===c.type)return l;l++}}return-1}function it(t,e,i,n,r){var s;for(s in i)s==="children"||s==="key"||s in e||X(t,s,null,i[s],n);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||i[s]===e[s]||X(t,s,e[s],i[s],n)}function ye(t,e,i){e[0]==="-"?t.setProperty(e,i??""):t[e]=i==null?"":typeof i!="number"||Ze.test(e)?i:i+"px"}function X(t,e,i,n,r){var s;e:if(e==="style")if(typeof i=="string")t.style.cssText=i;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)i&&e in i||ye(t.style,e,"");if(i)for(e in i)n&&i[e]===n[e]||ye(t.style,e,i[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=i,i?n||t.addEventListener(e,s?Ce:be,s):t.removeEventListener(e,s?Ce:be,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,i))}}function be(t){return this.l[t.type+!1](h.event?h.event(t):t)}function Ce(t){return this.l[t.type+!0](h.event?h.event(t):t)}function fe(t,e,i,n,r,s,a,l,c,g){var v,o,w,f,u,d,P,p,y,T,$,b,D,A,O,M=e.type;if(e.constructor!==void 0)return null;i.__h!=null&&(c=i.__h,l=e.__e=i.__e,e.__h=null,s=[l]),(v=h.__b)&&v(e);e:if(typeof M=="function")try{if(p=e.props,y=(v=M.contextType)&&n[v.__c],T=v?y?y.props.value:v.__:n,i.__c?P=(o=e.__c=i.__c).__=o.__E:("prototype"in M&&M.prototype.render?e.__c=o=new M(p,T):(e.__c=o=new G(p,T),o.constructor=M,o.render=st),y&&y.sub(o),o.props=p,o.state||(o.state={}),o.context=T,o.__n=n,w=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),M.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=x({},o.__s)),x(o.__s,M.getDerivedStateFromProps(p,o.__s))),f=o.props,u=o.state,o.__v=e,w)M.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(M.getDerivedStateFromProps==null&&p!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(p,T),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(p,o.__s,T)===!1||e.__v===i.__v)){for(e.__v!==i.__v&&(o.props=p,o.state=o.__s,o.__d=!1),e.__e=i.__e,e.__k=i.__k,e.__k.forEach(function(z){z&&(z.__=e)}),$=0;$<o._sb.length;$++)o.__h.push(o._sb[$]);o._sb=[],o.__h.length&&a.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(p,o.__s,T),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,u,d)})}if(o.context=T,o.props=p,o.__P=t,o.__e=!1,b=h.__r,D=0,"prototype"in M&&M.prototype.render){for(o.state=o.__s,o.__d=!1,b&&b(e),v=o.render(o.props,o.state,o.context),A=0;A<o._sb.length;A++)o.__h.push(o._sb[A]);o._sb=[]}else do o.__d=!1,b&&b(e),v=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++D<25);o.state=o.__s,o.getChildContext!=null&&(n=x(x({},n),o.getChildContext())),w||o.getSnapshotBeforeUpdate==null||(d=o.getSnapshotBeforeUpdate(f,u)),De(t,he(O=v!=null&&v.type===ne&&v.key==null?v.props.children:v)?O:[O],e,i,n,r,s,a,l,c,g),o.base=e.__e,e.__h=null,o.__h.length&&a.push(o),P&&(o.__E=o.__=null)}catch(z){e.__v=null,(c||s!=null)&&(e.__e=l,e.__h=!!c,s[s.indexOf(l)]=null),h.__e(z,e,i)}else s==null&&e.__v===i.__v?(e.__k=i.__k,e.__e=i.__e):e.__e=nt(i.__e,e,i,n,r,s,a,c,g);(v=h.diffed)&&v(e)}function Ue(t,e,i){for(var n=0;n<i.length;n++)de(i[n],i[++n],i[++n]);h.__c&&h.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(s){s.call(r)})}catch(s){h.__e(s,r.__v)}})}function nt(t,e,i,n,r,s,a,l,c){var g,v,o,w=i.props,f=e.props,u=e.type,d=0;if(u==="svg"&&(r=!0),s!=null){for(;d<s.length;d++)if((g=s[d])&&"setAttribute"in g==!!u&&(u?g.localName===u:g.nodeType===3)){t=g,s[d]=null;break}}if(t==null){if(u===null)return document.createTextNode(f);t=r?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,f.is&&f),s=null,l=!1}if(u===null)w===f||l&&t.data===f||(t.data=f);else{if(s=s&&ie.call(t.childNodes),v=(w=i.props||N).dangerouslySetInnerHTML,o=f.dangerouslySetInnerHTML,!l){if(s!=null)for(w={},d=0;d<t.attributes.length;d++)w[t.attributes[d].name]=t.attributes[d].value;(o||v)&&(o&&(v&&o.__html==v.__html||o.__html===t.innerHTML)||(t.innerHTML=o&&o.__html||""))}if(it(t,f,w,r,l),o)e.__k=[];else if(De(t,he(d=e.props.children)?d:[d],e,i,n,r&&u!=="foreignObject",s,a,s?s[0]:i.__k&&U(i,0),l,c),s!=null)for(d=s.length;d--;)s[d]!=null&&Be(s[d]);l||("value"in f&&(d=f.value)!==void 0&&(d!==t.value||u==="progress"&&!d||u==="option"&&d!==w.value)&&X(t,"value",d,w.value,!1),"checked"in f&&(d=f.checked)!==void 0&&d!==t.checked&&X(t,"checked",d,w.checked,!1))}return t}function de(t,e,i){try{typeof t=="function"?t(e):t.current=e}catch(n){h.__e(n,i)}}function le(t,e,i){var n,r;if(h.unmount&&h.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||de(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){h.__e(s,e)}n.base=n.__P=null,t.__c=void 0}if(n=t.__k)for(r=0;r<n.length;r++)n[r]&&le(n[r],e,i||typeof t.type!="function");i||t.__e==null||Be(t.__e),t.__=t.__e=t.__d=void 0}function st(t,e,i){return this.constructor(t,i)}function rt(t,e,i){var n,r,s,a;h.__&&h.__(t,e),r=(n=typeof i=="function")?null:i&&i.__k||e.__k,s=[],a=[],fe(e,t=(!n&&i||e).__k=et(ne,null,[t]),r||N,N,e.ownerSVGElement!==void 0,!n&&i?[i]:r?null:e.firstChild?ie.call(e.childNodes):null,s,!n&&i?i:r?r.__e:e.firstChild,n,a),Ue(s,t,a)}ie=Ne.slice,h={__e:function(t,e,i,n){for(var r,s,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(t)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,n||{}),a=r.__d),a)return r.__E=r}catch(l){t=l}throw t}},Pe=0,Oe=function(t){return t!=null&&t.constructor===void 0},G.prototype.setState=function(t,e){var i;i=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},i),this.props)),t&&x(i,t),t!=null&&this.__v&&(e&&this._sb.push(e),ge(this))},G.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ge(this))},G.prototype.render=ne,j=[],Ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ae=function(t,e){return t.__v.__b-e.__v.__b},Q.__r=0;var ue,k,re,Se,we=0,qe=[],J=[],ke=h.__b,$e=h.__r,Me=h.diffed,Te=h.__c,Ie=h.unmount;function ot(t,e){h.__h&&h.__h(k,t,we||e),we=0;var i=k.__H||(k.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:J}),i.__[t]}function Re(t,e){var i=ot(ue++,7);return ut(i.__H,e)?(i.__V=t(),i.i=e,i.__h=t,i.__V):i.__}function at(){for(var t;t=qe.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(K),t.__H.__h.forEach(ce),t.__H.__h=[]}catch(e){t.__H.__h=[],h.__e(e,t.__v)}}h.__b=function(t){k=null,ke&&ke(t)},h.__r=function(t){$e&&$e(t),ue=0;var e=(k=t.__c).__H;e&&(re===k?(e.__h=[],k.__h=[],e.__.forEach(function(i){i.__N&&(i.__=i.__N),i.__V=J,i.__N=i.i=void 0})):(e.__h.forEach(K),e.__h.forEach(ce),e.__h=[],ue=0)),re=k},h.diffed=function(t){Me&&Me(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(qe.push(e)!==1&&Se===h.requestAnimationFrame||((Se=h.requestAnimationFrame)||lt)(at)),e.__H.__.forEach(function(i){i.i&&(i.__H=i.i),i.__V!==J&&(i.__=i.__V),i.i=void 0,i.__V=J})),re=k=null},h.__c=function(t,e){e.some(function(i){try{i.__h.forEach(K),i.__h=i.__h.filter(function(n){return!n.__||ce(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],h.__e(n,i.__v)}}),Te&&Te(t,e)},h.unmount=function(t){Ie&&Ie(t);var e,i=t.__c;i&&i.__H&&(i.__H.__.forEach(function(n){try{K(n)}catch(r){e=r}}),i.__H=void 0,e&&h.__e(e,i.__v))};var Ae=typeof requestAnimationFrame=="function";function lt(t){var e,i=function(){clearTimeout(n),Ae&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(i,100);Ae&&(e=requestAnimationFrame(i))}function K(t){var e=k,i=t.__c;typeof i=="function"&&(t.__c=void 0,i()),k=e}function ce(t){var e=k;t.__c=t.__(),k=e}function ut(t,e){return!t||t.length!==e.length||e.some(function(i,n){return i!==t[n]})}function se(){throw new Error("Cycle detected")}var ct=Symbol.for("preact-signals");function ve(){if(B>1)B--;else{for(var t,e=!1;H!==void 0;){var i=H;for(H=void 0,_e++;i!==void 0;){var n=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&We(i))try{i.c()}catch(r){e||(t=r,e=!0)}i=n}}if(_e=0,B--,e)throw t}}var m=void 0,H=void 0,B=0,_e=0,Z=0;function Ve(t){if(m!==void 0){var e=t.n;if(e===void 0||e.t!==m)return e={i:0,S:t,p:m.s,n:void 0,t:m,e:void 0,x:void 0,r:e},m.s!==void 0&&(m.s.n=e),m.s=e,t.n=e,32&m.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=m.s,e.n=void 0,m.s.n=e,m.s=e),e}}function S(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}S.prototype.brand=ct;S.prototype.h=function(){return!0};S.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};S.prototype.U=function(t){if(this.t!==void 0){var e=t.e,i=t.x;e!==void 0&&(e.x=i,t.e=void 0),i!==void 0&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}};S.prototype.subscribe=function(t){var e=this;return q(function(){var i=e.value,n=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=n}})};S.prototype.valueOf=function(){return this.value};S.prototype.toString=function(){return this.value+""};S.prototype.toJSON=function(){return this.value};S.prototype.peek=function(){return this.v};Object.defineProperty(S.prototype,"value",{get:function(){var t=Ve(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(m instanceof L&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){_e>100&&se(),this.v=t,this.i++,Z++,B++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{ve()}}}});function C(t){return new S(t)}function We(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function ze(t){for(var e=t.s;e!==void 0;e=e.n){var i=e.S.n;if(i!==void 0&&(e.r=i),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Ye(t){for(var e=t.s,i=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):i=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}t.s=i}function L(t){S.call(this,void 0),this.x=t,this.s=void 0,this.g=Z-1,this.f=4}(L.prototype=new S).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Z))return!0;if(this.g=Z,this.f|=1,this.i>0&&!We(this))return this.f&=-2,!0;var t=m;try{ze(this),m=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return m=t,Ye(this),this.f&=-2,!0};L.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}S.prototype.S.call(this,t)};L.prototype.U=function(t){if(this.t!==void 0&&(S.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};L.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};L.prototype.peek=function(){if(this.h()||se(),16&this.f)throw this.v;return this.v};Object.defineProperty(L.prototype,"value",{get:function(){1&this.f&&se();var t=Ve(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function I(t){return new L(t)}function Je(t){var e=t.u;if(t.u=void 0,typeof e=="function"){B++;var i=m;m=void 0;try{e()}catch(n){throw t.f&=-2,t.f|=8,pe(t),n}finally{m=i,ve()}}}function pe(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Je(t)}function _t(t){if(m!==this)throw new Error("Out-of-order effect");Ye(this),m=t,this.f&=-2,8&this.f&&pe(this),ve()}function V(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}V.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};V.prototype.S=function(){1&this.f&&se(),this.f|=1,this.f&=-9,Je(this),ze(this),B++;var t=m;return m=this,_t.bind(this,t)};V.prototype.N=function(){2&this.f||(this.f|=2,this.o=H,H=this)};V.prototype.d=function(){this.f|=8,1&this.f||pe(this)};function q(t){var e=new V(t);try{e.c()}catch(i){throw e.d(),i}return e.d.bind(e)}var oe;function F(t,e){h[t]=e.bind(null,h[t]||function(){})}function ee(t){oe&&oe(),oe=t&&t.S()}function Ke(t){var e=this,i=t.data,n=Qe(i);n.value=i;var r=Re(function(){for(var s=e.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return e.__$u.c=function(){var a;!Oe(r.peek())&&((a=e.base)==null?void 0:a.nodeType)===3?e.base.data=r.peek():(e.__$f|=1,e.setState({}))},I(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return r.value}Ke.displayName="_st";Object.defineProperties(S.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Ke},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});F("__b",function(t,e){if(typeof e.type=="string"){var i,n=e.props;for(var r in n)if(r!=="children"){var s=n[r];s instanceof S&&(i||(e.__np=i={}),i[r]=s,n[r]=s.peek())}}t(e)});F("__r",function(t,e){ee();var i,n=e.__c;n&&(n.__$f&=-2,(i=n.__$u)===void 0&&(n.__$u=i=function(r){var s;return q(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),ee(i),t(e)});F("__e",function(t,e,i,n){ee(),t(e,i,n)});F("diffed",function(t,e){ee();var i;if(typeof e.type=="string"&&(i=e.__e)){var n=e.__np,r=e.props;if(n){var s=i.U;if(s)for(var a in s){var l=s[a];l!==void 0&&!(a in n)&&(l.d(),s[a]=void 0)}else i.U=s={};for(var c in n){var g=s[c],v=n[c];g===void 0?(g=ht(i,c,v,r),s[c]=g):g.o(v,r)}}}t(e)});function ht(t,e,i,n){var r=e in t&&t.ownerSVGElement===void 0,s=C(i);return{o:function(a,l){s.value=a,n=l},d:q(function(){var a=s.value.value;n[e]!==a&&(n[e]=a,r?t[e]=a:a?t.setAttribute(e,a):t.removeAttribute(e))})}}F("unmount",function(t,e){if(typeof e.type=="string"){var i=e.__e;if(i){var n=i.U;if(n){i.U=void 0;for(var r in n){var s=n[r];s&&s.d()}}}}else{var a=e.__c;if(a){var l=a.__$u;l&&(a.__$u=void 0,l.d())}}t(e)});F("__h",function(t,e,i,n){(n<3||n===9)&&(e.__$f|=2),t(e,i,n)});G.prototype.shouldComponentUpdate=function(t,e){var i=this.__$u;if(!(i&&i.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var n in e)return!0;for(var r in t)if(r!=="__source"&&t[r]!==this.props[r])return!0;for(var s in this.props)if(!(s in t))return!0;return!1};function Qe(t){return Re(function(){return C(t)},[])}function ft(){return window.Telegram.WebApp.MainButton}function dt(){return JSON.stringify(window.Telegram,null,2)}function vt(){return window.Telegram.WebApp.platform!=="unknown"}class pt{constructor(){this.isMenuOpen=C(!1),this.isMenuButtonVisible=C(!0),this.debugClickCount=C(0),this.mainButton=ft(),this.isDebugActive=I(()=>this.debugClickCount.value>3),this.menuButtonText=I(()=>this.isMenuOpen.value?"Close":"Menu"),this.toggleMenu=()=>{this.isMenuOpen.value=!this.isMenuOpen.value},this.hideMenu=()=>{this.isMenuButtonVisible.value=!1},this.showMenu=()=>{this.isMenuButtonVisible.value=!0},this.incrementDebugClickCount=()=>{this.debugClickCount.value+=1},this.mainButton.onClick(this.toggleMenu),q(()=>{this.mainButton.setText(this.menuButtonText.value)}),q(()=>{this.isMenuButtonVisible.value?this.mainButton.show():this.mainButton.hide()})}}const te=new pt;class R{static hasTelegramAPI(){var e,i;return!!((i=(e=window.Telegram)==null?void 0:e.WebApp)!=null&&i.CloudStorage)&&window.Telegram.WebApp.isVersionAtLeast("6.9")}static async setItem(e,i){if(!R.hasTelegramAPI()){localStorage.setItem(e,i);return}return new Promise(n=>{window.Telegram.WebApp.CloudStorage.setItem(e,i,r=>{n(r)})})}static async getItem(e){return R.hasTelegramAPI()?new Promise(i=>{window.Telegram.WebApp.CloudStorage.getItem(e,n=>i(n))}):localStorage.getItem(e)}}async function mt(t){await R.setItem("results",JSON.stringify(t))}async function gt(){const t=await R.getItem("results")||"{}";return JSON.parse(t)}const yt=5;class bt{constructor(){this.statistic=C({}),this.lastGameStatistic=C(null),this.gameLevel=C(1),this.averageTimeSpentInSeconds=I(()=>{if(!this.gameLevel.value)return null;const e=this.statistic.value[this.gameLevel.value]||[];if(e.length===0)return null;const i=e.reduce((n,r,s)=>n+=s===0?0:r.timeSpentInSeconds,0);return Math.floor(i/e.length)}),this.averageCardFlipsCount=I(()=>{if(!this.gameLevel.value)return null;const e=this.statistic.value[this.gameLevel.value]||[];if(e.length===0)return null;const i=e.reduce((n,r,s)=>n+=s===0?0:r.cardFlipsCount,0);return Math.floor(i/e.length)}),this.timeSpentMessage=I(()=>{const{timeSpentInSeconds:e}=this.lastGameStatistic.value;return this.getTimeSpentMessage(e,this.averageTimeSpentInSeconds.value)}),this.cardFlipsCountMessage=I(()=>{const{cardFlipsCount:e}=this.lastGameStatistic.value;return this.getCardFlipsCountMessage(e,this.averageCardFlipsCount.value)}),this.addGameStatistic=async(e,i)=>{var n;this.lastGameStatistic.value=i,await this.loadGameStatistic(),this.statistic.value[e]=[i,...((n=this.statistic.value)==null?void 0:n[e])||[]].slice(0,yt),this.saveGameStatistic()},this.loadGameStatistic=async()=>{const e=await gt();this.statistic.value=e},this.saveGameStatistic=async()=>{mt(this.statistic.value)}}getTimeSpentMessage(e,i){let n=`You completed this round in ${e} seconds.`;const r=i-e;return r>0?n+=` That's ${r} seconds faster than your average time.`:r<0&&(n+=` You're just a bit off from your average of ${i} seconds. Keep practicing and you'll surely beat it next time!`),n}getCardFlipsCountMessage(e,i){let n=`You finished the level with ${e} card flips`;const r=i-e;return r>0?n+=` which is ${r} less than your average`:r<0&&(n+=` You're just a few flips away from your average of ${i}. Keep going, and you'll hit it or even do better next time!`),n}}const E=new bt,Ct=["bear","bee","cat","chicken","dog","frog","hedgehog","lion","monkey","mouse","panda","pig","rabbit","sheep","turtle"],St=new Map([[1,{horizontalCardsCount:3,pairsCount:3}],[2,{horizontalCardsCount:4,pairsCount:6}],[3,{horizontalCardsCount:4,pairsCount:8}],[4,{horizontalCardsCount:4,pairsCount:10}],[5,{horizontalCardsCount:4,pairsCount:12}],[6,{horizontalCardsCount:5,pairsCount:15}]]);class wt{constructor(){this.maxDifficulty=6,this.cards=C([]),this.horizontalCardsCount=C(0),this.verticalCardsCount=C(0),this.currentState=C("init"),this.openCardsIds=C([]),this.gameLevel=C(1),this.cardsFlipCount=C(0),this.currentLevelResults=C([]),this.cardsMap=I(()=>this.cards.value.reduce((e,i)=>(e.set(i.id,i),e),new Map)),this.timeSpentInSeconds=I(()=>{const e=this.startTimestamp.value,n=this.currentTimestamp.value-e;return n>0?Math.floor(n/1e3):0}),this.startTimestamp=C(null),this.currentTimestamp=C(null),this.start=()=>{E.loadGameStatistic(),this.setState("run"),this.setState("game_over")},this.openCard=e=>{this.currentState.value!=="run"||!e.isActive||this.openCardsIds.value.length>=2||this.isCardOpen(e)||(this.openCardsIds.value=[...this.openCardsIds.value,e.id],this.cardsFlipCount.value+=1,!(this.openCardsIds.value.length<2)&&this.closeCards())},this.isCardOpen=e=>this.openCardsIds.value.includes(e.id),this.increaseLevel=()=>{const e=this.gameLevel.value+1;e<=this.maxDifficulty&&(this.gameLevel.value=e,E.gameLevel.value=e),this.start()},this.latestResults=()=>(this.currentLevelResults.value||[]).join(", "),this.degreesLevel=()=>{const e=this.gameLevel.value-1;e>0&&(this.gameLevel.value=e,E.gameLevel.value=e),this.start()},this.startTimer=()=>{this.timer=setInterval(()=>{this.currentTimestamp.value=Date.now()},1e3)},this.stopTimer=()=>{clearInterval(this.timer)},this.resetTimer=()=>{this.startTimestamp.value=Date.now()},this.start()}closeCards(){const e=this.cardsMap.value,i=this.openCardsIds.value,n=e.get(i[0]),r=e.get(i[1]),s=n.animalType===r.animalType;setTimeout(()=>{s&&(n.isActive=!1,r.isActive=!1,this.cards.value.every(a=>!a.isActive)?this.setState("game_over"):this.cards.value=[...this.cards.value]),this.openCardsIds.value=[]},1e3)}createGameCards(e){const i=(l,c)=>({animalType:l,isActive:!0,id:`${l}-${c}`}),n=this.getRandomAnimalTypes(e),r=n.map(l=>i(l,1)),s=n.map(l=>i(l,2));return this.getShuffledArray([...r,...s])}getShuffledArray(e){const i=[...e];for(let n=i.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[i[n],i[r]]=[i[r],i[n]]}return i}getRandomAnimalTypes(e){return this.getShuffledArray(Ct).slice(0,e)}setState(e){if(e==="run"){this.resetTimer(),this.startTimer(),te.showMenu(),this.openCardsIds.value=[],this.cardsFlipCount.value=0;const{horizontalCardsCount:i,pairsCount:n}=St.get(this.gameLevel.value);this.cards.value=this.createGameCards(n),this.horizontalCardsCount.value=i,this.verticalCardsCount.value=this.cards.value.length/i}e==="game_over"&&(this.stopTimer(),te.hideMenu(),E.addGameStatistic(this.gameLevel.value,{timeSpentInSeconds:this.timeSpentInSeconds.value||xe(8,30),cardFlipsCount:this.cardsFlipCount.value||xe(6,20)})),this.currentState.value=e}formatTime(e){const i=a=>a.toString().padStart(2,"0"),n=Math.floor(e/1e3);let r=i(Math.floor(n/60));r=r.length>2?"99":r;const s=i(n%60);return`${r}:${s}`}}const W=new wt;function xe(t,e){return Math.floor(Math.random()*(e-t+1))+t}const kt="https://js-headquaters.github.io/beast-memory-game/bear-2a024f96.jpg",$t="https://js-headquaters.github.io/beast-memory-game/bee-aab93015.jpg",Mt="https://js-headquaters.github.io/beast-memory-game/cat-3b5927fa.jpg",Tt="https://js-headquaters.github.io/beast-memory-game/chicken-bbdea4b0.jpg",It="https://js-headquaters.github.io/beast-memory-game/dog-05a67f24.jpg",At="https://js-headquaters.github.io/beast-memory-game/frog-6f66e0e1.jpg",xt="https://js-headquaters.github.io/beast-memory-game/hedgehog-23945674.jpg",Lt="https://js-headquaters.github.io/beast-memory-game/lion-5ad0dad5.jpg",jt="https://js-headquaters.github.io/beast-memory-game/monkey-0ff29deb.jpg",Pt="https://js-headquaters.github.io/beast-memory-game/mouse-635bb8de.jpg",Ot="https://js-headquaters.github.io/beast-memory-game/panda-03212336.jpg",Et="https://js-headquaters.github.io/beast-memory-game/pig-a81ff79f.jpg",Nt="https://js-headquaters.github.io/beast-memory-game/rabbit-611b5470.jpg",Bt="https://js-headquaters.github.io/beast-memory-game/sheep-31b0667b.jpg",Ft="https://js-headquaters.github.io/beast-memory-game/turtle-61d81b79.jpg",Dt=new Map([["bear",kt],["bee",$t],["cat",Mt],["chicken",Tt],["dog",It],["frog",At],["hedgehog",xt],["lion",Lt],["monkey",jt],["mouse",Pt],["panda",Ot],["pig",Et],["rabbit",Bt],["sheep",Nt],["turtle",Ft]]);var Gt=0;function _(t,e,i,n,r,s){var a,l,c={};for(l in e)l=="ref"?a=e[l]:c[l]=e[l];var g={type:t,props:c,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Gt,__source:r,__self:s};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)c[l]===void 0&&(c[l]=a[l]);return h.vnode&&h.vnode(g),g}function Ht(t){const{openCard:e,isCardOpen:i}=W,n=()=>{e(t)};return _("div",{class:(s=>`game-card ${i(s)&&"game-card_open"} ${s.isActive&&"game-card_active"}`)(t),onClick:n,children:_("div",{class:"game-card__inner",children:[_("div",{class:"game-card__backing",children:_("img",{class:"game-card__backing-image",src:Xe,alt:"card backing",loading:"eager"})}),_("div",{class:"game-card__animal",children:_("img",{class:"game-card__animal-image",src:Dt.get(t.animalType),alt:t.animalType})})]})})}function Ut(){const{cards:t}=W;return _("div",{class:"game-field",children:_("div",{class:"game-field__cards",children:t.value.map(e=>_(Ht,{...e}))})})}const Le="N/A";function qt(){const{increaseLevel:t,degreesLevel:e,gameLevel:i}=W,{incrementDebugClickCount:n,isDebugActive:r}=te,{averageCardFlipsCount:s,averageTimeSpentInSeconds:a}=E;return _("div",{class:"game-menu",children:[_("div",{onClick:n,class:"game-menu__header",children:"Settings"}),_("div",{class:"game-menu__item",children:[_("div",{class:"game-menu__item-name",children:"Difficulty:"}),_("div",{class:"game-menu__item-value",children:[_("button",{onClick:e,children:"-"}),_("span",{children:i.value}),_("button",{onClick:t,children:"+"})]})]}),_("div",{class:"game-menu__header",children:"Statistic"}),_("div",{class:"game-menu__item",children:[_("div",{class:"game-menu__item-name",children:"Average time:"}),_("div",{class:"game-menu__item-value",children:a.value?`${a.value}s`:Le})]}),_("div",{class:"game-menu__item",children:[_("div",{class:"game-menu__item-name",children:"Average flips:"}),_("div",{class:"game-menu__item-value",children:s.value?s.value:Le})]}),r.value&&_("div",{class:"game-menu__debug",children:dt()})]})}const je=["Absolutely Brilliant!","Spectacular Achievement!","Exceptional Job!","Mind-Blowing Performance!","Stunning Effort!","Breathtaking Success!","Astonishing Results!","You're Unstoppable!","Phenomenal Work!","Simply Marvelous!"],Rt=()=>{const t=Math.floor(Math.random()*je.length);return je[t]};function Vt(){const{increaseLevel:t,start:e}=W,{timeSpentMessage:i,cardFlipsCountMessage:n}=E,r=Qe(Rt()),s=a=>{a&&t(),e()};return _("div",{class:"game-over",children:[_("div",{class:"game-over__header",children:r.value}),_("div",{class:"game-over__statistic",children:[_("div",{class:"game-over__statistic-message",children:i.value}),_("div",{class:"game-over__statistic-message",children:n.value})]}),_("div",{class:"game-over__level-settings",children:[_("div",{class:"game-over__level-settings-message",children:"Do you want to increase the game's difficulty?"}),_("div",{class:"game-over__level-settings-actions",children:[_("button",{onClick:()=>s(!1),children:"Nope"}),_("button",{onClick:()=>s(!0),children:"I'm in"})]})]})]})}const Wt=new Map([["run",Ut],["game_over",Vt]]);function zt(){const{currentState:t,horizontalCardsCount:e,verticalCardsCount:i}=W,{isMenuOpen:n,toggleMenu:r,isMenuButtonVisible:s,menuButtonText:a}=te,l=Wt.get(t.value);let c=`--horizontal-cards-count: ${e.value};`;c+=`--vertical-cards-count: ${i.value};`;const g=!vt()&&s.value;return _("div",{style:c,class:"game",children:[_("div",{class:"game__spacer"}),_("div",{class:"game__content",children:[n.value?_(qt,{}):_(l,{}),g&&_("button",{class:"game__fallback-menu",onClick:r,children:a.value})]}),_("div",{class:"game__spacer"})]})}rt(_(zt,{}),document.getElementById("app"));
