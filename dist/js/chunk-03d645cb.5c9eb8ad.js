(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03d645cb"],{"00ce":function(t,s,e){},a761:function(t,s,e){"use strict";var i=e("00ce"),a=e.n(i);a.a},afe2:function(t,s,e){"use strict";var i=e("5530"),a=e("2934"),n=e("b09c"),o=e("2f62");s["a"]={data:function(){return{password:"",isFetchApi:!1}},computed:Object(i["a"])({},Object(o["c"])({getUsername:"getRegisterAccount"}),{username:{get:function(){return this.getUsername},set:function(t){this.actionSetUsername(t)}}}),methods:Object(i["a"])({},Object(o["b"])(["actionSetLoginStatus","actionSetUserInfo","actionSetUsername"]),{login:function(){var t=this;if(""!==this.username&&""!==this.password){if(!this.isFetchApi){this.isFetchApi=!0;var s={params:{username:this.getUsername,password:this.password},success:function(){t.isFetchApi=!1,location.reload()},fail:function(s){if(s.message)return t.isFetchApi=!1,void alert("帳號或密碼錯誤")}};a["a"].login(s)}}else alert(n["a"].t("S_ACCOUNT_AND_PASSWORD_CANT_EMPTY"))}})}},c119:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login-bg"},[e("div",{staticClass:"login"},[e("img",{staticClass:"logo",attrs:{src:"/static/tpl/1/w_logo.png"}}),e("div",{staticClass:"title"},[t._v(t._s(t.$t("S_USER_LOGIN")))]),e("form",{staticClass:"form"},[e("div",{staticClass:"input-wrap"},[e("img",{staticClass:"icon",attrs:{src:"/static/icon_mem.png"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:t.$t("S_ENTER_YOUR_ACCOUNT")},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),e("div",{staticClass:"input-wrap"},[e("img",{staticClass:"icon",attrs:{src:"/static/icon_password.png"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",autocomplete:"on",placeholder:t.$t("S_ENTER_YOUR_PASSWORD")},domProps:{value:t.password},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.login(s)},input:function(s){s.target.composing||(t.password=s.target.value)}}})]),e("div",{staticClass:"btn-login",on:{click:t.login}},[t._v(t._s(t.$t("S_LOGIN")))]),e("div",{staticClass:"bottom"},[e("div",{staticClass:"forget-psw",on:{click:function(s){return t.$router.push("/forgetPsw")}}},[t._v(t._s(t.$t("S_FORGET_PSW"))+"?")]),e("div",{staticClass:"register",on:{click:function(s){return t.$router.push("/register")}}},[t._v(t._s(t.$t("S_REGISTER"))+t._s(t.$t("S_ACCOUNT")))])])])])])},a=[],n=e("4360"),o=e("afe2"),r={beforeRouteEnter:function(t,s,e){n["a"].dispatch("actionSetLoginStatus").then((function(){"Y"!==n["a"].state.isLogin?e():e("/")}))},mixins:[o["a"]]},c=r,u=(e("a761"),e("2877")),l=Object(u["a"])(c,i,a,!1,null,"6ecd3000",null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-03d645cb.5c9eb8ad.js.map