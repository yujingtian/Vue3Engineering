import { RouteRecordRaw } from "vue-router"
import MyNotice from "../../view/noticeCenter/myNotice/index.vue"

const recode:RouteRecordRaw[] = [{
    path:"MyNotice",
    name:"MyNotice",
    meta:{ title:"我的消息" },
    component:MyNotice
}]

export default recode