<template>
  <div>
    <h1>Your Profile Detils</h1>
    <table class="table" border="1">
      <thead>
        <tr class="tr">
          <th scope="col">ID</th>
          <br>
          <th scope="col2">company</th>
          <br>
          <br>
          <th scope="col3">current</th>
          <br>
          <th scope="col4">from</th>
          <br>
          <th scope="col5">title</th>
          <br>

          <!-- <th scope="col5">Web site</th>
          <br>
          <th scope="col6">Status</th>
          <br>-->
        </tr>
      </thead>
      <tbody class="td">
        <tr v-for="(item,index) in this.profile" :key="index">
          <td>{{item._id}}</td>
          <br>
          <td>{{item.company}}</td>
          <br>
          <td>{{item.current}}</td>
          <br>
          <td>{{item.from}}</td>
          <br>
          <td>{{item.title}}</td>
          <br>
          <br>
          <td>
            <md-button class="md-raised md-accent nav" @click="editData(item._id )">edit</md-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      profile: [],
      toLowerCase: " ",
      Items: " ",
      _id: " ",
      edit: " "
    };
  },
  computed: {},
  methods: {
    editData(Id) {
      localStorage.setItem("profileId", Id);
      this.$router.push({
        path: "/addexp"
      });
    }
  },
  created() {
    axios
      .get("http://localhost:5000/profile", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("loginId")
        }
      })
      .then(response => {
        this.profile = response.data;
        console.log(this.profile, "display profile");
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.tr {
  padding-right: 20px;
}
.td {
  padding-right: 20px;
}
element.style {
  color: black;
}
.md-body-1,
.md-body-2,
body {
  background: blanchedalmond;
  font-size: 14px;
  letter-spacing: 0.01em;
}
html.md-theme-default {
  background-color: #303030;
  background-color: var(--md-theme-default-background-variant, #303030);
  color: #fff;
  color: #171414;
  text-align: center;
  padding: initial;
}
element.style {
  padding: 20px;
}
html.md-theme-default {
  background-color: #303030;
  background-color: #ffebcd;
  color: #fff;
  color: #171414;
  text-align: center;
  padding: initial;
}
.md-body-1,
.md-body-2,
body {
  background: blanchedalmond;
  font-size: 14px;
  letter-spacing: 0.01em;
  color: black;
}
</style>
