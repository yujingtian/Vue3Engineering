import { RouteRecordRaw } from "vue-router"
import Home from "../../view/Home/home.vue"

const recode:RouteRecordRaw[] = [{
    path:"home",
    name:"home",
    meta:{ title:"工作台" },
    component:Home
}]

export default recode