<template>
  <post :page="page"></post>
</template>

<script>
import { AutoSEO } from '@/mixins'
import Post from '~/components/Post'
export default {
  components: { Post },
  mixins: [AutoSEO],
  async asyncData(context) {
    const { $content } = context
    const page = await $content('index').fetch()

    return {
      page,
    }
  },
}
</script>
