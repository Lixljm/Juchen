const {override,fixBabelImports,addWebpackAlias} = require("customize-cra");
const path = require("path");
module.exports = override(
    fixBabelImports('import',{
        libraryName:"antd-mobile",
        libraryDirectory : 'es',
        style:'css'
    }),
    addWebpackAlias({
        ["@"]:path.resolve(__dirname,"./src"),
        ["@views"]:path.resolve(__dirname,"./src/views"),
        ["@components"]:path.resolve(__dirname,"./src/components")
    })
)