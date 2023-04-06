<template>
  <div>

    <Head></Head>
    <div class="about_us_banner"></div>
    <el-row>
      <div style="font-size:xxx-large;line-height: 250px;">公司简介</div>
    </el-row>
    <el-row>
      <el-col :xs="{span:22,offset:2}" :sm="{span:22,offset:2}" :md="{span:22,offset:2}" :lg="{span:22,offset:2}"
        :xl="{span:22,offset:2}" style="height: 700px;">
        <el-col :xs="{span:9,offset:1}" :sm="{span:9,offset:1}" :md="{span:9,offset:1}" :lg="{span:9,offset:1}"
          :xl="{span:9,offset:1}">
          <div>
            <dl>
              <dd style="font-size:x-large;color: black;margin:auto;line-height: 90px;">诚信·创新·共赢</dd>
              <dd style="text-align: initial;margin: auto; line-height: 45px;color: #73777c;">
                &emsp;&emsp;湖北惠诚共创科技有限公司坐落于湖北省咸宁市商业中心的温泉中心花坛，地理位置优越，交通便捷，绿化环境宜人。</dd>
              <dd style="text-align: initial;margin: auto; line-height: 45px;color: #73777c;">
                &emsp;&emsp;公司成立于2014年，公司始终致力于智慧交通技术领域发展，以北斗/GPS卫星定位终端产品应用推广，公司秉承着“诚信 协作创新
                卓越”的精神，为客户提供全面的技术咨询及技术应用整体解决方案。</dd>
              <dd style="text-align: initial;margin: auto; line-height: 45px;color: #73777c;">
                &emsp;&emsp;公司拥有多项软件著作权及相关资质证书，并获取了(ISO9001)质量管理体系认证，2022年获取湖北交通厅“湖北省道路运输车辆卫星定位平台服务商”。公司经过强力稳健的发展形成了一体化智慧交通综合服务，着力与专业的技术支持能力,用优质的服务及良好的信誉为客户们创造价值。
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="{span:12,offset:2}" :sm="{span:12,offset:2}" :md="{span:12,offset:2}" :lg="{span:12,offset:2}"
          :xl="{span:12,offset:2}">
          <el-image :src="require('@/assets/test1.jpg')" fit="contain">
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
    <el-row style="margin-top:100px;padding-bottom: 20px;">
      <div id="idea" style="width: 1100px;height: 300px;position: relative;">
        <div id="company_idea_title">
          <span style="font-size: x-large;font-weight: 600;float: left;">企业理念</span>
        </div>
        <div id="company_idea_detail">
          <div style="text-align:left;font-size: large;">专业创造价值、科技引领未来</div>
          <div style="text-align:left;font-weight: 300;margin-top:20px;line-height: 30px;">
            湖北惠诚共创科技有限公司以“专业创造价值、科技引领未来”为目标，以务实高效，优质服务的经营理念为依托，以客户需求为导向，以产品质量和优质的服务为中心，接轨市场，积极探索追求，不懈努力、竭尽所能的态度对每一个信任本公司的企业负责。
          </div>
        </div>
      </div>
    </el-row>
    <el-row>
      <div style="font-size:xxx-large;line-height: 250px;">售后服务</div>
    </el-row>
    <el-row>
      <el-col :xs="{span:22,offset:2}" :sm="{span:22,offset:2}" :md="{span:22,offset:2}" :lg="{span:22,offset:2}"
        :xl="{span:22,offset:2}" style="height: 700px;">
        <el-col :xs="{span:9,offset:1}" :sm="{span:9,offset:1}" :md="{span:9,offset:1}" :lg="{span:9,offset:1}"
          :xl="{span:9,offset:1}">
          <div>
            <dl>
              <dd style="font-size:x-large;color: black;margin:auto;line-height: 90px;">以客户需求为核心</dd>
              <dd style="text-align: initial;margin: auto; line-height: 45px;color: #73777c;">
                &emsp;&emsp;惠诚共创科技本着 “ 追求极致、专业、专注、专心 ” 的价值观和 “ 以客户需求为核心 ” 的服务态度向客户提供满意的售后服务。</dd>
              <dd style="text-align: initial;margin: auto; line-height: 45px;color: #73777c;">
                1、为客户提供7*24小时实时技术支持，收到问题后30分钟内响应。</dd>
              <dd style="text-align: initial;margin: auto; line-height: 45px;color: #73777c;">
                2、针对一般故障于当天远程方式协助解决；出现严重故障则24小时内现场支持。
              </dd>
              <dd style="text-align: initial;margin: auto; line-height: 45px;color: #73777c;">
                3、定期回访客户，不断迭代来满足客户需求，为客户创造价值。
              </dd>
              <dd style="text-align: initial;margin: auto; line-height: 45px;color: #73777c;">
                4、定期检查系统并升级服务，保障高质量运营，并同步软件更新情况至客户。
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="{span:12,offset:2}" :sm="{span:12,offset:2}" :md="{span:12,offset:2}" :lg="{span:12,offset:2}"
          :xl="{span:12,offset:2}">
          <el-image :src="require('@/assets/support.png')" fit="contain">
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
    <el-row style="margin-top:50px;margin-bottom: 80px;">
      <div id="idea" style="width: 1100px;height: 300px;position: relative;">
        <div id="company_idea_title">
          <span style="font-size: x-large;font-weight: 600;float: left;">企业文化</span>
        </div>
        <div id="company_idea_detail">
          <div style="text-align:left;font-size: large;">追求极致<el-divider direction="vertical"></el-divider>专业·专注·专心
          </div>
          <div style="text-align:left;font-weight: 300;margin-top:20px;line-height: 30px;">
            以实现客户价值为目标，追求极致，尽善尽美。做事专业：此心用度八千遍，不嫌厌倦；做事专注：抓准一个点，然后像一个钉子钻下去，做深、做透；做事专心：小事成就大事，细节成就完美。
          </div>
        </div>
      </div>
    </el-row>
    <el-row>
      <div style="font-size:xxx-large;line-height: 250px;">公司资质</div>
    </el-row>
    <el-row>
      <el-col>
        <div
          style="height: 480px;margin: auto;width: 1500px;display:-webkit-flex;display: flex;justify-content: space-around;">
          <div class="qualification">
            <div style="width: 170px;height: 270px;margin:auto;margin-top:30px;overflow: hidden;">
              <el-image class="qualification_img" :src="require('@/assets/company_qualification/qualification_one.png')"
                fit="fill" :preview-src-list="qualification_img_url_one">
                <div slot="placeholder" class="image-slot">
                  <i class="el-icon-loading"></i>加载中
                </div>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div style="font-size: large;line-height: 100px;width: 250px;margin:auto;">质量管理体系认证证书</div>
          </div>
          <div class="qualification">
            <div style="width: 170px;height: 270px;margin:auto;margin-top:30px;overflow: hidden;">
              <el-image class="qualification_img" :src="require('@/assets/company_qualification/qualification_two.jpg')"
                fit="fill" :preview-src-list="qualification_img_url_two">
                <div slot="placeholder" class="image-slot">
                  <i class="el-icon-loading"></i>加载中
                </div>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div style="font-size: large;width: 250px;margin:auto;margin-top:25px;">交通运输通信信息工程质量检测报告</div>
          </div>
          <div class="qualification">
            <div style="width: 170px;height: 270px;margin:auto;margin-top:30px;overflow: hidden;">
              <el-image class="qualification_img"
                :src="require('@/assets/company_qualification/qualification_three.jpg')" fit="fill"
                :preview-src-list="qualification_img_url_three">
                <div slot="placeholder" class="image-slot">
                  <i class="el-icon-loading"></i>加载中
                </div>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div style="font-size: large;line-height: 100px;width: 250px;margin:auto;">计算机软件著作权登记证书</div>
          </div>
          <div class="qualification">
            <div style="width: 170px;height: 270px;margin:auto;margin-top:30px;overflow: hidden;">
              <el-image class="qualification_img"
                :src="require('@/assets/company_qualification/qualification_four.png')" fit="fill"
                :preview-src-list="qualification_img_url_four">
                <div slot="placeholder" class="image-slot">
                  <i class="el-icon-loading"></i>加载中
                </div>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div style="font-size: large;width: 250px;margin:auto;margin-top:25px;">湖北省道路运输车辆卫星定位平台服务商备案通知书</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div
          style="height: 480px;margin: auto;width: 1500px;display:-webkit-flex;display: flex;justify-content: space-around;">
          <div class="qualification">
            <div style="width: 250px;height: 200px;margin:auto;margin-top:70px;overflow: hidden;">
              <el-image class="qualification_img"
                :src="require('@/assets/company_qualification/qualification_five.png')" fit="fill"
                :preview-src-list="qualification_img_url_five">
                <div slot="placeholder" class="image-slot">
                  <i class="el-icon-loading"></i>加载中
                </div>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div style="font-size: large;width: 250px;margin:auto;margin-top:45px;">信息系统安全等级保护备案证明</div>
          </div>

          <div class="qualification">
            <div style="width: 170px;height: 270px;margin:auto;margin-top:30px;overflow: hidden;">
              <el-image class="qualification_img" :src="require('@/assets/company_qualification/qualification_six.png')"
                fit="fill" :preview-src-list="qualification_img_url_six">
                <div slot="placeholder" class="image-slot">
                  <i class="el-icon-loading"></i>加载中
                </div>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div style="font-size: large;line-height: 100px;width: 250px;margin:auto;">服务平台登记测评报告</div>
          </div>
          <div class="qualification">
            <div style="width: 170px;height: 270px;margin:auto;margin-top:30px;overflow: hidden;">
              <el-image class="qualification_img"
                :src="require('@/assets/company_qualification/qualification_seven.jpg')" fit="fill"
                :preview-src-list="qualification_img_url_seven">
                <div slot="placeholder" class="image-slot">
                  <i class="el-icon-loading"></i>加载中
                </div>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div style="font-size: large;line-height: 100px;width: 250px;margin:auto;">企业信用等级证书</div>
          </div>
          <div class="qualification">
            <div style="width: 170px;height: 270px;margin:auto;margin-top:30px;overflow: hidden;">
              <el-image class="qualification_img"
                :src="require('@/assets/company_qualification/qualification_eight.jpg')" fit="fill"
                :preview-src-list="qualification_img_url_eight">
                <div slot="placeholder" class="image-slot">
                  <i class="el-icon-loading"></i>加载中
                </div>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div style="font-size: large;line-height: 100px;width: 250px;margin:auto;">重合同守信用企业证书</div>
          </div>
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
    name: 'HelloWorld',
    components: {
      Head,
      Foot,
    },
    data() {
      return {
        qualification_img_url_one: [
          require('@/assets/company_qualification/qualification_one.png')
        ],
        qualification_img_url_two: [
          require('@/assets/company_qualification/qualification_two.jpg')
        ],
        qualification_img_url_three: [
          require('@/assets/company_qualification/qualification_three.jpg')
        ],
        qualification_img_url_four: [
          require('@/assets/company_qualification/qualification_four.png')
        ],
        qualification_img_url_five: [
          require('@/assets/company_qualification/qualification_five.png')
        ],
        qualification_img_url_six: [
          require('@/assets/company_qualification/qualification_six.png')
        ],
        qualification_img_url_seven: [
          require('@/assets/company_qualification/qualification_seven.jpg')
        ],
        qualification_img_url_eight: [
          require('@/assets/company_qualification/qualification_eight.jpg')
        ],
      }
    },
  }
</script>

<style>
  .about_us_banner {
    background-image: url("../assets/about_us3.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 600px;
  }

  #idea {
    background-image: url("../assets/test2.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;

    margin: auto;
  }

  #idea:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  #company_idea_title {
    width: 550px;
    height: 200px;
    float: left;
    border-right: 1px solid #d8d9dc;
    position: absolute;
    top: 50px;
    left: 50px;
  }

  #company_idea_detail {
    width: 400px;
    height: 200px;
    float: right;
    position: absolute;
    top: 50px;
    left: 650px;
  }

  .qualification {
    width: 300px;
    height: 400px;
    float: left;
    background-color: #f6f7f9;
  }

  .qualification_img {
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    transition: all .5s ease .1s;
  }

  .qualification_img:hover {
    transform: scale(1.1);
  }

  #professional_pic {
    height: 500px;
  }

  .professional_img {
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    float: right;
  }
</style>