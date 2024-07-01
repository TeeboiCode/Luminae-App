<template>
  <div class="table-responsive mb-5">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Category Name</th>
          <th scope="col">Product No</th>
          <th scope="col">Disable</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <!-- categories loop -->
        <template v-for="category in categories" :key="category.id">
          <!-- category.products loop -->
          <template
            v-for="productCategory in category.products"
            :key="productCategory.id"
          >
            <!-- productCategory loop -->
            <template>
              <!-- start  -->
              <tr v-for="product in productCategory.products" :key="product.id">
                <th>1</th>
                <td>name</td>
                <td>price</td>
              </tr>
              <!-- end  -->
            </template>
          </template>
        </template>
        <!--  -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },

  methods: {},
};
</script>

<style></style>
