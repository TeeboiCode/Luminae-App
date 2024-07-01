<template>
  <router-view
    :categories="categories"
    :baseURL="baseURL"
    :subcategories="subcategories"
    :products="products"
    :discounts="discounts"
    :disableSubcategories="disableSubcategories"
  />
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      baseURL: "http://localhost:3000",
      categories: [],
      subcategories: [],
      disableSubcategories: [],
    };
  },
  methods: {
    async fetchData() {
      // Api get Categories
      try {
        const res = await axios.get(`http://localhost:3000/categories`);
        this.categories = res.data;
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      }

      // Api get subcategories
      try {
        const res = await axios.get(`http://localhost:3000/subcategories`);
        this.subcategories = res.data;
        // console.log(`Car: ${this.subcategories}`);
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      }

      // Api get products
      try {
        const res = await axios.get(`http://localhost:3000/products`);
        this.products = res.data;
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      }

      // Api get disableSubcategories
      try {
        const res = await axios.get(
          `http://localhost:3000/disableSubcategories`
        );
        this.disableSubcategories = res.data;
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
