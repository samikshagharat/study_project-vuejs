<template style="background: blanchedalmond;">
  <div class="cls1">
    <h1 style="color: black;">Add Experience in profile</h1>
    <br>
    <br>
    <label>Title</label>
    <input v-model="Data.title" placeholder="Title">
    <br>
    <br>
    <label>Company Name</label>
    <input v-model="Data.company" placeholder="Company">
    <br>
    <br>
    <label>From</label>
    <input v-model="Data.from" placeholder="From">
    <br>
    <br>
    <label>To</label>
    <input v-model="Data.to" placeholder="To">
    <br>
    <br>
    <md-button class="mybtn" @click="addexp()">Submit</md-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Data: {
        title: " ",
        company: " ",
        to: " ",
        from: " "
      }
    };
  },
  methods: {
    addexp() {
      console.log("data", this.Data);
      axios
        .post("http://localhost:5000/profile/experience", this.Data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("loginId")
          }
        })
        .then(function(response) {
          console.log("sucessful", response);
          console.log("response.data._id :", response.data._id);

          alert("Profile updated sucessfully");
          // const status = JSON.parse(response.data);

          this.$router.push({ path: "/welcome" });
        })
        .catch(function(error) {
          // console.log("FAILURE!!", error);
        });
    }
  }
};
</script>

<style>
.cls1 {
  text-align: center;
  background: blanchedalmond;
}
html.md-theme-default {
  background-color: #303030;
  background-color: #ffebcd;
  color: #fff;
  color: var(--md-theme-default-text-primary-on-background-variant, #fff);
}
element.style {
  color: black;
}
.md-button.md-theme-default {
  color: #fff;
  color: #101010;
}
.cls1 {
  text-align: center;
  color: black;
  background: blanchedalmond;
}
</style>
