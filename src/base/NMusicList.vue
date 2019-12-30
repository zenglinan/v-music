<template>
  <div class="wrapper">
    <div class="desc" :style="bgStyle" ref="bgImg">
      <header>
        <n-icon href="back" @click="back" class="back"></n-icon>
        <n-icon href="share" class="share"></n-icon>
      </header>
      <n-collect ref="collect" class="collect"></n-collect>
    </div>
    <div class="layer" ref="layer"></div>
    <n-scroll :data="songs" class="scrollWrapper" :probe-type="3" ref="list" @scroll="listenToScroll">
      <div class="list">
        <div class="playAll" v-show="songs.length !== 0" @click="playHotSongs">
          <n-icon href="pause_b" class="icon"></n-icon>
          <span>播放热门歌曲</span>
        </div>
        <n-list-item class="listItem" v-for="(song, idx) in songs" :key="idx"
                     :song="song.name" :index="idx" :artist="song.artist" :album="song.album"
                     @click="selectSong">
        </n-list-item>
      </div>
    </n-scroll>
    <n-loading v-show="!songs.length" class="loading"></n-loading>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import NIcon from '@/base/NIcon'
  import NCollect from '@/base/NCollect'
  import NListItem from '@/base/NListItem'
  import NLoading from '@/base/NLoading'
  import NScroll from '@/base/NScroll'
  import {playlistMixin} from "@/common/js/mixin";

  let minScrollY // layer 层最高的 top 值
  const SPACE = 200 // 上滑阈值处和顶部的空隙值
  const zIndex = {
    low: 10,
    mid: 20,
    high: 30,
    max: 100
  }

  export default {
    name: "NMusicList",
    mixins: [playlistMixin],
    props: {
      songs: {
        type: Array
      },
      avatarUrl: {
        type: String
      }
    },
    data() {
      return {
        scrollY: 0,
      }
    },
    components: {
      NIcon,
      NListItem,
      NLoading,
      NScroll,
      NCollect
    },
    mounted() {
      this.bgImgHeight = this.$refs.bgImg.clientHeight
      minScrollY = `${-this.bgImgHeight + SPACE}`
      this.modifyStyle(this.$refs.list.$el, {
        top: `${this.bgImgHeight}px`
      })
    },
    computed: {
      bgStyle() {
        return `background-image:url(${this.avatarUrl})`
      }
    },
    watch: {
      scrollY(curScrollY) {
        const top = Math.max(minScrollY, curScrollY)
        // 向上滑动到阈值后，缩小图片高度
        if (curScrollY < minScrollY) {
          this.shrinkImgHeight()
        }
        // 向下拉伸时，放大图片
        else if (curScrollY >= 0) {
          this.enlargeImg(curScrollY)
          this.showCollectBtn()
        }
        // 正常向上滑动时，往上拉伸 layer
        else {
          this.drawLayer()
          this.hideCollectBtn()
        }
        this.modifyStyle(this.$refs.layer, {
          transform: `translate3d(0, ${top}px, 0)`,
          webkitTransform: `translate3d(0, ${top}px, 0)`
        })
      }
    },
    methods: {
      adjustPlaylist(playlist) {
        const bottom = playlist.length ? '180px' : ''
        this.$refs.list.$el.style.bottom = bottom
        this.$refs.list.refresh()
      },
      back() {
        this.$router.go(-1)
      },
      listenToScroll(pos, {maxScrollY}) {
        this.scrollY = pos.y
        if(this.scrollY <= maxScrollY){
          console.log(1);
          this.$emit('scrollToBottom')
        }
      },
      shrinkImgHeight() {
        this.modifyStyle(this.$refs.bgImg, {
          paddingTop: 0,
          height: `${SPACE}px`,
          zIndex: zIndex.max
        })
      },
      enlargeImg(curScrollY) {
        const percent = Math.abs(curScrollY / this.bgImgHeight)
        const scale = 1 + percent
        this.modifyStyle(this.$refs.bgImg, {
          transform: `scale(${scale})`,
          webkitTransform: `scale(${scale})`,
          zIndex: zIndex.max
        })
      },
      drawLayer() {
        this.modifyStyle(this.$refs.bgImg, {
          paddingTop: '70%',
          height: 0,
          zIndex: zIndex.low
        })
      },
      showCollectBtn() {
        this.modifyStyle(this.$refs.collect.$el, {
          opacity: 1
        })
      },
      hideCollectBtn() {
        this.modifyStyle(this.$refs.collect.$el, {
          opacity: 0
        })
      },
      modifyStyle(el, styleObj) {

        const display = el.style.display
        el.style.display = 'none'
        Object.keys(styleObj).map(k => {
          el.style[k] = styleObj[k]
        })
        el.style.display = display

      },
      selectSong(index) {
        this.clearSong()
        this.playSong({
          playlist: this.songs.slice(),
          index
        })
      },
      playHotSongs() {
        this.playSong({
          playlist: this.songs.slice(),
          index: 0
        })
      },
      ...mapActions([
        'playSong',
        'clearSong'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";
  @import "@/common/scss/mixin.scss";

  @include loading;

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: $color-background-d;

    .desc {
      border: none;
      position: relative;
      width: 100%;
      box-sizing: border-box;
      box-shadow: 0 6px 15px rgba(0, 0, 0, .2);
      width: 100%;
      left: 0;
      padding: 70% 45px 0 45px;
      background-size: cover;
      color: $color-text-w;
      font-size: $font-size-medium-x;
      transform-origin: top;
      z-index: 10;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);

      header {
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        box-sizing: border-box;

        .back {
          position: absolute;
          top: 0;
          left: 45px;
        }

        .share {
          position: absolute;
          top: 0;
          right: 45px;
        }

      }

      .collect {
        position: absolute;
        bottom: 60px;
        right: 60px;
      }
    }
  }

  .layer {
    background: $color-background;
    position: relative;
    height: 100%;
    will-change: transform;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    z-index: 20;
  }

  .scrollWrapper {
    background: $color-background;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 30;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);

    .list {
      padding-top: 20px;


      .playAll {
        font-size: $font-size-medium-x;
        padding: 40px 0 72px 40px;

        .icon {
          margin-right: 20px;
        }
      }
    }
  }
</style>