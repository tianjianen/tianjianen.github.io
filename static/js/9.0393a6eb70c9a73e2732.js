webpackJsonp([9],{"+XA5":function(e,t){},BRgg:function(e,t,a){"use strict";t.c=function(e,t){var a={limit:e,offset:t};return r.a.get(s.a+"/top/mv",{params:a}).then(function(e){return n.a.resolve(e.data)})},t.b=function(e){var t={id:e};return r.a.get(s.a+"/mv/url",{params:t}).then(function(e){return n.a.resolve(e.data)})},t.a=function(e){var t={id:e};return r.a.get(s.a+"/comment/mv",{params:t}).then(function(e){return n.a.resolve(e.data)})};var i=a("rVsN"),n=a.n(i),s=a("T452"),o=a("aozt"),r=a.n(o)},Kjo5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("4YfN"),n=a.n(i),s=a("9rMa"),o=a("qwAB"),r=a("y/jF"),l=a("BRgg"),c={name:"Rank",mixins:[a("5jRo").b],components:{Scroll:o.a,Loading:r.a},data:function(){return{page:1,hasMove:!0,ListCount:1e3,topList:[],hotList:[{index:"0",value:"云音乐新歌榜"},{index:"1",value:"云音乐热歌榜"},{index:"2",value:"网易原创歌曲榜"},{index:"3",value:"云音乐飙升榜"},{index:"4",value:"云音乐电音榜"},{index:"5",value:"UK排行榜周榜"},{index:"6",value:"美国Billboard周榜"},{index:"7",value:"KTV嗨榜"},{index:"8",value:"iTunes榜"},{index:"9",value:"Hit FM Top榜"},{index:"10",value:"日本Oricon周榜"},{index:"11",value:"韩国Melon排行榜周榜"},{index:"12",value:"韩国Mnet排行榜周榜"},{index:"13",value:"韩国Melon原声周榜"},{index:"14",value:"中国TOP排行榜(港台榜)"}]}},created:function(){this._getTopList()},methods:n()({handlePlaylist:function(e){if(this.$refs.rank){var t=e.length>0?"60px":"";this.$refs.rank.style.paddingBottom=t,this.$refs.toplist.refresh()}},selectItem:function(e){this.$router.push({path:"/rank/"+e.id}),this.setTopList(e)},_getTopList:function(){var e=this;Object(l.c)(30,this.page).then(function(t){200===t.code&&(e.topList=t.data,e._checkMore(e.topList))})},_checkMore:function(e){e.length>=this.ListCount&&(this.hasMove=!1)},serachMove:function(){var e=this;this.hasMove&&(this.page++,Object(l.c)(30,30*this.page).then(function(t){if(200===t.code){if(0===t.data.length)return void(e.hasMove=!1);e.topList=e.topList.concat(t.data),e._checkMore(e.topList)}}))},listScroll:function(){this.$emit("listScroll")}},Object(s.d)({setTopList:"SET_TOP_LIST"}))},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:e.topList,pullup:!0,beforeScroll:!0},on:{scrollToEnd:e.serachMove,beforeScroll:e.listScroll}},[a("ul",{ref:"rank"},[e._l(e.topList,function(t,i){return a("li",{key:i,staticClass:"item",on:{click:function(a){e.selectItem(t)}}},[a("div",{staticClass:"icon"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover,expression:"item.cover"}]})]),e._v(" "),a("div",{staticClass:"discList-con"},[a("h2",[e._v(e._s(t.name))]),e._v(" "),a("p",[e._v(e._s(t.artistName))])])])}),e._v(" "),a("loading",{directives:[{name:"show",rawName:"v-show",value:e.hasMove,expression:"hasMove"}],attrs:{title:""}}),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.hasMove,expression:"!hasMove"}],staticClass:"lodAuto"},[e._v("(^_^) 已全部加载")])],2),e._v(" "),a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},staticRenderFns:[]};var v=a("C7Lr")(c,u,!1,function(e){a("+XA5")},"data-v-d275b42c",null);t.default=v.exports}});
//# sourceMappingURL=9.0393a6eb70c9a73e2732.js.map