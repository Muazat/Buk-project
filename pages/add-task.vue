<template>
    <PageTitle>Create Task</PageTitle>
        <div class="md:ml-9">
      <div class="mt-4 mb-2 font-semibold">Description</div>
      <TextInput></TextInput>
      <div class="mt-4 mb-2 font-semibold">Status</div>
      <Status></Status>
      <div class="mt-4 mb-2 font-semibold">Priority</div>
      <PrioritySelect></PrioritySelect>
      <div class="mt-4 mb-2 font-semibold">Date</div>
     <DateInput></DateInput>
     <div class="mt-4 mb-2 font-semibold">Time</div>
     <TimeInput></TimeInput>
    </div>
    <div class="w-4/5 md:w-2/3">
    <AddButton class="bg-green-500 text-white font-semibold p-2 float-right mb-10">CREATE TASK</AddButton>
    </div>
    
      
      </template>
      
      <script setup lang="ts">
    
    </script>
      
      <style lang="scss" scoped>
    </style>
      