<template>
    <div>

        <Head></Head>
        <el-row>
            <el-carousel trigger="click" height="600px" style="min-width: 100%;">
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                    <img :src="item.idView" style="height: 100%;min-width: 100%;"></img>
                </el-carousel-item>
            </el-carousel>
        </el-row>
        <el-row>
            <div class="title">方案架构</div>
        </el-row>
        <el-row>
            <el-col :xs="{span:9,offset:3}" :sm="{span:9,offset:3}" :md="{span:9,offset:3}" :lg="{span:9,offset:3}"
                :xl="{span:9,offset:3}" style="height: 400px;">
                <el-image :src="require('@/assets/architecture4.png')" fit="contain"
                    style="border: 1px solid #EDEDED;border-radius: 10px;">
                    <div slot="placeholder" class="image-slot">
                        <i class="el-icon-loading"></i>加载中
                    </div>
                    <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </el-col>
            <el-col :xs="{span:7,offset:2}" :sm="{span:7,offset:2}" :md="{span:7,offset:2}" :lg="{span:7,offset:2}"
                :xl="{span:7,offset:2}">
                <div
                    style="border: 1px solid #EDEDED;background-color: #EDEDED; border-radius:15px;height: 400px;width: 500px;">
                    <dl>
                        <dd class="a_dd" style="font-size:xx-large;color: black;">惠诚共创交通解决方案</dd>
                        <dd class="a_dd" style="text-align: initial;width: 445px;margin: auto;">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;惠诚共创科技将从总体上考虑系统的建设，并倾尽全力配合用户在系统的整体规划、工程实施建设、网络支持服务以及系统的维护管理等各重要环节进行周密的部署，以充分满足其业务发展的信息化建设需要。
                        </dd>
                        <dd class="a_dd">
                            <div
                                style="border:1px solid white;background-color: white;border-radius: 15px;width:440px;height: 190px;margin:auto;">
                                <dl>
                                    <dt style="text-align: left;padding-left: 20px;color: black;font-size: large;">方案价值：
                                    </dt>
                                    <dd class="a_dd_dd"><i class="el-icon-caret-right"
                                            style="color: #409eff;"></i>准确定位车辆信息，实现车辆轨迹监控</dd>
                                    <dd class="a_dd_dd"><i class="el-icon-caret-right"
                                            style="color: #409eff;"></i>保证驾驶员操作更加规范，实现驾驶员管理便捷</dd>
                                    <dd class="a_dd_dd"><i class="el-icon-caret-right"
                                            style="color: #409eff;"></i>提高基础数据管理，并全方面大幅降低管理投入成本</dd>
                                </dl>
                            </div>
                        </dd>
                    </dl>
                </div>
            </el-col>
        </el-row>
        <el-row style="height: 700px;background-color: #F6F7F9;margin-top: 100px;">
            <div class="title">方案价值</div>
            <el-col :span="6" :offset="2" class="scheme_item">
                <el-image :src="safeLogoSrc" class="scheme_img"></el-image>
                <div class="scheme_title">保障司机安全</div>
                <div class="scheme_desc">为司机保驾护航，掌握行驶实时动态，最大限度降低安全事故。</div>
            </el-col>
            <el-col :span="6" :offset="1" class="scheme_item">
                <el-image :src="efficiencyLogoSrc" class="scheme_img"></el-image>
                <div class="scheme_title">提升车辆管理效率</div>
                <div class="scheme_desc">第一时间发现、第一时间处理，相较于传统运维效率显著提升。</div>
            </el-col>
            <el-col :span="6" :offset="1" class="scheme_item">
                <el-image :src="costLogoSrc" class="scheme_img"></el-image>
                <div class="scheme_title">节约多项成本</div>
                <div class="scheme_desc">提高基础数据管理，大幅降低材料、人力、财务、统计、分析经济成本。</div>
            </el-col>
        </el-row>
        <el-row>
            <div class="title">应用场景</div>
        </el-row>
        <el-row>
            <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"
                :xl="{span:20,offset:2}" style="height: 425px;">
                <el-col :span="10" :offset="1" style="margin-top: 1%;">
                    <div>
                        <dl>
                            <dd style="font-size:x-large;color: black;margin:auto;line-height: 110px;">
                                面向政府、企业提供智慧交通解决方案</dd>
                            <dd style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;">
                                城市高速公路监控系统、城市电子收费系统、城市道路信息管理系统、汽车电子系统、停车场管理系统综合性协调运作，使人、车、路和交通系统交互一体，为交管部门提供交通信息，解决城市堵塞以及快速响应突发状况，智慧交通收集各类信息，为驾驶者提供多样化服务。
                            </dd>
                        </dl>
                    </div>
                </el-col>
                <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}"
                    :lg="{span:10,offset:3}" :xl="{span:10,offset:3}">
                    <el-image :src="require('@/assets/company.png')" fit="contain">
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
                <el-col :xs="{span:10,offset:0}" :sm="{span:10,offset:0}" :md="{span:10,offset:0}"
                    :lg="{span:10,offset:0}" :xl="{span:10,offset:0}" style="margin-top:50px;">
                    <el-image :src="require('@/assets/car.jpeg')" fit="contain">
                        <div slot="placeholder" class="image-slot">
                            <i class="el-icon-loading"></i>加载中
                        </div>
                        <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </el-image>
                </el-col>
                <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}"
                    :lg="{span:10,offset:3}" :xl="{span:10,offset:3}" style="margin-top: 5.5%;">
                    <div>
                        <dl>
                            <dd style="font-size:x-large;color: black;margin:auto;line-height: 110px;">智能车联网监控管理系统平台
                            </dd>
                            <dd style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;">
                                针对不同的场景，提供了多样化管理平台：两客一危车辆智能监控管理平台；智能公交监控调度一体化管理平台；货运监控管理平台；出租车智能化监控管理平台；押运车监控管理平台；船舶监控管理平台。（车辆传感设备：胎压监测、油量监测、载重监测、车辆举升监测、门磁监测等）
                            </dd>
                        </dl>
                    </div>
                </el-col>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"
                :xl="{span:20,offset:2}" style="height: 500px;">
                <el-col :span="10" :xl="{span:10,offset:3}" style="margin-top: 5.5%;">
                    <div>
                        <dl>
                            <dd style="font-size:x-large;color: black;margin:auto;line-height: 110px;">安防监控信息化系统</dd>
                            <dd style="text-align: initial;margin: auto; line-height: 30px;color: #73777c;">
                                准确有效提供安防监控系统，将监控视频中心和网络监控中心互联结合，让整体结构清晰、简洁、集成度高；管理应用方便，减轻操作维护人员工作；查看监控简便，任意回放一个或多个监控画面；体现无缝扩展能力，只要添加远程监控点就可以组成庞大的多级监控网络。
                            </dd>
                        </dl>
                    </div>
                </el-col>
                <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}"
                    :lg="{span:10,offset:3}" :xl="{span:10,offset:3}" style="margin-top:50px;">
                    <el-image :src="require('@/assets/monitor.jpg')" fit="contain">
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
            <div class="title">优秀案例</div>
        </el-row>
        <Foot></Foot>
    </div>
