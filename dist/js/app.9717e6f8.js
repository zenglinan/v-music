(function(t){function e(e){for(var r,i,s=e[0],o=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);h&&h(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a={app:0},c=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-11df1dc6":"1d598b16","chunk-17e47102":"91c28a87","chunk-5383fd69":"9410360f","chunk-69e5fa93":"e983b42a","chunk-7e1a9807":"a62a80f9"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-11df1dc6":1,"chunk-17e47102":1,"chunk-5383fd69":1,"chunk-69e5fa93":1,"chunk-7e1a9807":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-11df1dc6":"9407cef7","chunk-17e47102":"cfb0a9d0","chunk-5383fd69":"a2fec968","chunk-69e5fa93":"9407cef7","chunk-7e1a9807":"b94e6570"}[t]+".css",a=o.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===r||u===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete i[t],h.parentNode.removeChild(h),n(c)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){i[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=s(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",f.name="ChunkLoadError",f.type=r,f.request=i,n[1](f)}a[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var h=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10b6":function(t,e,n){"use strict";var r=n("d17a"),i=n.n(r);i.a},"202d":function(t,e,n){},"47b9":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"songItem",on:{click:t.emitClick}},[t.showId?n("span",{staticClass:"id"},[t._v(t._s(t.index+1))]):t._e(),n("main",[n("p",{staticClass:"name"},[t._v(t._s(t.song))]),n("p",{staticClass:"desc"},[n("span",[t._v(t._s(t.artist))]),n("span",[t._v(" - "+t._s(t.album))])])]),n("div",{staticClass:"options"},[n("n-icon",{attrs:{href:"video"}}),n("n-icon",{attrs:{href:"more"}})],1)])},i=[],a=(n("a4d3"),n("4de4"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),c=n("ee34"),s=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"NListItem",props:{song:{type:String},artist:{type:String},album:{type:String},index:{type:Number},showId:{type:Boolean,default:!0}},components:{NIcon:c["a"]},computed:l({},Object(s["c"])(["playing"])),methods:{emitClick:function(){this.$emit("click",this.index)}}},f=u,h=(n("ad16"),n("2877")),p=Object(h["a"])(f,r,i,!1,null,"25061f1c",null);e["a"]=p.exports},"4e4f":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper"},[t._t("default")],2)},i=[],a=(n("a9e3"),n("229e")),c={name:"NScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,required:!0,default:null},bounce:{type:Boolean,default:!0}},mounted:function(){var t=this;setTimeout((function(){t.initScroll()}),60)},methods:{initScroll:function(){this.scroll=new a["a"](this.$refs.wrapper,{scrollY:!0,click:!0,probeType:this.probeType,bounce:this.bounce}),this.emitScrollEvent()},emitScrollEvent:function(){var t=this,e=function(e){t.$emit("scroll",e,{maxScrollY:t.scroll.maxScrollY,maxScrollX:t.scroll.maxScrollX})};this.scroll.on("scroll",e)},refresh:function(){this.scroll&&this.scroll.refresh()}},watch:{data:function(){var t=this;setTimeout((function(){t.refresh()}),60)}}},s=c,o=n("2877"),l=Object(o["a"])(s,r,i,!1,null,"90d76bd2",null);e["a"]=l.exports},"567b":function(t,e,n){"use strict";var r=n("ef99"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"singer",(function(){return gt})),n.d(r,"playing",(function(){return mt})),n.d(r,"fullScreen",(function(){return yt})),n.d(r,"playlist",(function(){return vt})),n.d(r,"sequenceList",(function(){return bt})),n.d(r,"mode",(function(){return St})),n.d(r,"currentIndex",(function(){return Ct})),n.d(r,"currentSong",(function(){return wt}));var i={};n.r(i),n.d(i,"playSong",(function(){return Tt})),n.d(i,"clearSong",(function(){return _t}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("n-header"),n("transition",{attrs:{name:"fade"}},[n("keep-alive",[n("router-view")],1)],1),n("n-player")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",[n("n-icon",{attrs:{href:"option"}})],1),n("div",{staticClass:"title"},[n("ul",[n("li",[n("router-link",{attrs:{tag:"div",to:"/recommand"}},[t._v("推荐")])],1),n("li",[n("router-link",{attrs:{tag:"div",to:"/singer"}},[t._v("歌手")])],1)])]),n("div",{staticClass:"search"},[n("n-icon",{attrs:{href:"search"},on:{click:t.toSearch}})],1)])},l=[],u=n("ee34"),f={name:"NHeader",components:{NIcon:u["a"]},methods:{toSearch:function(){this.$router.push("/search")}}},h=f,p=(n("10b6"),n("2877")),d=Object(p["a"])(h,o,l,!1,null,"478b534b",null),g=d.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.playlist.length,expression:"playlist.length"}],ref:"player",staticClass:"player"},[r("transition",{attrs:{name:"normal"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"fullPlayer"},[r("div",{staticClass:"background"},[r("img",{attrs:{src:t.currentSong.albumPic+"?param=200x200",alt:""}})]),r("div",{staticClass:"background-layer"}),r("header",[r("div",{staticClass:"icon"},[r("n-icon",{attrs:{href:"back"},on:{click:t.back}})],1),r("div",{staticClass:"desc"},[r("div",{staticClass:"songName"},[t._v(t._s(t.currentSong.name))]),r("p",{staticClass:"singerName"},[t._v(t._s(t.singer))])])]),r("transition",{attrs:{name:"fade"}},[r("main",{directives:[{name:"show",rawName:"v-show",value:"cd"===t.currentShow,expression:"currentShow === 'cd'"}],staticClass:"pic"},[r("div",{staticClass:"needle"},[r("img",{class:t.needlePlayClass,attrs:{src:n("ac17"),alt:""}})]),r("div",{staticClass:"wrapper",on:{click:t.showLyric}},[r("img",{staticClass:"rotate",class:t.rotateClass,attrs:{src:t.currentSong.albumPic+"?param=200x200"}})])])]),r("transition",{attrs:{name:"fade"}},[t.currentLyric?r("n-scroll",{directives:[{name:"show",rawName:"v-show",value:"lyric"===t.currentShow,expression:"currentShow === 'lyric'"}],ref:"lyricScroll",staticClass:"lyric",attrs:{"probe-type":3,data:t.lyricData}},[r("div",{staticClass:"lyricWrapper",on:{click:t.showCD}},t._l(t.currentLyric.lines,(function(e,n){return r("p",{ref:"line",refInFor:!0,staticClass:"line",class:{active:t.activeLine===n}},[t._v(" "+t._s(e.txt)+" ")])})),0)]):t._e()],1),r("footer",{staticClass:"control"},[r("div",{staticClass:"timeBar"},[r("span",{staticClass:"now"},[t._v(t._s(t.format("1",t.currentTime)))]),r("n-progress-bar",{attrs:{percent:t.percent},on:{processChange:t.onProcessChange}}),r("span",{staticClass:"end"},[t._v(t._s(t.format("2",t.duration)))])],1),r("div",{staticClass:"controlBtn"},[r("n-icon",{attrs:{href:t.mode},on:{click:t.changeMode}}),r("n-icon",{attrs:{href:"lastsong"},on:{click:t.lastSong}}),r("n-icon",{staticClass:"play",attrs:{href:t.playingIcon},on:{click:t.togglePlaying}}),r("n-icon",{attrs:{href:"nextsong"},on:{click:t.nextSong}}),r("n-icon",{attrs:{href:"playlist_w"}})],1)])],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],ref:"miniPlayer",staticClass:"miniPlayer"},[r("div",{staticClass:"img",on:{click:t.setFullScreen}},[r("img",{ref:"miniImg",staticClass:"rotate",class:t.rotateClass,attrs:{src:t.currentSong.albumPic+"?param=200x200",alt:"image"}})]),r("main",{on:{click:t.setFullScreen}},[r("p",{staticClass:"name"},[t._v(t._s(t.currentSong.name))]),r("p",{staticClass:"album"},[t._v(t._s(t.currentSong.album))])]),r("div",{staticClass:"control"},[r("n-progress-circle",{staticClass:"circle",attrs:{size:86,innerBg:"rgb(62,62,62)",outerBg:"rgb(222, 79, 72)",percent:t.percent},on:{click:t.togglePlaying}}),r("n-icon",{staticClass:"audio",attrs:{href:t.miniPlayingIcon}}),r("n-icon",{staticClass:"playlist",attrs:{href:"playlist_b"},on:{click:t.showPlaylist}})],1)]),r("audio",{ref:"audio",attrs:{src:"https://music.163.com/song/media/outer/url?id="+t.currentSong.id+".mp3"},on:{canplay:t.audioReady,ended:t.songEnd,error:t.audioError,timeupdate:t.timeUpdate}}),r("playlist",{ref:"playlist"})],1)},y=[],v=(n("a4d3"),n("99af"),n("4de4"),n("c740"),n("c975"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),b=n("2f62"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",staticClass:"barWrapper",on:{click:t.onProcessClick}},[n("div",{ref:"content",staticClass:"barContent"},[n("div",{ref:"pointer",staticClass:"pointer",on:{touchstart:function(e){return e.preventDefault(),t.onTouchStart(e)},touchmove:function(e){return e.preventDefault(),t.onTouchMove(e)},touchend:function(e){return e.preventDefault(),t.onTouchEnd(e)}}})])])},C=[],w=(n("a9e3"),{name:"NProgressBar",props:{percent:{type:Number,default:0}},watch:{percent:function(t){if(t>0&&!this.startDrag){var e=this.$refs.wrapper.getBoundingClientRect().width,n=e*t;this.$refs.content.style.width="".concat(n,"px")}}},methods:{onTouchStart:function(t){this.startDrag=!0,this.startX=t.touches[0].pageX,this.originContentWidth=this.$refs.content.getBoundingClientRect().width},onTouchMove:function(t){this.startDrag&&(this.newContentWidth=Math.max(0,Math.min(this.originContentWidth+t.touches[0].pageX-this.startX,this.$refs.wrapper.getBoundingClientRect().width)),this.$refs.content.style.width="".concat(this.newContentWidth,"px"))},onTouchEnd:function(){this.startDrag=!1;var t=this.newContentWidth||this.originContentWidth;this.emitProcessChange(t)},onProcessClick:function(t){if("pointer"!==t.target.className){var e=Math.max(0,t.offsetX);this.emitProcessChange(e)}},emitProcessChange:function(t){var e=t/this.$refs.wrapper.offsetWidth;this.$emit("processChange",e)}}}),P=w,O=(n("6c94"),Object(p["a"])(P,S,C,!1,null,"442e9350",null)),k=O.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:t.size,height:t.size,viewBox:"0 0 200 200"},on:{click:t.emitClick}},[n("circle",{attrs:{cx:"100",cy:"100",r:t.r,"stroke-width":"8",stroke:t.innerBg,fill:"none"}}),n("circle",{attrs:{cx:"100",cy:"100",r:t.r,"stroke-width":"8",stroke:t.outerBg,fill:"none",transform:"rotate(-90, 100, 100)","stroke-dasharray":t.dasharray}})])},x=[],j=92,N={name:"NProgressCircle",data:function(){return{r:92,round:2*Math.PI*j}},computed:{dasharray:function(){return this.percent?"".concat(this.percent*this.round," ").concat(this.round):"0 ".concat(this.round)}},props:{size:{type:String|Number,default:100},innerBg:{type:String},outerBg:{type:String},percent:{type:String|Number}},methods:{emitClick:function(){this.$emit("click")}}},L=N,A=Object(p["a"])(L,E,x,!1,null,"321933b8",null),I=A.exports,M=["sequence","loop","random"],T=M;function _(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function D(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function B(t){return t.forEach((function(e,n){var r=_(0,n);D(t,r,n)})),t}var H=B,R=n("a417");function U(t){return Object(R["a"])({url:"/lyric",params:{id:t}})}var F=n("3c75"),G=n.n(F),q=n("4e4f"),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slideUp"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifShowPlaylist,expression:"ifShowPlaylist"}],staticClass:"playlistWrapper"},[n("div",{staticClass:"bg",on:{click:t.hidePlaylist}}),n("div",{staticClass:"playlist"},[n("header",{staticClass:"header"},[n("div",{staticClass:"left",on:{click:t.playAll}},[n("n-icon",{staticClass:"play",attrs:{href:"pause_b"}}),n("div",{staticClass:"playAll"},[t._v("播放全部")])],1),n("div",{staticClass:"right"},[n("n-collect",{ref:"collect",staticClass:"collect",attrs:{num:25829}})],1)]),n("n-scroll",{ref:"scroll",staticClass:"scrollWrapper",attrs:{data:t.currentList}},[n("main",t._l(t.currentList,(function(e,r){return n("n-list-item",{key:r,attrs:{song:e.name,index:r,artist:e.artist,album:e.album},on:{click:function(e){return t.selectSong(r)}}})})),1)])],1)])])},X=[],W=(n("fb6a"),n("864b")),Y=n("47b9");function Q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var J={name:"Playlist",data:function(){return{ifShowPlaylist:!1}},components:{NIcon:u["a"],NCollect:W["a"],NListItem:Y["a"],NScroll:q["a"]},computed:Z({},Object(b["c"])({currentList:"playlist"})),watch:{ifShowPlaylist:function(t){var e=this;t&&this.$nextTick((function(){e.$refs.scroll.refresh()}))}},methods:Z({hidePlaylist:function(){this.ifShowPlaylist=!1},selectSong:function(t){this.playSong({playlist:this.currentList.slice(),index:t})},playAll:function(){this.playSong({playlist:this.currentList.slice(),index:0})}},Object(b["b"])(["playSong"]))},V=J,K=(n("a780"),Object(p["a"])(V,z,X,!1,null,"2bf183d8",null)),$=K.exports;function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var nt={name:"Player",data:function(){return{songReady:!1,currentTime:0,duration:0,currentLyric:null,activeLine:0,currentShow:"cd",playingLyric:""}},computed:et({playingIcon:function(){return this.playing?"playing":"pause"},miniPlayingIcon:function(){return this.playing?"mini-playing":"mini-pause"},rotateClass:function(){return this.playing?"play":"play pause"},needlePlayClass:function(){return this.playing?"play":"pause"},percent:function(){return this.currentTime/this.duration},lyricData:function(){return this.currentLyric&&this.currentLyric.lines}},Object(b["c"])(["fullScreen","playlist","currentSong","mode","singer","playing","currentIndex","sequenceList"])),watch:{currentSong:function(t,e){var n=this;t.id!==e.id&&t.id&&(this.currentLyric&&this.currentLyric.stop(),this._getLyric(this.currentSong.id),this.$nextTick((function(){n.$refs.audio.play().catch((function(t){return console.log(t)}))})))},playing:function(t){var e=this;this.$nextTick((function(){var n=e.$refs.audio;t?n.play().catch((function(t){return console.log(t)})):n.pause()}))}},components:{NIcon:u["a"],NProgressBar:k,NProgressCircle:I,NScroll:q["a"],Playlist:$},methods:et({},Object(b["d"])({_setFullScreen:"SET_FULL_SCREEN",_setPlayingState:"SET_PLAYING_STATE",_setCurrentSongIndex:"SET_CURRENT_INDEX",_setMode:"SET_PLAY_MODE",_setPlayList:"SET_PLAYLIST"}),{format:function(t,e){var n=Math.floor(e/60),r=Math.floor(e%60);return n=this._pad(n),r=this._pad(r),"".concat(n,":").concat(r)},showPlaylist:function(){this.$refs.playlist.ifShowPlaylist=!0},_pad:function(t){return t>=10?t:"0".concat(t)},setFullScreen:function(){this._setFullScreen(!0)},back:function(){this._setFullScreen(!1),this.showCD()},_getLyric:function(){var t=this;U(this.currentSong.id).then((function(e){var n=e.data.lrc.lyric;t.currentLyric=new G.a(n,t.lyricHandler),t.playing&&t.currentLyric.play()})).catch((function(e){t.currentLyric=new G.a("[00:00.000] 该歌曲无歌词"),t.activeLine=0}))},lyricHandler:function(t){var e=t.lineNum;if(this.activeLine=e,e>5){var n=this.$refs.line[e-5];this.$refs.lyricScroll.scroll.scrollToElement(n,1e3)}else this.$refs.lyricScroll&&this.$refs.lyricScroll.scroll&&this.$refs.lyricScroll.scroll.scrollTo(0,0,1e3)},showLyric:function(){var t=this;this.currentShow="lyric",this.$nextTick((function(){t.$refs.lyricScroll.refresh()}))},showCD:function(){this.currentShow="cd"},lastSong:function(){var t=this.playlist.length;if(1!==t){var e=(this.currentIndex+t-1)%t;this._setCurrentSongIndex(e),this.songReady=!1,this.showCD(),this.playing||this.togglePlaying()}else this.loopSong()},nextSong:function(){var t=this.playlist.length;if(1!==t){var e=(this.currentIndex+1)%t;this._setCurrentSongIndex(e),this.songReady=!1,this.showCD(),this.playing||this.togglePlaying()}else this.loopSong()},songEnd:function(){"loop"===this.mode?this.loopSong():this.nextSong()},loopSong:function(){var t=this.$refs.audio;t.currentTime=0,this.currentLyric&&this.currentLyric.seek(0),this.playing&&t.play()},togglePlaying:function(){this.currentLyric&&this.currentLyric.togglePlay(),this._setPlayingState(!this.playing)},audioReady:function(t){this.duration=t.target.duration,this.songReady=!0},audioError:function(){this.songReady=!0,this.playlist.length&&this.nextSong()},timeUpdate:function(t){this.currentTime=t.target.currentTime},onProcessChange:function(t){var e=this.duration*t;this.$refs.audio.currentTime=e,this.currentLyric&&(this.currentLyric.seek(1e3*e),this.playing||this.currentLyric.stop())},changeMode:function(){var t,e=T.indexOf(this.mode),n=++e%3;this._setMode(T[n]),t="random"===T[n]?H(this.playlist):this.sequenceList,this._setPlayList(t),this.changeCurrentIndex(t)},changeCurrentIndex:function(t){var e=this,n=t.findIndex((function(t){return e.currentSong.id===t.id}));this._setCurrentSongIndex(n)}})},rt=nt,it=(n("8ced"),Object(p["a"])(rt,m,y,!1,null,"4602a02a",null)),at=it.exports,ct={name:"App",components:{NHeader:g,NPlayer:at},mounted:function(){}},st=ct,ot=(n("567b"),Object(p["a"])(st,c,s,!1,null,"7d1f64f4",null)),lt=ot.exports,ut=(n("d3b7"),n("8c4f"));a["a"].use(ut["a"]);var ft,ht=[{name:"singer",path:"/singer",component:function(){return n.e("chunk-5383fd69").then(n.bind(null,"15e3"))},children:[{path:":id",component:function(){return n.e("chunk-69e5fa93").then(n.bind(null,"b87b"))}}]},{name:"recommand",path:"/recommand",component:function(){return n.e("chunk-17e47102").then(n.bind(null,"2298"))},children:[{path:":id",component:function(){return n.e("chunk-11df1dc6").then(n.bind(null,"f49a"))}}]},{name:"search",path:"/search",component:function(){return n.e("chunk-7e1a9807").then(n.bind(null,"c106"))}},{path:"*",redirect:"/recommand"}],pt=new ut["a"]({mode:"hash",routes:ht}),dt=pt,gt=function(t){return t.singer},mt=function(t){return t.playing},yt=function(t){return t.fullScreen},vt=function(t){return t.playlist},bt=function(t){return t.sequenceList},St=function(t){return t.mode},Ct=function(t){return t.currentIndex},wt=function(t){return t.playlist[t.currentIndex]||{}},Pt="SET_SIGNER",Ot="SET_PLAYING_STATE",kt="SET_FULL_SCREEN",Et="SET_PLAYLIST",xt="SET_SEQUENCE_LIST",jt="SET_PLAY_MODE",Nt="SET_CURRENT_INDEX",Lt=(ft={},Object(v["a"])(ft,Pt,(function(t,e){t.singer=e})),Object(v["a"])(ft,Ot,(function(t,e){t.playing=e})),Object(v["a"])(ft,kt,(function(t,e){t.fullScreen=e})),Object(v["a"])(ft,Et,(function(t,e){t.playlist=e})),Object(v["a"])(ft,xt,(function(t,e){t.sequenceList=e})),Object(v["a"])(ft,jt,(function(t,e){t.mode=e})),Object(v["a"])(ft,Nt,(function(t,e){t.currentIndex=e})),ft),At=Lt,It={singer:{},playing:!1,fullScreen:!1,playlist:[],sequenceList:[],currentIndex:-1,mode:"sequence"},Mt=It,Tt=function(t,e){t.state;var n=t.commit,r=e.playlist,i=e.index;n(kt,!1),n(Nt,i),n(Ot,!0),n(Et,r),n(xt,r),n(Pt,r[i].artist)},_t=function(t){t.state;var e=t.commit;e(kt,!1),e(Nt,-1),e(Ot,!1),e(Et,new Array),e(xt,new Array)},Dt=n("b054"),Bt=n.n(Dt);a["a"].use(b["a"]);var Ht=!1,Rt=new b["a"].Store({state:Mt,getters:r,mutations:At,actions:i,strict:Ht,plugins:Ht?[Bt()()]:[]}),Ut=(n("202d"),n("caf9")),Ft=n("fe3c"),Gt=n.n(Ft);Gt.a.attach(document.body),a["a"].use(Ut["a"],{preLoad:1.2,error:"./common/images/wyy.png",loading:n("9a39"),attempt:1}),a["a"].config.productionTip=!1,new a["a"]({router:dt,store:Rt,render:function(t){return t(lt)}}).$mount("#app")},"58a9":function(t,e,n){},"6c94":function(t,e,n){"use strict";var r=n("dd4f"),i=n.n(r);i.a},"864b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collect"},[t._v("+ 收藏 ("+t._s(t.num)+")")])},i=[],a=(n("a9e3"),{name:"NCollect",props:{num:{type:String|Number}}}),c=a,s=(n("ae24"),n("2877")),o=Object(s["a"])(c,r,i,!1,null,"e66489be",null);e["a"]=o.exports},"8ced":function(t,e,n){"use strict";var r=n("9acb"),i=n.n(r);i.a},"9a39":function(t,e){t.exports="data:image/png;base64,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"},"9acb":function(t,e,n){},a071:function(t,e,n){},a417:function(t,e,n){"use strict";var r=n("bc3a"),i=n.n(r),a="http://49.233.137.79:3000";e["a"]=i.a.create({baseURL:a})},a780:function(t,e,n){"use strict";var r=n("a071"),i=n.n(r);i.a},ac17:function(t,e,n){t.exports=n.p+"img/needle.047d988b.png"},ad16:function(t,e,n){"use strict";var r=n("f447"),i=n.n(r);i.a},ae24:function(t,e,n){"use strict";var r=n("58a9"),i=n.n(r);i.a},d17a:function(t,e,n){},dd4f:function(t,e,n){},ee34:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:t.emitClick}},[n("use",{attrs:{"xlink:href":"#icon-"+t.href}})])},i=[],a={name:"NIcon",props:{href:{type:String,required:!0}},methods:{emitClick:function(t){this.$emit("click",t)}}},c=a,s=n("2877"),o=Object(s["a"])(c,r,i,!1,null,null,null);e["a"]=o.exports},ef99:function(t,e,n){},f447:function(t,e,n){}});
//# sourceMappingURL=app.9717e6f8.js.map