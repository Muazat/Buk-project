<template>

    <PageTitle>Tasks</PageTitle> 
    <AddButton class="md:float-right"><NuxtLink to="add-task">+Add Task</NuxtLink></AddButton>
  
<div class="mt-4 md:mt-16 md:flex">
    <Table class=" md:ml-16 md:basis-4/5">
        <TableHead>
          <TableData class="font-bold ">Date</TableData>
          <TableData class="font-bold ">Time</TableData>
          <TableData class="font-bold "> Description</TableData>
          <TableData class="font-bold "> Action</TableData>
        </TableHead>
        <tr class="border ">
          <TableData>11/2/2023</TableData>
          <TableData>2:00</TableData>
          <TableData>submit android</TableData>
          <TableData class="font-bold text-red-600"> Remove</TableData>
        </tr>

        <TableEnd><Pagination></Pagination></TableEnd>
    </Table>
  </div>

  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  