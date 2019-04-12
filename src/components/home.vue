<template>
  <div class="BG">
    <!-- <div :style="{'background-image':'url('+backgroundUrl+');'}"></div> -->
    <h1 class="nav">Developer Connector</h1>
    <p class="nav">Create a developer profile here , share, post and help other developer</p>
    <p></p>
    <div>
      <md-button class="md-raised md-accent nav" @click=" register()">Register</md-button>
      <md-button class="md-raised md-accent nav" @click="login()">Login</md-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: ""
      //   bgImage: "../../src/assets/logo.png",
      //   backgroundUrl: require("../../src/assets/logo.png")
    };
  },
  methods: {
    login() {
      //   console.log("here");
      this.$router.push({
        path: "/login"
      });
    },
    register() {
      //   console.log("here");
      this.$router.push({
        path: "/register"
      });
    }
  }
};
</script>

<style>
.BG {
  background: url("../../src/assets/showcase.jpg");
  height: 1000px;
  line-height: 50px;
  color: #061729;
  font-weight: 800;
  margin-top: auto;
  text-align: center;
}
</style>
