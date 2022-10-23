<template>
  <div>
    <input class="my_input" type="text" v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.my_input {
  @apply border border-solid w-full border-tertiary rounded py-2 px-3 focus:outline-primary;
  &.invalid {
    @apply border-warning;
  }
}
</style>
