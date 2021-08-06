<template>
  <figure :class="classes">
    <nuxt-picture :src="src" :alt="alt" preset="jpg_content"></nuxt-picture>
    <figcaption
      v-if="!_.isEmpty(caption)"
      class="
        mt-4
        mb-8
        text-xl text-gray-500
        leading-8
        prose
        text-lg
        max-w-prose
        mx-auto
      "
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'ContentImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: false,
      default: '',
    },
    wide: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classes() {
      return this.wide ? 'md:-mx-44 2xl:-mx-96' : ''
    },
  },
}
</script>
