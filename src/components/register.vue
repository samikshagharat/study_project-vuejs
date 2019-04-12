<template>
  <div>
    <h1>Sign up</h1>
    <h2>Create Your Devconnector account</h2>
    <md-field>
      <label>Name</label>
      <md-input v-model=" registerObj.name"></md-input>
    </md-field>
    <md-field>
      <label>Email</label>
      <md-input v-model=" registerObj.email"></md-input>
    </md-field>
    <md-field>
      <label>Password</label>
      <md-input v-model=" registerObj.password"></md-input>
    </md-field>
    <md-field>
      <label>Confirm Password</label>
      <md-input v-model=" registerObj.password2"></md-input>
    </md-field>
    <md-button class="mybtn" @click="register()">Submit</md-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      registerObj: {
        name: " ",
        email: " ",
        password: " ",
        password2: " "
      }
    };
  },
  methods: {
    register() {
      // this.$router.push({ path: "/welcome" });
      console.log(this.registerObj, "hhjgjhg");
      let options = {
        method: "POST",
        url: "http://localhost:5000/user/register",
        data: JSON.stringify(this.registerObj),
        crossDomain: true,
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json"
        }
      };
      axios(options)
        .then(result => {
          //   const { statusText, status, data } = result;
          //   localStorage.setItem("loginId", result.data.token);
          //   if (statusText === "OK" && status === 200 && data) {
          //     console.log(data, "token");
          //     if (data.msg === "login sucess") {
          this.$router.push({
            path: "/welcome"
          });
        })
        .catch(error => {});
    }
  }
};
</script>

<style>
html.md-theme-default {
  background-color: #303030;
  background-color: #ffebcd;
  color: #fff;
  color: #060606;
}
</style>
