webpackJsonp([9],{BRgg:function(e,t,n){"use strict";t.c=function(e,t){var n={limit:e,offset:t};return r.a.get(o.a+"/top/mv",{params:n}).then(function(e){return i.a.resolve(e.data)})},t.b=function(e){var t={id:e};return r.a.get(o.a+"/mv/url",{params:t}).then(function(e){return i.a.resolve(e.data)})},t.a=function(e){var t={id:e};return r.a.get(o.a+"/comment/mv",{params:t}).then(function(e){return i.a.resolve(e.data)})};var a=n("rVsN"),i=n.n(a),o=n("T452"),s=n("aozt"),r=n.n(s)},Kjo5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4YfN"),i=n.n(a),o=n("9rMa"),s=n("qwAB"),r=n("y/jF"),l=n("BRgg"),c={name:"Rank",mixins:[n("5jRo").b],components:{Scroll:s.a,Loading:r.a},data:function(){return{page:1,hasMove:!0,ListCount:1e3,topList:[],hotList:[{index:"0",value:"云音乐新歌榜"},{index:"1",value:"云音乐热歌榜"},{index:"2",value:"网易原创歌曲榜"},{index:"3",value:"云音乐飙升榜"},{index:"4",value:"云音乐电音榜"},{index:"5",value:"UK排行榜周榜"},{index:"6",value:"美国Billboard周榜"},{index:"7",value:"KTV嗨榜"},{index:"8",value:"iTunes榜"},{index:"9",value:"Hit FM Top榜"},{index:"10",value:"日本Oricon周榜"},{index:"11",value:"韩国Melon排行榜周榜"},{index:"12",value:"韩国Mnet排行榜周榜"},{index:"13",value:"韩国Melon原声周榜"},{index:"14",value:"中国TOP排行榜(港台榜)"}]}},created:function(){this._getTopList()},methods:i()({handlePlaylist:function(e){if(this.$refs.rank){var t=e.length>0?"60px":"";this.$refs.rank.style.paddingBottom=t,this.$refs.toplist.refresh()}},selectItem:function(e){this.$router.push({path:"/rank/"+e.id}),this.setTopList(e)},_getTopList:function(){var e=this;Object(l.c)(30,this.page).then(function(t){200===t.code&&(e.topList=t.data,e._checkMore(e.topList))})},_checkMore:function(e){e.length>=this.ListCount&&(this.hasMove=!1)},serachMove:function(){var e=this;this.hasMove&&(this.page++,Object(l.c)(30,30*this.page).then(function(t){if(200===t.code){if(0===t.data.length)return void(e.hasMove=!1);e.topList=e.topList.concat(t.data),e._checkMore(e.topList)}}))},listScroll:function(){this.$emit("listScroll")}},Object(o.d)({setTopList:"SET_TOP_LIST"}))},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:e.topList,pullup:!0,beforeScroll:!0},on:{scrollToEnd:e.serachMove,beforeScroll:e.listScroll}},[n("ul",{ref:"rank"},[e._l(e.topList,function(t,a){return n("li",{key:a,staticClass:"item",on:{click:function(n){e.selectItem(t)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover,expression:"item.cover"}]})])])}),e._v(" "),n("loading",{directives:[{name:"show",rawName:"v-show",value:e.hasMove,expression:"hasMove"}],attrs:{title:""}}),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.hasMove,expression:"!hasMove"}],staticClass:"lodAuto"},[e._v("(^_^) 已全部加载")])],2),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)},staticRenderFns:[]};var v=n("C7Lr")(c,u,!1,function(e){n("L4jn")},"data-v-ed3f012e",null);t.default=v.exports},L4jn:function(e,t){}});
//# sourceMappingURL=9.9f9798681460140d9402.js.map