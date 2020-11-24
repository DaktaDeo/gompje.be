<template>
  <div class="py-8 lg:py-16 px-6 md:px-16 lg:px-24">
    <div class="relative z-20 flex justify-between items-center">
      <div class="flex md:block lg:flex items-center max-w-full">
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
          <a
            href="/"
            class="block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight"
            >Veerle Deschepper aka Gompje</a
          >
          <div
            class="hidden md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs spaced-x-6"
          >
            <a
              href="/articles"
              class="text-grey-dark font-semibold no-underline hover:text-black"
              >Articles</a
            >
            <a
              href="/talks"
              class="text-grey-dark font-semibold no-underline hover:text-black"
              >Talks</a
            >
            <a
              href="/screencasts"
              class="text-grey-dark font-semibold no-underline hover:text-black"
              >Screencasts</a
            >
            <a
              href="/podcast"
              class="text-grey-dark font-semibold no-underline hover:text-black"
              >Podcast</a
            >
            <a
              href="/courses"
              class="text-grey-dark font-semibold no-underline hover:text-black"
              >Courses</a
            >
            <a
              href="/projects"
              class="text-grey-dark font-semibold no-underline hover:text-black"
              >Projects</a
            >
            <a
              href="/journal"
              class="text-grey-dark font-semibold no-underline hover:text-black"
              >Journal</a
            >
          </div>
        </div>
      </div>
      <div class="block md:hidden">
        <button class="block" @click="toggleMenu">
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
    <div
      style="display: none"
      :class="menuOpen ? 'block' : 'hidden'"
      class="md:hidden z-10 bg-white fixed pin pt-24"
    >
      <div
        class="spaced-y-8 overflow-y-auto pt-6 pb-8 px-12 max-h-full overflow-y-auto"
      >
        <a href="/articles" class="block text-black font-bold no-underline"
          >Articles</a
        >
        <a href="/talks" class="block text-black font-bold no-underline"
          >Talks</a
        >
        <a href="/screencasts" class="block text-black font-bold no-underline"
          >Screencasts</a
        >
        <a href="/podcast" class="block text-black font-bold no-underline"
          >Podcast</a
        >
        <a href="/courses" class="block text-black font-bold no-underline"
          >Courses</a
        >
        <a href="/projects" class="block text-black font-bold no-underline"
          >Projects</a
        >
        <a href="/journal" class="block text-black font-bold no-underline"
          >Journal</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