</template>

<script>
    import router from '../router/router'
    import Api from '@/api/api'
    import Head from '../views/base/head'
    import Foot from '../views/base/foot'

    export default {
        data() {
            return {
                bannerList: [
                    { id: 1, idView: require('@/assets/banner_1.jpg') },
                    { id: 2, idView: require('@/assets/banner1.jpg') },
                    { id: 3, idView: require('@/assets/banner2.jpeg') },
                ],
                safeLogoSrc: require('@/assets/safe_logo.png'),
                costLogoSrc: require('@/assets/cost_logo.png'),
                efficiencyLogoSrc: require('@/assets/efficiency_logo.png'),
                carouselHeight: null
            }
        },
        components: {
            Head,
            Foot,
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleTest() {
                Api.getWeather(null).then(res => {
                    console.info(res);
                })
            },
        },
        mounted: function () {
            // console.info(devEnv.VUE_APP_API_BASE_PATH)
        },
        created: function () {
            // this.handleTest();
        }
    }
</script>

<style>
    .el-container {
        min-height: 100%;
        justify-content: space-between;
    }

    .el-main {
        padding: 0;
        /* background-color: #E9EEF3; */
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    .banner {
        background: url(../assets/banner.jpg) no-repeat;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center 0;
        top: 0;
        left: 0;
        zoom: 1;
    }

    .el-menu.el-menu--horizontal {
        border: none;
        height: 70px;
        width: max-content;
        padding: 0;
    }

    .el-menu.el-menu--horizontal>li,
    .el-menu--horizontal>.el-submenu .el-submenu__title {
        height: 70px;
        line-height: 70px;
        font-size: large;
    }

    .el-menu--horizontal>ul>li {
        font-size: large;
    }

    .title {
        font-size: 36px;
        color: #181a39;
        text-align: center;
        line-height: 250px;
    }

    /* .el-image {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    } */

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .logo_icon>.el-image>img {
        width: 50%;

        transition: 1s;
        cursor: pointer;
    }

    .logo_icon>.el-image:hover img {
        transition: 1s;
        transform: scale(1.2);
    }


    .l {
        /* -webkit-transform: translateY(100%);
        transform: translateY(100%);
        margin-top: -25px; */
        height: 200px;
    }

    .a_dd {
        margin: 0;
        padding: 10px;
        color: #73777c;
    }

    .a_dd_dd {
        margin: 0;
        float: left;
        padding-top: 20px;
        padding-left: 15px;
    }

    .scheme_item {
        background-color: white;
        height: 320px;
        border-radius: 12px;
    }

    .scheme_item:hover {
        /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) */
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .scheme_img {
        width: 80px;
        margin-top: 50px;
    }

    .scheme_title {
        font-size: x-large;
        margin-top: 15px;
    }

    .scheme_desc {
        margin: auto;
        line-height: 30px;
        color: #73777c;
        width: 80%;
        margin-top: 20px;
    }
</style>