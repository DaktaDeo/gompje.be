<template>
  <div class="flex justify-center space-x-6">
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
