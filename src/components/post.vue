<template>
  <div>
    <h1>Create Post</h1>
    <input v-model="text" placeholder="Text">
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: " "
    };
  },
  methods: {
    submit() {
      console.log(this.text, "profil data here");
      axios
        .post("http://localhost:5000/post", this.text, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("loginId")
          }
        })
        .then(function(response) {
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
</style>
