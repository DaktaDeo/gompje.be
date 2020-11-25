<template>
  <div v-if="page">
    <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
      <h1>
        {{ page.title }}
      </h1>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { $content, params } = context
    const page = await $content(`/projects/${params.slug}`).fetch()

    return {
      page,
    }
  },
}
</script>
