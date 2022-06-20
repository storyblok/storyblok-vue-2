import { storyblokEditable, storyblokInit } from "@storyblok/js";
import StoryblokComponent from "./StoryblokComponent.vue";
import { printError } from "./utils";
import type { SbSDKOptions, StoryblokClient } from "./types";
import type { DirectiveFunction, PluginObject } from "vue";

const bindFn: DirectiveFunction = (el, binding) => {
  if (binding.value) {
    const options = storyblokEditable(binding.value);
    el.setAttribute("data-blok-c", options["data-blok-c"]);
    el.setAttribute("data-blok-uid", options["data-blok-uid"]);
    el.classList.add("storyblok__outline");
  }
};

const vEditableDirective = { bind: bindFn };

let storyblokApiInstance: StoryblokClient = null;
export const useStoryblokApi = () => {
  if (!storyblokApiInstance) printError("useStoryblokApi");
  return storyblokApiInstance;
};

export { useStoryblokBridge, apiPlugin } from "@storyblok/js";
export { default as StoryblokComponent } from "./StoryblokComponent.vue";
export { default as useStoryblok } from "./useStoryblok.js";

export const StoryblokVue: PluginObject<SbSDKOptions> = {
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

export * from "./types";
