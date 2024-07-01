<template>
  <div class="home p-5">
    <h1>Home page</h1>
    <button><router-link to="/admin/home">Admin</router-link></button>
    <br /><br />
    <button><router-link to="/app/home">App</router-link></button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
