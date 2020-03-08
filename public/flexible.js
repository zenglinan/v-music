const WIDTH = 1080   // 设计稿宽度
const mobileAdapter = () => {
  let scale = screen.width / WIDTH  // 缩放比
  let content = 'width=' + WIDTH + ', initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=0'
  let meta = document.createElement('meta')
  meta.setAttribute('name', 'viewport')
  document.head.appendChild(meta)
  meta.setAttribute('content', content)
}
mobileAdapter()
