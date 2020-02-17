<template>
  <div class="player" v-show="playlist.length" ref="player">
    <transition name="normal">
      <div class="fullPlayer" v-show="fullScreen">
        <div class="background">
          <img :src='`${currentSong.albumPic}?param=200x200`' alt="">
        </div>
        <div class="background-layer"></div>
        <header>
          <div class="icon">
            <n-icon href="back" @click="back"></n-icon>
          </div>
          <div class="desc">
            <div class="songName">{{currentSong.name}}</div>
            <p class="singerName">{{singer}}</p>
          </div>
        </header>

        <transition name="fade">
          <main class="pic" v-show="currentShow === 'cd'">
            <div class="needle">
              <img src="../common/images/needle.png" alt="" :class="needlePlayClass">
            </div>
            <div class="wrapper" @click="showLyric">
              <img :src='`${currentSong.albumPic}?param=200x200`'
                   :class="rotateClass" class="rotate">
            </div>
          </main>
        </transition>
        <transition name="fade">
          <n-scroll class="lyric" :probe-type="3" ref="lyricScroll"
                    :data="lyricData" v-if="currentLyric"
                    v-show="currentShow === 'lyric'">
            <div class="lyricWrapper" @click="showCD">
              <p class="line" ref="line"
                 v-for="(line, index) in currentLyric.lines"
                 :class="{active: activeLine === index}"
              >
                {{line.txt}}
              </p>
            </div>
          </n-scroll>
        </transition>

        <footer class="control">
          <div class="timeBar">
            <span class="now">{{format('1',currentTime)}}</span>
            <n-progress-bar :percent="percent" @processChange="onProcessChange"></n-progress-bar>
            <span class="end">{{format('2',duration)}}</span>
          </div>
          <div class="controlBtn">
            <n-icon :href="mode" @click="changeMode"></n-icon>
            <n-icon href="lastsong" @click="lastSong"></n-icon>
            <n-icon :href="playingIcon" class="play" @click="togglePlaying"></n-icon>
            <n-icon href="nextsong" @click="nextSong"></n-icon>
            <n-icon href="playlist_w" @click="showPlaylist"></n-icon>
          </div>
        </footer>
      </div>
    </transition>
    <div class="miniPlayer" v-show="!fullScreen" ref="miniPlayer">
      <div class="img" @click="setFullScreen">
        <img :src='`${currentSong.albumPic}?param=200x200`' alt="image"
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
        <n-icon href="playlist_b" class="playlist" @click="showPlaylist"></n-icon>
      </div>
    </div>
    <audio ref="audio" @canplay="audioReady" @ended="songEnd"
           @error="audioError" @timeupdate="timeUpdate"
           :src="`https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`"></audio>
    <playlist ref="playlist"></playlist>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import NIcon from '@/base/NIcon'
  import NProgressBar from '@/base/NProgressBar'
  import NProgressCircle from '@/base/NProgressCircle'
  import mode from '@/common/js/mode'
  import shuffle from '@/common/js/utils/shuffle'
  import {getLyric} from '@/api/lyric'
  import Lyric from 'lyric-parser'
  import NScroll from '@/base/NScroll'
  import Playlist from '@/components/Playlist'

  export default {
    name: "Player",
    data() {
      return {
        songReady: false,
        currentTime: 0,  // 歌曲当前播放时间
        duration: 0, // 歌曲总时长
        currentLyric: null, // 当前歌曲的歌词
        activeLine: 0, // 当前高亮的歌词行数
        currentShow: 'cd',
        playingLyric: '',  // 当前播放到的歌词
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
      lyricData() {
        return this.currentLyric && this.currentLyric.lines
      },
      ...mapGetters([
        'fullScreen',
        'playlist',
        'currentSong',
        'mode',
        'singer',
        'playing',
        'currentIndex',
        'sequenceList'
      ])
    },
    watch: {
      currentSong(curSong, preSong) {
        if (curSong.id === preSong.id) return  // 防止切换到随机模式的时候触发 curSong 变化，导致当前播放歌曲重播
        if (!curSong.id) return
        if (this.currentLyric) {
          this.currentLyric.stop()  // 切歌的时候清除原来的定时器
        }
        this._getLyric(this.currentSong.id)
        this.$nextTick(() => {
          this.$refs.audio.play()
              .catch(r => console.log(r)) // 这里要捕获一下错误，防止快速切换歌曲时，audio还没开始play的时候被打断
        })
      },
      playing(playingState) {
        this.$nextTick(() => {
          const audio = this.$refs.audio
          playingState
              ? audio.play().catch(e => console.log(e))
              : audio.pause()
        })
      }
    },
    components: {
      NIcon,
      NProgressBar,
      NProgressCircle,
      NScroll,
      Playlist
    },
    methods: {
      ...mapMutations({
        _setFullScreen: 'SET_FULL_SCREEN',
        _setPlayingState: 'SET_PLAYING_STATE',
        _setCurrentSongIndex: 'SET_CURRENT_INDEX',
        _setMode: 'SET_PLAY_MODE',
        _setPlayList: 'SET_PLAYLIST'
      }),
      format(type, time) {
        let m = Math.floor(time / 60)
        let s = Math.floor(time % 60)
        m = this._pad(m)
        s = this._pad(s)
        return `${m}:${s}`
      },
      showPlaylist() {
        this.$refs.playlist.ifShowPlaylist = true
      },
      _pad(time) {
        return time >= 10 ? time : `0${time}`
      },
      setFullScreen() {
        this._setFullScreen(true)
      },
      back() {
        this._setFullScreen(false)
        this.showCD()
      },
      _getLyric() {
        getLyric(this.currentSong.id).then(res => {
          const lyric = res.data.lrc.lyric
          this.currentLyric = new Lyric(lyric, this.lyricHandler)
          if (this.playing) { // 如果当前在播放歌曲，触发 play 方法
            this.currentLyric.play()
          }
        }).catch(e => {
          this.currentLyric = new Lyric("[00:00.000] 该歌曲无歌词")
          this.activeLine = 0
        })
      },
      lyricHandler({lineNum}) {
        this.activeLine = lineNum // 获取当前歌词所在行数
        if (lineNum > 5) {
          let lineEl = this.$refs.line[lineNum - 5]
          this.$refs.lyricScroll.scroll.scrollToElement(lineEl, 1000)
        } else {
          this.$refs.lyricScroll &&
          this.$refs.lyricScroll.scroll &&
          this.$refs.lyricScroll.scroll.scrollTo(0, 0, 1000)
        }
      },
      showLyric() { // 切换为显示歌词
        this.currentShow = 'lyric'
        this.$nextTick(() => {
          this.$refs.lyricScroll.refresh()
        })
      },
      showCD() { // 切换为显示 CD 唱片
        this.currentShow = 'cd'
      },
      lastSong() {
        const songListLen = this.playlist.length
        if (songListLen === 1) {
          this.loopSong()
          return
        }
        const index = (this.currentIndex + songListLen - 1) % songListLen
        this._setCurrentSongIndex(index)
        this.songReady = false
        this.showCD()

        if (!this.playing) {
          this.togglePlaying()
        }
      },
      nextSong() {
        const songListLen = this.playlist.length
        if (songListLen === 1) {
          this.loopSong()
          return
        }
        const index = (this.currentIndex + 1) % songListLen
        this._setCurrentSongIndex(index)
        this.songReady = false
        this.showCD()

        if (!this.playing) {
          this.togglePlaying()
        }
      },
      songEnd() {
        if (this.mode === 'loop') {
          this.loopSong()
        } else {
          this.nextSong()
        }
      },
      loopSong() {
        const audio = this.$refs.audio
        audio.currentTime = 0
        if (this.currentLyric) {
          this.currentLyric.seek(0)  // 单曲循环下，播放完成后将歌词回退到开头
        }
        if (!this.playing) {  // 如果当前是暂停状态，不做处理
          return
        } else {
          audio.play()
        }
      },
      togglePlaying() {
        if (this.currentLyric) {
          this.currentLyric.togglePlay()  // toggle 歌曲的时候，歌词也跟随 toggle
        }
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
        const curTime = this.duration * percent
        this.$refs.audio.currentTime = curTime
        if (this.currentLyric) {
          this.currentLyric.seek(curTime * 1000)  // 拖动进度条的时候，将歌词seek到相应时间
          if(!this.playing) {
            this.currentLyric.stop()
          }
        }
      },
      changeMode() {
        let curModeIndex = mode.indexOf(this.mode)
        let tarModeIndex = (++curModeIndex) % 3 // 在三种模式之间切换
        this._setMode(mode[tarModeIndex]) // 更改 mode
        // 改变 list
        let curList
        if (mode[tarModeIndex] === 'random') {
          curList = shuffle(this.playlist)
        } else {
          curList = this.sequenceList
        }
        this._setPlayList(curList)
        // 切换播放模式后，更改 currentIndex 为当前歌曲在新队列中的索引
        this.changeCurrentIndex(curList)
      },
      changeCurrentIndex(list) {
        const tarId = list.findIndex(item => {
          return this.currentSong.id === item.id
        })
        this._setCurrentSongIndex(tarId)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable";
  @import "@/common/scss/mixin";

  @include fade;
  /* 全屏播放界面动画 */
  .normal-enter-active, .normal-leave-active {
    transition: all 0.4s;

    header, footer {
      transition: all 0.3s ease-out;
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
      background: $color-theme-g;
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
      height: 12vh;
      padding: 0 60px 0 60px;
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

    main.pic {
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

    .lyric {
      position: absolute;
      top: 14vh;
      overflow: hidden;
      bottom: 14vh;
      width: 100%;

      .lyricWrapper {
        p {
          font-size: $font-size-medium-m;
          color: $color-text-dw;
          height: 7.2vh;
          text-align: center;
          transition: all .5s;
          width: 80%;
          margin: 0 auto;
          line-height: 1.4;

          &.active {
            color: $color-text-w;
            font-size: $font-size-medium-x;
          }
        }
      }
    }

    footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 14vh;
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
        padding-bottom: 65px;
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
