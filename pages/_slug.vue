<template>
  <post :page="page"></post>
</template>

<script>
import Post from '@/components/Post'
import { AutoSEO } from '@/mixins'

export default {
  components: { Post },
  mixins: [AutoSEO],
  async asyncData(context) {
    const { $content, params } = context
    const page = await $content(params.slug).fetch()

    return {
      page,
    }
  },
}
</script>
