<template>
  <div class="container-fluid p-0 m-0">
    <div class="row m-0 p-0">
      <div
        class="navside nav-close position-relative"
        :class="{ navside: true, close: !isClicked }"
      >
        <SideBar :isClicked="isClicked" @toggleSidebar="toggleSidebar" />
      </div>
      <div class="adminmain bg-light p-0">
        <NavBar />
        <h2>Pending Order</h2>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import NavBar from "@/components/Admin/NavBar.vue";

export default {
  name: "AdminView",
  components: {
    SideBar,
    NavBar,
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style scoped>
.row .navside {
  background: transparent;
  width: 250px;
  height: 100vh;
  transition: width 0.3s ease-in-out;
  z-index: 1200;
}

i.toggle {
  position: absolute;
  top: 5%;
  right: -20px;
  height: 45px;
  width: 45px;
  color: #fff;
  background: #695cef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%) rotate(180deg);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.navside.close {
  width: 88px;
}

.adminmain {
  position: relative;
  left: 0;
  width: calc(100% - 250px);
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
}

.navside.close ~ .adminmain {
  left: 0px;
  width: calc(100% - 88px);
}
</style>
