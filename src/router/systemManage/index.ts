import { RouteRecordRaw } from "vue-router"
import User from "../../view/systemManage/user/index.vue"

const recode:RouteRecordRaw[] = [{
    path:"user",
    name:"User",
    component:User
}]

export default recode