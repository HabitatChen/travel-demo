webpackJsonp([1],{"7n8b":function(t,e){},"9n10":function(t,e){},BRka:function(t,e){},"D+8m":function(t,e){},M6Sr:function(t,e){},Mdde:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("o8nZ")},null,null).exports,r=i("/ocq"),o={name:"HomeHeader",props:{city:String}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n        "+this._s(this.$store.state.city)+"\n      "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n  ")])}]};var l=i("VU/8")(o,c,!1,function(t){i("U0Ml")},"data-v-023d05ca",null).exports,u={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{autoplay:3e3,pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var h=i("VU/8")(u,d,!1,function(t){i("rB24")},"data-v-737ded42",null).exports,p={name:"HomeIcons",computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}},props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{staticClass:"swiper-containner",attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var v=i("VU/8")(p,f,!1,function(t){i("D+8m")},"data-v-db2b1ec0",null).exports,m={name:"HomeRecommend",props:{list:Array}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var C=i("VU/8")(m,_,!1,function(t){i("YxNT")},"data-v-4db52a18",null).exports,w={name:"HomeWeekend",props:{list:Array}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var g=i("VU/8")(w,y,!1,function(t){i("7n8b")},"data-v-1d6d5164",null).exports,k=i("mtWM"),b=i.n(k),$={name:"Home",components:{HomeHeader:l,HomeSwiper:h,HomeIcons:v,HomeRecommend:C,HomeWeekend:g},mounted:function(){this.getHomeInfo()},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[]}},methods:{getHomeInfo:function(){b.a.get("/static/mock/index.json").then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){var e=t.data;if(e.ret&&e.data){var i=e.data;this.swiperList=i.swiperList,this.iconList=i.iconList,this.recommendList=i.recommendList,this.weekendList=i.weekendList}}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var S=i("VU/8")($,x,!1,function(t){i("U4z0")},"data-v-21807a46",null).exports,H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var L=i("VU/8")({name:"CityHeader"},H,!1,function(t){i("fFOH")},"data-v-00421873",null).exports,T=i("GQaK"),E={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},methods:{handleCityClick:function(t){this.$store.commit("changeCity",t),this.$router.push("/")}},mounted:function(){this.scroll=new T.a(this.$refs.search)}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("\n        没有找到匹配数据\n      ")])],2)])])},staticRenderFns:[]};var F=i("VU/8")(E,U,!1,function(t){i("BRka")},"data-v-398e22d2",null).exports,O={name:"CityList",props:{hot:Array,cities:Object,letter:String},computed:{},methods:{handleCityClick:function(t){this.$store.commit("changeCity",t),this.$router.push("/")}},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll=new T.a(this.$refs.wrapper)}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.$store.state.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))])})],2)])},staticRenderFns:[]};var N=i("VU/8")(O,R,!1,function(t){i("geOa")},"data-v-2da575fe",null).exports,M={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchEnd:function(){this.touchStatus=!1}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v("\n    "+t._s(e)+"\n  ")])}))},staticRenderFns:[]};var I={name:"City",components:{CityHeader:L,CitySearch:F,CityList:N,CityAlphabet:i("VU/8")(M,V,!1,function(t){i("Mdde")},"data-v-2a443c34",null).exports},mounted:function(){this.getCityInfo()},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){b.a.get("/static/mock/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){var e=t.data;if(e.ret&&e.data){var i=e.data;this.cities=i.cities,this.hotCities=i.hotCities}},handleLetterChange:function(t){this.letter=t}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hot:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var j=i("VU/8")(I,A,!1,function(t){i("t9am")},"data-v-32293435",null).exports;s.a.use(r.a);var Y=new r.a({routes:[{path:"/",name:"Home",component:S},{path:"/city",name:"City",component:j}]}),D=i("v5o6"),z=i.n(D),B=(i("9n10"),i("M6Sr"),i("TzC8"),i("F3EI")),P=i.n(B),W=(i("v2ns"),i("NYxO"));s.a.use(W.a);try{localStorage.city&&localStorage.city}catch(t){}var G=new W.a.Store({state:{city:localStorage.city||"北京"},mutations:{changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}}});s.a.config.productionTip=!1,z.a.attach(document.body),s.a.use(P.a),new s.a({el:"#app",router:Y,store:G,components:{App:a},template:"<App/>"})},TzC8:function(t,e){},U0Ml:function(t,e){},U4z0:function(t,e){},YxNT:function(t,e){},fFOH:function(t,e){},geOa:function(t,e){},o8nZ:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},rB24:function(t,e){},t9am:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.406d8a414321091f5f0a.js.map