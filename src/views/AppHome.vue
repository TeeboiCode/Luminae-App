<template>
  <div class="container-fluid p-0 m-0">
    <AppHeaderVue />
    <h1 class="p-3">Home</h1>
  </div>
</template>

<script>
import AppHeaderVue from "@/components/App/Header/AppHeader.vue";

export default {
  name: "AppHome",
  components: { AppHeaderVue },
};
</script>

<style scoped>
.container-fluid {
  background: #fff;
}
</style>
