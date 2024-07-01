<template>
  <div class="container" style="width: 70%">
    <h5 style="color: rgb(44 36 118)" class="pb-2">Top selling products</h5>
    <ul class="list-group list-group-item rounded border-0">
      <li
        class="list-group-item d-flex justify-content-between align-items-start border-0 border-bottom"
        v-for="topSellingProduct in topSellingProducts"
        :key="topSellingProduct.text"
      >
        <div class="top-selling-img mx-2">
          <img
            width="50"
            height="54"
            :src="topSellingProduct.img"
            class="object-fit-contain"
          />
        </div>
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ topSellingProduct.text }}</div>
          <span class="fw-bold text-danger">
            ${{ topSellingProduct.price }}</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideNotification",
  components: {},
  data() {
    return {
      topSellingProducts: [
        {
          text: "Patso",
          price: "69.99",
          img: "https://raw.githubusercontent.com/TeeboiCode/image-/d6bb4cbd2fc9608f3ad92cab7f08aad41e66a81c/photo%20Sport-shoe.png",
        },
        {
          text: "Tonny Black",
          price: "619.99",
          img: "https://raw.githubusercontent.com/TeeboiCode/image-/d6bb4cbd2fc9608f3ad92cab7f08aad41e66a81c/photo%20bag-Pink.png",
        },
        {
          text: "Tshirt Levis",
          price: "49.99",
          img: "https://raw.githubusercontent.com/TeeboiCode/image-/d6bb4cbd2fc9608f3ad92cab7f08aad41e66a81c/photo%20bag.png",
        },
        {
          text: "Reebok Black",
          price: "619.99",
          img: "https://raw.githubusercontent.com/TeeboiCode/image-/d6bb4cbd2fc9608f3ad92cab7f08aad41e66a81c/photo%20bag.png",
        },
        {
          text: " Sketchers",
          price: "619.99",
          img: "https://raw.githubusercontent.com/TeeboiCode/image-/d6bb4cbd2fc9608f3ad92cab7f08aad41e66a81c/photo%20sneakers.png",
        },
        {
          text: "Sketchers Black",
          price: "619.99",
          img: "https://raw.githubusercontent.com/TeeboiCode/image-/d6bb4cbd2fc9608f3ad92cab7f08aad41e66a81c/photo%20bag.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.top-selling-img {
  border-radius: 5px 15px;
  overflow: hidden;
}

.list-group .list-group-item {
  transition: all 0.3s ease;
}

.list-group-numbered {
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
}

.container {
  transition: all 0.3s ease-in-out;
}
</style>
