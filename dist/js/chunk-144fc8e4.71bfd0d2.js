(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-144fc8e4"],{"2ac2":function(t,n,e){"use strict";var i=e("4c4b"),a=e.n(i);a.a},"4c4b":function(t,n,e){},"70f9":function(t,n,e){},8701:function(t,n,e){"use strict";var i=e("d0ed"),a=e.n(i);a.a},"885d":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"form-content"},[e("div",{staticClass:"form-input-wrap"},[e("div",{staticClass:"select-list"},t._l(t.amountList,(function(n){return e("div",{key:"amount-"+n,staticClass:"list",on:{click:function(e){return t.addAmount(n)}}},[t._v(" "+t._s(n)+" ")])})),0),e("div",{staticClass:"form-input"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("S_POINT_REMAIN")))]),e("div",[t._v("1600")])]),e("div",{staticClass:"form-input"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("S_DEPOSIT_AMOUNT")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text",placeholder:t.$t("S_SINGLE_DEPOSIT_AMOUNT")+"，1000~10000"},domProps:{value:t.amount},on:{input:function(n){n.target.composing||(t.amount=n.target.value)}}})])]),e("div",{staticClass:"btn-wrap"},[e("btnReset",{attrs:{title:t.$t("S_RESET_INFO"),func:t.clearInput}}),e("btnConfirm",{attrs:{title:t.$t("S_SEND"),func:t.nextFunc}})],1)])},a=[],s=e("e20f"),c=e("b1be"),u={components:{btnReset:s["a"],btnConfirm:c["a"]},data:function(){return{amountList:[1e3,2e3,5e3,8e3,1e4],amount:""}},methods:{addAmount:function(t){this.amount=+this.amount+t},clearInput:function(){this.amount=""},nextFunc:function(){}}},o=u,r=(e("96bb"),e("2877")),l=Object(r["a"])(o,i,a,!1,null,"fc9cbeb6",null);n["default"]=l.exports},"96bb":function(t,n,e){"use strict";var i=e("70f9"),a=e.n(i);a.a},b1be:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"btn-confirm"},[t._v(t._s(t.title))])},a=[],s={props:{title:{type:String,default:""},func:{type:Function,default:function(){return{}}}}},c=s,u=(e("2ac2"),e("2877")),o=Object(u["a"])(c,i,a,!1,null,"dd293c72",null);n["a"]=o.exports},d0ed:function(t,n,e){},e20f:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"btn-reset",on:{click:t.func}},[t._v(t._s(t.title))])},a=[],s={props:{title:{type:String,default:""},func:{type:Function,default:function(){return{}}}}},c=s,u=(e("8701"),e("2877")),o=Object(u["a"])(c,i,a,!1,null,"5b2a4317",null);n["a"]=o.exports}}]);
//# sourceMappingURL=chunk-144fc8e4.71bfd0d2.js.map