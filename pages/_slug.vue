<template>
  <post :page="page"></post>
</template>

<script>
import Post from '~/components/Post'
export default {
  components: { Post },
  async asyncData(context) {
    const { $content, params } = context
    const page = await $content(params.slug).fetch()

    return {
      page,
    }
  },
}
</script>
