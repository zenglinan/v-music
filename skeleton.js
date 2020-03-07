const fs = require('fs')
const { resolve } = require('path')
const htmlMinifier = require('html-minifier')
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

// 将 template.html 写入 index.html
let tempData = fs.readFileSync(resolve(__dirname, './public/template.html'), 'utf-8')
fs.writeFileSync('./public/index.html', tempData, 'utf-8')
console.log('模板注入完成')

// 读取 skeleton.json，以 index.html 为模板写入内容
const renderer = createBundleRenderer(resolve(__dirname, './dist/skeleton.json'), {
    template: fs.readFileSync(resolve(__dirname, './public/index.html'), 'utf-8'),
})

console.log(renderer)

// 把上一步模板完成的内容写入 index.html
renderer.renderToString({}, (err, html) => {
    if (err) {
        console.log(err)
        return
    }
    html = htmlMinifier.minify(html, {
        collapseWhitespace: true,
        minifyCSS: true,
    })

    // 将渲染出的 html 覆盖 index.html
    fs.writeFileSync('./public/index.html', html, 'utf-8')
})
console.log('骨架屏注入完成')
