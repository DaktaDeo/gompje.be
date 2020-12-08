<template>
  <div>
    <div>
      <div class="text-gray-400 text-xs uppercase">
        {{ doc.date | formatDateTimeLong }}
      </div>
      <span v-if="doc.short" class="text-lg text-black">{{ doc.title }}</span>
      <nuxt-link
        v-else
        :to="doc.path"
        class="text-lg text-black font-bold no-underline hover:underline"
      >
        {{ doc.title }}
      </nuxt-link>
    </div>
    <div
      v-if="doc.blurb"
      class="text-grey-darkest text-base leading-normal mt-1"
    >
      <nuxt-image
        v-if="doc.blurb.image"
        :src="`+jpg-featured:${doc.blurb.image}`"
        width="720"
        height="405"
      />
      <p v-if="doc.blurb.text" v-html="doc.blurb.text"></p>
    </div>
    <div
      v-if="!doc.short"
      class="text-grey-darkest text-base leading-normal mt-2"
    >
      <nuxt-link
        :to="doc.path"
        class="text-grey-darker hover:text-black text-sm no-underline hover:underline"
      >
        {{ readMoreText }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    readMoreText: {
      type: String,
      required: false,
      default: 'Read more →',
    },
    doc: {
      type: Object,
      required: true,
      default: () =>
        function () {
          return { title: '', path: '', description: '' }
        },
    },
  },
}
</script>
