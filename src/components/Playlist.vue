<template>
  <transition name="slideUp">
    <div class="playlistWrapper" v-show="ifShowPlaylist">
      <div class="bg" @click="hidePlaylist"></div>
      <div class="playlist">
        <header class="header">
          <div class="left" @click="playAll">
            <n-icon href="pause_b" class="play"></n-icon>
            <div class="playAll">播放全部</div>
          </div>
          <div class="right">
            <n-collect ref="collect" class="collect" :num="25829"></n-collect>
          </div>
        </header>
        <n-scroll :data="currentList" class="scrollWrapper" ref="scroll">
          <main>
            <n-list-item v-for="(song, index) in currentList" :key="index"
                         :song="song.name" :index="index" :artist="song.artist"
                         :album="song.album" @click="selectSong(index)"
            ></n-list-item>
          </main>
        </n-scroll>
      </div>
    </div>
  </transition>
</template>

<script>
  import NIcon from '@/base/NIcon'
  import NCollect from '@/base/NCollect'
  import NListItem from '@/base/NListItem'
  import NScroll from '@/base/NScroll'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Playlist",
    data() {
      return {
        ifShowPlaylist: false
      }
    },
    components: {
      NIcon,
      NCollect,
      NListItem,
      NScroll
    },
    computed: {
      ...mapGetters({
        'currentList': 'playlist'
      })
    },
    watch: {
      ifShowPlaylist(newVal) {
        if (newVal) {
          this.$nextTick(() => {
            this.$refs.scroll.refresh()
          })
        }
      }
    },
    methods: {
      hidePlaylist() {
        this.ifShowPlaylist = false
      },
      selectSong(index) {
        this.playSong({
          playlist: this.currentList.slice(),
          index
        })
      },
      playAll(){
        this.playSong({
          playlist: this.currentList.slice(),
          index: 0
        })
      },
      ...mapActions([
        'playSong'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";

  .slideUp-enter-active, .slideUp-leave-active {
    transition: opacity .3s ease-in;

    .playlist {
      transition: transform .3s ease-in;
    }
  }

  .slideUp-enter, .slideUp-leave-to {
    opacity: 0;

    .playlist {
      transform: translateY(100%);
    }
  }

  .playlistWrapper {
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;

    .bg {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100%;
      background-color: $color-theme-g;
      opacity: .7;
    }

    .playlist {
      position: absolute;
      bottom: 0;
      background-color: $color-background;
      width: 100%;
      font-size: $font-size-medium-x;
      color: $color-text;
      box-sizing: border-box;
      border-top-left-radius: 60px;
      border-top-right-radius: 60px;

      header.header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px 0 46px 0;

        div.left {
          display: flex;

          .play {
            margin: 0 36px;
          }
        }

        div.right {
          padding-right: 15px;

          .collect {
            padding: 30px 24px;
            font-size: $font-size-medium-m;
          }
        }
      }

      .scrollWrapper {
        height: 50vh;
        overflow: hidden;
      }
    }

  }
</style>