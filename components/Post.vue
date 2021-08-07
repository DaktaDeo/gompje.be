<template>
  <div v-if="page">
    <article id="mainContent" class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <nuxt-link :to="`/${section}`">
            <span
              class="
                block
                text-base text-center text-indigo-600
                dark:text-indigo-400
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
              sm:text-4xl
            "
            >{{ page.title }}</span
          >
        </h1>
        <p class="mt-8 text-gray-500 text-xs uppercase mt-6">
          Published &rarr; {{ page.date | formatDateTimeLong }}
        </p>
      </div>
      <div
        id="rssContent"
        class="mt-6 prose prose-indigo prose-lg mx-auto dark:prose-light"
      >
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
