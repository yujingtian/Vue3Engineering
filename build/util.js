const config = require("./config")
const path = require("path")

exports.assetsPath = function( _path ){
    const assetsSubDirectory = config.build.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}