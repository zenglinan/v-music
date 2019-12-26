import {mapGetters} from 'vuex'

export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mounted() {
    this.adjustPlaylist(this.playlist)
  },
  activated() {
    this.adjustPlaylist(this.playlist)
  },
  watch: {
    playlist() {
      this.adjustPlaylist(this.playlist)
    }
  },
  methods: {
    adjustPlaylist(playlist){ // 在组件中会重定义该方法，作用是调整 playlist 的 bottom，刷新 scroll 组件
      throw Error('adjustPlaylist has not defined')
    }
  }
}