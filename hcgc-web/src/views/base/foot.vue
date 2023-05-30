<template>
  <el-row class="foot">
    <el-row>
      <el-col :span="4" :offset="3" class="f_h">产品服务</el-col>
      <el-col :span="4" :offset="1" class="f_h">解决方案</el-col>
      <el-col :span="4" class="f_h">关于我们</el-col>
      <el-col :span="4" class="f_h">联系我们</el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="3" class="f_h_i"><a @click="linkToProdScheme()">服务方案</a></el-col>
      <el-col :span="4" :offset="1" class="f_h_i"><a @click="linkToBusSolution()">城乡公交</a></el-col>
      <el-col :span="4" class="f_h_i"><a @click="linkToCompanyIntroduce()">公司简介</a></el-col>
      <el-col :span="4"><i class="el-icon-phone-outline f_h_i">&nbsp;&nbsp;0715-8877363</i></el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="3" class="f_h_i"><a @click="linkToProdOrg()">组织结构</a></el-col>
      <el-col :span="4" :offset="1" class="f_h_i"><a @click="linkToTaxiSolution()">出租车/网约车</a></el-col>
      <el-col :span="4" class="f_h_i"><a @click="linkToAfterSale()">售后服务</a></el-col>
      <el-col :span="4"><i class="el-icon-office-building f_h_i">&nbsp;&nbsp;湖北惠诚共创科技有限公司</i></el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="3" class="f_h_i"><a @click="linkToProdServiceCharacteristics()">服务特色</a></el-col>
      <el-col :span="4" :offset="1" class="f_h_i"><a @click="linkToSchoolBusSolution()">校车</a></el-col>
      <el-col :span="4" class="f_h_i"><a @click="linkToCompanyQualification()">企业资质</a></el-col>
      <el-col :span="7"><i class="el-icon-location-outline f_h_i">&nbsp;&nbsp;湖北省咸宁市温泉中心花坛中国电信对面祺泰小区1栋2703室</i></el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="3" class="f_h_i"><a @click="linkToProdContact()">联系方式</a></el-col>
      <el-col :span="4" :offset="1" class="f_h_i"><a @click="linkToTransportSolution()">两客一危</a></el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="3" class="f_h_i"><a @click="linkToProdPromise()">服务承诺</a></el-col>
      <el-col :span="4" :offset="1" class="f_h_i"><a @click="linkToEscortSolution()">押运车辆</a></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row style="padding-bottom: 20px;">
      <el-col style="color:#999999; text-align: center;font-size: 14px;">Copyrights © 2021-{{year}} 湖北惠诚共创科技有限公司 All
        Rights Reserved <span class="beian" @click="linkToBeiAn">鄂ICP备2021017425号</span></el-col>
    </el-row>
  </el-row>
</template>
<!-- hbhcgckj.com -->

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
      linkToCompanyIntroduce() {
        this.$router.push('/about-us');
        this.$nextTick(function () {
          document.documentElement.scrollTop = document.getElementsByClassName('company_introduce')[0].offsetTop;
        });
      },
      linkToAfterSale() {
        this.$router.push('/about-us');
        this.$nextTick(function () {
          document.documentElement.scrollTop = document.getElementsByClassName('after_sale')[0].offsetTop;
        });
      },
      linkToCompanyQualification() {
        this.$router.push('/about-us');
        this.$nextTick(function () {
          document.documentElement.scrollTop = document.getElementsByClassName('company_qualification')[0].offsetTop;
        });
      },
      linkToBusSolution() {
        this.$router.push('/solution-bus');
        document.documentElement.scrollTop = 0;
      },
      linkToTaxiSolution() {
        this.$router.push('/solution-taxi');
        document.documentElement.scrollTop = 0;
      },
      linkToSchoolBusSolution() {
        this.$router.push('/solution-school-bus');
        document.documentElement.scrollTop = 0;
      },
      linkToProdScheme() {
        this.$router.push('/product');
        this.$nextTick(function () {
          document.documentElement.scrollTop = document.getElementsByClassName('prod_scheme')[0].offsetTop;
        });
      },
      linkToProdOrg() {
        this.$router.push('/product');
        this.$nextTick(function () {
          document.documentElement.scrollTop = document.getElementsByClassName('prod_org')[0].offsetTop;
        });
      },
      linkToProdServiceCharacteristics() {
        this.$router.push('/product');
        this.$nextTick(function () {
          document.documentElement.scrollTop = document.getElementsByClassName('prod_service_characteristics')[0].offsetTop;
        });
      },
      linkToProdContact() {
        this.$router.push('/product');
        this.$nextTick(function () {
          document.documentElement.scrollTop = document.getElementsByClassName('prod_contact')[0].offsetTop;
        });
      },
      linkToProdPromise() {
        this.$router.push('/product');
        this.$nextTick(function () {
          document.documentElement.scrollTop = document.getElementsByClassName('prod_promise')[0].offsetTop;
        });
      },
      linkToTransportSolution() {
        this.$router.push('/solution-transport');
        document.documentElement.scrollTop = 0;
      },
      linkToEscortSolution() {
        this.$router.push('/solution-escort');
        document.documentElement.scrollTop = 0;
      },
      linkToBeiAn() {
        window.open("https://beian.miit.gov.cn/#/Integrated/recordQuery", "_search");
      }
    },
    watch: {

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

  .beian:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>