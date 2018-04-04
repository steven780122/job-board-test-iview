<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>     <!-- 默認的router-view -->
  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

#app {
    /* 最外層css，為了避免覆蓋其他，先註解 */
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */  /*離頂端間距*/
}


</style>
