(this["webpackJsonpkorona-virus-api"]=this["webpackJsonpkorona-virus-api"]||[]).push([[0],{186:function(n,t,e){"use strict";e.r(t);var r=e(5),a=e.n(r),c=e(9),u=e(188),s=e(237),o=e(238),i=e(400);function f(){return(f=Object(c.a)(a.a.mark((function n(){var t,e,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.downloadAndParse();case 2:return t=n.sent,setInterval(Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.downloadAndParse();case 2:t=n.sent;case 3:case"end":return n.stop()}}),n)}))),144e5),n.next=6,s.downloadAndParse();case 6:e=n.sent,setInterval(Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.downloadAndParse();case 2:e=n.sent;case 3:case"end":return n.stop()}}),n)}))),144e5),(r=o()).use(i()),r.get("/data",(function(n,e){e.json(t)})),r.get("/time-series",(function(n,t){t.json(e)})),r.listen(8e3,(function(){console.log("server is running")})),r.get("/",(function(n,t){t.send("Hello World!")}));case 14:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){f.apply(this,arguments)}()},188:function(n,t,e){"use strict";e.r(t),e.d(t,"download",(function(){return p})),e.d(t,"parse",(function(){return l})),e.d(t,"downloadAndParse",(function(){return h}));var r=e(184),a=e(5),c=e.n(a),u=e(9),s=e(89).default,o=e(98),i=(0,e(33).promisify)(o),f="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/_DATE_.csv";function p(){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(c.a.mark((function n(){var t,e,r,a,u,o,i,p;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=new Date).setDate(t.getDate()-1),e=t.getMonth()+1,r=e<10?"0".concat(e):e,a=t.getDate(),u=a<10?"0".concat(a):a,o="".concat(r,"-").concat(u,"-").concat(t.getFullYear()),i=f.replace("_DATE_",o),n.next=10,s.get(i);case 10:return p=n.sent,n.abrupt("return",p.data);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(c.a.mark((function n(t){var e,a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i(t,{from_line:2});case 2:return e=n.sent,a=e.map((function(n){var t=Object(r.a)(n,12),e=(t[0],t[1],t[2]),a=t[3],c=(t[4],t[5]),u=t[6],s=t[7],o=t[8],i=t[9],f=(t[10],t[11]);return{state:e,country:a,latitude:parseInt(c),longitude:parseInt(u),confirmed:parseInt(s),deaths:parseInt(o),recovered:parseInt(i),combinedKey:f}})),n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(c.a.mark((function n(){var t,e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p();case 2:return t=n.sent,n.next=5,l(t);case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},226:function(n,t){},228:function(n,t){},237:function(n,t,e){"use strict";e.r(t),e.d(t,"download",(function(){return l})),e.d(t,"parse",(function(){return h})),e.d(t,"downloadAndParse",(function(){return m}));var r=e(183),a=e(185),c=e(5),u=e.n(c),s=e(9),o=e(89).default,i=e(98),f=(0,e(33).promisify)(i),p=["confirmed","deaths","recovered"],d="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19__TYPE__global.csv";function l(n){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(u.a.mark((function n(t){var e,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=d.replace("_TYPE_",t),n.next=3,o.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return w.apply(this,arguments)}function w(){return(w=Object(s.a)(u.a.mark((function n(t){var e,r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(t,{from_line:2});case 2:return e=n.sent,r=e.map((function(n){var t=Object(a.a)(n),e=t[0],r=t[1],c=t[2],u=t[3],s=t.slice(4);return{id:"".concat(e,"-").concat(r),state:e,country:r,latitude:parseInt(c),longitude:parseInt(u),values:s.map((function(n){return parseInt(n)}))}})),c=r.reduce((function(n,t){return n[t.id]=t,n}),{}),n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return _.apply(this,arguments)}function _(){return(_=Object(s.a)(u.a.mark((function n(){var t,e,a,c,s,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t={},e=Object(r.a)(p),n.prev=2,e.s();case 4:if((a=e.n()).done){n.next=14;break}return c=a.value,n.next=8,l(c);case 8:return s=n.sent,n.next=11,h(s);case 11:t[c]=n.sent;case 12:n.next=4;break;case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(2),e.e(n.t0);case 19:return n.prev=19,e.f(),n.finish(19);case 22:return o=Object.keys(t.confirmed).map((function(n){var e=t.confirmed[n]||{values:[]};t.deaths[n],t.recovered[n];return{id:n,stae:e.state,country:e.country,latitude:e.latitude,longitude:e.longitude,confirmed:e.values,deaths:e.values,recovered:e.values}})),n.abrupt("return",o);case 24:case"end":return n.stop()}}),n,null,[[2,16,19,22]])})))).apply(this,arguments)}},262:function(n,t){},263:function(n,t){},291:function(n,t){},294:function(n,t){function e(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=294},296:function(n,t){},298:function(n,t){},305:function(n,t){},307:function(n,t){},336:function(n,t){},338:function(n,t){},339:function(n,t){},345:function(n,t){},347:function(n,t){},366:function(n,t){},378:function(n,t){},381:function(n,t){}},[[186,1,2]]]);
//# sourceMappingURL=main.45ee9b15.chunk.js.map