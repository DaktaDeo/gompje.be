<template>
  <div v-if="page">
    <div class="max-w-md prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
      <h1 class="text-xl font-extrabold text-black mb-4">{{ page.title }}</h1>

      <div class="text-lg text-grey-darkest leading-normal spaced-y-6">
        <nuxt-content :document="page" />
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
