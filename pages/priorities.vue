<template>

    <PageTitle>Priorities</PageTitle> 
    <AddButton class="md:float-right"><NuxtLink to="add-priority">+Add Priority</NuxtLink></AddButton>
  
<div class="mt-4 md:mt-16 md:flex">
    <Table class=" md:ml-16 md:basis-4/5">
        <TableHead>
          <TableData class="font-bold ">Priority</TableData>
          <TableData class="font-bold "> Description</TableData>
          <TableData class="font-bold ">Due Date</TableData>
          <TableData class="font-bold ">Status</TableData>
          <TableData class="font-bold ">Action</TableData>
        </TableHead>
        <tr class="border ">
          <TableData><Priority class="bg-red-400"></Priority></TableData>
          <TableData>submit android</TableData>
          <TableData>1/2/2019</TableData>
          <TableData>Done</TableData>
          <TableData class=" font-bold text-red-500 hover:text-red-300">Remove</TableData>
        </tr>
        <TableEnd><Pagination></Pagination></TableEnd>
    </Table>
  </div>

  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  