(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const Ke="https://js-headquaters.github.io/beast-memory-game/backing-93c23538.jpg";var ee,h,Ae,Pe,P,pe,Ee,oe,F={},Oe=[],Qe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,le=Array.isArray;function j(t,e){for(var i in e)t[i]=e[i];return t}function Fe(t){var e=t.parentNode;e&&e.removeChild(t)}function Xe(t,e,i){var n,o,s,a={};for(s in e)s=="key"?n=e[s]:s=="ref"?o=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?ee.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)a[s]===void 0&&(a[s]=t.defaultProps[s]);return W(t,a,n,o,null)}function W(t,e,i,n,o){var s={type:t,props:e,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Ae};return o==null&&h.vnode!=null&&h.vnode(s),s}function te(t){return t.children}function H(t,e){this.props=t,this.context=e}function U(t,e){if(e==null)return t.__?U(t.__,t.__.__k.indexOf(t)+1):null;for(var i;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null)return i.__e;return typeof t.type=="function"?U(t):null}function Le(t){var e,i;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null){t.__e=t.__c.base=i.__e;break}return Le(t)}}function me(t){(!t.__d&&(t.__d=!0)&&P.push(t)&&!J.__r++||pe!==h.debounceRendering)&&((pe=h.debounceRendering)||Ee)(J)}function J(){var t,e,i,n,o,s,a,u,l;for(P.sort(oe);t=P.shift();)t.__d&&(e=P.length,n=void 0,o=void 0,s=void 0,u=(a=(i=t).__v).__e,(l=i.__P)&&(n=[],o=[],(s=j({},a)).__v=a.__v+1,ce(l,a,s,i.__n,l.ownerSVGElement!==void 0,a.__h!=null?[u]:null,n,u??U(a),a.__h,o),De(n,a,o),a.__e!=u&&Le(a)),P.length>e&&P.sort(oe));J.__r=0}function Ne(t,e,i,n,o,s,a,u,l,g,v){var r,S,f,_,d,E,p,y,T,w=0,b=n&&n.__k||Oe,B=b.length,I=B,O=e.length;for(i.__k=[],r=0;r<O;r++)(_=i.__k[r]=(_=e[r])==null||typeof _=="boolean"||typeof _=="function"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?W(null,_,null,null,_):le(_)?W(te,{children:_},null,null,null):_.__b>0?W(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null?(_.__=i,_.__b=i.__b+1,(y=Ze(_,b,p=r+w,I))===-1?f=F:(f=b[y]||F,b[y]=void 0,I--),ce(t,_,f,o,s,a,u,l,g,v),d=_.__e,(S=_.ref)&&f.ref!=S&&(f.ref&&he(f.ref,null,_),v.push(S,_.__c||d,_)),d!=null&&(E==null&&(E=d),(T=f===F||f.__v===null)?y==-1&&w--:y!==p&&(y===p+1?w++:y>p?I>O-p?w+=y-p:w--:w=y<p&&y==p-1?y-p:0),p=r+w,typeof _.type!="function"||y===p&&f.__k!==_.__k?typeof _.type=="function"||y===p&&!T?_.__d!==void 0?(l=_.__d,_.__d=void 0):l=d.nextSibling:l=He(t,d,l):l=Be(_,l,t),typeof i.type=="function"&&(i.__d=l))):(f=b[r])&&f.key==null&&f.__e&&(f.__e==l&&(l=U(f)),re(f,f,!1),b[r]=null);for(i.__e=E,r=B;r--;)b[r]!=null&&(typeof i.type=="function"&&b[r].__e!=null&&b[r].__e==i.__d&&(i.__d=b[r].__e.nextSibling),re(b[r],b[r]))}function Be(t,e,i){for(var n,o=t.__k,s=0;o&&s<o.length;s++)(n=o[s])&&(n.__=t,e=typeof n.type=="function"?Be(n,e,i):He(i,n.__e,e));return e}function He(t,e,i){return i==null||i.parentNode!==t?t.insertBefore(e,null):e==i&&e.parentNode!=null||t.insertBefore(e,i),e.nextSibling}function Ze(t,e,i,n){var o=t.key,s=t.type,a=i-1,u=i+1,l=e[i];if(l===null||l&&o==l.key&&s===l.type)return i;if(n>(l!=null?1:0))for(;a>=0||u<e.length;){if(a>=0){if((l=e[a])&&o==l.key&&s===l.type)return a;a--}if(u<e.length){if((l=e[u])&&o==l.key&&s===l.type)return u;u++}}return-1}function et(t,e,i,n,o){var s;for(s in i)s==="children"||s==="key"||s in e||K(t,s,null,i[s],n);for(s in e)o&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||i[s]===e[s]||K(t,s,e[s],i[s],n)}function ge(t,e,i){e[0]==="-"?t.setProperty(e,i??""):t[e]=i==null?"":typeof i!="number"||Qe.test(e)?i:i+"px"}function K(t,e,i,n,o){var s;e:if(e==="style")if(typeof i=="string")t.style.cssText=i;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)i&&e in i||ge(t.style,e,"");if(i)for(e in i)n&&i[e]===n[e]||ge(t.style,e,i[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=i,i?n||t.addEventListener(e,s?be:ye,s):t.removeEventListener(e,s?be:ye,s);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,i))}}function ye(t){return this.l[t.type+!1](h.event?h.event(t):t)}function be(t){return this.l[t.type+!0](h.event?h.event(t):t)}function ce(t,e,i,n,o,s,a,u,l,g){var v,r,S,f,_,d,E,p,y,T,w,b,B,I,O,M=e.type;if(e.constructor!==void 0)return null;i.__h!=null&&(l=i.__h,u=e.__e=i.__e,e.__h=null,s=[u]),(v=h.__b)&&v(e);e:if(typeof M=="function")try{if(p=e.props,y=(v=M.contextType)&&n[v.__c],T=v?y?y.props.value:v.__:n,i.__c?E=(r=e.__c=i.__c).__=r.__E:("prototype"in M&&M.prototype.render?e.__c=r=new M(p,T):(e.__c=r=new H(p,T),r.constructor=M,r.render=it),y&&y.sub(r),r.props=p,r.state||(r.state={}),r.context=T,r.__n=n,S=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),M.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=j({},r.__s)),j(r.__s,M.getDerivedStateFromProps(p,r.__s))),f=r.props,_=r.state,r.__v=e,S)M.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(M.getDerivedStateFromProps==null&&p!==f&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(p,T),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(p,r.__s,T)===!1||e.__v===i.__v)){for(e.__v!==i.__v&&(r.props=p,r.state=r.__s,r.__d=!1),e.__e=i.__e,e.__k=i.__k,e.__k.forEach(function(V){V&&(V.__=e)}),w=0;w<r._sb.length;w++)r.__h.push(r._sb[w]);r._sb=[],r.__h.length&&a.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(p,r.__s,T),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(f,_,d)})}if(r.context=T,r.props=p,r.__P=t,r.__e=!1,b=h.__r,B=0,"prototype"in M&&M.prototype.render){for(r.state=r.__s,r.__d=!1,b&&b(e),v=r.render(r.props,r.state,r.context),I=0;I<r._sb.length;I++)r.__h.push(r._sb[I]);r._sb=[]}else do r.__d=!1,b&&b(e),v=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++B<25);r.state=r.__s,r.getChildContext!=null&&(n=j(j({},n),r.getChildContext())),S||r.getSnapshotBeforeUpdate==null||(d=r.getSnapshotBeforeUpdate(f,_)),Ne(t,le(O=v!=null&&v.type===te&&v.key==null?v.props.children:v)?O:[O],e,i,n,o,s,a,u,l,g),r.base=e.__e,e.__h=null,r.__h.length&&a.push(r),E&&(r.__E=r.__=null)}catch(V){e.__v=null,(l||s!=null)&&(e.__e=u,e.__h=!!l,s[s.indexOf(u)]=null),h.__e(V,e,i)}else s==null&&e.__v===i.__v?(e.__k=i.__k,e.__e=i.__e):e.__e=tt(i.__e,e,i,n,o,s,a,l,g);(v=h.diffed)&&v(e)}function De(t,e,i){for(var n=0;n<i.length;n++)he(i[n],i[++n],i[++n]);h.__c&&h.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(s){s.call(o)})}catch(s){h.__e(s,o.__v)}})}function tt(t,e,i,n,o,s,a,u,l){var g,v,r,S=i.props,f=e.props,_=e.type,d=0;if(_==="svg"&&(o=!0),s!=null){for(;d<s.length;d++)if((g=s[d])&&"setAttribute"in g==!!_&&(_?g.localName===_:g.nodeType===3)){t=g,s[d]=null;break}}if(t==null){if(_===null)return document.createTextNode(f);t=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,f.is&&f),s=null,u=!1}if(_===null)S===f||u&&t.data===f||(t.data=f);else{if(s=s&&ee.call(t.childNodes),v=(S=i.props||F).dangerouslySetInnerHTML,r=f.dangerouslySetInnerHTML,!u){if(s!=null)for(S={},d=0;d<t.attributes.length;d++)S[t.attributes[d].name]=t.attributes[d].value;(r||v)&&(r&&(v&&r.__html==v.__html||r.__html===t.innerHTML)||(t.innerHTML=r&&r.__html||""))}if(et(t,f,S,o,u),r)e.__k=[];else if(Ne(t,le(d=e.props.children)?d:[d],e,i,n,o&&_!=="foreignObject",s,a,s?s[0]:i.__k&&U(i,0),u,l),s!=null)for(d=s.length;d--;)s[d]!=null&&Fe(s[d]);u||("value"in f&&(d=f.value)!==void 0&&(d!==t.value||_==="progress"&&!d||_==="option"&&d!==S.value)&&K(t,"value",d,S.value,!1),"checked"in f&&(d=f.checked)!==void 0&&d!==t.checked&&K(t,"checked",d,S.checked,!1))}return t}function he(t,e,i){try{typeof t=="function"?t(e):t.current=e}catch(n){h.__e(n,i)}}function re(t,e,i){var n,o;if(h.unmount&&h.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||he(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){h.__e(s,e)}n.base=n.__P=null,t.__c=void 0}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&re(n[o],e,i||typeof t.type!="function");i||t.__e==null||Fe(t.__e),t.__=t.__e=t.__d=void 0}function it(t,e,i){return this.constructor(t,i)}function nt(t,e,i){var n,o,s,a;h.__&&h.__(t,e),o=(n=typeof i=="function")?null:i&&i.__k||e.__k,s=[],a=[],ce(e,t=(!n&&i||e).__k=Xe(te,null,[t]),o||F,F,e.ownerSVGElement!==void 0,!n&&i?[i]:o?null:e.firstChild?ee.call(e.childNodes):null,s,!n&&i?i:o?o.__e:e.firstChild,n,a),De(s,t,a)}ee=Oe.slice,h={__e:function(t,e,i,n){for(var o,s,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((s=o.constructor)&&s.getDerivedStateFromError!=null&&(o.setState(s.getDerivedStateFromError(t)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,n||{}),a=o.__d),a)return o.__E=o}catch(u){t=u}throw t}},Ae=0,Pe=function(t){return t!=null&&t.constructor===void 0},H.prototype.setState=function(t,e){var i;i=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=j({},this.state),typeof t=="function"&&(t=t(j({},i),this.props)),t&&j(i,t),t!=null&&this.__v&&(e&&this._sb.push(e),me(this))},H.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),me(this))},H.prototype.render=te,P=[],Ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,oe=function(t,e){return t.__v.__b-e.__v.__b},J.__r=0;var ae,$,ne,Ce,Se=0,Ue=[],R=[],ke=h.__b,$e=h.__r,we=h.diffed,Me=h.__c,Te=h.unmount;function st(t,e){h.__h&&h.__h($,t,Se||e),Se=0;var i=$.__H||($.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:R}),i.__[t]}function qe(t,e){var i=st(ae++,7);return at(i.__H,e)?(i.__V=t(),i.i=e,i.__h=t,i.__V):i.__}function ot(){for(var t;t=Ue.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Y),t.__H.__h.forEach(ue),t.__H.__h=[]}catch(e){t.__H.__h=[],h.__e(e,t.__v)}}h.__b=function(t){$=null,ke&&ke(t)},h.__r=function(t){$e&&$e(t),ae=0;var e=($=t.__c).__H;e&&(ne===$?(e.__h=[],$.__h=[],e.__.forEach(function(i){i.__N&&(i.__=i.__N),i.__V=R,i.__N=i.i=void 0})):(e.__h.forEach(Y),e.__h.forEach(ue),e.__h=[],ae=0)),ne=$},h.diffed=function(t){we&&we(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ue.push(e)!==1&&Ce===h.requestAnimationFrame||((Ce=h.requestAnimationFrame)||rt)(ot)),e.__H.__.forEach(function(i){i.i&&(i.__H=i.i),i.__V!==R&&(i.__=i.__V),i.i=void 0,i.__V=R})),ne=$=null},h.__c=function(t,e){e.some(function(i){try{i.__h.forEach(Y),i.__h=i.__h.filter(function(n){return!n.__||ue(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],h.__e(n,i.__v)}}),Me&&Me(t,e)},h.unmount=function(t){Te&&Te(t);var e,i=t.__c;i&&i.__H&&(i.__H.__.forEach(function(n){try{Y(n)}catch(o){e=o}}),i.__H=void 0,e&&h.__e(e,i.__v))};var xe=typeof requestAnimationFrame=="function";function rt(t){var e,i=function(){clearTimeout(n),xe&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(i,100);xe&&(e=requestAnimationFrame(i))}function Y(t){var e=$,i=t.__c;typeof i=="function"&&(t.__c=void 0,i()),$=e}function ue(t){var e=$;t.__c=t.__(),$=e}function at(t,e){return!t||t.length!==e.length||e.some(function(i,n){return i!==t[n]})}function ie(){throw new Error("Cycle detected")}var ut=Symbol.for("preact-signals");function fe(){if(L>1)L--;else{for(var t,e=!1;D!==void 0;){var i=D;for(D=void 0,_e++;i!==void 0;){var n=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&ze(i))try{i.c()}catch(o){e||(t=o,e=!0)}i=n}}if(_e=0,L--,e)throw t}}var m=void 0,D=void 0,L=0,_e=0,Q=0;function Ge(t){if(m!==void 0){var e=t.n;if(e===void 0||e.t!==m)return e={i:0,S:t,p:m.s,n:void 0,t:m,e:void 0,x:void 0,r:e},m.s!==void 0&&(m.s.n=e),m.s=e,t.n=e,32&m.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=m.s,e.n=void 0,m.s.n=e,m.s=e),e}}function C(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}C.prototype.brand=ut;C.prototype.h=function(){return!0};C.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};C.prototype.U=function(t){if(this.t!==void 0){var e=t.e,i=t.x;e!==void 0&&(e.x=i,t.e=void 0),i!==void 0&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}};C.prototype.subscribe=function(t){var e=this;return q(function(){var i=e.value,n=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=n}})};C.prototype.valueOf=function(){return this.value};C.prototype.toString=function(){return this.value+""};C.prototype.toJSON=function(){return this.value};C.prototype.peek=function(){return this.v};Object.defineProperty(C.prototype,"value",{get:function(){var t=Ge(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(m instanceof A&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){_e>100&&ie(),this.v=t,this.i++,Q++,L++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{fe()}}}});function k(t){return new C(t)}function ze(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Ve(t){for(var e=t.s;e!==void 0;e=e.n){var i=e.S.n;if(i!==void 0&&(e.r=i),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function We(t){for(var e=t.s,i=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):i=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}t.s=i}function A(t){C.call(this,void 0),this.x=t,this.s=void 0,this.g=Q-1,this.f=4}(A.prototype=new C).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Q))return!0;if(this.g=Q,this.f|=1,this.i>0&&!ze(this))return this.f&=-2,!0;var t=m;try{Ve(this),m=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return m=t,We(this),this.f&=-2,!0};A.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}C.prototype.S.call(this,t)};A.prototype.U=function(t){if(this.t!==void 0&&(C.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};A.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};A.prototype.peek=function(){if(this.h()||ie(),16&this.f)throw this.v;return this.v};Object.defineProperty(A.prototype,"value",{get:function(){1&this.f&&ie();var t=Ge(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function x(t){return new A(t)}function Re(t){var e=t.u;if(t.u=void 0,typeof e=="function"){L++;var i=m;m=void 0;try{e()}catch(n){throw t.f&=-2,t.f|=8,de(t),n}finally{m=i,fe()}}}function de(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Re(t)}function _t(t){if(m!==this)throw new Error("Out-of-order effect");We(this),m=t,this.f&=-2,8&this.f&&de(this),fe()}function G(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}G.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};G.prototype.S=function(){1&this.f&&ie(),this.f|=1,this.f&=-9,Re(this),Ve(this),L++;var t=m;return m=this,_t.bind(this,t)};G.prototype.N=function(){2&this.f||(this.f|=2,this.o=D,D=this)};G.prototype.d=function(){this.f|=8,1&this.f||de(this)};function q(t){var e=new G(t);try{e.c()}catch(i){throw e.d(),i}return e.d.bind(e)}var se;function N(t,e){h[t]=e.bind(null,h[t]||function(){})}function X(t){se&&se(),se=t&&t.S()}function Ye(t){var e=this,i=t.data,n=Je(i);n.value=i;var o=qe(function(){for(var s=e.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return e.__$u.c=function(){var a;!Pe(o.peek())&&((a=e.base)==null?void 0:a.nodeType)===3?e.base.data=o.peek():(e.__$f|=1,e.setState({}))},x(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return o.value}Ye.displayName="_st";Object.defineProperties(C.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Ye},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});N("__b",function(t,e){if(typeof e.type=="string"){var i,n=e.props;for(var o in n)if(o!=="children"){var s=n[o];s instanceof C&&(i||(e.__np=i={}),i[o]=s,n[o]=s.peek())}}t(e)});N("__r",function(t,e){X();var i,n=e.__c;n&&(n.__$f&=-2,(i=n.__$u)===void 0&&(n.__$u=i=function(o){var s;return q(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),X(i),t(e)});N("__e",function(t,e,i,n){X(),t(e,i,n)});N("diffed",function(t,e){X();var i;if(typeof e.type=="string"&&(i=e.__e)){var n=e.__np,o=e.props;if(n){var s=i.U;if(s)for(var a in s){var u=s[a];u!==void 0&&!(a in n)&&(u.d(),s[a]=void 0)}else i.U=s={};for(var l in n){var g=s[l],v=n[l];g===void 0?(g=lt(i,l,v,o),s[l]=g):g.o(v,o)}}}t(e)});function lt(t,e,i,n){var o=e in t&&t.ownerSVGElement===void 0,s=k(i);return{o:function(a,u){s.value=a,n=u},d:q(function(){var a=s.value.value;n[e]!==a&&(n[e]=a,o?t[e]=a:a?t.setAttribute(e,a):t.removeAttribute(e))})}}N("unmount",function(t,e){if(typeof e.type=="string"){var i=e.__e;if(i){var n=i.U;if(n){i.U=void 0;for(var o in n){var s=n[o];s&&s.d()}}}}else{var a=e.__c;if(a){var u=a.__$u;u&&(a.__$u=void 0,u.d())}}t(e)});N("__h",function(t,e,i,n){(n<3||n===9)&&(e.__$f|=2),t(e,i,n)});H.prototype.shouldComponentUpdate=function(t,e){var i=this.__$u;if(!(i&&i.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var n in e)return!0;for(var o in t)if(o!=="__source"&&t[o]!==this.props[o])return!0;for(var s in this.props)if(!(s in t))return!0;return!1};function Je(t){return qe(function(){return k(t)},[])}function ct(){return window.Telegram.WebApp.MainButton}function ht(){return JSON.stringify(window.Telegram,null,2)}function ft(){return window.Telegram.WebApp.platform!=="unknown"}class dt{constructor(){this.isMenuOpen=k(!1),this.isMenuButtonVisible=k(!0),this.debugClickCount=k(0),this.mainButton=ct(),this.isDebugActive=x(()=>this.debugClickCount.value>3),this.menuButtonText=x(()=>this.isMenuOpen.value?"Close":"Settings"),this.toggleMenu=()=>{this.isMenuOpen.value=!this.isMenuOpen.value},this.hideMenu=()=>{this.isMenuButtonVisible.value=!1},this.showMenu=()=>{this.isMenuButtonVisible.value=!0},this.incrementDebugClickCount=()=>{this.debugClickCount.value+=1},this.mainButton.onClick(this.toggleMenu),q(()=>{this.mainButton.setText(this.menuButtonText.value)}),q(()=>{this.isMenuButtonVisible.value?this.mainButton.show():this.mainButton.hide()})}}const Z=new dt;class vt{constructor(){this.statistic=k([]),this.lastGameStatistic=x(()=>{const e=this.statistic.value.length>0?this.statistic.value.length-1:0;return this.statistic.value[e]}),this.averageTimeSpentInSeconds=x(()=>{const e=this.statistic.value.reduce((i,n)=>i+=n.timeSpentInSeconds,0);return Math.floor(e/this.statistic.value.length)}),this.averageCardFlipsCount=x(()=>{const e=this.statistic.value.reduce((i,n)=>i+=n.cardFlipsCount,0);return Math.floor(e/this.statistic.value.length)}),this.timeSpentMessage=x(()=>{const{timeSpentInSeconds:e}=this.lastGameStatistic.value;return this.getTimeSpentMessage(e,this.averageTimeSpentInSeconds.value)}),this.cardFlipsCountMessage=x(()=>{const{cardFlipsCount:e}=this.lastGameStatistic.value;return this.getCardFlipsCountMessage(e,this.averageCardFlipsCount.value)}),this.addGameStatistic=e=>{this.statistic.value=[...this.statistic.value,e]}}getTimeSpentMessage(e,i){let n=`You completed this round in ${e} seconds.`;const o=i-e;return o>0?n+=` That's ${o} seconds faster than your average time.`:o<0&&(n+=` You're just a bit off from your average of ${i} seconds. Keep practicing and you'll surely beat it next time!`),n}getCardFlipsCountMessage(e,i){let n=`You finished the level with ${e} card flips`;const o=i-e;return o>0?n+=` which is ${o} less than your average`:o<0&&(n+=` You're just a few flips away from your average of ${i}. Keep going, and you'll hit it or even do better next time!`),n}}const ve=new vt,pt=["bear","bee","cat","chicken","dog","frog","hedgehog","lion","monkey","mouse","panda","pig","rabbit","sheep","turtle"],mt=new Map([[1,{horizontalCardsCount:3,pairsCount:3}],[2,{horizontalCardsCount:4,pairsCount:6}],[3,{horizontalCardsCount:4,pairsCount:8}],[4,{horizontalCardsCount:4,pairsCount:10}],[5,{horizontalCardsCount:4,pairsCount:12}],[6,{horizontalCardsCount:5,pairsCount:15}]]);class gt{constructor(){this.maxDifficulty=6,this.cards=k([]),this.horizontalCardsCount=k(0),this.verticalCardsCount=k(0),this.currentState=k("init"),this.openCardsIds=k([]),this.gameLevel=k(1),this.cardsFlipCount=k(0),this.cardsMap=x(()=>this.cards.value.reduce((e,i)=>(e.set(i.id,i),e),new Map)),this.timeSpentInSeconds=x(()=>{const e=this.startTimestamp.value,n=this.currentTimestamp.value-e;return n>0?Math.floor(n/1e3):0}),this.startTimestamp=k(null),this.currentTimestamp=k(null),this.start=()=>{this.setState("run")},this.openCard=e=>{this.currentState.value!=="run"||!e.isActive||this.openCardsIds.value.length>=2||this.isCardOpen(e)||(this.openCardsIds.value=[...this.openCardsIds.value,e.id],this.cardsFlipCount.value+=1,!(this.openCardsIds.value.length<2)&&this.closeCards())},this.isCardOpen=e=>this.openCardsIds.value.includes(e.id),this.increaseLevel=()=>{const e=this.gameLevel.value+1;e<=this.maxDifficulty&&(this.gameLevel.value=e),this.start()},this.degreesLevel=()=>{const e=this.gameLevel.value-1;e>0&&(this.gameLevel.value=e),this.start()},this.startTimer=()=>{this.timer=setInterval(()=>{this.currentTimestamp.value=Date.now()},1e3)},this.stopTimer=()=>{clearInterval(this.timer)},this.resetTimer=()=>{this.startTimestamp.value=Date.now()},this.start()}closeCards(){const e=this.cardsMap.value,i=this.openCardsIds.value,n=e.get(i[0]),o=e.get(i[1]),s=n.animalType===o.animalType;setTimeout(()=>{s&&(n.isActive=!1,o.isActive=!1,this.cards.value.every(a=>!a.isActive)?this.setState("game_over"):this.cards.value=[...this.cards.value]),this.openCardsIds.value=[]},1e3)}createGameCards(e){const i=(u,l)=>({animalType:u,isActive:!0,id:`${u}-${l}`}),n=this.getRandomAnimalTypes(e),o=n.map(u=>i(u,1)),s=n.map(u=>i(u,2));return this.getShuffledArray([...o,...s])}getShuffledArray(e){const i=[...e];for(let n=i.length-1;n>0;n--){const o=Math.floor(Math.random()*(n+1));[i[n],i[o]]=[i[o],i[n]]}return i}getRandomAnimalTypes(e){return this.getShuffledArray(pt).slice(0,e)}setState(e){if(e==="run"){this.resetTimer(),this.startTimer(),Z.showMenu(),this.openCardsIds.value=[],this.cardsFlipCount.value=0;const{horizontalCardsCount:i,pairsCount:n}=mt.get(this.gameLevel.value);this.cards.value=this.createGameCards(n),this.horizontalCardsCount.value=i,this.verticalCardsCount.value=this.cards.value.length/i}e==="game_over"&&(this.stopTimer(),Z.hideMenu(),ve.addGameStatistic({timeSpentInSeconds:this.timeSpentInSeconds.value,cardFlipsCount:this.cardsFlipCount.value})),this.currentState.value=e}}const z=new gt,yt="https://js-headquaters.github.io/beast-memory-game/bear-2a024f96.jpg",bt="https://js-headquaters.github.io/beast-memory-game/bee-aab93015.jpg",Ct="https://js-headquaters.github.io/beast-memory-game/cat-3b5927fa.jpg",St="https://js-headquaters.github.io/beast-memory-game/chicken-bbdea4b0.jpg",kt="https://js-headquaters.github.io/beast-memory-game/dog-05a67f24.jpg",$t="https://js-headquaters.github.io/beast-memory-game/frog-6f66e0e1.jpg",wt="https://js-headquaters.github.io/beast-memory-game/hedgehog-23945674.jpg",Mt="https://js-headquaters.github.io/beast-memory-game/lion-5ad0dad5.jpg",Tt="https://js-headquaters.github.io/beast-memory-game/monkey-0ff29deb.jpg",xt="https://js-headquaters.github.io/beast-memory-game/mouse-635bb8de.jpg",It="https://js-headquaters.github.io/beast-memory-game/panda-03212336.jpg",jt="https://js-headquaters.github.io/beast-memory-game/pig-a81ff79f.jpg",At="https://js-headquaters.github.io/beast-memory-game/rabbit-611b5470.jpg",Pt="https://js-headquaters.github.io/beast-memory-game/sheep-31b0667b.jpg",Et="https://js-headquaters.github.io/beast-memory-game/turtle-61d81b79.jpg",Ot=new Map([["bear",yt],["bee",bt],["cat",Ct],["chicken",St],["dog",kt],["frog",$t],["hedgehog",wt],["lion",Mt],["monkey",Tt],["mouse",xt],["panda",It],["pig",jt],["rabbit",Pt],["sheep",At],["turtle",Et]]);var Ft=0;function c(t,e,i,n,o,s){var a,u,l={};for(u in e)u=="ref"?a=e[u]:l[u]=e[u];var g={type:t,props:l,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ft,__source:o,__self:s};if(typeof t=="function"&&(a=t.defaultProps))for(u in a)l[u]===void 0&&(l[u]=a[u]);return h.vnode&&h.vnode(g),g}function Lt(t){const{openCard:e,isCardOpen:i}=z,n=()=>{e(t)};return c("div",{class:(s=>`game-card ${i(s)&&"game-card_open"} ${s.isActive&&"game-card_active"}`)(t),onClick:n,children:c("div",{class:"game-card__inner",children:[c("div",{class:"game-card__backing",children:c("img",{class:"game-card__backing-image",src:Ke,alt:"card backing",loading:"eager"})}),c("div",{class:"game-card__animal",children:c("img",{class:"game-card__animal-image",src:Ot.get(t.animalType),alt:t.animalType})})]})})}function Nt(){const{cards:t}=z;return c("div",{class:"game-field",children:c("div",{class:"game-field__cards",children:t.value.map(e=>c(Lt,{...e}))})})}const Ie="N/A";function Bt(){const{increaseLevel:t,degreesLevel:e,gameLevel:i}=z,{incrementDebugClickCount:n,isDebugActive:o}=Z,{averageCardFlipsCount:s,averageTimeSpentInSeconds:a}=ve;return c("div",{class:"game-menu",children:[c("div",{onClick:n,class:"game-menu__header",children:"Settings"}),c("div",{class:"game-menu__item",children:[c("div",{class:"game-menu__item-name",children:"Difficulty:"}),c("div",{class:"game-menu__item-value",children:[c("button",{onClick:e,children:"-"}),c("span",{children:i.value}),c("button",{onClick:t,children:"+"})]})]}),c("div",{class:"game-menu__header",children:"Statistic"}),c("div",{class:"game-menu__item",children:[c("div",{class:"game-menu__item-name",children:"Average time:"}),c("div",{class:"game-menu__item-value",children:a.value?`${a.value}s`:Ie})]}),c("div",{class:"game-menu__item",children:[c("div",{class:"game-menu__item-name",children:"Average flips:"}),c("div",{class:"game-menu__item-value",children:s.value?s.value:Ie})]}),o.value&&c("div",{class:"game-menu__debug",children:ht()})]})}const je=["Absolutely Brilliant!","Spectacular Achievement!","Exceptional Job!","Mind-Blowing Performance!","Stunning Effort!","Breathtaking Success!","Astonishing Results!","You're Unstoppable!","Phenomenal Work!","Simply Marvelous!"],Ht=()=>{const t=Math.floor(Math.random()*je.length);return je[t]};function Dt(){const{increaseLevel:t,start:e}=z,{timeSpentMessage:i,cardFlipsCountMessage:n}=ve,o=Je(Ht()),s=a=>{a&&t(),e()};return c("div",{class:"game-over",children:[c("div",{class:"game-over__header",children:o.value}),c("div",{class:"game-over__statistic",children:[c("div",{class:"game-over__statistic-message",children:i.value}),c("div",{class:"game-over__statistic-message",children:n.value})]}),c("div",{class:"game-over__level-settings",children:[c("div",{class:"game-over__level-settings-message",children:"Do you want to increase the game's difficulty?"}),c("div",{class:"game-over__level-settings-actions",children:[c("button",{onClick:()=>s(!1),children:"Nope"}),c("button",{onClick:()=>s(!0),children:"I'm in"})]})]})]})}const Ut=new Map([["run",Nt],["game_over",Dt]]);function qt(){const{currentState:t,horizontalCardsCount:e,verticalCardsCount:i}=z,{isMenuOpen:n,toggleMenu:o,isMenuButtonVisible:s,menuButtonText:a}=Z,u=Ut.get(t.value);let l=`--horizontal-cards-count: ${e.value};`;l+=`--vertical-cards-count: ${i.value};`;const g=!ft()&&s.value;return c("div",{style:l,class:"game",children:[c("div",{class:"game__spacer"}),c("div",{class:"game__content",children:[n.value?c(Bt,{}):c(u,{}),g&&c("button",{class:"game__fallback-menu",onClick:o,children:a.value})]}),c("div",{class:"game__spacer"})]})}nt(c(qt,{}),document.getElementById("app"));
