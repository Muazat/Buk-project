<template>

    <PageTitle>Notes</PageTitle>
    <AddButton class="md:float-right"><NuxtLink to="add-note">+ADD NOTE</NuxtLink></AddButton>
  
<div class="mt-4 md:mt-16 md:flex">
    <Table class=" md:ml-16 md:basis-4/5">
          <TableHead>
          <TableData class="font-bold "></TableData>
          <TableData class="font-bold ">Category</TableData>
          <TableData class="font-bold ">Title</TableData>
          <TableData class="font-bold ">Created on</TableData>
          <TableData class="font-bold ">Action</TableData>
        </TableHead>
        <tr class="border ">
          <TableData>
            <div class="inline-flex">
            <div class="mr-6 font-bold text-blue-500 hover:text-blue-300"> <nuxt-link to="">View </nuxt-link></div> <div class="font-bold text-green-500 hover:text-green-300"> <nuxt-link>Share</nuxt-link></div>
          </div>
          </TableData>
          <TableData>English</TableData>
          <TableData>Verbs</TableData>
          <TableData>11/2/2023</TableData>
          <TableData>
            <div class="inline-flex">
            <div class="mr-6 font-bold text-blue-500 hover:text-blue-300"> <nuxt-link to="edit-note">Edit </nuxt-link></div> <div class="font-bold text-red-500 hover:text-red-300"> <nuxt-link>Delete </nuxt-link></div>
          </div>
          </TableData>
        </tr>
      <TableEnd><Pagination></Pagination></TableEnd>
    </Table>
  </div>

  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  