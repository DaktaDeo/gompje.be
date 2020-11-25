<template>
  <div v-if="page">
    <article>
      <h1 class="text-2xl font-extrabold text-black mb-4">
        {{ page.title }}
      </h1>
      <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
        <nuxt-content :document="page" />
        <nuxt-link
          v-for="doc in list"
          :key="doc.slug"
          :to="doc.path"
          class="block"
        >
          {{ doc.slug }}
        </nuxt-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { $content } = context
    const page = await $content('articles/index').fetch()
    const list = await $content('articles').without(['body']).fetch()

    return {
      page,
      list,
    }
  },
}
</script>
