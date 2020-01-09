<template>
  <n-music-list :songs="songs" :avatarUrl="avatarUrl" @scrollToBottom="getMore"></n-music-list>
</template>

<script>
  import NMusicList from '@/base/NMusicList'
  const avatarLoadingUrl = require(`../common/images/avatar-loading.jpg`)
  import {getSonglistDetail} from '@/api/songlist'
  import {createSong} from '@/common/js/song'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: "SonglistDetail",
    data(){
      return {
        avatarUrl: avatarLoadingUrl,
        songs: [],
        InvalidSongs: []  // api 返回的是无效的歌曲信息，必须通过这些信息请求具体的歌曲
      }
    },
    components: {
      NMusicList
    },
    created(){
      this._getSonglistDetail(this.$route.params.id)
    },
    computed: {
      ...mapGetters([
          'playing'
      ])
    },
    methods: {
      _getSonglistDetail(id) {
        getSonglistDetail(id).then(res => {
          this.avatarUrl = res.data.playlist.coverImgUrl
          this.InvalidSongs = res.data.playlist.tracks
          this.getRealSongs()
        })
      },
      getRealSongs() { // 请求真正的歌曲信息
        // 每次只会请求 InvalidSongs 里的前 30 条，防止一次请求过多
        this.InvalidSongs.splice(0, 30).map(data => { // 每次请求 30 条歌曲
          this.songs.push(createSong(data))
        })
      },
      getMore() { // 下拉的时候请求更多歌曲
        if(!this.InvalidSongs.length) return

        this.getRealSongs()
        if(this.playing){ // 如果当前正在播放，将当前播放列表更新，加上新请求的部分
          this.updatePlaylist(this.songs)
        }
      },
      ...mapMutations({
        'updatePlaylist': 'SET_PLAYLIST'
      })
    }
  }
</script>

<style scoped>

</style>