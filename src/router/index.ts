import {createRouter, createWebHistory, RouteRecordRaw, Router, createWebHashHistory } from "vue-router"
import Login from "../view/login/login.vue"
import Main from "../view/main/index.vue"
import UserRecord from "./modules/user"

const routes:RouteRecordRaw[] = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        path:"/login",
        name:"Login",
        component:Login
    },
    {
        path:"/main",
        name:"Main",
        component:Main,
        children:[...UserRecord]
    }
]

const router:Router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router


