(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66179b5a"],{"0c08":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("img",{attrs:{src:"/static/mobile/icon-back.png"},on:{click:function(i){return t.$router.go(-1)}}}),e("div",{staticClass:"title"},[t._v(t._s(t.$t("S_SERVICE_CENTER")))])]),e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("img",{attrs:{src:"/static/mobile/service/chat-icon.png"}}),e("div",{staticClass:"text"},[t._v(t._s(t.$t("S_24H_SERVICE")))])]),e("div",{staticClass:"row"},[e("img",{attrs:{src:"/static/mobile/service/telegram-icon.png"}}),e("div",{staticClass:"text"},[t._v(t._s(t.$t("S_TELEGRAM_SERVICE")))])]),e("div",{staticClass:"row"},[e("img",{attrs:{src:"/static/mobile/service/whatsapp-icon.png"}}),e("div",{staticClass:"text"},[t._v(t._s(t.$t("S_LINE_SERVICE")))])])]),e("homeFooter")],1)},o=[],c=e("36fb"),a={components:{homeFooter:c["a"]}},n=a,r=(e("6849"),e("2877")),l=Object(r["a"])(n,s,o,!1,null,"b35c0cc6",null);i["default"]=l.exports},"0c2f":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"modal-wrap"},[e("div",{staticClass:"modal"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("S_LOGIN_REMIDER")))]),e("div",{staticClass:"content"},[t._v(t._s(t.$t("S_ONLY_TO_LOGIN_USER")))]),e("div",{staticClass:"btn-wrap"},[e("div",{staticClass:"btn btn-close",on:{click:function(i){return t.$emit("closeModal",!1)}}},[t._v(t._s(t.$t("S_CLOSE")))]),e("div",{staticClass:"btn btn-register",on:{click:function(i){return t.$router.push("/mobile/login")}}},[t._v(t._s(t.$t("S_REGISTER_AND_LOGIN")))])])])])},o=[],c=(e("dcbf"),e("2877")),a={},n=Object(c["a"])(a,s,o,!1,null,"2bfdf79c",null);i["a"]=n.exports},"36fb":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"footer-wrap"},[e("div",{staticClass:"footer"},t._l(t.footerList,(function(i,s){return e("div",{key:"footer-list-"+i.id,staticClass:"list",class:{active:i.id===t.$route.name},on:{click:function(e){return t.changePage(i)}}},[e("div",{class:["img","img-"+s,{active:t.$route.name===i.id}]}),t._v(" "+t._s(t.$t(i.text))+" ")])})),0),t.isShowModal?e("loginRemind",{on:{closeModal:t.closeModal}}):t._e()],1)},o=[],c=(e("b0c0"),e("5530")),a=e("2f62"),n=e("0c2f"),r={components:{loginRemind:n["a"]},data:function(){return{footerList:[{id:"mobilePromotion",text:"S_PROMOTION"},{id:"mobileFriend",text:"S_SHARE_FRIEND"},{id:"mobileHome",text:"S_HOME_PAGE"},{id:"mobileService",text:"S_ONLINE_SERVICE"},{id:"mobileMCenter",text:"S_MEMBER_CENTER"}],isShowModal:!1}},computed:Object(c["a"])({},Object(a["c"])({isLogin:"getIsLogin"})),methods:{changePage:function(t){if(t.id!==this.$route.name)switch(t.id){case"mobilePromotion":this.$router.push("/mobile/promotion");break;case"mobileFriend":if("N"===this.isLogin){this.isShowModal=!0;break}this.$router.push("/mobile/friend");break;case"mobileHome":this.$router.push("/mobile/home");break;case"mobileService":this.$router.push("/mobile/service");break;case"mobileMCenter":this.$router.push("/mobile/mcenter");break}},closeModal:function(t){this.isShowModal=t}}},l=r,d=(e("96d8"),e("2877")),u=Object(d["a"])(l,s,o,!1,null,"4c5de870",null);i["a"]=u.exports},"4a0e":function(t,i,e){},6849:function(t,i,e){"use strict";var s=e("71fd"),o=e.n(s);o.a},"6cf8":function(t,i,e){},"71fd":function(t,i,e){},"96d8":function(t,i,e){"use strict";var s=e("4a0e"),o=e.n(s);o.a},dcbf:function(t,i,e){"use strict";var s=e("6cf8"),o=e.n(s);o.a}}]);
//# sourceMappingURL=chunk-66179b5a.59885baf.js.map