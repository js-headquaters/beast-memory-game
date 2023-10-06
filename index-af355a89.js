true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
            fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
            fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (link.crossOrigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

const darkBackImage = "https://js-headquaters.github.io/beast-memory-game/back-dark-93c23538.jpg";

const lightBackImage = "https://js-headquaters.github.io/beast-memory-game/back-light-3b72eb17.jpg";

const bearImage = "https://js-headquaters.github.io/beast-memory-game/bear-2a024f96.jpg";

const beeImage = "https://js-headquaters.github.io/beast-memory-game/bee-aab93015.jpg";

const catImage = "https://js-headquaters.github.io/beast-memory-game/cat-3b5927fa.jpg";

const chickenImage = "https://js-headquaters.github.io/beast-memory-game/chicken-bbdea4b0.jpg";

const dogImage = "https://js-headquaters.github.io/beast-memory-game/dog-05a67f24.jpg";

const frogImage = "https://js-headquaters.github.io/beast-memory-game/frog-6f66e0e1.jpg";

const hedgehogImage = "https://js-headquaters.github.io/beast-memory-game/hedgehog-23945674.jpg";

const lionImage = "https://js-headquaters.github.io/beast-memory-game/lion-5ad0dad5.jpg";

const monkeyImage = "https://js-headquaters.github.io/beast-memory-game/monkey-0ff29deb.jpg";

const mouseImage = "https://js-headquaters.github.io/beast-memory-game/mouse-635bb8de.jpg";

const pandaImage = "https://js-headquaters.github.io/beast-memory-game/panda-03212336.jpg";

const pigImage = "https://js-headquaters.github.io/beast-memory-game/pig-a81ff79f.jpg";

const rabbitImage = "https://js-headquaters.github.io/beast-memory-game/rabbit-611b5470.jpg";

const sheepImage = "https://js-headquaters.github.io/beast-memory-game/sheep-31b0667b.jpg";

const turtleImage = "https://js-headquaters.github.io/beast-memory-game/turtle-61d81b79.jpg";

const cardImageMap = /* @__PURE__ */ new Map([["bear", bearImage], ["bee", beeImage], ["cat", catImage], ["chicken", chickenImage], ["dog", dogImage], ["frog", frogImage], ["hedgehog", hedgehogImage], ["lion", lionImage], ["monkey", monkeyImage], ["mouse", mouseImage], ["panda", pandaImage], ["pig", pigImage], ["rabbit", sheepImage], ["sheep", rabbitImage], ["turtle", turtleImage]]);

var n,l$3,u$2,t$2,i$2,o$3,r$2,f$2,e$2,c$2={},s$2=[],a$2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h$1=Array.isArray;function v$2(n,l){for(var u in l)n[u]=l[u];return n}function p$2(n){var l=n.parentNode;l&&l.removeChild(n);}function y$1(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$3(l,f,i,o,null)}function d$3(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$2:r};return null==r&&null!=l$3.vnode&&l$3.vnode(f),f}function k$1(n){return n.children}function b$2(n,l){this.props=n,this.context=l;}function g$3(n,l){if(null==l)return n.__?g$3(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?g$3(n):null}function m$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m$1(n)}}function w$3(n){(!n.__d&&(n.__d=!0)&&i$2.push(n)&&!x$1.__r++||o$3!==l$3.debounceRendering)&&((o$3=l$3.debounceRendering)||r$2)(x$1);}function x$1(){var n,l,u,t,o,r,e,c,s;for(i$2.sort(f$2);n=i$2.shift();)n.__d&&(l=i$2.length,t=void 0,o=void 0,r=void 0,c=(e=(u=n).__v).__e,(s=u.__P)&&(t=[],o=[],(r=v$2({},e)).__v=e.__v+1,L$1(s,e,r,u.__n,void 0!==s.ownerSVGElement,null!=e.__h?[c]:null,t,null==c?g$3(e):c,e.__h,o),M(t,e,o),e.__e!=c&&m$1(e)),i$2.length>l&&i$2.sort(f$2));x$1.__r=0;}function P(n,l,u,t,i,o,r,f,e,a,v){var p,y,_,b,m,w,x,P,C,H=0,I=t&&t.__k||s$2,T=I.length,j=T,z=l.length;for(u.__k=[],p=0;p<z;p++)null!=(b=u.__k[p]=null==(b=l[p])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?d$3(null,b,null,null,b):h$1(b)?d$3(k$1,{children:b},null,null,null):b.__b>0?d$3(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)?(b.__=u,b.__b=u.__b+1,-1===(P=A(b,I,x=p+H,j))?_=c$2:(_=I[P]||c$2,I[P]=void 0,j--),L$1(n,b,_,i,o,r,f,e,a,v),m=b.__e,(y=b.ref)&&_.ref!=y&&(_.ref&&O$1(_.ref,null,b),v.push(y,b.__c||m,b)),null!=m&&(null==w&&(w=m),(C=_===c$2||null===_.__v)?-1==P&&H--:P!==x&&(P===x+1?H++:P>x?j>z-x?H+=P-x:H--:H=P<x&&P==x-1?P-x:0),x=p+H,"function"!=typeof b.type||P===x&&_.__k!==b.__k?"function"==typeof b.type||P===x&&!C?void 0!==b.__d?(e=b.__d,b.__d=void 0):e=m.nextSibling:e=S(n,m,e):e=$$1(b,e,n),"function"==typeof u.type&&(u.__d=e))):(_=I[p])&&null==_.key&&_.__e&&(_.__e==e&&(e=g$3(_)),q$2(_,_,!1),I[p]=null);for(u.__e=w,p=T;p--;)null!=I[p]&&("function"==typeof u.type&&null!=I[p].__e&&I[p].__e==u.__d&&(u.__d=I[p].__e.nextSibling),q$2(I[p],I[p]));}function $$1(n,l,u){for(var t,i=n.__k,o=0;i&&o<i.length;o++)(t=i[o])&&(t.__=n,l="function"==typeof t.type?$$1(t,l,u):S(u,t.__e,l));return l}function C$1(n,l){return l=l||[],null==n||"boolean"==typeof n||(h$1(n)?n.some(function(n){C$1(n,l);}):l.push(n)),l}function S(n,l,u){return null==u||u.parentNode!==n?n.insertBefore(l,null):l==u&&null!=l.parentNode||n.insertBefore(l,u),l.nextSibling}function A(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type)return u;if(t>(null!=e?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&i==e.key&&o===e.type)return f;f++;}}return -1}function H$1(n,l,u,t,i){var o;for(o in u)"children"===o||"key"===o||o in l||T$1(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||T$1(n,o,l[o],u[o],t);}function I$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$2.test(l)?u:u+"px";}function T$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||I$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||I$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/,"$1")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t||n.addEventListener(l,o?z$1:j$1,o):n.removeEventListener(l,o?z$1:j$1,o);else if("dangerouslySetInnerHTML"!==l){if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function j$1(n){return this.l[n.type+!1](l$3.event?l$3.event(n):n)}function z$1(n){return this.l[n.type+!0](l$3.event?l$3.event(n):n)}function L$1(n,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,g,m,w,x,$,C,S,A,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=t.__h&&(c=t.__h,e=u.__e=t.__e,u.__h=null,r=[e]),(a=l$3.__b)&&a(u);n:if("function"==typeof T)try{if(w=u.props,x=(a=T.contextType)&&i[a.__c],$=a?x?x.props.value:a.__:i,t.__c?m=(p=u.__c=t.__c).__=p.__E:("prototype"in T&&T.prototype.render?u.__c=p=new T(w,$):(u.__c=p=new b$2(w,$),p.constructor=T,p.render=B$1),x&&x.sub(p),p.props=w,p.state||(p.state={}),p.context=$,p.__n=i,y=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=T.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v$2({},p.__s)),v$2(p.__s,T.getDerivedStateFromProps(w,p.__s))),d=p.props,_=p.state,p.__v=u,y)null==T.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(null==T.getDerivedStateFromProps&&w!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,$),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,$)||u.__v===t.__v)){for(u.__v!==t.__v&&(p.props=w,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),C=0;C<p._sb.length;C++)p.__h.push(p._sb[C]);p._sb=[],p.__h.length&&f.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,$),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,g);});}if(p.context=$,p.props=w,p.__P=n,p.__e=!1,S=l$3.__r,A=0,"prototype"in T&&T.prototype.render){for(p.state=p.__s,p.__d=!1,S&&S(u),a=p.render(p.props,p.state,p.context),H=0;H<p._sb.length;H++)p.__h.push(p._sb[H]);p._sb=[];}else do{p.__d=!1,S&&S(u),a=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++A<25);p.state=p.__s,null!=p.getChildContext&&(i=v$2(v$2({},i),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(d,_)),P(n,h$1(I=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?I:[I],u,t,i,o,r,f,e,c,s),p.base=u.__e,u.__h=null,p.__h.length&&f.push(p),m&&(p.__E=p.__=null);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$3.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=N(t.__e,u,t,i,o,r,f,c,s);(a=l$3.diffed)&&a(u);}function M(n,u,t){for(var i=0;i<t.length;i++)O$1(t[i],t[++i],t[++i]);l$3.__c&&l$3.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$3.__e(n,u.__v);}});}function N(l,u,t,i,o,r,f,e,s){var a,v,y,d=t.props,_=u.props,k=u.type,b=0;if("svg"===k&&(o=!0),null!=r)for(;b<r.length;b++)if((a=r[b])&&"setAttribute"in a==!!k&&(k?a.localName===k:3===a.nodeType)){l=a,r[b]=null;break}if(null==l){if(null===k)return document.createTextNode(_);l=o?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,_.is&&_),r=null,e=!1;}if(null===k)d===_||e&&l.data===_||(l.data=_);else {if(r=r&&n.call(l.childNodes),v=(d=t.props||c$2).dangerouslySetInnerHTML,y=_.dangerouslySetInnerHTML,!e){if(null!=r)for(d={},b=0;b<l.attributes.length;b++)d[l.attributes[b].name]=l.attributes[b].value;(y||v)&&(y&&(v&&y.__html==v.__html||y.__html===l.innerHTML)||(l.innerHTML=y&&y.__html||""));}if(H$1(l,_,d,o,e),y)u.__k=[];else if(P(l,h$1(b=u.props.children)?b:[b],u,t,i,o&&"foreignObject"!==k,r,f,r?r[0]:t.__k&&g$3(t,0),e,s),null!=r)for(b=r.length;b--;)null!=r[b]&&p$2(r[b]);e||("value"in _&&void 0!==(b=_.value)&&(b!==l.value||"progress"===k&&!b||"option"===k&&b!==d.value)&&T$1(l,"value",b,d.value,!1),"checked"in _&&void 0!==(b=_.checked)&&b!==l.checked&&T$1(l,"checked",b,d.checked,!1));}return l}function O$1(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$3.__e(n,t);}}function q$2(n,u,t){var i,o;if(l$3.unmount&&l$3.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||O$1(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$3.__e(n,u);}i.base=i.__P=null,n.__c=void 0;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q$2(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p$2(n.__e),n.__=n.__e=n.__d=void 0;}function B$1(n,l,u){return this.constructor(n,u)}function D$1(u,t,i){var o,r,f,e;l$3.__&&l$3.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],L$1(t,u=(!o&&i||t).__k=y$1(k$1,null,[u]),r||c$2,c$2,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),M(f,u,e);}function G(n,l){var u={__c:l="__cC"+e$2++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,w$3(n);});},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=s$2.slice,l$3={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$2=0,t$2=function(n){return null!=n&&void 0===n.constructor},b$2.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v$2({},this.state),"function"==typeof n&&(n=n(v$2({},u),this.props)),n&&v$2(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w$3(this));},b$2.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w$3(this));},b$2.prototype.render=k$1,i$2=[],r$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$2=function(n,l){return n.__v.__b-l.__v.__b},x$1.__r=0,e$2=0;

