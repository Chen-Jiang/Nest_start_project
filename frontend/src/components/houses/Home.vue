<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Nest Customer List App Tutorial</h1>
      <p> Built with Nest.js, Vue.js and MongoDB</p>
      <div v-if="crimes.length === 0">
        <h2> No customer found at the moment </h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
        <tr>
          <th scope="col">Area</th>
          <th scope="col">Crime</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="customer in crimes" :key="customer._id">
          <td>{{ customer.Name }}</td>
          <td>{{ customer.Crime }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { server } from "@/helper";
import axios from "axios";
export default {
  data() {
    return {
      crimes: []
    };
  },
  created() {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() {
      axios
          .get(`${server.baseURL}/house/all`)
          .then(data => (this.crimes = data.data));
    },
    deleteCustomer(id) {
      axios
          .delete(`${server.baseURL}/customer/delete?customerID=${id}`)
          .then(data => {
            console.log(data);
            window.location.reload();
          });
    }
  }
};
</script>

<style scoped>

</style>
