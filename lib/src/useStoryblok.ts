import { ref, onMounted } from "@vue/composition-api";
import { useStoryblokApi, useStoryblokBridge } from "./index";
import { printError } from "./utils";

export default (url, apiOptions = {}, bridgeOptions = {}) => {
  const story = ref(null);
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
