<template>
  <div>

    <Head></Head>
    <div class="transport_solution_banner"></div>
    <el-row>
      <div style="font-size:xxx-large;line-height: 250px;">押运车解决方案</div>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="font-size:21px;line-height: 50px;padding-bottom: 40px;">
        通过集成车载高清视频实时监控、录像存储、GPS车辆定位管理、车辆状态监控、驾驶行为检测等功能，并针对偏离路线、押运过程中异常停驶、非停车区域停车及开门、驾驶员异常驾驶行为等状况进行实时报警上传，帮助管理方实现押运过程的动态监管及全程状态掌控，全过程都可通过网络传输到后端云平台，可通过大数据解析弥补操作过程中的各种疏漏，全面保障押运安全。
      </el-col>
    </el-row>
    <Foot></Foot>
  </div>
</template>

<script>
  import Head from '../../views/base/head'
  import Foot from '../../views/base/foot'

  export default {
    components: {
      Head,
      Foot,
    },
    data() {
      return {}
    }
  }
</script>

<style>
.transport_solution_banner {
    background-image: url("../../assets/solution/transport.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 600px;
  }
</style>