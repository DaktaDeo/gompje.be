<template>
  <post-list-index
    :posts="list"
    :page="page"
    read-more-text="Read this post →"
  ></post-list-index>
</template>

<script>
import PostListIndex from '@/components/PostListIndex'
export default {
  components: { PostListIndex },
  async asyncData(context) {
    const { $content } = context
    const page = await $content('journal/index').fetch()
    const list = await $content('journal')
      .where({ slug: { $ne: 'index' } })
      .without(['body'])
      .sortBy('date', 'desc')
      .fetch()

    return {
      page,
      list,
    }
  },
}
</script>
