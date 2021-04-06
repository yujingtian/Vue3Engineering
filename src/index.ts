import { createApp } from 'vue'
import App from './view/app.vue'
import Store from "./store/index"
import router from "./router/index"

createApp(App)
    .use(Store)
    .use(router)
    .mount('#app')
