<template>
  <div id="container">
      <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue{

}
</script>
<style lang="less">
@import "../assets/less/common.less";

#container{
  height:100%;
}
</style>