<template>
  <div>

    <Head></Head>
    <div class="bus_solution_banner"></div>
    <el-row>
      <div style="font-size:xxx-large;line-height: 250px;">城乡公交解决方案</div>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="font-size:21px;line-height: 50px;padding-bottom: 40px;">
        赋予城乡公交智能调度、安全驾驶舱、实时监控、盲区预警、客流统计等能力，为企业及监管部门提供智能监管服务。
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="2" style="height: 800px;">
        <el-image :src="require('@/assets/bus1.jpg')" fit="contain" class="bus_img_1">
          <div slot="placeholder" class="image-slot">
            <i class="el-icon-loading"></i>加载中
          </div>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-col>
    </el-row>
    <el-row>
      <div style="font-size:xx-large;line-height: 250px;">方案优势</div>
    </el-row>
    <el-row>
      <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"
        :xl="{span:20,offset:2}" style="height: 425px;">
        <el-col :span="10" :offset="1" style="margin-top: 3%;">
          <div>
            <dl>
              <dd
                style="font-size:x-large;color: black;margin:auto;line-height: 110px;text-align: left;font-weight: 600;">
                智能调度及实时监控</dd>
              <dd style="border-top: 5px solid #409EFF;margin: 0;width: 80px"></dd>
              <dd style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;margin-top: 20px;">
                结合车载监控终端系统，可提供排班设置、公交调度、下发报站、实时监控/对讲、录像和轨迹回放等功能，能让公交调度人员的工作更加高效，节省人力和时间成本。
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}" :lg="{span:10,offset:3}"
          :xl="{span:10,offset:3}">
          <el-image :src="require('@/assets/bus2.jpg')" fit="contain">
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
    <el-row style="margin-top:60px">
      <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"
        :xl="{span:20,offset:2}" style="height: 500px;">
        <el-col :xs="{span:10,offset:0}" :sm="{span:10,offset:0}" :md="{span:10,offset:0}" :lg="{span:10,offset:0}"
          :xl="{span:10,offset:0}" style="margin-top:50px;">
          <el-image :src="require('@/assets/bus5.png')" fit="contain">
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
                style="font-size:x-large;color: black;margin:auto;line-height: 110px;text-align: left;font-weight: 600;">
                安全驾驶舱
              </dd>
              <dd style="border-top: 5px solid #409EFF;margin: 0;width: 80px"></dd>
              <dd style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;margin-top: 20px;">
                监测驾驶员抽烟、打电话、疲劳驾驶、手离方向盘、分神未系安全带等异常行为
              </dd>
            </dl>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <el-row style="margin-top:60px">
      <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"
        :xl="{span:20,offset:2}" style="height: 425px;">
        <el-col :span="10" :offset="1" style="margin-top: 3%;">
          <div>
            <dl>
              <dd
                style="font-size:x-large;color: black;margin:auto;line-height: 110px;text-align: left;font-weight: 600;">
                盲区预警</dd>
              <dd style="border-top: 5px solid #409EFF;margin: 0;width: 80px"></dd>
              <dd style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;margin-top: 20px;">
                监测行车过程中盲区的行人、电动车、自行车等情况，并预警提醒驾驶员注意行车安全
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}" :lg="{span:10,offset:3}"
          :xl="{span:10,offset:3}">
          <el-image :src="require('@/assets/bus6.png')" fit="contain">
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
    <el-row style="margin-top:60px">
      <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"
        :xl="{span:20,offset:2}" style="height: 500px;">
        <el-col :xs="{span:10,offset:0}" :sm="{span:10,offset:0}" :md="{span:10,offset:0}" :lg="{span:10,offset:0}"
          :xl="{span:10,offset:0}" style="margin-top:50px;">
          <el-image :src="require('@/assets/bus7.png')" fit="contain">
            <div slot="placeholder" class="image-slot">
              <i class="el-icon-loading"></i>加载中
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-col>
        <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}" :lg="{span:10,offset:3}"
          :xl="{span:10,offset:3}" style="margin-top: 2%;">
          <div>
            <dl>
              <dd
                style="font-size:x-large;color: black;margin:auto;line-height: 110px;text-align: left;font-weight: 600;">
                客流统计
              </dd>
              <dd style="border-top: 5px solid #409EFF;margin: 0;width: 80px"></dd>
              <dd style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;margin-top: 20px;">
                监测驾驶员抽烟、打电话、疲劳驾驶、手离方向盘、分神未系安全带等异常行为
              </dd>
            </dl>
          </div>
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
      return {
      }
    },
  }
</script>

<style>
  .bus_solution_banner {
    background-image: url("../../assets/bus_solution.jpeg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 600px;
  }

  .bus_img_1 {
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    transition: all .5s ease .1s;
  }
</style>