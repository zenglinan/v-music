<template>
  <div id="mine">
    <div class="userMessage">
      <div class="avatar">
        <n-icon href="no-login"></n-icon>
      </div>
      <div class="username">
        <span class="name">点击登录</span>
        <span class="phrase">音乐的力量</span>
      </div>
    </div>
  </div>
</template>

<script>
  import NIcon from '@/base/NIcon'

  export default {
    name: "Mine",
    components: {
      NIcon
    }
  }
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";

  #mine {
    margin: 0 -45px;
  }
  .userMessage {
    display: flex;
    font-size: $font-size-medium-m;
    margin-bottom: 40px;
    .avatar {
      padding: 0 48px 0 78px;
      font-size: 120px;
    }
    .username {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .phrase {
        font-size: $font-size-small-x;
        color: $color-text-l;
      }
    }
  }

</style>