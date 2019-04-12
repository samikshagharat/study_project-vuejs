<template>
  <div class="PF" style="color: black;">
    <h1>Create Your profile</h1>
    <p><h2>
      Let's get some information to make your profile stand out
      <br>* = required Fields
    </h2 > </p>
    <div>
      <label>Profile Handel=</label>
      <input v-model="profile.handle" placeholder="Profile Handel">
      <br>
      <br>
      <label>Profile status=</label>
      <select v-model="profile.status">
        <option disabled value=" ">*Select Professional Status</option>
        <option>Developer</option>
        <option>Junior Developer</option>
        <option>Senior Developer</option>
        <option>Manager</option>
        <option>Student or learning</option>
        <option>teacher or Instructor</option>
        <option>Intern</option>
        <option>Other</option>
      </select>
      <br>
      <br>
      <label>Company Name=</label>
      <input v-model="profile.company" placeholder="Company">
      <br>
      <br>
      <label>Company Website=</label>
      <input v-model="profile.website" placeholder="Website">
      <br>
      <br>
      <label>Company Location=</label>
      <input v-model="profile.location" placeholder="Location">
      <br>
      <br>
      <label>Skills=</label>
      <input v-model="profile.skills" placeholder="Skills">
      <br>
      <br>
      <label>Github User Name=</label>
      <input v-model="profile.githubusername" placeholder="Github User Name">
      <br>
      <br>
      <label>Short Bio=</label>
      <textarea v-model="profile.bio" placeholder="Short Bio"></textarea>
      <br>
      <br>
      <!-- <input v-model="profile.youtube" placeholder="youtube">
      <br>
      <br>
      <input v-model="profile.twitter" placeholder="twitter">
      <br>
      <br>
      <input v-model="profile.facebook" placeholder="facebook">
      <br>
      <br>
      <input v-model="profile.instagram" placeholder="instagram">
      <br>
      <br>
      <input v-model="profile.linkedin" placeholder="linkedin">
      <br>
      <br>-->
      <md-button class="mybtn" @click="submit">Submit</md-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      profile: {
        handle: " ",
        status: " ",
        company: " ",
        website: " ",
        location: " ",
        skills: " ",
        githubusername: " ",
        bio: " ",
        youtube: " ",
        twitter: " ",
        facebook: " ",
        instagram: " ",
        linkedin: " "
      },
      token: " ",
      localStorage: " ",
      sessionId: " ",
    };
  },
  methods: {
    
    submit() {
      // console.log(this.profile, "profil data here");
      axios
        .post("http://localhost:5000/profile", this.profile, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("loginId")
          }
        })
        .then(function(response) {
          
          // console.log(response,"ythj")
         // localStorage.getItem("loginId")
          console.log("sucessful");
        
          
          alert("Profile Created sucessfully");
          
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
.PF {
  text-align: center;
  background: blanchedalmond;
}
.text {
  /* width: 33px; */
  height: 80px;
  background-color: aqua;
}
.md-button.md-theme-default {
  color: #fff;
  color: #191616;
}
html.md-theme-default {
  background-color: #303030;
  background-color: #ffebcd;
  color: #fff;
  color: var(--md-theme-default-text-primary-on-background-variant, #fff);
}
</style>
