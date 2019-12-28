<template>
  <header>
    <div>
      <n-icon href="option"></n-icon>
    </div>
    <div class="title">
      <ul>
        <li><router-link tag="div" to="/recommand">推荐</router-link></li>
        <li><router-link tag="div" to="/singer">歌手</router-link></li>
        <li><router-link tag="div" to="/mvideo">MV</router-link></li>
        <li><router-link tag="div" to="/mine">我的</router-link></li>
      </ul>
    </div>
    <div class="search">
      <n-icon href="search" @click="toSearch"></n-icon>
    </div>
  </header>
</template>

<script>

  import NIcon from '../base/NIcon'
  export default {
    name: "NHeader",
    components: {
      NIcon
    },
    methods: {
      toSearch() {
        this.$router.push('/search')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";

  header {
    font-size: $font-size-medium-x;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $color-text-l;
    height: 10vh;

    .title {
      ul {
        display: flex;
        align-items: flex-end;
        li {
          margin-right: 56px;
          &:last-child {
            margin-right: 0;
          }
          div.router-link-active{
            transition: font-weight .4s;
            font-size: $font-size-large;
            color: $color-text;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>