var t$1,r$1,u$1,i$1,o$2=0,f$1=[],c$1=[],e$1=l$3.__b,a$1=l$3.__r,v$1=l$3.diffed,l$2=l$3.__c,m=l$3.unmount;function d$2(t,u){l$3.__h&&l$3.__h(r$1,t,o$2||u),o$2=0;var i=r$1.__H||(r$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c$1}),i.__[t]}function _$3(n){return o$2=5,F$1(function(){return {current:n}},[])}function F$1(n,r){var u=d$2(t$1++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function q$1(n){var u=r$1.context[n.__c],i=d$2(t$1++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r$1)),u.props.value):n.__}function b$1(){for(var t;t=f$1.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w$2),t.__H.__h=[];}catch(r){t.__H.__h=[],l$3.__e(r,t.__v);}}l$3.__b=function(n){r$1=null,e$1&&e$1(n);},l$3.__r=function(n){a$1&&a$1(n),t$1=0;var i=(r$1=n.__c).__H;i&&(u$1===r$1?(i.__h=[],r$1.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c$1,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w$2),i.__h=[],t$1=0)),u$1=r$1;},l$3.diffed=function(t){v$1&&v$1(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f$1.push(o)&&i$1===l$3.requestAnimationFrame||((i$1=l$3.requestAnimationFrame)||j)(b$1)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c$1&&(n.__=n.__V),n.i=void 0,n.__V=c$1;})),u$1=r$1=null;},l$3.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w$2(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$3.__e(u,t.__v);}}),l$2&&l$2(t,r);},l$3.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$3.__e(r,u.__v));};var g$2="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g$2&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$2&&(t=requestAnimationFrame(r));}function k(n){var t=r$1,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r$1=t;}function w$2(n){var t=r$1;n.__c=n.__(),r$1=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}

