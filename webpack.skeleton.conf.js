const path = require('path')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    target: 'node',
    entry: {
        skeleton: './src/skeleton.entry.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                      loader: 'sass-loader',
                      options: {
                        implementation: require('dart-sass')
                      }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ],
    },
    externals: nodeExternals({
        whitelist: /\.css$/
    }),
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new VueLoaderPlugin(),
        new VueSSRServerPlugin({
            filename: 'skeleton.json',
        })
    ]
}
