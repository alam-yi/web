<template>
  <div id="content">
    <ContainerHead/>
    <!-- <TestPage/> -->
    <!-- <img class="article" src="./assets/logo.png">
    <HelloWorld/> -->
    <!-- <el-backtop target="#content" :visibility-height="400"></el-backtop> -->
    <el-backtop/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import TestPage from './components/TestPage'
import ContainerHead from './components/ContainerHead'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TestPage,
    ContainerHead
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
 opacity:0;
}
.fade-leave{
 opacity:10;
}
.fade-enter-active{
 transition:opacity .5s;
}
.fade-leave-active{
 opacity:0;
 transition:opacity .5s;
}
</style>
