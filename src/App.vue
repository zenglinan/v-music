<template>
  <div id="app">
    <n-header></n-header>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/mixin.scss";

  @include fade;
</style>
