<template>
  <div v-if="page" class="max-w-md">
    <h1 class="text-2xl font-extrabold text-black mb-4">{{ page.title }}</h1>
    <div class="text-lg text-grey-darkest leading-normal spaced-y-6 markdown">
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { $content } = context
    const page = await $content(`index`).fetch()

    return {
      page,
    }
  },
}
</script>
