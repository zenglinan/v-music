<template>
  <div class="searchBox">
    <n-icon href="back_b" @click="back" class="back"></n-icon>
    <div class="input">
      <input type="text" v-model="query" :placeholder="placeholder">
      <n-icon href="clear" @click="clear" class="clear" v-show="query"></n-icon>
    </div>
    <n-icon href="center" @click="toCenter" class="center"></n-icon>
  </div>
</template>

<script>
  import NIcon from '@/base/NIcon'

  export default {
    name: "NSearchBox",
    props: {
      filler: {
        type: String
      },
      placeholder: {
        type: String,
        default: '搜索歌曲、歌手'
      }
    },
    data() {
      return {
        query: '',
      }
    },
    components: {
      NIcon
    },
    watch: {
      filler(newVal) {
        if(newVal === '') return
        this.query = newVal
      },
      query: (() => {
        let timer = null
        return function(newVal) {
          if(timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            this.$emit('queryChange', newVal)
          }, 500)
        }
      })()
    },
    methods: {
      clear() {
        this.query = ''
      },
      back() {
        this.$router.go(-1)
      },
      toCenter() {
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";

  .searchBox {
    display: flex;
    font-size: $font-size-large;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0 80px;

    .back {
      width: 15%;
    }

    .input {
      flex-grow: 1;
      font-size: $font-size-medium-x;
      position: relative;

      input {
        height: 90px;
        padding-left: 20px;
        color: $color-text;
        caret-color: rgb(0, 0, 0); /* 光标 */
        letter-spacing: .05em;
        border-bottom: 3px solid $color-text-l;

        &:focus {
          outline: none;
        }
      }

      .clear {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .center {
      width: 17%;
      font-size: $font-size-large;
    }
  }
</style>