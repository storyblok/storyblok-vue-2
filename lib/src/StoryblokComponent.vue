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
</script>
