<template>
  <div>
    <Header :nav="nav.header" :nav-mobile="nav.mobile"></Header>
    <div class="relative py-16 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <Nuxt />
      </div>
    </div>
    <Footer :socials="socials.follow" :nav="nav.footer"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: { Footer, Header },
  data() {
    return {
      socials: [],
      nav: [],
    }
  },
  async fetch() {
    this.socials = await this.$content(`socials`).fetch()
    this.nav = await this.$content(`nav`).fetch()
  },
  created() {
    this.$fetch()
  },
}
</script>

<style>
body {
  @apply font-sans text-gray-600 leading-tight antialiased bg-gray-100 dark:bg-gray-800 dark:text-gray-300;
}
h1 {
  @apply text-gray-900 dark:text-gray-200;
}
</style>
