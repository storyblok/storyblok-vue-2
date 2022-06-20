import type { StoryblokClient } from "@storyblok/js";

declare module "vue/types/vue" {
  interface Vue {
    $storyblokApi: StoryblokClient;
  }
}

export type {
  AlternateObject,
  Richtext,
  RichtextInstance,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbSDKOptions,
  Stories,
  StoriesParams,
  Story,
  StoryData,
  StoryParams,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokCache,
  StoryblokCacheProvider,
  StoryblokClient,
  StoryblokConfig,
  StoryblokComponentType,
  StoryblokManagmentApiResult,
  StoryblokResult,
  apiPlugin,
  useStoryblokBridge,
} from "@storyblok/js";
