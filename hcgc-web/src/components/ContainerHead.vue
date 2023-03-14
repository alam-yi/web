<template>
    <el-container >
        <el-header height="70px">
            <el-col :span="6">
                <img class="logo" src="../assets/logo.png">
            </el-col>
            <el-col :span="12" class="nav">
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
                <!-- <div class="line"></div> -->
            </el-col>
            <el-col :span="6">
                <i class="el-icon-phone"></i>
                <span class="header-phone">0715-8877363</span>
            </el-col>
        </el-header>
        <el-main>
            <el-row>
                <img class="banner" src="../assets/banner.jpg">
            </el-row>
            <el-row class="solution-architecture">
                <div class="title">方案架构</div>
                <ul>
                    <li><img src="../assets/solution1.jpg"></li>
                    <li><img src="../assets/solution1.jpg"></li>
                </ul>
            </el-row>
            <el-row class="application-scenario">
                <div class="title">解决方案</div>
                <ul>
                    <li><img src="../assets/solution2.jpg"></li>
                    <li><img src="../assets/solution2.jpg"></li>
                    <li><img src="../assets/solution2.jpg"></li>
                </ul>
            </el-row>
        </el-main>
        <el-footer height="300px">Footer</el-footer>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: "1"
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
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
        /*关键*/
        background-position: center 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* min-width: 1600px; */
        /* z-index: -10; */
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

    .solution-architecture>.title,.application-scenario>.title {
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

    .solution-architecture>ul>li>img {
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