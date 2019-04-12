<template>
  <div class="BG1">
    <h1 class="nav">welcome to login</h1>

    <div style="padding:30px" class="label">
      <md-field>
        <label>Email</label>
        <md-input v-model="loginObj.email"></md-input>
      </md-field>
      <md-field>
        <label>Password</label>
        <md-input v-model="loginObj.password" type="password"></md-input>
      </md-field>
    </div>
    <md-button class="mybtn" @click="login()">Login</md-button>
    <div>
      <p>
        Or Sign-in with google
        <br>
        <br>
        <!-- <button @click="sociallogin()" class="btn">
          <img alt="google.png" src="../../src/assets/google.png">
        </button>-->
        <g-signin-button
          :params="googleSignInParams"
          @success="onSignInSuccess"
          @error="onSignInError"
        >Sign in with Google</g-signin-button>
      </p>
    </div>
  </div>
</template>


<script src="https://apis.google.com/js/platform.js" async defer></script>

<script>
import axios from "axios";

import * as firebase from "firebase";

export default {
  data() {
    return {
      loginObj: {
        email: " ",
        password: " "
      },
      error: "user not found ",
      googleSignInParams: {
        client_id:
          "897501847453-aim5bgtk0tm755em41g9qt5d65656igf.apps.googleusercontent.com"
      }
    };
  },
  methods: {
    login() {
      // this.$router.push({ path: "/welcome" });
      console.log(this.loginObj, "hhjgjhg");
      let options = {
        method: "POST",
        url: "http://localhost:5000/user/login",
        data: JSON.stringify(this.loginObj),
        crossDomain: true,
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json"
        }
      };
      axios(options)
        .then(result => {
          const { statusText, status, data } = result;
          localStorage.setItem("loginId", result.data.token);
          if (statusText === "OK" && status === 200 && data) {
            console.log(data, "token");
            if (data.msg === "login sucess") {
              this.$router.push({
                path: "/welcome"
              });
            }
          }
        })
        .catch(error => {});
    },
    onSignInSuccess(googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile(); // etc etc
      console.log("google welcome", profile);
      this.$router.push({
        path: "/welcome"
      });
    },
    onSignInError(error) {
      // `error` contains any error occurred.
      console.log("OH NOES", error);
    }
    //     login() {
    //       axios
    //         .post("http://localhost:5000/user/login", {
    //           email: this.email,
    //           password: this.password,
    //           headers: {
    //             "Content-type": "application/json"
    //           }
    //         })
    //         .then(function(response) {
    //           //   const status = JSON.parse(response.data.response.status);
    //           //   console.log(response.data);
    //           this.$router.push({ path: "/welcome" });
    //         })
    //         .catch(function(error) {
    //           //   console.log("FAILURE!!", error);
    //         });
    //       // .then(function(response) {
    //       //   console.log("sucess!!");
    //       //   const status = JSON.parse(response.data.response.status);
    //       //   if (status == "200") {
    //       //     this.$router.push({
    //       //       path: "/welcome"
    //       //     });
    //       //   }
    //       // });
    //     }
  }
};
</script>

<style>
.mybtn {
  color: #171414;
  background-color: rgb(147, 203, 236);

  grid-area: inherit;
  margin: 1px 1px;
  font-size: 20px;
}
.BG1 {
  background-color: #c1a7a7;
  color: white;
  text-align: center;
  padding: 100px;
  font-size: 20px;
}
.Label {
  color: black;
  /* background-color: #0a0b0c; */
  background-color: #101010;
}
.btn {
  width: 80px;
}
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
