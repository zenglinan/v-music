<template>
  <div id="recommand">
    <div class="wrapper" ref="wrapper">
      <div class="content">
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
            <li class="listItem" v-for="(item, idx) in hotSongList" :key="idx">
              <img :src="item.coverImgUrl" alt="image">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {getBanners, getHotSongList} from '@/api/recommand'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import BScroll from '@better-scroll/core'

  export default {
    name: "Recommand",
    data() {
      return {
        banners: {},
        hotSongList: [],
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
    },
    mounted() {
      this._getBanners()
      this._getHotSongList()
    },
    methods: {
      _getBanners() {
        getBanners(1).then(res => { // params: Android: 1
          this.banners = res.data.banners
        })
      },
      _getHotSongList() {
        getHotSongList(600).then(res => {  // 获取指定条数的条歌单
          this.hotSongList = res.data.playlists
          this.$nextTick(() => {  // 用 nextTick 确保可以在获取完所有数据，并渲染后进行计算高度
            this.initScroll()
          })
        })
      },
      initScroll() {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollY: true,
          click: true,
          probeType: 3
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

  #recommand {
    .wrapper {
      height: 90vh;
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
</style>