function g$1(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function w$1(n){this.props=n;}(w$1.prototype=new b$2).isPureReactComponent=!0,w$1.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var R=l$3.__b;l$3.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var T=l$3.__e;l$3.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r);};var F=l$3.unmount;function I(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g$1({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return I(n,t,e)})),n}function L(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function U(){this.__u=0,this.t=null,this.__b=null;}function D(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function V(){this.u=null,this.o=null;}l$3.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),F&&F(n);},(U.prototype=new b$2).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=D(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=L(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},U.prototype.componentWillUnmount=function(){this.t=[];},U.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=I(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&y$1(k$1,null,n.fallback);return i&&(i.__h=null),[y$1(k$1,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(V.prototype=new b$2).__a=function(n){var t=this,e=D(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u();};e?e(o):o();}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=C$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t);});};var B="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,H=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Z=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Y=/[A-Z0-9]/g,$="undefined"!=typeof document,q=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};b$2.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(b$2.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var K=l$3.event;function Q(){}function X(){return this.cancelBubble}function nn(){return this.defaultPrevented}l$3.event=function(n){return K&&(n=K(n)),n.persist=Q,n.isPropagationStopped=X,n.isDefaultPrevented=nn,n.nativeEvent=n};var en={enumerable:!1,configurable:!0,get:function(){return this.class}},rn=l$3.vnode;l$3.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||$&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||q(t.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":Z.test(o)?o=l:-1===e.indexOf("-")&&H.test(o)?o=o.replace(Y,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i;}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=C$1(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==e&&null!=u.defaultValue&&(u.value=C$1(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",en)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=B,rn&&rn(n);};var un=l$3.__r;l$3.__r=function(n){un&&un(n),n.__c;};var on=l$3.diffed;l$3.diffed=function(n){on&&on(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value);};

const GameStateContext = G(null);
const StatisticContext = G(null);
const ThemeContext = G(null);

const gameCard = '';

const MAX_GAME_LEVEL = 6;
const MILLISECONDS_IN_SECOND = 1e3;
const CARD_FLIP_ANIMATION_TIME = 800;

var _$2=0;function o$1(o,e,n,t,f,l){var s,u,a={};for(u in e)"ref"==u?s=e[u]:a[u]=e[u];var i={type:o,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_$2,__source:f,__self:l};if("function"==typeof o&&(s=o.defaultProps))for(u in s)void 0===a[u]&&(a[u]=s[u]);return l$3.vnode&&l$3.vnode(i),i}

const cardFlipAnimationTime = `${CARD_FLIP_ANIMATION_TIME / MILLISECONDS_IN_SECOND}s`;
function GameCardComponent({
  card
}) {
  const {
    openCard,
    isCardOpen,
    showDebugInfo: isAnimalTypeVisible
  } = q$1(GameStateContext);
  const {
    theme
  } = q$1(ThemeContext);
  const handleClick = () => {
    openCard(card);
  };
  const getCardClasses = (card2) => {
    return `game-card ${isCardOpen(card2) && "game-card_open"} ${card2.isActive && "game-card_active"}`;
  };
  const style = `--card-flip-animation-time: ${cardFlipAnimationTime}`;
  return o$1("div", {
    style,
    class: getCardClasses(card),
    onClick: handleClick,
    children: [isAnimalTypeVisible.value && o$1("div", {
      class: "game-card__animal-type",
      children: card.animalType
    }), o$1("div", {
      class: "game-card__inner",
      children: [o$1("div", {
        class: "game-card__backing",
        children: o$1("img", {
          class: "game-card__backing-image",
          src: theme.value === "dark" ? darkBackImage : lightBackImage,
          alt: "card backing",
          loading: "eager"
        })
      }), o$1("div", {
        class: "game-card__animal",
        children: o$1("img", {
          class: "game-card__animal-image",
          src: cardImageMap.get(card.animalType),
          alt: card.animalType
        })
      })]
    })]
  });
}

const gameField = '';

function GameFieldComponent() {
  const {
    cards,
    horizontalCardsCount,
    verticalCardsCount
  } = q$1(GameStateContext);
  let style = `--horizontal-cards-count: ${horizontalCardsCount.value};`;
  style += `--vertical-cards-count: ${verticalCardsCount.value};`;
  return o$1("div", {
    style,
    class: "game-field",
    children: o$1("div", {
      class: "game-field__cards",
      children: cards.value.map((card) => {
        return o$1(GameCardComponent, {
          card
        }, card.id);
      })
    })
  });
}

const card = '';

function CardComponent({
  title,
  children
}) {
  return o$1("div", {
    class: "card",
    children: [o$1("div", {
      class: "card__title",
      children: title
    }), o$1("div", {
      class: "card__content",
      children
    })]
  });
}

const keyValue = '';

function KeyValueComponent({
  name,
  value
}) {
  return o$1(k$1, {
    children: [o$1("div", {
      class: "name",
      children: name
    }), o$1("div", {
      class: "value",
      children: value ? value : "N/A"
    })]
  });
}

const keyValueList = '';

function KeyValueListComponent({
  children
}) {
  return o$1("div", {
    class: "key-value-list",
    children
  });
}

const CONGRATULATIONS = ["Absolutely Brilliant!", "Spectacular Achievement!", "Exceptional Job!", "Mind-Blowing Performance!", "Stunning Effort!", "Breathtaking Success!", "Astonishing Results!", "You're Unstoppable!", "Phenomenal Work!", "Simply Marvelous!"];
const getRandomCongratulation = () => {
  const index = Math.floor(Math.random() * CONGRATULATIONS.length);
  return CONGRATULATIONS[index];
};
const camelToKebab = (str) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};

const gameOver = '';

const modal = '';

function ModalComponent({
  title,
  children,
  className,
  onTitleClick
}) {
  const classString = className ? `modal ${className}` : "modal";
  return o$1("div", {
    class: classString,
    children: [o$1("div", {
      class: "modal__title",
      onClick: onTitleClick,
      children: title
    }), o$1("div", {
      class: "modal__content",
      children
    })]
  });
}

function GameOverComponent() {
  const {
    timeSpentInSeconds,
    cardsFlipCount
  } = q$1(GameStateContext);
  const {
    averageCardFlipsCount,
    averageTimeSpentInSeconds
  } = q$1(StatisticContext);
  const headerMessage = _$3(getRandomCongratulation());
  return o$1(ModalComponent, {
    title: headerMessage.current,
    className: "game-over",
    children: [o$1(CardComponent, {
      title: "Time spent in second",
      children: [o$1(KeyValueListComponent, {
        children: o$1(KeyValueComponent, {
          name: "This Game:",
          value: timeSpentInSeconds.value
        })
      }), o$1(KeyValueListComponent, {
        children: o$1(KeyValueComponent, {
          name: "You Average:",
          value: averageTimeSpentInSeconds.value
        })
      })]
    }), o$1(CardComponent, {
      title: "Card Flips Count",
      children: [o$1(KeyValueListComponent, {
        children: o$1(KeyValueComponent, {
          name: "This Game:",
          value: cardsFlipCount.value
        })
      }), o$1(KeyValueListComponent, {
        children: o$1(KeyValueComponent, {
          name: "You Average:",
          value: averageCardFlipsCount.value
        })
      })]
    })]
  });
}

const valueSelector = '';

function ValueSelectorComponent({
  className,
  value,
  increase,
  degrees
}) {
  const classString = className ? `value-selector ${className}` : "value-selector";
  return o$1("div", {
    class: classString,
    children: [o$1("button", {
      className: "value-selector__button",
      onClick: degrees,
      children: "-"
    }), o$1("span", {
      children: value
    }), o$1("button", {
      className: "value-selector__button",
      onClick: increase,
      children: "+"
    })]
  });
}

function i(){throw new Error("Cycle detected")}var t=Symbol.for("preact-signals");function r(){if(!(v>1)){var i,t=!1;while(void 0!==f){var r=f;f=void 0;e++;while(void 0!==r){var n=r.o;r.o=void 0;r.f&=-3;if(!(8&r.f)&&l$1(r))try{r.c();}catch(r){if(!t){i=r;t=!0;}}r=n;}}e=0;v--;if(t)throw i}else v--;}var o=void 0,h=0;function s$1(i){if(h>0)return i();var t=o;o=void 0;h++;try{return i()}finally{h--;o=t;}}var f=void 0,v=0,e=0,u=0;function c(i){if(void 0!==o){var t=i.n;if(void 0===t||t.t!==o){t={i:0,S:i,p:o.s,n:void 0,t:o,e:void 0,x:void 0,r:t};if(void 0!==o.s)o.s.n=t;o.s=t;i.n=t;if(32&o.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=o.s;t.n=void 0;o.s.n=t;o.s=t;}return t}}}function d$1(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0;}d$1.prototype.brand=t;d$1.prototype.h=function(){return !0};d$1.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i;}};d$1.prototype.U=function(i){if(void 0!==this.t){var t=i.e,r=i.x;if(void 0!==t){t.x=r;i.e=void 0;}if(void 0!==r){r.e=t;i.x=void 0;}if(i===this.t)this.t=r;}};d$1.prototype.subscribe=function(i){var t=this;return O(function(){var r=t.value,n=32&this.f;this.f&=-33;try{i(r);}finally{this.f|=n;}})};d$1.prototype.valueOf=function(){return this.value};d$1.prototype.toString=function(){return this.value+""};d$1.prototype.toJSON=function(){return this.value};d$1.prototype.peek=function(){return this.v};Object.defineProperty(d$1.prototype,"value",{get:function(){var i=c(this);if(void 0!==i)i.i=this.i;return this.v},set:function(t){if(o instanceof _$1)!function(){throw new Error("Computed cannot have side-effects")}();if(t!==this.v){if(e>100)i();this.v=t;this.i++;u++;v++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N();}finally{r();}}}});function a(i){return new d$1(i)}function l$1(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return !0;return !1}function y(i){for(var t=i.s;void 0!==t;t=t.n){var r=t.S.n;if(void 0!==r)t.r=r;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function w(i){var t=i.s,r=void 0;while(void 0!==t){var n=t.p;if(-1===t.i){t.S.U(t);if(void 0!==n)n.n=t.n;if(void 0!==t.n)t.n.p=n;}else r=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=n;}i.s=r;}function _$1(i){d$1.call(this,void 0);this.x=i;this.s=void 0;this.g=u-1;this.f=4;}(_$1.prototype=new d$1).h=function(){this.f&=-3;if(1&this.f)return !1;if(32==(36&this.f))return !0;this.f&=-5;if(this.g===u)return !0;this.g=u;this.f|=1;if(this.i>0&&!l$1(this)){this.f&=-2;return !0}var i=o;try{y(this);o=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}o=i;w(this);this.f&=-2;return !0};_$1.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t);}d$1.prototype.S.call(this,i);};_$1.prototype.U=function(i){if(void 0!==this.t){d$1.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t);}}};_$1.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N();}};_$1.prototype.peek=function(){if(!this.h())i();if(16&this.f)throw this.v;return this.v};Object.defineProperty(_$1.prototype,"value",{get:function(){if(1&this.f)i();var t=c(this);this.h();if(void 0!==t)t.i=this.i;if(16&this.f)throw this.v;return this.v}});function p$1(i){return new _$1(i)}function g(i){var t=i.u;i.u=void 0;if("function"==typeof t){v++;var n=o;o=void 0;try{t();}catch(t){i.f&=-2;i.f|=8;b(i);throw t}finally{o=n;r();}}}function b(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;g(i);}function x(i){if(o!==this)throw new Error("Out-of-order effect");w(this);o=i;this.f&=-2;if(8&this.f)b(this);r();}function E(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32;}E.prototype.c=function(){var i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();if("function"==typeof t)this.u=t;}finally{i();}};E.prototype.S=function(){if(1&this.f)i();this.f|=1;this.f&=-9;g(this);y(this);v++;var t=o;o=this;return x.bind(this,t)};E.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=f;f=this;}};E.prototype.d=function(){this.f|=8;if(!(1&this.f))b(this);};function O(i){var t=new E(i);try{t.c();}catch(i){t.d();throw i}return t.d.bind(t)}

