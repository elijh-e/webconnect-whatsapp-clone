"use strict";(self.webpackChunkEunoia=self.webpackChunkEunoia||[]).push([[593],{2822:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(7462),i=t(5987),o=t(7294),a=t(6010),s=t(4670),l=t(6987),u=o.forwardRef((function(e,n){var t=e.children,s=e.classes,u=e.className,c=e.component,d=void 0===c?"ul":c,p=e.dense,f=void 0!==p&&p,v=e.disablePadding,m=void 0!==v&&v,h=e.subheader,g=(0,i.Z)(e,["children","classes","className","component","dense","disablePadding","subheader"]),b=o.useMemo((function(){return{dense:f}}),[f]);return o.createElement(l.Z.Provider,{value:b},o.createElement(d,(0,r.Z)({className:(0,a.Z)(s.root,u,f&&s.dense,!m&&s.padding,h&&s.subheader),ref:n},g),h,t))}));const c=(0,s.Z)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(u)},6987:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t(7294).createContext({})},4593:(e,n,t)=>{t.d(n,{Z:()=>P});var r=t(7462),i=t(5987),o=t(7294),a=(t(9864),t(6010)),s=t(4670),l=t(2387),u=t(3935),c=t(626),d=t(2822),p=t(5840),f=t(3834);function v(e,n,t){return e===n?e.firstChild:n&&n.nextElementSibling?n.nextElementSibling:t?null:e.firstChild}function m(e,n,t){return e===n?t?e.firstChild:e.lastChild:n&&n.previousElementSibling?n.previousElementSibling:t?null:e.lastChild}function h(e,n){if(void 0===n)return!0;var t=e.innerText;return void 0===t&&(t=e.textContent),0!==(t=t.trim().toLowerCase()).length&&(n.repeating?t[0]===n.keys[0]:0===t.indexOf(n.keys.join("")))}function g(e,n,t,r,i,o){for(var a=!1,s=i(e,n,!!n&&t);s;){if(s===e.firstChild){if(a)return;a=!0}var l=!r&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&h(s,o)&&!l)return void s.focus();s=i(e,s,t)}}var b="undefined"==typeof window?o.useEffect:o.useLayoutEffect;const y=o.forwardRef((function(e,n){var t=e.actions,a=e.autoFocus,s=void 0!==a&&a,l=e.autoFocusItem,y=void 0!==l&&l,E=e.children,Z=e.className,C=e.disabledItemsFocusable,w=void 0!==C&&C,D=e.disableListWrap,P=void 0!==D&&D,M=e.onKeyDown,k=e.variant,F=void 0===k?"selectedMenu":k,x=(0,i.Z)(e,["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"]),I=o.useRef(null),N=o.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});b((function(){s&&I.current.focus()}),[s]),o.useImperativeHandle(t,(function(){return{adjustStyleForScrollbar:function(e,n){var t=!I.current.style.width;if(e.clientHeight<I.current.clientHeight&&t){var r="".concat((0,p.Z)(!0),"px");I.current.style["rtl"===n.direction?"paddingLeft":"paddingRight"]=r,I.current.style.width="calc(100% + ".concat(r,")")}return I.current}}}),[]);var S=o.useCallback((function(e){I.current=u.findDOMNode(e)}),[]),T=(0,f.Z)(S,n),K=-1;o.Children.forEach(E,(function(e,n){o.isValidElement(e)&&(e.props.disabled||("selectedMenu"===F&&e.props.selected||-1===K)&&(K=n))}));var L=o.Children.map(E,(function(e,n){if(n===K){var t={};return y&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===F&&(t.tabIndex=0),o.cloneElement(e,t)}return e}));return o.createElement(d.Z,(0,r.Z)({role:"menu",ref:T,className:Z,onKeyDown:function(e){var n=I.current,t=e.key,r=(0,c.Z)(n).activeElement;if("ArrowDown"===t)e.preventDefault(),g(n,r,P,w,v);else if("ArrowUp"===t)e.preventDefault(),g(n,r,P,w,m);else if("Home"===t)e.preventDefault(),g(n,null,P,w,v);else if("End"===t)e.preventDefault(),g(n,null,P,w,m);else if(1===t.length){var i=N.current,o=t.toLowerCase(),a=performance.now();i.keys.length>0&&(a-i.lastTime>500?(i.keys=[],i.repeating=!0,i.previousKeyMatched=!0):i.repeating&&o!==i.keys[0]&&(i.repeating=!1)),i.lastTime=a,i.keys.push(o);var s=r&&!i.repeating&&h(r,i);i.previousKeyMatched&&(s||g(n,r,!1,w,v,i))?e.preventDefault():i.previousKeyMatched=!1}M&&M(e)},tabIndex:s?0:-1},x),L)}));var E=t(4236),Z=t(8920),C={vertical:"top",horizontal:"right"},w={vertical:"top",horizontal:"left"},D=o.forwardRef((function(e,n){var t=e.autoFocus,s=void 0===t||t,c=e.children,d=e.classes,p=e.disableAutoFocusItem,f=void 0!==p&&p,v=e.MenuListProps,m=void 0===v?{}:v,h=e.onClose,g=e.onEntering,b=e.open,D=e.PaperProps,P=void 0===D?{}:D,M=e.PopoverClasses,k=e.transitionDuration,F=void 0===k?"auto":k,x=e.TransitionProps,I=(x=void 0===x?{}:x).onEntering,N=(0,i.Z)(x,["onEntering"]),S=e.variant,T=void 0===S?"selectedMenu":S,K=(0,i.Z)(e,["autoFocus","children","classes","disableAutoFocusItem","MenuListProps","onClose","onEntering","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"]),L=(0,Z.Z)(),R=s&&!f&&b,A=o.useRef(null),O=o.useRef(null),H=-1;o.Children.map(c,(function(e,n){o.isValidElement(e)&&(e.props.disabled||("menu"!==T&&e.props.selected||-1===H)&&(H=n))}));var j=o.Children.map(c,(function(e,n){return n===H?o.cloneElement(e,{ref:function(n){O.current=u.findDOMNode(n),(0,E.Z)(e.ref,n)}}):e}));return o.createElement(l.ZP,(0,r.Z)({getContentAnchorEl:function(){return O.current},classes:M,onClose:h,TransitionProps:(0,r.Z)({onEntering:function(e,n){A.current&&A.current.adjustStyleForScrollbar(e,L),g&&g(e,n),I&&I(e,n)}},N),anchorOrigin:"rtl"===L.direction?C:w,transformOrigin:"rtl"===L.direction?C:w,PaperProps:(0,r.Z)({},P,{classes:(0,r.Z)({},P.classes,{root:d.paper})}),open:b,ref:n,transitionDuration:F},K),o.createElement(y,(0,r.Z)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),h&&h(e,"tabKeyDown"))},actions:A,autoFocus:s&&(-1===H||f),autoFocusItem:R,variant:T},m,{className:(0,a.Z)(d.list,m.className)}),j))}));const P=(0,s.Z)({paper:{maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"},list:{outline:0}},{name:"MuiMenu"})(D)}}]);