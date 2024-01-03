"use strict";(self.webpackChunkEunoia=self.webpackChunkEunoia||[]).push([[221],{2792:(e,t,n)=>{var a=n(4836),r=n(5263);t.Z=void 0;var o=r(n(7294)),i=(0,a(n(2108)).default)(o.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"Group");t.Z=i},5432:(e,t,n)=>{var a=n(4836),r=n(5263);t.Z=void 0;var o=r(n(7294)),i=(0,a(n(2108)).default)(o.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");t.Z=i},5434:(e,t,n)=>{n.d(t,{FX:()=>o,ae:()=>r,hh:()=>i,kS:()=>s});var a=n(2384);const r=e=>{const[t,n]=["/account/accountData","GET"];(0,a.F)({url:t,method:n},(t=>e(t)))},o=(e,t)=>{const[n,r]=["/account/saveProfileInfo","PUT"];(0,a.F)({url:n,method:r,body:e},(e=>t(e)))},i=(e,t)=>{const[n,r]=["/account/setNotify","PUT"];(0,a.F)({url:n,method:r,body:e},(e=>t(e)))},s=e=>{const[t,n]=["/auth/logout","DELETE"];(0,a.F)({url:t,method:n},(t=>e(t)))}},5395:(e,t,n)=>{n.d(t,{W:()=>o,a:()=>r});var a=n(2384);const r=({sender:e,chatId:t})=>{const n={sender:e,chatId:t};(0,a.F)({method:"PUT",url:"/chat/saveUnread",body:n})},o=({username:e},t)=>{const n=`/chat/fetchMessages/${e}`;(0,a.F)({method:"GET",url:n},(e=>t(e)))}},8312:(e,t,n)=>{n.d(t,{Ln:()=>c,Wk:()=>s,cY:()=>i,eC:()=>l,eb:()=>o,ox:()=>r});var a=n(2384);const r=(e,t)=>{const n=`/chat/fetchGroupInfo/${e}`;(0,a.F)({url:n,method:"GET"},(e=>t(e)))},o=({body:e,groupId:t})=>{const n=`/chat/starGroup/${t}`;console.log(e),(0,a.F)({url:n,method:"PUT",body:e})},i=e=>{(0,a.F)({url:"/chat/setGroupUnread",method:"PUT",body:e},(e=>cb(e)))},s=(e,t)=>{(0,a.F)({url:"/chat/clearGroupUnread",method:"PUT",body:e},(e=>t(e)))},l=({groupId:e},t)=>{const n=`/chat/fetchGroupChats/${e}`;(0,a.F)({url:n,method:"GET"},(e=>t(e)))},c=e=>{const[t,n]=["/chat/deleteGroup","DELETE"];(0,a.F)({url:t,method:n,body:e})}},9008:(e,t,n)=>{n.d(t,{Pq:()=>i,YR:()=>o,fq:()=>r});var a=n(2384);const r=async e=>{(0,a.F)({url:"/chat/recentChats",method:"GET"},(t=>e(t)))},o=async e=>{(0,a.F)({url:"/chat/starConversation",method:"PUT",body:e})},i=async e=>{const[t,n]=["/chat/clearConversation","DELETE"];(0,a.F)({url:t,method:n,body:e})}},7134:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(1120),o=n(2387);const i=(0,r.Z)({chatActions:{borderRadius:"5px",zIndex:25e4,display:"flex",flexDirection:"column",background:"#fff !important","& > div":{display:"flex"},"& div:first-child":{},"& > div:last-of-type":{flexDirection:"column","& > button":{padding:"12px 0 12px 15px",borderRadius:0,"& .MuiIconButton-label":{justifyContent:"flex-start"},"& > span > span.MuiTypography-root":{padding:"0 25px 0 15px",color:"#000"}}}}});function s({children:e,open:t,anchorReference:n,anchorPosition:r,transformOrigin:s,anchorEl:l,onClose:c,anchorOrigin:d}){const p=i();return void 0===r?a.createElement(o.ZP,{open:t,anchorEl:l,onClose:c,elevation:2,anchorOrigin:d||{vertical:"center",horizontal:"center"},transformOrigin:s||{vertical:"center",horizontal:"center"}},a.createElement("div",{className:p.chatActions},e)):a.createElement(o.ZP,{open:t,elevation:2,anchorReference:"anchorPosition",anchorPosition:r,onClose:c,anchorOrigin:d||{vertical:"center",horizontal:"center"},transformOrigin:s||{vertical:"center",horizontal:"center"}},a.createElement("div",{className:p.chatActions},e))}s.propTypes={};const l=s},1467:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(7294),r=n(9704),o=n(6974),i=n(1120),s=n(6367),l=n(3084);const c=n(2788).ZP.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 50px;
	flex-direction: column;

	em {
		color: #555674;
		margin-top: 10px;
	}
`;function d(){return a.createElement(c,null,a.createElement(l.Preloader,{use:l.Circles,size:60,strokeWidth:6,strokeColor:"cornflowerblue",duration:2e3}),a.createElement("em",null,"Organizing your chat experience..."))}var p=n(6614),m=n(3961),u=n(5403),h=n(6257),f=n(9700),g=n(9585),x=n(5076),y=n(2005),v=n(6140),E=n(5434),b=n(9008),C=n(2384);const w=e=>{(0,C.F)({url:"/account/users",method:"GET"},(t=>e(t)))};var I=n(8312),S=n(5395);const Z=a.lazy((()=>n.e(579).then(n.bind(n,1579)))),k=(0,i.Z)({main:{background:"linear-gradient(266deg, #e9e9e9, #d3920026)",display:"flex",height:"100%"}}),N=({user:e})=>{const{id:t,username:n}=(0,r.v9)((e=>e.account.account)),i=k(),l=(0,r.I0)(),c=(0,r.v9)((e=>e.other.currentSelectedUser)),{leftPane:C,rightPane:N,app:T}=(0,r.v9)((e=>e.components)),W=(0,r.v9)((e=>e.activeUsers.activeUsers)),F=(0,r.v9)((e=>e.groups.selectedGroup)),G=((0,r.v9)((e=>e.other.fetched)),(0,r.v9)((e=>e.groups.fetchedGroups)),(0,s.x)()),{useEffect:_}=a;return _((()=>{(0,v.Z)({token:t,username:n}),(0,E.ae)((e=>{l((0,u.Y)(e)),e&&l((0,g.F$)(!0))})),(0,b.fq)((e=>{l((0,p.rO)(e)),v.W.emit("getOnileUsers")})),w((e=>{l((0,m.i9)(e)),v.W.emit("getOnileUsers")}))}),[]),v.W.off("connect").on("connect",(()=>{l((0,u.VT)(!0))})),v.W.off("disconnect").on("disconnect",(e=>{l((0,u.VT)(!1))})),v.W.off("onlineUsers").on("onlineUsers",(e=>{l((0,m.IF)(e.filter((e=>e.username!==n)))),l((0,f.Rx)(e.filter((e=>e.username!==n))))})),v.W.off("userDisconnect").on("userDisconnect",(e=>{l((0,m.Ov)(e)),l((0,f.Fz)(e))})),v.W.off("starredChat").on("starredChat",((e,t)=>{l((0,h.Fb)({friendsName:e,starredChat:t}))})),v.W.off("deleteChat").on("deleteChat",(e=>{l((0,h.Rm)(e)),l((0,p.Tt)(e))})),v.W.off("fetchGroupInfo").on("fetchGroupInfo",(({_id:e})=>{(0,I.ox)(e,(e=>{l((0,p.it)(e))}))})),v.W.off("setGroupSettings").on("setGroupSettings",(({_id:e,settings:t})=>{l((0,x.AN)({_id:e,field:{settings:t}}))})),v.W.off("setGroupDesc").on("setGroupDesc",(({_id:e,description:t})=>{l((0,x.AN)({_id:e,field:{description:t}}))})),v.W.off("setGroupName").on("setGroupName",(({_id:e,name:t})=>{(0,I.ox)(e,(e=>{l((0,p.it)(e))})),l((0,x.AN)({_id:e,field:{name:t}}))})),v.W.off("setGroupAdmins").on("setGroupAdmins",(({_id:e,admins:t})=>{l((0,x.AN)({_id:e,field:{admins:t}}))})),v.W.off("addGroupParticipants").on("addGroupParticipants",(({_id:e,participants:t})=>{(0,I.ox)(e,(e=>{l((0,p.it)(e))})),l((0,x.AN)({_id:e,field:{participants:t}}))})),v.W.off("removeGroupUser").on("removeGroupUser",(({_id:e,participants:t,admins:n})=>{l((0,x.AN)({_id:e,field:{participants:t,admins:n}}))})),v.W.off("chatFromGroup").on("chatFromGroup",(({_id:e,chat:t})=>{l((0,x.CG)({_id:e,chat:t})),((0,y.hu)(F)&&F._id!==e||!(0,y.hu)(F))&&((0,I.cY)({groupId:e,chatId:t.chatId}),l((0,p.w)({_id:e,chatId:t.chatId}))),l((0,p.p5)({_id:e,lastChat:t}))})),v.W.off("deleteGroupChat").on("deleteGroupChat",(({_id:e,chatId:t})=>{l((0,x.VV)({_id:e,chatId:t})),l((0,p.Kv)({_id:e,chatId:t}))})),v.W.off("groupTyping").on("groupTyping",(({_id:e,username:t,typing:n})=>{l((0,x.Zv)({_id:e,username:t,typing:n})),l((0,p.l4)({_id:e,username:t,typing:n}))})),v.W.off("chatFromUser").on("chatFromUser",(e=>{function t(){l((0,h.lC)(e)),l((0,p.IJ)({username:e.sender,lastChat:e.message})),(0,y.hu)(c)&&c.username===e.sender||((0,S.a)({sender:e.sender,chatId:e.message.chatId}),l((0,p.LP)({friendsName:e.sender,chatId:e.message.chatId})))}W.find((t=>t.username===e.sender))?t():w((e=>{l((0,m.i9)(e)),v.W.emit("getOnileUsers"),t()})),(0,y.hu)(c)&&c.username===e.sender&&v.W.emit("chatIsRead",{sender:c.username,receiver:n})})),v.W.off("chatHasBeenRead").on("chatHasBeenRead",(({sender:e,receiver:t})=>{l((0,h.dA)(t)),l((0,p.QG)(t))})),v.W.off("userIsTyping").on("userIsTyping",(e=>{l((0,p.f8)(e)),l((0,m.t5)(e))})),T.display?a.createElement("section",{className:i.main,style:{height:G+"px"}},C&&a.createElement(Z,null),a.createElement(o.j3,null)):a.createElement(d,null)}},3247:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(1120),o=n(3084);const i=(0,r.Z)({root:{display:"flex",alignItems:"center",fontSize:".91rem",height:"20px","& > div":{marginLeft:"8px"}}}),s=function({children:e}){const t=i();return a.createElement("span",{className:t.root},e,a.createElement(o.Preloader,{use:o.ThreeDots,size:32,strokeWidth:12,strokeColor:"#6495ed",duration:800}))}},1061:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7294),r=n(1120),o=n(8463),i=n(515),s=n(7812),l=n(9826),c=n(2005),d=n(6367),p=n(9585),m=n(5953),u=n(5076),h=n(9704);const f=(0,r.Z)({card:{boxShadow:"none",display:"flex",flexDirection:"column",height:"100%",width:"100%",background:"transparent",flexDirection:"column","& .MuiCardHeader-root":{background:i.Z.white,boxShadow:"-1px 1px 1px 0px #cbcbcb",marginLeft:5,height:"3.7rem",padding:"0 16px",position:"relative",zIndex:10,"& .MuiCardHeader-title":{fontWeight:"bold","& .MuiCardHeader-avatar":{marginRight:6}},"& .MuiCardHeader-content":{overflow:"hidden","& > span":{overflow:"hidden",whiteSpace:"nowrap",paddingInlineEnd:10,textOverflow:"ellipsis"}},"@media (max-width: 660px)":{marginLeft:0,padding:"0 16px 0 39px"}},"& .MuiCardHeader-action":{alignSelf:"center",marginTop:0},"& .MuiCardContent-root":{flex:1,overflowY:"scroll",overflowX:"hidden",position:"relative"},"& .MuiCardActions-root, .MuiCardContent-root":{padding:"0 10%","@media (max-width: 900px)":{padding:"0 2%"}},"& .MuiCardActions-spacing > :not(:first-child)":{margin:0},"& .MuiCardActions-root":{position:"relative",marginBottom:"1rem",paddingTop:".25rem",flexDirection:"column",alignItems:"stretch","& .MuiInputBase-root":{flex:1,background:i.Z.white,margin:0,padding:"11px 10px",boxShadow:"0 0 9px 0px #0000000d","& textarea":{height:"19px"}},"@media (max-width: 660px)":{marginBottom:".2rem"}},"& .MuiInputBase-inputMultiline":{overflowY:"scroll !important"}},starred:{position:"sticky",width:"98%",top:0,margin:"0 auto",zIndex:25,transition:".7s ease all","& .MuiCardHeader-title":{color:"#edb664"}},backBtn:{position:"absolute",top:"11px",padding:5,display:"none",zIndex:30,"@media (max-width: 660px)":{display:"block"}}}),g=({children:e})=>{const t=f(),n=(0,h.I0)(),r=(0,h.v9)((e=>e.groups.selectedGroup)),i=(0,d.x)();return a.createElement(o.Z,{className:t.card,style:{height:`${i}px`}},a.createElement(s.Z,{className:t.backBtn,onClick:()=>(n((0,m.r0)({})),(0,c.hu)(r)&&n((0,u.lr)({})),void(window.innerWidth<660&&n((0,p.T6)({parent:"leftPane",component:!0}))))},a.createElement(l.Z,{style:{color:"#959494"}})),e)}},7221:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var a=n(7294),r=n(9704),o=n(4697),i=n(9912),s=n(1907),l=n(7812),c=n(2318),d=n(6912),p=n(5477),m=n(282),u=n(1120),h=n(3901),f=n(2792),g=n(5432),x=n(7168),y=n(3173),v=n(8442),E=n(9585),b=n(5076),C=n(6614),w=n(5953),I=n(7134),S=n(1061),Z=n(9540),k=(n(9234),n(3247)),N=(n(6426),n(515)),T=n(173),W=n(2005);function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},F.apply(this,arguments)}n(1467);const G=(0,u.Z)({indexedChats:{display:"flex",flexDirection:"column"},dateNotice:{textAlign:"center",margin:"10px 0",position:"sticky",zIndex:20,top:"10px"},chatNotifier:{"& > span:first-child":{fontSize:".83rem",padding:"3px 7px",background:N.Z.white,boxShadow:"0 0 2px 0px #00000021",borderRadius:"5px",lineHeight:1.3}},alert:{opacity:".9",display:"flex",justifyContent:"center",marginBottom:"10px","& > span":{display:"flex",whiteSpace:"pre-line","& > span":{padding:"0 0 0 11px",fontSize:".7rem",alignSelf:"flex-end",opacity:.9}}},chatWrapper:{display:"flex",position:"relative",alignItems:"flex-end",width:"100%",padding:"2px 0",transition:".6s ease all"},flexStart:{justifyContent:"flex-start",alignSelf:"flex-start",paddingLeft:".5rem"},flexEnd:{alignSelf:"flex-end",justifyContent:"flex-end"},fromAccount:{marginLeft:"1rem",background:"#727f93","& > span:last-of-type":{color:N.Z.white}},fromFriend:{marginRight:"1rem",background:N.Z.white},chatSingle:{maxWidth:"80%",whiteSpace:"pre-line",width:"auto",font:"message-box",borderRadius:"5px",boxShadow:"1px 1px 1px 0px #00000012",position:"relative","& > span":{padding:"4px 4px 5px 7px"}},isLast:{marginBottom:8},overflow:{maxHeight:"200px",overflowX:"hidden",whiteSpace:"pre-line",display:"block"},sender:{display:"block",color:"#ff845d",padding:"2px 0",fontSize:".8rem",fontWeight:"bold"},myReply:{padding:"3px 10px 7px 1px","& > span:first-child":{color:"#ef592a",fontWeight:"bold",display:"block",margin:"0px 0 2px 0"},"& > span:last-of-type":{}},reply:{background:N.Z.white,fontSize:".85rem",paddingLeft:"6px",borderBottom:"1px solid #efefef",borderLeft:"2px solid #ffb55c",borderRadius:"inherit",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},replyBlock:{padding:"0 10px 7px 2px","& > span:first-child":{color:T.Z[700],fontWeight:"bold",fontSize:".8rem",display:"block",margin:"1px 0"}},chatTime:{fontSize:".65rem",marginLeft:7,opacity:.9,position:"sticky",top:"100px",float:"right",bottom:"0"},deleted:{fontStyle:"italic",padding:"3px 7px",background:"#fffadd",borderRadius:"5px","& > span":{color:"#d96c6c !important"}}}),_=["#6495ed","#cb64ed","#64ed94","#7364ed","#64a1ed","#edb664","#eda364","#64c7ed","#ed7d64","#ed6471"],j=({chat:e,isFirst:t,isLast:n})=>{const o=G(),i=(0,r.I0)(),s=(0,r.v9)((e=>e.account.account.username));let l=e.sender===s,c=l?o.fromAccount:o.fromFriend,d=l?o.flexEnd:o.flexStart,p={background:e.highlightChat?"rgb(0 137 255 / 14%)":"inherit"},m=()=>l?"rightBubble":"leftBubble";const[u,h]=a.useState(!1),[f,g]=a.useState(null),x=a.createRef(null),[y,v]=a.useState(null),{_id:E}=(0,r.v9)((e=>e.groups.selectedGroup)),C=""===e.message;a.useEffect((()=>{x.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}),[e.highlightChat]);const w=t=>{i((0,b.OC)({chat:e,pos:JSON.stringify(t.getBoundingClientRect())}))},I=e=>{if(C)return!1;w(e)},S=e=>{if(C)return!1;e.preventDefault(),w(e.target)};return a.createElement("div",{className:[o.chatWrapper,d,t&&o.isFirst,n&&o.isLast].join(" "),style:p,ref:x},C?a.createElement("div",{className:[c,o.deleted].join(" ")},a.createElement("span",{className:o.deleted}," Deleted ")):e.reply.open?a.createElement(a.Fragment,null,a.createElement("div",{className:[c,o.chatSingle,t&&m(),"reply"].join(" ")},a.createElement("div",{className:o.reply,onClick:()=>{""!==e.reply.message&&(()=>{i((0,b.Wh)({chatId:e.reply.chatId,_id:E,show:!0})),clearTimeout(f);let t=setTimeout((()=>{i((0,b.Wh)({chatId:e.reply.chatId,_id:E,show:!1}))}),1500);g(t)})()}},!l&&a.createElement("span",{className:o.sender,style:{color:_[e.sender.split(" ").join("").length-1]||"#ed6471"}}," ",e.sender," "),a.createElement("div",{className:l?o.myReply:o.replyBlock},a.createElement("span",{style:{color:_[e.reply.sender.split(" ").join("").length-1]||"#ed6471"}},e.reply.sender===s?"You":e.reply.sender," "),""!==e.reply.message?a.createElement("span",{className:o.overflow}," ",e.reply.message," "):a.createElement("div",{className:[c,o.deleted].join(" ")},a.createElement("span",{className:o.deleted}," Deleted ")))),a.createElement("span",{className:[o.chat,o.overflow].join(" "),onClick:({target:t})=>{(0,W.hu)(e.chatId)&&I(t)},onContextMenu:S},e.message,a.createElement("span",{className:o.chatTime}," ",e.timestamp.time," ")))):a.createElement(a.Fragment,null,a.createElement("div",{className:[c,o.chatSingle,t&&m()].join(" ")},a.createElement("span",{className:[o.chat,o.overflow].join(" "),onClick:({target:t})=>{(0,W.hu)(e.chatId)&&I(t)},onContextMenu:S},!l&&a.createElement("span",{className:o.sender,style:{color:_[e.sender.split(" ").join("").length-1]||"#ed6471"}}," ",e.sender," "),e.message,a.createElement("span",{className:o.chatTime}," ",e.timestamp.time," ")))))};function z(e={sender:""}){return e.sender}const O=({chat:e})=>{const t=G(),n=(new Date).toDateString().slice(0,-5),o=e.chats.length,i=(0,r.v9)((e=>e.account.account.username));let s;return a.createElement("div",null,a.createElement("header",{className:[t.dateNotice,t.chatNotifier].join(" ")},a.createElement("span",null," ",e.day===n?"Today":e.day," ")),a.createElement("div",{className:t.indexedChats},e.chats.length>0&&e.chats.map(((n,r)=>{let l=z(e.chats.at(r+1)),c=z(e.chats.at(r-1)),d=n.sender||"";return"alert"===n.type?a.createElement("div",{key:r,className:[t.alert,t.chatNotifier].join(" ")},a.createElement("span",null,n.message.split(" ").map((e=>e.replaceAll(i,"You"))).join(" "),a.createElement("span",null," ",n.timestamp.time," "))):(s={isFirst:!1,isLast:!1},0===r&&(s.isFirst=!0),r===o-1&&(s.isLast=!0),c!==d&&(s.isFirst=!0),l!==d&&(s.isLast=!0),a.createElement(j,F({key:n.chatId,chat:n},s)))}))))},R=({chats:e})=>{const t=G();let n=[],r=[];return e.forEach((e=>{-1===n.findIndex((t=>t===e.timestamp.day))&&n.push(e.timestamp.day)})),n.forEach((t=>{const n=e.filter((e=>e.timestamp.day===t));r.push({day:t,chats:n})})),a.createElement(a.Fragment,null,a.createElement("div",{className:t.chats},r.length>0&&r.map(((e,t)=>a.createElement(O,{key:t,chat:e})))))};var P=n(2482),D=n(3268);function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(this,arguments)}const A=(0,u.Z)({bottomSnackbar:{transform:"none",bottom:"15%","& .MuiSnackbarContent-message":{"& .MuiTypography-body1":{marginLeft:10},display:"flex",alignItems:"center"}},noMember:{background:"#ffffffa1",textAlign:"center",borderRadius:"10px",padding:"10px",color:"#340000"}});function U(e){A();const[t,n]=a.useState(10);return a.useEffect((()=>{const e=setInterval((()=>{n((e=>e+10))}),200);return()=>{clearInterval(e)}}),[]),a.createElement(a.Fragment,null,a.createElement(p.Z,{variant:"determinate",value:t}),a.createElement(c.Z,{component:"span"}," ",e.action," "))}const B=function({_id:e,name:t,description:n,participants:p,createdBy:u,messages:N,admins:T,isCurrentSelected:F,isAParticipant:G,actionValues:_,settings:j}){const z=(0,r.I0)(),O=A(),{pendingDelete:B,reply:L,typing:H,inputValue:V}=_,{allowChatForAdminsOnly:Y}=j,{id:$,username:J,online:K}=(0,r.v9)((e=>e.account.account)),q=(0,r.v9)((e=>e.groups.selectedChat)),[X,Q]=a.useState(null),[ee,te]=a.useState(!1),[ne,ae]=a.useState(!1),[re,oe]=a.useState(null),[ie,se]=a.useState(null),[le,ce]=a.useState(!1),[de,pe]=a.useState({});let me=H.filter((e=>e.typing)).map((e=>e.username));a.useEffect((()=>{if((0,W.hu)(B)&&K){clearTimeout(X);let t=setTimeout((()=>{(0,D.Z)("deleteGroupChat",{_id:e,chatId:B.chatId})}),1700);Q(t)}}),[B]),a.useEffect((()=>{const t=N.at(N.length-1);t&&z((0,C.p5)({_id:e,lastChat:t}))}),[N]);const ue=t=>{(0,D.Z)("groupTyping",{typing:t,username:J,_id:e}),ce(t)};a.useEffect((()=>{(0,W.hu)(q)&&pe(JSON.parse(q.pos))}),[q]);const he=e=>{z((0,b.OC)({}))};return a.createElement(S.Z,null,a.createElement(o.Z,{avatar:a.createElement(h.Z,null,a.createElement(f.Z,null)),action:a.createElement(l.Z,{onClick:()=>{z((0,E.T6)({component:"gRoot",parent:"gInfos"}))}},a.createElement(g.Z,null)),title:a.createElement("span",null," ",t," "),subheader:me.length>0?a.createElement(k.Z,null,me.join(", ")):a.createElement(a.Fragment,null,p.filter((e=>e)).sort(((e,t)=>e.username===J?-1:1)).map((e=>e.username)).join(", ").replaceAll(J,"You"))}),a.createElement(i.Z,null,N.length>0&&a.createElement(R,{chats:N}),(0,W.hu)(de)&&(0,W.hu)(q)&&a.createElement(I.Z,{open:(0,W.hu)(q),onClose:he,anchorPosition:{top:de.top,left:de.left},anchorOrigin:{vertical:"bottom",horizontal:q.chat.sender===J?"left":"right"},transformOrigin:{vertical:"top",horizontal:q.chat.sender===J?"right":"left"}},a.createElement("div",null),a.createElement("div",null,p.some((e=>e.username===J))&&a.createElement(l.Z,{onClick:()=>{F&&z((0,b.VS)({_id:e,open:!0,chatId:q.chat.chatId,sender:q.chat.sender})),he()}},a.createElement(x.Z,null),a.createElement(c.Z,{component:"span"}," Reply ")),a.createElement(l.Z,{onClick:()=>{navigator.clipboard.writeText(q.chat.message),he()}},a.createElement(y.Z,{style:{color:"#958783"}}),a.createElement(c.Z,{component:"span"}," Copy ")),q.chat.sender===J&&a.createElement(l.Z,{onClick:()=>{(()=>{if(!K)return(0,w.Pc)({open:!0}),!1;z((0,b.W$)({pendingDelete:q.chat,_id:e})),z((0,b.VS)({open:!1,_id:e}))})(),he()}},a.createElement(v.Z,{style:{color:"#ed143d"}}),a.createElement(c.Z,{component:"span"}," Delete ")))),a.createElement(d.Z,{className:[O.bottomSnackbar,O.snackbar].join(" "),anchorOrigin:{vertical:"bottom",horizontal:"center"},message:a.createElement(U,{action:"Deleting..."}),open:(0,W.hu)(B),action:a.createElement(m.Z,{onClick:()=>(z((0,b.N6)(e)),void clearTimeout(X)),style:{color:"#ffc4cf"}}," UNDO ")})),a.createElement(s.Z,null,a.createElement(P.Z,M({},L,{closeReplyHandle:()=>{z((0,b.VS)({open:!1,_id:e}))},handleChatHighlight:()=>{z((0,b.Wh)({chatId:L.chatId,_id:e,show:!0})),clearTimeout(re);let t=setTimeout((()=>{z((0,b.Wh)({chatId:L.chatId,_id:e,show:!1}))}),1500);oe(t)}})),p.some((e=>e.username===J))?a.createElement(Z.Z,{inputValue:V,handleTextInput:t=>{z((0,b.yh)({value:t,_id:e})),clearTimeout(ie);const n=setTimeout((()=>{ue(!1)}),1800);le||ue(!0),se(n)},sendMessage:()=>{const t=V.trim();if(""===t.replaceAll(" ",""))return!1;if(!K)return z((0,w.Pc)({open:!0})),!1;const n=(new Date).getTime(),a={_id:e,chat:{message:t,chatId:n,sender:J,timestamp:(0,W.hi)(),reply:L}};z((0,b.i6)(a)),(0,D.Z)("chatFromGroup",a),H&&ue(!1),L.open&&z((0,b.VS)({_id:e,open:!1})),z((0,b.yh)({_id:e,value:""}))}}):a.createElement("div",{className:O.noMember},a.createElement("span",null," You can't interact with this group ",a.createElement("br",null),"as you are no longer a participant "))))}},9540:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(4741),o=n(7812),i=n(7397),s=n(3910);const l=function({inputValue:e,sendMessage:t=(()=>{}),handleTextInput:n=(()=>{})}){return a.createElement(r.Z,{multiline:!0,placeholder:"Type your messages",onChange:({target:e})=>n(e.value),maxRows:4,value:e,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||e.ctrlKey||(e.preventDefault(),t())},minRows:0,endAdornment:a.createElement(i.Z,{position:"end",style:{height:"100%"}},a.createElement(o.Z,{onClick:t},a.createElement(s.Z,{color:"primary"})))})}},2482:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(1120),o=n(2285),i=n(366),s=n(9704);const l=(0,r.Z)({replyHandel:{display:"flex",borderBottom:"1px solid #f1f1f1",justifyContent:"space-between",maxHeight:"100px",background:"#fdfdfd",width:"100%",zIndex:40,borderRadius:"10px 10px 0 0"},replyProps:{display:"flex",flexDirection:"column",padding:10,width:"inherit",borderLeft:"2px solid #d1803e",borderRadius:"inherit","& span:first-child":{marginBottom:2},"& span:last-of-type":{maxHeight:"200px",overflowY:"scroll"}}}),c=function({open:e,sender:t,message:n,closeReplyHandle:r,handleChatHighlight:c}){const{username:d,id:p}=(0,s.v9)((e=>e.account.account)),m=l();return a.createElement(o.Z,{in:e,direction:"up"},a.createElement("div",{className:m.replyHandel},e&&a.createElement(a.Fragment,null,a.createElement("div",{className:m.replyProps,onClick:c},a.createElement("span",{style:{color:"#ad39ad",fontWeight:"bold"}},t===d?"You":t),a.createElement("span",null," ",n," ")),a.createElement("div",null,a.createElement(i.Z,{onClick:r,style:{fontSize:"1.2rem",color:"#c55044",margin:7}})))))}},4199:(e,t,n)=>{n.d(t,{$s:()=>r,DH:()=>o,cK:()=>a});const a=(e,t)=>{const{jwt:n,username:a,id:r}=e;sessionStorage.setItem("jwt",JSON.stringify(n)),localStorage.setItem("user",JSON.stringify({username:a,id:r})),t()},r=e=>{sessionStorage.setItem("jwt",JSON.stringify(e))},o=()=>{sessionStorage.clear(),localStorage.clear()}},2384:(e,t,n)=>{n.d(t,{F:()=>o});var a=n(4199);function r(e){const{id:t}=JSON.parse(localStorage.getItem("user")),n=new Headers;n.append("Content-Type","application/json"),n.append("Authorization",`Bearer ${t}`),fetch("/auth/refresh",{method:"GET",headers:n}).then((e=>e.json())).then((t=>{(0,a.$s)(t.jwt),e()}))}async function o(e,t=(()=>{})){const{method:n,url:a}=e,i=new Headers;if(i.append("Content-Type","application/json"),"GET"===n.toUpperCase())try{let s=await fetch(a,{method:n,headers:i});return void(s.ok?t(await s.json()):401===s.status&&"Unauthorized"===s.statusText&&r((()=>o(e,t))))}catch(e){}else try{let s=e?.body||{},l=await fetch(a,{method:n,headers:i,body:JSON.stringify(s)});l.ok?t(await l.json()):401===l.status&&"Unauthorized"===l.statusText&&r((()=>o(e,t)))}catch(e){}}},6140:(e,t,n)=>{n.d(t,{W:()=>a,Z:()=>r});const a=(0,n(3992).io)("/user",{autoConnect:!1,forceNew:!0});function r(e){const{token:t,username:n}=e;a.auth={token:t,username:n},a.connect()}},3268:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(6140);function r(e,...t){var n,r;n=e,r=t,a.W.emit(n,...r)}}}]);