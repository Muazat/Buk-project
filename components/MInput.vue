<template>
  <div>
    <input
      class="my_input"
      type="text"
      v-bind="$attrs"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();
defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.my_input {
  @apply w-full rounded border border-solid border-primary py-2 px-3 focus:outline-primary;
  &.invalid {
    @apply border-warning;
  }
}
</style>
