<template>
  <div class="search">
    <n-search-box :filler="filler" @queryChange="queryChange"></n-search-box>
    <div class="hotSearch" v-show="!query">
      <h3>热门搜索</h3>
      <ul>
        <li v-for="(item, index) in hotSearch" :key="index" @click="fill(item.first)">
          {{item.first}}
        </li>
      </ul>
    </div>
    <suggest v-show="query" :result="result"></suggest>
  </div>
</template>

<script>
  import NSearchBox from '@/base/NSearchBox'
  import {getHotSearch, getSuggest} from '@/api/search'
  import Suggest from '@/components/Suggest'
  import {createResult} from '@/common/js//queryResult'
  import {getSongDetail} from '@/api//song'
  import {createSong} from '@/common/js/song'

  export default {
    name: "Search",
    components: {
      NSearchBox,
      Suggest,
    },
    data() {
      return {
        hotSearch: [],
        filler: '',  // 填充的查询词
        query: '',
        result: {},  // 查询结果
      }
    },
    created() {
      this._getHotSearch()
    },
    methods: {
      _getHotSearch() {
        getHotSearch().then(res => {
          this.hotSearch = res.data.result.hots
        })
      },
      fill(mes) {
        this.filler = mes
      },
      queryChange(keyword) {
        this.query = keyword.trim()
        if (this.query) { // 如果是空字符串或空格，不请求
          this._getSuggest(keyword)
        }
      },
      _getSuggest(keyword) {
        getSuggest(keyword).then(res => {
          this.tempResult = createResult([res[0].data.result, res[1].data.result])
        })
            .then(() => {
              const songIdCollection = this.tempResult.songs.map(song => {
                return song.id
              })
              return getSongDetail(songIdCollection)
            })
            .then(res => {
              this.tempResult.songs.length = 0
              res.data.songs.map(song => {
                this.tempResult.songs.push(createSong(song))
              })
              this.result = this.tempResult
            })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";

  .search {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $color-background;
    width: 100%;
    box-sizing: border-box;

    .hotSearch {
      padding: 0 45px;

      h3 {
        margin-bottom: 60px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          padding: 28px 36px;
          margin-bottom: 36px;
          margin-right: 46px;
          border-radius: 100px;
          font-size: $font-size-medium-m;
          color: $color-text;
          background-color: $color-theme-w;
        }
      }


    }
  }
</style>