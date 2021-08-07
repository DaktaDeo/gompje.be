<template>
  <footer>
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <socials :socials="socials"></socials>
      <p class="mt-8 text-center text-base text-gray-400">
        The DaktaDeo & Multipass logos are copyright &copy;
        <a href="https://daktadeo.be?ref=gompje.be">DaktaDeo.</a> 2011–{{
          new Date().getFullYear()
        }}. <br /><license></license>
        <nuxt-link to="/terms" class="ml-2 underline">
          Terms & Conditions
        </nuxt-link>
      </p>
    </div>
  </footer>
</template>

<script>
import Socials from '@/components/Socials'
import License from '@/components/License'

export default {
  components: { License, Socials },
  props: {
    socials: {
      type: Array,
      required: false,
      default: () => [],
    },
    nav: {
      type: Array,
      required: false,
      default: () => [],
    },
    linkClasses: {
      type: String,
      required: false,
      default: 'text-base leading-6 text-gray-500 hover:text-gray-100',
    },
  },
}
</script>
