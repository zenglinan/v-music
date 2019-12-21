<template>
  <div class="barWrapper" ref="wrapper" @click="onProcessClick">
    <div class="barContent" ref="content">
      <div class="pointer" ref="pointer"
           @touchstart.prevent="onTouchStart"
           @touchmove.prevent="onTouchMove"
           @touchend.prevent="onTouchEnd"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NProgressBar",
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    watch: {
      percent(percent) {
        if(percent > 0 && !this.startDrag){
          // content 宽度随歌曲播放而增长
          const wrapperWidth = this.$refs.wrapper.getBoundingClientRect().width
          const contentWidth = wrapperWidth * percent
          this.$refs.content.style.width = `${contentWidth}px`
        }
      }
    },
    methods: {
      onTouchStart(e) {
        this.startDrag = true // 开始拖拽
        // 记录起始位置、content 起始宽度
        this.content = this.$refs.content
        this.startX = e.touches[0].pageX
        this.originContentWidth = this.content.getBoundingClientRect().width  // 改变前的content的宽度
      },
      onTouchMove(e) {
        if(!this.startDrag) return
        this.newContentWidth =  // content 的新宽度
            Math.max(0,
                Math.min(
                    this.originContentWidth + e.touches[0].pageX - this.startX,
                    this.$refs.wrapper.getBoundingClientRect().width
                )
            )
        this.content.style.width = `${this.newContentWidth}px`
      },
      onTouchEnd() {
        this.startDrag = false
        this.emitProcessChange(this.newContentWidth)
      },
      onProcessClick(e) {
        const newWidth = Math.max(0, e.offsetX)
        this.emitProcessChange(newWidth)
      },
      emitProcessChange(newWidth){
        const newPercent = newWidth / this.$refs.wrapper.offsetWidth
        this.$emit('processChange', newPercent)
      }
    }
  }
</script>

<style scoped lang="scss">
  .barWrapper {
    width: 64%;
    height: 16px;
    background-color: rgb(148, 138, 137);
    border-radius: 12px;

    .barContent {
      position: relative;
      width: 0;
      height: 100%;
      background-color: rgb(229, 229, 229);
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;

      .pointer {
        display: block;
        position: absolute;
        right: 0;
        border: 24px solid white;
        border-radius: 50%;
        top: 50%;
        transform: translate(50%, -50%);
      }
    }
  }

</style>