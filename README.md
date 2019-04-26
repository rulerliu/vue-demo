# demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

npm install element-ui --save

npm install axios --save

npm install mint-ui --save

npm install qrcode --save

npm install iview --save

npm install store --save

npm install lodash --save

npm install build --save

npm install vux --save

npm install vuex --save


cnpm install stylus-loader css-loader style-loader --save-dev
cnpm install less less-loader --save-dev


module.exports赋值给webpackConfig
const vuxLoader = require('vux-loader')
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})


node_modules/less-loader/dist/index.js
less-loader方法添加options.javascriptEnabled = true