var s;function l(n,i){l$3[n]=i.bind(null,l$3[n]||function(){});}function d(n){if(s)s();s=n&&n.S();}function p(n){var r=this,f=n.data,o=useSignal(f);o.value=f;var e=F$1(function(){var n=r.__v;while(n=n.__)if(n.__c){n.__c.__$f|=4;break}r.__$u.c=function(){var n;if(!t$2(e.peek())&&3===(null==(n=r.base)?void 0:n.nodeType))r.base.data=e.peek();else {r.__$f|=1;r.setState({});}};return p$1(function(){var n=o.value.value;return 0===n?0:!0===n?"":n||""})},[]);return e.value}p.displayName="_st";Object.defineProperties(d$1.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:p},props:{configurable:!0,get:function(){return {data:this}}},__b:{configurable:!0,value:1}});l("__b",function(n,r){if("string"==typeof r.type){var i,t=r.props;for(var f in t)if("children"!==f){var o=t[f];if(o instanceof d$1){if(!i)r.__np=i={};i[f]=o;t[f]=o.peek();}}}n(r);});l("__r",function(n,r){d();var i,t=r.__c;if(t){t.__$f&=-2;if(void 0===(i=t.__$u))t.__$u=i=function(n){var r;O(function(){r=this;});r.c=function(){t.__$f|=1;t.setState({});};return r}();}d(i);n(r);});l("__e",function(n,r,i,t){d();n(r,i,t);});l("diffed",function(n,r){d();var i;if("string"==typeof r.type&&(i=r.__e)){var t=r.__np,f=r.props;if(t){var o=i.U;if(o)for(var e in o){var u=o[e];if(void 0!==u&&!(e in t)){u.d();o[e]=void 0;}}else i.U=o={};for(var a in t){var c=o[a],s=t[a];if(void 0===c){c=_(i,a,s,f);o[a]=c;}else c.o(s,f);}}}n(r);});function _(n,r,i,t){var f=r in n&&void 0===n.ownerSVGElement,o=a(i);return {o:function(n,r){o.value=n;t=r;},d:O(function(){var i=o.value.value;if(t[r]!==i){t[r]=i;if(f)n[r]=i;else if(i)n.setAttribute(r,i);else n.removeAttribute(r);}})}}l("unmount",function(n,r){if("string"==typeof r.type){var i=r.__e;if(i){var t=i.U;if(t){i.U=void 0;for(var f in t){var o=t[f];if(o)o.d();}}}}else {var e=r.__c;if(e){var u=e.__$u;if(u){e.__$u=void 0;u.d();}}}n(r);});l("__h",function(n,r,i,t){if(t<3||9===t)r.__$f|=2;n(r,i,t);});b$2.prototype.shouldComponentUpdate=function(n,r){var i=this.__$u;if(!(i&&void 0!==i.s||4&this.__$f))return !0;if(3&this.__$f)return !0;for(var t in r)return !0;for(var f in n)if("__source"!==f&&n[f]!==this.props[f])return !0;for(var o in this.props)if(!(o in n))return !0;return !1};function useSignal(n){return F$1(function(){return a(n)},[])}

