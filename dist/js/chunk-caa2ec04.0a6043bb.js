(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-caa2ec04"],{"0ac7":function(t,e,i){"use strict";var s=i("774a"),a=i.n(s);a.a},"0c2f":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-wrap"},[i("div",{staticClass:"modal"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("S_LOGIN_REMIDER")))]),i("div",{staticClass:"content"},[t._v(t._s(t.$t("S_ONLY_TO_LOGIN_USER")))]),i("div",{staticClass:"btn-wrap"},[i("div",{staticClass:"btn btn-close",on:{click:function(e){return t.$emit("closeModal",!1)}}},[t._v(t._s(t.$t("S_CLOSE")))]),i("div",{staticClass:"btn btn-register",on:{click:function(e){return t.$router.push("/mobile/login")}}},[t._v(t._s(t.$t("S_REGISTER_AND_LOGIN")))])])])])},a=[],n=(i("dcbf"),i("2877")),r={},o=Object(n["a"])(r,s,a,!1,null,"2bfdf79c",null);e["a"]=o.exports},"18b1":function(t,e,i){},"18c5":function(t,e,i){"use strict";var s=i("c084"),a=i.n(s);a.a},1927:function(t,e,i){},2992:function(t,e,i){"use strict";var s=i("ee5b"),a=i.n(s);a.a},"36fb":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-wrap"},[i("div",{staticClass:"footer"},t._l(t.footerList,(function(e,s){return i("div",{key:"footer-list-"+e.id,staticClass:"list",class:{active:e.id===t.$route.name},on:{click:function(i){return t.changePage(e)}}},[i("div",{class:["img","img-"+s,{active:t.$route.name===e.id}]}),t._v(" "+t._s(t.$t(e.text))+" ")])})),0),t.isShowModal?i("loginRemind",{on:{closeModal:t.closeModal}}):t._e()],1)},a=[],n=(i("b0c0"),i("5530")),r=i("2f62"),o=i("0c2f"),c={components:{loginRemind:o["a"]},data:function(){return{footerList:[{id:"mobilePromotion",text:"S_PROMOTION"},{id:"mobileFriend",text:"S_SHARE_FRIEND"},{id:"mobileHome",text:"S_HOME_PAGE"},{id:"mobileService",text:"S_ONLINE_SERVICE"},{id:"mobileMCenter",text:"S_MEMBER_CENTER"}],isShowModal:!1}},computed:Object(n["a"])({},Object(r["c"])({isLogin:"getIsLogin"})),methods:{changePage:function(t){if(t.id!==this.$route.name)switch(t.id){case"mobilePromotion":this.$router.push("/mobile/promotion");break;case"mobileFriend":if("N"===this.isLogin){this.isShowModal=!0;break}this.$router.push("/mobile/friend");break;case"mobileHome":this.$router.push("/mobile/home");break;case"mobileService":this.$router.push("/mobile/service");break;case"mobileMCenter":this.$router.push("/mobile/mcenter");break}},closeModal:function(t){this.isShowModal=t}}},l=c,u=(i("96d8"),i("2877")),d=Object(u["a"])(l,s,a,!1,null,"4c5de870",null);e["a"]=d.exports},"4a0e":function(t,e,i){},"62bd":function(t,e,i){"use strict";var s=i("1927"),a=i.n(s);a.a},"6b51":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("div",{attrs:{id:"loading-wrap"}},[i("svg",{staticClass:"lds-spinner",staticStyle:{background:"none"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"75px",height:"75px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[i("g",{attrs:{transform:"rotate(0 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}})])]),i("g",{attrs:{transform:"rotate(30 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}})])]),i("g",{attrs:{transform:"rotate(60 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}})])]),i("g",{attrs:{transform:"rotate(90 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}})])]),i("g",{attrs:{transform:"rotate(120 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}})])]),i("g",{attrs:{transform:"rotate(150 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}})])]),i("g",{attrs:{transform:"rotate(180 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}})])]),i("g",{attrs:{transform:"rotate(210 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}})])]),i("g",{attrs:{transform:"rotate(240 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}})])]),i("g",{attrs:{transform:"rotate(270 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}})])]),i("g",{attrs:{transform:"rotate(300 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}})])]),i("g",{attrs:{transform:"rotate(330 50 50)"}},[i("rect",{attrs:{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#fefbfc"}},[i("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}})])])])])])},a=[],n=(i("af7a"),i("2877")),r={},o=Object(n["a"])(r,s,a,!1,null,"1d1788f7",null);e["a"]=o.exports},"6cf8":function(t,e,i){},"774a":function(t,e,i){},"96d8":function(t,e,i){"use strict";var s=i("4a0e"),a=i.n(s);a.a},a55e:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home")],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-body"},[i("homeHeader"),i("carousel"),i("userInfo"),i("gameHall"),i("homeFooter"),t.isFetchApi?i("loading"):t._e()],1)},r=[],o=i("4360"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"lang-drop",on:{click:function(e){t.isShowLang=!0}}},[i("div",{staticClass:"lang-pic"}),i("div",{staticClass:"text"},[t._v("語系")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowLang,expression:"isShowLang"}],staticClass:"lang-list-wrap",on:{click:function(e){t.isShowLang=!1}}},[i("transition",{attrs:{name:"transiiton"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowLang,expression:"isShowLang"}],staticClass:"lang-list"},t._l(t.langList,(function(e){return i("div",{key:e.id,staticClass:"list",on:{click:function(i){return t.changeLang(e.id)}}},[t._v(" "+t._s(e.text)+" ")])})),0)])],1)])},l=[],u=i("5530"),d=i("d5a7"),f=i("2f62"),h={data:function(){return{langList:d["a"],isShowLang:!1}},methods:Object(u["a"])({},Object(f["b"])(["actionSetLang"]),{changeLang:function(t){this.actionSetLang(t),this.$i18n.locale=t}})},m=h,v=(i("0ac7"),i("2877")),g=Object(v["a"])(m,c,l,!1,null,"2a73af63",null),p=g.exports,b=i("36fb"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-contain"},[t.sliderList.length>=1?i("swiper",{ref:"swiper",attrs:{options:t.swiperOption}},t._l(t.sliderList,(function(t){return i("swiper-slide",{key:t.id},[i("img",{attrs:{src:""+t.image_file.replace("..","http://z00.ateam99.net"),width:"100%",height:"205px"}})])})),1):[i("img",{attrs:{src:"/static/mobile/tpl/home/1/slider_temp.jpg",width:"100%",height:"205px"}})],i("marquee")],2)},w=[],y=i("7212"),S=(i("a7a3"),i("2934")),C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"marquee-wrap"},[i("div",{staticClass:"marquee"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("S_ANNOUNCEMENT")))]),i("marquee",{attrs:{scrolldelay:"190",width:"100%"}},t._l(t.marqueeContent,(function(e){return i("span",{key:e.id},[t._v(" "+t._s(e.content)+" ")])})),0)],1)])},L=[],k={data:function(){return{marqueeContent:[]}},created:function(){this.getMarquee()},watch:{curLang:function(){this.getMarquee()}},computed:Object(u["a"])({},Object(f["c"])({curLang:"getCurLang"}))},x=k,N=(i("f75d"),Object(v["a"])(x,C,L,!1,null,"0732b473",null)),$=N.exports,O={components:{Swiper:y["Swiper"],SwiperSlide:y["SwiperSlide"],marquee:$},directives:{swiper:y["directive"]},data:function(){return{swiperOption:{initialSlide:0,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},direction:"horizontal",pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,e){return"<span class=".concat(e,"></span>")}}},sliderList:[]}},created:function(){this.getAdSilder()},computed:{swiper:function(){return this.$refs.swiper.swiper}},methods:{getAdSilder:function(){var t=this,e={params:{device:2},success:function(e){t.sliderList=e.data}};S["a"].getAdSlider(e)}}},E=O,M=(i("62bd"),Object(v["a"])(E,_,w,!1,null,"00460bc3",null)),H=M.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-select"},[i("div",{staticClass:"link"},[i("img",{attrs:{src:"/static/mobile/home/icon-save.png"}}),i("span",{on:{click:function(e){return t.openLink("deposit")}}},[t._v(t._s(t.$t("S_DEPOSIT")))])]),i("div",{staticClass:"link"},[i("img",{attrs:{src:"/static/mobile/home/icon-take.png"}}),i("span",{on:{click:function(e){return t.openLink("withdrawal")}}},[t._v(t._s(t.$t("S_CONSIGNMENT")))])]),i("div",{staticClass:"link"},[i("img",{attrs:{src:"/static/mobile/home/icon-sign.png"}}),i("span",[t._v(t._s("Y"===t.isLogin?t.userInfo.username:t.$t("S_HI")))])]),i("div",{staticClass:"link"},[i("img",{attrs:{src:"/static/mobile/home/icon-go.png"}}),"Y"===t.isLogin?i("div",[i("div",{staticClass:"wallet"},[t._v(t._s(t.$t("S_MAIN_WALLET")))]),t._v(" "+t._s(t.userInfo.wallet)+" ")]):t._e(),"N"===t.isLogin?i("span",{on:{click:function(e){return t.$router.push("/mobile/login")}}},[t._v(t._s(t.$t("S_PLEASE_LOGIN")))]):t._e()]),t.isShowModal?i("loginRemind",{on:{closeModal:t.closeModal}}):t._e()],1)},I=[],j=i("0c2f"),P={components:{loginRemind:j["a"]},data:function(){return{isShowModal:!1}},computed:Object(u["a"])({},Object(f["c"])({isLogin:"getIsLogin",userInfo:"getUserInfo"})),methods:{openLink:function(t){"N"!==this.isLogin?this.$router.push("/mobile/".concat(t)):this.isShowModal=!0},closeModal:function(t){this.isShowModal=t}}},G=P,A=(i("2992"),Object(v["a"])(G,T,I,!1,null,"091f1a42",null)),R=A.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar-container"},[i("div",{staticClass:"navbar"},t._l(t.navbarList.value,(function(e,s){return i("div",{key:"navbar-list-"+e.key,staticClass:"navbar-list",class:{active:t.setActiveList(e.key)},on:{click:function(i){return t.changeGameHall(e.key,s)}}},[e.key!==t.defaultGame?i("div",{staticClass:"shadow"}):t._e(),t._v(" "+t._s(e.name)+" ")])})),0),i("div",{ref:"wrap",staticClass:"content-wrap"},t._l(t.navbarList.value,(function(e){return i("div",{key:"content-"+e.key,ref:"test",refInFor:!0,staticClass:"content "},t._l(e.companies,(function(s){return i("div",{key:"vendor-"+s.key,staticClass:"vendor"},[i("img",{attrs:{src:"/static/mobile/home/"+e.key+"/"+s.key+".png",width:"100%"}}),i("div",{staticClass:"text"},[t._v(t._s(s.name))])])})),0)})),0)])},q=[],D=(i("4160"),i("159b"),{data:function(){return{defaultGameList:[{id:"yabo"},{id:"live"},{id:"sport"},{id:"lottery"},{id:"chess"},{id:"electron"}],defaultGame:"yabo",scrollPos:0,animation:!1,vendorHeight:[],timeout:""}},created:function(){this.getNavbar()},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),clearTimeout(this.timeout)},watch:{navbarList:function(){var t=this;this.timeout=setTimeout((function(){t.vendorHeight=[],t.$refs.test.forEach((function(e,i){0!==i?t.vendorHeight.push(t.$refs.test[i-1].clientHeight+t.vendorHeight[i-1]+3*i):t.vendorHeight.push(0)}))}),500)}},computed:Object(u["a"])({},Object(f["c"])({navbarList:"getNavbarList"})),methods:Object(u["a"])({},Object(f["b"])(["actionSetNavbarList"]),{getNavbar:function(){var t=this;S["a"].getNavbarList({success:function(e){t.actionSetNavbarList(e.data)}})},handleScroll:function(){!this.animation&&this.$refs.wrap&&(this.scrollPos=this.$refs.wrap.scrollTop,this.scrollPos>=0&&this.scrollPos<this.vendorHeight[1]?this.defaultGame="yabo":this.scrollPos>this.vendorHeight[1]&&this.scrollPos<this.vendorHeight[2]?this.defaultGame="live":this.scrollPos>this.vendorHeight[2]&&this.scrollPos<this.vendorHeight[3]?this.defaultGame="sport":this.scrollPos>this.vendorHeight[3]&&this.scrollPos<this.vendorHeight[4]?this.defaultGame="lottery":this.scrollPos>this.vendorHeight[4]&&this.scrollPos<this.vendorHeight[5]?this.defaultGame="chess":this.scrollPos>=this.vendorHeight[5]&&(this.defaultGame="electron"))},setActiveList:function(t){if(this.defaultGame===t)return!0},changeGameHall:function(t,e){var i=this;this.defaultGame===t||this.animation||(this.$refs.wrap.scrollTo({top:this.vendorHeight[e],left:0,behavior:"smooth"}),this.defaultGame=t,this.scrollPos=this.$refs.wrap.scrollTop,this.animation=!0,this.timeout=setTimeout((function(){i.animation=!1}),1e3))}})}),Y=D,B=(i("18c5"),Object(v["a"])(Y,F,q,!1,null,"3ce81794",null)),U=B.exports,z=i("6b51"),J={components:{homeHeader:p,carousel:H,userInfo:R,gameHall:U,homeFooter:b["a"],loading:z["a"]},data:function(){return{isFetchApi:!1}},created:function(){var t=this;""===o["a"].state.isLogin&&(this.isFetchApi=!0,o["a"].dispatch("actionSetLoginStatus").then((function(){t.isFetchApi=!1})))}},V=J,W=Object(v["a"])(V,n,r,!1,null,null,null),K=W.exports,Q={components:{home:K}},X=Q,Z=Object(v["a"])(X,s,a,!1,null,null,null);e["default"]=Z.exports},af7a:function(t,e,i){"use strict";var s=i("18b1"),a=i.n(s);a.a},c084:function(t,e,i){},d3a3:function(t,e,i){},dcbf:function(t,e,i){"use strict";var s=i("6cf8"),a=i.n(s);a.a},ee5b:function(t,e,i){},f75d:function(t,e,i){"use strict";var s=i("d3a3"),a=i.n(s);a.a}}]);
//# sourceMappingURL=chunk-caa2ec04.0a6043bb.js.map