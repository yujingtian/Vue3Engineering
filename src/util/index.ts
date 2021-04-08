import { Md5 } from "ts-md5";
import { encode } from "base64-ts"

export function ToMd5(str:string): string | Int32Array{
    const result = Md5.hashAsciiStr(str)
    return result
}

export function Tobase64(str:Uint8Array):string{
    return encode(str)
}


export function setToken(name:string, value:string , seconds?:number) {
    seconds = seconds || 24 * 60 * 60;
    let expires = "";
    if (seconds !== 0) {
        const date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + escape(value) + expires + "; path=/"
}


export function getToken(cName:string) {
    if (document.cookie.length > 0) {
        let cStart = document.cookie.indexOf(cName + "=")
        if (cStart !== -1) {
            cStart = cStart + cName.length + 1
            let cEnd = document.cookie.indexOf(";", cStart)
            if (cEnd === -1)
            cEnd = document.cookie.length
            return unescape(document.cookie.substring(cStart, cEnd))
        }
    }
    return ""
}