import { RouteRecordRaw } from "vue-router"
import User from "../../view/systemManage/user/index.vue"

const recode:RouteRecordRaw[] = [{
    path:"user",
    name:"User",
    meta:{ title:"用户管理" },
    component:User
}]

export default recode