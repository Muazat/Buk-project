<template>
  <PageTitle>Create Task</PageTitle>
  <div class="md:ml-9">
    <div class="mb-2 mt-4 font-semibold">Description</div>
    <TextInput v-model="text"></TextInput>
    <div class="mb-2 mt-4 font-semibold">Status</div>
    <Status></Status>
    <div class="mb-2 mt-4 font-semibold">Priority</div>
    <PrioritySelect></PrioritySelect>
    <div class="mb-2 mt-4 font-semibold">Date</div>
    <DateInput></DateInput>
    <div class="mb-2 mt-4 font-semibold">Time</div>

    <TimeInput v-model="time"></TimeInput>
  </div>
  <div class="w-4/5 md:w-2/3">
    <AddButton
      class="float-right mb-10 bg-green-500 p-2 font-semibold text-white"
    >
      CREATE TASK
    </AddButton>
  </div>
</template>

<script setup lang="ts">
const text = ref("");
const time = ref({});
</script>

<style lang="scss" scoped></style>
