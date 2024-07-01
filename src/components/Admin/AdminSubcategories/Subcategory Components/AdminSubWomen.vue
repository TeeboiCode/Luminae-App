<template>
  <div class="container-fluid px-0 py-2">
    <h3>{{ categoryDetails.name }}</h3>
    <p>Welcome to the Luminae Admin Dashboard.</p>

    <div class="container mb-3">
      <div class="row d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-primary border-0 py-2 modalsub-btn"
          data-bs-toggle="modal"
          data-bs-target="#addSubcategoryModal"
        >
          + New Subcategory
        </button>

        <div
          class="modal fade"
          id="addSubcategoryModal"
          tabindex="-1"
          aria-labelledby="addSubcategoryModalLabel"
          aria-hidden="true"
        >
          <div class="row mx-0">
            <div class="col-2"></div>
            <div class="col-10">
              <div class="modal-dialog ms-4">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="addSubcategoryModalLabel">
                      Add Subcategory
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="SubcategoryForm">
                      <div class="mb-3">
                        <label for="subcategory_category" class="form-label"
                          >Category Name:</label
                        >
                        <select
                          id="subcategory_category"
                          class="form-select"
                          v-model="newSubcategory.categoryId"
                          required
                        >
                          <option disabled value="">Select Category</option>
                          <option
                            v-for="category in categories"
                            :key="category.id"
                            :value="category.id"
                          >
                            {{ category.name }}
                          </option>
                        </select>
                      </div>

                      <div class="mb-3">
                        <label for="subcategory_name" class="col-form-label"
                          >Subcategory Name:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="subcategory_name"
                          v-model="newSubcategory.name"
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

    <div
      class="row column-container m-0 p-0 mb-5"
      v-if="subcategories.length > 0"
    >
      <table class="table table-striped table-hover">
        <thead v-show="subcategories.length > 0">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Subcategory Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Disable</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr
            v-for="(subcategory, index) in subcategories"
            :key="subcategory.id"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>
              <router-link
                :to="{
                  name: 'AdminProductView',
                  params: { subcategoryId: subcategory.id },
                }"
                class="text-decoration-none"
              >
                {{ subcategory.name }}
              </router-link>
            </td>

            <td>
              <div class="container mb-3">
                <div class="row d-flex justify-content-start">
                  <button
                    style="width: 100px"
                    type="button"
                    class="btn btn-warning me-3 border-0 py-2"
                    data-bs-toggle="modal"
                    :data-bs-target="'#editSubcategoryModal' + subcategory.id"
                    @click="
                      setEditSubcategory(
                        subcategory.id,
                        subcategory.name,
                        subcategory.categoryId
                      )
                    "
                  >
                    Edit
                  </button>

                  <div
                    class="modal fade"
                    :id="'editSubcategoryModal' + subcategory.id"
                    tabindex="-1"
                    aria-labelledby="editSubcategoryModalLabel"
                    aria-hidden="true"
                  >
                    <div class="row mx-0">
                      <div class="col-2"></div>
                      <div class="col-10">
                        <div class="modal-dialog ms-4">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5
                                class="modal-title"
                                id="editSubcategoryModalLabel"
                              >
                                Edit Subcategory
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form
                                @submit.prevent="
                                  EditSubcategoryForm(subcategory.id)
                                "
                              >
                                <div class="mb-3">
                                  <label
                                    for="subcategory_category"
                                    class="form-label"
                                    >Edit Category Name:</label
                                  >
                                  <select
                                    id="subcategory_category"
                                    class="form-select"
                                    v-model="editSubcategory.categoryId"
                                    required
                                  >
                                    <option disabled value="">
                                      Select Category
                                    </option>
                                    <option
                                      v-for="category in categories"
                                      :key="category.id"
                                      :value="category.id"
                                    >
                                      {{ category.name }}
                                    </option>
                                  </select>
                                </div>

                                <div class="mb-3">
                                  <label
                                    for="subcategory_name"
                                    class="col-form-label"
                                    >Subcategory Name:</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="subcategory_name"
                                    v-model="editSubcategory.name"
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
                </div>
              </div>
            </td>
            <td>
              <button
                @click="disableCategory(subcategory.id)"
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
    <div v-if="subcategories.length === 0">
      <p>No data available.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  props: ["categoryId", "categories"],
  data() {
    return {
      newSubcategory: {
        name: "",
        categoryId: "",
      },
      subcategories: [],
      editSubcategory: {
        id: "",
        name: "",
        categoryId: "",
      },
      categoryDetails: {},
    };
  },
  mounted() {
    this.fetchCategoryDetails();
    this.fetchSubcategoryData();
  },
  methods: {
    async fetchCategoryDetails() {
      try {
        const response = await axios.get(
          `http://localhost:3000/categories/${this.categoryId}`
        );
        this.categoryDetails = response.data;
      } catch (error) {
        console.error("Error fetching category details:", error);
      }
    },
    async fetchSubcategoryData() {
      try {
        const res = await axios.get(
          `http://localhost:3000/subcategories?categoryId=${this.categoryId}`
        );
        this.subcategories = res.data;
        console.log(`Fetched subcategories: ${this.subcategories}`);
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      }
    },
    async SubcategoryForm() {
      const subcategoryId = `subcategory${Date.now()}`;

      try {
        const newSubcategory = {
          id: subcategoryId,
          name: this.newSubcategory.name,
          categoryId: this.newSubcategory.categoryId,
          route: `/admin/subcategory/${this.newSubcategory.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`,
        };

        await axios.post("http://localhost:3000/subcategories", newSubcategory);

        //update
        const category = this.categories.find(
          (category) => category.id === this.newSubcategory.categoryId
        );

        if (category) {
          if (!category.subcategories) {
            category.subcategories = [];
          }
          category.subcategories.push(newSubcategory);

          // Update the category in the database
          await axios
            .patch(`http://localhost:3000/categories/${category.id}`, {
              subcategories: category.subcategories,
            })
            .then(() => {
              // Reload the page or update the product list as needed
              location.reload();

              // reset
              this.newSubcategory = {
                name: "",
                categoryId: "",
              };
            });
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Subcategory added successfully!",
          });
        }
      } catch (error) {
        console.error("Error adding subcategory:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while adding the subcategory.",
        });
      }
    },
    setEditSubcategory(id, name, categoryId) {
      this.editSubcategory.id = id;
      this.editSubcategory.name = name;
      this.editSubcategory.categoryId = categoryId;
    },
    async EditSubcategoryForm(id) {
      try {
        const updatedSubcategory = {
          id,
          name: this.editSubcategory.name,
          categoryId: this.editSubcategory.categoryId,
        };

        await axios.patch(
          `http://localhost:3000/subcategories/${id}`,
          updatedSubcategory
        );

        // Update the subcategory in the category
        const oldCategory = this.categories.find((category) =>
          category.subcategories.some((subcategory) => subcategory.id === id)
        );

        if (oldCategory) {
          oldCategory.subcategories = oldCategory.subcategories.filter(
            (subcategory) => subcategory.id !== id
          );
          await axios.patch(
            `http://localhost:3000/categories/${oldCategory.id}`,
            {
              subcategories: oldCategory.subcategories,
            }
          );
        }

        const newCategory = this.categories.find(
          (category) => category.id === this.editSubcategory.categoryId
        );

        if (newCategory) {
          if (!newCategory.subcategories) {
            newCategory.subcategories = [];
          }
          newCategory.subcategories.push(updatedSubcategory);
          await axios.patch(
            `http://localhost:3000/categories/${newCategory.id}`,
            {
              subcategories: newCategory.subcategories,
            }
          );
        }

        this.fetchSubcategoryData();

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Subcategory updated successfully!",
        });
      } catch (error) {
        console.error("Error updating subcategory:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while updating the subcategory.",
        });
      }
    },
    async disableCategory(id) {
      try {
        // 1. Find and remove the subcategory from the current list
        const subcategoryIndex = this.subcategories.findIndex(
          (subcategory) => subcategory.id === id
        );

        if (subcategoryIndex === -1) {
          throw new Error("Subcategory not found");
        }

        const [disabledSubcategory] = this.subcategories.splice(
          subcategoryIndex,
          1
        );

        // 2. Find and update the parent category
        const category = this.categories.find((category) =>
          category.subcategories.some((subcategory) => subcategory.id === id)
        );

        if (!category) {
          throw new Error("Parent category not found");
        }

        category.subcategories = category.subcategories.filter(
          (subcategory) => subcategory.id !== id
        );

        await axios.patch(`http://localhost:3000/categories/${category.id}`, {
          subcategories: category.subcategories,
        });

        // 3. Remove the subcategory from the subcategories collection
        await axios.delete(`http://localhost:3000/subcategories/${id}`);

        // 4. Post the disabled subcategory to the disableSubcategories endpoint
        await axios.post(
          "http://localhost:3000/disableSubcategories",
          disabledSubcategory
        );

        // 5. Show success message and refresh data
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Subcategory disabled successfully!",
        }).then(() => {
          // Reload the page or update the product list as needed
          location.reload();
        });
      } catch (error) {
        console.error("Error disabling subcategory:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while disabling the subcategory.",
        });
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
