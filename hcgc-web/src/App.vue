<template>
  <div id="content">
    <!-- <TestPage/> -->
      <router-view></router-view>

    <el-backtop />
  </div>
</template>

<script>
  // import TestPage from './components/TestPage'

  export default {
    name: 'App',
    components: {
      // TestPage,
    }
  }


</script>

<style>
  #content {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave {
    opacity: 10;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>