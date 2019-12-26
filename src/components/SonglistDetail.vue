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
          // res.data.hotSongs.forEach(data => {
          //   const artist = res.data.artist
          //   this.artist = {
          //     imgUrl: artist.img1v1Url,
          //     name: artist.name
          //   }
          //   this.songs.push(createSong(data))
          //   this.avatarUrl = this.artist.imgUrl
          // })
        })
      },
    }
  }
</script>

<style scoped>

</style>