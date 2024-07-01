import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import Bootstrap 5 CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom CSS
import "./assets/css/styles.css";

// Create Vue app
const app = createApp(App);

// Use router
app.use(router);

// Mount app
app.mount("#app");

// Import Bootstrap 5 JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
