<template>
  <div class="container-fluid px-0 py-2">
    <h3 class="">Disabled Subcategories</h3>
    <p class="mb-4 text-secondary">Manage all disabled subcategories here.</p>

    <!-- Table for disabled categories -->
    <div
      class="row column-container m-0 p-0 mb-5"
      v-if="disableCategories.length > 0"
    >
      <table class="table table-striped table-hover">
        <thead v-show="disableCategories.length > 0">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Category Name</th>
            <th scope="col">Restore</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="(category, index) in disableCategories" :key="category.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ category.name }}</td>
            <td>
              <button
                @click="restoreCategory(category)"
                type="button"
                class="btn btn-success"
              >
                Restore
              </button>
            </td>
            <td>
              <button
                @click="deleteCategory(category.id)"
                type="button"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Table for disabled subcategories -->
    <div
      class="row column-container m-0 p-0 mb-5"
      v-if="disabledSubcategories.length > 0"
    >
      <table class="table table-striped table-hover">
        <thead v-show="disabledSubcategories.length > 0">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Subcategory Name</th>
            <th scope="col">Restore</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr
            v-for="(disabledSubcategory, index) in disabledSubcategories"
            :key="disabledSubcategory.id"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ disabledSubcategory.name }}</td>
            <td>
              <button
                @click="restoreSubcategory(disabledSubcategory)"
                type="button"
                class="btn btn-success"
              >
                Restore
              </button>
            </td>
            <td>
              <button
                @click="deleteSubcategory(disabledSubcategory.id)"
                type="button"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      v-if="
        disabledSubcategories.length === 0 && disableCategories.length === 0
      "
    >
      <p>No data available.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      categories: [],
      disabledSubcategories: [],
      disableCategories: [],
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const res = await axios.get("http://localhost:3000/categories");
        this.categories = res.data;
      } catch (err) {
        console.error(`Error fetching categories: ${err}`);
      }
    },
    async fetchDisabledCategories() {
      try {
        const res = await axios.get("http://localhost:3000/disableCategories");
        this.disableCategories = res.data;
      } catch (err) {
        console.error(`Error fetching disabled Categories: ${err}`);
      }
    },
    async fetchDisabledSubcategories() {
      try {
        const res = await axios.get(
          "http://localhost:3000/disableSubcategories"
        );
        this.disabledSubcategories = res.data;
      } catch (err) {
        console.error(`Error fetching disabled subcategories: ${err}`);
      }
    },
    async restoreCategory(category) {
      try {
        // Remove from disableCategories endpoint
        await axios.delete(
          `http://localhost:3000/disableCategories/${category.id}`
        );

        // Update categories endpoint with the restored category
        await axios.post("http://localhost:3000/categories", category);

        // Remove the category from disableCategories and add back to categories
        this.$emit("categoryRestored", category); // Emit event to parent component

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Category restored successfully!",
        });
        this.fetchDisabledCategories();
      } catch (error) {
        console.error("Error restoring category:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while restoring the category.",
        });
      }
    },
    async restoreSubcategory(subcategory) {
      try {
        // Remove from disableSubcategories endpoint
        await axios.delete(
          `http://localhost:3000/disableSubcategories/${subcategory.id}`
        );

        // Update categories endpoint with the restored subcategory
        const category = this.categories.find(
          (cat) => cat.id === subcategory.categoryId
        );
        if (category) {
          if (!category.subcategories) {
            category.subcategories = [];
          }
          category.subcategories.push(subcategory);
          await axios.patch(`http://localhost:3000/categories/${category.id}`, {
            subcategories: category.subcategories,
          });
        }

        // Remove the subcategory from disabledSubcategories
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Subcategory restored successfully!",
        });
        this.fetchDisabledSubcategories(); // Refresh the disabled subcategories list
      } catch (error) {
        console.error("Error restoring subcategory:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while restoring the subcategory.",
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        // Delete category from both categories and disableCategories endpoints
        await axios.delete(
          `http://localhost:3000/disableCategories/${categoryId}`
        );
        // // Remove category from local arrays
        // this.disableCategories = this.disableCategories.filter(
        //   (cat) => cat.id !== categoryId
        // );
        // this.categories = this.categories.filter(
        //   (cat) => cat.id !== categoryId
        // );

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Category deleted successfully!",
        }).then(() => {
          location.reload();
        });
      } catch (error) {
        console.error("Error deleting category:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while deleting the category.",
        });
      }
    },
    async deleteSubcategory(subcategoryId) {
      try {
        // Delete subcategory from disableSubcategories endpoint
        await axios.delete(
          `http://localhost:3000/disableSubcategories/${subcategoryId}`
        );

        // // Remove subcategory from local array
        // this.disabledSubcategories = this.disabledSubcategories.filter(
        //   (sub) => sub.id !== subcategoryId
        // );

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Subcategory deleted successfully!",
        }).then(() => {
          location.reload();
        });
      } catch (error) {
        console.error("Error deleting subcategory:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while deleting the subcategory.",
        });
      }
    },
  },
  mounted() {
    this.fetchCategories();
    this.fetchDisabledCategories();
    this.fetchDisabledSubcategories();
  },
};
</script>

<style scoped>
/* Scoped styles */
</style>
