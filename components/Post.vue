<template>
  <div v-if="page" class="relative px-4 sm:px-6 lg:px-8">
    <article class="text-lg max-w-prose mx-auto">
      <h1>
        <nuxt-link :to="`/${section}`">
          <span
            class="
              block
              text-base text-center text-indigo-600
              font-semibold
              tracking-wide
              uppercase
            "
            >{{ section }}</span
          >
        </nuxt-link>
        <span
          class="
            mt-2
            block
            text-3xl text-center
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
          >{{ page.title }}</span
        >
      </h1>

      <div class="text-gray-400 text-xs uppercase mt-6">
        Published &rarr; {{ page.date | formatDateTimeLong }}
      </div>

      <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-lg mx-auto">
        <nuxt-content :document="page" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
    section: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
