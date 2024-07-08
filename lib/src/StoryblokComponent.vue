<template>
  <component
    :is="blok.component"
    v-bind="{ ...$props, ...$attrs }"
    v-on="$listeners"
  ></component>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
    },
  },
};

console.warn(
  "Warning ⚠️: This package will be deprecated on August 31st, 2024. Please use the `@storyblok/vue` package instead. Check the migration guide here: https://dev.to/storyblok/official-deprecation-announcement-storyblok-vue-2-nuxt-2-sdks-n1g"
);
</script>
