webpackJsonp([7],{"0IpB":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("4YfN"),s=i.n(n),r=i("y/jF"),a=i("qwAB"),l=i("Sgn/"),o=i("9rMa"),c={name:"Singer",mixins:[i("5jRo").b],components:{Scroll:a.a,loading:r.a},data:function(){return{singers:[],pulldown:!0}},computed:s()({},Object(o.c)(["playlist"])),created:function(){this._getSingerList(),this.listenScroll=!0},methods:s()({handlePlaylist:function(e){if(this.$refs.singerUl){var t=e.length>0?"60px":"";this.$refs.singerUl.style.paddingBottom=t,this.$refs.scrollView.refresh()}},_getSingerList:function(){var e=this;Object(l.b)().then(function(t){200===t.code&&(e.singers=t.list.artists)})},_newData:function(e){var t={};e.forEach(function(e,i){var n=0;for(var s in t)s===e.Findex&&(n=1);1===n?(t[e.Findex].list.push({id:e.Fsinger_id,mid:e.Fsinger_mid,name:e.Fsinger_name,img:"https://y.gtimg.cn/music/photo_new/T001R300x300M000"+e.Fsinger_mid+".jpg?max_age=2592000"}),n=0):0===n&&("9"===e.Findex&&(e.Findex="其他"),t[e.Findex]={title:e.Findex,list:[{id:e.Fsinger_id,mid:e.Fsinger_mid,name:e.Fsinger_name,img:"https://y.gtimg.cn/music/photo_new/T001R300x300M000"+e.Fsinger_mid+".jpg?max_age=2592000"}]})});var i,n=[];for(var s in t)n.push(t[s]);n.sort((i="title",function(e,t){return e[i].charCodeAt()-t[i].charCodeAt()})),this.singers=n},toTouchScroll:function(e){this.$refs.scrollView.scrollToElement(this.$refs.listView[e],0)},toSingerDetail:function(e){this.$router.push({path:"/singer/"+e.id}),this.setSinger(e)}},Object(o.d)({setSinger:"SET_SINGER"}))},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app"},[e.singers.length?i("Scroll",{ref:"scrollView",staticClass:"scroll",attrs:{data:e.singers,listenScroll:e.listenScroll}},[i("ul",{ref:"singerUl"},e._l(e.singers,function(t,n){return i("li",{key:n,staticClass:"li-con",on:{click:function(i){e.toSingerDetail(t)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img1v1Url,expression:"item2.img1v1Url"}],attrs:{alt:t.name}}),e._v(" "),i("span",{staticClass:"name"},[e._v(e._s(t.name))])])}))]):e._e(),e._v(" "),i("transition",{attrs:{name:"fade"}},[i("router-view")],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0===e.singers.length?1:0,expression:"singers.length === 0?1:0"}],staticClass:"loading"},[i("loading")],1)],1)},staticRenderFns:[]};var u=i("C7Lr")(c,g,!1,function(e){i("WszW")},"data-v-78ee1298",null);t.default=u.exports},"Sgn/":function(e,t,i){"use strict";t.b=function(){return a.a.get(l.a+"/toplist/artist").then(function(e){return s.a.resolve(e.data)})},t.a=function(e){var t={id:e};return a.a.get(l.a+"/artists",{params:t}).then(function(e){return s.a.resolve(e.data)})};var n=i("rVsN"),s=i.n(n),r=i("aozt"),a=i.n(r),l=i("T452")},WszW:function(e,t){}});
//# sourceMappingURL=7.710cde65f82a2e13a3d6.js.map