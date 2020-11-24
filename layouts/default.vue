<template>
  <div>
    <Header></Header>
    <Nuxt />
  </div>
</template>

<style>
body {
  @apply font-sans text-black leading-tight antialiased;
}
</style>
<script>
import Header from '~/components/Header'
export default {
  components: { Header },
}
</script>
