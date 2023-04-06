<template>
  <el-row class="foot">
    <el-row>
      <el-col :span="4" :offset="3" class="f_h">产品服务</el-col>
      <el-col :span="4" :offset="1" class="f_h">解决方案</el-col>
      <el-col :span="4" class="f_h">关于我们</el-col>
      <el-col :span="4" class="f_h">联系我们</el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="3" class="f_h_i"><a @click="linkToProduct()">智能中控</a></el-col>
      <el-col :span="4" :offset="1" class="f_h_i"><a @click="linkToBusSolution()">城乡公交</a></el-col>
      <el-col :span="4" class="f_h_i"><a @click="linkToAboutUs()">公司简介</a></el-col>
      <el-col :span="4"><i class="el-icon-phone-outline f_h_i">&nbsp;&nbsp;0715-8877363</i></el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="3" class="f_h_i"><a @click="linkToProduct()">车辆管理设备</a></el-col>
      <el-col :span="4" :offset="1" class="f_h_i"><a @click="linkToTaxiSolution()">出租车/网约车</a></el-col>
      <el-col :span="4" class="f_h_i"><a @click="linkToAboutUs()">售后服务</a></el-col>
      <el-col :span="4"><i class="el-icon-office-building f_h_i">&nbsp;&nbsp;湖北惠诚共创科技有限公司</i></el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="3" class="f_h_i"><a @click="linkToProduct()">智能监控系统</a></el-col>
      <el-col :span="4" :offset="1" class="f_h_i"><a @click="linkToSchoolBusSolution()">校车</a></el-col>
      <el-col :span="4" class="f_h_i"><a @click="linkToAboutUs()">企业资质</a></el-col>
      <el-col :span="7"><i class="el-icon-location-outline f_h_i">&nbsp;&nbsp;湖北省咸宁市温泉中心花坛中国电信对面祺泰小区1栋2703室</i></el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="8" class="f_h_i"><a @click="linkToTransportSolution()">两客一危</a></el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="8" class="f_h_i"><a @click="linkToEscortSolution()">押运车辆</a></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row style="padding-bottom: 20px;">
      <el-col style="color:#999999; text-align: center;">Copyrights © {{year}} by 备案号</el-col>
    </el-row>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        year: 0
      }
    },
    methods: {
      getYear() {
        let date = new Date();
        let year = date.getFullYear();
        this.year = year;
      },
      linkToAboutUs() {
        this.$router.push('/about-us');
        document.documentElement.scrollTop = 0;
      },
      linkToBusSolution() {
        this.$router.push('/solution/bus');
        document.documentElement.scrollTop = 0;
      },
      linkToTaxiSolution() {
        this.$router.push('/solution/taxi');
        document.documentElement.scrollTop = 0;
      },
      linkToSchoolBusSolution() {
        this.$router.push('/solution/school-bus');
        document.documentElement.scrollTop = 0;
      },
      linkToProduct() {
        this.$router.push('/product');
        document.documentElement.scrollTop = 0;
      },
      linkToTransportSolution() {
        this.$router.push('/solution/transport');
        document.documentElement.scrollTop = 0;
      },
      linkToEscortSolution() {
        this.$router.push('/solution/escort');
        document.documentElement.scrollTop = 0;
      },
    },
    mounted: function () {
      this.getYear();
    }
  }
</script>

<style>
  .foot {
    background-color: black;
    width: 100%;
    height: 100%;
    text-align: left;
    position: relative;
  }

  .foot>.el-row:nth-child(1) {
    font-size: large;
    padding-top: 50px;
  }

  .f_h {
    color: white;
    padding-bottom: 10px;
  }

  .f_h_i {
    color: #999999;
    padding: 10px 0 10px 0;
    /* line-height: 30px; */
  }

  .f_h_i>a {
    transition: 1s;
    cursor: pointer;
  }

  .f_h_i:hover {
    color: white;
  }
</style>