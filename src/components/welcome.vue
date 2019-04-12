<template>
  <div class="nav">
    <h1>Welcome..!!</h1>
    <!--Navbar-->
    <md-button class="md-raised md-accent nav" @click="profile()">create Profile</md-button>
    <br>
    <br>
    <br>
    <md-button class="md-raised md-accent nav" @click="addexp()">Add Experience</md-button>
    <br>
    <br>
    <md-button class="md-raised md-accent nav" @click="getprofile()">Get Profile</md-button>
    <br>
    <br>
    <md-button class="md-raised md-accent nav" @click="post()">Post</md-button>
    <br>
    <br>
    <md-button class="md-raised md-accent nav" @click="New()">New</md-button>
  </div>
</template>



<script>
export default {
  data() {
    return {};
  },
  methods: {
    profile() {
      this.$router.push({
        path: "/profile"
      });
    },
    addexp() {
      this.$router.push({
        path: "/addexp"
      });
    },
    getprofile() {
      this.$router.push({
        path: "/getprofile"
      });
    },
    post() {
      this.$router.push({
        path: "/post"
      });
    },
    New() {
      this.$router.push({
        path: "/new"
      });
    }
  }
};
</script>

<style>
.btn {
  background-color: rgb(57, 135, 224);
}
.nav {
  /* background:blanchedalmond; */
  text-align: center;
  color: #3644e4;
  /* font-size: 30px; */
  /* padding: 80px; */

  /* padding: 80px; */
}
.nav1 {
  height: 40px;
  -webkit-column-width: 20px;
}
body {
  background: blanchedalmond;
  min-height: 100%;
  margin: 0;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif;
}
html.md-theme-default {
  background-color: #303030;
  background-color: #ffebcd;
  color: #fff;
  color: var(--md-theme-default-text-primary-on-background-variant, #fff);
}
</style>

