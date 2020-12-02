<template>
  <Post :page="page" section="projects"></Post>
</template>

<script>
import Post from '@/components/Post'
export default {
  components: { Post },
  async asyncData(context) {
    const { $content, params } = context
    const page = await $content(`/projects/${params.slug}`).fetch()

    return {
      page,
    }
  },
}
</script>
