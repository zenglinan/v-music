<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'

  export default {
    name: 'NScroll',
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        required: true,
        default: null
      }
    },
    mounted() {
      setTimeout(() => {
        this.initScroll()
        this.emitScrollEvent()
      }, 60)
    },
    methods: {
      initScroll() {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollY: true,
          click: true,
          probeType: 3
        })
      },
      emitScrollEvent(){
        let scrollHandler = this.throttle((e) => {
          this.$emit('scroll', e, {
            maxScrollY: this.scroll.maxScrollY,
            maxScrollX: this.scroll.maxScrollX
          })
        })

        this.scroll.on('scroll', scrollHandler)
      },
      throttle(fn){
        let timer = null
        return (args) => {
          !timer && (timer = setTimeout(() => {
            fn.call(this, args)
            timer = null
          }, 300))
        }
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    },
    watch: {
      data() {
        !this.timer && (this.timer = setTimeout(() => {
          this.refresh()
          this.timer = null
        }, 60))
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
