import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { inject } from "@vercel/analytics";

export const app = createApp(App);

inject();
app.mount("#app");
