<template>
  <div class="container-fluid p-0 m-0 fixed-top">
    <HeaderTop />
    <HeaderButtom />
  </div>
</template>

<script>
import HeaderButtom from "./HeaderButtom.vue";
import HeaderTop from "./HeaderTop.vue";

export default {
  name: "AppHeader",
  components: {
    HeaderTop,
    HeaderButtom,
  },
};
</script>

<style></style>
