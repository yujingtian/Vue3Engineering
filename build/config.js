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
                    target: 'http://localhost:3000',
                    pathRewrite: {
                        "^/api": "" 
                    },
                    changeOrigin: true
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