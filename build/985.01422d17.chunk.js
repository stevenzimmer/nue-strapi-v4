(self.webpackChunknue_strapi_v_4=self.webpackChunknue_strapi_v_4||[]).push([[985],{60985:(n,t,e)=>{"use strict";n.exports=e(34387)},34387:function(n,t,e){var r,o,a;n.exports=(r=e(67294),o=e(78384),a=e(39711),function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=115)}({0:function(n,t,e){n.exports=e(16)()},1:function(n,t){n.exports=r},10:function(n,t,e){var r=e(22),o=e(23),a=e(19),i=e(24);n.exports=function(n,t){return r(n)||o(n,t)||a(n,t)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},115:function(n,t,e){"use strict";e.r(t),e.d(t,"LinkButton",(function(){return S}));var r,o=e(5),a=e.n(o),i=e(6),c=e.n(i),s=e(3),u=e.n(s),d=e(1),l=e.n(d),f=e(34),p=e(2),h=e.n(p),g=e(0),b=e.n(g),m=e(8),v=e(4),x=e(35),y=e(29),O=e(38),w=["variant","startIcon","endIcon","disabled","children","size","href","to"],_=h()(O.BaseButtonWrapper)(r||(r=u()(["\n  padding: ",";\n  background: ",";\n  border: none;\n  border-radius: ",";\n  "," {\n    display: flex;\n    align-items: center;\n  }\n  "," {\n    color: ",";\n  }\n  &[aria-disabled='true'] {\n    ","\n    &:active {\n      ","\n    }\n  }\n  &:hover {\n    ","\n  }\n  &:active {\n    ","\n  }\n  ","\n\n  /**\n    Link specific properties\n  */\n  display: inline-flex;\n  text-decoration: none;\n  pointer-events: ",";\n"])),(function(n){var t=n.theme,e=n.size;return"".concat("S"===e?t.spaces[2]:"10px"," ").concat(t.spaces[4])}),(function(n){return n.theme.colors.primary600}),(function(n){return n.theme.borderRadius}),v.Box,m.Typography,(function(n){return n.theme.colors.neutral0}),x.b,x.b,x.c,x.a,x.d,(function(n){return n.disabled?"none":void 0})),S=l.a.forwardRef((function(n,t){var e=n.variant,r=n.startIcon,o=n.endIcon,i=n.disabled,s=n.children,u=n.size,d=n.href,p=n.to,h=c()(n,w),g=d?"_blank":void 0,b=d?"noreferrer noopener":void 0;return l.a.createElement(_,a()({ref:t,"aria-disabled":i,size:u,variant:e,target:g,rel:b,to:i?void 0:p,href:i?"#":d},h,{as:p&&!i?f.NavLink:"a"}),r&&l.a.createElement(v.Box,{"aria-hidden":!0,paddingRight:2},r),"S"===u?l.a.createElement(m.Typography,{variant:"pi",fontWeight:"bold"},s):l.a.createElement(m.Typography,{fontWeight:"bold"},s),o&&l.a.createElement(v.Box,{"aria-hidden":!0,paddingLeft:2},o))}));S.displayName="LinkButton",S.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,size:"S",variant:"default",onClick:void 0,href:void 0,to:void 0},S.propTypes={children:b.a.string.isRequired,disabled:b.a.bool,endIcon:b.a.element,href:function(n){if(!n.disabled&&!n.to&&!n.href)return new Error("href must be defined")},onClick:b.a.func,size:b.a.oneOf(y.a),startIcon:b.a.element,to:function(n){if(!n.disabled&&!n.href&&!n.to)return new Error("to must be defined")},variant:b.a.oneOf(y.c)}},13:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var r=function(n){return function(t){var e=t.theme,r=t.size;return e.sizes[n][r]}},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(t){var e=t.theme,r=t.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(n,":focus-within {\n        border: 1px solid ").concat(r?e.colors.danger600:e.colors.primary600,";\n        box-shadow: ").concat(r?e.colors.danger600:e.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},a=function(n){var t=n.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(t.colors.primary600,";\n    }\n  }\n")}},16:function(n,t,e){"use strict";var r=e(17);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return n}n.isRequired=n;var e={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return e.PropTypes=e,e}},17:function(n,t,e){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(n,t){n.exports=function(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r},n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,t,e){var r=e(18);n.exports=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=o},21:function(n,t){n.exports=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,t){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},23:function(n,t){n.exports=function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,a=[],i=!0,c=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(n){c=!0,o=n}finally{try{i||null==e.return||e.return()}finally{if(c)throw o}}return a}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,t,e){var r=e(41),o=e(42),a=e(19),i=e(43);n.exports=function(n){return r(n)||o(n)||a(n)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},29:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var r=["success-light","danger-light"],o=["default","tertiary","secondary","danger","success","ghost"].concat(r),a=["S","L"]},3:function(n,t){n.exports=function(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},34:function(n,t){n.exports=a},35:function(n,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return d})),e.d(t,"d",(function(){return l}));var r=e(27),o=e.n(r),a=e(8),i=e(29),c=function(n){return i.b.includes(n)?n.substring(0,n.lastIndexOf("-")):"tertiary"===n?"neutral":["default","secondary"].includes(n)||!i.c.includes(n)?"primary":n},s=function(n){var t=n.theme;return"\n    border: 1px solid ".concat(t.colors.neutral200,";\n    background: ").concat(t.colors.neutral150,";\n    ").concat(a.Typography," {\n      color: ").concat(t.colors.neutral600,";\n    }\n    svg {\n      > g, path {\n        fill: ").concat(t.colors.neutral600,";\n      }\n    }\n  ")},u=function(n){var t=n.theme,e=n.variant;return[].concat(o()(i.b),["secondary"]).includes(e)?"\n      background-color: ".concat(t.colors.neutral0,";\n    "):"tertiary"===e||"ghost"===e?"\n      background-color: ".concat(t.colors.neutral100,";\n    "):"\n    border: 1px solid ".concat(t.colors["".concat(c(e),"500")],";\n    background: ").concat(t.colors["".concat(c(e),"500")],";\n  ")},d=function(n){var t=n.theme,e=n.variant;return[].concat(o()(i.b),["secondary"]).includes(e)?"\n      background-color: ".concat(t.colors.neutral0,";\n      border: 1px solid ").concat(t.colors["".concat(c(e),"600")],";\n      ").concat(a.Typography," {\n        color: ").concat(t.colors["".concat(c(e),"600")],";\n      }\n      svg {\n        > g, path {\n          fill: ").concat(t.colors["".concat(c(e),"600")],";\n        }\n      }\n    "):"tertiary"===e?"\n      background-color: ".concat(t.colors.neutral150,";\n    "):"\n    border: 1px solid ".concat(t.colors["".concat(c(e),"600")],";\n    background: ").concat(t.colors["".concat(c(e),"600")],";\n  ")},l=function(n){var t=n.theme,e=n.variant;switch(e){case"danger-light":case"success-light":case"secondary":return"\n          border: 1px solid ".concat(t.colors["".concat(c(e),"200")],";\n          background: ").concat(t.colors["".concat(c(e),"100")],";\n          ").concat(a.Typography," {\n            color: ").concat(t.colors["".concat(c(e),"700")],";\n          }\n          svg {\n            > g, path {\n              fill: ").concat(t.colors["".concat(c(e),"700")],";\n            }\n          }\n        ");case"tertiary":return"\n          border: 1px solid ".concat(t.colors.neutral200,";\n          background: ").concat(t.colors.neutral0,";\n          ").concat(a.Typography," {\n            color: ").concat(t.colors.neutral800,";\n          }\n          svg {\n            > g, path {\n              fill: ").concat(t.colors.neutral800,";\n            }\n          }\n        ");case"ghost":return"\n        border: 1px solid transparent;\n        background: transparent;\n\n        ".concat(a.Typography," {\n          color: ").concat(t.colors.neutral800,";\n        }\n\n        svg {\n          > g, path {\n            fill: ").concat(t.colors.neutral500,";\n          }\n        }\n      ");default:return"\n          border: 1px solid ".concat(t.colors["".concat(c(e),"600")],";\n          background: ").concat(t.colors["".concat(c(e),"600")],";\n        ")}}},38:function(n,t,e){"use strict";e.r(t),e.d(t,"BaseButtonWrapper",(function(){return v})),e.d(t,"BaseButton",(function(){return x}));var r,o=e(5),a=e.n(o),i=e(6),c=e.n(i),s=e(3),u=e.n(s),d=e(1),l=e.n(d),f=e(0),p=e.n(f),h=e(2),g=e.n(h),b=e(13),m=["disabled","children"],v=g.a.button(r||(r=u()(["\n  display: flex;\n  cursor: pointer;\n  padding: ",";\n  border-radius: ",";\n  background: ",";\n  border: 1px solid ",";\n  svg {\n    height: ",";\n    width: ",";\n  }\n  svg {\n    > g,\n    path {\n      fill: ",";\n    }\n  }\n  &[aria-disabled='true'] {\n    pointer-events: none;\n  }\n\n  ","\n"])),(function(n){return n.theme.spaces[2]}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.colors.neutral0}),(function(n){return n.theme.colors.neutral200}),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.colors.neutral0}),b.a),x=l.a.forwardRef((function(n,t){var e=n.disabled,r=n.children,o=c()(n,m);return l.a.createElement(v,a()({ref:t,"aria-disabled":e,type:"button",disabled:e},o),r)}));x.displayName="BaseButton",x.defaultProps={disabled:!1},x.propTypes={children:p.a.node.isRequired,disabled:p.a.bool}},4:function(n,t,e){"use strict";e.r(t),e.d(t,"Box",(function(){return f}));var r,o=e(3),a=e.n(o),i=e(0),c=e.n(i),s=e(2),u=e.n(s),d=e(7),l={color:!0},f=u.a.div.withConfig({shouldForwardProp:function(n,t){return!l[n]&&t(n)}})(r||(r=a()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var t=n.fontSize;return n.theme.fontSizes[t]||t}),(function(n){var t=n.theme,e=n.background;return t.colors[e]}),(function(n){var t=n.theme,e=n.color;return t.colors[e]}),(function(n){var t=n.theme,e=n.padding;return Object(d.a)("padding",e,t)}),(function(n){var t=n.theme,e=n.paddingTop;return Object(d.a)("padding-top",e,t)}),(function(n){var t=n.theme,e=n.paddingRight;return Object(d.a)("padding-right",e,t)}),(function(n){var t=n.theme,e=n.paddingBottom;return Object(d.a)("padding-bottom",e,t)}),(function(n){var t=n.theme,e=n.paddingLeft;return Object(d.a)("padding-left",e,t)}),(function(n){var t=n.theme,e=n.marginLeft;return Object(d.a)("margin-left",e,t)}),(function(n){var t=n.theme,e=n.marginRight;return Object(d.a)("margin-right",e,t)}),(function(n){var t=n.theme,e=n.marginTop;return Object(d.a)("margin-top",e,t)}),(function(n){var t=n.theme,e=n.marginBottom;return Object(d.a)("margin-bottom",e,t)}),(function(n){var t=n.theme;return n.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var t=n.theme;return n.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var t=n.theme,e=n.hasRadius,r=n.borderRadius;return e?t.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var t=n.borderColor;return n.theme.colors[t]}),(function(n){var t=n.theme,e=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(e&&!r&&!o)return"1px solid ".concat(t.colors[e])}),(function(n){var t=n.theme,e=n.shadow;return t.shadows[e]}),(function(n){return n.pointerEvents}),(function(n){var t=n._hover,e=n.theme;return t?t(e):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var t=n.left;return n.theme.spaces[t]||t}),(function(n){var t=n.right;return n.theme.spaces[t]||t}),(function(n){var t=n.top;return n.theme.spaces[t]||t}),(function(n){var t=n.bottom;return n.theme.spaces[t]||t}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var t=n.width;return n.theme.sizes[t]||t}),(function(n){var t=n.maxWidth;return n.theme.sizes[t]||t}),(function(n){var t=n.minWidth;return n.theme.sizes[t]||t}),(function(n){var t=n.height;return n.theme.sizes[t]||t}),(function(n){var t=n.maxHeight;return n.theme.sizes[t]||t}),(function(n){var t=n.minHeight;return n.theme.sizes[t]||t}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));f.displayName="Box",f.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},f.propTypes={_hover:c.a.func,background:c.a.string,basis:c.a.oneOfType([c.a.string,c.a.string]),borderColor:c.a.string,children:c.a.oneOfType([c.a.node,c.a.string]),color:c.a.string,flex:c.a.oneOfType([c.a.string,c.a.string]),grow:c.a.oneOfType([c.a.string,c.a.string]),hasRadius:c.a.bool,hiddenS:c.a.bool,hiddenXS:c.a.bool,padding:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingBottom:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingLeft:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingRight:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingTop:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),shadow:c.a.string,shrink:c.a.oneOfType([c.a.string,c.a.string])}},41:function(n,t,e){var r=e(18);n.exports=function(n){if(Array.isArray(n))return r(n)},n.exports.default=n.exports,n.exports.__esModule=!0},42:function(n,t){n.exports=function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)},n.exports.default=n.exports,n.exports.__esModule=!0},43:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,t){function e(){return n.exports=e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,e.apply(this,arguments)}n.exports=e,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,t,e){var r=e(21);n.exports=function(n,t){if(null==n)return{};var e,o,a=r(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a},n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,t,e){"use strict";var r=e(10),o=e.n(r);t.a=function(n,t,e){if(void 0!==t){if(Array.isArray(t)){var r=o()(t,3),a=r[0],i=r[1],c=r[2],s="".concat(n,": ").concat(e.spaces[a],";");return void 0!==i&&(s+="".concat(e.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(e.spaces[i],";\n        }")),void 0!==c&&(s+="".concat(e.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(e.spaces[c],";\n        }")),s}var u=e.spaces[t]||t;return"".concat(n,": ").concat(u,";")}}},8:function(n,t,e){"use strict";e.r(t),e.d(t,"Typography",(function(){return l}));var r,o=e(3),a=e.n(o),i=e(0),c=e.n(i),s=e(2),u=["alpha","beta","delta","epsilon","omega","pi","sigma"],d={fontSize:!0,fontWeight:!0},l=e.n(s).a.span.withConfig({shouldForwardProp:function(n,t){return!d[n]&&t(n)}})(r||(r=a()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var t=n.theme,e=n.fontWeight;return t.fontWeights[e]}),(function(n){var t=n.theme,e=n.fontSize;return t.fontSizes[e]}),(function(n){var t=n.theme,e=n.lineHeight;return t.lineHeights[e]}),(function(n){var t=n.theme,e=n.textColor;return t.colors[e||"neutral800"]}),(function(n){return n.textTransform}),(function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(n){var t=n.variant,e=n.theme;switch(t){case"alpha":return"\n        font-weight: ".concat(e.fontWeights.bold,";\n        font-size: ").concat(e.fontSizes[5],";\n        line-height: ").concat(e.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(e.fontWeights.bold,";\n        font-size: ").concat(e.fontSizes[4],";\n        line-height: ").concat(e.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(e.fontWeights.semiBold,";\n        font-size: ").concat(e.fontSizes[3],";\n        line-height: ").concat(e.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(e.fontSizes[3],";\n        line-height: ").concat(e.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(e.fontSizes[2],";\n        line-height: ").concat(e.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(e.fontSizes[1],";\n        line-height: ").concat(e.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(e.fontWeights.bold,";\n        font-size: ").concat(e.fontSizes[0],";\n        line-height: ").concat(e.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(e.fontSizes[2],";\n      ")}}));l.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},l.propTypes={fontSize:c.a.oneOfType([c.a.number,c.a.string]),fontWeight:c.a.string,lineHeight:c.a.oneOfType([c.a.number,c.a.string]),textColor:c.a.string,textTransform:c.a.string,variant:c.a.oneOf(u)}}}))}}]);