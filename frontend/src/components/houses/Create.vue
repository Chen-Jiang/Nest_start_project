<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2> Create Customer </h2>
      <form id="create-post-form" @submit.prevent="createCustomer">
        <div class="form-group col-md-12">
          <label for="title"> Area </label>
          <input type="text" id="area" v-model="area" name="title" class="form-control" placeholder="Enter area">
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Crime </label>
          <input type="text" id="crime" v-model="crime_data" name="title" class="form-control" placeholder="Enter crime">
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit"> Create Records </button>
        </div>           </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "@/helper";
import router from "../../router";
export default {
  data() {
    return {
      area: "",
      crime_data: "",
    };
  },
  methods: {
    createCustomer() {
      let customerData = {
        Name: this.area,
        Crime: this.crime_data,
      };
      this.__submitToServer(customerData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/house/create`, data).then(data => {
        console.log(data);
        router.push({ name: "Home" });
      });
    }
  }
};
</script>


<style scoped>

</style>
