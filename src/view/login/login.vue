<template>
    <div id="login">
        <div class="absolute mt30 ml30">
            <img src="../../assets/images/logo_chesheng.png" alt="">
        </div>
        <div class="loginContainer absolute Wpercent100 Hpercent100 flex justify-content-c align-items-c">
            <div class="w500 h340 bg-white inputBox border-radius5">
                <div class="flex login_title justify-content-c">
                    <img class="w38 h38 mr20" src="../../assets/images/xingchi.png" alt="">
                    <div class="fs24 white textSpacing3">星驰-消费分期系统</div>
                </div>
                <div class="p10 flex justify-content-c direction-c align-items-c">
                    <div class="flex align-items-c mt60 mb25">
                        <div class="textSpacing5 fs16 mr20">账号</div>
                        <div>
                            <input type="text" class="h50 w360 fs16 pl12">
                        </div>
                    </div>
                    <div class="flex align-items-c">
                        <div class="textSpacing5 fs16 mr20">密码</div>
                        <div>
                            <input type="text" class="h50 w360 fs16  pl12">
                        </div>
                    </div>
                </div>
                <div class="loginBtn h50 w400 white textSpacing4 ml40 fs20 line-height50 border-radius4 mt60">登录</div>
            </div>
        </div>
        <div class="link Wpercent100 absolute bottom50 flex justify-content-c align-items-c">
            <div>
                <span class="border-bb">服务热线</span>
                <div class="fs14 c-999 line-height30 textSpacing1 mt5">0571-28322682(工作日9:30-18:00）</div>
            </div>
            <div class="mr50 ml50">
                <span class="border-bb">技术支持</span>
                <div class="fs14 c-999 line-height30 textSpacing1 mt5">车盛科技-v金融科技综合解决方案提供商</div>
            </div>
            <div>
                <span class="border-bb">星·云系列</span>
                <div class="fs14 c-999 line-height30 textSpacing1 mt5">业务管理、风控监测、贷后催收、数据服务</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component"

interface name{
    name:String
}

export default class Login extends Vue {
    data():name{
        return {
            name:"俞菁田"
        }
    }  
}
</script>
<style lang="less">
#login{
    background: url("../../assets/images/bg_login2.png") no-repeat;
    background-size: 100% 100%;
    height:100%;
}
.login_title{
    margin-top:-60px;
}

input{
    letter-spacing: 0.4px;
    color: #5A8CFF;;
    border: 1px solid rgba(233, 233, 233, 1);
    border-radius: 4px;
    outline: none!important;
}
.loginBtn {
    display: block;
    outline: none;
    border: none;
    text-align: center;
    background-color: #598CFE;
}
.inputBox{
    box-shadow: 0px 4px 10px 0px rgba(51,51,51,0.1);
}
</style>