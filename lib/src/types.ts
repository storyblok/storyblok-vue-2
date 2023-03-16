import type { StoryblokClient } from "@storyblok/js";

declare module "vue/types/vue" {
  // eslint-disable-next-line no-unused-vars
  interface Vue {
    $storyblokApi: StoryblokClient;
  }
}

export type {
  ISbConfig,
  ISbCache,
  ISbResult,
  ISbResponse,
  ISbError,
  ISbNode,
  ISbSchema,
  ThrottleFn,
  AsyncFn,
  ArrayFn,
  ISbContentMangmntAPI,
  ISbManagmentApiResult,
  ISbStories,
  ISbStory,
  ISbDimensions,
  StoryblokComponentType,
  ISbStoryData,
  ISbAlternateObject,
  ISbStoriesParams,
  ISbStoryParams,
  ISbRichtext,
  SbSDKOptions,
  StoryblokClient,
  StoryblokBridgeConfigV2,
  SbInitResult,
} from "@storyblok/js";
