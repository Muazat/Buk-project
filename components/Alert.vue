<template>
  <transition name="fade">
    <div v-if="showAlert" class="flex w-full items-center justify-center">
      <div
        id="alert-1"
        class="fixed top-11 mb-4 flex items-center justify-center rounded-lg bg-blue-50 p-4 text-blue-800 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <Icon name="material-symbols:info" />
        <div class="ml-3 text-sm font-medium">
          <slot />
        </div>
        <button
          type="button"
          class="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-blue-50 p-1.5 text-blue-500 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          data-dismiss-target="#alert-1"
          aria-label="Close"
        >
          <Icon name="material-symbols:close-rounded" class="h-6 w-6" />
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const { modelValue, timeout } = definePropsRefs({
  modelValue: Boolean,
  timeout: Number,
});
let showAlert = ref(modelValue.value);
const emit = defineEmits(["update:modelValue"]);

watch(modelValue, (val) => {
  showAlert.value = val;
  setTimeout(() => {
    showAlert.value = false;
    emit("update:modelValue", false);
  }, timeout.value || 5000);
});
</script>

<style scoped></style>
