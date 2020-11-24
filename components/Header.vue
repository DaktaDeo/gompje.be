<template>
  <div class="px-6 md:px-16 lg:px-24">
    <div class="relative z-20 flex justify-between items-center">
      <div class="flex md:block lg:flex items-center w-screen">
        <div
          class="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12"
        >
          <a href="/" class="flex items-center no-underline">
            <img
              class="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
              src="https://secure.gravatar.com/avatar/09251c08e3db9c6698f9fe621d4c1d6e?s=800&d=identicon"
              alt=""
            />
          </a>
        </div>
        <div>
          <div
            class="block text-black no-underline font-bold font-extrabold leading-none lg:leading-tight flex space-x-2 content-center"
          >
            <div class="block text-xl lg:text-3xl uppercase">Gompje</div>
            <div class="block">===</div>
            <div class="block text-l lg:text-2xl uppercase">
              Veerle Deschepper
            </div>
          </div>
          <div
            class="flex mt-3 lg:mt-4 uppercase tracking-wide text-xs space-x-6 ml-1"
          >
            <nuxt-link
              v-for="item in navlinks"
              :key="item.id"
              :to="item.to"
              class="text-gray-600 font-semibold no-underline hover:text-black"
            >
              [{{ item.name }}]
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="block md:hidden">
        <button class="block" @click.prevent="menuOpen = !menuOpen">
          <svg
            style="display: block"
            :class="menuOpen ? 'hidden' : 'block'"
            class="block text-black h-6 w-6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            style="display: none"
            :class="menuOpen ? 'block' : 'hidden'"
            class="text-black h-6 w-6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="menuOpen" class="md:hidden z-10 bg-white fixed pin pt-24">
      <div
        class="spaced-y-8 overflow-y-auto pt-6 pb-8 px-12 max-h-full overflow-y-auto"
      >
        <nuxt-link
          v-for="item in navlinksMobile"
          :key="item.id"
          :to="item.to"
          class="text-black font-bold no-underline"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Array,
      required: false,
      default: () => [],
    },
    navMobile: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      activeItem: null,
      menuOpen: false,
    }
  },
  computed: {
    navlinks() {
      return this.getNavItems(this.nav)
    },
    navlinksMobile() {
      return this.getNavItems(this.navMobile)
    },
  },
  watch: {
    $route() {
      this.activeItem = null
      this.isMobile = false
    },
  },
  methods: {
    getNavItems(lst) {
      return _.filter(_.sortBy(lst, 'weight'), (item) => !_.isEmpty(item.to))
    },
    changeMenu(item) {
      this.activeItem = this.activeItem === item.id ? null : item.id
    },
  },
}
</script>
