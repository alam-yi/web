<template>
  <div>

    <Head></Head>
    <div class="escort_solution_banner"></div>
    <el-row>
      <div style="font-size:xxx-large;line-height: 250px;">押运车解决方案</div>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="font-size:21px;line-height: 50px;padding-bottom: 40px;">
        通过集成车载高清视频实时监控、录像存储、北斗车辆定位管理、车辆状态监控、驾驶行为检测等功能，并针对偏离路线、押运过程中异常停驶、非停车区域停车及开门、驾驶员异常驾驶行为等状况进行实时报警上传，帮助管理方实现押运过程的动态监管及全程状态掌控，全过程都可通过网络传输到后端云平台，可通过大数据解析弥补操作过程中的各种疏漏，全面保障押运安全。
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="4">
        <el-col :span="4" class="escort_item">
          <el-image :src="escort_img_1" class="escort_img"></el-image>
          <div class="escort_title">实时监控视频</div>
        </el-col>
        <el-col :span="3" class="right_arrow">
          <el-image :src="right_arrow_src" style="width: 70px;"></el-image>
        </el-col>
        <el-col :span="4" class="escort_item">
          <el-image :src="escort_img_2" class="escort_img"></el-image>
          <div class="escort_title">出入节点预警</div>
        </el-col>
        <el-col :span="3" class="right_arrow">
          <el-image :src="right_arrow_src" style="width: 70px;"></el-image>
        </el-col>
        <el-col :span="4" class="escort_item">
          <el-image :src="escort_img_3" class="escort_img"></el-image>
          <div class="escort_title">特殊情况报警</div>
        </el-col>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="17">
        <el-col :span="4" class="bottom_arrow">
          <el-image :src="bottom_arrow_src" style="width: 70px;"></el-image>
        </el-col>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 100px;">
      <el-col :span="20" :offset="4">
        <el-col :span="4" class="escort_item">
          <el-image :src="escort_img_6" class="escort_img"></el-image>
          <div class="escort_title">数据报表运营</div>
        </el-col>
        <el-col :span="3" class="right_arrow">
          <el-image :src="left_arrow_src" style="width: 70px;"></el-image>
        </el-col>
        <el-col :span="4" class="escort_item">
          <el-image :src="escort_img_5" class="escort_img"></el-image>
          <div class="escort_title">远程指挥调度</div>
        </el-col>
        <el-col :span="3" class="right_arrow">
          <el-image :src="left_arrow_src" style="width: 70px;"></el-image>
        </el-col>
        <el-col :span="4" class="escort_item">
          <el-image :src="escort_img_4" class="escort_img"></el-image>
          <div class="escort_title">辅助安全驾驶</div>
        </el-col>
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
      return {
        right_arrow_src: require('@/assets/solution/right_arrow.png'),
        bottom_arrow_src: require('@/assets/solution/bottom_arrow.png'),
        left_arrow_src: require('@/assets/solution/left_arrow.png'),
        escort_img_1: require('@/assets/solution/monitor.png'),
        escort_img_2: require('@/assets/solution/early_warning.png'),
        escort_img_3: require('@/assets/solution/alarm.png'),
        escort_img_4: require('@/assets/solution/drive.png'),
        escort_img_5: require('@/assets/solution/computer.png'),
        escort_img_6: require('@/assets/solution/report.png'),
      }
    },
    created: function () {
      document.title = '押运车辆-湖北惠诚共创科技有限公司';
    }
  }
</script>

<style>
  .escort_solution_banner {
    background-image: url("../../assets/solution/escort_banner.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 600px;
    margin-top: 70px;
  }

  .escort_item {
    background-color: #F6F7F9;
    height: 300px;
    border-radius: 10px;
  }

  .escort_item:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }

  .escort_img {
    width: 70px;
    margin-top: 80px;
    transition: all .5s ease .1s;
  }

  .escort_title {
    margin-top: 50px;
    font-weight: 600;
  }

  .right_arrow {
    height: 300px;
    justify-content: center;
    align-items: center;
    display: inline-grid;
  }

  .bottom_arrow {
    height: 150px;
    justify-content: center;
    align-items: center;
    display: inline-grid;
  }
</style>