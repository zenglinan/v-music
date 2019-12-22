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
      // 当传入的 percent 发生变化时，改变 content 的宽度
      percent(percent) {
        if(percent > 0 && !this.startDrag){ // !this.startDrag 是为了防止拖拽进度条的时候，歌曲保持播放也在改变content宽度，使宽度冲突
          // content 宽度随歌曲播放而增长
          const wrapperWidth = this.$refs.wrapper.getBoundingClientRect().width
          const contentWidth = wrapperWidth * percent
          this.$refs.content.style.width = `${contentWidth}px`
        }
      }
    },
    methods: {
      onTouchStart(e) {
        this.startDrag = true // 开始拖拽的标志位
        // 记录起始位置、content 起始宽度
        this.startX = e.touches[0].pageX
        this.originContentWidth = this.$refs.content.getBoundingClientRect().width
      },
      onTouchMove(e) {
        if(!this.startDrag) return
        this.newContentWidth =  // content 的新宽度：>0 && <wrapper宽度
            Math.max(0,
                Math.min(
                    this.originContentWidth + e.touches[0].pageX - this.startX,
                    this.$refs.wrapper.getBoundingClientRect().width
                )
            )
        this.$refs.content.style.width = `${this.newContentWidth}px`
      },
      onTouchEnd() {
        // 对外派发事件，更改 audio 的 currentTime
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