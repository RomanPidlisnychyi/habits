(this.webpackJsonphabits=this.webpackJsonphabits||[]).push([[0],{17:function(e,t,a){e.exports={wrap:"TrackerItem_wrap___XJwQ",item:"TrackerItem_item__2RIv8",name:"TrackerItem_name__KMA-E",active:"TrackerItem_active__K3qUH"}},21:function(e,t,a){e.exports={wrap:"Timer_wrap__3ZEde",span:"Timer_span__3VO5F",spanAbs:"Timer_spanAbs__2yYDJ"}},22:function(e,t,a){e.exports={listContainer:"TrackerList_listContainer__1oo9k",list:"TrackerList_list__2w2qU",text:"TrackerList_text__1f4gU"}},27:function(e,t,a){e.exports={remove:"ButtonControl_remove__2F1Im",wrap:"ButtonControl_wrap__37NJr"}},30:function(e,t,a){e.exports={container:"Layout_container__1nNA4"}},48:function(e,t,a){"use strict";a.r(t);var r,n=a(0),c=a(12),s=a.n(c),i=a(4),o=a(5),l={set:Object(o.b)("SET_TIMER"),start:Object(o.b)("START_TIMER"),stop:Object(o.b)("STOP_TIMER"),remove:Object(o.b)("REMOVE_TIMER"),setCurrentDate:Object(o.b)("CURRENT_TIME")},u=a(9),b=a(10),j=a(35),O=a(3),p=a(61),d=a(11),m=a.n(d),_=localStorage.getItem("habits"),f=m()().valueOf(),v=_?JSON.parse(_):[],x=Object(o.c)(v,(r={},Object(u.a)(r,l.set,(function(e,t){var a=t.payload,r=m()(),n=r.add(a.numberOfDays,"days"),c=[{name:a.name,id:Object(p.a)(),start:r.valueOf(),stop:n.valueOf()}].concat(Object(j.a)(e));return localStorage.setItem("habits",JSON.stringify(c)),c})),Object(u.a)(r,l.start,(function(e,t){var a=t.payload,r=e.map((function(e){if(e.id===a){var t=e.stop-e.start;e=Object(b.a)(Object(b.a)({},e),{},{start:m()().get("milliseconds")-t,stop:null})}return e}));return localStorage.setItem("habits",JSON.stringify(r)),r})),Object(u.a)(r,l.stop,(function(e,t){var a=t.payload,r=e.map((function(e){return e.id===a&&(e=Object(b.a)(Object(b.a)({},e),{},{stop:m()().get("milliseconds")})),e}));return localStorage.setItem("habits",JSON.stringify(r)),r})),Object(u.a)(r,l.remove,(function(e,t){var a=t.payload,r=e.filter((function(e){return e.id!==a}));return r.length>0?localStorage.setItem("habits",JSON.stringify(r)):localStorage.removeItem("habits"),r})),r)),h=Object(o.c)(f,Object(u.a)({},l.setCurrentDate,(function(e,t){return t.payload}))),g=Object(O.c)({trackers:x,currentDate:h}),y={setCurrentDate:function(){return function(e){setInterval((function(){e(l.setCurrentDate(Date.now()))}),1e3)}}},T=a(18),k=function(e){return e.trackers},C=function(e){return e.currentDate},N={getTrackers:k,getCurrentDate:C,getCurrentFormatTimeById:Object(T.a)([k,C,function(e,t){return t}],(function(e,t,a){var r=e.find((function(e){return e.id===a})),n=Math.round((m()().valueOf()-r.start)/1e3/60/60/24),c=Math.round((r.stop-r.start)/1e3/60/60/24),s=(m()().valueOf()-r.start)/(r.stop-r.start)*100;return Object(b.a)(Object(b.a)({},r),{},{current:n,stop:c,percentages:s.toFixed(2)})}))},I=a(30),D=a.n(I),w=a(2);function S(e){var t=e.children;return Object(w.jsx)("div",{className:D.a.container,children:t})}var E=a(60),J=a(21),M=a.n(J);function R(e){var t=e.trackerId,a=Object(i.c)((function(e){return N.getCurrentFormatTimeById(e,t)})),r=a.stop,n=a.current,c=a.percentages;return Object(w.jsxs)("div",{style:{position:"relative",display:"flex",alignItems:"flex-end",width:"90%",fontSize:"13px",fontWeight:"700",margin:"25px 25px 0 0"},children:[Object(w.jsx)("span",{className:M.a.span,children:"0"}),Object(w.jsx)(E.a,{defaultValue:n,"aria-label":"default",valueLabelDisplay:"on",disabled:!0}),Object(w.jsxs)("span",{className:M.a.span,children:[r,"(d)"]}),Object(w.jsxs)("span",{className:M.a.spanAbs,children:[c,"%"]})]})}var A=a(27),B=a.n(A);function F(e){var t=e.tracker.id,a=Object(i.b)();return Object(w.jsx)("div",{className:B.a.wrap,children:Object(w.jsx)("button",{type:"button",className:B.a.remove,onClick:function(){return a(l.remove(t))}})})}var L=a(17),U=a.n(L);function H(e){var t=e.tracker,a=t.stop,r=U.a.item,n=U.a.active,c=U.a.wrap,s=U.a.name;return Object(w.jsxs)("li",{className:a?r:"".concat(r," ").concat(n),children:[Object(w.jsx)("p",{className:s,children:t.name}),Object(w.jsxs)("div",{className:c,children:[Object(w.jsx)(R,{trackerId:t.id}),Object(w.jsx)(F,{tracker:t})]})]})}var V=a(22),q=a.n(V);function K(){var e=Object(i.c)(N.getTrackers);return Object(w.jsx)("div",{className:q.a.listContainer,children:e&&e.length>0?Object(w.jsx)("ul",{className:q.a.list,children:e.map((function(e){return Object(w.jsx)(H,{tracker:e},e.id)}))}):Object(w.jsx)("p",{className:q.a.text,children:"Create new habit tracker now"})})}var P=a(28),z=a(8),Q=a.n(z);function W(){var e=Object(i.b)(),t=Object(n.useState)(""),a=Object(P.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),o=Object(P.a)(s,2),u=o[0],b=o[1];return Object(w.jsxs)("form",{className:Q.a.form,onSubmit:function(t){t.preventDefault(),e(l.set({name:r,numberOfDays:u})),c(""),b("")},children:[Object(w.jsx)("label",{className:Q.a.label,children:Object(w.jsx)("input",{className:r?Q.a.input:"".concat(Q.a.input," ").concat(Q.a.invalid),type:"text",placeholder:"Enter habit name",value:r,onChange:function(e){return c(e.target.value)}})}),Object(w.jsx)("label",{className:Q.a.labelDay,children:Object(w.jsx)("input",{className:u?Q.a.inputDay:"".concat(Q.a.inputDay," ").concat(Q.a.invalid),type:"text",placeholder:"How days do you need?",value:u,onChange:function(e){(parseInt(e.target.value)||""===e.target.value)&&b(e.target.value)}})}),Object(w.jsx)("button",{className:Q.a.button,type:"submit",disabled:!r||!u})]})}function X(){var e=Object(i.b)();return Object(n.useEffect)((function(){e(y.setCurrentDate())}),[e]),Object(w.jsxs)(S,{children:[Object(w.jsx)("h1",{children:"Habits"}),Object(w.jsx)(W,{}),Object(w.jsx)(K,{})]})}var Y=Object(o.a)({reducer:g});s.a.render(Object(w.jsx)(i.a,{store:Y,children:Object(w.jsx)(X,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={form:"CreateTracker_form__3wBTO",label:"CreateTracker_label__2BPwU",labelDay:"CreateTracker_labelDay__14CJg",input:"CreateTracker_input___0nTA",inputDay:"CreateTracker_inputDay__aC_Eo",invalid:"CreateTracker_invalid__1sw-2",button:"CreateTracker_button__3jpJO"}}},[[48,1,2]]]);
//# sourceMappingURL=main.fb42374d.chunk.js.map