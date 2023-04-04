<template>
  <PageTitle>Edit Assignment</PageTitle>
  <div class="md:ml-9" ref="body">
    <div class="mb-2 mt-10 font-semibold">Assignment Category</div>
    <Mselect></Mselect>
    <div class="mb-2 mt-4 font-semibold">Title</div>
    <TextInput></TextInput>
    <div class="mb-2 mt-4 font-semibold">Content</div>
    <NoteField></NoteField>
    <div class="mb-2 mt-4 font-semibold">Status</div>
    <Status></Status>
    <div class="mb-2 mt-4 font-semibold">Priority</div>
    <PrioritySelect></PrioritySelect>
    <div class="mb-2 mt-4 font-semibold">Due Date</div>
    <DateInput></DateInput>
    <div class="mb-2 mt-4 font-semibold">Attachments</div>
    <div class="mb-0 w-4/5 md:w-2/3">
      <FileInput></FileInput>
    </div>
  </div>
  <div class="w-4/5 md:w-2/3">
    <AddButton
      class="float-right mb-10 bg-green-500 p-2 font-semibold text-white"
      >EDIT ASSIGNMENT</AddButton
    >
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
