<template>
  <PageTitle>Assignments</PageTitle>
  <AddButton class="md:float-right"
    ><NuxtLink to="add-assignment">+ADD ASSIGNMENT</NuxtLink></AddButton
  >

  <div class="mt-4 md:mt-16 md:flex">
    <Table class="md:ml-16 md:basis-4/5">
      <TableHead>
        <TableData class="font-bold"></TableData>
        <TableData class="font-bold">Due Date</TableData>
        <TableData class="font-bold">Category</TableData>
        <TableData class="font-bold">Title</TableData>
        <TableData class="font-bold">Status</TableData>
        <TableData class="font-bold">Action</TableData>
      </TableHead>
      <tr class="border">
        <TableData>
          <div class="inline-flex">
            <div class="mr-6 font-bold text-blue-500 hover:text-blue-300">
              <nuxt-link to="view-assignment"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="mdi-note-text"
                  viewBox="0 0 24 24"
                  fill="green"
                  width="24"
                  height="24"
                >
                  <path
                    d="M14,10H19.5L14,4.5V10M5,3H15L21,9V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3M5,12V14H19V12H5M5,16V18H14V16H5Z"
                  />
                </svg>
              </nuxt-link>
            </div>
            <div class="font-bold text-green-500 hover:text-green-300">
              <nuxt-link
                ><svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 3.002a2.998 2.998 0 1 1-2.148 5.09l-5.457 3.12a3.002 3.002 0 0 1 0 1.577l5.458 3.119a2.998 2.998 0 1 1-.746 1.304l-5.457-3.12a2.998 2.998 0 1 1 0-4.184l5.457-3.12A2.998 2.998 0 0 1 17 3.002Z"
                    fill="#212121"
                  /></svg
              ></nuxt-link>
            </div>
          </div>
        </TableData>
        <TableData>11/2/2023</TableData>
        <TableData>English</TableData>
        <TableData>Verbs</TableData>
        <TableData class="font-semibold text-green-500">Done</TableData>
        <TableData>
          <div class="inline-flex">
            <div class="mr-6 font-bold text-blue-500 hover:text-blue-300">
              <nuxt-link to="edit-assignment">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2v6a2 2 0 0 0 2 2h4.92c-.596.22-1.144.554-1.558.97l-6.05 6.092a2.815 2.815 0 0 0-.728 1.279l-.525 2.03A2.082 2.082 0 0 0 10.3 22H5.5A1.5 1.5 0 0 1 4 20.5v-17A1.5 1.5 0 0 1 5.5 2H12Z"
                    fill="blue"
                  />
                  <path
                    d="M13.5 2.5V8a.5.5 0 0 0 .5.5h5.5l-6-6ZM12.196 17.572l5.902-5.902a2.285 2.285 0 1 1 3.233 3.232l-5.903 5.902a2.684 2.684 0 0 1-1.247.707l-1.831.457a1.087 1.087 0 0 1-1.318-1.318l.457-1.83c.118-.473.362-.904.707-1.248Z"
                    fill="blue"
                  />
                </svg>
              </nuxt-link>
            </div>
            <div class="font-bold text-red-500 hover:text-red-300">
              <nuxt-link
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
              ></nuxt-link>
            </div>
          </div>
        </TableData>
      </tr>
      <TableEnd><Pagination></Pagination></TableEnd>
    </Table>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
