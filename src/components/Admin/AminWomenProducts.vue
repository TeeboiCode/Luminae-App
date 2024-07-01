<template>
  <div class="container-fluid px-0 py-2">
    <div class="border mt-2">
      <h3 class="">Women Products</h3>
      <p class="mb-4 text-secondary">
        Welcome to the Luminae Admin Dashboard. Effortlessly manage all women's
        products, from clothing to accessories.
      </p>
    </div>

    <div class="container mb-3">
      <div class="row d-flex justify-content-end">
        <router-link
          to="#"
          class="btn btn-primary me-3 border-0 py-2"
          @click="showModal = true"
          style="width: 200px; background: #6b5ef0"
        >
          + New Product
        </router-link>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          v-if="showModal"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                <button
                  type="button"
                  class="btn-close"
                  @click="showModal = false"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="submitProductForm">
                  <div class="mb-3">
                    <label for="product_name" class="col-form-label"
                      >Product Name:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="product_name"
                      v-model.trim="addProductValue.ProductName"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="product_price" class="col-form-label"
                      >Product Price:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      id="product_price"
                      v-model.number="addProductValue.ProductPrice"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="product_des" class="form-label"
                      >Product Description:</label
                    >
                    <textarea
                      class="form-control"
                      id="product_des"
                      rows="3"
                      v-model.trim="addProductValue.ProductDescription"
                    ></textarea>
                  </div>

                  <div class="modal-footer border-0">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="showModal = false"
                    >
                      Close
                    </button>
                    <button type="submit" class="btn btn-primary">
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

    <div class="row column-container m-0 p-0 mb-5">
      <AdminWomenTableVue />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import AdminWomenTableVue from "./AdminWomenTable.vue";

export default {
  components: {
    AdminWomenTableVue,
  },
  data() {
    return {
      addProductValue: {
        ProductName: "",
        ProductPrice: null,
        ProductDescription: "",
      },
      showModal: false, // Flag to control modal visibility
    };
  },
  methods: {
    async submitProductForm() {
      try {
        if (
          !this.addProductValue.ProductName.trim() ||
          !this.addProductValue.ProductPrice
        ) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please fill in all fields.",
          });
          return;
        }

        // Generate id based on ProductName (replace spaces with dashes and convert to lowercase)
        const id = this.addProductValue.ProductName.trim()
          .toLowerCase()
          .replace(/\s+/g, "-");

        // Create object to send
        const newProduct = {
          id: id,
          name: this.addProductValue.ProductName,
          price: this.addProductValue.ProductPrice,
          des: this.addProductValue.ProductDescription,
        };

        // Assuming you are posting to the correct endpoint
        await axios.post("http://localhost:3000/products", newProduct);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Product added successfully!",
        }).then(() => {
          // Reload the page or update the product list as needed
          location.reload();
        });

        // Reset form after successful submission
        this.addProductValue = {
          ProductName: "",
          ProductPrice: null,
          ProductDescription: "",
        };

        // Close the modal
        this.showModal = false;
      } catch (error) {
        console.error("Error adding product:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while adding the product.",
        });
      }
    },
  },
};
</script>

<style scoped></style>
