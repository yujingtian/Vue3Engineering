module.exports = {
    dev:{
        publicPath:"/",
        devServer:{
            host:"0.0.0.0",
            port:"1995",
            allowedHosts:[],
            compress: true,  
            proxy: {
                '/api': {
                    target: 'http://192.168.26.39:8080',
                    pathRewrite: {
                        "^/api": "/" 
                    },
                    changeOrigin: false
                },
            }
        }
    },
    build:{
        publicPath:"/",
        assetsSubDirectory:"static",
        productionSourceMap:false
    }
}