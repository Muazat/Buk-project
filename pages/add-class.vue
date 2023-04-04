<template>
  <div>
    <PageTitle>Add Class</PageTitle>
    <div class="md:ml-9" ref="body">
      <div class="mt-4 mb-2 font-semibold">Title</div>
      <TextInput TextInput></TextInput>

      <div class="mt-4 mb-2 font-semibold">Description</div>
      <NoteField></NoteField>
    </div>
    <div class="w-4/5 md:w-2/3">
      <AddButton
        @click="addClass"
        class="float-right mb-10 bg-primary p-2 font-semibold uppercase text-tertiary"
        >Add class</AddButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const addClass = () => {
  console.log("Add class");
};
</script>

<style lang="scss" scoped></style>
