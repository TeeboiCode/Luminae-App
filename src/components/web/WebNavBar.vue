<template>
  <div class="container-fluid p-0 m-0 bg-white">
    <nav
      class="navbar fixed-top navbar-expand-md bg-body-tertiary pt-3 px-3 bg-white"
    >
      <div class="container-fluid p-0 bg-white">
        <div
          class="nav-container col-12 container-fluid p-0 d-flex align-items-center justify-content-between"
        >
          <button
            class="navbar-toggler border-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex align-items-baseline">
            <img src="../../assets/Logo.png" width="40" height="26" />
            <router-link
              class="navbar-brand"
              to="#"
              style="font-weight: 700; font-size: 22px"
              >Luminae</router-link
            >
          </div>

          <div class="badge-icon">
            <img src="../../assets/bag-icon.png" width="24" height="24" />
            <span
              class="rounded-circle badge text-bg-success"
              style="background: #3dc47e"
              >3</span
            >
          </div>
        </div>

        <div
          class="search-container col-12 border mt-2"
          style="padding: 8px 12px; border-radius: 4px"
        >
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 p-0 border-0"
              type="search"
              placeholder="Search Products"
              aria-label="Search"
            />
            <div class="all-categories me-2 w-100" style="max-width: 113px">
              <button
                class="btn p-0 d-flex align-items-center justify-content-between"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
              >
                <span>All categories</span>
                <img
                  src="../../assets/Arrow-Down.png"
                  width="10"
                  height="5"
                  alt=""
                  class="ms-1"
                />
              </button>

              <div
                class="offcanvas offcanvas-top h-100"
                tabindex="-1"
                id="offcanvasTop"
                aria-labelledby="offcanvasTopLabel"
              >
                <div class="offcanvas-header mb-3">
                  <button
                    type="button"
                    class="btn-close m-0 text-black"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                  <h5
                    class="offcanvas-title w-100 fw-bold text-center"
                    style="font-size: 22px"
                    id="offcanvasTopLabel"
                  >
                    Menu
                  </h5>
                </div>
                <div
                  class="offcanvas-body-txt p-3 overflow-scroll"
                  style="background: #f5f5f5"
                >
                  <ul class="list-group">
                    <li
                      class="list-group-item px-0 border-0 bg-transparent"
                      v-for="allCategory in allCategories"
                      :key="allCategory.id"
                    >
                      <p class="d-inline-flex m-0">
                        <button
                          class="btn p-0 txt-title fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="'#collapse' + allCategory.id"
                          aria-expanded="false"
                          :aria-controls="'collapse' + allCategory.id"
                        >
                          {{ allCategory.name }}
                        </button>
                      </p>
                      <div
                        class="collapse mt-2"
                        :id="'collapse' + allCategory.id"
                      >
                        <div class="card card-body rounded-0 border-0">
                          <div class="container-fluid m-0 p-0">
                            <div class="row m-0 p-0">
                              <div
                                class="col-6 p-0 mb-4"
                                v-for="subcategory in allCategory.subcategories"
                                :key="subcategory.id"
                              >
                                <h6 class="product-header fw-bold">
                                  {{ subcategory.name }}
                                </h6>
                                <ul class="list-group">
                                  <li
                                    class="list-group-item border-0 p-0"
                                    v-for="product in subcategory.products"
                                    :key="product.id"
                                  >
                                    <span style="color: #555">{{
                                      product.name
                                    }}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button
              class="btn p-0 ps-3 d-flex align-items-center border-0 rounded-0 border-start"
              type="submit"
            >
              <img
                src="../../assets/Vector-search.png"
                width="20"
                height="20"
                alt=""
              />
            </button>
          </form>
        </div>

        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent sm-none"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="#"
                >Luminae</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Clothes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Electronics</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">About us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Cards</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Sign up</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Sign in</router-link>
            </li>
          </ul>
          <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      allCategories: [],
      allSubcategories: [],
    };
  },
  methods: {
    async fetchAllCategories() {
      try {
        const res = await axios.get(`http://localhost:3000/allCategories`);
        this.allCategories = res.data;
      } catch (err) {
        console.log(`Erro: ${err}`);
      }
    },
    async fetchAllSubategories() {
      try {
        const res = await axios.get(`http://localhost:3000/allSubcategories`);
        this.allSubcategories = res.data;
      } catch (err) {
        console.log(`Erro: ${err}`);
      }
    },
  },
  mounted() {
    this.fetchAllCategories();
  },
};
</script>

<style scoped>
.bg-body-tertiary {
  background-color: rgb(255 255 255) !important;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.form-control::placeholder {
  color: #9d9d9d;
}
.form-control:focus {
  box-shadow: none;
}

.offcanvas-body-txt .txt-title {
  color: #555;
  transition: all 0.3s ease;
}

/* .offcanvas-body-txt.txt-title:focus, */
.offcanvas-body-txt .txt-title:hover {
  color: #ff7a00;
}

/* .offcanvas-body-txt {
  flex-grow: 1;
  padding: 1rem 1rem;
  overflow-y: scroll;
} */

@media (max-width: 340px) {
  .all-categories {
    display: none;
  }
}
</style>
