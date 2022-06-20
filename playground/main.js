import Vue from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue-2";
import App from "./App.vue";

Vue.use(StoryblokVue, {
  accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
  // bridge: false,
  // apiOptions: {  },
  use: [apiPlugin], // use it only if you need it
});

Vue.config.performance = true;

new Vue({ render: (h) => h(App) }).$mount("#app");
