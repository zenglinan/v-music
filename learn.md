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