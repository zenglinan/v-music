(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d513026"],{1257:function(t,e,n){"use strict";var a=n("5a25"),r=n.n(a);r.a},"22f9":function(t,e,n){"use strict";var a=n("cc98"),r=n.n(a);r.a},"510f":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b");var a=n("ade3"),r=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var o={computed:s({},Object(r["c"])(["playlist"])),mounted:function(){this.adjustPlaylist(this.playlist)},activated:function(){this.adjustPlaylist(this.playlist)},watch:{playlist:function(){this.adjustPlaylist(this.playlist)}},methods:{adjustPlaylist:function(t){throw Error("adjustPlaylist has not defined")}}}},"5a25":function(t,e,n){},"6c4f":function(t,e,n){t.exports=n.p+"img/avatar-loading.85723203.jpg"},a434:function(t,e,n){"use strict";var a=n("23e7"),r=n("23cb"),i=n("a691"),s=n("50c4"),o=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),f=Math.max,d=Math.min,g=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var n,a,u,p,b,m,y=o(this),v=s(y.length),O=r(t,v),j=arguments.length;if(0===j?n=a=0:1===j?(n=0,a=v-O):(n=j-2,a=d(f(i(e),0),v-O)),v+n-a>g)throw TypeError(h);for(u=c(y,a),p=0;p<a;p++)b=O+p,b in y&&l(u,p,y[b]);if(u.length=a,n<a){for(p=O;p<v-a;p++)b=p+a,m=p+n,b in y?y[m]=y[b]:delete y[m];for(p=v;p>v-a+n;p--)delete y[p-1]}else if(n>a)for(p=v-a;p>O;p--)b=p+a-1,m=p+n-1,b in y?y[m]=y[b]:delete y[m];for(p=0;p<n;p++)y[p+O]=arguments[p+2];return y.length=v-a+n,u}})},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,i=Function.prototype,s=i.toString,o=/^\s*function ([^ (]*)/,c="name";!a||c in i||r(i,c,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},bc49:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("n-icon",{staticClass:"icon",attrs:{href:"loading"}})],1)},r=[],i=n("ee34"),s={name:"NLoading",components:{NIcon:i["a"]}},o=s,c=(n("1257"),n("2877")),l=Object(c["a"])(o,a,r,!1,null,"228f4f51",null);e["a"]=l.exports},c18f:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{ref:"bgImg",staticClass:"desc",style:t.bgStyle},[n("header",[n("n-icon",{staticClass:"back",attrs:{href:"back"},on:{click:t.back}}),n("n-icon",{staticClass:"share",attrs:{href:"share"}})],1)]),n("div",{ref:"layer",staticClass:"layer"}),n("n-scroll",{ref:"list",staticClass:"scrollWrapper",attrs:{data:t.songs,"probe-type":3},on:{scroll:t.listenToScroll}},[n("div",{staticClass:"list"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.songs.length,expression:"songs.length !== 0"}],staticClass:"playAll",on:{click:t.playHotSongs}},[n("n-icon",{staticClass:"icon",attrs:{href:"pause_b"}}),n("span",[t._v("播放热门歌曲")])],1),t._l(t.songs,(function(e,a){return n("n-list-item",{key:a,staticClass:"listItem",attrs:{song:e.name,index:a,artist:e.artist,album:e.album},on:{click:t.selectSong}})}))],2)]),n("n-loading",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading"})],1)},i=[],s=(n("a4d3"),n("4de4"),n("d81d"),n("fb6a"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),o=n("2f62"),c=n("ee34"),l=n("47b9"),u=n("bc49"),f=n("4e4f"),d=n("510f");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=200,b={low:10,mid:20,high:30,max:100},m={name:"NMusicList",mixins:[d["a"]],props:{songs:{type:Array},avatarUrl:{type:String}},data:function(){return{scrollY:0}},components:{NIcon:c["a"],NListItem:l["a"],NLoading:u["a"],NScroll:f["a"]},mounted:function(){this.bgImgHeight=this.$refs.bgImg.clientHeight,a="".concat(-this.bgImgHeight+p),this.modifyStyle(this.$refs.list.$el,{top:"".concat(this.bgImgHeight,"px")})},computed:{bgStyle:function(){return"background-image:url(".concat(this.avatarUrl,")")}},watch:{scrollY:function(t){var e=Math.max(a,t);t<a?this.shrinkImgHeight():t>=0?this.enlargeImg(t):this.drawLayer(),this.modifyStyle(this.$refs.layer,{transform:"translate3d(0, ".concat(e,"px, 0)"),webkitTransform:"translate3d(0, ".concat(e,"px, 0)")})}},methods:h({adjustPlaylist:function(t){var e=t.length?"180px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()},back:function(){this.$router.go(-1)},listenToScroll:function(t,e){var n=e.maxScrollY;this.scrollY=t.y,this.scrollY<=n&&this.$emit("scrollToBottom")},shrinkImgHeight:function(){this.modifyStyle(this.$refs.bgImg,{paddingTop:0,height:"".concat(p,"px"),zIndex:b.max})},enlargeImg:function(t){var e=Math.abs(t/this.bgImgHeight),n=1+e;this.modifyStyle(this.$refs.bgImg,{transform:"scale(".concat(n,")"),webkitTransform:"scale(".concat(n,")"),zIndex:b.max})},drawLayer:function(){this.modifyStyle(this.$refs.bgImg,{paddingTop:"70%",height:0,zIndex:b.low})},modifyStyle:function(t,e){var n=t.style.display;t.style.display="none",Object.keys(e).map((function(n){t.style[n]=e[n]})),t.style.display=n},selectSong:function(t){this.playSong({playlist:this.songs.slice(),index:t})},playHotSongs:function(){this.playSong({playlist:this.songs.slice(),index:0})}},Object(o["b"])(["playSong"]))},y=m,v=(n("22f9"),n("2877")),O=Object(v["a"])(y,r,i,!1,null,"4eba2989",null);e["a"]=O.exports},cc98:function(t,e,n){},d4ec:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},d81d:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").map,i=n("d039"),s=n("1dde"),o=s("map"),c=o&&!i((function(){[].map.call({length:-1,0:1},(function(t){throw t}))}));a({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},f49a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("n-music-list",{attrs:{songs:t.songs,avatarUrl:t.avatarUrl},on:{scrollToBottom:t.getMore}})},r=[],i=(n("a4d3"),n("4de4"),n("d81d"),n("a434"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),s=n("c18f"),o=n("a417");function c(t){return Object(o["a"])({url:"/playlist/detail",params:{id:t}})}var l=n("f5de"),u=n("2f62");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=n("6c4f"),h={name:"SonglistDetail",data:function(){return{avatarUrl:g,songs:[],InvalidSongs:[]}},components:{NMusicList:s["a"]},created:function(){this._getSonglistDetail(this.$route.params.id)},computed:d({},Object(u["c"])(["playing"])),methods:d({_getSonglistDetail:function(t){var e=this;c(t).then((function(t){e.avatarUrl=t.data.playlist.coverImgUrl,e.InvalidSongs=t.data.playlist.tracks,e.getRealSongs()}))},getRealSongs:function(){var t=this;this.InvalidSongs.splice(0,30).map((function(e){t.songs.push(Object(l["a"])(e))}))},getMore:function(){this.InvalidSongs.length&&(this.getRealSongs(),this.playing&&this.updatePlaylist(this.songs))}},Object(u["d"])({updatePlaylist:"SET_PLAYLIST"}))},p=h,b=n("2877"),m=Object(b["a"])(p,a,r,!1,null,"593f3430",null);e["default"]=m.exports},f5de:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("b0c0");var a=n("d4ec"),r=function t(e){var n=e.id,r=e.name,i=e.album,s=e.artist,o=e.albumId,c=e.albumPic;Object(a["a"])(this,t),this.id=n,this.name=r,this.album=i,this.artist=s,this.albumId=o,this.albumPic=c};function i(t){return new r({id:t.id,name:t.name,album:t.al.name,artist:t.ar[0].name,albumId:t.al.id,albumPic:t.al.picUrl})}}}]);
//# sourceMappingURL=chunk-4d513026.8dc6c1bc.js.map