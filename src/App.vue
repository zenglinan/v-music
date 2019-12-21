<template>
  <div id="app">
    <n-header></n-header>
    <keep-alive>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </keep-alive>
    <n-player></n-player>
  </div>
</template>

<script>
  import NHeader from '@/components/NHeader'
  import NPlayer from '@/components/Player'

  export default {
    name: "App",
    components: {
      NHeader,
      NPlayer
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/mixin.scss";

  @include fade;
</style>