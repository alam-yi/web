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
            <el-col :xs="{span:9,offset:2}" :sm="{span:9,offset:2}" :md="{span:9,offset:2}" :lg="{span:9,offset:2}"
                :xl="{span:9,offset:2}" style="height: 400px;">
                <el-image :src="require('@/assets/architecture.png')" fit="contain" style="border: 1px solid #EDEDED;">
                    <div slot="placeholder" class="image-slot">
                        <i class="el-icon-loading"></i>加载中
                    </div>
                    <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </el-col>
            <el-col :xs="{span:7,offset:3}" :sm="{span:7,offset:3}" :md="{span:7,offset:3}" :lg="{span:7,offset:3}"
                :xl="{span:7,offset:3}">
                <div style="border: 1px solid #EDEDED;background-color: #EDEDED; border-radius:15px;height: 400px;">
                    <dl>
                        <dd class="a_dd" style="font-size:xx-large;color: black;">惠城智慧交通解决方案</dd>
                        <dd class="a_dd" style="text-align: initial;">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;惠诚共创科技将从总体上考虑系统的建设，并倾尽全力配合用户在系统的整体规划、工程实施建设、网络支持服务以及系统的维护管理等各重要环节进行周密的部署，以充分满足其业务发展的信息化建设需要。
                        </dd>
                        <dd class="a_dd">
                            <div
                                style="border:1px solid white;background-color: white;border-radius: 15px;width:400px;height: 200px;margin:auto;">
                                <dl>
                                    <dt style="text-align: left;padding-left: 20px;">方案价值：</dt>
                                    <dd class="a_dd_dd"><i class="el-icon-caret-right" style="color: #409eff;"></i>通过GPS定位，准确定位车辆信息，实现车辆轨迹监控</dd>
                                    <dd class="a_dd_dd"><i class="el-icon-caret-right" style="color: #409eff;"></i>保证驾驶员操作作业程序更加规范，实现驾驶员管理便捷</dd>
                                    <dd class="a_dd_dd"><i class="el-icon-caret-right" style="color: #409eff;"></i>提高基础数据管理，降低材料、人力、财务、统计、分析将大幅降低经济成本</dd>
                                </dl>
                            </div>
                        </dd>
                    </dl>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="title">应用场景</div>
        </el-row>
        <el-row>
            <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}"
                :xl="{span:20,offset:2}" style="border: 1px solid black;">
                <el-col :span="10" style="border:1px solid blue;display: inline-flex;">
                </el-col>
                <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}"
                    :lg="{span:10,offset:3}" :xl="{span:10,offset:3}"
                    style="border:1px solid blue;display: inline-flex;">
                    <el-image :src="require('@/assets/solution2.jpg')" fit="contain">
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
        <!-- <el-row>
            <img class="banner" src="../assets/banner.jpg">
        </el-row> -->
        <el-row class="l">
            <el-col :span="6" :offset="1" v-for="logo in logoSrc" :key="logo" class="logo">
                <el-image :src="logo.src" style="width: 60%;"></el-image>
                <div class="demonstration" style="color:#1677FF">{{logo.name}}</div>
            </el-col>
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
                logoSrc: [
                    { name: '安全', src: require('@/assets/safe_logo.png') },
                    { name: '稳定', src: require('@/assets/stable_logo.png') },
                    { name: '高效', src: require('@/assets/efficiency_logo.png') },
                ],
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

    .logo>.el-image>img {
        width: 60%;
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
    }
    .a_dd_dd {
        margin: 0;
    }
</style>