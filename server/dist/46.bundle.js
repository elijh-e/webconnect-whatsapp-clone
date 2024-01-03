"use strict";(self.webpackChunkEunoia=self.webpackChunkEunoia||[]).push([[46],{2285:(e,n,t)=>{t.d(n,{Z:()=>m});var s=t(7462),r=t(5987),a=t(7294),i=t(3935),o=t(9437),c=t(2666),l=t(3834),p=t(8920),u=t(3291),d=t(5653);function f(e,n){var t=function(e,n){var t,s=n.getBoundingClientRect();if(n.fakeTransform)t=n.fakeTransform;else{var r=window.getComputedStyle(n);t=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var a=0,i=0;if(t&&"none"!==t&&"string"==typeof t){var o=t.split("(")[1].split(")")[0].split(",");a=parseInt(o[4],10),i=parseInt(o[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(a-s.left,"px)"):"right"===e?"translateX(-".concat(s.left+s.width-a,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(i-s.top,"px)"):"translateY(-".concat(s.top+s.height-i,"px)")}(e,n);t&&(n.style.webkitTransform=t,n.style.transform=t)}var v={enter:u.x9.enteringScreen,exit:u.x9.leavingScreen};const m=a.forwardRef((function(e,n){var t=e.children,u=e.direction,m=void 0===u?"down":u,E=e.in,g=e.onEnter,h=e.onEntered,x=e.onEntering,C=e.onExit,y=e.onExited,w=e.onExiting,Z=e.style,N=e.timeout,b=void 0===N?v:N,k=e.TransitionComponent,T=void 0===k?c.ZP:k,A=(0,r.Z)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),L=(0,p.Z)(),V=a.useRef(null),R=a.useCallback((function(e){V.current=i.findDOMNode(e)}),[]),z=(0,l.Z)(t.ref,R),H=(0,l.Z)(z,n),M=function(e){return function(n){e&&(void 0===n?e(V.current):e(V.current,n))}},P=M((function(e,n){f(m,e),(0,d.n)(e),g&&g(e,n)})),O=M((function(e,n){var t=(0,d.C)({timeout:b,style:Z},{mode:"enter"});e.style.webkitTransition=L.transitions.create("-webkit-transform",(0,s.Z)({},t,{easing:L.transitions.easing.easeOut})),e.style.transition=L.transitions.create("transform",(0,s.Z)({},t,{easing:L.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",x&&x(e,n)})),I=M(h),S=M(w),X=M((function(e){var n=(0,d.C)({timeout:b,style:Z},{mode:"exit"});e.style.webkitTransition=L.transitions.create("-webkit-transform",(0,s.Z)({},n,{easing:L.transitions.easing.sharp})),e.style.transition=L.transitions.create("transform",(0,s.Z)({},n,{easing:L.transitions.easing.sharp})),f(m,e),C&&C(e)})),Y=M((function(e){e.style.webkitTransition="",e.style.transition="",y&&y(e)})),$=a.useCallback((function(){V.current&&f(m,V.current)}),[m]);return a.useEffect((function(){if(!E&&"down"!==m&&"right"!==m){var e=(0,o.Z)((function(){V.current&&f(m,V.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[m,E]),a.useEffect((function(){E||$()}),[E,$]),a.createElement(T,(0,s.Z)({nodeRef:V,onEnter:P,onEntered:I,onEntering:O,onExit:X,onExited:Y,onExiting:S,appear:!0,in:E,timeout:b},A),(function(e,n){return a.cloneElement(t,(0,s.Z)({ref:H,style:(0,s.Z)({visibility:"exited"!==e||E?void 0:"hidden"},Z,t.props.style)},n))}))}))},9437:(e,n,t)=>{function s(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function s(){for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];var i=this,o=function(){e.apply(i,r)};clearTimeout(n),n=setTimeout(o,t)}return s.clear=function(){clearTimeout(n)},s}t.d(n,{Z:()=>s})},5554:(e,n,t)=>{t.d(n,{Z:()=>r});var s=t(7294);const r=(0,t(5209).Z)(s.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email")},9967:(e,n,t)=>{t.d(n,{Z:()=>r});var s=t(7294);const r=(0,t(5209).Z)(s.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub")},4103:(e,n,t)=>{t.d(n,{Z:()=>r});var s=t(7294);const r=(0,t(5209).Z)(s.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn")},7723:(e,n,t)=>{t.d(n,{Z:()=>u});var s=t(7462),r=t(3366),a=t(1721);function i(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=t(7294),c=t(2666),l=function(e,n){return e&&n&&n.split(" ").forEach((function(n){return s=n,void((t=e).classList?t.classList.remove(s):"string"==typeof t.className?t.className=i(t.className,s):t.setAttribute("class",i(t.className&&t.className.baseVal||"",s)));var t,s}))},p=function(e){function n(){for(var n,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return(n=e.call.apply(e,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(e,t){var s=n.resolveArguments(e,t),r=s[0],a=s[1];n.removeClasses(r,"exit"),n.addClass(r,a?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(e,t)},n.onEntering=function(e,t){var s=n.resolveArguments(e,t),r=s[0],a=s[1]?"appear":"enter";n.addClass(r,a,"active"),n.props.onEntering&&n.props.onEntering(e,t)},n.onEntered=function(e,t){var s=n.resolveArguments(e,t),r=s[0],a=s[1]?"appear":"enter";n.removeClasses(r,a),n.addClass(r,a,"done"),n.props.onEntered&&n.props.onEntered(e,t)},n.onExit=function(e){var t=n.resolveArguments(e)[0];n.removeClasses(t,"appear"),n.removeClasses(t,"enter"),n.addClass(t,"exit","base"),n.props.onExit&&n.props.onExit(e)},n.onExiting=function(e){var t=n.resolveArguments(e)[0];n.addClass(t,"exit","active"),n.props.onExiting&&n.props.onExiting(e)},n.onExited=function(e){var t=n.resolveArguments(e)[0];n.removeClasses(t,"exit"),n.addClass(t,"exit","done"),n.props.onExited&&n.props.onExited(e)},n.resolveArguments=function(e,t){return n.props.nodeRef?[n.props.nodeRef.current,e]:[e,t]},n.getClassNames=function(e){var t=n.props.classNames,s="string"==typeof t,r=s?(s&&t?t+"-":"")+e:t[e];return{baseClassName:r,activeClassName:s?r+"-active":t[e+"Active"],doneClassName:s?r+"-done":t[e+"Done"]}},n}(0,a.Z)(n,e);var t=n.prototype;return t.addClass=function(e,n,t){var s=this.getClassNames(n)[t+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===n&&"done"===t&&r&&(s+=" "+r),"active"===t&&e&&e.scrollTop,s&&(this.appliedClasses[n][t]=s,function(e,n){e&&n&&n.split(" ").forEach((function(n){return s=n,void((t=e).classList?t.classList.add(s):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(t,s)||("string"==typeof t.className?t.className=t.className+" "+s:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+s)));var t,s}))}(e,s))},t.removeClasses=function(e,n){var t=this.appliedClasses[n],s=t.base,r=t.active,a=t.done;this.appliedClasses[n]={},s&&l(e,s),r&&l(e,r),a&&l(e,a)},t.render=function(){var e=this.props,n=(e.classNames,(0,r.Z)(e,["classNames"]));return o.createElement(c.ZP,(0,s.Z)({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(o.Component);p.defaultProps={classNames:""},p.propTypes={};const u=p}}]);