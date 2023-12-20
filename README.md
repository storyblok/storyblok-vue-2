<div align="center">
	<a href="https://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2"  align="center">
		<img src="https://a.storyblok.com/f/88751/1776x360/a7d027d26d/sb-vue.png"  alt="Storyblok Logo">
	</a>
	<h1 align="center">@storyblok/vue-2</h1>
  <p align="center">
    The Vue plugin you need to interact with <a href="http://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2" target="_blank">Storyblok API</a> and enable the <a href="https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2" target="_blank">Real-time Visual Editing Experience</a>. 
  </p>
  <br />
</div>

<p align="center">
  <a href="https://npmjs.com/package/@storyblok/vue-2">
    <img src="https://img.shields.io/npm/v/@storyblok/vue-2/latest.svg?style=flat-square" alt="Storyblok Vue" />
  </a>
  <a href="https://npmjs.com/package/@storyblok/vue-2" rel="nofollow">
    <img src="https://img.shields.io/npm/dt/@storyblok/vue-2.svg?style=flat-square" alt="npm">
  </a>
</p>

<p align="center">
  <a href="https://discord.gg/jKrbAMz">
   <img src="https://img.shields.io/discord/700316478792138842?label=Join%20Our%20Discord%20Community&style=appveyor&logo=discord&color=09b3af">
   </a>
  <a href="https://twitter.com/intent/follow?screen_name=storyblok">
    <img src="https://img.shields.io/badge/Follow-%40storyblok-09b3af?style=appveyor&logo=twitter" alt="Follow @Storyblok" />
  </a>
  <a href="https://app.storyblok.com/#!/signup?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2">
    <img src="https://img.shields.io/badge/Try%20Storyblok-Free-09b3af?style=appveyor&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADpiRU/AAACRElEQVRIDWNgGGmAEd3D3Js3LPrP8D8WXZwSPiMjw6qvPoHhyGYwIXNAbGpbCjbzP0MYuj0YFqMroBV/wCxmIeSju64eDNzMBJUxvP/9i2Hnq5cM1devMnz984eQsQwETeRhYWHgIcJiXqC6VHlFBjUeXgav40cIWkz1oLYXFmGwFBImaDFBHyObcOzdW4aSq5eRhRiE2dgYlpuYoYSKJi8vw3GgWnyAJIs/AuPu4scPGObd/fqVQZ+PHy7+6udPOBsXgySLDfn5GRYYmaKYJcXBgWLpsx8/GPa8foWiBhuHJIsl2DkYQqWksZkDFgP5PObcKYYff//iVAOTIDlx/QPqRMb/YSYBaWlOToZIaVkGZmAZSQiQ5OPtwHwacuo4iplMQEu6tXUZMhSUGDiYmBjylFQYvv/7x9B04xqKOnQOyT5GN+Df//8M59ASXKyMHLoyDD5JPtbj42OYrm+EYgg70JfuYuIoYmLs7AwMjIzA+uY/zjAnyWJpDk6GOFnCvrn86SOwmsNtKciVFAc1ileBHFDC67lzG10Yg0+SjzF0ownsf/OaofvOLYaDQJoQIGix94ljv1gIZI8Pv38zPvj2lQWYf3HGKbpDCFp85v07NnRN1OBTPY6JdRSGxcCw2k6sZuLVMZ5AV4s1TozPnGGFKbz+/PE7IJsHmC//MDMyhXBw8e6FyRFLv3Z0/IKuFqvFyIqAzd1PwBzJw8jAGPfVx38JshwlbIygxmYY43/GQmpais0ODDHuzevLMARHBcgIAQAbOJHZW0/EyQAAAABJRU5ErkJggg==" alt="Follow @Storyblok" />
  </a>
</p>

