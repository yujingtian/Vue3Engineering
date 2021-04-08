import { createApp } from 'vue'
import "@/assets/fonts/iconfont.css"
import "@/assets/less/font-awesome.min.less"
import App from './view/app.vue'
import { store, NavList, navifExist} from "./store/index"
import router from "./router/index"


const exclude = ["/login"]

router.beforeEach((to, from, next) => {
    console.log(to.path)
    if(exclude.indexOf(to.path) === -1){
        const ifExist = navifExist(to.path)
        if(!ifExist){
            store.dispatch("AllActiveTofalse")
            store.dispatch("navListPush", {
                title:to.query.navTitle || to.meta.title,
                url:to.path,
                active:true
            })
        }
    }
    next()
})

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
