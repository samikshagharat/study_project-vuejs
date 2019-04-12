<template>
  <div>
    <!-- id="app"> -->
    <!-- <login msg="welcome to login"/> -->
    <!-- <welcome/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import login from "./components/login.vue";
import home from "./components/home";
// import welcome from "./components/welcome";

export default {
  name: "app",
  components: {
    // login
    home
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
/* margin-top: 60px; */
/* } */
</style>
