<template>
  <div id="app">
    <n-header></n-header>
    <keep-alive>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
  import NHeader from '@/components/NHeader'

  export default {
    name: "App",
    components: {
      NHeader
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/mixin.scss";

  @include fade;
</style>