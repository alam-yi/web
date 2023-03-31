<template>
  <el-row class="foot">
    <el-row>
      <el-col :span="4" :offset="4" class="f_h">产品服务</el-col>
      <el-col :span="4" :offset="1" class="f_h">解决方案</el-col>
      <el-col :span="4" class="f_h">关于我们</el-col>
      <el-col :span="4" class="f_h">联系我们</el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="4" class="f_h_i">优云智联</el-col>
      <el-col :span="4" :offset="5" class="f_h_i"><a @click="linkToAboutUs()">公司简介</a></el-col>
      <el-col :span="4"><i class="el-icon-phone-outline f_h_i">&nbsp;&nbsp;0715-8877363</i></el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="4" class="f_h_i">出租车平台</el-col>
      <el-col :span="4" :offset="5" class="f_h_i"><a @click="linkToAboutUs()">发展历程</a></el-col>
      <el-col :span="4"><i class="el-icon-message f_h_i">&nbsp;&nbsp;123124214@qq.com</i></el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="4" class="f_h_i">运维平台</el-col>
      <el-col :span="4" :offset="5" class="f_h_i"><a @click="linkToAboutUs()">企业资质</a></el-col>
      <el-col :span="4"><i class="el-icon-office-building f_h_i">&nbsp;&nbsp;湖北惠诚共创科技有限公司</i></el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="17">
        <i class="el-icon-location-outline f_h_i">&nbsp;&nbsp;湖北省咸宁市温泉区XXXXXXX</i>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
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
    },
    mounted: function () {
      this.getYear();
    }
  }
</script>

<style>
  .foot {
    /* background-color: #373737; */
    background-color: black;
    width: 100%;
    height: 350px;
    text-align: left;
    position: relative;
    /* margin-top: 125px; */
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
  }

  .f_h_i>a {
    transition: 1s;
    cursor: pointer;
  }

  .f_h_i:hover {
    color: white;
  }
</style>