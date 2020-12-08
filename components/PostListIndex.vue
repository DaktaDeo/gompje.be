<template>
  <div v-if="page" class="relative px-4 sm:px-6 lg:px-8">
    <div class="text-lg max-w-prose mx-auto">
      <h1>
        <span
          class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
          >{{ page.section }}</span
        >
        <span
          class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >{{ page.title }}</span
        >
      </h1>

      <h2>
        <span
          class="my-3 block text-xl text-center leading-8 tracking-tight text-gray-600 sm:text-2xl"
          >{{ page.subtitle }}</span
        >
      </h2>
      <div class="text-lg text-grey-darkest leading-normal spaced-y-6">
        <nuxt-content :document="page" />
      </div>
      <div
        v-if="page.warning"
        class="my-4 text-indigo-400 font-medium"
        type="warning"
      >
        {{ page.warning }}
      </div>
      <div v-for="doc in posts" :key="doc.slug" class="mt-12 spaced-y-10">
        <post-list-item
          :doc="doc"
          :read-more-text="readMoreText"
        ></post-list-item>
      </div>
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/PostListItem'
export default {
  components: { PostListItem },
  props: {
    readMoreText: {
      type: String,
      required: false,
      default: 'Read more →',
    },
    page: {
      type: Object,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
