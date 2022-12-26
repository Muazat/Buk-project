<template>
  <div class="mb-0 w-4/5 md:w-2/3">
    <select
      class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      aria-label="Default select example"
    >
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
<<<<<<< HEAD
    
  </div> 
</template>
=======
  </div>
</template>

<script setup lang="ts">
defineProps<{
  options: string[];
}>();
</script>
>>>>>>> e3ab22fdfd8a19e7fd1c73d26da38c5d032aa20e
