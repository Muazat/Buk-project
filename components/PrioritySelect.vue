<template>
    <div class="mb-0 w-4/5 md:w-2/3">
  <select class="form-select appearance-none
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
     <slot>
          <option selected class="text-red-500">None</option>
          <option value="1" class="text-red-600">Low</option>
          <option value="1" class="text-red-700">High</option>
      </slot>
      
  </select>
  
</div>
</template>