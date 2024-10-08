<template>
  <div class='carousel'>
    <el-carousel type="card" height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../../../assets/banner1.jpg">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang='ts' setup name='Carousel'>
// import { reactive } from 'vue'
//数据
// let imgList = [
//   { id: '001', src: '../../../assets/banner1.jpg' },
//   { id: '002', src: '../../../assets/banner2.png' },
//   { id: '003', src: '../../../assets/banner3.png' },
//   { id: '004', src: '../../../assets/banner4.png' },
// ]
//方法

</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 350px;
}
</style>