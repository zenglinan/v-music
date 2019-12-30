<template>
  <n-music-list :songs="songs" :avatarUrl="avatarUrl" @scrollToBottom="getMore"></n-music-list>
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
        songs: [],
        songsCache: []
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
          this.songsCache = res.data.playlist.tracks
          this.createSongs()
        })
      },
      createSongs() {
        this.songsCache.splice(0, 30).map(data => {
          this.songs.push(createSong(data))
        })
      },
      getMore() {
        this.createSongs()
      }
    }
  }
</script>

<style scoped>

</style>