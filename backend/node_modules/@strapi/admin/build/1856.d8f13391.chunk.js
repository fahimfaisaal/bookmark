(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[1856],{11856:(Y,un,N)=>{"use strict";Y.exports=N(34796)},34796:function(Y,un,N){(function(en,$){Y.exports=$(N(32735),N(19615))})(this,function(en,$){return function(r){var f={};function e(i){if(f[i])return f[i].exports;var o=f[i]={i,l:!1,exports:{}};return r[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=f,e.d=function(i,o,p){e.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:p})},e.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},e.t=function(i,o){if(1&o&&(i=e(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var p=Object.create(null);if(e.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var c in i)e.d(p,c,function(d){return i[d]}.bind(null,c));return p},e.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return e.d(o,"a",o),o},e.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},e.p="",e(e.s=95)}({0:function(r,f,e){r.exports=e(19)()},1:function(r,f){r.exports=en},10:function(r,f,e){var i=e(25),o=e(26),p=e(22),c=e(27);r.exports=function(d,a){return i(d)||o(d,a)||p(d,a)||c()},r.exports.default=r.exports,r.exports.__esModule=!0},13:function(r,f){function e(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=e=function(o){return typeof o},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=e=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r.exports.default=r.exports,r.exports.__esModule=!0),e(i)}r.exports=e,r.exports.default=r.exports,r.exports.__esModule=!0},19:function(r,f,e){"use strict";var i=e(20);function o(){}function p(){}p.resetWarningCache=o,r.exports=function(){function c(b,g,S,u,l,w){if(w!==i){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}function d(){return c}c.isRequired=c;var a={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:d,element:c,elementType:c,instanceOf:d,node:c,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:p,resetWarningCache:o};return a.PropTypes=a,a}},2:function(r,f){r.exports=$},20:function(r,f,e){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(r,f){r.exports=function(e,i){(i==null||i>e.length)&&(i=e.length);for(var o=0,p=new Array(i);o<i;o++)p[o]=e[o];return p},r.exports.default=r.exports,r.exports.__esModule=!0},22:function(r,f,e){var i=e(21);r.exports=function(o,p){if(o){if(typeof o=="string")return i(o,p);var c=Object.prototype.toString.call(o).slice(8,-1);return c==="Object"&&o.constructor&&(c=o.constructor.name),c==="Map"||c==="Set"?Array.from(o):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?i(o,p):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},24:function(r,f){r.exports=function(e,i){if(e==null)return{};var o,p,c={},d=Object.keys(e);for(p=0;p<d.length;p++)o=d[p],i.indexOf(o)>=0||(c[o]=e[o]);return c},r.exports.default=r.exports,r.exports.__esModule=!0},25:function(r,f){r.exports=function(e){if(Array.isArray(e))return e},r.exports.default=r.exports,r.exports.__esModule=!0},26:function(r,f){r.exports=function(e,i){var o=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var p,c,d=[],a=!0,b=!1;try{for(o=o.call(e);!(a=(p=o.next()).done)&&(d.push(p.value),!i||d.length!==i);a=!0);}catch(g){b=!0,c=g}finally{try{a||o.return==null||o.return()}finally{if(b)throw c}}return d}},r.exports.default=r.exports,r.exports.__esModule=!0},27:function(r,f){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},3:function(r,f){r.exports=function(e,i){return i||(i=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(i)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},4:function(r,f,e){var i=e(24);r.exports=function(o,p){if(o==null)return{};var c,d,a=i(o,p);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(o);for(d=0;d<b.length;d++)c=b[d],p.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(o,c)&&(a[c]=o[c])}return a},r.exports.default=r.exports,r.exports.__esModule=!0},46:function(r,f,e){"use strict";e.r(f),e.d(f,"Grid",function(){return E}),e.d(f,"GridItem",function(){return I});var i,o=e(5),p=e.n(o),c=e(4),d=e.n(c),a=e(3),b=e.n(a),g=e(1),S=e.n(g),u=e(2),l=e.n(u),w=e(0),m=e.n(w),O=Object(g.createContext)({gap:0,gridCols:12}),T=e(6),n=e(7),t=["gap","gridCols"],s=l()(T.Box)(i||(i=b()([`
  display: grid;
  grid-template-columns: repeat(`,`, 1fr);
  `,`
`])),function(v){return v.gridCols},function(v){var A=v.theme,j=v.gap;return Object(n.a)("gap",j,A)}),E=function(v){var A=v.gap,j=v.gridCols,W=d()(v,t);return S.a.createElement(O.Provider,{value:{gap:A,gridCols:j}},S.a.createElement(s,p()({gap:A,gridCols:j},W)))};E.defaultProps={gap:0,gridCols:12},E.propTypes={gap:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),gridCols:m.a.number};var R,q=["col","xs","s"],G=l.a.div(R||(R=b()([`
  grid-column: span `,`;
  max-width: 100%;

  `,` {
    grid-column: span `,`;
  }

  `,` {
    grid-column: span `,`;
  }
`])),function(v){return v.col},function(v){return v.theme.mediaQueries.tablet},function(v){return v.s},function(v){return v.theme.mediaQueries.mobile},function(v){return v.xs}),I=function(v){var A=v.col,j=v.xs,W=v.s,L=d()(v,q),k=Object(g.useContext)(O),J=k.gap,K=k.gridCols;return S.a.createElement(G,{gap:J,gridCols:K,col:A,xs:j,s:W},S.a.createElement(T.Box,L))};I.defaultProps={col:void 0,s:void 0,xs:void 0},I.propTypes={col:m.a.number,s:m.a.number,xs:m.a.number}},5:function(r,f){function e(){return r.exports=e=Object.assign||function(i){for(var o=1;o<arguments.length;o++){var p=arguments[o];for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&(i[c]=p[c])}return i},r.exports.default=r.exports,r.exports.__esModule=!0,e.apply(this,arguments)}r.exports=e,r.exports.default=r.exports,r.exports.__esModule=!0},6:function(r,f,e){"use strict";e.r(f),e.d(f,"Box",function(){return T});var i,o=e(3),p=e.n(o),c=e(2),d=e.n(c),a=e(7),b=e(1),g=e.n(b),S=e(0),u=e.n(S),l=function(n){return g.a.createElement("div",n)},w={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},m={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])};l.defaultProps=w,l.propTypes=m;var O={color:!0},T=d.a.div.withConfig({shouldForwardProp:function(n,t){return!O[n]&&t(n)}})(i||(i=p()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(n){var t=n.fontSize;return n.theme.fontSizes[t]||t},function(n){var t=n.theme,s=n.background;return t.colors[s]},function(n){var t=n.theme,s=n.color;return t.colors[s]},function(n){var t=n.theme,s=n.padding;return Object(a.a)("padding",s,t)},function(n){var t=n.theme,s=n.paddingTop;return Object(a.a)("padding-top",s,t)},function(n){var t=n.theme,s=n.paddingRight;return Object(a.a)("padding-right",s,t)},function(n){var t=n.theme,s=n.paddingBottom;return Object(a.a)("padding-bottom",s,t)},function(n){var t=n.theme,s=n.paddingLeft;return Object(a.a)("padding-left",s,t)},function(n){var t=n.theme,s=n.marginLeft;return Object(a.a)("margin-left",s,t)},function(n){var t=n.theme,s=n.marginRight;return Object(a.a)("margin-right",s,t)},function(n){var t=n.theme,s=n.marginTop;return Object(a.a)("margin-top",s,t)},function(n){var t=n.theme,s=n.marginBottom;return Object(a.a)("margin-bottom",s,t)},function(n){var t=n.theme;return n.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0},function(n){var t=n.theme;return n.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0},function(n){var t=n.theme,s=n.hasRadius,E=n.borderRadius;return s?t.borderRadius:E},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var t=n.borderColor;return n.theme.colors[t]},function(n){var t=n.theme,s=n.borderColor,E=n.borderStyle,R=n.borderWidth;if(s&&!E&&!R)return"1px solid ".concat(t.colors[s])},function(n){var t=n.theme,s=n.shadow;return t.shadows[s]},function(n){return n.pointerEvents},function(n){var t=n._hover,s=n.theme;return t?t(s):void 0},function(n){return n.display},function(n){return n.position},function(n){var t=n.left;return n.theme.spaces[t]||t},function(n){var t=n.right;return n.theme.spaces[t]||t},function(n){var t=n.top;return n.theme.spaces[t]||t},function(n){var t=n.bottom;return n.theme.spaces[t]||t},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var t=n.width;return n.theme.spaces[t]||t},function(n){var t=n.maxWidth;return n.theme.spaces[t]||t},function(n){var t=n.minWidth;return n.theme.spaces[t]||t},function(n){var t=n.height;return n.theme.spaces[t]||t},function(n){var t=n.maxHeight;return n.theme.spaces[t]||t},function(n){var t=n.minHeight;return n.theme.spaces[t]||t},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});T.defaultProps=w,T.propTypes=m},7:function(r,f,e){"use strict";var i=e(10),o=e.n(i),p=e(13),c=e.n(p);f.a=function(d,a,b){var g=a;if(Array.isArray(a)||c()(a)!=="object"||(g=[a==null?void 0:a.desktop,a==null?void 0:a.tablet,a==null?void 0:a.mobile]),g!==void 0){if(Array.isArray(g)){var S=g,u=o()(S,3),l=u[0],w=u[1],m=u[2],O="".concat(d,": ").concat(b.spaces[l],";");return w!==void 0&&(O+="".concat(b.mediaQueries.tablet,`{
          `).concat(d,": ").concat(b.spaces[w],`;
        }`)),m!==void 0&&(O+="".concat(b.mediaQueries.mobile,`{
          `).concat(d,": ").concat(b.spaces[m],`;
        }`)),O}var T=b.spaces[g]||g;return"".concat(d,": ").concat(T,";")}}},8:function(r,f,e){"use strict";e.r(f),e.d(f,"Typography",function(){return T});var i,o=e(3),p=e.n(o),c=e(2),d=e.n(c),a=["alpha","beta","delta","epsilon","omega","pi","sigma"],b=e(1),g=e.n(b),S=e(0),u=e.n(S),l=function(n){return g.a.createElement("div",n)},w={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},m={ellipsis:u.a.bool,fontSize:u.a.oneOfType([u.a.number,u.a.string]),fontWeight:u.a.string,lineHeight:u.a.oneOfType([u.a.number,u.a.string]),textColor:u.a.string,textTransform:u.a.string,variant:u.a.oneOf(a)};l.defaultProps=w,l.propTypes=m;var O={fontSize:!0,fontWeight:!0},T=d.a.span.withConfig({shouldForwardProp:function(n,t){return!O[n]&&t(n)}})(i||(i=p()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(n){var t=n.theme,s=n.fontWeight;return t.fontWeights[s]},function(n){var t=n.theme,s=n.fontSize;return t.fontSizes[s]},function(n){var t=n.theme,s=n.lineHeight;return t.lineHeights[s]},function(n){var t=n.theme,s=n.textColor;return t.colors[s||"neutral800"]},function(n){return n.textTransform},function(n){return n.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(n){var t=n.variant,s=n.theme;switch(t){case"alpha":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[5],`;
        line-height: `).concat(s.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[4],`;
        line-height: `).concat(s.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(s.fontWeights.semiBold,`;
        font-size: `).concat(s.fontSizes[3],`;
        line-height: `).concat(s.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(s.fontSizes[3],`;
        line-height: `).concat(s.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(s.fontSizes[2],`;
        line-height: `).concat(s.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(s.fontSizes[1],`;
        line-height: `).concat(s.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[0],`;
        line-height: `).concat(s.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(s.fontSizes[2],`;
      `)}});T.defaultProps=w,T.propTypes=m},9:function(r,f,e){"use strict";e.r(f),e.d(f,"Flex",function(){return n});var i,o=e(3),p=e.n(o),c=e(2),d=e.n(c),a=e(6),b=e(7),g=e(1),S=e.n(g),u=e(0),l=e.n(u),w=function(t){return S.a.createElement("div",t)},m={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},O={alignItems:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.number]),direction:l.a.string,gap:l.a.oneOfType([l.a.shape({desktop:l.a.number,mobile:l.a.number,tablet:l.a.number}),l.a.number,l.a.arrayOf(l.a.number),l.a.string]),inline:l.a.bool,justifyContent:l.a.string,reverse:l.a.bool,shrink:l.a.number,wrap:l.a.string};w.defaultProps=m,w.propTypes=O;var T={direction:!0},n=d()(a.Box).withConfig({shouldForwardProp:function(t,s){return!T[t]&&s(t)}})(i||(i=p()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(t){return t.alignItems},function(t){return t.inline?"inline-flex":"flex"},function(t){return t.direction},function(t){return t.shrink},function(t){return t.wrap},function(t){var s=t.gap,E=t.theme;return Object(b.a)("gap",s,E)},function(t){return t.justifyContent});n.defaultProps=m,n.propTypes=O},95:function(r,f,e){"use strict";e.r(f),e.d(f,"Layout",function(){return O}),e.d(f,"ActionLayout",function(){return R}),e.d(f,"ContentLayout",function(){return q}),e.d(f,"HeaderLayout",function(){return Q}),e.d(f,"BaseHeaderLayout",function(){return H}),e.d(f,"TwoColsLayout",function(){return rn}),e.d(f,"GridLayout",function(){return on});var i,o,p=e(3),c=e.n(p),d=e(1),a=e.n(d),b=e(0),g=e.n(b),S=e(2),u=e.n(S),l=e(6),w=u()(l.Box)(i||(i=c()([`
  display: grid;
  grid-template-columns: `,`;
`])),function(h){return h.hasSideNav?"auto 1fr":"1fr"}),m=u()(l.Box)(o||(o=c()([`
  overflow-x: hidden;
`]))),O=function(h){var y=h.sideNav,x=h.children;return a.a.createElement(w,{hasSideNav:Boolean(y)},y,a.a.createElement(m,{paddingBottom:10},x))};O.defaultProps={sideNav:void 0},O.propTypes={children:g.a.node.isRequired,sideNav:g.a.node};var T,n,t=e(9),s=u()(t.Flex)(T||(T=c()([`
  & > * + * {
    margin-left: `,`;
  }

  margin-left: `,`;
`])),function(h){return h.theme.spaces[2]},function(h){return h.pullRight?"auto":void 0}),E=u()(s)(n||(n=c()([`
  flex-shrink: 0;
`]))),R=function(h){var y=h.startActions,x=h.endActions;return y||x?a.a.createElement(l.Box,{paddingLeft:10,paddingRight:10},a.a.createElement(l.Box,{paddingBottom:4},a.a.createElement(t.Flex,{justifyContent:"space-between",alignItems:"flex-start"},y&&a.a.createElement(s,{wrap:"wrap"},y),x&&a.a.createElement(E,{pullRight:!0},x)))):null};R.defaultProps={endActions:void 0,startActions:void 0},R.propTypes={endActions:g.a.node,startActions:g.a.node};var q=function(h){var y=h.children;return a.a.createElement(l.Box,{paddingLeft:10,paddingRight:10},y)};q.propTypes={children:g.a.node.isRequired};var G,I=e(4),v=e.n(I),A=e(5),j=e.n(A),W=e(10),L=e.n(W),k=e(8),J=["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"],K=function(){var h,y,x=Object(d.useRef)(null),B=Object(d.useState)(null),C=L()(B,2),_=C[0],F=C[1],nn=function(M){var P=Object(d.useRef)(null),cn=Object(d.useState)(!0),an=L()(cn,2),dn=an[0],ln=an[1],fn=function(V){var X=L()(V,1)[0];ln(X.isIntersecting)};return Object(d.useEffect)(function(){var V=P.current,X=new IntersectionObserver(fn,M);return V&&X.observe(P.current),function(){V&&X.disconnect()}},[P,M]),[P,dn]}({root:null,rootMargin:"0px",threshold:0}),D=L()(nn,2),z=D[0],U=D[1];return h=z,y=function(){z.current&&F(z.current.getBoundingClientRect())},Object(d.useLayoutEffect)(function(){var M=new ResizeObserver(y);return Array.isArray(h)?h.map(function(P){P.current&&M.observe(P.current)}):h.current&&M.observe(h.current),function(){M.disconnect()}},[]),Object(d.useEffect)(function(){x.current&&F(x.current.getBoundingClientRect())},[x]),{containerRef:z,isVisible:U,baseHeaderLayoutRef:x,headerSize:_}},Q=function(h){var y=K(),x=y.containerRef,B=y.isVisible,C=y.baseHeaderLayoutRef,_=y.headerSize;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{height:_==null?void 0:_.height},ref:x},B&&a.a.createElement(H,j()({ref:C},h))),!B&&a.a.createElement(H,j()({},h,{sticky:!0,width:_==null?void 0:_.width})))};Q.displayName="HeaderLayout";var sn=u()(l.Box)(G||(G=c()([`
  position: fixed;
  top: 0;
  right: 0;
  width: `,`px;
  z-index: 4;
  box-shadow: `,`;
`])),function(h){return h.width},function(h){return h.theme.shadows.tableShadow}),H=a.a.forwardRef(function(h,y){var x=h.navigationAction,B=h.primaryAction,C=h.secondaryAction,_=h.subtitle,F=h.title,nn=h.sticky,D=h.width,z=v()(h,J),U=typeof _=="string";return nn?a.a.createElement(sn,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:D,"data-strapi-header-sticky":!0},a.a.createElement(t.Flex,{justifyContent:"space-between"},a.a.createElement(t.Flex,null,x&&a.a.createElement(l.Box,{paddingRight:3},x),a.a.createElement(l.Box,null,a.a.createElement(k.Typography,j()({variant:"beta",as:"h1"},z),F),U?a.a.createElement(k.Typography,{variant:"pi",textColor:"neutral600"},_):_),C?a.a.createElement(l.Box,{paddingLeft:4},C):null),a.a.createElement(t.Flex,null,B?a.a.createElement(l.Box,{paddingLeft:2},B):void 0))):a.a.createElement(l.Box,{ref:y,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:x?6:8,background:"neutral100","data-strapi-header":!0},x?a.a.createElement(l.Box,{paddingBottom:2},x):null,a.a.createElement(t.Flex,{justifyContent:"space-between"},a.a.createElement(t.Flex,null,a.a.createElement(k.Typography,j()({as:"h1",variant:"alpha"},z),F),C?a.a.createElement(l.Box,{paddingLeft:4},C):null),B),U?a.a.createElement(k.Typography,{variant:"epsilon",textColor:"neutral600",as:"p"},_):_)});H.displayName="BaseHeaderLayout",H.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},H.propTypes={navigationAction:g.a.node,primaryAction:g.a.node,secondaryAction:g.a.node,sticky:g.a.bool,subtitle:g.a.oneOfType([g.a.string,g.a.node]),title:g.a.string.isRequired,width:g.a.number},Q.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},Q.propTypes={navigationAction:g.a.node,primaryAction:g.a.node,secondaryAction:g.a.node,subtitle:g.a.oneOfType([g.a.string,g.a.node]),title:g.a.string.isRequired};var tn,Z=e(46),rn=function(h){var y=h.startCol,x=h.endCol;return a.a.createElement(Z.Grid,{gap:4},a.a.createElement(Z.GridItem,{col:9,s:12},a.a.createElement(l.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},y)),a.a.createElement(Z.GridItem,{col:3,s:12},a.a.createElement(l.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},x)))};rn.propTypes={endCol:g.a.node.isRequired,startCol:g.a.node.isRequired};var on=u.a.div(tn||(tn=c()([`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: `,`;
`])),function(h){return h.theme.spaces[4]});on.propTypes={children:g.a.node.isRequired}}})})}}]);
