module.exports = {
  // configureWebpack: {
  //   devServer: {
  //   //  proxy: "http://localhost:5056/"
  //     proxy: {
  //       '/api/': {
  //         target: 'http://localhost:5056/',
  //         pathRewrite: { '^/api': '' },
  //         changeOrigin: true,
  //       },
  //       // router(req) {
  //       //  return `http://localhost:5056`
  //       // }
  //     },
  //     // https: true
       
  //   }
  // }

//   proxy: {
//     '/': {     //这里最好有一个 /
//         target: 'https://localhost:7024',  // 后台接口域名
//         ws: true,        //如果要代理 websockets，配置这个参数
//         secure: true,  // 如果是https接口，需要配置这个参数
//         changeOrigin: true,  //是否跨域
//         pathRewrite:{
//             '^/api':''
//         }
//     }
// }
}