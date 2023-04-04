<template>
  <div>

    <Head></Head>
    <div class="prod_youyun_banner"></div>
    <el-row>
      <div class="title">产品服务</div>
    </el-row>
    <el-row style="margin-bottom: 100px;">
      <el-col :span="16" :offset="4">
        <el-tabs type="border-card">
          <el-tab-pane label="智能中控">
            <div style="width: 930px;">
              <p style="font-size: x-large;text-align: left;line-height: 40px;">
                &emsp;&emsp;一体机,IVI,DA三种中控样式，针对不同车型进行选择，软件平台有：QNX，Android,Linux三大系统，定位多种车型，如公交，出租车，客货车等。</p>
              <div style="font-size: large;">
                <dl id="adv" style="text-align: left;line-height: 40px;">
                  <dt style="font-weight: 600;font-size: larger;">设备优点</dt>
                  <dd>1、集成度高，设备控制方式齐全。</dd>
                  <dd>2、操作界面清晰，系统扩展功能强，可靠性高等。</dd>
                  <dd>3、低成本，高性能，高集成度，全数字化控制。</dd>
                  <dd>4、界面简洁，支持红外触控和各种手势操控，给驾驶员带来更人性化的操作感受。</dd>
                </dl>
                <el-image :src="require('@/assets/product/prod_1.png')" fit="contain" class="tab1_img">
                  <div slot="placeholder" class="image-slot">
                    <i class="el-icon-loading"></i>加载中
                  </div>
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
                <el-image :src="require('@/assets/product/prod_2.png')" fit="contain" class="tab1_img">
                  <div slot="placeholder" class="image-slot">
                    <i class="el-icon-loading"></i>加载中
                  </div>
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
                <el-image :src="require('@/assets/product/prod_3.png')" fit="contain" style="margin-top:50px;">
                  <div slot="placeholder" class="image-slot">
                    <i class="el-icon-loading"></i>加载中
                  </div>
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="车辆管理设备">
            <div style="width: 930px;">
              <p style="font-size: x-large;text-align: left;line-height: 40px;">
                &emsp;&emsp;提供多种设备支持，为企业打造切合自身特点的管理模式，为企业建设“流程化、信息化、可视化、一体化”的智能车辆管理体系。</p>
              <div style="font-size: large;">
                <dl id="adv" style="text-align: left;line-height: 40px;">
                  <dt style="font-weight: 600;font-size: larger;">为车辆系统提供两种方案，满足多场景应用</dt>
                  <dd>1、基于A5的高集成一体方案。</dd>
                  <dd>2、基于XPAD的智能分体方案。</dd>
                </dl>
                <el-image :src="require('@/assets/product/prod_4.png')" fit="contain" class="tab1_img">
                  <div slot="placeholder" class="image-slot">
                    <i class="el-icon-loading"></i>加载中
                  </div>
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
                <el-image :src="require('@/assets/product/prod_5.png')" fit="contain" class="tab1_img">
                  <div slot="placeholder" class="image-slot">
                    <i class="el-icon-loading"></i>加载中
                  </div>
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>
              <p style="font-size: xx-large;line-height: 100px;">车载设备架构</p>
              <el-image :src="require('@/assets/product/prod_6.png')" fit="contain" class="">
                <div slot="placeholder" class="image-slot">
                  <i class="el-icon-loading"></i>加载中
                </div>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
          </el-tab-pane>
          <el-tab-pane label="智能监控系统">
            <div style="width: 930px;">
              <p style="font-size: x-large;text-align: left;line-height: 40px;">
                &emsp;&emsp;车载监控摄像头使用DC12V供电，与显示或者录像机配合使用，适用于汽车等场所进行安全监控。</p>
              <div style="font-size: large;">
                <dl id="adv" style="text-align: left;line-height: 40px;">
                  <dt style="font-weight: 600;font-size: larger;">功能特点</dt>
                  <dd>1、高解晰度，低功耗。</dd>
                  <dd>2、全自动电子快门，成像反应速度快。</dd>
                  <dd>3、可视角度调节范围宽，可上下、左右调节可视角。</dd>
                  <dd>4、结构美观，安装方便适合室内车载安装使用。</dd>
                  <dd>5、自动光圈控制，有效保证明/暗环境变化的图像效果。</dd>
                  <dd>6、低照度芯片。</dd>
                  <dd>7、抗震性能好。</dd>
                </dl>
                <el-image :src="require('@/assets/product/prod_7.png')" fit="contain" class="">
                  <div slot="placeholder" class="image-slot">
                    <i class="el-icon-loading"></i>加载中
                  </div>
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <Foot></Foot>
  </div>
</template>

<script>
  import Head from '../views/base/head'
  import Foot from '../views/base/foot'

  export default {
    data() {
      return {
      }
    },
    components: {
      Head,
      Foot,
    },
    methods: {
    },
    mounted: function () {
    },
  }
</script>

<style>
  .prod_youyun_banner {
    background-image: url("../assets/product/youyun_banner.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 600px;
  }

  .title {
    font-size: 36px;
    color: #181a39;
    text-align: center;
    line-height: 250px;
  }

  .el-tab-pane {
    padding: 40px 80px 60px 80px;
  }

  #adv>dd {
    margin: 0;
  }

  .tab1_img {
    width: 400px;
    height: 300px;
    padding: 30px;
  }
</style>