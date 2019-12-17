#### 1. swiper loop 失效

#### 2. 将控制台的 json 复制到剪贴板
1. 保存为全局变量 tmp
2. 运行 copy(tmp)，此时就保存在粘贴板中了

#### 3. 文字分行

#### 4. 多行文本溢出省略

#### 5. better-scroll 踩坑
使用三部曲：
- scroll 组件包裹单一子元素
- wrapper 比 content 高度低
- 异步获取 data 时要传入 data 以便异步更新高度

1. wrapper 必须小于 content 的高度
2. 滚动无法到底：因为滚动部分是异步加载的图片，有轮播图片和列表图片两部分。
不知道轮播图片和列表图片不知谁先完成请求，所以采取的操作是：

(1) 对于 list，在 scroll 中 watch 传入的 listData，当发生变化时，进行 refresh，注意做好节流
```javascript
props: {
  data: {
    required: true
  }
}

export default {
  // ...
  watch: {
    data() {
      !this.timer && (this.timer = setTimeout(() => {
        this.refresh()
        this.timer = null
      }, 60))
    }
  }
}
```
(2) 对于 slide 的图片， 在其 load 之后进行刷新，该操作只需要进行一次即可，因为刷新一次后，高度就已经撑开了
```javascript
<img @load="onLoadImg('slide')">

onLoadImg(){
    if(!this.checkLoaded){  // 用一个标志位判断是否已经刷新过一次
      this.scroll.refresh()
      this.checkLoaded = true
    }
}
```

#### 6. vue-lazyload 实现懒加载
- v-lazy
- 监听 scroll 组件的滚动事件，滚动到底的时候加载更多数据
- 可以在组件中重置loading图片
#### 7. keep-alive 包裹 router-view，防止切换 router 的时候重新初始化组件

#### 8. 歌单列表加载时的 loading 动画

#### 9. 推荐歌单页面：滑动到底后请求更多数据
1. 监听 scroll 事件
2. scroll 事件的回调中，通过比对当前滚动值和最大滚动值，如果小于一定数值，进行数据请求

#### 10. axios 的用法
1. axios.create({}) 对 axios 进行包装

#### 11. 请求 offset 数据偏移