function getMainButton() {
  return window.Telegram.WebApp.MainButton;
}
function getWebAppData() {
  return JSON.stringify(window.Telegram.WebApp, null, 2);
}
function isRunningInTelegram() {
  return window.Telegram.WebApp.platform !== "unknown";
}
function getWebApp() {
  return window.Telegram.WebApp;
}
function getWebAppTheme() {
  return window.Telegram.WebApp.colorScheme;
}
function hasStorageApi() {
  return !!window.Telegram?.WebApp?.CloudStorage && window.Telegram.WebApp.isVersionAtLeast("6.9");
}
class Storage {
  static async setItem(key, value) {
    if (!hasStorageApi()) {
      localStorage.setItem(key, value);
      return;
    }
    return new Promise((resolve, reject) => {
      window.Telegram.WebApp.CloudStorage.setItem(key, value, (err, isStored) => {
        if (err) {
          console.error(">> omg error happened during SET", err);
          reject(err);
          return;
        }
        resolve(isStored);
      });
    });
  }
  static async getItem(key) {
    if (!hasStorageApi()) {
      return localStorage.getItem(key);
    }
    return new Promise((resolve, reject) => {
      window.Telegram.WebApp.CloudStorage.getItem(key, (err, value) => {
        if (err) {
          console.error(">> omg error happened during CloudStorage GET", err);
          reject(err);
          return;
        }
        resolve(value);
      });
    });
  }
}

