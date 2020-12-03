<template>
  <post :page="page" section="Nantucket"></post>
</template>

<script>
import Post from '~/components/Post'
export default {
  components: { Post },
  async asyncData(context) {
    const { $content, params } = context
    const page = await $content(`/nantucket/${params.slug}`).fetch()

    return {
      page,
    }
  },
}
</script>
