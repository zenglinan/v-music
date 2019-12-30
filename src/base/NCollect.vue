<template>
  <div class="collect">+ 收藏 ({{num}})</div>
</template>

<script>
  export default {
    name: "NCollect",
    props: {
      num: {
        type: String | Number
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";

  .collect {
    padding: 24px 40px;
    color: $color-text-w;
    background-color: $color-theme;
    border-radius: 60px;
  }
</style>