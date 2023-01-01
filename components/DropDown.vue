<template>
  <div>
    <div
      class="absolute top-1 right-1 float-right mt-4 flex flex-col md:right-10"
    >
      <div class="mx-10">
        <a
          class="flex cursor-pointer items-center justify-center text-primary"
          href=""
          @click="isOpen = !isOpen"
        >
          Username
          <Icon name="mdi:chevron-down" />
        </a>
      </div>
      <div
        ref="opt"
        v-if="isOpen"
        class="mt-6 w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
      >
        <ul
          class="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <NuxtLink
              to=""
              @click="close"
              class="block cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Notifications</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to=""
              @click="close"
              class="block cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Profile</NuxtLink
            >
          </li>
          <li>
            <div
              to="/"
              @click="logout"
              class="block cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Logout
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const isOpen = ref(false);
const opt = ref<HTMLDivElement>(null);

function close() {
  isOpen.value = false;
}
async function logout() {
  close();
  await useSupabaseClient().auth.signOut();
  return navigateTo("/");
}
onClickOutside(opt, close);
</script>

<style lang="scss" scoped></style>