const statistic = '';

const debugClickCount = a(0);
const isDebugActive = p$1(() => {
  return debugClickCount.value > 3;
});
function StatisticComponent() {
  const {
    averageCardFlipsCount,
    averageTimeSpentInSeconds,
    gameLevelForStatistic,
    increaseStatisticLevel,
    degreesStatisticLevel,
    currentLevelStatistic
  } = q$1(StatisticContext);
  const {
    toggleTheme,
    theme
  } = q$1(ThemeContext);
  const {
    increaseLevel,
    degreesLevel,
    gameLevel,
    showDebugInfo,
    toggleShowDebugInfo
  } = q$1(GameStateContext);
  return o$1(ModalComponent, {
    title: "Statistic",
    className: "statistic",
    onTitleClick: () => {
      debugClickCount.value += 1;
    },
    children: [isDebugActive.value && o$1(CardComponent, {
      title: "Settings",
      children: o$1(KeyValueListComponent, {
        children: [o$1("div", {
          children: "Current Level:"
        }), o$1(ValueSelectorComponent, {
          value: gameLevel.value,
          increase: increaseLevel,
          degrees: degreesLevel
        }), o$1("div", {
          children: "Theme:"
        }), o$1(ValueSelectorComponent, {
          value: theme.value,
          increase: toggleTheme,
          degrees: toggleTheme
        }), o$1("div", {
          children: "Show debug info:"
        }), o$1(ValueSelectorComponent, {
          value: showDebugInfo.value ? "Yes" : "No",
          increase: toggleShowDebugInfo,
          degrees: toggleShowDebugInfo
        })]
      })
    }), o$1(CardComponent, {
      title: "Choose level for statistic",
      children: o$1(ValueSelectorComponent, {
        className: "statistic__level-selector",
        value: gameLevelForStatistic.value,
        increase: increaseStatisticLevel,
        degrees: degreesStatisticLevel
      })
    }), o$1(CardComponent, {
      title: "Game Statistic",
      children: o$1(KeyValueListComponent, {
        children: [o$1(KeyValueComponent, {
          name: "Average Time:",
          value: averageTimeSpentInSeconds.value
        }), o$1(KeyValueComponent, {
          name: "Average Flips:",
          value: averageCardFlipsCount.value
        })]
      })
    }), o$1(CardComponent, {
      title: "Game history",
      children: currentLevelStatistic.value.length > 0 ? o$1(KeyValueListComponent, {
        children: [o$1("div", {
          children: "Time"
        }), o$1("div", {
          children: "Flips"
        }), currentLevelStatistic.value?.map(({
          timeSpentInSeconds,
          cardFlipsCount
        }) => o$1(k$1, {
          children: [o$1("div", {
            children: timeSpentInSeconds
          }), o$1("div", {
            children: cardFlipsCount
          })]
        }))]
      }) : o$1("div", {
        children: "No data for this level"
      })
    }), isDebugActive.value && o$1(CardComponent, {
      title: "Debug Info",
      children: o$1("div", {
        class: "statistic__debug",
        children: getWebAppData()
      })
    })]
  });
}

class Logger {
  constructor(name) {
    this.name = name;
  }
  log(message, data) {
    const text = `[${this.name}] > ${message}`;
    if (data) {
      console.log(text, data);
    } else {
      console.log(text);
    }
  }
}

