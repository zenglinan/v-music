<template>
  <div class="songItem" @click="emitClick">
    <span class="id" v-if="showId">{{index+1}}</span>
    <main>
      <p class="name">{{song}}</p>
      <p class="desc">
        <span>{{artist}}</span>
        <span> - {{album}}</span>
      </p>
    </main>
    <div class="options">
      <n-icon href="video"></n-icon>
      <n-icon href="more"></n-icon>
    </div>
  </div>
</template>

<script>
  import NIcon from '@/base/NIcon'
  import {mapGetters} from 'vuex'

  export default {
    name: "NListItem",
    props: {
      song: {
        type: String
      },
      artist: {
        type: String
      },
      album: {
        type: String
      },
      index: {
        type: Number
      },
      showId: {
        type: Boolean,
        default: true
      }
    },
    components: {
      NIcon
    },
    computed: {
      ...mapGetters([
        'playing'
      ])
    },
    methods: {
      emitClick(){
        this.$emit('click', this.index)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";

  .songItem {
    display: flex;
    align-items: center;
    font-size: $font-size-medium;
    color: $color-text-l;
    margin-bottom: 48px;

    .id {
      width: 12%;
      text-align: center;
    }
    main {
      width: 72%;
      flex-grow: 1;
      .name {
        font-size: $font-size-medium-m;
        color: $color-text;
        padding-bottom: 30px;
      }
      .desc {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        padding-bottom: 15px;
      }
    }
    .options {
      width: 16%;
      font-size: $font-size-large;
    }
  }

</style>
