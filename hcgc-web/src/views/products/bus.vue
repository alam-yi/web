<template>
  <div>

    <Head></Head>
    <div class="prod_bus_banner"></div>
    <el-row>
      <div class="title">智慧交通</div>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="5">
        <ul id="anchor_point" style="list-style: none;margin: 0;padding: 0;width: 350px;margin-top:100px;">
          <li style="line-height: 60px;cursor: pointer;" @click="scrollToIntroduce()">产品概述</li>
          <li style="line-height: 60px;cursor: pointer;" @click="scrollToArchitecture()">产品架构</li>
          <li style="line-height: 60px;cursor: pointer;" @click="scrollToDetail()">产品功能</li>
        </ul>
      </el-col>
      <el-col :span="15" :offset="2" id="bus_content">
        <div>
          <div id="bus_prod_introduce" ref="bus_prod_introduce">
            <div style="font-size: xx-large;line-height: 100px;">大数据平台</div>
            <el-image :src="require('@/assets/case2.png')" fit="contain" class="case_img">
              <div slot="placeholder" class="image-slot">
                <i class="el-icon-loading"></i>加载中
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <div style="color: #73777c;line-height: 50px;text-align: left;font-size: 18px;">
              <div>
                &emsp;&emsp;智慧交通大数据平台是将先进的信息技术、数据通讯传输技术、电子传感技术、电子控制技术及计算机处理技术等有效的集成运用于整个地面交通管理系统而建立的一种在大范围内、全方位发挥作用的、实时、准确、高效的综合交通运输管理系统。使用北斗/GPS卫星定位。
              </div>
              <div>
                &emsp;&emsp;智慧交通大数据平台作为智慧交通建设的核心和数据采集、处理、融合，应用的枢纽，将智能交通建设的各个外场子统(车辆监控系统、公路管理、公路养护系统、交通执法系统等)的数据进行实时的采集、转换、处理及存储，并在数据集成、融合、分析挖据的基础上，汇聚到交通的智慧应用中，大大推进了交通业务的智能化和智慧化，提高了各部门人员的工作效率。
              </div>
              <div>&emsp;&emsp;智慧交通大数据平台集成了信息化、流程化、规范化的集成管理与指挥调度、接处警、设施维护管理、运营服务等智慧交通业务功能。</div>
            </div>
          </div>
          <div id="bus_prod_architecture" red="bus_prod_architecture">
            <br><br><br>
            <h1>产品架构</h1>
            <el-image :src="require('@/assets/case2.png')" fit="contain" class="case_img">
              <div slot="placeholder" class="image-slot">
                <i class="el-icon-loading"></i>加载中
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
          </div>
          <div id="bus_prod_detail" ref="bus_prod_detail">
            <br><br><br>
            <h1>产品功能</h1>
            <el-image :src="require('@/assets/case2.png')" fit="contain" class="case_img">
              <div slot="placeholder" class="image-slot">
                <i class="el-icon-loading"></i>加载中
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            <div>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
          </div>

        </div>
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
      showIcon() {
        var extraConst = 530 + 250 + 48 + 100;
        var dom = document.documentElement;
        var ap = document.getElementById('anchor_point');
        var c = document.getElementById('bus_content');
        // 左侧导航栏定位样式处理
        if (!!dom.scrollTop && dom.scrollTop > extraConst) {
          // 固定导航栏
          ap.style.position = 'fixed';
          // ap.style.top = '70px';
          ap.style.top = '-30px';
          c.style.marginLeft = '29.2%';
        } else {
          // 移除导航栏fixed样式
          ap.style.removeProperty('position');
          ap.style.removeProperty('top');
          c.style.removeProperty('margin-left');
        }

        var i = document.getElementById('bus_prod_introduce');
        var iHeight = i.clientHeight;

        var a = document.getElementById('bus_prod_architecture');
        var aHeight = a.clientHeight;

        var d = document.getElementById('bus_prod_detail')
        var dHeight = d.clientHeight
        // 滚动浏览器时修改左侧导航栏样式
        if (!!dom.scrollTop) {
          if (dom.scrollTop <= extraConst + iHeight) {
            ap.children[0].style.backgroundColor = '#ecf5ff';
            ap.children[1].style.removeProperty('background-color');
            ap.children[2].style.removeProperty('background-color');
          } else if (dom.scrollTop > extraConst + iHeight && dom.scrollTop <= extraConst + iHeight + aHeight) {
            ap.children[1].style.backgroundColor = '#ecf5ff';
            ap.children[0].style.removeProperty('background-color');
            ap.children[2].style.removeProperty('background-color');
          } else {
            ap.children[2].style.backgroundColor = '#ecf5ff';
            ap.children[0].style.removeProperty('background-color');
            ap.children[1].style.removeProperty('background-color');
          }
        }
      },
      scrollToIntroduce() {
        this.activeIndex = '1';
        document.getElementById('bus_prod_introduce').scrollIntoView({ behavior: 'smooth' });
      },
      scrollToArchitecture() {
        this.activeIndex = '2';
        document.getElementById('bus_prod_architecture').scrollIntoView({ behavior: 'smooth' });
      },
      scrollToDetail() {
        this.activeIndex = '3';
        document.getElementById('bus_prod_detail').scrollIntoView({ behavior: 'smooth' });
      },
    },
    mounted: function () {
      document.getElementById('anchor_point').children[0].style.backgroundColor = '#ecf5ff';
      window.addEventListener("scroll", this.showIcon);
    },
  }
</script>

<style>
  .title {
    font-size: 36px;
    color: #181a39;
    text-align: center;
    line-height: 250px;
  }

  .prod_bus_banner {
    background-image: url("../../assets/prod_bus.jpg");
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


  .lfmenu {
    position: absolute;
    /* height: 100%; */
    /* left: 0px; */
    width: 400px;
    top: 1000px;
    background: #323232;
  }

  .el-breadcrumb {
    width: 100%;
    background-color: #ffffff;
    height: 70px;
  }

  .breadcrumb__inner {
    line-height: 70px;
  }
</style>