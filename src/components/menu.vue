<template>
    <div class="w250 Hpercent100 main_left pointer bg-white absolute">
            <div class="main_logo h62 bg-blue flex align-items-c justify-content-c">
                <img class="h34" src="../assets/images/logo_chesheng.png" alt="">
            </div>
            <div class="main_tree mt40">
                <ul>
                    <li v-for="node in menuList">
                        <a class="h48 Wpercent100 flex align-items-c pl32 pr32 bg-white" @click="menuClick(node)">
                            <div class="iconfont h24 w24 fs24" :class="node.logoTag"></div>
                            <span class="ml10 fs15 fwb c-333">{{node.menuName}}</span>
                            <div class="ml80 transition" :class="{'arrowRotate': node.openStatus}"> <img class="w7" src="../assets/images/arrow.png" alt=""></div>
                        </a>
                        <ul class="zIndexBottom transition overflow-h" :style="{'height':heightAuto(node, node.sysMenuList.length)}">
                            <li v-for="item in node.sysMenuList">
                                <span @click="moveTo(item)" :class="{'active':item.active}" class="h40 Wpercent100 flex align-items-c pl66 pr32 fs14">{{item.menuName}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
</template>
<script lang="ts">
import { zaMenuList } from '../api/main';
import { Vue } from 'vue-class-component';
import { navifExist } from "../store/index";

interface menuItem{
    menuName:string
    openStatus?:boolean
    sysMenuList?:Array<menuItem>
    url?:string
    logoTag?:string,
    active?:boolean
}

export default class Menu extends Vue {
    private ifabsolute = false
    private menuList:Array<menuItem> = [
        {
            menuName:"任务中心",
            openStatus:false,
            sysMenuList:[
                {
                    menuName:"我的代办",
                    url:"/main/StayHandle",
                    active:false
                },
                {
                    menuName:"我的预警",
                    url:"/main/Warning",
                    active:false
                },
            ]
        },
        {
            menuName:"消息中心",
            openStatus:false,
            sysMenuList:[
                {
                    menuName:"我的消息",
                    url:"/main/MyNotice",
                    active:false
                }
            ]
        },
    ]
    created(){
        this.getMenu()
    }
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
    private moveTo(item:any){
        const ifExist = navifExist(item.url)
        this.menuList.forEach(item1 => {
            if(item1.sysMenuList!.length > 0){
                item1.sysMenuList!.forEach(item2 => {
                    item2.active = false
                })
            }
        })
        item.active = true
        if(ifExist){
            this.$store.commit("navActive", item.url)
        }
        
        this.$router.push(item.url)
    }

    private getMenu(){
        zaMenuList().then(res => {
            if(res.code === 10000){
                // this.menuList = res.data
                console.log(res)
            }
        })
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
    .active{
        border-left: 4px solid #4878E6;
        background-color: #eff2fa;
        color: #4878E6;
    }
</style>