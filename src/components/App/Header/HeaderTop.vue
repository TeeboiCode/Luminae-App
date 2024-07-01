<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary p-0">
    <div class="container-fluid container-fluid-all">
      <div class="row p-0 m-0 w-100">
        <div class="d-sm-flex col-md-12 col-lg-4 w-100 p-0">
          <div class="mv d-flex align-items-center justify-content-between">
            <!-- toggler icon start -->
            <button
              class="navbar-toggler p-0 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <!-- toggler icon end -->

            <!-- logo start -->
            <router-link
              class="navbar-brand d-flex align-items-baseline"
              to="/"
            >
              <img src="../../../assets/Logo.png" />
              <p class="logo-name fw-bold m-0">Luminae</p>
            </router-link>
            <!-- logo end -->

            <!-- badge icon mobile  -->
            <div class="badge-icon d-sm-none">
              <img src="../../../assets/bag-icon.png" width="24" height="24" />
              <span
                class="rounded-circle badge text-bg-success"
                style="background: #3dc47e"
                >3</span
              >
            </div>
          </div>

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
      </div>

      <!-- navbar collapse -->
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <!--nav-link start  -->
        <div class="row p-0 m-0 w-100">
          <div
            class="d-flex align-items-center justify-content-between w-100 d-none"
          >
            <ul
              class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-between"
              style="max-width: 420px; margin-right: 55px"
            >
              <li class="nav-item">
                <a class="nav-link p-0" href="#">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0" href="#">Contact us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0" href="#">Help & support</a>
              </li>
            </ul>
            <!--nav-link end  -->

            <div
              class="nav-icon w-100 d-flex justify-content-between align-items-center"
              style="max-width: 80px"
            >
              <i class="bx bxl-instagram-alt"></i>
              <i class="bx bxl-facebook"></i>
              <i class="bx bxl-telegram"></i>
            </div>
          </div>
        </div>
      </div>
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
.form-control::placeholder {
  color: #9d9d9d;
}
.form-control:focus {
  box-shadow: none;
}
.nav-icon i.bx {
  font-size: 1.5rem;
  color: #c4c4c4;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-icon i.bx:hover {
  color: #ff7a00;
}

.nav-link {
  transition: all 0.3s ease;
  color: #555;
}

@media (max-width: 575.98px) {
  .container-fluid-all {
    padding: 32px 20px;
  }
  .navbar-brand img {
    width: 40px;
    height: 27px;
  }
  .navbar-brand p {
    font-size: 27px;
  }
  .mv {
    width: 100%;
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
