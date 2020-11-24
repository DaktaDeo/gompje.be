<template>
  <div class="px-4 sm:px-6 lg:px-8 py5 md:py-4">
    <Socials :socials="socials.follow"></Socials>
    <Header :nav="nav.header" :nav-mobile="nav.mobile"></Header>
    <div class="lg:pl-56 mt-12">
      <Nuxt />
    </div>
  </div>
</template>

<style>
body {
  @apply font-sans text-black leading-tight antialiased;
}
</style>
<script>
import Socials from '@/components/Socials'
import Header from '@/components/Header'
export default {
  components: { Socials, Header },
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
