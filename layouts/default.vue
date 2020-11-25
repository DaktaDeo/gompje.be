<template>
  <div class="bg-primary-color-light flex flex-col h-screen justify-between">
    <Header :nav="nav.header" :nav-mobile="nav.mobile"></Header>
    <div
      class="px-4 py-4 md:py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl"
    >
      <div class="antialiased text-gray-900">
        <div class="lg:pl-56 md:mt-12">
          <Nuxt />
        </div>
      </div>
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
