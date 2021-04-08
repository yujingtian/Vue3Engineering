import http from "@/util/http"

export function getSystemInfo():Promise<any>{
    return http.request({
        url: "getSystemInfo",
        method: "get",
    })
}

export function login(data:any):Promise<any>{
    return http.request({
        url: "login",
        method: "post",
        params: data
    })
}

export function logout():Promise<any>{
    return http.request({
        url: "logout",
        method: "post"
    })
}