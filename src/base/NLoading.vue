<template>
  <div>
    <n-icon href="loading" class="icon"></n-icon>
  </div>
</template>

<script>
  import NIcon from '@/base/NIcon'
  export default {
    name: "NLoading",
    components: {
      NIcon
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


  .icon {
    animation: rotate .5s linear infinite ;
  }
</style>