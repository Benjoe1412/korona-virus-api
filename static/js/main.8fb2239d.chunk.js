(this["webpackJsonpkorona-virus-api"]=this["webpackJsonpkorona-virus-api"]||[]).push([[0],{46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(2),s=n(48),u=n(99),o=n(100);function i(){return(i=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.downloadAndParse();case 2:return t=e.sent,setInterval(Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.downloadAndParse();case 2:t=e.sent;case 3:case"end":return e.stop()}}),e)}))),144e5),e.next=6,u.downloadAndParse();case 6:n=e.sent,setInterval(Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.downloadAndParse();case 2:n=e.sent;case 3:case"end":return e.stop()}}),e)}))),144e5),app.use(o()),app.get("/data",(function(e,n){n.json(t)})),app.get("/time-series",(function(e,t){t.json(n)})),app.listen(8e3,(function(){console.log("server is running")})),app.get("/",(function(e,t){t.send("Hello World!")}));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()},48:function(e,t,n){"use strict";n.r(t),n.d(t,"download",(function(){return d})),n.d(t,"parse",(function(){return l})),n.d(t,"downloadAndParse",(function(){return h}));var r=n(44),a=n(0),c=n.n(a),s=n(2),u=n(18).default,o=n(27),i=(0,n(42).promisify)(o),p="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/_DATE_.csv";function d(){return f.apply(this,arguments)}function f(){return(f=Object(s.a)(c.a.mark((function e(){var t,n,r,a,s,o,i,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Date).setDate(t.getDate()-1),n=t.getMonth()+1,r=n<10?"0".concat(n):n,a=t.getDate(),s=a<10?"0".concat(a):a,o="".concat(r,"-").concat(s,"-").concat(t.getFullYear()),i=p.replace("_DATE_",o),e.next=10,u.get(i);case 10:return d=e.sent,e.abrupt("return",d.data);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t,{from_line:2});case 2:return n=e.sent,a=n.map((function(e){var t=Object(r.a)(e,12),n=(t[0],t[1],t[2]),a=t[3],c=(t[4],t[5]),s=t[6],u=t[7],o=t[8],i=t[9],p=(t[10],t[11]);return{state:n,country:a,latitude:parseInt(c),longitude:parseInt(s),confirmed:parseInt(u),deaths:parseInt(o),recovered:parseInt(i),combinedKey:p}})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return w.apply(this,arguments)}function w(){return(w=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:return t=e.sent,e.next=5,l(t);case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},87:function(e,t){},89:function(e,t){},99:function(e,t,n){"use strict";n.r(t),n.d(t,"download",(function(){return l})),n.d(t,"parse",(function(){return h})),n.d(t,"downloadAndParse",(function(){return m}));var r=n(43),a=n(45),c=n(0),s=n.n(c),u=n(2),o=n(18).default,i=n(27),p=(0,n(42).promisify)(i),d=["confirmed","deaths","recovered"],f="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19__TYPE__global.csv";function l(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.replace("_TYPE_",t),e.next=3,o.get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,{from_line:2});case 2:return n=e.sent,r=n.map((function(e){var t=Object(a.a)(e),n=t[0],r=t[1],c=t[2],s=t[3],u=t.slice(4);return{id:"".concat(n,"-").concat(r),state:n,country:r,latitude:parseInt(c),longitude:parseInt(s),values:u.map((function(e){return parseInt(e)}))}})),c=r.reduce((function(e,t){return e[t.id]=t,e}),{}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(s.a.mark((function e(){var t,n,a,c,u,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},n=Object(r.a)(d),e.prev=2,n.s();case 4:if((a=n.n()).done){e.next=14;break}return c=a.value,e.next=8,l(c);case 8:return u=e.sent,e.next=11,h(u);case 11:t[c]=e.sent;case 12:e.next=4;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),n.e(e.t0);case 19:return e.prev=19,n.f(),e.finish(19);case 22:return o=Object.keys(t.confirmed).map((function(e){var n=t.confirmed[e]||{values:[]};t.deaths[e],t.recovered[e];return{id:e,stae:n.state,country:n.country,latitude:n.latitude,longitude:n.longitude,confirmed:n.values,deaths:n.values,recovered:n.values}})),e.abrupt("return",o);case 24:case"end":return e.stop()}}),e,null,[[2,16,19,22]])})))).apply(this,arguments)}}},[[46,1,2]]]);
//# sourceMappingURL=main.8fb2239d.chunk.js.map