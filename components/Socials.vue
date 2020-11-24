<template>
  <div
    class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
  >
    <div class="flex justify-center space-x-6 md:order-2">
      <a
        v-for="channel in socials"
        :key="channel.id"
        :href="channel.link"
        :title="channel.title"
        target="_blank"
        class="text-gray-400 hover:text-gray-500"
      >
        <div class="h-4 w-4 inline-svg fill-current">
          <div v-html="require(`~/assets/fa/${channel.name}.svg?raw`)" />
        </div>
      </a>
    </div>
    <div class="mt-8 md:mt-0 md:order-1"></div>
  </div>
</template>
<script>
export default {
  props: {
    socials: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>
