import { ref, onMounted } from "vue";
import { useStoryblokApi, useStoryblokBridge } from "./index";
import { printError } from "./utils";
import type {
  StoryData,
  StoriesParams,
  StoryblokBridgeConfigV2,
} from "./types";
import type { Ref } from "vue";

export default (
  url: string,
  apiOptions: StoriesParams = {},
  bridgeOptions: StoryblokBridgeConfigV2 = {}
) => {
  const story: Ref<StoryData> = ref(null);
  const storyblokApiInstance = useStoryblokApi();

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
