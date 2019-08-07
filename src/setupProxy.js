const proxy = require("http-proxy-middleware");
module.exports = function(app){
     app.use("/jucheng",proxy({
         target:"https://m.juooo.com",
         changeOrigin:true,
         pathRewrite:{
             "^/jucheng":""
         }
     }));
    app.use("/juchengapi",proxy({
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/juchengapi":""
        }
    }))
}
