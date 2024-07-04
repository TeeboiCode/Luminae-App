<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary p-0 m-0">
    <div class="container-fluid d-sm-block p-3 p-sm-0 pb-sm-2 mx-sm-4 m-0">
      <!-- desktop view start -->
      <div class="row align-items-center">
        <!-- Mobile View start -->
        <div
          class="Mobile View col-lg-6 col-12 py-3 d-sm-flex align-items-center justify-content-between"
        >
          <!-- MV Navbar Start -->
          <div class="w-100 d-flex align-items-center justify-content-between">
            <!-- Menu btn start -->
            <button
              class="navbar-toggler p-0 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Menu btn end -->

            <!-- logo start -->
            <router-link
              class="navbar-brand d-flex align-items-baseline"
              to="/"
            >
              <img src="../../../assets/Logo.png" />
              <p class="logo-name fw-bold m-0">Luminae</p>
            </router-link>
            <!-- logo end -->

            <!-- badge icon mobile start -->
            <div class="badge-icon d-sm-none">
              <img src="../../../assets/bag-icon.png" width="24" height="24" />
              <span
                class="rounded-circle badge text-bg-success"
                style="background: #3dc47e"
                >3</span
              >
            </div>
            <!-- badge icon mobile end -->
          </div>
          <!-- MV Navbar end -->

          <!-- search-container start -->
          <div class="search-container border mt-2 rounded d-block w-100">
            <form
              class="d-flex"
              role="search"
              style="padding: 8px 12px; border-radius: 4px"
            >
              <input
                class="form-control bg-transparent me-2 p-0 border-0"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
              <div
                class="all-categories me-2 w-100 d-flex align-items-center"
                style="max-width: 113px"
              >
                <button
                  class="btn p-0 d-flex align-items-center justify-content-between"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  <span>All categories</span>
                  <img
                    src="../../../assets/Arrow-Down.png"
                    width="10"
                    height="5"
                    alt=""
                    class="ms-1"
                  />
                </button>
              </div>
              <button
                class="btn p-0 ps-3 d-flex align-items-center border-0 rounded-0 border-start"
                type="submit"
              >
                <img
                  src="../../../assets/Vector-search.png"
                  width="20"
                  height="20"
                  alt=""
                />
              </button>
            </form>
          </div>
          <!-- search-container end -->
        </div>

        <!-- Mobile View end -->

        <div class="col-lg-6">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- links container start -->
            <div class="links w-100">
              <div
                class="row p-0 m-0 align-items-center justify-content-between"
              >
                <!-- links items start -->
                <div class="col-sm-8">
                  <!-- menu display tablet -->
                  <ul
                    class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center justify-content-between d-none d-sm-flex"
                  >
                    <li class="nav-item">
                      <router-link class="nav-link p-0" to="#"
                        >About us</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link p-0" to="#"
                        >Blog</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link p-0" to="#"
                        >Contact us</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link p-0" to="#"
                        >Help & support</router-link
                      >
                    </li>
                  </ul>

                  <!-- menu display mobile -->
                  <ul class="navbar-nav d-flex d-sm-none g-2 fw-bold">
                    <li class="nav-item">
                      <router-link class="nav-link p-0 mb-3" to="#"
                        >Luminae</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link p-0 mb-3" to="#"
                        >Clothes</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link p-0 mb-3" to="#"
                        >Electronics</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link p-0 mb-3" to="#"
                        >About us</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link p-0 mb-3" to="#"
                        >Cards</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link p-0 mb-3" to="#"
                        >Sign Up</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link p-0 mb-3" to="#"
                        >Sign in</router-link
                      >
                    </li>
                  </ul>
                </div>
                <!-- links items end -->

                <!-- social-icons start -->
                <div class="col-sm-4 d-flex justify-content-end">
                  <div
                    class="nav-icon w-100 justify-content-between align-items-center d-none d-sm-flex"
                    style="max-width: 80px"
                  >
                    <i class="bx bxl-instagram-alt"></i>
                    <i class="bx bxl-facebook"></i>
                    <i class="bx bxl-telegram"></i>
                  </div>
                </div>
                <!-- social-icons end -->
              </div>
            </div>
            <!-- links container end -->
          </div>
        </div>
      </div>
      <!-- desktop view end -->
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-toggler:focus {
  box-shadow: none;
}
.nav-icon i.bx {
  font-size: 1.5rem;
  color: #c4c4c4;
  cursor: pointer;
  transition: all 0.3s ease;
}
.form-control::placeholder {
  color: #9d9d9d;
}

.nav-link:hover,
.nav-icon i.bx:hover {
  color: #ff7a00;
}

.nav-link {
  transition: all 0.3s ease;
  color: #555;
}
@media (max-width: 576px) {
  .navbar-brand img {
    width: 40px;
    height: 27px;
  }
  .navbar-brand p {
    font-size: 27px;
  }
}

@media (min-width: 576px) {
  .navbar-brand img {
    width: 49px;
    height: 33px;
  }
  .navbar-brand p {
    font-size: 32px;
  }
}
</style>
