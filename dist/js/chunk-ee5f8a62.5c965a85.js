(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee5f8a62"],{"12f8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"title"},[t._v(t._s(t.$t(t.title)))])])},r=[],s={props:{title:{type:String,default:function(){return""}}}},i=s,o=(a("8164"),a("2877")),c=Object(o["a"])(i,n,r,!1,null,"9644c3ac",null);e["a"]=c.exports},1495:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return c}));var n=a("a18c"),r=a("4360"),s=a("b09c"),i=a("2b0e");function o(){alert(s["a"].t("S_PLEASE_LOGIN_AGAIN")),n["a"].push("/"),location.reload()}function c(t,e,a){if(""!==r["a"].state.isLogin){if("Y"===r["a"].state.isLogin)return void a();a("/")}r["a"].dispatch("actionSetLoginStatus").then((function(){"Y"!==r["a"].state.isLogin?(i["default"].$cookies.get("token")&&alert(s["a"].t("S_PLEASE_LOGIN_AGAIN")),a("/")):a()}))}},"2caa":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mainTitle",{attrs:{title:"S_CHANGE_PASSWORD"}}),a("div",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"name"},[t._v(t._s(t.$t("S_OLD_PASSWORD")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPsw,expression:"oldPsw"}],attrs:{type:"password",placeholder:t.$t("S_ENTER_OLD_PASSWORD")},domProps:{value:t.oldPsw},on:{input:function(e){e.target.composing||(t.oldPsw=e.target.value)}}})]),a("div",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg.old_password))]),a("div",{staticClass:"row"},[a("div",{staticClass:"name"},[t._v(t._s(t.$t("S_NEW_PASSWORD")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPsw,expression:"newPsw"}],attrs:{type:"password",placeholder:t.$t("S_ENTER_NEW_PASSWORD")},domProps:{value:t.newPsw},on:{input:function(e){e.target.composing||(t.newPsw=e.target.value)}}})]),a("div",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg.new_password))]),a("div",{staticClass:"row"},[a("div",{staticClass:"name"},[t._v(t._s(t.$t("S_CONFIRM_NEW_PASSWORD")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmNewPsw,expression:"confirmNewPsw"}],attrs:{type:"password",placeholder:t.$t("S_PLEASE_CONFIRM_NEW_PASSWORD")},domProps:{value:t.confirmNewPsw},on:{input:function(e){e.target.composing||(t.confirmNewPsw=e.target.value)}}})]),a("div",{staticClass:"btn-save",class:{disabled:t.btnDisabled},on:{click:t.changePsw}},[t._v(" "+t._s(t.$t("S_COMPLETE"))+" ")])]),t.isFetchApi?a("loading"):t._e()],1)},r=[],s=a("1495"),i=a("9842"),o=a("12f8"),c=a("7ac2"),u={components:{mainTitle:o["a"],loading:c["a"]},data:function(){return{oldPsw:"",newPsw:"",confirmNewPsw:"",errorMsg:{},isFetchApi:!1}},computed:{btnDisabled:function(){return""===this.oldPsw||""===this.newPsw||""===this.confirmNewPsw}},methods:{changePsw:function(){var t=this;if(!this.btnDisabled)if(this.newPsw===this.confirmNewPsw){if(!this.isFetchApi){this.isFetchApi=!0;var e={params:{old_password:this.oldPsw,new_password:this.newPsw},success:function(){t.isFetchApi=!1},fail:function(e){"Unauthorized."===e.message&&Object(s["b"])(),t.errorMsg=e.errors,t.isFetchApi=!1}};i["a"].changePsw(e)}}else alert(this.$t("S_NEW_PSW_NOT_MATCH"))}}},l=u,d=(a("6017"),a("2877")),p=Object(d["a"])(l,n,r,!1,null,"1456734a",null);e["default"]=p.exports},"5a66":function(t,e,a){},6017:function(t,e,a){"use strict";var n=a("dc1c"),r=a.n(n);r.a},"7ac2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"backdrop"},[a("div",{staticClass:"spinner"}),a("div",{staticClass:"logo"},[t._v("loading...")])])}],s=(a("d0d7"),a("2877")),i={},o=Object(s["a"])(i,n,r,!1,null,"c60e30ee",null);e["a"]=o.exports},8164:function(t,e,a){"use strict";var n=a("5a66"),r=a.n(n);r.a},9842:function(t,e,a){"use strict";var n=a("5530"),r=a("2b27"),s=a.n(r),i=a("7ad2");e["a"]={getPersonalInfo:function(t){return Object(i["a"])(Object(n["a"])({method:"get",url:"/api/personal",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},updatePersonalInfo:function(t){return Object(i["a"])(Object(n["a"])({method:"put",url:"/api/personal",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getBankList:function(t){return Object(i["a"])(Object(n["a"])({method:"get",url:"/api/finance/member-bank",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},addMemberBank:function(t){return Object(i["a"])(Object(n["a"])({method:"post",url:"/api/finance/member-bank",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},changePsw:function(t){return Object(i["a"])(Object(n["a"])({method:"put",url:"/api/personal/change-password",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getCompanyList:function(t){return Object(i["a"])(Object(n["a"])({method:"get",url:"/api/finance/company/list",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getBetRecord:function(t){return Object(i["a"])(Object(n["a"])({method:"get",url:"/api/finance/bet-record",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getGameBalance:function(t){return Object(i["a"])(Object(n["a"])({method:"get",url:"/api/finance/game-balance",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getPaymentList:function(t){return Object(i["a"])(Object(n["a"])({method:"get",url:"/api/finance/deposit/payment-list",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getPaymentFirm:function(t){return Object(i["a"])(Object(n["a"])({method:"get",url:"/api/finance/deposit/payment-firm",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))}}},"9ab8":function(t,e,a){},d0d7:function(t,e,a){"use strict";var n=a("9ab8"),r=a.n(n);r.a},dc1c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-ee5f8a62.5c965a85.js.map