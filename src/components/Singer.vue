<template>
  <div id="singer">
    <header class="header">
      <div class="top">
        <p>全部歌手</p>
        <div class="filter">
          <n-icon href="filter"></n-icon>
          <span>筛选</span>
        </div>
      </div>
      <p class="bottom">热门歌手</p>
    </header>
    <div class="list">
      <n-scroll ref="singerlist" :data="hotSingers" class="wrapper" :probe-type="3" @scroll="listenToScroll">
        <ul>
          <li v-for="(item, idx) in hotSingers" :key="idx" class="singerItem"
              @click="toSingerDetail(item)">
            <div class="name">
              <img v-lazy='`${item.picUrl}?param=300x300`' alt="avatar">
              <span>{{item.name}}</span>
            </div>
            <div class="follow">+ 关注</div>
          </li>
          <n-loading v-show="loadingMore" class="loadingMore"></n-loading>
        </ul>
      </n-scroll>
    </div>
    <n-loading v-show="!hotSingers.length" class="loading"></n-loading>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {getHotSingers} from '@/api/singer'
  import NIcon from '@/base/NIcon'
  import NScroll from '@/base/NScroll'
  import NLoading from '@/base/NLoading'
  import {mapMutations} from 'vuex'
  import {playlistMixin} from "@/common/js/mixin";

  export default {
    name: "NewSongs",
    mixins: [playlistMixin],
    data() {
      return {
        hotSingers: [],
        loadingMore: false,
        allowToLoad: true
      }
    },
    components: {
      NIcon,
      NScroll,
      NLoading
    },
    mounted() {
      this._getHotSingers(12)
    },
    methods: {
      adjustPlaylist(playlist) {
        const bottom = playlist.length ? '180px' : ''
        this.$refs.singerlist.$el.style.bottom = bottom
        this.$refs.singerlist.refresh()
      },
      _getHotSingers(limit) {
        getHotSingers(limit).then(res => {
          if (!res.data.artists.length) {
            this.listenToScroll = () => {}
          }
          this.allowToLoad = true
          this.loadingMore = false // 关闭加载动画
          this.hotSingers.push(...res.data.artists) // 每次将请求的数据拼接进数组
          return res.artists
        }).then(artists => {

        })
      },
      listenToScroll({y: posY} = {}, {maxScrollY} = {}) {
        if (posY < maxScrollY + 20 && this.allowToLoad) {
          this.loadingMore = true // 开启加载动画
          this.allowToLoad = false
          this._getHotSingers(12)
        }
      },
      toSingerDetail(singer) {
        this.$router.push({
          path: `/singer/${singer.id}`
        })
        this.setSinger(singer)
      },
      ...mapMutations({
        'setSinger': 'SET_SIGNER'
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";
  @import "@/common/scss/mixin.scss";

  @include slide;
  @include loading;

  #singer {
    font-size: $font-size-medium-x;

    .header {
      font-weight: normal;
      margin-bottom: 28px;
      height: 10vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .filter {
          font-size: $font-size-medium;

          span {
            margin-left: 20px;
          }
        }
      }

      p.bottom {
        font-size: $font-size-medium;
        background-color: $color-background-d;
        color: $color-text-l;
        margin: 0 -45px;
        padding: 28px 45px;
      }
    }


    .list {
      display: flex;
      justify-content: center;

      .wrapper {
        position: fixed;
        bottom: 0;
        top: 20vh;
        width: 100%;
        padding: 0 45px;
        box-sizing: border-box;
        overflow: hidden;

        ul {
          .singerItem {
            padding: 30px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .name {
              display: flex;
              align-items: center;

              img {
                width: 122px;
                height: 122px;
                border-radius: 50%;
                margin-right: 38px;
              }
            }

            .follow {
              border: 3px solid $color-border-r;
              border-radius: 40px;
              padding: 12px 20px;
              color: $color-theme;
              font-size: $font-size-medium;
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
