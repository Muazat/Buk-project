<template>
  <div class="mt-9 md:mt-6 md:flex">
    <div
      class="m-3 md:mx-6 md:grow"
      v-for="summary in summaries"
      :key="summary.title"
    >
      <NuxtLink
        :to="summary.link"
        class="block rounded-lg border border-gray-200 bg-tertiary p-2 px-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 md:p-4"
      >
        <h1 class="text-sm md:text-lg md:font-bold">{{ summary.title }}</h1>
        <h5
          class="text-center font-bold text-gray-900 dark:text-white md:mt-2 md:text-2xl"
        >
          {{ summary.values }}
        </h5>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const summaries = ref([
  { title: "Total notes", values: "21", link: "notes" },
  { title: "Assignment", values: "21", link: "assignments" },
  { title: "Task todo", values: "21", link: "todo" },
]);
</script>

<style lang="scss" scoped></style>
