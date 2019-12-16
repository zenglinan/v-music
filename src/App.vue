<template>
  <div id="app">
    <n-header></n-header>
    <router-view></router-view>
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