(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12ca82af"],{"7ac2":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"backdrop"},[a("div",{staticClass:"spinner"}),a("div",{staticClass:"logo"},[t._v("loading...")])])}],s=(a("d0d7"),a("2877")),i={},o=Object(s["a"])(i,r,n,!1,null,"c60e30ee",null);e["a"]=o.exports},"972a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("div",{staticClass:"icon",on:{click:t.toLastPage}},[a("img",{attrs:{src:"/static/mobile/mcenter/icon_nav_back.png"}})]),a("div",{staticClass:"title"},[t._v(t._s(t.$t("S_PERSONAL_INFO")))]),t._m(0)]),t.isAddPersonalInfo?[a("div",{staticClass:"body"},[a("div",{staticClass:"form-item"},[a("div",{staticClass:"form-title"},[t._v(t._s(t.$t("S_ACTUAL_NAME")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-input",attrs:{type:"text",placeholder:t.$t("S_ENTER_ACTUAL_NAME")},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("div",{staticClass:"errorMsg"},[t._v(t._s(t.errorMsg.name))]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"form-title"},[t._v(t._s(t.$t("S_GENDER")))]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.curGender,expression:"curGender"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.curGender=e.target.multiple?a:a[0]}}},t._l(t.genderList,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(t.$t(e.text))+" ")])})),0)]),a("div",{staticClass:"errorMsg"},[t._v(t._s(t.errorMsg.gender))]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"form-title"},[t._v(t._s(t.$t("S_SELECT_BIRTHDAY")))]),a("div",{staticClass:"form-input",on:{click:function(e){t.isShowDatepicker=!0}}},[t._v(t._s(t.date))]),t.isShowDatepicker?a("div",{staticClass:"datepicker"},[a("datepicker",{attrs:{inline:!0,format:t.formatDate},on:{selected:t.selectDate}})],1):t._e()]),a("div",{staticClass:"errorMsg"},[t._v(t._s(t.errorMsg.birthday))])]),a("div",{staticClass:"tip"},[t._v(t._s(t.$t("S_ADD_PERSONAL_INFO_TIP")))]),a("div",{staticClass:"btn-submit",on:{click:t.updatePersonalInfo}},[t._v(t._s(t.$t("S_SUBMIT")))])]:a("div",{staticClass:"body"},[a("div",{staticClass:"form-item"},[a("div",{staticClass:"form-title"},[t._v(t._s(t.$t("S_ACCOUNT_NAME")))]),a("div",{staticClass:"form-input"},[t._v(t._s(t.userInfo.username))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"form-title"},[t._v("LINE ID")]),+(0===t.userInfo.member_bank)?a("div",{staticClass:"form-input",on:{click:function(e){return t.$router.push("/mobile/bankAdd")}}},[t._v(" "+t._s(t.$t("S_COMPLETE_INFO"))+" ")]):a("div",{staticClass:"form-input"},[t._v(t._s(t.personalInfo.line))])]),a("div",{staticClass:"form-item",on:{click:t.showUpdatePage}},[a("div",{staticClass:"form-title"},[t._v(t._s(t.$t("S_ACTUAL_NAME")))]),t.personalInfo.name?a("div",{staticClass:"name"},[t._v(t._s(t.personalInfo.name))]):a("img",{staticClass:"next",attrs:{src:"/static/mobile/mcenter/icon_nav_next.png"}})])]),t.isFetchApi?a("loading"):t._e()],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[a("img",{attrs:{src:"/static/mobile/mcenter/icon_service.png"}})])}],s=(a("b0c0"),a("5530")),i=a("1495"),o=a("2f62"),c=a("9842"),l=a("fa33"),d=a("c1df"),u=a.n(d),f=a("7ac2"),m={beforeRouteEnter:function(t,e,a){Object(i["a"])(t,e,a)},components:{datepicker:l["a"],loading:f["a"]},data:function(){return{isFetchApi:!1,username:"",personalInfo:"",isAddPersonalInfo:!1,genderList:[{id:"male",text:"S_MALE"},{id:"female",text:"S_FEMALE"}],curGender:"male",date:"2020-01-01",isShowDatepicker:!1,errorMsg:{}}},created:function(){this.getPersonalInfo()},computed:Object(s["a"])({},Object(o["c"])({userInfo:"getUserInfo"}),{formatDate:function(t){return u()(t).format("YYYY-MM-DD")}}),methods:{selectDate:function(t){this.date=u()(t).format("YYYY-MM-DD"),this.isShowDatepicker=!1},getPersonalInfo:function(){var t=this;this.isFetchApi=!0,c["a"].getPersonalInfo({success:function(e){t.personalInfo=e.data,t.isFetchApi=!1},fail:function(e){"Unauthorized."===e.message&&Object(i["b"])(),t.isFetchApi=!1}})},updatePersonalInfo:function(){var t=this;this.isFetchApi=!0,c["a"].updatePersonalInfo({params:{name:this.username,gender:this.curGender,birthday:this.date},success:function(){t.getPersonalInfo(),t.isAddPersonalInfo=!1},fail:function(e){"Unauthorized."===e.message&&Object(i["b"])(),t.errorMsg=e.errors,t.isFetchApi=!1}})},showUpdatePage:function(){this.personalInfo.name||(this.isAddPersonalInfo=!0)},toLastPage:function(){this.isAddPersonalInfo?this.isAddPersonalInfo=!1:this.$router.go(-1)}}},p=m,v=(a("f30d"),a("2877")),_=Object(v["a"])(p,r,n,!1,null,"4c908e02",null);e["default"]=_.exports},9842:function(t,e,a){"use strict";var r=a("5530"),n=a("2b27"),s=a.n(n),i=a("7ad2");e["a"]={getPersonalInfo:function(t){return Object(i["a"])(Object(r["a"])({method:"get",url:"/api/personal",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},updatePersonalInfo:function(t){return Object(i["a"])(Object(r["a"])({method:"put",url:"/api/personal",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getBankList:function(t){return Object(i["a"])(Object(r["a"])({method:"get",url:"/api/finance/member-bank",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},addMemberBank:function(t){return Object(i["a"])(Object(r["a"])({method:"post",url:"/api/finance/member-bank",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},changePsw:function(t){return Object(i["a"])(Object(r["a"])({method:"put",url:"/api/personal/change-password",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getCompanyList:function(t){return Object(i["a"])(Object(r["a"])({method:"get",url:"/api/finance/company/list",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getBetRecord:function(t){return Object(i["a"])(Object(r["a"])({method:"get",url:"/api/finance/bet-record",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getGameBalance:function(t){return Object(i["a"])(Object(r["a"])({method:"get",url:"/api/finance/game-balance",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getPaymentList:function(t){return Object(i["a"])(Object(r["a"])({method:"get",url:"/api/finance/deposit/payment-list",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))},getPaymentFirm:function(t){return Object(i["a"])(Object(r["a"])({method:"get",url:"/api/finance/deposit/payment-firm",errorAlert:!1,headers:{Authorization:s.a.get("token")}},t))}}},"9ab8":function(t,e,a){},d0d7:function(t,e,a){"use strict";var r=a("9ab8"),n=a.n(r);n.a},f30d:function(t,e,a){"use strict";var r=a("f3ed"),n=a.n(r);n.a},f3ed:function(t,e,a){}}]);
//# sourceMappingURL=chunk-12ca82af.7b0c2053.js.map