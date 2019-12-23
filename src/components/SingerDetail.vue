<template>
  <div class="wrapper">
    <div class="desc" :style="bgStyle" ref="bgImg">
      <header>
        <n-icon href="back" @click="back" class="back"></n-icon>
        <n-icon href="share" class="share"></n-icon>
      </header>
      <div class="collect" ref="collect">+ 收藏</div>
    </div>
    <div class="layer" ref="layer"></div>
    <n-scroll :data="songs" class="scrollWrapper" ref="list" @scroll="listenToScroll">
      <div class="list">
        <div class="playAll" v-show="songs.length !== 0">
          <n-icon href="audio" class="icon"></n-icon>
          <span>播放热门歌曲</span>
        </div>
        <n-list-item class="listItem" v-for="(song, idx) in songs" :key="idx"
                     :data="song" :index="idx" :singer="artist.name"
                     :probeType="3" :bounce="false" @click="selectSong">
        </n-list-item>
      </div>
    </n-scroll>
    <n-loading v-show="!songs.length" class="loading"></n-loading>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {getSingerDetail} from '@/api/singer'
  import {createSong} from '@/common/js/song'
  import NIcon from '@/base/NIcon'
  import NListItem from '@/base/NListItem'
  import NLoading from '@/base/NLoading'
  import NScroll from '@/base/NScroll'

  let minScrollY // layer 层最高的 top 值
  const SPACE = 200 // 上滑阈值处和顶部的空隙值
  const zIndex = {
    low: 10,
    mid: 20,
    high: 30,
    max: 100
  }
  const avatarLoadingUrl = require(`../common/images/avatar-loading.jpg`)

  export default {
    name: "SingerDetail",
    data() {
      return {
        songs: [],
        artist: {},
        scrollY: 0,
        avatarUrl: avatarLoadingUrl
      }
    },
    components: {
      NIcon,
      NListItem,
      NLoading,
      NScroll
    },
    created() {
      this._getSingerDetail()
    },
    mounted() {
      this.bgImgHeight = this.$refs.bgImg.clientHeight
      minScrollY = `${-this.bgImgHeight + SPACE}`
      this.modifyStyle(this.$refs.list.$el, {
        top: `${this.bgImgHeight}px`
      })
    },
    computed: {
      ...mapGetters([
        'singer',
      ]),
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
      _getSingerDetail() {
        const id = this.singer.id
        if (!id) { // 如果没有 id ，且进入了歌手详情页面，进行回退
          this.$router.push('/singer')
          return
        }

        getSingerDetail(id).then(res => {
          res.data.hotSongs.forEach(data => {
            const artist = res.data.artist
            this.artist = {
              imgUrl: artist.img1v1Url,
              name: artist.name
            }
            this.songs.push(createSong(data))
            this.avatarUrl = this.artist.imgUrl
          })
        })
      },
      back(e) {
        this.$router.push({
          path: '/singer'
        })
      },
      listenToScroll(pos) {
        this.scrollY = pos.y
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
        this.modifyStyle(this.$refs.collect, {
          opacity: 1
        })
      },
      hideCollectBtn() {
        this.modifyStyle(this.$refs.collect, {
          opacity: 0
        })
      },
      modifyStyle(el, styleObj) {
        Object.keys(styleObj).map(k => {
          el.style[k] = styleObj[k]
        })
      },
      selectSong(song, index) {
        this.playSong({
          playlist: this.songs.slice(),
          index
        })
      },
      ...mapActions([
        'playSong'
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
        padding: 24px 40px;
        background-color: $color-theme;
        border-radius: 50px;
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