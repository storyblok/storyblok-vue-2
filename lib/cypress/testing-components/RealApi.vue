<script setup>
import { useStoryblok } from "@storyblok/vue-2";
const story = useStoryblok("vue/test", { version: "draft" });
</script>

<template>
  <div data-test="root">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
