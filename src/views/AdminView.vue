<template>
  <div class="container-fluid p-0 m-0">
    <div class="row m-0 p-0">
      <div
        class="navside nav-close position-relative"
        :class="{ navside: true, close: !isClicked }"
      >
        <SideBarVue :isClicked="isClicked" @toggleSidebar="toggleSidebar" />
      </div>
      <div
        class="adminmain bg-light p-0 overflow-hidden"
        style="margin-top: 5em !important"
      >
        <NavBar />
        <div class="container p-0 ms-lg-5">
          <div class="row p-0 m-0 position-relative overflow-hidden">
            <div class="col-12 col-lg-10 col-xl-8 m-0 p-0 overflow-hidden px-3">
              <AdminDashboardVue />
            </div>
            <div
              class="d-none d-xl-block col-xl-4 p-0 m-0 overflow-hidden sideAds"
            >
              <SideNotificationVue />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarVue from "../components/Admin/SideBar.vue";
import NavBar from "@/components/Admin/NavBar.vue";
import AdminDashboardVue from "@/components/Admin/AdminDashboard.vue";
import SideNotificationVue from "@/components/Admin/SideNotification.vue";

export default {
  name: "AdminView",
  components: {
    SideBarVue,
    NavBar,
    AdminDashboardVue,
    SideNotificationVue,
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

.sideAds {
  position: fixed;
  top: 8em;
  right: -3em;
}
</style>
