<template>
  <div class='container'>
    <!-- 顶部全局组件 -->
    <HospitalTop />
    <div class="content">
      <router-view></router-view>
    </div>
    <HospitalBottom />
  </div>
</template>

<script lang='ts' setup name='YFK'>
import { RouterView } from 'vue-router';
//数据

//方法

</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 834px;
    margin-bottom: 10px;
  }

  .bottom {
    width: 100%;
    height: 50px;
  }
}
</style>