<template>
  <div
    class="bg-primary-color-light flex flex-col min-h-screen justify-between h-full"
  >
    <Header :nav="nav.header" :nav-mobile="nav.mobile"></Header>
    <div
      class="px-4 py-6 sm:px-6 antialiased text-gray-900 min-h-full flex-1 flex-col"
    >
      <Nuxt />
    </div>
    <Footer :socials="socials.follow" :nav="nav.footer"></Footer>
  </div>
</template>

<style>
body {
  @apply font-sans text-black leading-tight antialiased bg-gray-100;
}
</style>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: { Footer, Header },
  async fetch() {
    this.socials = await this.$content(`socials`).fetch()
    this.nav = await this.$content(`nav`).fetch()
  },
  data() {
    return {
      socials: [],
      nav: [],
    }
  },
  created() {
    this.$fetch()
  },
}
</script>
