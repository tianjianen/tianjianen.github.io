webpackJsonp([10],{NM7L:function(t,s){},sfgW:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("4YfN"),n=e.n(i),r=e("9rMa"),c=e("CK6b"),o=e("BRgg"),a={components:{musicList:c.a},computed:n()({title:function(){return this.disc.name},bgImage:function(){return this.disc.coverImgUrl}},Object(r.c)(["disc"])),data:function(){return{id:"",songs:[],recommodsons:[]}},created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;this.$route.params.id?Object(o.e)(this.$route.params.id).then(function(s){200===s.code&&(t.songs=s.playlist.tracks)}):this.$router.push("/toplist")}}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"app"},[s("musicList",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var d=e("C7Lr")(a,u,!1,function(t){e("NM7L")},"data-v-73343fc9",null);s.default=d.exports}});
//# sourceMappingURL=10.7e7e19824b3903d0552a.js.map