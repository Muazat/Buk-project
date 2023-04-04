<template>
  <PageTitle>Edit note</PageTitle>
  <div class="md:ml-9" ref="body">
    <div class="mb-2 mt-10 font-semibold">Note Category</div>
    <Mselect></Mselect>
    <div class="mb-2 mt-4 font-semibold">Title</div>
    <TextInput></TextInput>

    <div class="mb-2 mt-4 font-semibold">Content</div>
    <NoteField></NoteField>
    <div class="mb-2 mt-4 font-semibold">Attachments</div>
    <div class="mb-0 w-4/5 md:w-2/3">
      <div class="inline-flex">
        <AddButton>Choose File</AddButton>
        <div class="pt-10 text-sm md:pt-4">No file Attached</div>
      </div>
    </div>
  </div>
  <div class="w-4/5 md:w-2/3">
    <AddButton
      class="float-right mb-10 bg-green-500 p-2 font-semibold text-white"
      >EDIT NOTE</AddButton
    >
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