const animalCardTypes = ["bear", "bee", "cat", "chicken", "dog", "frog", "hedgehog", "lion", "monkey", "mouse", "panda", "pig", "rabbit", "sheep", "turtle"];
const gameDifficultyMap = /* @__PURE__ */ new Map([[1, {
  horizontalCardsCount: 3,
  pairsCount: 3
}], [2, {
  horizontalCardsCount: 4,
  pairsCount: 6
}], [3, {
  horizontalCardsCount: 4,
  pairsCount: 8
}], [4, {
  horizontalCardsCount: 4,
  pairsCount: 10
}], [5, {
  horizontalCardsCount: 4,
  pairsCount: 12
}], [6, {
  horizontalCardsCount: 5,
  pairsCount: 15
}]]);
class GameStateService {
  constructor() {
    this.gameLevel = a(1);
    this.cards = a([]);
    this.horizontalCardsCount = a(0);
    this.verticalCardsCount = a(0);
    this.currentState = a("init");
    this.openCardsIds = a([]);
    this.cardsFlipCount = a(0);
    this.showDebugInfo = a(false);
    this.cardsMap = p$1(() => this.cards.value.reduce((acc, card) => {
      acc.set(card.id, card);
      return acc;
    }, /* @__PURE__ */ new Map()));
    this.timeSpentInSeconds = p$1(() => {
      const start = this.startTimestamp.value;
      const current = this.currentTimestamp.value;
      const diff = current - start;
      return diff > 0 ? Math.floor(diff / MILLISECONDS_IN_SECOND) : 0;
    });
    this.canIncreaseLevel = p$1(() => {
      return this.gameLevel.value < MAX_GAME_LEVEL;
    });
    this.canDegreesLevel = p$1(() => {
      return this.gameLevel.value > 1;
    });
    this.menuButtonText = p$1(() => {
      if (this.currentState.value === "game_over") {
        return this.canIncreaseLevel.value ? "Next level" : "Play again";
      }
      return this.currentState.value === "menu" ? "Close" : "Statistic";
    });
    this.startTimestamp = a(null);
    this.currentTimestamp = a(null);
    this.mainButton = getMainButton();
    this.logger = new Logger("GameStateService");
    this.restart = () => {
      this.currentState.value = "init";
    };
    this.openCard = (card) => {
      if (this.currentState.value !== "run" || !card.isActive || this.openCardsIds.value.length >= 2 || this.isCardOpen(card)) {
        return;
      }
      this.openCardsIds.value = [...this.openCardsIds.value, card.id];
      this.cardsFlipCount.value += 1;
      if (this.openCardsIds.value.length < 2) {
        return;
      }
      this.closeCards();
    };
    this.isCardOpen = (card) => {
      return this.openCardsIds.value.includes(card.id);
    };
    this.startTimer = () => {
      this.timer = setInterval(() => {
        this.currentTimestamp.value = Date.now();
      }, MILLISECONDS_IN_SECOND);
    };
    this.stopTimer = () => {
      clearInterval(this.timer);
    };
    this.resetTimer = () => {
      this.startTimestamp.value = Date.now();
    };
    this.increaseLevel = () => {
      const value = this.gameLevel.value + 1;
      if (value <= MAX_GAME_LEVEL) {
        this.gameLevel.value = value;
        this.initGame();
      }
    };
    this.degreesLevel = () => {
      const value = this.gameLevel.value - 1;
      if (value > 0) {
        this.gameLevel.value = value;
        this.initGame();
      }
    };
    this.mainButtonClickHandler = () => {
      if (this.currentState.value === "game_over") {
        this.increaseLevel();
        this.restart();
        return;
      }
      if (this.currentState.value !== "menu") {
        this.currentState.value = "menu";
      } else {
        this.currentState.value = "run";
      }
    };
    this.toggleShowDebugInfo = () => {
      this.showDebugInfo.value = !this.showDebugInfo.value;
    };
    this.mainButton.show();
    this.mainButton.onClick(this.mainButtonClickHandler);
    O(() => {
      this.mainButton.setText(this.menuButtonText.value);
    });
    O(() => {
      const state = this.currentState.value;
      this.logger.log(`game state changed to "${state}"`);
      if (state === "init") {
        this.initGame();
        this.currentState.value = "run";
        return;
      }
      if (state === "run") {
        this.startTimer();
        return;
      }
      if (state === "menu" || state === "game_over") {
        this.stopTimer();
        return;
      }
    });
  }
  closeCards() {
    const cardsMap = this.cardsMap.value;
    const openCardsIds = this.openCardsIds.value;
    const firstCard = cardsMap.get(openCardsIds[0]);
    const secondCard = cardsMap.get(openCardsIds[1]);
    const isCardMatched = firstCard.animalType === secondCard.animalType;
    setTimeout(() => {
      if (isCardMatched) {
        firstCard.isActive = false;
        secondCard.isActive = false;
        window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy");
        if (this.cards.value.every((card) => !card.isActive)) {
          window.Telegram.WebApp.HapticFeedback.notificationOccurred("success");
          this.currentState.value = "game_over";
        } else {
          this.cards.value = [...this.cards.value];
        }
      }
      this.openCardsIds.value = [];
    }, CARD_FLIP_ANIMATION_TIME);
  }
  createGameCards(pairsCount) {
    const createCard = (animalType, idSuffix) => {
      return {
        animalType,
        isActive: true,
        id: `${animalType}-${idSuffix}`
      };
    };
    const animalTypes = this.getRandomAnimalTypes(pairsCount);
    const firstAnimalCards = animalTypes.map((type) => createCard(type, 1));
    const secondAnimalCards = animalTypes.map((type) => createCard(type, 2));
    const gameCards = this.getShuffledArray([...firstAnimalCards, ...secondAnimalCards]);
    return gameCards;
  }
  getShuffledArray(array) {
    const arrayClone = [...array];
    for (let i = arrayClone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayClone[i], arrayClone[j]] = [arrayClone[j], arrayClone[i]];
    }
    return arrayClone;
  }
  getRandomAnimalTypes(count) {
    return this.getShuffledArray(animalCardTypes).slice(0, count);
  }
  initGame() {
    this.resetTimer();
    this.openCardsIds.value = [];
    this.cardsFlipCount.value = 0;
    const {
      horizontalCardsCount,
      pairsCount
    } = gameDifficultyMap.get(this.gameLevel.value);
    this.cards.value = this.createGameCards(pairsCount);
    this.horizontalCardsCount.value = horizontalCardsCount;
    this.verticalCardsCount.value = this.cards.value.length / horizontalCardsCount;
  }
}

