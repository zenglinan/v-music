#### swiper loop 失效

#### 将控制台的 json 复制到剪贴板
1. 保存为全局变量 tmp
2. 运行 copy(tmp)，此时就保存在粘贴板中了

#### 文字分行

#### 多行文本溢出省略

#### better-scroll
1. wrapper 必须小于 content 的高度
2. 滚动无法到底：因为滚动部分是异步加载的图片，有轮播图片和列表图片两部分。
不知道轮播图片和列表图片不知谁先完成请求，所以采取的操作是：

(1) 对于 list
```javascript
getHotSongList(600).then(res => {  // 获取指定条数的条歌单
  this.hotSongList = res.data.playlists
  this.$nextTick(() => {  // 用 nextTick 确保可以在获取完所有数据，并渲染后进行计算高度
    this.initScroll()
  })
})
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
