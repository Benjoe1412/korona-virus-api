(this.webpackJsonpkorona=this.webpackJsonpkorona||[]).push([[0],{187:function(t,n,e){"use strict";e.r(n);var r=e(5),a=e.n(r),c=e(9),s=e(189),o=e(238),u=e(239),i=e(401);function f(){return(f=Object(c.a)(a.a.mark((function t(){var n,e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.downloadAndParse();case 2:return n=t.sent,setInterval(Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.downloadAndParse();case 2:n=t.sent;case 3:case"end":return t.stop()}}),t)}))),144e5),t.next=6,o.downloadAndParse();case 6:e=t.sent,setInterval(Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.downloadAndParse();case 2:e=t.sent;case 3:case"end":return t.stop()}}),t)}))),144e5),(r=u()).use(i()),r.get("/data",(function(t,e){e.json(n)})),r.get("/time-series",(function(t,n){n.json(e)})),r.listen(8e3,(function(){console.log("server is running")})),r.get("/",(function(t,n){n.send("Hello World!")}));case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){f.apply(this,arguments)}()},189:function(t,n,e){"use strict";e.r(n),function(t){e(185);var n=e(5),r=e.n(n),a=e(9),c=e(90).default,s=e(99),o=((0,e(33).promisify)(s),"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/_DATE_.csv");function u(){return i.apply(this,arguments)}function i(){return(i=Object(a.a)(r.a.mark((function t(){var n,e,a,s,u,i,f,p;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new Date).setDate(n.getDate()-1),e=n.getMonth()+1,a=e<10?"0".concat(e):e,s=n.getDate(),u=s<10?"0".concat(s):s,i="".concat(a,"-").concat(u,"-").concat(n.getFullYear()),f=o.replace("_DATE_",i),t.next=10,c.get(f);case 10:return p=t.sent,t.abrupt("return",p.data);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.exports.download=u,t.exports.parse=u,t.exports.downloadAndParse=u}.call(this,e(89)(t))},227:function(t,n){},229:function(t,n){},238:function(t,n,e){"use strict";e.r(n),function(t){var n=e(184),r=e(186),a=e(5),c=e.n(a),s=e(9),o=e(90).default,u=e(99),i=(0,e(33).promisify)(u),f=["confirmed","deaths","recovered"],p="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19__TYPE__global.csv";function d(t){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(c.a.mark((function t(n){var e,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=p.replace("_TYPE_",n),t.next=3,o.get(e);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(c.a.mark((function t(n){var e,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(n,{from_line:2});case 2:return e=t.sent,a=e.map((function(t){var n=Object(r.a)(t),e=n[0],a=n[1],c=n[2],s=n[3],o=n.slice(4);return{id:"".concat(e,"-").concat(a),state:e,country:a,latitude:parseInt(c),longitude:parseInt(s),values:o.map((function(t){return parseInt(t)}))}})),s=a.reduce((function(t,n){return t[n.id]=n,t}),{}),t.abrupt("return",s);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=Object(s.a)(c.a.mark((function t(){var e,r,a,s,o,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e={},r=Object(n.a)(f),t.prev=2,r.s();case 4:if((a=r.n()).done){t.next=14;break}return s=a.value,t.next=8,d(s);case 8:return o=t.sent,t.next=11,v(o);case 11:e[s]=t.sent;case 12:t.next=4;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),r.e(t.t0);case 19:return t.prev=19,r.f(),t.finish(19);case 22:return u=Object.keys(e.confirmed).map((function(t){var n=e.confirmed[t]||{values:[]};e.deaths[t],e.recovered[t];return{id:t,stae:n.state,country:n.country,latitude:n.latitude,longitude:n.longitude,confirmed:n.values,deaths:n.values,recovered:n.values}})),t.abrupt("return",u);case 24:case"end":return t.stop()}}),t,null,[[2,16,19,22]])})))).apply(this,arguments)}t.exports={download:d,parse:v,downloadAndParse:function(){return w.apply(this,arguments)}}}.call(this,e(89)(t))},263:function(t,n){},264:function(t,n){},292:function(t,n){},295:function(t,n){function e(t){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=295},297:function(t,n){},299:function(t,n){},306:function(t,n){},308:function(t,n){},337:function(t,n){},339:function(t,n){},340:function(t,n){},346:function(t,n){},348:function(t,n){},367:function(t,n){},379:function(t,n){},382:function(t,n){}},[[187,1,2]]]);
//# sourceMappingURL=main.386feaa4.chunk.js.map