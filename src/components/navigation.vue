<template>
    <div class="main_header relative border-b-eee">
        <div class="zIndexBottom bg-blue2 Wpercent100 h62 flex align-items justify-content-sb white pr30 pl30">
            <div class="flex align-items-c">
                <img class="h38 w38" src="../assets/images/xingchi-logo.png" alt="">
                <div class="fs22 ml10">webpack5 + Vue3 + typescript后台管理系统模板</div>
            </div>
            <div class="flex align-items-c relative">
                <img src="../assets/images/notice.png" class="mr8" alt="">
                <div class="mr30 fs14 pointer textSpacing1">消息</div>
                <img src="../assets/images/user.png" class="mr8" alt="">
                <div class="mr8 fs14 pointer textSpacing1" @click="accountHandler">{{$store.state.name}}</div>
                <img src="../assets/images/down.png" class="pointer" alt="" @click="accountHandler">
                <div v-if="ifAccount" class="absolute text-center w100 top60 c-999 fs14 line-height42 border pt15 pb15 bg-white left75" style="z-index:1000">
                    <div class="absolute textborder left50" style="top:-26px">
                        <img src="../assets/images/triangle.png" alt="">
                    </div>
                    <!-- <div class="textSpacing3 pointer pl12 pr12 hover">修改密码</div> -->
                    <div class="textSpacing3 pointer pl12 pr12 hover" @click="logout">退出登录</div>
                </div>
            </div>
        </div> 
        <div class="nav h39 Wpercent100 flex justify-content-sb">
            <div class="w40 h40 flex align-items-c justify-content-c border-r-eee pointer bg-white" style="z-index:100" @click="navMoveLeft">
                <i class="fa fa-backward fs15" style="color: #D4D4D4;"></i>
            </div>
            <div class="navList flex c-999 fs14 transition" style="flex:1;overflow-x:hidden" ref="navListBox" :style="{'marginLeft':'0px'}">
                <div v-for="(item, index) in $store.state.navList" class="pl10 pr10 border-r-eee flex align-items-c pointer" :class="{'active':item.active}">
                    <div @click="navSelect(item)" class="mr4 nowrap">{{item.title}}</div>
                    <i v-if="item.url !== '/main/home'" @click="closeNav(item.url, index)" class="fa fa-times-circle"></i>
                </div>
            </div>
            <div class="flex bg-white"  style="z-index:100">
                <div class="w40 h40 flex align-items-c justify-content-c border-r-eee border-l-eee pointer" @click="navMoveRight">
                    <i class="fa fa-forward fs15" style="color: #D4D4D4;"></i>
                </div>
                <div class="flex align-items-c border-r-eee pl10 pr10 pointer" @click="navHandler">
                    <div class="c-999 fs14 mr3">关闭操作</div>
                    <img class="w7 h7" src="../assets/images/arrow.png" alt="" style="transform:rotate(90deg)">
                </div>
                <div v-if="ifNav" class="absolute c-999 fs14 line-height42 border pt15 pb15 bg-white right0" style="top:100px">
                    <div class="textSpacing3 pointer pl12 pr12 hover" @click="closeOther">关闭其他选项卡</div>
                    <div class="textSpacing3 pointer pl12 pr12 hover" @click="closeAll">关闭所有选项卡</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { logout } from "../api/login"

interface navItem{
    name:string
    path?:string
}

interface dom{
    scrollWidth?:number
    clientWidth?:number
    scrollTop?:number
    style?:style
}

interface style{
    marginLeft:string
}

export default class Nav extends Vue{
    private navList:Array<navItem> = []
    private dom:dom = {}
    private cacheWidth:number = 0
    private ifNav:boolean = false
    private ifAccount:boolean = false
    created(){
        console.log(this.$store.state.navList)
    }
    mounted(){
        this.dom = <dom>this.$refs.navListBox
    }
    private accountHandler(){
        this.ifAccount = !this.ifAccount
    }
    private navHandler(){
        this.ifNav = !this.ifNav
    }

    private navMoveLeft(){ 
        const num:number = this.cacheWidth || Number(this.dom.style!.marginLeft.slice(0, -2))
        if(Math.abs(num) <= 0){
            return
        }
        if(num){
            let move:number = 120
            if(Math.abs(num) <= 50){
                move = Math.abs(num)
            }
            this.cacheWidth = num + move
            this.dom.style!.marginLeft = (num + move) + "px"
        }
    }

    private navMoveRight(){
        const num:number = this.cacheWidth || Number(this.dom.style!.marginLeft.slice(0, -2))
        if(num >= (this.dom.scrollWidth! - this.dom.clientWidth!)){
            return
        }
        if(num === 0 || num){
            let move:number = 120
            if(this.dom.scrollWidth! < (this.dom.clientWidth! + this.dom.scrollTop!) + 50){
                move = this.dom.scrollWidth! - this.dom.clientWidth! -this.dom.scrollTop!
            }
            this.cacheWidth = num - move
            this.dom.style!.marginLeft = (num - move) + "px"
        }
    }

    private navSelect(data:any){
        this.$store.commit("navActive", data.url)
        this.$router.push(data.url)
    }

    private closeOther(){
        this.$store.commit("navListOtherDel")
        this.ifNav = !this.ifNav
    }

    private closeAll(){
        this.$store.commit("navListAllDel")
        this.$router.push("/main/home")
        this.ifNav = !this.ifNav
    }

    private closeNav(data:any, index:any, item:any){
        console.log(index)
        this.$store.commit("navListThisDel",data)
        const prev = this.$store.state.navList[index - 1]
        this.$store.commit("navActive", prev.url)
        this.$router.push( prev.url )
    }

    private logout(){
        logout().then(res => {
            if(res.code === 10000 || res.code === 30000){
               this.$router.push("/login") 
            }
        })
    }
    
}
</script>
<style lang="less" scoped>
    .active{
        border-bottom: 2px solid #5A8CFF;
        color: #5A8CFF;
    }
</style>