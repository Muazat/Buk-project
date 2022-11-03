<template>
    <div>
     <button class="my_button" v-bind="$attrs">login</button>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style lang="scss" scoped>
  .my_button {
    @apply block bg-primary text-neutral rounded-md  py-2 px-8 transition my-6;

  }
  .my_button:hover {
    @apply  bg-tertiary border-[1px]  border-primary text-secondary;
  }

  .my_button:active {
    @apply text-primary;
  }
  </style>
  