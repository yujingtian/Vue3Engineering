import { RouteRecordRaw } from "vue-router"
import StayHandle from "../../view/Task/stayHandle/index.vue"
import Warning from "../../view/Task/warning/index.vue"

const recode:RouteRecordRaw[] = [
    {
        path:"StayHandle",
        name:"StayHandle",
        meta:{ title:"我的代办" },
        component:StayHandle
    },
    {
        path:"Warning",
        name:"Warning",
        meta:{ title:"我的预警" },
        component:Warning
    }
]

export default recode