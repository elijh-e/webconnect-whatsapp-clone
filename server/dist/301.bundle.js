"use strict";(self.webpackChunkEunoia=self.webpackChunkEunoia||[]).push([[301],{7134:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(7294),a=r(1120),i=r(2387);const o=(0,a.Z)({chatActions:{borderRadius:"5px",zIndex:25e4,display:"flex",flexDirection:"column",background:"#fff !important","& > div":{display:"flex"},"& div:first-child":{},"& > div:last-of-type":{flexDirection:"column","& > button":{padding:"12px 0 12px 15px",borderRadius:0,"& .MuiIconButton-label":{justifyContent:"flex-start"},"& > span > span.MuiTypography-root":{padding:"0 25px 0 15px",color:"#000"}}}}});function m({children:n,open:e,anchorReference:r,anchorPosition:a,transformOrigin:m,anchorEl:s,onClose:l,anchorOrigin:c}){const d=o();return void 0===a?t.createElement(i.ZP,{open:e,anchorEl:s,onClose:l,elevation:2,anchorOrigin:c||{vertical:"center",horizontal:"center"},transformOrigin:m||{vertical:"center",horizontal:"center"}},t.createElement("div",{className:d.chatActions},n)):t.createElement(i.ZP,{open:e,elevation:2,anchorReference:"anchorPosition",anchorPosition:a,onClose:l,anchorOrigin:c||{vertical:"center",horizontal:"center"},transformOrigin:m||{vertical:"center",horizontal:"center"}},t.createElement("div",{className:d.chatActions},n))}m.propTypes={};const s=m},2301:(n,e,r)=>{r.r(e),r.d(e,{default:()=>P});var t=r(7294),a=r(9704),i=r(1120),o=r(3901),m=r(7812),s=r(2318),l=r(1860),c=r(5757),d=r(998),u=r(2822),f=r(6869),p=r(5517),b=r(6837),g=r(9009),w=r(2792),k=r(1115),y=r(8626),Z=r(1686),x=r(1395),h=r(9969),E=r(8239),v=r(3084),A=r(6426),O=r(7134),_=r(9585),z=r(7723),I=r(2005),C=r(3268),Y=r(8656);function T(){return T=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},T.apply(this,arguments)}const M=(0,i.Z)({backdrop:{position:"fixed",width:"100%",background:"#0000002b"},bottomSnackbar:{width:"100%"},groupInfo:{},oval:{"& path":{stroke:"#ffffff59"}},info:{minWidth:"300px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column","& .MuiTypography-root":{whiteSpace:"pre-line"}},header:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"10px",marginTop:"5px","& .MuiIconButton-root":{"& svg":{fontSize:"1.4rem"}}},banner:{width:"100%"},infos:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"1rem",padding:"0 10px",textAlign:"center","& .MuiAvatar-root":{padding:"52px",borderRadius:"100%",marginBottom:4,"& > svg":{fontSize:"5rem"}},"& > .MuiSvgIcon-root":{fontSize:"1.2rem"},"& .MuiTypography-body1":{fontSize:"1.2rem"},"& .MuiTypography-body2":{fontSize:"1rem"}},list:{margin:"5px 0"},wrap:{padding:"10px 15px"},participantsList:{"& .MuiListSubheader-sticky":{position:"initial"},"& .MuiTypography-body2":{whiteSpace:"nowrap",textOverflow:"ellipsis",maxWidth:"200px",overflow:"hidden"}}});function U({loading:n,isAnAdmin:e}){const r=M();return t.createElement(l.Z,null,t.createElement(m.Z,{edge:"end","aria-label":"Group admin",title:"Group admin"},n?t.createElement(v.Preloader,{className:r.oval,use:v.Oval,size:20,strokeWidth:15,strokeColor:"darkblue",duration:500}):e?t.createElement(Z.Z,{color:"primary"}):t.createElement(t.Fragment,null)))}function X({isTheAccountOwner:n,username:e,bio:r,loading:a,isAnAdmin:i,isGroupCreator:o}){return t.createElement(d.Z,null,t.createElement(f.Z,null,o?t.createElement(g.Z,{overlap:"rectangular",badgeContent:t.createElement(x.Z,{color:"secondary",style:{fontSize:".9rem"}}),anchorOrigin:{vertical:"bottom",horizontal:"right"}},t.createElement(A.Z,{username:e,badge:!1})):t.createElement(A.Z,{username:e,badge:!1})),t.createElement(c.Z,{primary:t.createElement(s.Z,{style:{fontFamily:"Roboto"}},n?"You":e),secondary:r||""}),t.createElement(U,{loading:a,isAnAdmin:i}))}function S({username:n,bio:e,isGroupCreator:r,isAnAdmin:a,loading:i,isTheAccountOwner:o,assignAdmin:l,blockGroupUser:u}){const[p,b]=t.useState(null),[w,k]=t.useState(!1),y=n=>{k(!1),b(null)};return t.createElement(t.Fragment,null,t.createElement(d.Z,{button:!o,onContextMenu:n=>(n.preventDefault(),k(!0),b(n.currentTarget),!1),selected:w},t.createElement(f.Z,null,r?t.createElement(g.Z,{overlap:"rectangular",badgeContent:t.createElement(x.Z,{color:"secondary",style:{fontSize:".9rem"}}),anchorOrigin:{vertical:"bottom",horizontal:"right"}},t.createElement(A.Z,{username:n,badge:!1})):t.createElement(A.Z,{username:n,badge:!1})),t.createElement(c.Z,{primary:t.createElement(s.Z,{style:{fontFamily:"Roboto"}},o?"You":n),secondary:e||""}),t.createElement(U,{loading:i,isAnAdmin:a})),!o&&t.createElement(O.Z,{open:w,anchorEl:p,onClose:y},t.createElement("div",null,t.createElement(m.Z,{onClick:()=>{l(n),y()}},t.createElement(Z.Z,{style:{color:"#6495ed"}}),t.createElement(s.Z,{component:"span"},a?"Drop admin role":"Assign admin role")),t.createElement(m.Z,{onClick:()=>{u(n),y()}},t.createElement(E.Z,{style:{color:"#ff6a6a"}}),t.createElement(s.Z,{component:"span"}," Remove user ")))))}const P=function({participants:n,_id:e,name:r,description:i,show:l,createdBy:c,admins:d,settings:f}){const g=M(),Z=(0,a.I0)(),{username:x,id:E}=(0,a.v9)((n=>n.account.account)),[v,A]=t.useState(!1),[O,U]=t.useState(""),P=(0,a.v9)((n=>n.activeUsers.activeUsers)),R=t.useRef(null);n=n.filter((n=>n)).sort(((n,e)=>n.username===c.username&&e.username!==c.username||n.username===x&&e.username!==x?-1:void 0));const Q=()=>{Z((0,_.T6)({component:"gSettings",parent:"gInfos"}))},D=()=>n.some((n=>n.username===x))&&(!f.allowEditForAdminsOnly||f.allowEditForAdminsOnly&&d.some((n=>n.username===x)))?t.createElement(m.Z,{onClick:Q},t.createElement(h.Z,null)):t.createElement(t.Fragment,null);return t.createElement(t.Fragment,null,t.createElement(z.Z,{in:l,nodeRef:R,timeout:500,classNames:{enter:Y.Z.animate__animated,enterActive:Y.Z.animate__fadeInRight,exit:Y.Z.animate__animated,exitActive:Y.Z.animate__fadeOutRight},unmountOnExit:!0},t.createElement("div",{className:g.groupInfo,ref:R},t.createElement("div",{className:g.info},t.createElement("div",{className:g.header},t.createElement(m.Z,{onClick:()=>Z((0,_.T6)({component:"gRoot",parent:"gInfos",value:!1}))},t.createElement(k.Z,{style:{color:"#999"}})),-1!==d.findIndex((n=>n.username===x))&&t.createElement(m.Z,{onClick:n=>{Z((0,_.T6)({component:"gMembers",parent:"gInfos"}))}},t.createElement(y.Z,null)),t.createElement(D,null)),t.createElement("div",{className:g.banner},t.createElement("div",{className:g.infos},t.createElement(o.Z,null,t.createElement(w.Z,null)),t.createElement(s.Z,{component:"h1"}," ",r," "),t.createElement(s.Z,{component:"span",variant:"body2"}," ",i," ")),t.createElement(p.Z,null),t.createElement(u.Z,{className:[g.participantsList,g.list].join(" "),subheader:t.createElement(b.Z,{component:"div",id:"nested-list-subheader"},t.createElement(s.Z,{color:"textPrimary"}," Participants "))},d.some((n=>n.username===x))?n.map(((n,r)=>{const a=P.find((e=>e.username===n.username))||{};return t.createElement(S,T({key:r},a,{loading:O===n.username,username:n.username,assignAdmin:n=>(n=>{U(n),(0,C.Z)("addAdmin",{_id:e,username:n},(()=>U("")))})(n),blockGroupUser:n=>(n=>{if(!d.some((n=>n.username===x)))return;const r=(new Date).getTime();(0,C.Z)("removeGroupUser",{_id:e,username:n,message:{type:"alert",chatId:r,message:`${x} removed ${n}`,timestamp:(0,I.hi)()}},(()=>{}))})(n),isGroupCreator:c.username===n.username,isTheAccountOwner:x===n.username,isAnAdmin:-1!==d.findIndex((e=>e.username===n.username))}))})):n.map(((n,e)=>{const r=P.find((e=>e.username===n.username))||{};return t.createElement(X,T({key:e},r,{loading:O===n.username,username:n.username,isGroupCreator:c.username===n.username,isTheAccountOwner:x===n.username,isAnAdmin:-1!==d.findIndex((e=>e.username===n.username))}))}))))))))}},6140:(n,e,r)=>{r.d(e,{W:()=>t,Z:()=>a});const t=(0,r(3992).io)("/user",{autoConnect:!1,forceNew:!0});function a(n){const{token:e,username:r}=n;t.auth={token:e,username:r},t.connect()}},3268:(n,e,r)=>{r.d(e,{Z:()=>a});var t=r(6140);function a(n,...e){var r,a;r=n,a=e,t.W.emit(r,...a)}},7041:(n,e,r)=>{r.d(e,{Z:()=>m});var t=r(8081),a=r.n(t),i=r(3645),o=r.n(i)()(a());o.push([n.id,".AwmRHMFTDP8V4WJBxBx6 {\r\n  -webkit-animation-duration: .5s;\r\n  animation-duration: .5s;\r\n  -webkit-animation-duration: var(--animate_duration);\r\n  animation-duration: var(--animate_duration);\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both\r\n}\r\n\r\n@-webkit-keyframes D06QAZu0YTthYwEwCzqd {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n@keyframes D06QAZu0YTthYwEwCzqd {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n.ivy5mhJ94So1erHKWuN_ {\r\n  -webkit-animation-name: D06QAZu0YTthYwEwCzqd;\r\n  animation-name: D06QAZu0YTthYwEwCzqd;\r\n}\r\n\r\n@-webkit-keyframes IWAt3UfPR3uQYPnM6OsQ {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n@keyframes IWAt3UfPR3uQYPnM6OsQ {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n.m87W9HZnm9Tkx3V9H1QK {\r\n  -webkit-animation-name: IWAt3UfPR3uQYPnM6OsQ;\r\n  animation-name: IWAt3UfPR3uQYPnM6OsQ;\r\n  -webkit-transform-origin: center bottom;\r\n  transform-origin: center bottom;\r\n}\r\n@-webkit-keyframes mmFPAcMi2dF_q3dA8fTW {\r\n    0% {\r\n        -webkit-transform: translateX(0);\r\n        transform: translateX(0)\r\n    }\r\n\r\n    6.5% {\r\n        -webkit-transform: translateX(-6px) rotateY(-9deg);\r\n        transform: translateX(-6px) rotateY(-9deg)\r\n    }\r\n\r\n    18.5% {\r\n        -webkit-transform: translateX(5px) rotateY(7deg);\r\n        transform: translateX(5px) rotateY(7deg)\r\n    }\r\n\r\n    31.5% {\r\n        -webkit-transform: translateX(-3px) rotateY(-5deg);\r\n        transform: translateX(-3px) rotateY(-5deg)\r\n    }\r\n\r\n    43.5% {\r\n        -webkit-transform: translateX(2px) rotateY(3deg);\r\n        transform: translateX(2px) rotateY(3deg)\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: translateX(0);\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n@keyframes mmFPAcMi2dF_q3dA8fTW {\r\n    0% {\r\n        -webkit-transform: translateX(0);\r\n        transform: translateX(0)\r\n    }\r\n\r\n    6.5% {\r\n        -webkit-transform: translateX(-6px) rotateY(-9deg);\r\n        transform: translateX(-6px) rotateY(-9deg)\r\n    }\r\n\r\n    18.5% {\r\n        -webkit-transform: translateX(5px) rotateY(7deg);\r\n        transform: translateX(5px) rotateY(7deg)\r\n    }\r\n\r\n    31.5% {\r\n        -webkit-transform: translateX(-3px) rotateY(-5deg);\r\n        transform: translateX(-3px) rotateY(-5deg)\r\n    }\r\n\r\n    43.5% {\r\n        -webkit-transform: translateX(2px) rotateY(3deg);\r\n        transform: translateX(2px) rotateY(3deg)\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: translateX(0);\r\n        transform: translateX(0)\r\n    }\r\n}\r\n\r\n.tjwLgi40fZRSPZVuNJqO {\r\n    -webkit-animation-name: mmFPAcMi2dF_q3dA8fTW;\r\n    animation-name: mmFPAcMi2dF_q3dA8fTW;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n    -webkit-animation-duration: 1s !important;\r\n    animation-duration: 1s !important;\r\n}\r\n\r\n@-webkit-keyframes bOb0vUSnQiL3wIYKw8tF {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(10%, 0, 0);\r\n    transform: translate3d(10%, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n@keyframes bOb0vUSnQiL3wIYKw8tF {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(10%, 0, 0);\r\n    transform: translate3d(10%, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n.l38a0A6T6zHFcZW3ie9X {\r\n  -webkit-animation-name: bOb0vUSnQiL3wIYKw8tF;\r\n  animation-name: bOb0vUSnQiL3wIYKw8tF;\r\n}\r\n@keyframes BOXlHwPt_8Z4jks0Uzp8 {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(-10%, 0, 0);\r\n        transform: translate3d(-10%, 0, 0)\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translateZ(0);\r\n        transform: translateZ(0)\r\n    }\r\n}\r\n\r\n.FV8kpMm5Qsiq6UZxAae0 {\r\n    -webkit-animation-name: BOXlHwPt_8Z4jks0Uzp8;\r\n    animation-name: BOXlHwPt_8Z4jks0Uzp8\r\n}\r\n\r\n.YlSjCI7NIjxZu9i3qaI0 {\r\n    -webkit-animation-name: UZRyS63xCe7qCZLLuM_m;\r\n    animation-name: UZRyS63xCe7qCZLLuM_m\r\n}\r\n\r\n\r\n@-webkit-keyframes ryMfDdMiG4UeIKZOOpxC {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n@keyframes ryMfDdMiG4UeIKZOOpxC {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n.BGyvrTKtWDsHaznaMoc4 {\r\n  -webkit-animation-name: ryMfDdMiG4UeIKZOOpxC;\r\n  animation-name: ryMfDdMiG4UeIKZOOpxC;\r\n}\r\n\r\n@-webkit-keyframes KVl2vN8YJEqQ68ZTsNJj {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n@keyframes KVl2vN8YJEqQ68ZTsNJj {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n.a3zvst9YuENJTRdCo0xQ {\r\n  -webkit-animation-name: KVl2vN8YJEqQ68ZTsNJj;\r\n  animation-name: KVl2vN8YJEqQ68ZTsNJj;\r\n}\r\n@-webkit-keyframes Dui8XyCVcr_xvLAUW6eK {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n@keyframes Dui8XyCVcr_xvLAUW6eK {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n.kAqu3JcI62plaqghRigk {\r\n  -webkit-animation-name: Dui8XyCVcr_xvLAUW6eK;\r\n  animation-name: Dui8XyCVcr_xvLAUW6eK;\r\n}",""]),o.locals={animate__animated:"AwmRHMFTDP8V4WJBxBx6",animate__zoomInUp:"ivy5mhJ94So1erHKWuN_",zoomInUp:"D06QAZu0YTthYwEwCzqd",animate__zoomOutDown:"m87W9HZnm9Tkx3V9H1QK",zoomOutDown:"IWAt3UfPR3uQYPnM6OsQ",animate__headShake:"tjwLgi40fZRSPZVuNJqO",headShake:"mmFPAcMi2dF_q3dA8fTW",animate__fadeInRight:"l38a0A6T6zHFcZW3ie9X",fadeInRight:"bOb0vUSnQiL3wIYKw8tF",animate__fadeInLeft:"FV8kpMm5Qsiq6UZxAae0",fadeInLeft:"BOXlHwPt_8Z4jks0Uzp8",animate__fadeIn:"YlSjCI7NIjxZu9i3qaI0",fadeIn:"UZRyS63xCe7qCZLLuM_m",animate__fadeOutRight:"BGyvrTKtWDsHaznaMoc4",fadeOutRight:"ryMfDdMiG4UeIKZOOpxC",animate__fadeOutLeft:"a3zvst9YuENJTRdCo0xQ",fadeOutLeft:"KVl2vN8YJEqQ68ZTsNJj",animate__fadeOutDown:"kAqu3JcI62plaqghRigk",fadeOutDown:"Dui8XyCVcr_xvLAUW6eK"};const m=o},8656:(n,e,r)=>{r.d(e,{Z:()=>w});var t=r(3379),a=r.n(t),i=r(7795),o=r.n(i),m=r(569),s=r.n(m),l=r(3565),c=r.n(l),d=r(9216),u=r.n(d),f=r(4589),p=r.n(f),b=r(7041),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),a()(b.Z,g);const w=b.Z&&b.Z.locals?b.Z.locals:void 0}}]);