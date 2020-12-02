<template>
  <Post :page="page" section="journal"></Post>
</template>

<script>
import Post from '@/components/Post'
export default {
  components: { Post },
  async asyncData(context) {
    const { $content, params } = context
    const page = await $content(`/journal/${params.slug}`).fetch()

    return {
      page,
    }
  },
}
</script>
