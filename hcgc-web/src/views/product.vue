<template>
  <div>

    <Head></Head>
    <div class="prod_youyun_banner"></div>
    <!-- <el-row>
      <div class="title">产品服务</div>
    </el-row> -->
    <el-row class="prod_scheme">
      <el-col :span="16" :offset="4">
        <div style="font-size:x-large;line-height: 200px;text-align: left;position: relative;">产品服务方案</div>
        <div style="width:110px;border:2px solid #409EFF;position: absolute;top:140px;"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="font-size:18px;line-height: 50px;padding-bottom: 40px;text-align: left;">
        <div>惠诚共创科技将从总体上考虑系统的建设，并倾尽全力配合用户在系统的整体规划、工程实施建设、网络支持服务以及系统的维护管理等各重要环节进行周密的部署，以充分满足其业务发展的信息化建设需要。</div>
      </el-col>
    </el-row>
    <el-row class="prod_org">
      <el-col :span="16" :offset="4">
        <div style="font-size:x-large;line-height: 200px;text-align: left;position: relative;">技术支持与服务的组织体系结构</div>
        <div style="width:110px;border:2px solid #409EFF;position: absolute;top:140px;"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="font-size:18px;line-height: 50px;padding-bottom: 40px;text-align: left;">
        <div>惠诚共创科技将以技术部门为核心执行单位，统一调配技术顾问、技术研发等资源，形成一个突出本地化、同时综合全国服务网络支撑的服务组织，担负起对用户工程项目的技术支持与服务工作。</div>
      </el-col>
    </el-row>
    <el-row class="prod_service_characteristics">
      <el-col :span="16" :offset="4">
        <div style="font-size:x-large;line-height: 200px;text-align: left;position: relative;">技术支持和服务的特色</div>
        <div style="width:110px;border:2px solid #409EFF;position: absolute;top:140px;"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="font-size:18px;line-height: 50px;padding-bottom: 40px;text-align: left;">
        <div>通过多年系统工程开发和技术服务经验的积累，公司逐步认识到优良的技术支持和服务是企业的生命力所在，在技术支持和服务方面已经形成一套严格的、规范化的服务体系。</div>
        <div>组织严格、资源充足、快速反应建立严格的组织结构，垂直领导，具有灵活的人力资源调动能力，统一调配人力资源，形成快速的技术支持服务队伍。</div>
        <div>为用户提供应急服务，强化突发、紧急事件处理能力由于大多数用户应用具有实时性、连续性的特点。</div>
        <div>电话支持服务、远程诊断服务、现场支持服务、设备维护与更换、系统故障报告及预防、后期技术培训、定期/不定期回访服务。</div>
      </el-col>
    </el-row>
    <el-row class="prod_contact">
      <el-col :span="16" :offset="4">
        <div style="font-size:x-large;line-height: 200px;text-align: left;position: relative;">客服中心电话支持服务</div>
        <div style="width:110px;border:2px solid #409EFF;position: absolute;top:140px;"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="font-size:18px;line-height: 50px;padding-bottom: 40px;text-align: left;">
        <div>为实现以上目标，同时考虑到系统建设和管理工作在整个系统建设中的重要性，惠诚共创科技从成立的第一天起就设立有24小时客户服务中心：<span
            style="font-weight: 600;">0715-8877363</span>或<span
            style="font-weight: 600;">18972856911</span>，惠诚共创科技将提供24小时技术支持和售后服务支持。</div>
      </el-col>
    </el-row>
    <el-row class="prod_promise">
      <el-col :span="16" :offset="4">
        <div style="font-size:x-large;line-height: 200px;text-align: left;position: relative;">服务承诺</div>
        <div style="width:110px;border:2px solid #409EFF;position: absolute;top:140px;"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="font-size:18px;line-height: 50px;padding-bottom: 40px;text-align: left;">
        <div>1、遵章守法。严格遵守国家及行业各项法律、法规、标准和制度，服从行业管理，维护市场稳定，自觉维护企业良好形象。</div>
        <div>2、承诺自双方代表在验收单上签字之日起计算，按合同保修。</div>
        <div>3、系统试运行过程中如果发生软、硬件故障，技术人员在24小时内赶到现场，非人为情况下免费进行维修或更换。</div>
        <div>4、质保期过后，系统若发生软、硬件故障，以不高于项目合同的实际成交价格更换故障部件，以不高于项目合同产品的实际成本提供故障部件的修复。</div>
        <div>6、系统中的所涉及的应用软件，提供长期技术支持。如对有新的改进、增进新的功能或者为适应最新标准所形成的最新版本，均及时提供。软件、地图定期升级。</div>
        <div>7、开通后，对本项目平台监控人员提供不少于6次/年培训，实际培训次数可根据运输企业和车主需求执行。</div>
        <div>
          8、培训总的目的是使运输企业车辆管理、平台监控人员和车主在系统正式投入运行以后，能熟练掌握车辆管理平台系统的各项功能，结合运输企业和车主在各项管理上的需求有效的管理和规范驾驶员车辆安全驾驶，预防和避免交通事故的发生，提升运输企业的服务品质。
        </div>
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
    created: function () {
      document.title = '产品服务-湖北惠诚共创科技有限公司';
    }
  }
</script>

<style>
  .prod_youyun_banner {
    background-image: url("../assets/product/youyun_banner.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 600px;
    margin-top: 70px;
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