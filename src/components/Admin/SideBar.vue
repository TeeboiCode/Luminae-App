<template>
  <nav :class="{ sidebar: true, close: !isClicked }" class="shadow">
    <header>
      <div class="image-text mt-3">
        <span class="image">
          <img src="../../assets/Logo.png" alt="" />
        </span>
        <div class="text header-text">
          <span class="name">Luminae</span>
        </div>
      </div>
      <i
        class="bx bx-chevron-right toggle d-none d-sm-flex"
        @click="toggleSidebar"
      ></i>
    </header>
    <div class="menu-wrapper">
      <div class="menu-bar">
        <div class="menu">
          <ul class="menu-link p-0">
            <li v-for="link in links" :key="link.text" class="nav-link">
              <router-link
                :to="link.route"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-title="Tooltip on right"
              >
                <i :class="link.icon"></i>
                <span class="text nav-text">{{ link.text }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <section class="main"></section>
</template>

<script>
export default {
  props: {
    isClicked: Boolean,
  },
  data() {
    return {
      links: [
        {
          icon: "bx bxs-dashboard",
          text: "Dashboard",
          route: "/admin/home",
        },
        {
          icon: "bx bxs-basket",
          text: "Categories",
          route: "/admin/categories",
        },
        {
          icon: "bx bxs-error-alt",
          text: "Disabled ",
          route: "/admin/product/disabled",
        },
        {
          icon: "bx bxs-shopping-bags",
          text: "Delivered Order",
          route: "/admin/product/delivered",
        },
        {
          icon: "bx bxs-error-alt",
          text: "Pending Order",
          route: "/admin/product/pending",
        },
        {
          icon: "bx bxs-comment",
          text: "Reviews",
          route: "/admin/product/reviews",
        },
        {
          icon: "fa-solid fa-money-bill",
          text: "Payments",
          route: "/admin/payments",
        },
        {
          icon: "fa-solid fa-right-from-bracket",
          text: "Logout",
          route: "/",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar"); // Emit event to parent
    },
  },
};
</script>

<style scoped></style>
