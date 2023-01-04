<template>
  <PageTitle>Priorities</PageTitle>
  <AddButton class="md:float-right">
    <NuxtLink to="add-priority">+Add Priority</NuxtLink>
  </AddButton>

  <div class="mt-4 md:mt-16 md:flex">
    <Table class="md:ml-16 md:basis-4/5">
      <TableHead>
        <TableData class="font-bold">Priority</TableData>
        <TableData class="font-bold"> Description</TableData>
        <TableData class="font-bold">Due Date</TableData>
        <TableData class="font-bold">Status</TableData>
        <TableData class="font-bold">Action</TableData>
      </TableHead>
      <tr class="border">
        <TableData>
          <Priority class="bg-red-400"></Priority>
        </TableData>
        <TableData>submit android</TableData>
        <TableData>1/2/2019</TableData>
        <TableData>Done</TableData>
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
      <TableEnd>
        <Pagination></Pagination>
      </TableEnd>
    </Table>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
