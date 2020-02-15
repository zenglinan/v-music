<template>
  <div id="recommand">
    <n-scroll :data="hotSongList" class="recommandWrapper" ref="songlist" :probe-type="3" @scroll="listenToScroll">
      <div class="content" ref="content">
        <div class="swiper">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item, idx) in banners" :key="idx">
              <a href="">
                <img :src="item.pic" alt="image" @load="onLoadImg()">
              </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="songList">
          <header>
            <h3>推荐歌单</h3>
            <div class="square">歌单广场</div>
          </header>
          <ul class="list">
            <li class="listItem" v-for="(item, idx) in hotSongList" :key="idx" @click="toSonglistDetail(item.id)">
              <img v-lazy="`${item.coverImgUrl}?param=150x150`" alt="image">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <n-loading v-show="loadingMore" class="loadingMore"></n-loading>
      </div>
    </n-scroll>
    <n-loading v-show="!hotSongList.length" class="loading"></n-loading>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {getBanners, getHotSongList} from '@/api/recommand'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import NScroll from '@/base/NScroll'
  import NLoading from '@/base/NLoading'
  import {playlistMixin} from "@/common/js/mixin";

  export default {
    name: "Recommand",
    mixins: [playlistMixin],
    data() {
      return {
        banners: {},
        hotSongList: [],
        loadingMore: false,
        allowToLoad: true,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          init: false,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
        }
      }
    },
    components: {
      swiper,
      swiperSlide,
      NScroll,
      NLoading
    },
    mounted() {
      this._getBanners()
      this._getHotSongList()
      this.listenToScroll()
    },
    methods: {
      adjustPlaylist(playlist) {
        const bottom = playlist.length ? '180px' : ''
        this.$refs.songlist.$el.style.bottom = bottom
        this.$refs.songlist.refresh()
      },
      toSonglistDetail(id){
        this.$router.push(`/recommand/${id}`)
      },
      _getBanners() {
        getBanners(1).then(res => { // params: Android: 1
          this.banners = res.data.banners
        })
      },
      _getHotSongList() {
        getHotSongList(15).then(res => {  // 获取指定条数的条歌单
          if (!res.data.playlists.length) {
            this.listenToScroll = null
          }
          this.allowToLoad = true
          this.loadingMore = false // 关闭加载动画
          this.hotSongList.push(...res.data.playlists)
        })
      },
      initSwiper() {
        if (this.banners.length > 1) {
          this.swiper.init();
        }
      },
      onLoadImg() { // 用来在 slide 加载完成后刷新 scroll，保证 scroll 高度计算正确
        if (!this.checkLoaded) {
          this.scroll && this.scroll.refresh()
          this.checkLoaded = true
        }
      },
      listenToScroll({y: posY} = {}, {maxScrollY} = {}) {
        if (posY < maxScrollY + 20 && this.allowToLoad) {
          this.loadingMore = true // 开启加载动画
          this.allowToLoad = false
          this._getHotSongList()
        }
      }
    },
    updated() {
      this.initSwiper()
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";
  @import "@/common/scss/mixin.scss";

  @include loading;
  @include slide;

  #recommand {
    display: flex;
    justify-content: center;
    .recommandWrapper {
      position: fixed;
      top: 10vh;
      bottom: 0;
      width: 100%;
      padding: 0 45px;
      box-sizing: border-box;
      overflow: hidden;

      div.content {
        .swiper {
          padding-bottom: 76px;

          .swiper-wrapper {
            .swiper-slide {
              width: 100%;

              img {
                border-radius: 16px;
                width: 100%
              }
            }
          }
        }

        .songList {
          font-size: $font-size-medium;

          header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .square {
              font-size: $font-size-small-x;
              padding: 20px 26px;
              border: 2px solid $color-border-l;
              border-radius: 40px;
            }
          }

          .list {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            padding-bottom: 60px;

            .listItem {
              padding-top: 60px;
              padding-bottom: 10px;
              height: 418px;
              width: 312px;

              img {
                width: 100%;
              }

              p {
                padding-top: 22px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                letter-spacing: .02em;
              }
            }

          }
        }
      }
    }

  }

  .loadingMore {
    margin-top: 20px;
    text-align: center;
    font-size: $font-size-large-x;
  }
</style>
