<template>
  <post-list-index
    :posts="list"
    :page="page"
    read-more-text="Read more →"
  ></post-list-index>
</template>

<script>
import PostListIndex from '@/components/PostListIndex'
import { AutoSEO } from '@/mixins'

export default {
  components: { PostListIndex },
  mixins: [AutoSEO],
  async asyncData(context) {
    const { $content } = context
    const page = await $content('projects/index').fetch()
    const list = await $content('projects')
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
