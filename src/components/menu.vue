<template>
    <div class="w250 Hpercent100 main_left pointer bg-white absolute">
            <div class="main_logo h62 bg-blue flex align-items-c justify-content-c">
                <img class="h34" src="../assets/images/logo_chesheng.png" alt="">
            </div>
            <div class="main_tree mt40">
                <ul>
                    <li v-for="node in menuList">
                        <a class="h48 Wpercent100 flex align-items-c pl32 pr32 bg-white" @click="menuClick(node)">
                            <div class="iconfont h24 w24 fs24" :class="node.icon"></div>
                            <span class="ml10 fs15 fwb c-333">{{node.nodeName}}</span>
                            <div class="ml80 transition" :class="{'arrowRotate': node.openStatus}"> <img class="w7" src="../assets/images/arrow.png" alt=""></div>
                        </a>
                        <ul class="zIndexBottom transition overflow-h" :style="{'height':heightAuto(node, 2)}">
                            <li v-for="item in node.children">
                                <span class="h40 Wpercent100 flex align-items-c pl66 pr32 fs14">{{item.nodeName}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';

interface menuItem{
    nodeName:string
    openStatus?:boolean
    children?:Array<menuItem>
    path?:string
    icon?:string
}

export default class Menu extends Vue {
    private ifabsolute = false
    private menuList:Array<menuItem> = [
        {
            nodeName:"任务中心",
            openStatus:false,
            icon:'xc1',
            children:[
                {
                   nodeName:"我的代办",
                },
                {
                   nodeName:"我的预警",
                },
            ]
        },
        {
            nodeName:"消息中心",
            openStatus:false,
            icon:'xc2',
            children:[
                {
                   nodeName:"我的消息",
                }
            ]
        },
    ]
    private menuClick(node:menuItem) {
        node.openStatus = !node.openStatus
    }
    private heightAuto(node:menuItem, num : number){
        if(node.openStatus){
            return (40 * num) + "px";
        }else{
            return 0 + "px"
        }
    }
}
</script>
<style lang="less" scoped>
    .main_left{
        box-shadow: 5px 0px 10px 0px rgba(90,140,255,0.1);
    }
    .arrowRotate{
        transform: rotate(90deg);
    }
</style>