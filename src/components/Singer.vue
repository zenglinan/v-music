<template>
  <div id="singer">
    <header class="header">
      <p>全部歌手</p>
      <div class="filter">
        <n-icon href="filter"></n-icon>
        <span>筛选</span>
      </div>
    </header>
    <div class="list">
      <header>热门歌手</header>
      <n-scroll :data="hotSingers" class="wrapper" @scroll="listenToScroll">
        <ul>
          <li v-for="(item, idx) in hotSingers" :key="idx" class="singerItem">
            <div class="name">
              <img v-lazy="item.img1v1Url" alt="avatar">
              <span>{{item.name}}</span>
            </div>
            <div class="follow">+ 关注</div>
          </li>
        </ul>
      </n-scroll>
    </div>
  </div>
</template>

<script>
  import {getHotSingers} from '@/api/singer'
  import NIcon from '@/base/NIcon'
  import NScroll from '@/base/NScroll'

  export default {
    name: "NewSongs",
    data() {
      return {
        hotSingers: []
      }
    },
    components: {
      NIcon,
      NScroll
    },
    beforeMount() {
      this.$Lazyload.config({loading: require('../common/images/smile.png')});
    },
    mounted() {
      this._getHotSingers(12)
    },
    methods: {
      _getHotSingers(limit) {
        getHotSingers(limit).then(res => {
          this.hotSingers.push(...res.data.artists) // 每次将请求的数据拼接进数组
        })
      },
      listenToScroll({y: posY} = {}, {maxScrollY} = {}) {
        if (posY < maxScrollY + 60) {
          this._getHotSingers(12)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";

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
</style>