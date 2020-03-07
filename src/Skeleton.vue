<template>
  <transition name="fade">

  <div class="skeleton">
    <div class="header">
      <div class="circle item"></div>
      <div class="container">
        <div class="rect item"></div>
        <div class="rect item"></div>
      </div>
      <div class="circle item"></div>
    </div>
    <div class="swiper">
      <div class="item"></div>
    </div>
    <div class="list">
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
      <div class="list-item"><div class="img item"></div><p class="item"></p></div>
    </div>
  </div>
  </transition>
</template>

<style lang="scss" scoped>
  @import "common/scss/mixin.scss";

  @include fade;
.item {
  background-color: rgb(238, 238, 238);
  &::after {
    background-color: rgb(194, 207, 214);
    background-image: linear-gradient(90deg,rgba(255, 255, 255, 0.15) 25%, transparent 25%);
    background-size: 20rem 20rem;
    animation: skeleton-stripes 1s linear infinite;
  }
}
@keyframes skeleton-stripes {
  from {
    background-position: 0 0 ;
  }
  to {
    background-position: 20rem 0;
  }
}
.skeleton {
  box-sizing: border-box;
  background: #fff;

  .header {
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;

      .rect {
        height: 62px;
        width: 100px;
        margin-right: 56px;
        &:nth-child(2) {
          margin-right: 0;
        }
      }
    }

    .circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .swiper {
    padding-bottom: 130px;

    .item {
      width: 100%;
      height: 380px;
      border-radius: 16px;
    }
  }
  .list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    .list-item {
      display: flex;
      flex-direction: column;
      padding-top: 60px;
      border-radius: 6px;
      .img {
        width: 312px;
        height: 312px;
      }
      p {
        width: 312px;
        height: 106px;
        margin-bottom: 0;
        margin-top: 22px;
      }
    }
  }
}

</style>
