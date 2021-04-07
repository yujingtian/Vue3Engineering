import { createApp } from 'vue'
import "@/assets/fonts/iconfont.css"
import "@/assets/less/font-awesome.min.less"
import App from './view/app.vue'
import Store from "./store/index"
import router from "./router/index"

createApp(App)
    .use(Store)
    .use(router)
    .mount('#app')
