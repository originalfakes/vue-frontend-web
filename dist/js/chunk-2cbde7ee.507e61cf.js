(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cbde7ee"],{1495:function(t,s,i){"use strict";i.d(s,"b",(function(){return o})),i.d(s,"a",(function(){return r}));var a=i("a18c"),e=i("4360"),c=i("b09c"),n=i("2b0e");function o(){alert(c["a"].t("S_PLEASE_LOGIN_AGAIN")),a["a"].push("/"),location.reload()}function r(t,s,i){if(""!==e["a"].state.isLogin){if("Y"===e["a"].state.isLogin)return void i();i("/")}e["a"].dispatch("actionSetLoginStatus").then((function(){"Y"!==e["a"].state.isLogin?(n["default"].$cookies.get("token")&&alert(c["a"].t("S_PLEASE_LOGIN_AGAIN")),i("/")):i()}))}},"503e":function(t,s,i){"use strict";var a=i("b11f"),e=i.n(a);e.a},5682:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"header"},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:"/static/mobile/icon-back.png"},on:{click:function(s){return t.$router.go(-1)}}})]),i("div",{staticClass:"title"},[t._v(t._s(t.$t("S_PERSONAL_SETTING")))]),i("div",{staticClass:"right"})]),i("div",{staticClass:"body"},[i("div",{staticClass:"form"},[i("div",{staticClass:"form-item"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("S_PHONE_NUMBER")))]),i("div",{staticClass:"text"},[t._v(t._s(t.userInfo.cell_phone))])]),i("div",{staticClass:"form-item",on:{click:function(s){return t.$router.push("/mobile/changePsw")}}},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("S_CHANGE_PASSWORD")))]),i("div",{staticClass:"text"},[t._v(t._s(t.$t("S_ACCOUNT_LOGIN")))])])]),i("div",{staticClass:"form"},[i("div",{staticClass:"form-item",on:{click:function(s){return t.$router.push("/mobile/bank")}}},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("S_BANK_CARD_MANAGE")))]),i("div",{staticClass:"text"},[t._v(t._s(t.$t("S_USING_WITHDRAW")))])]),i("div",{staticClass:"form-item",on:{click:function(s){return t.$router.push("/mobile/usdt")}}},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("S_USDT_MANAGE")))]),i("div",{staticClass:"text"},[t._v(t._s(t.$t("S_USING_WITHDRAW")))])])]),i("div",{staticClass:"form",on:{click:function(s){return t.$router.push("/mobile/about")}}},[i("div",{staticClass:"form-item"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("S_ABOUT_US")))])])])])])},e=[],c=i("5530"),n=i("1495"),o=i("2f62"),r={beforeRouteEnter:function(t,s,i){Object(n["a"])(t,s,i)},computed:Object(c["a"])({},Object(o["c"])({userInfo:"getUserInfo"}))},l=r,u=(i("503e"),i("2877")),_=Object(u["a"])(l,a,e,!1,null,"25548819",null);s["default"]=_.exports},b11f:function(t,s,i){}}]);
//# sourceMappingURL=chunk-2cbde7ee.507e61cf.js.map