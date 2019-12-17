<template>
  <div id="app">
    <n-header></n-header>
    <keep-alive>
      <router-view></router-view>
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

<style scoped>

</style>