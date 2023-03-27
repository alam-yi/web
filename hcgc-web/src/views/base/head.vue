<template>
  <el-row class="nav">
    <el-col :xs="{span:6,offset:0}" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:6,offset:0}"
      :xl="{span:6,offset:0}">
      <img class="logo" src="../../assets/logo.png" @click="linkToHome()">
    </el-col>
    <el-col :xs="{span:2,offset:0}" :sm="{span:2,offset:0}" :md="{span:2,offset:0}" :lg="{span:2,offset:0}"
      :xl="{span:2,offset:0}" class="nav-item">
      <el-link @click="linkToHome()">首页</el-link>
    </el-col>
    <el-col :xs="{span:2,offset:0}" :sm="{span:2,offset:0}" :md="{span:2,offset:0}" :lg="{span:2,offset:0}"
      :xl="{span:2,offset:0}" class="nav-item">
      <el-dropdown>
        <span class="el-dropdown-link">
          产品介绍<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>优云智联</el-dropdown-item>
          <el-dropdown-item>出租车平台</el-dropdown-item>
          <el-dropdown-item>运维平台</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      
    </el-col>
    <el-col :xs="{span:2,offset:0}" :sm="{span:2,offset:0}" :md="{span:2,offset:0}" :lg="{span:2,offset:0}"
      :xl="{span:2,offset:0}" class="nav-item">
      <el-link>解决方案</el-link>
    </el-col>
    <el-col :xs="{span:2,offset:0}" :sm="{span:2,offset:0}" :md="{span:2,offset:0}" :lg="{span:2,offset:0}"
      :xl="{span:2,offset:0}" @click="linkToAboutUs()" class="nav-item">
      <el-link @click="linkToAboutUs()">关于我们</el-link>
    </el-col>
    <el-col :xs="{span:6,offset:4}" :sm="{span:6,offset:4}" :md="{span:6,offset:4}" :lg="{span:6,offset:4}"
      :xl="{span:6,offset:4}">
      <div class="header-phone">
        <i class="el-icon-phone">0715-8877363</i>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      linkToAboutUs() {
        this.$router.push('/about-us');
      },
      linkToHome() {
        this.$router.push('/index');
      },
    },
  }
</script>

<style>
  .el-link:hover {
    color: #FF9E00;
  }

  .logo {
    height: 70px;
    cursor: pointer;
  }

  .nav {
    padding: 0;
    position: fixed;
    width: 100%;
    margin: 0 auto;
    background-color: #ffffff;
    height: 70px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

  /* .el-header>div:nth-child(2),div:nth-child(3),div:nth-child(4),div:nth-child(5) { */
  .nav-item {
    line-height: 70px;
  }

  .header-phone {
    height: 70px;
    line-height: 70px;
  }

  .el-link {
    font-size: large;
  }

  .nav>div:nth-child(3):hover .i_prod {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
  }

  .i_prod {
    margin: 0 auto;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
  }

  /* .nav>div:nth-child(3):hover {} */

  .drop {
    display: none;
    width: 200px;
    height: 40px;
    float: left;
    border: 1px solid red;
    background-color: #787b53;
    z-index: 2;
    position: relative;
  }

  .nav>div:nth-child(3):after {
    content: "0";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
  }

  .nav>div:nth-child(3):hover .drop {
    display: block;
  }

  .el-dropdown-link {
    cursor: pointer;
    /* color: #409EFF; */
  }
  .el-dropdown {
    font-size: 17px;
  }
</style>