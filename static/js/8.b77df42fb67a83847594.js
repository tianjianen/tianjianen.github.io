webpackJsonp([8],{"9yEp":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("4YfN"),s=e.n(i),a=e("9rMa"),r=e("CK6b"),o=e("m40h"),c=e("G3uJ"),u={components:{musicList:r.a},computed:s()({title:function(){return this.disc.name},bgImage:function(){return this.disc.coverImgUrl}},Object(a.c)(["disc"])),data:function(){return{songs:[]}},created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;this.disc.id?Object(o.c)(this.disc.id).then(function(n){200===n.code&&(t.songs=n.playlist.tracks)}):this.$router.push("/recommend")},_normalSongs:function(t){var n=[];return t.forEach(function(t){t.songid&&t.albummid&&n.push(Object(c.a)(t))}),n}}},d={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"app"},[n("musicList",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var l=e("C7Lr")(u,d,!1,function(t){e("TGJ2")},"data-v-e070d570",null);n.default=l.exports},TGJ2:function(t,n){},m40h:function(t,n,e){"use strict";n.b=function(){return r.a.get(o.a+"/banner").then(function(t){return s.a.resolve(t.data)})},n.a=function(){return r.a.get(o.a+"/top/playlist",{params:{type:"topPlayList",limit:15,order:"hot"}}).then(function(t){return s.a.resolve(t.data)})},n.c=function(t){var n={id:t};return r.a.get(o.a+"/playlist/detail",{params:n}).then(function(t){return s.a.resolve(t.data)})};var i=e("rVsN"),s=e.n(i),a=e("aozt"),r=e.n(a),o=e("T452")}});
//# sourceMappingURL=8.b77df42fb67a83847594.js.map