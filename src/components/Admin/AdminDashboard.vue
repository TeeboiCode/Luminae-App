<template>
  <div class="container-fluid px-0 py-2">
    <h3 class="">Dashboard</h3>
    <p class="mb-4 text-secondary">
      Welcome to the Luminae Admin Dashboard, your hub for managing and
      monitoring all activities.
    </p>

    <div class="row column-container">
      <!-- col-12 col-sm-6 col-md-4 -->
      <div
        class="mb-4 px-3"
        v-for="dashboard in dashboards"
        :key="dashboard.text"
      >
        <router-link to="/admin/home" class="text-decoration-none">
          <div class="card round-style border-0" :class="dashboard.bg">
            <div
              class="card-body d-flex justify-content-center align-items-center"
            >
              <div class="image-icon bg-white me-3 rounded-3">
                <img
                  width="50"
                  height="50"
                  :src="dashboard.img"
                  alt="cash-register"
                  class="p-2"
                  id="icon"
                />
              </div>
              <div>
                <h1 class="card-title fw-bold m-0">{{ dashboard.num }}</h1>
                <p class="card-text" style="font-size: 11px">
                  {{ dashboard.text }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dashboards: [
        {
          num: "500",
          text: "Total Products",
          bg: "bg-color",
          img: "https://img.icons8.com/ios/50/shopaholic.png",
        },
        {
          num: "0",
          text: "Confirmed Orders",
          bg: "bg-color1",
          img: "https://img.icons8.com/ios/50/paid--v1.png",
        },
        {
          num: "50",
          text: "Pending Orders",
          bg: "bg-color2",
          img: "https://img.icons8.com/ios/50/box-important--v1.png",
        },
        {
          num: "700",
          text: "Confirmed Payments",
          bg: "bg-color3",
          img: "https://img.icons8.com/ios/50/bank-card-dollar.png",
        },
        {
          num: "100",
          text: "Pending Payments",
          bg: "bg-color4",
          img: "https://img.icons8.com/ios/50/cash-register.png",
        },
        {
          num: "100",
          text: "Total Reviews",
          bg: "bg-color5",
          img: "https://img.icons8.com/ios-filled/50/electronic-invoice.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.round-style {
  border-radius: 10px 30px;
  transition: all 0.3s ease-in-out;
}

.round-style:hover {
  box-shadow: rgba(100, 100, 111, 0.637) 0px 7px 29px 0px;
  transform: scale(1.05);
}

.round-style:hover #icon {
  animation: rotateIcon 1.5s ease-in-out 0.3s 10 forwards;
}

@keyframes rotateIcon {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.bg-color {
  background: #ab53db;
  color: #fff;
}

.bg-color1 {
  background: #ff5b5a;
  color: #fff;
}

.bg-color2 {
  background: #00a28a;
  color: #fff;
}

.bg-color3 {
  background: #ffbc54;
  color: #fff;
}

.bg-color5 {
  background: #58b4ff;
  color: #fff;
}

.bg-color4 {
  background: #ffa4c4;
  color: #fff;
}

.row.column-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
}
</style>
