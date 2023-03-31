<template>
  <div>

    <Head></Head>
    <div class="prod_youyun_banner"></div>
    <el-row>
      <div class="title">优云智联</div>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4">
        <div>
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        </div>
        <div>
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        </div>
        <div>
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        </div>
        <div>
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        </div>
        <div>
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        </div>
        <div>
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        </div>
        <el-image :src="require('@/assets/case2.png')" fit="contain" class="case_img">
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
  /* .el-image {
    display: inline-grid;
    height: 600px;
  } */
  .prod_youyun_banner {
    background-image: url("../../assets/youyun_banner.jpg");
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


</style>