(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7e1a9807"],{"1a58":function(t,e,n){},4180:function(t,e,n){"use strict";var r=n("993c");n.n(r).a},"498a":function(t,e,n){"use strict";var r=n("23e7"),s=n("58a8").trim;r({target:"String",proto:!0,forced:n("e070")("trim")},{trim:function(){return s(this)}})},"510f":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3"),s=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var i={computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(s.c)(["playlist"])),mounted:function(){this.adjustPlaylist(this.playlist)},activated:function(){this.adjustPlaylist(this.playlist)},watch:{playlist:function(){this.adjustPlaylist(this.playlist)}},methods:{adjustPlaylist:function(t){throw Error("adjustPlaylist has not defined")}}}},"5ce0":function(t,e,n){},"67ab":function(t,e,n){"use strict";var r=n("5ce0");n.n(r).a},"993c":function(t,e,n){},a15b:function(t,e,n){"use strict";var r=n("23e7"),s=n("44ad"),a=n("fc6a"),i=n("b301"),c=[].join,o=s!=Object,l=i("join",",");r({target:"Array",proto:!0,forced:o||l},{join:function(t){return c.call(a(this),void 0===t?",":t)}})},b0c0:function(t,e,n){var r=n("83ab"),s=n("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,o="name";!r||o in a||s(a,o,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b9ad:function(t,e,n){"use strict";var r=n("1a58");n.n(r).a},c106:function(t,e,n){"use strict";n.r(e);var r=(n("d81d"),n("498a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchBox"},[n("n-icon",{staticClass:"back",attrs:{href:"back_b"},on:{click:t.back}}),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),n("n-icon",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],staticClass:"clear",attrs:{href:"clear"},on:{click:t.clear}})],1),n("n-icon",{staticClass:"center",attrs:{href:"center"},on:{click:t.toCenter}})],1)}),s=n("ee34"),a={name:"NSearchBox",props:{filler:{type:String},placeholder:{type:String,default:"搜索歌曲、歌手"}},data:function(){return{query:""}},components:{NIcon:s.a},watch:{filler:function(t){""!==t&&(this.query=t)},query:function(){var t=null;return function(e){var n=this;t&&clearTimeout(t),t=setTimeout((function(){n.$emit("queryChange",e)}),500)}}()},methods:{clear:function(){this.query=""},back:function(){this.$router.go(-1)},toCenter:function(){}}},i=(n("67ab"),n("2877")),c=Object(i.a)(a,r,[],!1,null,"72aacb1b",null).exports,o=n("a417"),l=n("bc3a"),u=n.n(l);var f=(n("a4d3"),n("4de4"),n("fb6a"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),h=n("47b9"),p=n("2f62"),d=n("4e4f"),b=n("510f");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var g={name:"Suggest",props:{result:{type:Object}},mixins:[b.a],components:{NListItem:h.a,NIcon:s.a,NScroll:d.a},computed:{songData:function(){return this.result.songs?this.result.songs:[]}},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(f.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({selectSong:function(t){this.clearSong(),this.playSong({playlist:this.result.songs.slice(),index:t})},playAll:function(){this.playSong({playlist:this.result.songs.slice(),index:0})},onImgLoad:function(){this.$refs.scroll.refresh()},adjustPlaylist:function(t){var e=t.length?"180px":"";this.$refs.scroll.$el.style.bottom=e,this.$refs.scroll.refresh()},toSinger:function(t){this.$router.push({path:"/singer/".concat(t.id)}),this.setSinger(t)},toPlaylist:function(t){this.$router.push("/recommand/".concat(t))}},Object(p.d)({setSinger:"SET_SIGNER"}),{},Object(p.b)(["playSong","clearSong"]))},y=(n("b9ad"),Object(i.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suggest"},[n("n-scroll",{ref:"scroll",staticClass:"scrollWrapper",attrs:{data:t.songData}},[n("div",{staticClass:"scrollContent"},[t.result.artists||t.result.playlists?n("div",{staticClass:"guess"},[n("p",{staticClass:"title"},[t._v("你可能感兴趣")]),n("ul",[t._l(t.result.artists,(function(e,r){return n("li",{key:"sr_"+r,staticClass:"singers",on:{click:function(n){return t.toSinger(e)}}},[n("img",{attrs:{src:e.picUrl+"?param=300x300",alt:""},on:{load:t.onImgLoad}}),n("p",{staticClass:"descript"},[t._v("歌手："+t._s(e.name)+" "),e.alias.length?n("span",[t._v("（"+t._s(e.alias[0])+"）")]):t._e()])])})),t._l(t.result.playlists,(function(e,r){return n("li",{key:"p_"+r,staticClass:"playlists",on:{click:function(n){return t.toPlaylist(e.id)}}},[n("img",{attrs:{src:e.coverImgUrl,alt:""},on:{load:t.onImgLoad}}),n("p",{staticClass:"descript"},[t._v("歌单："+t._s(e.name)+"（"+t._s(e.description)+"）")])])}))],2)]):t._e(),n("div",{staticClass:"songs"},[n("header",[n("h2",[t._v("单曲")]),n("div",{staticClass:"playAll"},[n("n-icon",{attrs:{href:"pause_b"}}),n("span",{on:{click:t.playAll}},[t._v("播放全部")])],1)]),n("main",t._l(t.result.songs,(function(e,r){return n("n-list-item",{key:"s_"+r,attrs:{song:e.name,index:r,album:e.album,artist:e.artist,showId:!1},on:{click:t.selectSong}})})),1)])])])],1)}),[],!1,null,"70cc36e8",null)).exports,v=n("d4ec"),O=function t(e){var n=e.artists,r=e.playlists,s=e.songs;Object(v.a)(this,t),n&&(this.artists=n),r&&(this.playlists=r),this.songs=s};n("a15b");var j=n("f5de"),w={name:"Search",components:{NSearchBox:c,Suggest:y},data:function(){return{hotSearch:[],filler:"",query:"",result:{}}},created:function(){this._getHotSearch()},methods:{_getHotSearch:function(){var t=this;Object(o.a)({url:"/search/hot",params:{limit:10}}).then((function(e){t.hotSearch=e.data.result.hots}))},fill:function(t){this.filler=t},queryChange:function(t){this.query=t.trim(),this.query&&this._getSuggest(t)},_getSuggest:function(t){var e=this;(function(t){return u.a.all([Object(o.a)({url:"/search/suggest",params:{keywords:t}}),Object(o.a)({url:"/search",params:{keywords:t,limit:15}})])})(t).then((function(t){e.tempResult=function(t){var e={artists:t[0].artists,playlists:t[0].playlists,songs:t[1].songs};return new O(e)}([t[0].data.result,t[1].data.result])})).then((function(){return function(t){var e=t.join(",");return Object(o.a)({url:"song/detail",params:{ids:e}})}(e.tempResult.songs.map((function(t){return t.id})))})).then((function(t){e.tempResult.songs.length=0,t.data.songs.map((function(t){e.tempResult.songs.push(Object(j.a)(t))})),e.result=e.tempResult}))}}},S=(n("4180"),Object(i.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("n-search-box",{attrs:{filler:t.filler},on:{queryChange:t.queryChange}}),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],staticClass:"hotSearch"},[n("h3",[t._v("热门搜索")]),n("ul",t._l(t.hotSearch,(function(e,r){return n("li",{key:r,on:{click:function(n){return t.fill(e.first)}}},[t._v(" "+t._s(e.first)+" ")])})),0)]),n("suggest",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],attrs:{result:t.result}})],1)}),[],!1,null,"11d20dba",null));e.default=S.exports},d4ec:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},d81d:function(t,e,n){"use strict";var r=n("23e7"),s=n("b727").map,a=n("d039"),i=n("1dde")("map"),c=i&&!a((function(){[].map.call({length:-1,0:1},(function(t){throw t}))}));r({target:"Array",proto:!0,forced:!i||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e070:function(t,e,n){var r=n("d039"),s=n("5899");t.exports=function(t){return r((function(){return!!s[t]()||"​᠎"!="​᠎"[t]()||s[t].name!==t}))}},f5de:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n("b0c0");var r=n("d4ec"),s=function t(e){var n=e.id,s=e.name,a=e.album,i=e.artist,c=e.albumId,o=e.albumPic;Object(r.a)(this,t),this.id=n,this.name=s,this.album=a,this.artist=i,this.albumId=c,this.albumPic=o};function a(t){return new s({id:t.id,name:t.name,album:t.al.name,artist:t.ar[0].name,albumId:t.al.id,albumPic:t.al.picUrl})}}}]);
//# sourceMappingURL=chunk-7e1a9807.6b0f2246.js.map