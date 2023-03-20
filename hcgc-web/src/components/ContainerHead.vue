<template>
    <el-container>
        <el-header height="70px">
            <el-col :xs="{span:6,offset:0}" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:6,offset:0}"
                :xl="{span:6,offset:0}">
                <img class="logo" src="../assets/logo.png">
            </el-col>
            <el-col :xs="{span:12,offset:0}" :sm="{span:12,offset:0}" :md="{span:12,offset:0}" :lg="{span:12,offset:0}"
                :xl="{span:12,offset:0}" class="nav">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    text-color="black">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-menu-item index="2-4">选项4</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4">订单管理</el-menu-item>
                    <el-menu-item index="5">关于我们</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :xs="{span:6,offset:0}" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:6,offset:0}"
                :xl="{span:6,offset:0}">
                <div class="header-phone">
                    <i class="el-icon-phone">0715-8877363</i>
                </div>
            </el-col>
        </el-header>
        <el-main>
            <el-row>
                <img class="banner" src="../assets/banner.jpg">
            </el-row>
            <el-row>
                <div class="title">方案架构</div>
            </el-row>
            <el-row class="solution-architecture">
                <el-col :xs="{span:6,offset:4}" :sm="{span:6,offset:4}" :md="{span:6,offset:4}" :lg="{span:6,offset:4}"
                    :xl="{span:6,offset:4}">
                    <el-image :src="require('@/assets/solution1.jpg')" fit="contain">
                        <div slot="placeholder" class="image-slot">
                            <i class="el-icon-loading"></i>加载中
                        </div>
                        <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </el-image>
                </el-col>
                <el-col :xs="{span:6,offset:4}" :sm="{span:6,offset:4}" :md="{span:6,offset:4}" :lg="{span:6,offset:4}"
                    :xl="{span:6,offset:4}">
                    <el-image :src="require('@/assets/solution1.jpg')" fit="contain">
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
                <div class="title">应用场景</div>
            </el-row>
            <el-row class="application-scenario">
                <!-- <ul>
                    <li><img src="../assets/solution2.jpg"></li>
                    <li><img src="../assets/solution2.jpg"></li>
                    <li><img src="../assets/solution2.jpg"></li>
                </ul> -->
                <el-col :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}"
                    :lg="{span:20,offset:2}" :xl="{span:20,offset:2}" style="border: 1px solid black;">
                    <el-col :span="10" style="border:1px solid blue;display: inline-flex;">

                    </el-col>
                    <el-col :xs="{span:10,offset:3}" :sm="{span:10,offset:3}" :md="{span:10,offset:3}"
                        :lg="{span:10,offset:3}" :xl="{span:10,offset:3}" style="border:1px solid blue;display: inline-flex;">
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
        </el-main>
        <el-footer height="300px">Footer</el-footer>
    </el-container>
</template>

<script>
    // const devEnv = require('../../config/dev.env.js');
    import Api from '@/api/api'
    export default {
        data() {
            return {
                activeIndex: "1"
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleTest() {
                Api.getWeather(null).then(res => {
                    console.info(res);
                })

            }
        },
        mounted: function () {
            // console.info(devEnv.VUE_APP_API_BASE_PATH)
        },
        created: function () {
            this.handleTest();
        }
    }
</script>

<style>
    .logo {
        height: 70px;
    }

    .el-header {
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

    .header-phone {
        height: 70px;
        line-height: 70px;
        /* color: deepskyblue; */
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

    /* .solution-architecture>.el-col>.title,
    .application-scenario>.el-col>.title { */
    .title {
        font-size: 36px;
        color: #181a39;
        text-align: center;
        margin-bottom: 80px;
    }

    .solution-architecture>ul {
        width: 1400px;
        height: 700px;
        margin: auto;
    }

    .solution-architecture>ul>li {
        list-style: none;
        display: inline;
    }

    .solution-architecture>ul>li>.el-image {
        width: 500px;
        height: 600px;
    }

    .solution-architecture>ul>li:first-child {
        padding-right: 200px;
    }

    .application-scenario>ul {
        margin: auto;
    }

    .application-scenario>ul>li {
        list-style: none;

    }

    .el-footer {
        background-color: #373737;
        color: #f0f2f6;
        text-align: center;
        line-height: 200px;
        padding: 0;
    }
</style>