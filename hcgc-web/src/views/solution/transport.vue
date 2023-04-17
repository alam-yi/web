<template>
  <div>

    <Head></Head>
    <div class="transport_solution_banner"></div>
    <el-row>
      <el-col :span="16" :offset="4">
        <div style="font-size:xxx-large;line-height: 250px;text-align: left;position: relative;">行业现状</div>
        <div style="width:130px;border:3px solid #409EFF;position: absolute;top:180px;"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="font-size:21px;line-height: 50px;padding-bottom: 40px;text-align: left;">
        <div>
          两客一危，是指从事旅游的包车、三类以上班线客车和运输危险化学品、烟花爆竹、民用爆炸物品的道路专用车辆。
          自2011年8月1日起，新出厂的“两客一危”车辆，在车辆出厂前应安装符合《道路运输车辆卫星定位系统车载终端技术要求》的卫星定位装置。对于不符合规定的车辆，工业和信息化部不予上车辆产品公告；道路运输管理部门在为车辆办理道路运输证时，要检查车辆卫星定位装置的安装和工作情况。凡未按规定安装卫星定位装置的新增车辆，交通运输部门不予核发道路运输证。
        </div>
        <div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4">
        <div style="font-size:xxx-large;line-height: 250px;text-align: left;position: relative;">方案简介</div>
        <div style="width:130px;border:3px solid #409EFF;position: absolute;top:180px;"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="font-size:21px;line-height: 50px;padding-bottom: 40px;text-align: left;">
        <div>
          两客一危车辆主动安全智能防控系统整体解决方案包括优云智联平台、车辆行驶记录仪、车载监控三大模块。车载监控驾驶员状态分析预警设备具备分神提醒、疲劳报警、遮挡报警、行车打电话报警、行车抽烟报警、异常报警、超速报警、换人提醒等功能。主动安全预警设备具有前向碰撞预警、低速碰撞预警、车道保持能量下降报警、高速过弯报警、急加速报警、车距监测与报警、车道偏离报警、虚拟保险杠、急刹车报警、侧翻报警等功能。
        </div>
        <div>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-bottom:100px;">
      <el-col :span="16" :offset="4">
        <el-image :src="require('@/assets/solution/transport_solution_1.png')" fit="contain">
          <div slot="placeholder" class="image-slot">
            <i class="el-icon-loading"></i>加载中
          </div>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
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
    margin-top: 70px;
  }
</style>