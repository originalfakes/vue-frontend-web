(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f29e8c3"],{"47a3":function(s,t,e){},"61e1":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"login-bg"},[e("img",{staticClass:"logo",attrs:{src:"/static/mobile/login/logo_home.png"}}),e("div",{staticClass:"tab-wrap"},[e("div",{staticClass:"tab-inner"},[e("div",{staticClass:"tab",class:{active:s.tabLogin},on:{click:function(t){s.tabLogin=!0}}},[s._v(" "+s._s(s.$t("S_LOGIN"))+" ")]),e("div",{staticClass:"tab",class:{active:!s.tabLogin},on:{click:function(t){s.tabLogin=!1}}},[s._v(" "+s._s(s.$t("S_REGISTER"))+" ")])])]),s.tabLogin?e("transition",{attrs:{name:"translate"}},[e("login")],1):e("transition",{attrs:{name:"translate2"}},[e("register",{on:{showLogin:s.showLogin}})],1)],1)},i=[],n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("form",[e("div",{staticClass:"form"},[e("div",{staticClass:"input-wrap"},[e("img",{staticClass:"icon",attrs:{src:"/static/mobile/login/icon_name.png"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],ref:"username",attrs:{type:"text",placeholder:s.$t("S_ENTER_YOUR_ACCOUNT")},domProps:{value:s.username},on:{input:function(t){t.target.composing||(s.username=t.target.value)}}})]),e("div",{staticClass:"input-wrap"},[e("img",{staticClass:"icon",attrs:{src:"/static/mobile/login/icon_password.png"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:s.$t("S_PLEASE_ENTER_PASSWORD")},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),e("img",{staticClass:"icon-psw",attrs:{src:"/static/mobile/login/close_eyes.png"}})]),e("div",{staticClass:"psw-column"},[e("div",{staticClass:"left"},[s._m(0),e("div",{staticClass:"save-psw"},[s._v(s._s(s.$t("S_REMEMBER_PSW")))])]),e("div",{staticClass:"right"},[s._v(s._s(s.$t("S_FORGET_PSW"))+"?")])]),e("div",{staticClass:"login",on:{click:s.login}},[s._v(s._s(s.$t("S_LOGIN")))]),e("div",{staticClass:"home-page",on:{click:function(t){return s.$router.push("/mobile/home")}}},[s._v(s._s(s.$t("S_GO_VISIT")))])])])])},r=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("label",{staticClass:"switch"},[e("input",{attrs:{type:"checkbox"}}),e("span",{staticClass:"slider round"})])}],o=e("afe2"),c={mixins:[o["a"]],mounted:function(){this.$refs.username.focus()}},l=c,u=(e("8259"),e("2877")),m=Object(u["a"])(l,n,r,!1,null,"5fc1e9fe",null),p=m.exports,d=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("form",[e("div",{staticClass:"form"},[e("div",{staticClass:"input-wrap"},[e("img",{staticClass:"icon",attrs:{src:"/static/mobile/login/icon_name.png"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],attrs:{type:"text",placeholder:s.$t("S_INPUT_ACCOUNT")},domProps:{value:s.username},on:{input:function(t){t.target.composing||(s.username=t.target.value)}}})]),e("div",{staticClass:"error-msg"},[s._v(s._s(s.errorMsg.username))]),e("div",{staticClass:"input-wrap"},[e("img",{staticClass:"icon",attrs:{src:"/static/mobile/login/icon_password.png"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:s.$t("S_INPUT_PASSWORD")},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),e("img",{staticClass:"icon-psw",attrs:{src:"/static/mobile/login/close_eyes.png"}})]),e("div",{staticClass:"error-msg"},[s._v(s._s(s.errorMsg.password))]),e("div",{staticClass:"check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.isCheck,expression:"isCheck"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.isCheck)?s._i(s.isCheck,null)>-1:s.isCheck},on:{change:function(t){var e=s.isCheck,a=t.target,i=!!a.checked;if(Array.isArray(e)){var n=null,r=s._i(e,n);a.checked?r<0&&(s.isCheck=e.concat([n])):r>-1&&(s.isCheck=e.slice(0,r).concat(e.slice(r+1)))}else s.isCheck=i}}}),s._v(" "+s._s(s.$t("S_ACCEPT_RULE_AND_PRIVACY"))),e("span",[s._v(s._s(s.$t("S_RULE"))+s._s(s.$t("S_AND"))+s._s(s.$t("S_PRIVACY_POLICY")))])]),e("div",{staticClass:"register",on:{click:s.registerAccount}},[s._v(s._s(s.$t("S_REGISTER")))])])])])},g=[],v=e("5530"),_=e("2f62"),f=e("2934"),h={data:function(){return{isCheck:!0,username:"",password:"",errorMsg:{}}},methods:Object(v["a"])({},Object(_["b"])(["actionSetUsername"]),{registerAccount:function(){var s=this;if(""!==this.username&&""!==this.password)if(this.isCheck){var t={params:{username:this.username,password:this.password},success:function(){s.actionSetUsername(s.username),s.$emit("showLogin",!0)},fail:function(t){s.errorMsg=t.errors}};f["a"].register(t)}else alert("需勾選選項");else alert("欄位不得為空")}})},C=h,w=(e("960b"),Object(u["a"])(C,d,g,!1,null,"7907b5de",null)),b=w.exports,S=e("4360"),A={beforeRouteEnter:function(s,t,e){S["a"].dispatch("actionSetLoginStatus").then((function(){"Y"!==S["a"].state.isLogin?e():e("/mobile/home")}))},components:{login:p,register:b},data:function(){return{tabLogin:!0}},methods:{showLogin:function(s){this.tabLogin=s}}},k=A,E=(e("bf83"),Object(u["a"])(k,a,i,!1,null,"4ad2fc8e",null));t["default"]=E.exports},8259:function(s,t,e){"use strict";var a=e("ff89"),i=e.n(a);i.a},"960b":function(s,t,e){"use strict";var a=e("47a3"),i=e.n(a);i.a},afe2:function(s,t,e){"use strict";var a=e("5530"),i=e("2934"),n=e("b09c"),r=e("2f62");t["a"]={data:function(){return{password:"",isFetchApi:!1}},computed:Object(a["a"])({},Object(r["c"])({getUsername:"getRegisterAccount"}),{username:{get:function(){return this.getUsername},set:function(s){this.actionSetUsername(s)}}}),methods:Object(a["a"])({},Object(r["b"])(["actionSetLoginStatus","actionSetUserInfo","actionSetUsername"]),{login:function(){var s=this;if(""!==this.username&&""!==this.password){if(!this.isFetchApi){this.isFetchApi=!0;var t={params:{username:this.getUsername,password:this.password},success:function(){s.isFetchApi=!1,location.reload()},fail:function(t){if(t.message)return s.isFetchApi=!1,void alert("帳號或密碼錯誤")}};i["a"].login(t)}}else alert(n["a"].t("S_ACCOUNT_AND_PASSWORD_CANT_EMPTY"))}})}},bf83:function(s,t,e){"use strict";var a=e("f7ad"),i=e.n(a);i.a},f7ad:function(s,t,e){},ff89:function(s,t,e){}}]);
//# sourceMappingURL=chunk-5f29e8c3.f994a429.js.map