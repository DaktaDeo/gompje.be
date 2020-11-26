<template>
  <div v-if="page">
    <article>
      <h1 class="text-2xl font-extrabold text-black mb-4">
        {{ page.title }}
      </h1>
      <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
        <nuxt-content :document="page" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { $content, params } = context
    const page = await $content(params.slug).fetch()

    return {
      page,
    }
  },
}
</script>