const AMOUNT_OF_SAVED_RESULTS = 5;
class StatisticService {
  constructor() {
    this.gameLevelForStatistic = a(1);
    this.statistic = a({});
    this.lastGameStatistic = a(null);
    this.currentLevelStatistic = p$1(() => {
      return this.statistic.value[this.gameLevelForStatistic.value] ?? [];
    });
    // TODO too big, move to function
    this.averageTimeSpentInSeconds = p$1(() => {
      if (!this.gameLevelForStatistic.value) {
        return null;
      }
      const statsByLevel = this.statistic.value[this.gameLevelForStatistic.value] || [];
      if (statsByLevel.length === 0) {
        return null;
      }
      const total = statsByLevel.reduce((acc, value) => acc += value.timeSpentInSeconds, 0);
      return Math.floor(total / statsByLevel.length);
    });
    // TODO too big, move to function
    this.averageCardFlipsCount = p$1(() => {
      if (!this.gameLevelForStatistic.value) {
        return null;
      }
      const statsByLevel = this.statistic.value[this.gameLevelForStatistic.value] || [];
      if (statsByLevel.length === 0) {
        return null;
      }
      const total = statsByLevel.reduce((acc, value) => acc += value.cardFlipsCount, 0);
      return Math.floor(total / statsByLevel.length);
    });
    this.logger = new Logger("StatisticService");
    this.increaseStatisticLevel = () => {
      const value = this.gameLevelForStatistic.value + 1;
      if (value <= MAX_GAME_LEVEL) {
        this.gameLevelForStatistic.value = value;
      }
    };
    this.degreesStatisticLevel = () => {
      const value = this.gameLevelForStatistic.value - 1;
      if (value > 0) {
        this.gameLevelForStatistic.value = value;
      }
    };
    this.addGameStatistic = async (level, statistic) => {
      this.lastGameStatistic.value = statistic;
      this.statistic.value = {
        ...this.statistic.value,
        [level]: [statistic, ...this.statistic.value?.[level] || []].slice(0, AMOUNT_OF_SAVED_RESULTS)
      };
      await Storage.setItem("results", JSON.stringify(this.statistic.value));
      this.logger.log("added new game statistic", this.statistic.value);
    };
    this.loadGameStatistic = async () => {
      const results = JSON.parse(await Storage.getItem("results") || "{}");
      this.statistic.value = results;
      this.logger.log("loaded game statistic", results);
    };
  }
}

const lightTheme = {
  themeBackground: "rgba(228, 223, 249, 1)",
  themeModalBackground: "rgba(255, 255, 255, 0.8)",
  themeButtonTextColor: "rgba(255, 255, 255, 1)",
  themeButtonBackground: "rgba(135, 0, 190, 0.5)",
  themeTextMainColor: "rgba(25, 17, 45, 1)",
  themeTextHighlightColor: "rgba(60, 0, 120, 1)",
  themeShadowColor: "rgba(100, 65, 165, 0.6)",
  themeBorderColor: "rgba(100, 65, 165, 0.6)"
};
const darkTheme = {
  themeBackground: "rgba(45, 20, 70, 1)",
  themeModalBackground: "rgba(35, 25, 55, 1)",
  themeButtonTextColor: "rgba(245, 230, 255, 1)",
  themeButtonBackground: "rgba(190, 0, 255, 0.85)",
  themeTextMainColor: "rgba(245, 230, 255, 1)",
  themeTextHighlightColor: "rgba(255, 205, 255, 1)",
  themeShadowColor: "rgba(190, 150, 255, 0.6)",
  themeBorderColor: "rgba(193, 113, 229, 0.5)"
};
class ThemeService {
  constructor() {
    this.theme = a(getWebAppTheme());
    this.themeProperties = p$1(() => {
      return this.theme.value === "light" ? lightTheme : darkTheme;
    });
    this.mainButton = getMainButton();
    this.webApp = getWebApp();
    this.logger = new Logger("ThemeService");
    this.setTheme = (theme) => {
      this.theme.value = theme;
    };
    this.toggleTheme = () => {
      this.theme.value = this.theme.value === "light" ? "dark" : "light";
    };
    O(() => {
      const {
        themeButtonTextColor,
        themeButtonBackground
      } = this.themeProperties.value;
      this.mainButton.setParams({
        text_color: themeButtonTextColor,
        color: themeButtonBackground
      });
      this.applyTheme(this.themeProperties.value);
    });
    O(() => {
      this.logger.log(`theme changed to "${this.theme.value}"`);
    });
    this.webApp.onEvent("themeChanged", () => {
      this.logger.log(`received "themeChanged" event from Telegram`);
      this.setTheme(getWebAppTheme());
    });
  }
  applyTheme(themeProperties) {
    const root = document.documentElement;
    for (const [key, value] of Object.entries(themeProperties)) {
      const cssVarName = `--${camelToKebab(key)}`;
      root.style.setProperty(cssVarName, value);
    }
  }
}

const game = '';

const gameThemeService = new ThemeService();
const gameStatisticService = new StatisticService();
const gameStateService = new GameStateService();
O(() => {
  if (gameStateService.currentState.value === "game_over") {
    s$1(() => {
      const {
        gameLevel,
        timeSpentInSeconds,
        cardsFlipCount
      } = gameStateService;
      gameStatisticService.addGameStatistic(gameLevel.value, {
        timeSpentInSeconds: timeSpentInSeconds.value,
        cardFlipsCount: cardsFlipCount.value
      });
    });
  }
});
function GameComponent() {
  const {
    currentState,
    menuButtonText,
    mainButtonClickHandler
  } = gameStateService;
  const state = currentState.value;
  return o$1(GameStateContext.Provider, {
    value: gameStateService,
    children: o$1(StatisticContext.Provider, {
      value: gameStatisticService,
      children: o$1(ThemeContext.Provider, {
        value: gameThemeService,
        children: o$1("div", {
          class: "game",
          children: [o$1("div", {
            class: "game__spacer"
          }), o$1("div", {
            class: "game__content",
            children: [state === "menu" && o$1(StatisticComponent, {}), state === "game_over" && o$1(GameOverComponent, {}), (state === "init" || state === "run") && o$1(GameFieldComponent, {}), !isRunningInTelegram() && o$1("button", {
              class: "game__fallback-menu",
              onClick: mainButtonClickHandler,
              children: menuButtonText.value
            })]
          }), o$1("div", {
            class: "game__spacer"
          })]
        })
      })
    })
  });
}

const style = '';

D$1(o$1(GameComponent, {}), document.getElementById("app"));
