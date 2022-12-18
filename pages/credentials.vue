<template>

  <PageTitle>Credentials</PageTitle>
  <AddButton class="md:float-right"><NuxtLink to="add-credential">+Add Credential</NuxtLink></AddButton>

<div class="mt-4 md:mt-16 md:flex">
  <Table class=" md:ml-16 md:basis-4/5">
        <TableHead>
        <TableData class="font-bold "></TableData>
        <TableData class="font-bold ">Type</TableData>
        <TableData class="font-bold ">Action</TableData>
      </TableHead>
      <tr class="border ">
        <TableData class="text-green-500 font-semibold">View</TableData>
        <TableData>WAEC Certificate</TableData>
        <TableData>
          <div class="inline-flex">
          <div class="mr-6 font-bold text-blue-500 hover:text-blue-300"> <nuxt-link to="">Edit </nuxt-link></div> <div class="font-bold text-red-500 hover:text-red-300"> <nuxt-link>Delete </nuxt-link></div>
        </div>
        </TableData>
      </tr>

  </Table>
</div>

</template>

<script setup></script>

<style lang="scss" scoped></style>
