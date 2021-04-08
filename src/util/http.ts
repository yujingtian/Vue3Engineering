import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { consoleTestResultHandler } from "tslint/lib/test"
import { getToken } from "@/util"

const instance: AxiosInstance =  axios.create({
    baseURL:"/api/",
    timeout:5000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
});

instance.interceptors.request.use((config:AxiosRequestConfig) => {
      if(!config.headers.hasOwnProperty('no-loading') || !config.headers['no-loading']) {
        // showLoading()
      }
      config.headers.token = getToken("csurfToken")
      if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        // config.data = signRequestData(config.url, config.data)
      } else if (config.headers['Content-Type'] === 'application/json') {
        config.data = JSON.stringify(config.data)
      }
    return config
},(error : any) => {
    console.log(error)
    return Promise.reject(error)
})


instance.interceptors.response.use((response:AxiosResponse<any>) => {
    // hideLoading()
    const res:any = response.data
    if (res.code === 10000 || res.success || res.handle === 1 || res.ret === 200 || res.status === 1 || res.result === 0) {
      return res
    } else {
      console.log("response",response.data)
      if(res.code === 30000){
        window.location.href = "/"
      }
    //   showToast({
    //     message: res.message || res.errorMsg || res.error_msg || res.msg ||'服务器错误',
    //     duration: 5 * 1000
    //   })
      return Promise.reject({message: res.message || res.errorMsg || res.error_msg || res.msg || '服务器错误', response: res})
    }
},(error:any) => {
    // hideLoading()
    console.log('err' + error) // for debug
    // showToast({
    //   message: '网络异常，请重试!',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
})


export default instance

