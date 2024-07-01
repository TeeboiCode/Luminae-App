import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Admin from "../views/AdminView.vue";
import AdminDelivered from "../components/Admin/AdminDelivered.vue";
import AdminPending from "../components/Admin/AdminPending.vue";
import AdminReviews from "../components/Admin/AdminReviews.vue";
import AdminPayments from "../components/Admin/AdminPayments.vue";
import AdminCategoriesView from "../views/Admin Folder/AdminCategoriesView.vue";
import AdminDisabledView from "../views/Admin Folder/AdminDisabledView.vue";
import AdminSubWomen from "@/components/Admin/AdminSubcategories/AdminSubView.vue";
import AdminSubPage from "../components/Admin/AdminSubcategories/AdminSubPage.vue";
// import AdminProductView from "../components/Admin/AdminProduct/AdminProductView.vue";
// wordBreak:
import AppHome from "../views/AppHome.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin/home",
    name: "admin",
    component: Admin,
  },
  {
    path: "/admin/categories",
    name: "AdminCategoriesView",
    component: AdminCategoriesView,
  },
  {
    path: "/admin/product/disabled",
    name: "AdminDisabledView",
    component: AdminDisabledView,
  },
  {
    path: "/admin/product/pending",
    name: "AdminPending",
    component: AdminPending,
  },
  {
    path: "/admin/product/delivered",
    name: "AdminDelivered",
    component: AdminDelivered,
  },
  {
    path: "/admin/product/reviews",
    name: "AdminReviews",
    component: AdminReviews,
  },
  {
    path: "/admin/payments",
    name: "AdminPayments",
    component: AdminPayments,
  },
  {
    path: "/admin/category/women",
    name: "AdminSubWomenView",
    component: AdminSubWomen,
  },
  {
    path: "/admin/categories/:categoryId",
    name: "AdminSubPage",
    component: AdminSubPage,
    props: true,
  },
  // {
  //   path: "admin/product/:subcategoryId",
  //   name: "AdminProductView",
  //   component: AdminProductView,
  //   props: true,
  // },

  {
    path: "/app/home",
    name: "AppHome",
    component: AppHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
