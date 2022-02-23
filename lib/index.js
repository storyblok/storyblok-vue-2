import { ref, onMounted } from "@vue/composition-api";
import {
  storyblokEditable,
  storyblokInit,
  useStoryblokBridge,
} from "@storyblok/js";

const vEditableDirective = {
  bind(el, binding) {
    if (binding.value) {
      const options = storyblokEditable(binding.value);
      el.setAttribute("data-blok-c", options["data-blok-c"]);
      el.setAttribute("data-blok-uid", options["data-blok-uid"]);
      el.classList.add("storyblok__outline");
    }
  },
};

const printError = (fnName) => {
  console.error(`You can't use ${fnName} if you're not loading apiPlugin. Please provide it on StoryblokVue initialization.
    `);
};

let storyblokApiInstance = null;
export const useStoryblokApi = () => {
  if (!storyblokApiInstance) printError("useStoryblokApi");
  return storyblokApiInstance;
};

export { useStoryblokBridge, apiPlugin } from "@storyblok/js";
import StoryblokComponent from "./StoryblokComponent.vue";
export { default as StoryblokComponent } from "./StoryblokComponent.vue";

export const useStoryblok = (url, apiOptions = {}, bridgeOptions = {}) => {
  const story = ref(null);

  onMounted(async () => {
    if (storyblokApiInstance) {
      const { data } = await storyblokApiInstance.get(
        `cdn/stories/${url}`,
        apiOptions
      );
      story.value = data.story;
    } else printError("useStoryblok");

    if (story.value && story.value.id) {
      useStoryblokBridge(
        story.value.id,
        (evStory) => (story.value = evStory),
        bridgeOptions
      );
    }
  });

  return story;
};

export const StoryblokVue = {
  install(app, pluginOptions = {}) {
    app.directive("editable", vEditableDirective);
    app.component("StoryblokComponent", StoryblokComponent);

    const { storyblokApi } = storyblokInit(pluginOptions);
    storyblokApiInstance = storyblokApi;
    app.prototype.$storyblokApi = storyblokApi;
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(StoryblokVue);
}
