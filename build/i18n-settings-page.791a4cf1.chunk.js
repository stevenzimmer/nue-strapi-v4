(self.webpackChunknue_strapi_v_4=self.webpackChunknue_strapi_v_4||[]).push([[3552],{62031:(e,t,a)=>{"use strict";e.exports=a(59525)},59525:function(e,t,a){var n,r;e.exports=(n=a(67294),r=a(78384),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=108)}({0:function(e,t,a){e.exports=a(16)()},1:function(e,t){e.exports=n},10:function(e,t,a){var n=a(22),r=a(23),l=a(19),o=a(24);e.exports=function(e,t){return n(e)||r(e,t)||l(e,t)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},108:function(e,t,a){"use strict";a.r(t),a.d(t,"Main",(function(){return h})),a.d(t,"SkipToContent",(function(){return E}));var n,r=a(5),l=a.n(r),o=a(6),u=a.n(o),i=a(3),d=a.n(i),s=a(1),c=a.n(s),f=a(0),p=a.n(f),m=a(2),v=a.n(m),g=["labelledBy"],y=v.a.main(n||(n=d()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),h=function(e){var t=e.labelledBy,a=u()(e,g),n=t||"main-content-title";return c.a.createElement(y,l()({"aria-labelledby":n,id:"main-content",tabIndex:-1},a))};h.defaultProps={labelledBy:void 0},h.propTypes={labelledBy:p.a.string};var b,T=a(4),x=v()(T.Box)(b||(b=d()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.spaces[3]})),E=function(e){var t=e.children;return c.a.createElement(x,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},t)};E.propTypes={children:p.a.node.isRequired}},16:function(e,t,a){"use strict";var n=a(17);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,l,o){if(o!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return a.PropTypes=a,a}},17:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n},e.exports.default=e.exports,e.exports.__esModule=!0},19:function(e,t,a){var n=a(18);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=r},21:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,t){e.exports=function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],o=!0,u=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){u=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(u)throw r}}return l}},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,t,a){"use strict";a.r(t),a.d(t,"Box",(function(){return f}));var n,r=a(3),l=a.n(r),o=a(0),u=a.n(o),i=a(2),d=a.n(i),s=a(7),c={color:!0},f=d.a.div.withConfig({shouldForwardProp:function(e,t){return!c[e]&&t(e)}})(n||(n=l()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t}),(function(e){var t=e.theme,a=e.background;return t.colors[a]}),(function(e){var t=e.theme,a=e.color;return t.colors[a]}),(function(e){var t=e.theme,a=e.padding;return Object(s.a)("padding",a,t)}),(function(e){var t=e.theme,a=e.paddingTop;return Object(s.a)("padding-top",a,t)}),(function(e){var t=e.theme,a=e.paddingRight;return Object(s.a)("padding-right",a,t)}),(function(e){var t=e.theme,a=e.paddingBottom;return Object(s.a)("padding-bottom",a,t)}),(function(e){var t=e.theme,a=e.paddingLeft;return Object(s.a)("padding-left",a,t)}),(function(e){var t=e.theme,a=e.marginLeft;return Object(s.a)("margin-left",a,t)}),(function(e){var t=e.theme,a=e.marginRight;return Object(s.a)("margin-right",a,t)}),(function(e){var t=e.theme,a=e.marginTop;return Object(s.a)("margin-top",a,t)}),(function(e){var t=e.theme,a=e.marginBottom;return Object(s.a)("margin-bottom",a,t)}),(function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0}),(function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0}),(function(e){var t=e.theme,a=e.hasRadius,n=e.borderRadius;return a?t.borderRadius:n}),(function(e){return e.borderStyle}),(function(e){return e.borderWidth}),(function(e){var t=e.borderColor;return e.theme.colors[t]}),(function(e){var t=e.theme,a=e.borderColor,n=e.borderStyle,r=e.borderWidth;if(a&&!n&&!r)return"1px solid ".concat(t.colors[a])}),(function(e){var t=e.theme,a=e.shadow;return t.shadows[a]}),(function(e){return e.pointerEvents}),(function(e){var t=e._hover,a=e.theme;return t?t(a):void 0}),(function(e){return e.display}),(function(e){return e.position}),(function(e){var t=e.left;return e.theme.spaces[t]||t}),(function(e){var t=e.right;return e.theme.spaces[t]||t}),(function(e){var t=e.top;return e.theme.spaces[t]||t}),(function(e){var t=e.bottom;return e.theme.spaces[t]||t}),(function(e){return e.zIndex}),(function(e){return e.overflow}),(function(e){return e.cursor}),(function(e){var t=e.width;return e.theme.sizes[t]||t}),(function(e){var t=e.maxWidth;return e.theme.sizes[t]||t}),(function(e){var t=e.minWidth;return e.theme.sizes[t]||t}),(function(e){var t=e.height;return e.theme.sizes[t]||t}),(function(e){var t=e.maxHeight;return e.theme.sizes[t]||t}),(function(e){var t=e.minHeight;return e.theme.sizes[t]||t}),(function(e){return e.transition}),(function(e){return e.transform}),(function(e){return e.animation}),(function(e){return e.shrink}),(function(e){return e.grow}),(function(e){return e.basis}),(function(e){return e.flex}),(function(e){return e.textAlign}),(function(e){return e.textTransform}),(function(e){return e.lineHeight}),(function(e){return e.cursor}));f.displayName="Box",f.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},f.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},5:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,a.apply(this,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,t,a){var n=a(21);e.exports=function(e,t){if(null==e)return{};var a,r,l=n(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l},e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,t,a){"use strict";var n=a(10),r=a.n(n);t.a=function(e,t,a){if(void 0!==t){if(Array.isArray(t)){var n=r()(t,3),l=n[0],o=n[1],u=n[2],i="".concat(e,": ").concat(a.spaces[l],";");return void 0!==o&&(i+="".concat(a.mediaQueries.tablet,"{\n          ").concat(e,": ").concat(a.spaces[o],";\n        }")),void 0!==u&&(i+="".concat(a.mediaQueries.mobile,"{\n          ").concat(e,": ").concat(a.spaces[u],";\n        }")),i}var d=a.spaces[t]||t;return"".concat(e,": ").concat(d,";")}}}}))},48931:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67154)),l=n(a(67294)),o=n(a(45697)),u=a(49425),i=a(30741),d=a(9008),s=a(26851),c=a(41798),f=n(a(19352)),p=n(a(18568)),m=a(97132),v=a(68547),g=a(42976),y=function(e){var t=e.locales,a=e.onDeleteLocale,n=e.onEditLocale,o=(0,m.useIntl)().formatMessage;return l.default.createElement(c.Table,{colCount:4,rowCount:t.length+1},l.default.createElement(c.Thead,null,l.default.createElement(c.Tr,null,l.default.createElement(c.Th,null,l.default.createElement(u.Typography,{variant:"sigma",textColor:"neutral600"},o({id:(0,g.getTrad)("Settings.locales.row.id")}))),l.default.createElement(c.Th,null,l.default.createElement(u.Typography,{variant:"sigma",textColor:"neutral600"},o({id:(0,g.getTrad)("Settings.locales.row.displayName")}))),l.default.createElement(c.Th,null,l.default.createElement(u.Typography,{variant:"sigma",textColor:"neutral600"},o({id:(0,g.getTrad)("Settings.locales.row.default-locale")}))),l.default.createElement(c.Th,null,l.default.createElement(s.VisuallyHidden,null,"Actions")))),l.default.createElement(c.Tbody,null,t.map((function(e){return l.default.createElement(c.Tr,(0,r.default)({key:e.id},(0,v.onRowClick)({fn:function(){return n(e)},condition:n})),l.default.createElement(c.Td,null,l.default.createElement(u.Typography,{textColor:"neutral800"},e.id)),l.default.createElement(c.Td,null,l.default.createElement(u.Typography,{textColor:"neutral800"},e.name)),l.default.createElement(c.Td,null,l.default.createElement(u.Typography,{textColor:"neutral800"},e.isDefault?o({id:(0,g.getTrad)("Settings.locales.row.default-locale")}):null)),l.default.createElement(c.Td,null,l.default.createElement(d.Stack,(0,r.default)({horizontal:!0,size:1,style:{justifyContent:"flex-end"}},v.stopPropagation),n&&l.default.createElement(i.IconButton,{onClick:function(){return n(e)},label:o({id:(0,g.getTrad)("Settings.list.actions.edit")}),icon:l.default.createElement(f.default,null),noBorder:!0}),a&&!e.isDefault&&l.default.createElement(i.IconButton,{onClick:function(){return a(e)},label:o({id:(0,g.getTrad)("Settings.list.actions.delete")}),icon:l.default.createElement(p.default,null),noBorder:!0}))))}))))};y.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},y.propTypes={locales:o.default.array,onDeleteLocale:o.default.func,onEditLocale:o.default.func};var h=y;t.default=h},14711:(e,t,a)=>{"use strict";var n=a(95318),r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(63038)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=x(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(67294)),u=a(97132),i=n(a(45697)),d=a(19408),s=a(62031),c=a(78862),f=a(68547),p=n(a(80768)),m=n(a(85407)),v=n(a(60499)),g=a(42976),y=n(a(17965)),h=n(a(36638)),b=n(a(1749)),T=n(a(48931));function x(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:t})(e)}var E=function(e){var t=e.canUpdateLocale,a=e.canDeleteLocale,n=e.onToggleCreateModal,r=e.isCreating,i=(0,o.useState)(),x=(0,l.default)(i,2),E=x[0],O=x[1],C=(0,o.useState)(),M=(0,l.default)(C,2),_=M[0],S=M[1],w=(0,v.default)().locales,L=(0,u.useIntl)().formatMessage;(0,f.useFocusWhenNavigate)();var P=a?O:void 0,j=t?S:void 0;return o.default.createElement(s.Main,{tabIndex:-1},o.default.createElement(c.HeaderLayout,{primaryAction:o.default.createElement(d.Button,{startIcon:o.default.createElement(p.default,null),onClick:n,size:"L"},L({id:(0,g.getTrad)("Settings.list.actions.add")})),title:L({id:(0,g.getTrad)("plugin.name")}),subtitle:L({id:(0,g.getTrad)("Settings.list.description")})}),o.default.createElement(c.ContentLayout,null,(null===w||void 0===w?void 0:w.length)>0?o.default.createElement(T.default,{locales:w,onDeleteLocale:P,onEditLocale:j}):o.default.createElement(c.EmptyStateLayout,{icon:o.default.createElement(m.default,{width:void 0,height:void 0}),content:L({id:(0,g.getTrad)("Settings.list.empty.title")}),action:n?o.default.createElement(d.Button,{variant:"secondary",startIcon:o.default.createElement(p.default,null),onClick:n},L({id:(0,g.getTrad)("Settings.list.actions.add")})):null})),r&&o.default.createElement(b.default,{onClose:n}),_&&o.default.createElement(y.default,{onClose:function(){return S(void 0)},locale:_}),o.default.createElement(h.default,{localeToDelete:E,onClose:function(){return O(void 0)}}))};E.defaultProps={onToggleCreateModal:void 0},E.propTypes={canUpdateLocale:i.default.bool.isRequired,canDeleteLocale:i.default.bool.isRequired,onToggleCreateModal:i.default.func,isCreating:i.default.bool.isRequired};var O=E;t.default=O},94823:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),l=a(54675),o=a(97132),u=n(a(45697)),i=n(a(60499)),d=n(a(44889)),s=a(42976),c=r.default.memo((function(e){var t=e.value,a=e.onClear,n=e.onLocaleChange,u=e.error,c=(0,o.useIntl)().formatMessage,f=(0,d.default)(),p=f.defaultLocales,m=f.isLoading,v=(0,i.default)().locales,g=(p||[]).map((function(e){return{label:e.name,value:e.code}})).filter((function(e){var a=e.value,n=v.find((function(e){return e.code===a}));return!n||n.code===t})),y=t||"";return r.default.createElement(l.Combobox,{"aria-busy":m,error:u,label:c({id:(0,s.getTrad)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:y,onClear:t?a:void 0,onChange:function(e){var t=g.find((function(t){return t.value===e}));t&&n({code:t.value,displayName:t.label})},placeholder:c({id:"components.placeholder.select",defaultMessage:"Select"})},g.map((function(e){return r.default.createElement(l.ComboboxOption,{value:e.value,key:e.value},e.label)})))}));c.defaultProps={error:void 0,value:void 0,onClear:function(){},onLocaleChange:function(){}},c.propTypes={error:u.default.string,onClear:u.default.func,onLocaleChange:u.default.func,value:u.default.string};var f=c;t.default=f},92374:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),l=a(80831),o=a(97132),u=a(81325),i=a(42976),d=function(){var e=(0,l.useFormikContext)(),t=e.values,a=e.setFieldValue,n=(0,o.useIntl)().formatMessage;return r.default.createElement(u.Checkbox,{hint:n({id:(0,i.getTrad)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:function(){return a("isDefault",!t.isDefault)},value:t.isDefault},n({id:(0,i.getTrad)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};t.default=d},40654:(e,t,a)=>{"use strict";var n=a(95318),r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(67294)),o=a(34626),u=a(55967),i=a(97132),d=a(80831),s=a(42976),c=n(a(94823));function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var p=function(){var e=(0,i.useIntl)().formatMessage,t=(0,d.useFormikContext)(),a=t.values,n=t.handleChange,r=t.setFieldValue,f=t.errors,p=(0,l.useCallback)((function(e){r("displayName",e.displayName),r("code",e.code)}),[r]),m=(0,l.useCallback)((function(){r("displayName",""),r("code","")}),[r]);return l.default.createElement(o.Grid,{gap:4},l.default.createElement(o.GridItem,{col:6},l.default.createElement(c.default,{error:f.code,value:a.code,onLocaleChange:p,onClear:m})),l.default.createElement(o.GridItem,{col:6},l.default.createElement(u.TextInput,{name:"displayName",label:e({id:(0,s.getTrad)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:e({id:(0,s.getTrad)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:f.displayName?e({id:(0,s.getTrad)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:a.displayName,onChange:n})))};t.default=p},1749:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(87757)),l=n(a(48926)),o=n(a(67294)),u=n(a(45697)),i=a(68547),d=a(75146),s=a(11402),c=a(19408),f=a(49425),p=a(14276),m=a(5493),v=a(67826),g=n(a(84734)),y=a(97132),h=a(80831),b=n(a(33299)),T=a(42976),x=n(a(59014)),E=n(a(40654)),O=n(a(92374)),C={code:"",displayName:"",isDefault:!1},M=function(e){var t=e.onClose,a=(0,x.default)(),n=a.isAdding,u=a.addLocale,M=(0,y.useIntl)().formatMessage,_=(0,i.useRBACProvider)().refetchPermissions,S=function(){var e=(0,l.default)(r.default.mark((function e(t){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({code:t.code,name:t.displayName,isDefault:t.isDefault});case 2:return e.next=4,_();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.default.createElement(d.ModalLayout,{onClose:t,labelledBy:"add-locale-title"},o.default.createElement(h.Formik,{initialValues:C,onSubmit:S,validationSchema:b.default,validateOnChange:!1},o.default.createElement(i.Form,null,o.default.createElement(d.ModalHeader,null,o.default.createElement(f.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},M({id:(0,T.getTrad)("Settings.list.actions.add"),defaultMessage:"Add a locale"}))),o.default.createElement(d.ModalBody,null,o.default.createElement(s.TabGroup,{label:M({id:(0,T.getTrad)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},o.default.createElement(v.Flex,{justifyContent:"space-between"},o.default.createElement(f.Typography,{as:"h2",variant:"beta"},M({id:(0,T.getTrad)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),o.default.createElement(s.Tabs,null,o.default.createElement(s.Tab,null,M({id:(0,T.getTrad)("Settings.locales.modal.base"),defaultMessage:"Base settings"})),o.default.createElement(s.Tab,null,M({id:(0,T.getTrad)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),o.default.createElement(p.Divider,null),o.default.createElement(m.Box,{paddingTop:7,paddingBottom:7},o.default.createElement(s.TabPanels,null,o.default.createElement(s.TabPanel,null,o.default.createElement(E.default,null)),o.default.createElement(s.TabPanel,null,o.default.createElement(O.default,null)))))),o.default.createElement(d.ModalFooter,{startActions:o.default.createElement(c.Button,{variant:"tertiary",onClick:t},M({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:o.default.createElement(c.Button,{type:"submit",startIcon:o.default.createElement(g.default,null),disabled:n},M({id:"app.components.Button.save",defaultMessage:"Save"}))}))))};M.propTypes={onClose:u.default.func.isRequired};var _=M;t.default=_},36638:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),l=n(a(45697)),o=a(68547),u=n(a(55553)),i=function(e){var t=e.localeToDelete,a=e.onClose,n=(0,u.default)(),l=n.isDeleting,i=n.deleteLocale,d=Boolean(t);return r.default.createElement(o.ConfirmDialog,{isConfirmButtonLoading:l,onConfirm:function(){return i(t.id).then(a)},onToggleDialog:a,isOpen:d})};i.defaultProps={localeToDelete:void 0},i.propTypes={localeToDelete:l.default.shape({id:l.default.number.isRequired}),onClose:l.default.func.isRequired};var d=i;t.default=d},96522:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),l=n(a(45697)),o=a(80831),u=a(97132),i=a(81325),d=a(42976),s=function(e){var t=e.isDefaultLocale,a=(0,o.useFormikContext)(),n=a.values,l=a.setFieldValue,s=(0,u.useIntl)().formatMessage;return r.default.createElement(i.Checkbox,{name:"isDefault",hint:s({id:(0,d.getTrad)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:function(){return l("isDefault",!n.isDefault)},value:n.isDefault,disabled:t},s({id:(0,d.getTrad)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};s.propTypes={isDefaultLocale:l.default.bool.isRequired};var c=s;t.default=c},24101:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),l=a(97132),o=n(a(45697)),u=a(80831),i=a(34626),d=a(55967),s=a(43808),c=a(42976),f=function(e){var t=e.locale,a=(0,l.useIntl)().formatMessage,n=(0,u.useFormikContext)(),o=n.values,f=n.handleChange,p=n.errors;return r.default.createElement(i.Grid,{gap:4},r.default.createElement(i.GridItem,{col:6},r.default.createElement(s.Select,{label:a({id:(0,c.getTrad)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:t.code,disabled:!0},r.default.createElement(s.Option,{value:t.code},t.name))),r.default.createElement(i.GridItem,{col:6},r.default.createElement(d.TextInput,{name:"displayName",label:a({id:(0,c.getTrad)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:a({id:(0,c.getTrad)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:p.displayName?a({id:(0,c.getTrad)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:o.displayName,onChange:f})))},p=f;t.default=p,f.propTypes={locale:o.default.shape({id:o.default.number.isRequired,name:o.default.string.isRequired,code:o.default.string.isRequired,isDefault:o.default.bool.isRequired}).isRequired}},17965:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(87757)),l=n(a(48926)),o=n(a(67294)),u=n(a(45697)),i=a(68547),d=a(97132),s=a(80831),c=n(a(84734)),f=a(75146),p=a(11402),m=a(67826),v=a(5493),g=a(19408),y=a(14276),h=a(49425),b=n(a(33299)),T=n(a(59921)),x=a(42976),E=n(a(24101)),O=n(a(96522)),C=function(e){var t=e.locale,a=e.onClose,n=(0,i.useRBACProvider)().refetchPermissions,u=(0,T.default)(),C=u.isEditing,M=u.editLocale,_=(0,d.useIntl)().formatMessage,S=function(){var e=(0,l.default)(r.default.mark((function e(a){var l,o;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=a.displayName,o=a.isDefault,e.next=3,M(t.id,{name:l,isDefault:o});case 3:return e.next=5,n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.default.createElement(f.ModalLayout,{onClose:a,labelledBy:"edit-locale-title"},o.default.createElement(s.Formik,{initialValues:{code:null===t||void 0===t?void 0:t.code,displayName:(null===t||void 0===t?void 0:t.name)||"",isDefault:Boolean(null===t||void 0===t?void 0:t.isDefault)},onSubmit:S,validationSchema:b.default},o.default.createElement(i.Form,null,o.default.createElement(f.ModalHeader,null,o.default.createElement(h.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},_({id:(0,x.getTrad)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),o.default.createElement(f.ModalBody,null,o.default.createElement(p.TabGroup,{label:_({id:(0,x.getTrad)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},o.default.createElement(m.Flex,{justifyContent:"space-between"},o.default.createElement(h.Typography,{as:"h2"},_({id:(0,x.getTrad)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),o.default.createElement(p.Tabs,null,o.default.createElement(p.Tab,null,_({id:(0,x.getTrad)("Settings.locales.modal.base"),defaultMessage:"Base settings"})),o.default.createElement(p.Tab,null,_({id:(0,x.getTrad)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),o.default.createElement(y.Divider,null),o.default.createElement(v.Box,{paddingTop:7,paddingBottom:7},o.default.createElement(p.TabPanels,null,o.default.createElement(p.TabPanel,null,o.default.createElement(E.default,{locale:t})),o.default.createElement(p.TabPanel,null,o.default.createElement(O.default,{isDefaultLocale:Boolean(t&&t.isDefault)})))))),o.default.createElement(f.ModalFooter,{startActions:o.default.createElement(g.Button,{variant:"tertiary",onClick:a},_({id:"app.components.Button.cancel"})),endActions:o.default.createElement(g.Button,{type:"submit",startIcon:o.default.createElement(c.default,null),disabled:C},_({id:"app.components.Button.save"}))}))))};C.defaultProps={locale:void 0},C.propTypes={locale:u.default.shape({id:u.default.number.isRequired,name:u.default.string.isRequired,code:u.default.string.isRequired,isDefault:u.default.bool.isRequired}),onClose:u.default.func.isRequired};var M=C;t.default=M},59014:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(87757)),l=n(a(63038)),o=n(a(48926)),u=a(67294),i=a(68547),d=a(37424),s=n(a(27361)),c=a(42976),f=a(66201),p=function(){var e=(0,o.default)(r.default.mark((function e(t,a){var n,l,o,u;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.code,l=t.name,o=t.isDefault,e.next=3,(0,i.request)("/i18n/locales",{method:"POST",body:{name:l,code:n,isDefault:o}});case 3:return u=e.sent,a({type:"success",message:{id:(0,c.getTrad)("Settings.locales.modal.create.success")}}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=(0,u.useState)(!1),t=(0,l.default)(e,2),a=t[0],n=t[1],m=(0,d.useDispatch)(),v=(0,i.useNotification)(),g=function(){var e=(0,o.default)(r.default.mark((function e(t){var a,l;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,p(t,v);case 4:a=e.sent,m({type:f.ADD_LOCALE,newLocale:a}),e.next=13;break;case 8:throw e.prev=8,e.t0=e.catch(1),(l=(0,s.default)(e.t0,"response.payload.message",null))&&l.includes("already exists")?v({type:"warning",message:{id:(0,c.getTrad)("Settings.locales.modal.create.alreadyExist")}}):v({type:"warning",message:{id:"notification.error"}}),e.t0;case 13:return e.prev=13,n(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,8,13,16]])})));return function(t){return e.apply(this,arguments)}}();return{isAdding:a,addLocale:g}};t.default=m},44889:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(87757)),l=n(a(48926)),o=a(23724),u=a(68547),i=a(84686),d=a(97132),s=a(42976),c=function(){var e=(0,l.default)(r.default.mark((function e(t){var a;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.request)("/i18n/iso-locales",{method:"GET"});case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),t({type:"warning",message:{id:"notification.error"}}),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,d.useIntl)().formatMessage,t=(0,i.useNotifyAT)().notifyStatus,a=(0,u.useNotification)(),n=(0,o.useQuery)("default-locales",(function(){return c(a).then((function(a){return t(e({id:(0,s.getTrad)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),a}))})),r=n.isLoading;return{defaultLocales:n.data,isLoading:r}};t.default=f},55553:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(87757)),l=n(a(63038)),o=n(a(48926)),u=a(67294),i=a(68547),d=a(37424),s=a(42976),c=a(66201),f=function(){var e=(0,o.default)(r.default.mark((function e(t,a){var n;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.request)("/i18n/locales/".concat(t),{method:"DELETE"});case 3:return n=e.sent,a({type:"success",message:{id:(0,s.getTrad)("Settings.locales.modal.delete.success")}}),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),a({type:"warning",message:{id:"notification.error"}}),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=(0,u.useState)(!1),t=(0,l.default)(e,2),a=t[0],n=t[1],s=(0,d.useDispatch)(),p=(0,i.useNotification)(),m=function(){var e=(0,o.default)(r.default.mark((function e(t){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,f(t,p);case 3:s({type:c.DELETE_LOCALE,id:t}),n(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{isDeleting:a,deleteLocale:m}};t.default=p},59921:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(87757)),l=n(a(63038)),o=n(a(48926)),u=a(67294),i=a(68547),d=a(37424),s=a(42976),c=a(66201),f=function(){var e=(0,o.default)(r.default.mark((function e(t,a,n){var l;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.request)("/i18n/locales/".concat(t),{method:"PUT",body:a});case 3:return l=e.sent,n({type:"success",message:{id:(0,s.getTrad)("Settings.locales.modal.edit.success")}}),e.abrupt("return",l);case 8:return e.prev=8,e.t0=e.catch(0),n({type:"warning",message:{id:"notification.error"}}),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,u.useState)(!1),t=(0,l.default)(e,2),a=t[0],n=t[1],s=(0,d.useDispatch)(),p=(0,i.useNotification)(),m=function(){var e=(0,o.default)(r.default.mark((function e(t,a){var l;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,f(t,a,p);case 3:l=e.sent,s({type:c.UPDATE_LOCALE,editedLocale:l}),n(!1);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return{isEditing:a,editLocale:m}};t.default=p},61810:(e,t,a)=>{"use strict";var n=a(95318),r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(63038)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(67294)),u=n(a(45697)),i=n(a(14711));function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var s=function(e){var t=e.canReadLocale,a=e.canCreateLocale,n=e.canDeleteLocale,r=e.canUpdateLocale,u=(0,o.useState)(!1),d=(0,l.default)(u,2),s=d[0],c=d[1],f=a?function(){return c((function(e){return!e}))}:void 0;return t?o.default.createElement(i.default,{canUpdateLocale:r,canDeleteLocale:n,onToggleCreateModal:f,isCreating:s}):null};s.propTypes={canReadLocale:u.default.bool.isRequired,canCreateLocale:u.default.bool.isRequired,canUpdateLocale:u.default.bool.isRequired,canDeleteLocale:u.default.bool.isRequired};var c=s;t.default=c},40986:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),l=a(68547),o=n(a(61810)),u=n(a(33879)),i=function(){var e=(0,l.useRBAC)(u.default),t=e.isLoading,a=e.allowedActions,n=a.canRead,i=a.canUpdate,d=a.canCreate,s=a.canDelete;return t?null:r.default.createElement(o.default,{canReadLocale:n,canCreateLocale:d,canUpdateLocale:i,canDeleteLocale:s})};t.default=i},33299:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(53209),r=a(68547),l=(0,n.object)().shape({code:(0,n.string)().required(),displayName:(0,n.string)().max(50,"Settings.locales.modal.locales.displayName.error").required(r.translatedErrors.required)});t.default=l}}]);