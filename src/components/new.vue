<template>
  <div>
    <label>Handle</label>
    <input v-model="handle" placeholder="handle">
    <md-button class="md-raised md-accent nav" @click="New">ok</md-button>
    <h1>Your Profile Detils</h1>
    <table class="table" border="1">
      <thead>
        <tr class="tr">
          <th scope="col">_id</th>
          <br>
          <th scope="col2">name</th>
          <br>
          <br>
          <th scope="col3">website</th>
          <br>
          <th scope="col4">avatar</th>
          <br>
          <th scope="col5">skills</th>
          <br>
          <th scope="col5">Date</th>

          <!-- <th scope="col5">Web site</th>
          <br>
          <th scope="col6">Status</th>
          <br>-->
        </tr>
      </thead>
      <tbody class="td">
        <tr v-for="(items,index) in this.profile" :key="index">
          <td>{{items._id}}</td>
          <br>
          <td>{{items.name}}</td>
          <br>
          <td>{{items.website}}</td>
          <br>
          <td>{{items.avatar}}</td>
          <br>
          <td>{{items.skills}}</td>
          <br>
          <br>
          <td>{{items.date}}</td>
          <br>
          <td>
            <md-button class="md-raised md-accent nav" @click="dataedit(item.handle)">EDIT</md-button>
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

      handle: "5c46b7fd5d19f9171c6dbc14"
    };
  },
  methods: {
    dataedit(handle) {
      localStorage.setItem("Handle", this.handle);
      console.log(this.handle, "handledata");
    },

    New() {
      console.log(handle, "handle");
      axios
        .get(
          "http://localhost:5000/profile/user/" + this.handle,
          
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("loginId")
            }
          }
        )
        .then(response => {
          this.profile = response.data;
          console.log(this.response.data._id, "display profile111111");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
