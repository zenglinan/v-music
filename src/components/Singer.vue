<template>
  <div id="singer">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <header class="header">
      <p>全部歌手</p>
      <div class="filter">
        <n-icon href="filter"></n-icon>
        <span>筛选</span>
      </div>
    </header>
    <div class="list">
      <header>热门歌手</header>
      <n-scroll :data="hotSingers" class="wrapper" :probe-type="3" @scroll="listenToScroll">
        <ul>
          <li v-for="(item, idx) in hotSingers" :key="idx" class="singerItem"
              @click="toSingerDetail(item)">
            <div class="name">
              <img v-lazy="item.img1v1Url" alt="avatar">
              <span>{{item.name}}</span>
            </div>
            <div class="follow">+ 关注</div>
          </li>
        </ul>
      </n-scroll>
    </div>
    <n-loading v-show="!hotSingers.length" class="loading"></n-loading>
  </div>
</template>

<script>
  import {getHotSingers} from '@/api/singer'
  import NIcon from '@/base/NIcon'
  import NScroll from '@/base/NScroll'
  import NLoading from '@/base/NLoading'
  import {mapMutations} from 'vuex'

  export default {
    name: "NewSongs",
    data() {
      return {
        hotSingers: []
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
      _getHotSingers(limit) {
        getHotSingers(limit).then(res => {
          if(!res.data.artists.length){
            this.listenToScroll = null
          }
          this.hotSingers.push(...res.data.artists) // 每次将请求的数据拼接进数组
        })
      },
      listenToScroll({y: posY} = {}, {maxScrollY} = {}) {
        if (posY < maxScrollY + 100) {
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

  #singer {
    font-size: $font-size-medium-x;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: normal;
      margin-bottom: 28px;

      .filter {
        font-size: $font-size-medium;

        span {
          margin-left: 20px;
        }
      }
    }


    .list {
      header {
        font-size: $font-size-medium;
        background-color: $color-background-d;
        color: $color-text-l;
        margin: 0 -45px;
        padding: 28px 45px;
      }

      .wrapper {
        height: 80vh;
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

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>