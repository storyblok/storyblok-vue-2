import { ref, onMounted } from "vue";
import { useStoryblokApi, useStoryblokBridge } from "./index";
import { printError } from "./utils";
import type {
  ISbStoryData,
  ISbStoriesParams,
  StoryblokBridgeConfigV2,
} from "./types";
import type { Ref } from "vue";

export default (
  url: string,
  apiOptions: ISbStoriesParams = {},
  bridgeOptions: StoryblokBridgeConfigV2 = {}
) => {
  const story: Ref<ISbStoryData> = ref(null);
  const storyblokApiInstance = useStoryblokApi();

  console.warn(
    "Warning ⚠️: This package will be deprecated on August 31st, 2024. Please use the `@storyblok/vue` package instead. Check the migration guide here: https://dev.to/storyblok/official-deprecation-announcement-storyblok-vue-2-nuxt-2-sdks-n1g"
  );

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
