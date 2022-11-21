
<template>
<div>
    <a class="float-right inline-flex mt-4"  @click="option">Username<svg class="ml-2 mt-1 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></a>
    <!-- Dropdown menu -->
    <div ref="opt" class="hidden z-10 w-44  mt-12  bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 float-right">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
        <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
        </li>
        <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
        </li>
        
        </ul>
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

</script>

<style lang="scss" scoped></style>
