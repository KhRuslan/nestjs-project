<template>
  <div>
    <UsersVue :users="users" />
  </div>
</template>

<script>
import UsersVue from "../components/Users.vue";
import axios from "axios";
export default {
  components: {
    UsersVue,
  },
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    const { data } = await axios.get("https://reqres.in/api/users?page=1");
    this.users = data.data;
  },
};
</script>

<style scoped>
</style>