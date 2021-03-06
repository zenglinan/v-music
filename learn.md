 1. swiper loop 失效

 2. 将控制台的 json 复制到剪贴板
1. 保存为全局变量 tmp
2. 运行 copy(tmp)，此时就保存在粘贴板中了

 3. 文字分行

 4. 多行文本溢出省略

 5. better-scroll 踩坑
1. 使用三部曲：
- scroll 组件包裹单一子元素
- wrapper 比 content 高度低
- 异步获取 data 时要传入 data 以便异步更新高度

2. 踩坑
- wrapper 必须小于 content 的高度
- 滚动无法到底：因为滚动部分是异步加载的图片，有轮播图片和列表图片两部分。
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
3. wrapper （可滚动区域）高度的设置：
```css
.wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
}
```
然后获取滚动区域上面部分的高度，覆盖设置的 top 值

 6. vue-lazyload 实现懒加载
- v-lazy
- 监听 scroll 组件的滚动事件，滚动到底的时候加载更多数据
- 可以在组件中重置loading图片
 7. keep-alive 包裹 router-view，防止切换 router 的时候重新初始化组件

 8. 歌单列表加载时的 loading 动画

 9. 推荐歌单页面：滑动到底后请求更多数据
- 监听 scroll 事件
- scroll 事件的回调中，通过比对当前滚动值和最大滚动值，如果小于一定数值，进行数据请求

 10. axios 的用法
- axios.create({}) 对 axios 进行包装

 11. 请求 offset 数据偏移

 12. 歌手跳转到歌手详情：铺满全屏的遮罩层
```css
.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background: white;
}
```

 13. router-view 可以使用过渡 transition

 14. vuex 的 log 功能和严格模式
```javascript
import logger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // ...
  strict: debug,  // 严格模式下，非 mutations 修改 state 会触发报错
                  // 保证 logger 可以跟踪 state 的状态变化
  plugins: debug ? [logger()] : []
})

```

 15. 在歌手详情页面进行刷新的时候，singer 变为空，此时应该回退到 singer 页面

 16. 歌手详情页面的效果：
 - 通过设置 div ```padding-top``` 填充背景图片高度
 - scroll 区域通过获取图片高度设置 top 值
 - layer 层通过 ```position: relative; height: 100%``` 设置其为满屏高度
 - layer 层通过监听 scroll 事件，改变 top 值，实现音乐模块上滑效果
 - 为 layer 层设置一个上滑的阈值 minScrollY，使其滑到一定高度时无法上滑。
 - 上滑到极限的时候，再滑动时，歌曲列表文字会显示在背景图上层
 - 解决方法是：当 scrollY 小于 minScrollY 时，改变背景图片的高度至 SPACE （空隙值），同时要调整 z-index 的值
 - 下拉时，图片随拉伸放大：
```javascript
const percent = Math.abs(curScrollY / this.bgImgHeight)
const scale = 1 + percent
this.modifyStyle(this.$refs.bgImg, {
          transform: `scale(${scale})`,
          zIndex: zIndex.max
        })
```
同时，要注意设置：transform-origin: top; 保证从头部开始往下拉伸

17. scss：@mixin 和 @extend 的区别
@mixin 可以传递参数，@extend 不能。但 @extend 可以把多个元素的共享样式写成多元素选择器形式，如下：

```sass
.button {
  background: red;
}

.button1 {
  @extend button
}
.button2 {
  @extend button
}

/*会变成*/
.button1, .button2 {
  background: red;
} 
```

18. 优化：当偏移数据已经全部返回完之后，下滑到底也不再进行请求
19，开启加载的同时要限制关闭加载标志位，防止多次触发 scroll ，一次下拉到底产生多次加载
```javascript
if (posY < maxScrollY + 20 && this.allowToLoad) {
  this.loadingMore = true // 开启加载动画
  this.allowToLoad = false  // 是否允许加载的标志位
  this._getHotSongList()
}
```
本次加载完成后，将该标志位重新置位

20. 播放器内核的 Vuex 设计

21. 背景图片高斯模糊
```html
<div class="fullPlayer" v-show="fullScreen">
      <div class="background">
        <img :src="currentSong.albumPic" alt="">
      </div>
      <div class="background-layer"></div>
</div>
```
```sass
.fullPlayer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background: white;

    .background {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.6;
      filter: blur(20px);

      img {
        width: 100%;
        height: 100%;
      }
    }

    .background-layer {
      opacity: 0.3;
      filter: none;
      background: rgb(46, 48, 48);
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
}
```
22. CD 旋转动画

23. audio 的事件
canplay、error、timeupdate

24. 当 audio 没加载完的时候去切换上下曲，会导致 dom 发生错误，
可以用标志位避免，当 audio 派发 canplay 的时候才置位标志位，如果标志位为false，不允许切换
```javascript
if(!this.songReady) return  // 避免当前audio没加载完就去切换
```

25. 获得歌曲当前播放时间和总时间
```javascript
利用 audio 派发的 timeupdate 事件，获取当前时间和总时间
```

26. 进度条组件实现

29. 圆环进度条
```html
<svg width="240" height="240" viewBox="0 0 200 200">
  <circle
    cx="100"
    cy="100"
    r="70"
    stroke-width="30"
    stroke="#E5E5E5"
    fill="none"
  ></circle>
  <circle
    cx="100"
    cy="100"
    r="70"
    stroke-width="30"
    stroke="#506DFE"
    fill="none"
    transform="rotate(-90, 100, 100)"
    stroke-dasharray="220"
  ></circle>
</svg>
```
30. 打乱数组：shuffle

31. 歌曲播放模式切换注意点：更改 currentIndex 为当前歌曲在新队列中的索引

32. 播放完成后，通过 audio 派发的ended事件手动进行切换

33. 修复bugs：
(1) svg 初始显示错误
原因：
初始 percent 为 currentTime / duration(0/xxx)，为NaN

(2) 修复随机模式下，点击歌手详情页的歌曲，播放出现错乱的bug
原因：
点击歌手详情的歌曲进行播放时，传过去的songs列表没有进行一次深拷贝，
直接传了引用过去，导致随机模式下vuex 中的歌曲列表被修改，
歌手详情中的 this.songs 也被修改了。

(3) 快速切歌报错
原因：
audio 的 play 方法是异步的，在还没执行之前被打断会报错

34. 歌词相关
歌词解析：lyric-parser
歌词跟随进度条改变
歌词条数大于5时，进行滚动，保持高亮歌词位于中间，小于5时，滑动歌词可以回弹到顶
loop模式下，播放完成时，将歌词回退到开始
切歌的时候，歌词回弹到顶

35. 歌单详情
将music-list组件抽离为公共组件，供歌手详情和歌单详情使用

36. 编程式调用 watch
```javascript
this.$watch('xxx', (newVal) => {
})
```

37. input 光标的颜色
```javascript
caret-color
```

38. 在method中使用闭包的this问题

39. axios 并发请求

40. 构造类 Result，用于处理搜索结果，构造出更合适的数据结构

41. mixin

42. 歌曲列表组件向上滑动出现的动画
```scss
.slideUp-enter-active, .slideUp-leave-active {
    transition: opacity .3s;

    .playlist {
      transition: transform .4s;
    }
}

.slideUp-enter, .slideUp-leave-to {
    opacity: 0;
    
    .playlist {
      transform: translateY(100%);
    }
}
```

43. 长列表滚动优化
(1) 将列表切片展示
(2) 将图层提升
