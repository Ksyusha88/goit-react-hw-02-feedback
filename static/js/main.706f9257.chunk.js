(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={feedback:"Feedback_feedback__3UHm1"}},function(t,e,n){t.exports={button:"FeadbackOptions_button__3FwTk"}},function(t,e,n){t.exports={statistics:"Statistics_statistics__2EERf"}},function(t,e,n){t.exports={title:"Section_title__3H5Hs"}},function(t,e,n){t.exports={Notification:"Notification_Notification__bVJTv"}},,,,,,,,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(3),i=n.n(s),o=n(4),r=n(5),u=n(12),b=n(11),d=n(6),l=n.n(d),j=n(7),h=n(0),f=function(t){var e=t.options,n=t.onLeaveFeedback;return Object.entries(e).map((function(t){return Object(h.jsx)("button",{className:j.button,type:"button",onClick:function(){return n(t[0])},children:t[0]},t[0])}))},p=n(8),O=n.n(p),v=function(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,s=t.positivePercentage;return Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:O.a.statistics,children:"Statistics"}),Object(h.jsxs)("p",{children:["Good: ",e]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",c]}),Object(h.jsxs)("p",{children:["Total: ",a]}),Object(h.jsxs)("p",{children:["Positive feedback: ",s,"%"]})]})},x=n(9),k=n.n(x),m=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:k.a.title,children:[Object(h.jsx)("h1",{children:e}),n]})},_=n(10),g=n.n(_),F=function(t){var e=t.message;return Object(h.jsx)("p",{className:g.a.Notification,children:e})},N=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.handleIncrement=function(e){t.setState((function(t){var n={};return n[e]=t[e]+1,n}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){return 0===t.countTotalFeedback()?0:Math.round(100*Number(t.state.good)/t.countTotalFeedback())},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:l.a.feedback,children:[Object(h.jsx)(m,{title:"Please leave feedback"}),Object(h.jsx)("div",{children:Object(h.jsx)(f,{options:this.state,onLeaveFeedback:this.handleIncrement})}),0===this.countTotalFeedback()?Object(h.jsx)(F,{message:"No feedback given"}):Object(h.jsx)(v,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(c.Component);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.706f9257.chunk.js.map