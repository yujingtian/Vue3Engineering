import http from "@/util/http"

export function userSessionGet():Promise<any>{
    return http.request({
        url: "user/session/get",
        method: "post",
    })
}

export function zaMenuList():Promise<any>{
    return http.request({
        url: "za/menu/list",
        method: "post",
        params:{st: 'CLS_WEB_BEFORE'}
    })
}