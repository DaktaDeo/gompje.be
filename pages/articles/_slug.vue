<template>
  <Post :page="page" section="articles"></Post>
</template>

<script>
import Post from '@/components/Post'
import { AutoSEO } from '@/mixins'
export default {
  components: { Post },
  mixins: [AutoSEO],
  async asyncData(context) {
    const { $content, params } = context
    const page = await $content(`/articles/${params.slug}`).fetch()

    return {
      page,
    }
  },
}
</script>
