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
      const id = this.$route.params.id
      this._getSingerDetail(id)
    },
    watch: {
      singer() {
        const id = this.$route.params.id
        this._getSingerDetail(id)
      }
    },
    methods: {
      _getSingerDetail(id) {
        getSingerDetail(id).then(res => {
          this.songs.length = 0 // 先清空原先的数组
          res.data.hotSongs.forEach(data => {
            this.songs.push(createSong(data))
            this.avatarUrl = `${res.data.artist[0].picUrl}?param=300x300`
          })
        })
      },
    }
  }
</script>

<style scoped>

</style>
