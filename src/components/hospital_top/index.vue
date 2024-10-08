<template>
  <div class='top'>
    <div class="content">
      <!-- 图标 -->
      <div class="left" @click="goHome">
        <img src="../../assets/logo.jpg" alt="">
        <p>易复康 预约挂号统一平台</p>
      </div>
      <!-- 登录/注册 -->
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup name='Top'>
import { useRouter } from 'vue-router';
//数据
let $router = useRouter()
//方法
const goHome = () => {
  $router.push({ path: '/home' })
}
</script>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  // box-shadow: 5px 3px 4px rgb(180, 173, 173);

  .content {
    width: 1200px;
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }

      p {
        font-size: 20px;
        color: #5fe1e9;
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #bbb;

      p:hover {
        color: rgba(0, 0, 0, 0.642);
      }
    }

    .help {
      margin-right: 10px;
    }

  }
}
</style>