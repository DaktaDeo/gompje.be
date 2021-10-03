<template>
  <div v-if="hasContent">
    <dl
      class="
        space-y-10
        md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-12
        lg:grid-cols-1
      "
    >
      <div v-for="faq in items" :key="faq.id">
        <dt class="text-lg leading-6 font-medium text-gray-900">
          {{ faq.question }}
        </dt>
        <dd class="mt-2 text-base text-gray-500" v-html="faq.answer"></dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    hasContent() {
      return !_.isEmpty(this.items)
    },
  },
}
</script>
