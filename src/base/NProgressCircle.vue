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
  const r = 92

  export default {
    name: "NProgressCircle",
    data(){
      return {
        r: 92,
        round: 2 * Math.PI * r
      }
    },
    computed: {
      dasharray(){
        if(!this.percent) {
          return `0 ${this.round}`
        } else {
          return `${this.percent * this.round} ${this.round}`
        }
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