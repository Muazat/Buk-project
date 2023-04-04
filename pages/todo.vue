<template>
  <PageTitle>Tasks</PageTitle>
  <AddButton class="md:float-right"
    ><NuxtLink to="add-task">+Add Task</NuxtLink></AddButton
  >

  <div class="mt-4 md:mt-16 md:flex">
    <Table class="md:ml-16 md:basis-4/5">
      <TableHead>
        <TableData class="font-bold">Date</TableData>
        <TableData class="font-bold">Time</TableData>
        <TableData class="font-bold"> Description</TableData>
        <TableData class="font-bold"> Action</TableData>
      </TableHead>
      <tr class="border">
        <TableData>11/2/2023</TableData>
        <TableData>2:00</TableData>
        <TableData>submit android</TableData>
        <TableData class="font-bold text-red-600"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            id="mdi-delete"
            viewBox="0 0 24 24"
            fill="red"
            width="24"
            height="24"
          >
            <path
              d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
            /></svg
        ></TableData>
      </tr>

      <TableEnd><Pagination></Pagination></TableEnd>
    </Table>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
