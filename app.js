const Koa = require('koa');
const KoaStatic = require('koa-static');
const KoaProxy = require('koa-proxies');
const KoaMount = require('koa-mount');

const app = new Koa();

// app.use(KoaProxy('/ar-demo', {
//     target: 'http://localhost:7777',
//     changeOrigin: false,
//     rewrite: path => {
//         return path.replace('/ar-demo', '')
//     },
//     logs: true
// }));

app.use(KoaMount('/ar-demo', KoaStatic('./')));

app.listen('7777');