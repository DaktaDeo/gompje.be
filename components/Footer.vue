<template>
  <footer class="">
    <div class="max-w-screen-xl mx-auto py-2 md:py-4 px-4 sm:px-6 lg:px-8">
      <socials :socials="socials"></socials>
      <div
        class="mt-2 md:mt-4 border-t border-gray-200 pt-2 md:pt-4 border-dotted"
      >
        <p
          class="
            leading-6
            text-gray-400 text-center
            md:text-left
            xl:text-center
            text-sm
          "
        >
          The DaktaDeo & Multipass logos are copyright &copy;
          <a href="https://daktadeo.be?ref=gompje.be">DaktaDeo.</a> 2011–{{
            new Date().getFullYear()
          }}. <br /><license></license>
          <nuxt-link to="/terms" class="ml-2 underline">
            Terms & Conditions
          </nuxt-link>
        </p>
      </div>
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
