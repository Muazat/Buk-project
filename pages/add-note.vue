<template>

    <PageTitle>Add Note</PageTitle>
    <div class="md:ml-9" ref="body">
    <div class="mt-10 mb-2 font-semibold">Note Category</div>
    <Mselect></Mselect>
  <div class="mt-4 mb-2 font-semibold">Title</div>
  <TextInput></TextInput>

  <div class="mt-4 mb-2 font-semibold">Content</div>
  <NoteField></NoteField>
  <div class="mt-4 mb-2 font-semibold">Attachments</div>
  <div class="mb-0 w-4/5 md:w-2/3">
    <FileInput></FileInput>
  </div>
</div>
<div class="w-4/5 md:w-2/3">
<AddButton class="bg-green-500 text-white font-semibold p-2 float-right mb-10">ADD NOTE</AddButton>
</div>

<!-- work on this code to add categories to options easily -->
<!-- <div class="hidden opacity-100 " ref="category">
    <CreateCategory></CreateCategory>
</div> -->
 <!-- <a class="text-primary md:float-right md:w-1/2" @click="categoryClickHandler">Create New Category</a> -->
  
  
  
  </template>
  
  <script setup lang="ts">
// const category = ref<HTMLDivElement>(null);
// const body = ref<HTMLDivElement>(null);

// function categoryClickHandler() {
//     category.value.style.display="block";
//     body.value.style.opacity="0.2";

// }

// function closeCategoryClickHandler() {
//     category.value.style.display="none";
//     body.value.style.opacity="1";
// }

</script>
  
  <style lang="scss" scoped></style>
  