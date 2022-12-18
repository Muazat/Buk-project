<template>

    <PageTitle>Edit note</PageTitle>
    <div class="" ref="body">
    <div class="mt-10 mb-2 font-semibold">Note Category</div>
    <Mselect></Mselect>
  <div class="mt-4 mb-2 font-semibold">Title</div>
  <TextInput></TextInput>

  <div class="mt-4 mb-2 font-semibold">Content</div>
  <NoteField></NoteField>
  <div class="mt-4 mb-2 font-semibold">Attachments</div>
  <div class="mb-0 w-4/5 md:w-2/3">
    <div class="inline-flex">
    <AddButton>Choose File</AddButton>
    <div class="pt-10 md:pt-4 text-sm">No file Attached</div>
    </div> 
  </div>
</div>
<div class="mb-0 w-4/5 md:w-2/3">
<AddButton class="bg-green-500 text-white font-semibold p-2 float-right">EDIT NOTE</AddButton>
</div>
  
  </template>
  
  <script setup lang="ts">
</script>
  
  <style lang="scss" scoped></style>
  