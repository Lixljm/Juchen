const proxy = require("http-proxy-middleware");
module.exports = function(app){
     app.use("/jucheng",proxy({
         target:"https://m.juooo.com",
         changeOrigin:true,
         pathRewrite:{
             "/^jucheng":""
         }
     }))
}