<template>
  <div class="flex gap-3">
    <side-bar />
    <div class="w-full mr-20">
      <nav-bar class="mb-11" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
