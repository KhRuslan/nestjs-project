<template>
  <div>
    <div class="card" v-for="user in users" :key="user.id">
      <p>{{ user.first_name }}</p>
      <p>{{ user.last_name }}</p>
      <p>{{ user.email }}</p>
      <img :src="user.avatar" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid black;
  margin-bottom: 3px;
}
</style>