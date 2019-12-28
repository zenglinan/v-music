<template>
  <div class="suggest">
    <n-scroll :data="songData" class="scrollWrapper" ref="scroll">
      <div class="scrollContent">
        <div class="guess" v-if="result.artists || result.playlists">
          <p class="title">你可能感兴趣</p>
          <ul>
            <li v-for="(item, index) in result.artists" :key="`sr_${index}`"
                class="singers" @click="toSinger(item.id)">
              <img :src="item.img1v1Url" alt="" @load="onImgLoad">
              <p class="descript">歌手：{{item.name}}（{{item.alias[0]}}）</p>
            </li>
            <li v-for="(item, index) in result.playlists" :key="`p_${index}`"
                class="playlists" @click="toPlaylist(item.id)">
              <img :src="item.coverImgUrl" alt="" @load="onImgLoad">
              <p class="descript">歌单：{{item.name}}（{{item.description}}）</p>
            </li>
          </ul>
        </div>
        <div class="songs">
          <header>
            <h2>单曲</h2>
            <div class="playAll">
              <n-icon href="pause_b"></n-icon>
              <span @click="playAll">播放全部</span>
            </div>
          </header>
          <main>
            <n-list-item v-for="(song, index) in result.songs" :key="`s_${index}`"
                         :song="song.name" :index="index" :album="song.album"
                         :artist="song.artist" :showId="false"
                         @click="selectSong"
            ></n-list-item>
          </main>
        </div>
      </div>
    </n-scroll>
  </div>
</template>

<script>
  import NListItem from '@/base/NListItem'
  import NIcon from '@/base/NIcon'
  import {mapActions} from 'vuex'
  import NScroll from '@/base/NScroll'
  import {playlistMixin} from '@/common/js/mixin'

  export default {
    name: "Suggest",
    props: {
      result: {
        type: Object
      }
    },
    mixins: [playlistMixin],
    components: {
      NListItem,
      NIcon,
      NScroll
    },
    computed: {
      songData() {
        return this.result.songs ? this.result.songs : []
      }
    },
    methods: {
      selectSong(index) {
        this.clearSong()
        this.playSong({
          playlist: this.result.songs.slice(),
          index
        })
      },
      playAll() {
        this.playSong({
          playlist: this.result.songs.slice(),
          index: 0
        })
      },
      onImgLoad() {
        this.$refs.scroll.refresh()
      },
      adjustPlaylist(playlist) {
        const bottom = playlist.length ? '180px' : ''
        this.$refs.scroll.$el.style.bottom = bottom
        this.$refs.scroll.refresh()
      },
      toSinger(id){
        this.$router.push(`/singer/${id}`)
      },
      toPlaylist(id) {
        this.$router.push(`/recommand/${id}`)
      },
      ...mapActions([
        'playSong',
        'clearSong'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";

  .suggest {
    padding: 0 45px;

    .scrollWrapper {
      position: fixed;
      top: 233px;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      padding: 0 45px;
      box-sizing: border-box;
      .scrollContent {
        .guess {
          margin-bottom: 120px;

          p.title {
            font-size: $font-size-medium-m;
            color: $color-text-l;
            padding-bottom: 36px;
          }

          ul {
            li {
              font-size: $font-size-medium-x;
              padding-bottom: 26px;
              display: flex;
              align-items: center;

              p.descript {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                padding: 10px 0;
              }

              img {
                width: 140px;
                margin-right: 36px;
              }

              &.singers {
                img {
                  border-radius: 50%;
                }
              }
            }


          }
        }

        .songs {
          font-size: $font-size-medium-x;

          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 46px;

            .playAll {
              border: 4px solid $color-theme-w;
              font-size: $font-size-medium;
              padding: 20px 26px;
              border-radius: 60px;
            }
          }
        }
      }

    }

  }

</style>