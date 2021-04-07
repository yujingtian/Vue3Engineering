<template>
    <div id="main" class="Hpercent100">
        <div class="main_right absolute top0 calc" style="left:250px;">
            <Nav></Nav>
            <router-view></router-view>
        </div>
        <Menu></Menu>
    </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Menu from "@/components/menu.vue"
import Nav from "@/components/navigation.vue"

@Options({
    components:{
        Menu,
        Nav
    }
})
export default class Main extends Vue {
    
}
</script>
<style lang="less" scoped>
    .calc{
        width:calc(100% - 250px)
    }
    .hover:hover {
        background-color: #f5f5f5;
        color: #4878E6;
    }
</style>
