<template>
  <div>
    <h2>Vue 3</h2>
    <div data-test="editable" v-editable="blok.content">
      Open DevTools and inspect this &lt;div&gt;. You should see a
      <i>data-blok-c</i>
      and
      <i>data-blok-uid</i>
      attrs.
    </div>

    <h3>
      <code>storyblokApi.get:</code>
      <span data-test="api">{{ apiExists }}</span>
    </h3>
  </div>
</template>

<script>
import { useStoryblokBridge } from "@storyblok/vue-2";

export default {
  data: () => ({
    apiExists: false,
    blok: {
      content: {
        _editable: `<!--#storyblok#{ "id": 12345, "uid": "fc34-uad1"}-->`,
      },
    },
  }),
  mounted() {
    this.apiExists = !!this.$storyblokApi;
    useStoryblokBridge(12345, () => console.log("hola"));
  },
};
</script>
