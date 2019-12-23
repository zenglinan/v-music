<template>
  <svg :width="size" :height="size" viewBox="0 0 200 200" @click="emitClick">
    <circle
            cx="100"
            cy="100"
            :r="r"
            stroke-width="8"
            :stroke="innerBg"
            fill="none"
    ></circle>
    <circle
            cx="100"
            cy="100"
            :r="r"
            stroke-width="8"
            :stroke="outerBg"
            fill="none"
            transform="rotate(-90, 100, 100)"
            :stroke-dasharray='dasharray'
    ></circle>
  </svg>
</template>

<script>
  export default {
    name: "NProgressCircle",
    data(){
      return {
        r: 92
      }
    },
    computed: {
      dasharray(){
        if(!this.percent) {
          this.percent = 0
        }
        const round = 2 * Math.PI * this.r  // 周长
        return `${this.percent * round} ${round}`
      }
    },
    props: {
      size: {
        type: String | Number,
        default: 100
      },
      innerBg: {
        type: String
      },
      outerBg: {
        type: String
      },
      percent: {
        type: String | Number,
      }
    },
    methods: {
      emitClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped lang="scss">

</style>