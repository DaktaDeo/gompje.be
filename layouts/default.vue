<template>
  <div>
    <Socials :socials="socials.follow"></Socials>
    <div
      class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl"
    >
      <div class="antialiased text-gray-900">
        <Header :nav="nav.header" :nav-mobile="nav.mobile"></Header>
        <div class="lg:pl-56 mt-12">
          <Nuxt />
        </div>
      </div>
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
