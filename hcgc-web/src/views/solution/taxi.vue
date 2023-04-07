<template>
  <div>

    <Head></Head>
    <div class="taxi_solution_banner"></div>
    <el-row>
      <div style="font-size:xxx-large;line-height: 250px;">出租车/网约车解决方案</div>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="font-size:21px;line-height: 50px;padding-bottom: 40px;">
        获取出租车的位置、速度、载客状态、行车轨迹、统计报表等信息；一键报警保障司机安全。实现出租车和网约车全过程的实时动态监控。
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="2" style="height: 800px;">
        <el-image :src="require('@/assets/solution/taxi_solution_1.png')" fit="contain" class="bus_img_1">
          <div slot="placeholder" class="image-slot">
            <i class="el-icon-loading"></i>加载中
          </div>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-col>
    </el-row>
    <el-row style="height: 700px;background-color: #F6F7F9;margin-top: 100px;">
      <div class="title">主动安全</div>
      <div style="font-size:large;margin-top:-30px;">实时检测驾驶过程中可能遇到的不安全驾驶行为，通过提醒驾驶员，同时上报平台，预防和减少安全事故的发生。</div>
      <div style="margin-top:70px;">
        <el-col :span="3" :offset="3" class="safe_item">
          <el-image :src="safe_img_1" class="safe_img"></el-image>
          <div class="safe_title">疲劳驾驶</div>
        </el-col>
        <el-col :span="3" :offset="1" class="safe_item">
          <el-image :src="safe_img_2" class="safe_img"></el-image>
          <div class="safe_title">抽烟驾驶</div>
        </el-col>
        <el-col :span="3" :offset="1" class="safe_item">
          <el-image :src="safe_img_3" class="safe_img"></el-image>
          <div class="safe_title">打电话驾驶</div>
        </el-col>
        <el-col :span="3" :offset="1" class="safe_item">
          <el-image :src="safe_img_4" class="safe_img"></el-image>
          <div class="safe_title">车道偏离</div>
        </el-col>
        <el-col :span="3" :offset="1" class="safe_item">
          <el-image :src="safe_img_5" class="safe_img"></el-image>
          <div class="safe_title">未系安全带</div>
        </el-col>
      </div>
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
                style="font-size:xx-large;color: black;margin:auto;line-height: 110px;text-align: left;font-weight: 600;">
                保障司乘人员安全及服务监管</dd>
              <dd style="border-top: 5px solid #409EFF;margin: 0;width: 80px"></dd>
              <dd
                style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;margin-top: 20px;font-size: large;">
                为司机设置一键报警功能，同时针对后排乘客智能监控，保障司乘人员的安全。对驾驶员的服务进行监管，提升服务水平。
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}" :lg="{span:10,offset:3}"
          :xl="{span:10,offset:3}">
          <el-image :src="require('@/assets/solution/taxi_solution_3.jpg')" fit="contain">
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
          <el-image :src="require('@/assets/solution/taxi_solution_4.jpg')" fit="contain">
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
                全域搜索车辆位置及信息
              </dd>
              <dd style="border-top: 5px solid #409EFF;margin: 0;width: 80px"></dd>
              <dd
                style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;margin-top: 20px;font-size: large;">
                自定义条件并根据选定起始点搜索车辆位置及信息。满足各种特殊情况来定位搜寻车辆信息，多角度提升监管者工作效率。
              </dd>
            </dl>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <el-row style="margin-top:60px">
      <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"
        :xl="{span:20,offset:2}" style="height: 425px;">
        <el-col :span="10" :offset="1" style="margin-top: 1.5%;">
          <div>
            <dl>
              <dd
                style="font-size:xx-large;color: black;margin:auto;line-height: 110px;text-align: left;font-weight: 600;">
                行车数据分析</dd>
              <dd style="border-top: 5px solid #409EFF;margin: 0;width: 80px"></dd>
              <dd
                style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;margin-top: 20px;font-size: large;">
                实时汇总多种类型报表统计，如：收入分析、支出分析等。直观感受不同统计结果，全方位满足用户所需，并提供有效的数据支撑。
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}" :lg="{span:10,offset:3}"
          :xl="{span:10,offset:3}">
          <el-image :src="require('@/assets/solution/taxi_solution_2.png')" fit="contain">
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
      return {
        safe_img_1: require('@/assets/solution/sleep.png'),
        safe_img_2: require('@/assets/solution/smoke.png'),
        safe_img_3: require('@/assets/solution/call.png'),
        safe_img_4: require('@/assets/solution/departure.png'),
        safe_img_5: require('@/assets/solution/seat_belt.png'),
      }
    },
  }
</script>

<style>
  .taxi_solution_banner {
    background-image: url("../../assets/solution/taxi_banner.png");
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

  .title {
    font-size: 36px;
    color: #181a39;
    text-align: center;
    line-height: 250px;
  }

  .safe_item {
    background-color: white;
    height: 300px;
    border-radius: 10px;
  }

  .safe_item:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }

  .safe_img {
    width: 70px;
    margin-top: 80px;
    transition: all .5s ease .1s;
  }

  .safe_title {
    margin-top: 50px;
    font-weight: 600;
  }
</style>