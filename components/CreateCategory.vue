<template>
    <div class="absolute left-[25%]" ref="cat">
  <div class="rounded-lg shadow-lg bg-tertiary max-w-[14rem] mt-6 md:mt-3">
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Create New Category</h5>
      <input
      type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-2
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Type category"
    />
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create</button>
    </div>
  </div>
</div>
</template>

  
<script setup lang="ts">

</script>
  
<style lang="scss" scoped>

</style>
