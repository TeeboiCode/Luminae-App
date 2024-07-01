<template>
  <div class="container-fluid px-0 py-2">
    <h3 class="">Our Categories</h3>
    <p class="mb-4 text-secondary">
      Welcome to the Luminae Admin Dashboard. Explore and manage content
      effortlessly across various categories.
    </p>

    <div class="container mb-3">
      <div class="row d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-primary border-0 py-2 modal-btn"
          data-bs-toggle="modal"
          data-bs-target="#addCategoryModal"
        >
          + New Category
        </button>

        <div
          class="modal fade"
          id="addCategoryModal"
          tabindex="-1"
          aria-labelledby="addCategoryModalLabel"
          aria-hidden="true"
        >
          <div class="row mx-0">
            <div class="col-2"></div>
            <div class="col-10">
              <div class="modal-dialog ms-4">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="addCategoryModalLabel">
                      Add Category
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="SubmitCategoryForm">
                      <div class="mb-3">
                        <label for="category-name" class="col-form-label"
                          >Category Name:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="category-name"
                          v-model.trim="newCategoryName"
                        />
                      </div>
                      <div class="modal-footer border-0">
                        <button
                          type="button"
                          class="btn btn-secondary btn-sm"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" class="btn btn-primary btn-sm">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row column-container m-0 p-0 mb-5" v-if="categories.length > 0">
      <table class="table table-striped table-hover">
        <thead v-show="categories.length > 0">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Category Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Disable</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="(category, index) in categories" :key="category.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>
              <router-link
                :to="{
                  name: 'AdminSubPage',
                  params: { categoryId: category.id },
                }"
                class="text-decoration-none"
              >
                {{ category.name }}
              </router-link>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-warning me-3 border-0 py-2"
                data-bs-toggle="modal"
                :data-bs-target="'#editModal' + category.id"
                @click="setEditCategory(category.id, category.name)"
              >
                Edit
              </button>

              <div
                class="modal fade"
                :id="'editModal' + category.id"
                tabindex="-1"
                aria-labelledby="editModalLabel"
                aria-hidden="true"
              >
                <div class="row mx-0">
                  <div class="col-2"></div>
                  <div class="col-10">
                    <div class="modal-dialog ms-4">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="editModalLabel">
                            Edit Category
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="EditCategoryForm(category.id)">
                            <div class="mb-3">
                              <label for="category-name" class="col-form-label"
                                >Edit Category Name:</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="category-name"
                                v-model.trim="editCategoryName"
                              />
                            </div>
                            <div class="modal-footer border-0">
                              <button
                                type="button"
                                class="btn btn-secondary btn-sm"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                                class="btn btn-primary btn-sm"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <button
                @click="disableCategory(category.id)"
                type="button"
                class="btn btn-danger"
              >
                Disable
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="categories.length === 0">
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
      newCategoryName: "",
      editCategoryName: "",
      editCategoryId: null,
      categories: [],
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const res = await axios.get(`http://localhost:3000/categories`);
        this.categories = res.data;
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      }
    },
    async SubmitCategoryForm() {
      if (this.newCategoryName.trim() === "") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Category name cannot be empty.",
        });
        return;
      }

      const categoryId = `Category${Date.now()}`;

      try {
        const newCategory = {
          id: categoryId,
          name: this.newCategoryName,
          route: `/admin/category/${this.newCategoryName.toLowerCase()}`,
          subcategories: [],
        };

        await axios.post("http://localhost:3000/categories", newCategory);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Category added successfully!",
        }).then(() => {
          location.reload();
        });

        this.newCategoryName = "";
      } catch (error) {
        console.error("Error adding category:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while adding the category.",
        });
      }
    },
    setEditCategory(id, name) {
      this.editCategoryId = id;
      this.editCategoryName = name;
    },
    async EditCategoryForm(id) {
      if (this.editCategoryName.trim() === "") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Category name cannot be empty.",
        });
        return;
      }

      try {
        const updatedCategory = {
          name: this.editCategoryName,
        };

        await axios.patch(
          `http://localhost:3000/categories/${id}`,
          updatedCategory
        );
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Category updated successfully!",
        }).then(() => {
          location.reload();
        });

        this.editCategoryId = null;
        this.editCategoryName = "";
      } catch (error) {
        console.error("Error updating category:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while updating the category.",
        });
      }
    },
    async disableCategory(id) {
      try {
        // Find the category to disable
        const categoryIndex = this.categories.findIndex(
          (category) => category.id === id
        );
        if (categoryIndex === -1) return;

        const [disabledCategory] = this.categories.splice(categoryIndex, 1);

        // Update categories endpoint by deleting the category
        await axios.delete(`http://localhost:3000/categories/${id}`);

        // Update disableCategories endpoint with the disabled category
        await axios.post(
          "http://localhost:3000/disableCategories",
          disabledCategory
        );

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Category disabled successfully!",
        });
      } catch (error) {
        console.error("Error disabling category:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while disabling the category.",
        });
      }
    },
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>

<style scoped></style>
