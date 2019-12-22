<template>
  <div class="player" v-if="playlist.length" ref="player">
    <transition name="normal">
      <div class="fullPlayer" v-show="fullScreen">
        <div class="background">
          <img :src="currentSong.albumPic" alt="">
        </div>
        <div class="background-layer"></div>
        <header>
          <div class="icon">
            <n-icon href="back" @click="back"></n-icon>
          </div>
          <div class="desc">
            <div class="songName">{{currentSong.name}}</div>
            <p class="singerName">{{singer.name}}</p>
          </div>
        </header>
        <div class="needle">
          <img src="../common/images/needle.png" alt="" :class="needlePlayClass">
        </div>
        <main>
          <div class="wrapper">
            <img :src="currentSong.albumPic" alt="" :class="rotateClass" class="rotate">
          </div>
        </main>
        <footer class="control">
          <div class="timeBar">
            <span class="now">{{format(currentTime)}}</span>
            <n-progress-bar :percent="percent" @processChange="onProcessChange"></n-progress-bar>
            <span class="end">{{format(duration)}}</span>
          </div>
          <div class="controlBtn">
            <n-icon :href="mode"></n-icon>
            <n-icon href="lastsong" @click="lastSong"></n-icon>
            <n-icon :href="playingIcon" class="play" @click="togglePlaying"></n-icon>
            <n-icon href="nextsong" @click="nextSong"></n-icon>
            <n-icon href="playlist_w"></n-icon>
          </div>
        </footer>
      </div>
    </transition>
    <div class="miniPlayer" v-show="!fullScreen" ref="miniPlayer">
      <div class="img" @click="setFullScreen">
        <img :src="currentSong.albumPic" alt="image"
             ref="miniImg" :class="rotateClass" class="rotate">
      </div>
      <main @click="setFullScreen">
        <p class="name">{{currentSong.name}}</p>
        <p class="album">{{currentSong.album}}</p>
      </main>
      <div class="control">
        <n-progress-circle class="circle" :size="86"
                           innerBg="rgb(62,62,62)"
                           outerBg="rgb(222, 79, 72)"
                           :percent="percent"
                           @click="togglePlaying"
        ></n-progress-circle>
        <n-icon :href="miniPlayingIcon" class="audio"></n-icon>
        <n-icon href="playlist_b" class="playlist"></n-icon>
      </div>
    </div>
    <audio ref="audio" @canplay="audioReady" @error="audioError" @timeupdate="timeUpdate"
           :src="`https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`"></audio>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import NIcon from '@/base/NIcon'
  import NProgressBar from '@/base/NProgressBar'
  import NProgressCircle from '@/base/NProgressCircle'

  export default {
    name: "Player",
    data() {
      return {
        songReady: false,
        currentTime: 0,  // 歌曲当前播放时间
        duration: 0 // 歌曲总时长
      }
    },
    computed: {
      playingIcon() {
        return this.playing ? 'playing' : 'pause'
      },
      miniPlayingIcon() {
        return this.playing ? 'mini-playing' : 'mini-pause'
      },
      rotateClass() {
        return this.playing ? 'play' : 'play pause'
      },
      needlePlayClass() {
        return this.playing ? 'play' : 'pause'
      },
      percent() {
        return this.currentTime / this.duration
      },
      ...mapGetters([
        'fullScreen',
        'playlist',
        'currentSong',
        'mode',
        'singer',
        'playing',
        'currentIndex'
      ])
    },
    watch: {
      currentSong(curSong) {
        if (!curSong.id) return
        this.$nextTick(() => {
          this.$refs.audio.play()
        })
      },
      playing(playingState) {
        this.$nextTick(() => {
          const audio = this.$refs.audio
          playingState ? audio.play() : audio.pause()
        })
      }
    },
    components: {
      NIcon,
      NProgressBar,
      NProgressCircle
    },
    methods: {
      ...mapMutations({
        _setFullScreen: 'SET_FULL_SCREEN',
        _setPlayingState: 'SET_PLAYING_STATE',
        _setCurrentSongIndex: 'SET_CURRENT_INDEX'
      }),
      format(time) {
        let m = Math.round(time / 60)
        let s = Math.round(time % 60)
        m = this._pad(m)
        s = this._pad(s)
        return `${m}:${s}`
      },
      _pad(time) {
        return time >= 10 ? time : `0${time}`
      },
      setFullScreen() {
        this._setFullScreen(true)
      },
      back() {
        this._setFullScreen(false)
      },
      lastSong() {
        if (!this.songReady) return

        const songListLen = this.playlist.length
        const index = (this.currentIndex + songListLen - 1) % songListLen
        this._setCurrentSongIndex(index)
        this.songReady = false

        if (!this.playing) {
          this.togglePlaying()
        }
      },
      nextSong() {
        if (!this.songReady) return  // 避免当前audio没加载完就去切换

        const songListLen = this.playlist.length
        const index = (this.currentIndex + 1) % songListLen
        this._setCurrentSongIndex(index)
        this.songReady = false

        if (!this.playing) {
          this.togglePlaying()
        }
      },
      togglePlaying() {
        this._setPlayingState(!this.playing)
      },
      audioReady(e) {
        this.duration = e.target.duration
        this.songReady = true
      },
      audioError() {
        this.songReady = true
        this.playlist.length && this.nextSong()
      },
      timeUpdate(e) {
        this.currentTime = e.target.currentTime
      },
      onProcessChange(percent) {
        this.$refs.audio.currentTime = this.duration * percent
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable";
  /* 全屏播放界面动画 */
  .normal-enter-active, .normal-leave-active {
    transition: all 0.4s;

    header, footer {
      transition: all 0.3s cubic-bezier(0.86, 0.18, 0.82, 1.32);
    }
  }

  .normal-enter, .normal-leave-to {
    opacity: 0;

    header {
      transform: translate3d(0, -100px, 0);
    }

    footer {
      transform: translate3d(0, 100px, 0);
    }
  }

  /* CD 旋转动画 */
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .rotate {
    &.play {
      animation: rotate linear 26s infinite;
    }

    &.pause {
      animation-play-state: paused;
    }
  }

  .fullPlayer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background: $color-background;

    .background {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.5;

      img {
        width: 100%;
        height: 100%;
        filter: blur(70px);
      }
    }

    .background-layer {
      opacity: 0.4;
      filter: none;
      background: #323234;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 8vh;
      padding: 40px 60px 0 60px;
      display: flex;
      align-items: center;
      font-size: $font-size-large;

      div.icon {
        width: 14%;
      }

      .desc {
        width: 86%;
        padding-right: 30px;

        .songName {
          font-weight: normal;
          color: $color-text-w;
          font-size: $font-size-medium-x;
          padding-bottom: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .singerName {
          font-size: $font-size-medium-m;
          color: $color-text-dw;
        }
      }
    }

    .needle {
      position: absolute;
      top: 16vh;
      left: 0;
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      z-index: 1;

      img {
        height: 18vh;
        margin-left: 20%;
        transition: all .8s;
        transform-origin: 17.4% 12.1%;

        &.play {
          transform: none;
        }

        &.pause {
          transform: rotate(-30deg);
        }
      }
    }

    main {
      .wrapper {
        box-sizing: border-box;
        position: absolute;
        top: 30vh;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        border: 15px solid rgb(230, 229, 230);

        img {
          height: 23vh;
          width: 23vh;
          border-radius: 50%;
          border: 5vh solid $color-border-b;
        }
      }
    }

    footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .timeBar {
        display: flex;
        align-items: center;
        font-size: $font-size-medium;
        width: 100%;

        .now {
          width: 18%;
          text-align: center;
          color: $color-text-dw;
        }

        .end {
          width: 18%;
          text-align: center;
          color: $color-text-dw;
        }

      }

      .controlBtn {
        padding: 65px 0;
        font-size: $font-size-large-x;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          padding-right: 10vw;
          fill: $color-text-w;

          &:last-child {
            padding-right: 0;
          }
        }

        .play {
          font-size: $font-size-large-xxl;
        }
      }
    }
  }

  .miniPlayer {
    font-size: $font-size-medium;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 180px;
    border: 2px solid $color-border-l;
    background-color: $color-background;
    z-index: 110;
    display: flex;
    align-items: center;
    padding: 14px;
    box-sizing: border-box;

    .img {
      width: 14%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 100%;
        border-radius: 50%;
      }
    }

    main {
      width: 68%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .album {
        color: $color-text-l;
        font-size: $font-size-small-x;
      }
    }

    .control {
      width: 18%;
      height: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      .circle {
        position: absolute;
        left: 0;
      }
      .audio, .playlist {
        font-size: $font-size-large-xl;
      }
    }
  }
</style>