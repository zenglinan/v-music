<template>
  <n-music-list :songs="songs" :avatarUrl="avatarUrl"></n-music-list>
</template>

<script>
  import NMusicList from '@/base/NMusicList'
  const avatarLoadingUrl = require(`../common/images/avatar-loading.jpg`)
  import {getSonglistDetail} from '@/api/songlist'
  import {createSong} from '@/common/js/song'

  export default {
    name: "SonglistDetail",
    data(){
      return {
        avatarUrl: avatarLoadingUrl,
        songs: []
      }
    },
    components: {
      NMusicList
    },
    created(){
      this._getSonglistDetail(this.$route.params.id)
    },
    methods: {
      _getSonglistDetail(id) {
        getSonglistDetail(id).then(res => {
          this.avatarUrl = res.data.playlist.coverImgUrl
          res.data.playlist.tracks.map(data => {
            this.songs.push(createSong(data))
          })
        })
      },
    }
  }
</script>

<style scoped>

</style>