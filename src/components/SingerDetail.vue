<template>
  <n-music-list :avatarUrl="avatarUrl" :songs="songs"></n-music-list>
</template>

<script>
  import NMusicList from '../base/NMusicList'
  import {getSingerDetail} from '@/api/singer'
  import {createSong} from '@/common/js/song'
  import {mapGetters} from 'vuex'
  const avatarLoadingUrl = require(`../common/images/avatar-loading.jpg`)

  export default {
    name: "SingerDetail",
    data() {
      return {
        avatarUrl: avatarLoadingUrl,
        songs: []
      }
    },
    components: {
      NMusicList
    },
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      this._getSingerDetail()
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
            this.songs.push(createSong(data))
            this.avatarUrl = res.data.artist.img1v1Url
          })
        })
      },
    }
  }
</script>

<style scoped>

</style>