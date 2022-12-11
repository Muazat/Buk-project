<template>
  <aside class="w-72 h-screen" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-tertiary h-full">
      <nuxt-link to="/" class="flex items-center pl-2.5 mb-5">
        <!-- <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="mr-3 h-6 sm:h-7"
          alt="Flowbite Logo"
        /> -->
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Muaxxa</span
        >
      </nuxt-link>
      <ul class="flex gap-12 flex-col mx-8">
        <li v-for="link in appSection" :key="link.slug">
          <nuxt-link
            :to="link.slug"
            class="flex items-center text-base font-bold text-[#657BCA] rounded-lg hover:text-primary"
          >
            <Icon :name="link.icon" />
            <span class="ml-4 ">{{ link.name }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
const appSection = [
  {
    slug: "dashboard",
    name: "Dashboard",
    icon: "fluent:calendar-data-bar-20-regular",
  },
  { slug: "notes", name: "Notes", icon: "fluent:notepad-20-regular" },
  {
    slug: "assignments",
    name: "Assignments",
    icon: "fluent:book-letter-20-regular",
  },
  { slug: "calender", name: "Calender", icon: "fluent:calendar-20-regular" },
  {
    slug: "credentials",
    name: "Credentials",
    icon: "fluent:credit-card-clock-20-regular",
  },
  {
    slug: "utilities",
    name: "Utilities",
    icon: "fluent:calculator-multiple-20-regular",
  },
];
</script>

<style lang="scss" scoped></style>
