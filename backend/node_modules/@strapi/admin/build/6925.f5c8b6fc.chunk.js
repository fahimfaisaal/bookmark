(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[6925],{9799:function(re,Vt,Y){var B=Y(98399);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */(function(O,ct){ct(Vt)})(this,function(O){"use strict";function ct(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ct(Object(e),!0).forEach(function(a){G(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ct(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Z(t){return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Z(t)}function $(){$=function(r,o){return new e(r,void 0,o)};var t=RegExp.prototype,n=new WeakMap;function e(r,o,i){var f=new RegExp(r,o);return n.set(f,i||n.get(r)),mt(f,e.prototype)}function a(r,o){var i=n.get(o);return Object.keys(i).reduce(function(f,c){return f[c]=r[i[c]],f},Object.create(null))}return qt(e,RegExp),e.prototype.exec=function(r){var o=t.exec.call(this,r);return o&&(o.groups=a(o,this)),o},e.prototype[Symbol.replace]=function(r,o){if(typeof o=="string"){var i=n.get(this);return t[Symbol.replace].call(this,r,o.replace(/\$<([^>]+)>/g,function(c,p){return"$"+i[p]}))}if(typeof o=="function"){var f=this;return t[Symbol.replace].call(this,r,function(){var c=arguments;return typeof c[c.length-1]!="object"&&(c=[].slice.call(c)).push(a(c,f)),o.apply(this,c)})}return t[Symbol.replace].call(this,r,o)},$.apply(this,arguments)}function Lt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function M(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ut(t,n,e){return n&&M(t.prototype,n),e&&M(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function G(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function qt(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&mt(t,n)}function mt(t,n){return mt=Object.setPrototypeOf||function(a,r){return a.__proto__=r,a},mt(t,n)}function tt(t,n){return Jt(t)||Zt(t,n)||Rt(t,n)||tn()}function dt(t){return Qt(t)||kt(t)||Rt(t)||Dt()}function Qt(t){if(Array.isArray(t))return wt(t)}function Jt(t){if(Array.isArray(t))return t}function kt(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Zt(t,n){var e=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,f;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(a.push(i.value),!(n&&a.length===n));r=!0);}catch(c){o=!0,f=c}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw f}}return a}}function Rt(t,n){if(!!t){if(typeof t=="string")return wt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return wt(t,n)}}function wt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Dt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var jt=function(){},xt={},At={},Ot=null,zt={mark:jt,measure:jt};try{typeof window!="undefined"&&(xt=window),typeof document!="undefined"&&(At=document),typeof MutationObserver!="undefined"&&(Ot=MutationObserver),typeof performance!="undefined"&&(zt=performance)}catch(t){}var Ft=xt.navigator||{},vt=Ft.userAgent,X=vt===void 0?"":vt,z=xt,s=At,u=Ot,b=zt,y=!!z.document,h=!!s.documentElement&&!!s.head&&typeof s.addEventListener=="function"&&typeof s.createElement=="function",w=~X.indexOf("MSIE")||~X.indexOf("Trident/"),E="___FONT_AWESOME___",U=16,_="fa",I="svg-inline--fa",x="data-fa-i2svg",nt="data-fa-pseudo-element",Et="data-fa-pseudo-element-pending",K="data-prefix",et="data-icon",at="fontawesome-i2svg",L="async",St=["HTML","HEAD","STYLE","SCRIPT"],rt=function(){try{return!0}catch(t){return!1}}(),it={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},ot={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},st={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},ie={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},oe=/fa[srltdbk]?[\-\ ]/,xn="fa-layers-text",se=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,fe={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},An=[1,2,3,4,5,6,7,8,9,10],le=An.concat([11,12,13,14,15,16,17,18,19,20]),ce=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ue=[].concat(dt(Object.keys(ot)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(An.map(function(t){return"".concat(t,"x")})).concat(le.map(function(t){return"w-".concat(t)})),On=z.FontAwesomeConfig||{};function me(t){var n=s.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function de(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(s&&typeof s.querySelector=="function"){var ve=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ve.forEach(function(t){var n=tt(t,2),e=n[0],a=n[1],r=de(me(e));r!=null&&(On[a]=r)})}var be={familyPrefix:_,styleDefault:"solid",replacementClass:I,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Pt=l(l({},be),On);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var v={};Object.keys(Pt).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(e){Pt[t]=e,Yt.forEach(function(a){return a(v)})},get:function(){return Pt[t]}})}),z.FontAwesomeConfig=v;var Yt=[];function pe(t){return Yt.push(t),function(){Yt.splice(Yt.indexOf(t),1)}}var V=U,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ge(t){if(!(!t||!h)){var n=s.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=s.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return s.head.insertBefore(n,a),t}}var he="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _t(){for(var t=12,n="";t-- >0;)n+=he[Math.random()*62|0];return n}function bt(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function nn(t){return t.classList?bt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function En(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ye(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(En(t[e]),'" ')},"").trim()}function $t(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function en(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function ke(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),f="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(o," ").concat(i," ").concat(f)},p={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:p}}function we(t){var n=t.transform,e=t.width,a=e===void 0?U:e,r=t.height,o=r===void 0?U:r,i=t.startCentered,f=i===void 0?!1:i,c="";return f&&w?c+="translate(".concat(n.x/V-a/2,"em, ").concat(n.y/V-o/2,"em) "):f?c+="translate(calc(-50% + ".concat(n.x/V,"em), calc(-50% + ").concat(n.y/V,"em)) "):c+="translate(".concat(n.x/V,"em, ").concat(n.y/V,"em) "),c+="scale(".concat(n.size/V*(n.flipX?-1:1),", ").concat(n.size/V*(n.flipY?-1:1),") "),c+="rotate(".concat(n.rotate,"deg) "),c}var xe=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Sn(){var t=_,n=I,e=v.familyPrefix,a=v.replacementClass,r=xe;if(e!==t||a!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),f=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(f,".".concat(a))}return r}var Pn=!1;function an(){v.autoAddCss&&!Pn&&(ge(Sn()),Pn=!0)}var Ae={mixout:function(){return{dom:{css:Sn,insertCss:an}}},hooks:function(){return{beforeDOMElementCreation:function(){an()},beforeI2svg:function(){an()}}}},W=z||{};W[E]||(W[E]={}),W[E].styles||(W[E].styles={}),W[E].hooks||(W[E].hooks={}),W[E].shims||(W[E].shims=[]);var R=W[E],_n=[],Oe=function t(){s.removeEventListener("DOMContentLoaded",t),Ut=1,_n.map(function(n){return n()})},Ut=!1;h&&(Ut=(s.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(s.readyState),Ut||s.addEventListener("DOMContentLoaded",Oe));function Ee(t){!h||(Ut?setTimeout(t,0):_n.push(t))}function It(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?En(t):"<".concat(n," ").concat(ye(a),">").concat(o.map(It).join(""),"</").concat(n,">")}function In(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Se=function(n,e){return function(a,r,o,i){return n.call(e,a,r,o,i)}},rn=function(n,e,a,r){var o=Object.keys(n),i=o.length,f=r!==void 0?Se(e,r):e,c,p,m;for(a===void 0?(c=1,m=n[o[0]]):(c=0,m=a);c<i;c++)p=o[c],m=f(m,n[p],p,n);return m};function Pe(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=t.charCodeAt(e++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function on(t){var n=Pe(t);return n.length===1?n[0].toString(16):null}function _e(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Cn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function sn(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=Cn(n);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(t,Cn(n)):R.styles[t]=l(l({},R.styles[t]||{}),o),t==="fas"&&sn("fa",n)}var ja=[$(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/,{d1:1,d2:2}),$(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,{cls1:1,d1:2,cls2:3,d2:4}),$(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,{cls1:1,d1:2})],Ct=R.styles,Ie=R.shims,Ce=Object.values(st),fn=null,Nn={},Tn={},Mn={},Ln={},Rn={},Ne=Object.keys(it);function Te(t){return~ue.indexOf(t)}function Me(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Te(r)?r:null}var Dn=function(){var n=function(o){return rn(Ct,function(i,f,c){return i[c]=rn(f,o,{}),i},{})};Nn=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var f=o[2].filter(function(c){return typeof c=="number"});f.forEach(function(c){r[c.toString(16)]=i})}return r}),Tn=n(function(r,o,i){if(r[i]=i,o[2]){var f=o[2].filter(function(c){return typeof c=="string"});f.forEach(function(c){r[c]=i})}return r}),Rn=n(function(r,o,i){var f=o[2];return r[i]=i,f.forEach(function(c){r[c]=i}),r});var e="far"in Ct||v.autoFetchSvg,a=rn(Ie,function(r,o){var i=o[0],f=o[1],c=o[2];return f==="far"&&!e&&(f="fas"),typeof i=="string"&&(r.names[i]={prefix:f,iconName:c}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:f,iconName:c}),r},{names:{},unicodes:{}});Mn=a.names,Ln=a.unicodes,fn=Wt(v.styleDefault)};pe(function(t){fn=Wt(t.styleDefault)}),Dn();function ln(t,n){return(Nn[t]||{})[n]}function Le(t,n){return(Tn[t]||{})[n]}function pt(t,n){return(Rn[t]||{})[n]}function jn(t){return Mn[t]||{prefix:null,iconName:null}}function Re(t){var n=Ln[t],e=ln("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function q(){return fn}var cn=function(){return{prefix:null,iconName:null,rest:[]}};function Wt(t){var n=it[t],e=ot[t]||ot[n],a=t in R.styles?t:null;return e||a||null}function Ht(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,a=e===void 0?!1:e,r=null,o=t.reduce(function(i,f){var c=Me(v.familyPrefix,f);if(Ct[f]?(f=Ce.includes(f)?ie[f]:f,r=f,i.prefix=f):Ne.indexOf(f)>-1?(r=f,i.prefix=Wt(f)):c?i.iconName=c:f!==v.replacementClass&&i.rest.push(f),!a&&i.prefix&&i.iconName){var p=r==="fa"?jn(i.iconName):{},m=pt(i.prefix,i.iconName);p.prefix&&(r=null),i.iconName=p.iconName||m||i.iconName,i.prefix=p.prefix||i.prefix,i.prefix==="far"&&!Ct.far&&Ct.fas&&!v.autoFetchSvg&&(i.prefix="fas")}return i},cn());return(o.prefix==="fa"||r==="fa")&&(o.prefix=q()||"fas"),o}var De=function(){function t(){Lt(this,t),this.definitions={}}return ut(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(f){e.definitions[f]=l(l({},e.definitions[f]||{}),i[f]),sn(f,i[f]);var c=st[f];c&&sn(c,i[f]),Dn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],f=i.prefix,c=i.iconName,p=i.icon,m=p[2];e[f]||(e[f]={}),m.length>0&&m.forEach(function(d){typeof d=="string"&&(e[f][d]=p)}),e[f][c]=p}),e}}]),t}(),zn=[],gt={},ht={},je=Object.keys(ht);function ze(t,n){var e=n.mixoutsTo;return zn=t,gt={},Object.keys(ht).forEach(function(a){je.indexOf(a)===-1&&delete ht[a]}),zn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),Z(r[i])==="object"&&Object.keys(r[i]).forEach(function(f){e[i]||(e[i]={}),e[i][f]=r[i][f]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){gt[i]||(gt[i]=[]),gt[i].push(o[i])})}a.provides&&a.provides(ht)}),e}function un(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=gt[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(a))}),n}function lt(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=gt[t]||[];r.forEach(function(o){o.apply(null,e)})}function H(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return ht[t]?ht[t].apply(null,n):void 0}function mn(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||q();if(!!n)return n=pt(e,n)||n,In(Fn.definitions,e,n)||In(R.styles,e,n)}var Fn=new De,Fe=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,lt("noAuto")},Ye={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return h?(lt("beforeI2svg",n),H("pseudoElements2svg",n),H("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Ee(function(){Ue({autoReplaceSvgRoot:e}),lt("watch",n)})}},$e={icon:function(n){if(n===null)return null;if(Z(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:pt(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Wt(n[0]);return{prefix:a,iconName:pt(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(v.familyPrefix,"-"))>-1||n.match(oe))){var r=Ht(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||q(),iconName:pt(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=q();return{prefix:o,iconName:pt(o,n)||n}}}},C={noAuto:Fe,config:v,dom:Ye,parse:$e,library:Fn,findIconDefinition:mn,toHtml:It},Ue=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?s:e;(Object.keys(R.styles).length>0||v.autoFetchSvg)&&h&&v.autoReplaceSvg&&C.dom.i2svg({node:a})};function Bt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return It(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!h){var a=s.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function We(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(en(i)&&e.found&&!a.found){var f=e.width,c=e.height,p={x:f/c/2,y:.5};r.style=$t(l(l({},o),{},{"transform-origin":"".concat(p.x+i.x/16,"em ").concat(p.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function He(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(v.familyPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function dn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,i=t.transform,f=t.symbol,c=t.title,p=t.maskId,m=t.titleId,d=t.extra,g=t.watchable,k=g===void 0?!1:g,S=a.found?a:e,D=S.width,j=S.height,N=r==="fak",P=[v.replacementClass,o?"".concat(v.familyPrefix,"-").concat(o):""].filter(function(yt){return d.classes.indexOf(yt)===-1}).filter(function(yt){return yt!==""||!!yt}).concat(d.classes).join(" "),A={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":r,"data-icon":o,class:P,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(j)})},Q=N&&!~d.classes.indexOf("fa-fw")?{width:"".concat(D/j*16*.0625,"em")}:{};k&&(A.attributes[x]=""),c&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(m||_t())},children:[c]}),delete A.attributes.title);var T=l(l({},A),{},{prefix:r,iconName:o,main:e,mask:a,maskId:p,transform:i,symbol:f,styles:l(l({},Q),d.styles)}),J=a.found&&e.found?H("generateAbstractMask",T)||{children:[],attributes:{}}:H("generateAbstractIcon",T)||{children:[],attributes:{}},Tt=J.children,Mt=J.attributes;return T.children=Tt,T.attributes=Mt,f?He(T):We(T)}function Yn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,f=t.watchable,c=f===void 0?!1:f,p=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});c&&(p[x]="");var m=l({},i.styles);en(r)&&(m.transform=we({transform:r,startCentered:!0,width:e,height:a}),m["-webkit-transform"]=m.transform);var d=$t(m);d.length>0&&(p.style=d);var g=[];return g.push({tag:"span",attributes:p,children:[n]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Be(t){var n=t.content,e=t.title,a=t.extra,r=l(l(l({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=$t(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var vn=R.styles;function bn(t){var n=t[0],e=t[1],a=t.slice(4),r=tt(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(v.familyPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:e,icon:i}}var Ge={found:!1,width:512,height:512};function Xe(t,n){!rt&&!v.showMissingIcons&&t&&B.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function pn(t,n){var e=n;return n==="fa"&&v.styleDefault!==null&&(n=q()),new Promise(function(a,r){var o={found:!1,width:512,height:512,icon:H("missingIconAbstract")||{}};if(e==="fa"){var i=jn(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&vn[n]&&vn[n][t]){var f=vn[n][t];return a(bn(f))}Xe(t,n),a(l(l({},Ge),{},{icon:v.showMissingIcons&&t?H("missingIconAbstract")||{}:{}}))})}var $n=function(){},gn=v.measurePerformance&&b&&b.mark&&b.measure?b:{mark:$n,measure:$n},Nt='FA "6.1.2"',Ke=function(n){return gn.mark("".concat(Nt," ").concat(n," begins")),function(){return Un(n)}},Un=function(n){gn.mark("".concat(Nt," ").concat(n," ends")),gn.measure("".concat(Nt," ").concat(n),"".concat(Nt," ").concat(n," begins"),"".concat(Nt," ").concat(n," ends"))},hn={begin:Ke,end:Un},Gt=function(){};function Wn(t){var n=t.getAttribute?t.getAttribute(x):null;return typeof n=="string"}function Ve(t){var n=t.getAttribute?t.getAttribute(K):null,e=t.getAttribute?t.getAttribute(et):null;return n&&e}function qe(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function Qe(){if(v.autoReplaceSvg===!0)return Xt.replace;var t=Xt[v.autoReplaceSvg];return t||Xt.replace}function Je(t){return s.createElementNS("http://www.w3.org/2000/svg",t)}function Ze(t){return s.createElement(t)}function Hn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Je:Ze:e;if(typeof t=="string")return s.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(Hn(i,{ceFn:a}))}),r}function ta(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Xt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Hn(r),e)}),e.getAttribute(x)===null&&v.keepOriginalSource){var a=s.createComment(ta(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~nn(e).indexOf(v.replacementClass))return Xt.replace(n);var r=new RegExp("".concat(v.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(f,c){return c===v.replacementClass||c.match(r)?f.toSvg.push(c):f.toNode.push(c),f},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(f){return It(f)}).join(`
`);e.setAttribute(x,""),e.innerHTML=i}};function Bn(t){t()}function Gn(t,n){var e=typeof n=="function"?n:Gt;if(t.length===0)e();else{var a=Bn;v.mutateApproach===L&&(a=z.requestAnimationFrame||Bn),a(function(){var r=Qe(),o=hn.begin("mutate");t.map(r),o(),e()})}}var yn=!1;function Xn(){yn=!0}function kn(){yn=!1}var Kt=null;function Kn(t){if(!!u&&!!v.observeMutations){var n=t.treeCallback,e=n===void 0?Gt:n,a=t.nodeCallback,r=a===void 0?Gt:a,o=t.pseudoElementsCallback,i=o===void 0?Gt:o,f=t.observeMutationsRoot,c=f===void 0?s:f;Kt=new u(function(p){if(!yn){var m=q();bt(p).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Wn(d.addedNodes[0])&&(v.searchPseudoElements&&i(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&Wn(d.target)&&~ce.indexOf(d.attributeName))if(d.attributeName==="class"&&Ve(d.target)){var g=Ht(nn(d.target)),k=g.prefix,S=g.iconName;d.target.setAttribute(K,k||m),S&&d.target.setAttribute(et,S)}else qe(d.target)&&r(d.target)})}}),h&&Kt.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function na(){!Kt||Kt.disconnect()}function ea(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],f=o.slice(1);return i&&f.length>0&&(a[i]=f.join(":").trim()),a},{})),e}function aa(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Ht(nn(t));return r.prefix||(r.prefix=q()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Le(r.prefix,t.innerText)||ln(r.prefix,on(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ra(t){var n=bt(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(e?n["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||_t()):(n["aria-hidden"]="true",n.focusable="false")),n}function ia(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=aa(t),a=e.iconName,r=e.prefix,o=e.rest,i=ra(t),f=un("parseNodeAttributes",{},t),c=n.styleParser?ea(t):[];return l({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:i}},f)}var oa=R.styles;function qn(t){var n=v.autoReplaceSvg==="nest"?Vn(t,{styleParser:!1}):Vn(t);return~n.extra.classes.indexOf(xn)?H("generateLayersText",t,n):H("generateSvgReplacementMutation",t,n)}function Qn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!h)return Promise.resolve();var e=s.documentElement.classList,a=function(d){return e.add("".concat(at,"-").concat(d))},r=function(d){return e.remove("".concat(at,"-").concat(d))},o=v.autoFetchSvg?Object.keys(it):Object.keys(oa);o.includes("fa")||o.push("fa");var i=[".".concat(xn,":not([").concat(x,"])")].concat(o.map(function(m){return".".concat(m,":not([").concat(x,"])")})).join(", ");if(i.length===0)return Promise.resolve();var f=[];try{f=bt(t.querySelectorAll(i))}catch(m){}if(f.length>0)a("pending"),r("complete");else return Promise.resolve();var c=hn.begin("onTree"),p=f.reduce(function(m,d){try{var g=qn(d);g&&m.push(g)}catch(k){rt||k.name==="MissingIcon"&&B.error(k)}return m},[]);return new Promise(function(m,d){Promise.all(p).then(function(g){Gn(g,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),c(),m()})}).catch(function(g){c(),d(g)})})}function sa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qn(t).then(function(e){e&&Gn([e],n)})}function fa(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:mn(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:mn(r||{})),t(a,l(l({},e),{},{mask:r}))}}var la=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?F:a,o=e.symbol,i=o===void 0?!1:o,f=e.mask,c=f===void 0?null:f,p=e.maskId,m=p===void 0?null:p,d=e.title,g=d===void 0?null:d,k=e.titleId,S=k===void 0?null:k,D=e.classes,j=D===void 0?[]:D,N=e.attributes,P=N===void 0?{}:N,A=e.styles,Q=A===void 0?{}:A;if(!!n){var T=n.prefix,J=n.iconName,Tt=n.icon;return Bt(l({type:"icon"},n),function(){return lt("beforeDOMElementCreation",{iconDefinition:n,params:e}),v.autoA11y&&(g?P["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(S||_t()):(P["aria-hidden"]="true",P.focusable="false")),dn({icons:{main:bn(Tt),mask:c?bn(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:J,transform:l(l({},F),r),symbol:i,title:g,maskId:m,titleId:S,extra:{attributes:P,styles:Q,classes:j}})})}},ca={mixout:function(){return{icon:fa(la)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Qn,e.nodeCallback=sa,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?s:a,o=e.callback,i=o===void 0?function(){}:o;return Qn(r,i)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,f=a.prefix,c=a.transform,p=a.symbol,m=a.mask,d=a.maskId,g=a.extra;return new Promise(function(k,S){Promise.all([pn(r,f),m.iconName?pn(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var j=tt(D,2),N=j[0],P=j[1];k([e,dn({icons:{main:N,mask:P},prefix:f,iconName:r,transform:c,symbol:p,maskId:d,title:o,titleId:i,extra:g,watchable:!0})])}).catch(S)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,f=e.styles,c=$t(f);c.length>0&&(r.style=c);var p;return en(i)&&(p=H("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(p||o.icon),{children:a,attributes:r}}}},ua={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return Bt({type:"layer"},function(){lt("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(f){Array.isArray(f)?f.map(function(c){i=i.concat(c.abstract)}):i=i.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(v.familyPrefix,"-layers")].concat(dt(o)).join(" ")},children:i}]})}}}},ma={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,f=i===void 0?[]:i,c=a.attributes,p=c===void 0?{}:c,m=a.styles,d=m===void 0?{}:m;return Bt({type:"counter",content:e},function(){return lt("beforeDOMElementCreation",{content:e,params:a}),Be({content:e.toString(),title:o,extra:{attributes:p,styles:d,classes:["".concat(v.familyPrefix,"-layers-counter")].concat(dt(f))}})})}}}},da={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?F:r,i=a.title,f=i===void 0?null:i,c=a.classes,p=c===void 0?[]:c,m=a.attributes,d=m===void 0?{}:m,g=a.styles,k=g===void 0?{}:g;return Bt({type:"text",content:e},function(){return lt("beforeDOMElementCreation",{content:e,params:a}),Yn({content:e,transform:l(l({},F),o),title:f,extra:{attributes:d,styles:k,classes:["".concat(v.familyPrefix,"-layers-text")].concat(dt(p))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,f=null,c=null;if(w){var p=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();f=m.width/p,c=m.height/p}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Yn({content:e.innerHTML,width:f,height:c,transform:o,title:r,extra:i,watchable:!0})])}}},va=new RegExp('"',"ug"),Jn=[1105920,1112319];function ba(t){var n=t.replace(va,""),e=_e(n,0),a=e>=Jn[0]&&e<=Jn[1],r=n.length===2?n[0]===n[1]:!1;return{value:on(r?n[0]:n),isSecondary:a||r}}function Zn(t,n){var e="".concat(Et).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var o=bt(t.children),i=o.filter(function(J){return J.getAttribute(nt)===n})[0],f=z.getComputedStyle(t,n),c=f.getPropertyValue("font-family").match(se),p=f.getPropertyValue("font-weight"),m=f.getPropertyValue("content");if(i&&!c)return t.removeChild(i),a();if(c&&m!=="none"&&m!==""){var d=f.getPropertyValue("content"),g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?ot[c[2].toLowerCase()]:fe[p],k=ba(d),S=k.value,D=k.isSecondary,j=c[0].startsWith("FontAwesome"),N=ln(g,S),P=N;if(j){var A=Re(S);A.iconName&&A.prefix&&(N=A.iconName,g=A.prefix)}if(N&&!D&&(!i||i.getAttribute(K)!==g||i.getAttribute(et)!==P)){t.setAttribute(e,P),i&&t.removeChild(i);var Q=ia(),T=Q.extra;T.attributes[nt]=n,pn(N,g).then(function(J){var Tt=dn(l(l({},Q),{},{icons:{main:J,mask:cn()},prefix:g,iconName:P,extra:T,watchable:!0})),Mt=s.createElement("svg");n==="::before"?t.insertBefore(Mt,t.firstChild):t.appendChild(Mt),Mt.outerHTML=Tt.map(function(yt){return It(yt)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function pa(t){return Promise.all([Zn(t,"::before"),Zn(t,"::after")])}function ga(t){return t.parentNode!==document.head&&!~St.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(nt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function te(t){if(!!h)return new Promise(function(n,e){var a=bt(t.querySelectorAll("*")).filter(ga).map(pa),r=hn.begin("searchPseudoElements");Xn(),Promise.all(a).then(function(){r(),kn(),n()}).catch(function(){r(),kn(),e()})})}var ha={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=te,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?s:a;v.searchPseudoElements&&te(r)}}},ne=!1,ya={mixout:function(){return{dom:{unwatch:function(){Xn(),ne=!0}}}},hooks:function(){return{bootstrap:function(){Kn(un("mutationObserverCallbacks",{}))},noAuto:function(){na()},watch:function(e){var a=e.observeMutationsRoot;ne?kn():Kn(un("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ee=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],f=o.slice(1).join("-");if(i&&f==="h")return a.flipX=!0,a;if(i&&f==="v")return a.flipY=!0,a;if(f=parseFloat(f),isNaN(f))return a;switch(i){case"grow":a.size=a.size+f;break;case"shrink":a.size=a.size-f;break;case"left":a.x=a.x-f;break;case"right":a.x=a.x+f;break;case"up":a.y=a.y-f;break;case"down":a.y=a.y+f;break;case"rotate":a.rotate=a.rotate+f;break}return a},e)},ka={mixout:function(){return{parse:{transform:function(e){return ee(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=ee(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,f={transform:"translate(".concat(o/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),p="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(c," ").concat(p," ").concat(m)},g={transform:"translate(".concat(i/2*-1," -256)")},k={outer:f,inner:d,path:g};return{tag:"g",attributes:l({},k.outer),children:[{tag:"g",attributes:l({},k.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:l(l({},a.icon.attributes),k.path)}]}]}}}},wn={x:0,y:0,width:"100%",height:"100%"};function ae(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function wa(t){return t.tag==="g"?t.children:[t]}var xa={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?Ht(r.split(" ").map(function(i){return i.trim()})):cn();return o.prefix||(o.prefix=q()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,f=e.maskId,c=e.transform,p=o.width,m=o.icon,d=i.width,g=i.icon,k=ke({transform:c,containerWidth:d,iconWidth:p}),S={tag:"rect",attributes:l(l({},wn),{},{fill:"white"})},D=m.children?{children:m.children.map(ae)}:{},j={tag:"g",attributes:l({},k.inner),children:[ae(l({tag:m.tag,attributes:l(l({},m.attributes),k.path)},D))]},N={tag:"g",attributes:l({},k.outer),children:[j]},P="mask-".concat(f||_t()),A="clip-".concat(f||_t()),Q={tag:"mask",attributes:l(l({},wn),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,N]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:wa(g)},Q]};return a.push(T,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(P,")")},wn)}),{children:a,attributes:r}}}},Aa={provides:function(n){var e=!1;z.matchMedia&&(e=z.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},o),{},{attributeName:"opacity"}),f={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:l(l({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(f),a.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Oa={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},Ea=[Ae,ca,ua,ma,da,ha,ya,ka,xa,Aa,Oa];ze(Ea,{mixoutsTo:C});var Sa=C.noAuto,Pa=C.config,_a=C.library,Ia=C.dom,Ca=C.parse,Na=C.findIconDefinition,Ta=C.toHtml,Ma=C.icon,La=C.layer,Ra=C.text,Da=C.counter;O.noAuto=Sa,O.config=Pa,O.library=_a,O.dom=Ia,O.parse=Ca,O.findIconDefinition=Na,O.toHtml=Ta,O.icon=Ma,O.layer=La,O.text=Ra,O.counter=Da,O.api=C,Object.defineProperty(O,"__esModule",{value:!0})})},16925:(re,Vt,Y)=>{"use strict";Y.d(Vt,{G:()=>X});var B=Y(9799),O=Y.n(B),ct=Y(60216),l=Y.n(ct),Z=Y(32735),$=Y(98399);function Lt(s,u){var b=Object.keys(s);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(s);u&&(y=y.filter(function(h){return Object.getOwnPropertyDescriptor(s,h).enumerable})),b.push.apply(b,y)}return b}function M(s){for(var u=1;u<arguments.length;u++){var b=arguments[u]!=null?arguments[u]:{};u%2?Lt(Object(b),!0).forEach(function(y){G(s,y,b[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(b)):Lt(Object(b)).forEach(function(y){Object.defineProperty(s,y,Object.getOwnPropertyDescriptor(b,y))})}return s}function ut(s){return ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},ut(s)}function G(s,u,b){return u in s?Object.defineProperty(s,u,{value:b,enumerable:!0,configurable:!0,writable:!0}):s[u]=b,s}function qt(s,u){if(s==null)return{};var b={},y=Object.keys(s),h,w;for(w=0;w<y.length;w++)h=y[w],!(u.indexOf(h)>=0)&&(b[h]=s[h]);return b}function mt(s,u){if(s==null)return{};var b=qt(s,u),y,h;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(s);for(h=0;h<w.length;h++)y=w[h],!(u.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,y)||(b[y]=s[y]))}return b}function tt(s){return dt(s)||Qt(s)||Jt(s)||Zt()}function dt(s){if(Array.isArray(s))return kt(s)}function Qt(s){if(typeof Symbol!="undefined"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function Jt(s,u){if(!!s){if(typeof s=="string")return kt(s,u);var b=Object.prototype.toString.call(s).slice(8,-1);if(b==="Object"&&s.constructor&&(b=s.constructor.name),b==="Map"||b==="Set")return Array.from(s);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return kt(s,u)}}function kt(s,u){(u==null||u>s.length)&&(u=s.length);for(var b=0,y=new Array(u);b<u;b++)y[b]=s[b];return y}function Zt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rt(s){var u,b=s.beat,y=s.fade,h=s.beatFade,w=s.bounce,E=s.shake,U=s.flash,_=s.spin,I=s.spinPulse,x=s.spinReverse,nt=s.pulse,Et=s.fixedWidth,K=s.inverse,et=s.border,at=s.listItem,L=s.flip,St=s.size,rt=s.rotation,it=s.pull,ot=(u={"fa-beat":b,"fa-fade":y,"fa-beat-fade":h,"fa-bounce":w,"fa-shake":E,"fa-flash":U,"fa-spin":_,"fa-spin-reverse":x,"fa-spin-pulse":I,"fa-pulse":nt,"fa-fw":Et,"fa-inverse":K,"fa-border":et,"fa-li":at,"fa-flip":L===!0,"fa-flip-horizontal":L==="horizontal"||L==="both","fa-flip-vertical":L==="vertical"||L==="both"},G(u,"fa-".concat(St),typeof St!="undefined"&&St!==null),G(u,"fa-rotate-".concat(rt),typeof rt!="undefined"&&rt!==null&&rt!==0),G(u,"fa-pull-".concat(it),typeof it!="undefined"&&it!==null),G(u,"fa-swap-opacity",s.swapOpacity),u);return Object.keys(ot).map(function(st){return ot[st]?st:null}).filter(function(st){return st})}function wt(s){return s=s-0,s===s}function Dt(s){return wt(s)?s:(s=s.replace(/[\-_\s]+(.)?/g,function(u,b){return b?b.toUpperCase():""}),s.substr(0,1).toLowerCase()+s.substr(1))}var tn=["style"];function jt(s){return s.charAt(0).toUpperCase()+s.slice(1)}function xt(s){return s.split(";").map(function(u){return u.trim()}).filter(function(u){return u}).reduce(function(u,b){var y=b.indexOf(":"),h=Dt(b.slice(0,y)),w=b.slice(y+1).trim();return h.startsWith("webkit")?u[jt(h)]=w:u[h]=w,u},{})}function At(s,u){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof u=="string")return u;var y=(u.children||[]).map(function(_){return At(s,_)}),h=Object.keys(u.attributes||{}).reduce(function(_,I){var x=u.attributes[I];switch(I){case"class":_.attrs.className=x,delete u.attributes.class;break;case"style":_.attrs.style=xt(x);break;default:I.indexOf("aria-")===0||I.indexOf("data-")===0?_.attrs[I.toLowerCase()]=x:_.attrs[Dt(I)]=x}return _},{attrs:{}}),w=b.style,E=w===void 0?{}:w,U=mt(b,tn);return h.attrs.style=M(M({},h.attrs.style),E),s.apply(void 0,[u.tag,M(M({},h.attrs),U)].concat(tt(y)))}var Ot=!1;try{Ot=!0}catch(s){}function zt(){if(!Ot&&$&&typeof $.error=="function"){var s;(s=$).error.apply(s,arguments)}}function Ft(s){if(s&&ut(s)==="object"&&s.prefix&&s.iconName&&s.icon)return s;if(B.parse.icon)return B.parse.icon(s);if(s===null)return null;if(s&&ut(s)==="object"&&s.prefix&&s.iconName)return s;if(Array.isArray(s)&&s.length===2)return{prefix:s[0],iconName:s[1]};if(typeof s=="string")return{prefix:"fas",iconName:s}}function vt(s,u){return Array.isArray(u)&&u.length>0||!Array.isArray(u)&&u?G({},s,u):{}}var X=Z.forwardRef(function(s,u){var b=s.icon,y=s.mask,h=s.symbol,w=s.className,E=s.title,U=s.titleId,_=s.maskId,I=Ft(b),x=vt("classes",[].concat(tt(Rt(s)),tt(w.split(" ")))),nt=vt("transform",typeof s.transform=="string"?B.parse.transform(s.transform):s.transform),Et=vt("mask",Ft(y)),K=(0,B.icon)(I,M(M(M(M({},x),nt),Et),{},{symbol:h,title:E,titleId:U,maskId:_}));if(!K)return zt("Could not find icon",I),null;var et=K.abstract,at={ref:u};return Object.keys(s).forEach(function(L){X.defaultProps.hasOwnProperty(L)||(at[L]=s[L])}),z(et[0],at)});X.displayName="FontAwesomeIcon",X.propTypes={beat:l().bool,border:l().bool,beatFade:l().bool,bounce:l().bool,className:l().string,fade:l().bool,flash:l().bool,mask:l().oneOfType([l().object,l().array,l().string]),maskId:l().string,fixedWidth:l().bool,inverse:l().bool,flip:l().oneOf([!0,!1,"horizontal","vertical","both"]),icon:l().oneOfType([l().object,l().array,l().string]),listItem:l().bool,pull:l().oneOf(["right","left"]),pulse:l().bool,rotation:l().oneOf([0,90,180,270]),shake:l().bool,size:l().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l().bool,spinPulse:l().bool,spinReverse:l().bool,symbol:l().oneOfType([l().bool,l().string]),title:l().string,titleId:l().string,transform:l().oneOfType([l().string,l().object]),swapOpacity:l().bool},X.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var z=At.bind(null,Z.createElement)}}]);
