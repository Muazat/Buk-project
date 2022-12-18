<!-- Dropdown menu -->
<template>
  <div>
<div class="absolute top-1 right-1 md:right-10 float-right flex flex-col mt-4">
  <div class="mx-10">
    <a class="inline-flex text-primary"  @click="option">Username<svg class="ml-2 mt-1 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></a>
  </div>
    <div ref="opt" class="hidden w-44 mt-6 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
        <li>
          <NuxtLink to="" @click="close" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Notifications</NuxtLink>
        </li>
        <li>
          <NuxtLink to="" @click="close" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" @click="close" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</NuxtLink>
        </li>
        </ul>
    </div>
</div>
</div>
</template>

<script setup lang="ts">
const opt = ref<HTMLDivElement>(null);
var check=true;
function option() {

  if (check==true){
    opt.value.style.display="block";
    check=false;
  } 
  else{
    opt.value.style.display="none";
    check=true;
  }

}
function close() {
  opt.value.style.display="none";
 
}

</script>

<style lang="scss" scoped></style>
