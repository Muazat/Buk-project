<template>
  <nav
    class="md:bg-primary px-2 sm:px-4  dark:bg-blue-900 "
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex items-center">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Muaxxa</span
        >
      </a>
      <div class="flex items-centermd:order-2">
        
        <button
         @click="backdropClickHandler"
          data-collapse-toggle="mobile-menu-2"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-blue-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="blue"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        ref="backDrop"
        class="hidden  transition-transform translate-y-2 justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-2"
      >
        <ul
          class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  md:dark:bg-blue-900 "
        >
          <li>
            <a
              href="#"
              class=" bg-tertiary block py-2 pr-4 pl-3 text-center md:bg-transparent md:text-black md:p-0 dark:text-white"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class=" bg-tertiary block py-2 pr-4 pl-3 text-black text-center hover:bg-blue-100  md:text-white md:hover:bg-transparent md:hover:text-black md:p-0 md:bg-inherit  md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Sign in</a
            >
          </li>
          <li>
            <a
              href="#"
              class="bg-tertiary block py-2 pr-4 pl-3 text-black text-center hover:bg-blue-100 md:hover:bg-transparent md:bg-inherit md:text-white md:hover:text-black md:p-0  md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-blue-700"
              >Sign up</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const backDrop = ref<HTMLDivElement>(null);


function backdropClickHandler() {
  backDrop.value.style.display = "block";
  // sideDrawer.value.classList.remove("open");
}

</script>

<style lang="scss" scoped></style>
