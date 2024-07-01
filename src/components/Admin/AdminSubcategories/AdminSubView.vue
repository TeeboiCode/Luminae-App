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
        class="adminmain bg-light p-0 overflow-x-auto"
        style="margin-top: 5em !important"
      >
        <NavBarVue />
        <div class="container p-0">
          <div class="row p-0 m-0 position-relative">
            <div class="col-12 col-md-11 m-0 p-0 px-3 overflow-x-auto">
              <AdminSubWomenVue
                :categories="categories"
                :baseURL="baseURL"
                :subcategories="subcategories"
                :products="products"
                :discounts="discounts"
                :disabledProducts="disabledProducts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarVue from "../SideBar.vue";
import NavBarVue from "../NavBar.vue";
import AdminSubWomenVue from "./Subcategory Components/AdminSubWomen.vue";

export default {
  name: "AdminView",
  props: [
    "categories",
    "subcategories",
    "products",
    "discounts",
    "reviews",
    "disabledProducts",
  ],
  components: {
    SideBarVue,
    NavBarVue,
    AdminSubWomenVue,
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
