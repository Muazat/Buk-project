<template>
    <PageTitle>Edit Assignment</PageTitle>
        <div class="md:ml-9" ref="body">
        <div class="mt-10 mb-2 font-semibold">Assignment Category</div>
        <Mselect></Mselect>
      <div class="mt-4 mb-2 font-semibold">Title</div>
      <TextInput></TextInput>
      <div class="mt-4 mb-2 font-semibold">Content</div>
      <NoteField></NoteField>
      <div class="mt-4 mb-2 font-semibold">Status</div>
      <Status></Status>
      <div class="mt-4 mb-2 font-semibold">Priority</div>
      <PrioritySelect></PrioritySelect>
      <div class="mt-4 mb-2 font-semibold">Due Date</div>
     <DateInput></DateInput>
     <div class="mt-4 mb-2 font-semibold">Attachments</div>
      <div class="mb-0 w-4/5 md:w-2/3">
        <FileInput></FileInput>
      </div>
    </div>
    <div class="w-4/5 md:w-2/3">
    <AddButton class="bg-green-500 text-white font-semibold p-2 float-right mb-10">EDIT ASSIGNMENT</AddButton>
    </div>
    
      
      </template>
      
      <script setup lang="ts">
    
    </script>
      
      <style lang="scss" scoped>
    </style>
      