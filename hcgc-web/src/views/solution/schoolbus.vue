<template>
  <div>

    <Head></Head>
    <div class="school_bus_solution_banner"></div>
    <el-row>
      <div style="font-size:xxx-large;line-height: 250px;">校车解决方案</div>
    </el-row>
    <el-row>
      <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"
        :xl="{span:20,offset:2}" style="height: 425px;">
        <el-col :span="10" :offset="1">
          <div>
            <dl>
              <dd
                style="font-size:xx-large;color: black;margin:auto;line-height: 110px;text-align: left;font-weight: 600;">
                实时监控</dd>
              <dd style="border-top: 5px solid #409EFF;margin: 0;width: 80px"></dd>
              <dd
                style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;margin-top: 20px;font-size: large;">
                实时采集校车位置、速度、行车线路、行车视频等，实现校车运行全过程的实时动态监控，当校车各类危险情况时，可提前对驾驶员发出预警，确保校车运行安全。
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}" :lg="{span:10,offset:3}"
          :xl="{span:10,offset:3}">
          <el-image :src="require('@/assets/solution/school_bus_solution_1.png')" fit="contain">
            <div slot="placeholder" class="image-slot">
              <i class="el-icon-loading"></i>加载中
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-col>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"
        :xl="{span:20,offset:2}" style="height: 500px;">
        <el-col :xs="{span:10,offset:0}" :sm="{span:10,offset:0}" :md="{span:10,offset:0}" :lg="{span:10,offset:0}"
          :xl="{span:10,offset:0}" style="margin-top:50px;">
          <el-image :src="require('@/assets/solution/school_bus_solution_2.png')" fit="contain">
            <div slot="placeholder" class="image-slot">
              <i class="el-icon-loading"></i>加载中
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-col>
        <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}" :lg="{span:10,offset:3}"
          :xl="{span:10,offset:3}" style="margin-top: 8%;">
          <div>
            <dl>
              <dd
                style="font-size:xx-large;color: black;margin:auto;line-height: 110px;text-align: left;font-weight: 600;">
                学生搭乘信息推送
              </dd>
              <dd style="border-top: 5px solid #409EFF;margin: 0;width: 80px"></dd>
              <dd
                style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;margin-top: 20px;font-size: large;">
                学生上下车后，会将车辆位置推送到家长手机端，同步上下车具体时间等。全程让家长了解孩子动态。
              </dd>
            </dl>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <el-row style="margin-top:160px;margin-bottom: 160px;">
      <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"
        :xl="{span:20,offset:2}" style="height: 425px;">
        <el-col :span="10" :offset="1" style="margin-top: 3%;">
          <div>
            <dl>
              <dd
                style="font-size:xx-large;color: black;margin:auto;line-height: 110px;text-align: left;font-weight: 600;">
                生命探测</dd>
              <dd style="border-top: 5px solid #409EFF;margin: 0;width: 80px"></dd>
              <dd
                style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;margin-top: 20px;font-size: large;">
                车辆熄火以后，自动检测车内是否有学生没有下车,保障学生按时正常上学和放学。
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}" :lg="{span:10,offset:3}"
          :xl="{span:10,offset:3}">
          <el-image :src="require('@/assets/solution/school_bus_solution_3.png')" fit="fill"
            style="width: 587px;height: 390px;">
            <div slot="placeholder" class="image-slot">
              <i class="el-icon-loading"></i>加载中
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
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
      return {}
    },
    created: function () {
      document.title = '校车-湖北惠诚共创科技有限公司';
    }
  }
</script>

<style>
  .school_bus_solution_banner {
    background-image: url("../../assets/solution/school_bus_banner.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 600px;
    margin-top: 70px;
  }
</style>