**Note**: This plugin is for Vue 2. [Check out the docs for Vue 3 version](https://github.com/storyblok/storyblok-vue).

## 🚀 Usage

Check out the **[Live Demo](https://stackblitz.com/edit/vue-2-sdk-demo?file=src/main.js&terminal=dev)** on Stackblitz!

> If you are first-time user of the Storyblok, read the [Getting Started](https://www.storyblok.com/docs/guide/getting-started?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2) guide to get a project ready in less than 5 minutes.

### Installation

Install `@storyblok/vue-2`

```bash
npm install --save-dev @storyblok/vue-2
# yarn add -D @storyblok/vue-2
```

Register the plugin on your application (usually in `main.js`), add the `apiPlugin` and add the [access token](https://www.storyblok.com/docs/api/content-delivery#topics/authentication?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2) of your Storyblok space:

```js
import Vue from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue-2";
import App from "./App.vue";

Vue.use(StoryblokVue, {
  accessToken: "<your-token>",
  use: [apiPlugin],
});
```

That's it! All the features are enabled for you: the _Api Client_ for interacting with [Storyblok CDN API](https://www.storyblok.com/docs/api/content-delivery#topics/introduction?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2), and _Storyblok Bridge_ for [real-time visual editing experience](https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2).

> You can enable/disable some of these features if you don't need them, so you save some KB. Please read the "Features and API" section

#### Composition API

- Using Vue 2.7

  As Vue 2.7 comes with Composition API under the hood you just need to import everything from `"vue"`.

  > Note: `@storyblok/vue-2` v2.0.0 doesn't support Vue 2.6 anymore.

- Using Vue 2.6 or less

  Use a v1.x.x from this SDK and then, install [@vue/composition-api](https://github.com/vuejs/composition-api) and register it in the application:

  ```js
  // main.js
  import VueCompositionAPI from "@vue/composition-api";
  Vue.use(VueCompositionAPI);
  ```

  To use **script setup**, install [unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup). Depending on your setup, the configuration is different. For example, in Vite:

  ```js
  // vite.config.js
  import { createVuePlugin } from "vite-plugin-vue2";
  import ScriptSetup from "unplugin-vue2-script-setup/vite";

  export default {
    plugins: [createVuePlugin(), ScriptSetup()],
  };
  ```

#### From a CDN

Install the file from the CDN and access the methods via `window.storyblokVue`:

```html
<script src="https://unpkg.com/@storyblok/vue-2"></script>
```

### Getting started

`@storyblok/vue-2` does three actions when you initialize it:

- Provides a `storyblokApi` object in your app, which is an instance of [storyblok-js-client](https://github.com/storyblok/storyblok-js-client)
- Loads [Storyblok Bridge](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2) for real-time visual updates
- Provides a `v-editable` directive to link editable components to the Storyblok Visual Editor

#### Short Form

Load globally the Vue components you want to link to Storyblok in your _main.js_ file:

```js
import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";

Vue.use(StoryblokVue, {
  accessToken: "<your-token>",
  use: [apiPlugin],
});

Vue.component("Page", Page);
Vue.component("Teaser", Teaser);
```

The simplest way is by using the `useStoryblok` one-liner composable. Where you need to pass as first parameter the `slug`, while the second and third parameters, `apiOptions` and `bridgeOptions` respectively, are optional:

```html
<script setup>
  import { useStoryblok } from "@storyblok/vue-2";
  const story = useStoryblok(
    "path-to-story",
    { version: "draft", resolve_relations: "Article.author" }, // API Options
    { resolveRelations: ["Article.author"], resolveLinks: "url" } // Bridge Options
  );
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
```

Check the available [apiOptions](https://www.storyblok.com/docs/api/content-delivery/v2#core-resources/stories/retrieve-one-story?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2) in our API docs and [bridgeOptions](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2) passed to the Storyblok Bridge.

#### Rendering Rich Text

You can easily render rich text by using the `renderRichText` function that comes with `@storyblok/vue-2` and a Vue computed property:

```html
<template>
  <div v-html="articleContent"></div>
</template>

<script setup>
  import { computed } from "vue";
  import { renderRichText } from "@storyblok/vue-2";

  const articleContent = computed(() => renderRichText(blok.articleContent));
</script>
```

You can set a **custom Schema and component resolver globally** at init time by using the `richText` init option:

```js
import { RichTextSchema, StoryblokVue } from "@storyblok/vue-2";
import cloneDeep from "clone-deep";

const mySchema = cloneDeep(RichTextSchema); // you can make a copy of the default RichTextSchema
// ... and edit the nodes and marks, or add your own.
// Check the base RichTextSchema source here https://github.com/storyblok/storyblok-js-client/blob/master/source/schema.js

app.use(StoryblokVue, {
  accessToken: "YOUR_ACCESS_TOKEN",
  use: [apiPlugin],
  richText: {
    schema: mySchema,
    resolver: (component, blok) => {
      switch (component) {
        case "my-custom-component":
          return `<div class="my-component-class">${blok.text}</div>`;
        default:
          return "Resolver not defined";
      }
    },
  },
});
```

You can also set a **custom Schema and component resolver only once** by passing the options as the second parameter to `renderRichText` function:

```js
import { renderRichText } from "@storyblok/vue-2";

renderRichText(blok.richTextField, {
  schema: mySchema,
  resolver: (component, blok) => {
    switch (component) {
      case "my-custom-component":
        return `<div class="my-component-class">${blok.text}</div>`;
        break;
      default:
        return `Component ${component} not found`;
    }
  },
});
```

#### Long Form

##### 1. Fetching Content

Inject `storyblokApi` when using Composition API:

```html
<template>
  <div>
    <p v-for="story in stories" :key="story.id">{{ story.name }}</p>
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import { useStoryblokApi } from "@storyblok/vue-2";

  onMounted(() => {
    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get(
    "cdn/stories/home",
    { version: "draft", resolve_relations: "Article.author" } // API Options
  );
  });
</script>
```

> Note: you can skip using `apiPlugin` if you prefer your own method or function to fetch your data.

##### 2. Listen to Storyblok Visual Editor events

Use `useStoryBridge` to get the new story every time is triggered a `change` event from the Visual Editor. You need to pass the story id as first param, and a callback function as second param to update the new story:

```html
<script setup>
  import { onMounted, reactive } from "vue";
  import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue-2";

  onMounted(() => {
    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get(
      "cdn/stories",
      { version: "draft", resolve_relations: "Article.author" } // API Options
    );
    const state = reactive({ story: data.story });
    useStoryblokBridge(state.story.id, story => (state.story = story));
  });
</script>
```

You can pass [Bridge options](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2) as a third parameter as well:

```js
useStoryblokBridge(
  state.story.id,
  (story) => (state.story = story),
  {
    resolveRelations: ["Article.author"],
    resolveLinks: "url",
  } // Bridge Options
);
```

##### 3. Link your components to Storyblok Visual Editor

For every component you've defined in your Storyblok space, add the `v-editable` directive with the blok content:

```html
<template>
  <div v-editable="blok"><!-- ... --></div>
</template>
```

Where `blok` is the actual blok data coming from [Storblok's Content Delivery API](https://www.storyblok.com/docs/api/content-delivery?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2).

Check out the [playground](/../../tree/main/playground-vca) for a full example.

### Options API

You can use Options API as well, accessing the api client via `this.$storyblokApi`:

```js
import { useStoryblokBridge } from "@storyblok/vue-2";

export default {
  data: () => ({
    story: [],
  }),
  async created() {
    const { data } = this.$storyblokApi.get(/* ... */);
    this.story = data.story;
  },
  mounted() {
    useStoryblokBridge(
      this.story.id,
      (evStory) => (this.story = evStory),
      {
        resolveRelations: ["Article.author"],
        resolveLinks: "url",
      } // Bridge Options
    );
  },
};
```

### Features and API

You can **choose the features to use** when you initialize the plugin. In that way, you can improve Web Performance by optimizing your page load and save some bytes.

#### useStoryblok(pathToStory, apiOptions = {}, bridgeOptions = {})

This example of `useStoryblok`:

```html
<script setup>
  import { useStoryblok } from "@storyblok/vue-2";
   const story = await useStoryblok(
    "blog",
    { version: "draft", resolve_relations: "Article.author" }, // API Options
    { resolveRelations: ["Article.author"], resolveLinks: "url" } // Bridge Options
  );
</script>
```

Is equivalent to the following, using `useStoryblokBridge` and `useStoryblokApi`:

```html
<script setup>
  import { onMounted, reactive } from "vue";
  import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue-2";

  onMounted(() => {
    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get(
    "cdn/stories/blog",
    { version: "draft", resolve_relations: "Article.author" }, // API Options
  );
    const state = reactive({ story: data.story });

    useStoryblokBridge(
      state.story.id,
      story => (state.story = story),
      { resolveRelations: ["Article.author"], resolveLinks: "url" } // Bridge Options
    );
  });
</script>
```

Check the available [apiOptions](https://www.storyblok.com/docs/api/content-delivery/v2#core-resources/stories/retrieve-one-story?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2) (passed to `storyblok-js-client`) and [bridgeOptions](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2) (passed to the Storyblok Bridge).

#### Storyblok API

You can use an `apiOptions` object. This is passed down to the [storyblok-js-client config object](https://github.com/storyblok/storyblok-js-client#class-storyblok).

```js
app.use(StoryblokVue, {
  accessToken: "<your-token>",
  apiOptions: {
    // storyblok-js-client config object
    cache: { type: "memory" },
  },
  use: [apiPlugin],
});
```

If you prefer to use your own fetch method, just remove the `apiPlugin` and `storyblok-js-client` won't be added to your application.

```js
app.use(StoryblokVue);
```

#### Region parameter

Possible values:

- `eu` (default): For spaces created in the EU
- `us`: For spaces created in the US
- `ap`: For spaces created in Australia
- `ca`: For spaces created in Canada
- `cn`: For spaces created in China

Full example for a space created in the US:

```js
app.use(StoryblokVue, {
  accessToken: "<your-token>",
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
});
```

> Note: For spaces created in the US, Australia, Canada or China, the `region` parameter **must** be specified.

#### Storyblok Bridge

You can conditionally load it by using the `bridge` option. Very useful if you want to disable it in production:

```js
app.use(StoryblokVue, {
  bridge: process.env.NODE_ENV !== "production",
});
```

Keep in mind you have still access to the raw `window.StoryblokBridge`:

```js
const sbBridge = new window.StoryblokBridge(options);

sbBridge.on(["input", "published", "change"], (event) => {
  // ...
});
```

### How to migrate to 2.x.x (Vue 2.7 compatible)

In this section we will see how to migrate the SDK in our project from v1.x.x to v2.x.x.

#### 1. Update to plugin-vue2

Vue 2.7 support for Vite is provided via a new plugin: `@vitejs/plugin-vue2`, that supersedes the existing `vite-plugin-vue2` for older versions.

Update your `vite.config.js` file:

```diff
import { defineConfig } from "vite";
- import { createVuePlugin } from "vite-plugin-vue2";
+ import createVuePlugin from "@vitejs/plugin-vue2";

export default defineConfig({
  plugins: [createVuePlugin()],
});
```

#### 2. Update to latest version of vue

Upgrade your project to the latest version of Vue 2.7.x.

> For more information about the changes needed [see the official upgrade guide](https://blog.vuejs.org/posts/vue-2-7-naruto.html).

#### 3. Remove Composition API

Remove Vue Composition API from your project:

```diff
- import VueCompositionAPI from "@vue/composition-api";

- Vue.use(VueCompositionAPI);
```

Change the imports from `"@vue/composition-api"` to `"vue"`:

```diff
- import { ref, onMounted } from "@vue/composition-api";
+ import { ref, onMounted } from "vue";
```

### Compatibility

#### Vue versions

The v2.x.x of this package is compatible with Vue 2.7.x.
If you want to work with Vue 2.6 or less, use v1.x.x instead.

#### Browsers

This plugin is for Vue 2.7. Thus, it supports the [same browsers as Vue 2](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0038-vue3-ie11-support.md#for-those-who-absolutely-need-ie11-support). In short: all modern browsers, but also IE 11 support.

#### Server Side Rendering

Vue 2.7 does not allow top-level await. If you need SSR, you should use [Nuxt](https://github.com/nuxt/nuxt.js) instead, in combination with our [`nuxt-2`](https://github.com/storyblok/storyblok-nuxt-2) SDK.

## The Storyblok JavaScript SDK Ecosystem

![A visual representation of the Storyblok JavaScript SDK Ecosystem](https://a.storyblok.com/f/88751/2400x1350/be4a4a4180/sdk-ecosystem.png/m/1200x0)

## 🔗 Related Links

- **[Add a headless CMS to Vue.js in 5 minutes](https://www.storyblok.com/tp/add-a-headless-CMS-to-vuejs-in-5-minutes?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2)**: Quick-start guide on getting up and running with Storyblok and Vue.
- **[Storyblok & Vue.js on GitHub](https://github.com/search?q=org%3Astoryblok+topic%3Avue)**: Check all of our Vue.js open source repos.
- **[Storyblok CLI](https://github.com/storyblok/storyblok)**: A simple CLI for scaffolding Storyblok projects and fieldtypes.

## ℹ️ More Resources

### Support

- Bugs or Feature Requests? [Submit an issue](/../../issues/new).
- Do you have questions about Storyblok or you need help? [Join our Discord Community](https://discord.gg/jKrbAMz).

### Contributing

Please see our [contributing guidelines](https://github.com/storyblok/.github/blob/master/contributing.md) and our [code of conduct](https://www.storyblok.com/trust-center#code-of-conduct?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue-2).
This project use [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for generate new versions by using commit messages and we use the Angular Convention to naming the commits. Check [this question](https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-change-the-type-of-commits-that-trigger-a-release) about it in semantic-release FAQ.
