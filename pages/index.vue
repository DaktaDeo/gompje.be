<template>
  <post :page="page"></post>
</template>

<script>
import Post from '~/components/Post'
export default {
  components: { Post },
  async asyncData(context) {
    const { $content } = context
    const page = await $content('index').fetch()

    return {
      page,
    }
  },
}
</script>
