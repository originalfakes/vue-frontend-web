(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-310e1702"],{1495:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s}));var i=n("a18c"),a=n("4360"),r=n("b09c"),o=n("2b0e");function c(){alert(r["a"].t("S_PLEASE_LOGIN_AGAIN")),i["a"].push("/"),location.reload()}function s(t,e,n){if(""!==a["a"].state.isLogin){if("Y"===a["a"].state.isLogin)return void n();n("/")}a["a"].dispatch("actionSetLoginStatus").then((function(){"Y"!==a["a"].state.isLogin?(o["default"].$cookies.get("token")&&alert(r["a"].t("S_PLEASE_LOGIN_AGAIN")),n("/")):n()}))}},4622:function(t,e,n){"use strict";var i=n("c8df"),a=n.n(i);a.a},9842:function(t,e,n){"use strict";var i=n("5530"),a=n("2b27"),r=n.n(a),o=n("7ad2");e["a"]={getPersonalInfo:function(t){return Object(o["a"])(Object(i["a"])({method:"get",url:"/api/personal",errorAlert:!1,headers:{Authorization:r.a.get("token")}},t))},updatePersonalInfo:function(t){return Object(o["a"])(Object(i["a"])({method:"put",url:"/api/personal",errorAlert:!1,headers:{Authorization:r.a.get("token")}},t))},getBankList:function(t){return Object(o["a"])(Object(i["a"])({method:"get",url:"/api/finance/member-bank",errorAlert:!1,headers:{Authorization:r.a.get("token")}},t))},addMemberBank:function(t){return Object(o["a"])(Object(i["a"])({method:"post",url:"/api/finance/member-bank",errorAlert:!1,headers:{Authorization:r.a.get("token")}},t))},changePsw:function(t){return Object(o["a"])(Object(i["a"])({method:"put",url:"/api/personal/change-password",errorAlert:!1,headers:{Authorization:r.a.get("token")}},t))},getCompanyList:function(t){return Object(o["a"])(Object(i["a"])({method:"get",url:"/api/finance/company/list",errorAlert:!1,headers:{Authorization:r.a.get("token")}},t))},getBetRecord:function(t){return Object(o["a"])(Object(i["a"])({method:"get",url:"/api/finance/bet-record",errorAlert:!1,headers:{Authorization:r.a.get("token")}},t))},getGameBalance:function(t){return Object(o["a"])(Object(i["a"])({method:"get",url:"/api/finance/game-balance",errorAlert:!1,headers:{Authorization:r.a.get("token")}},t))},getPaymentList:function(t){return Object(o["a"])(Object(i["a"])({method:"get",url:"/api/finance/deposit/payment-list",errorAlert:!1,headers:{Authorization:r.a.get("token")}},t))},getPaymentFirm:function(t){return Object(o["a"])(Object(i["a"])({method:"get",url:"/api/finance/deposit/payment-firm",errorAlert:!1,headers:{Authorization:r.a.get("token")}},t))}}},a8bc:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("div",{staticClass:"icon",on:{click:function(e){return t.$router.go(-1)}}},[n("img",{attrs:{src:"/static/mobile/mcenter/icon_nav_back.png"}})]),n("div",{staticClass:"title"},[t._v(t._s(t.$t("S_DEPOSIT")))]),t._m(0)]),n("div",{staticClass:"body"},[n("div",{staticClass:"deposit-select"},t._l(t.depositList,(function(e){return n("div",{key:e.id,staticClass:"list",class:{active:e.id===t.curSelect},on:{click:function(n){return t.changeList(e.id)}}},[n("img",{attrs:{src:"/static/mobile/deposit/icon-"+e.id+".png"}}),n("div",{staticClass:"text"},[t._v(t._s(e.text))])])})),0),n(t.curSelect,{tag:"component"})],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right"},[n("img",{attrs:{src:"/static/mobile/mcenter/icon_service.png"}})])}],r=(n("d3b7"),n("9842")),o=n("1495"),c={components:{deposit1:function(){return n.e("chunk-4e1fe8f6").then(n.bind(null,"a89f"))},deposit2:function(){return n.e("chunk-144fc8e4").then(n.bind(null,"885d"))},deposit3:function(){return n.e("chunk-6f5737cc").then(n.bind(null,"5bec"))},deposit4:function(){return n.e("chunk-44092d7a").then(n.bind(null,"6f16"))},deposit5:function(){return n.e("chunk-e8f2acd4").then(n.bind(null,"3781"))}},beforeRouteEnter:function(t,e,n){Object(o["a"])(t,e,n)},data:function(){return{depositList:[{id:"deposit1",text:"銀行帳號"},{id:"deposit2",text:"銀行虛擬帳號"},{id:"deposit3",text:"超商代碼繳費"},{id:"deposit4",text:"支付宝"},{id:"deposit5",text:"ERC20 USDT"}],curSelect:"deposit1"}},created:function(){this.getPaymentList(),this.getPaymentFirm()},methods:{changeList:function(t){this.curSelect!==t&&(this.curSelect=t)},getPaymentList:function(){r["a"].getPaymentList({success:function(){}})},getPaymentFirm:function(){r["a"].getPaymentFirm({params:{payment_id:1},success:function(){},fail:function(t){"Unauthorized."===t.message&&Object(o["b"])()}})}}},s=c,u=(n("4622"),n("2877")),d=Object(u["a"])(s,i,a,!1,null,"41232bb2",null);e["default"]=d.exports},c8df:function(t,e,n){}}]);
//# sourceMappingURL=chunk-310e1702.19f0fdbc.js.map