<template>
  <div class="mt-4 text-black text-2xl font-semibold">Dashboard</div>

  <div class="flex mt-6">
    <div class="grow mx-6">
    <a href="#" class="block p-4 bg-tertiary border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h1 class="font-bold">Total notes</h1>
    <h5 class="mt-2 text-2xl font-bold text-center text-gray-900 dark:text-white">21</h5>
  </a></div>

  <div class="grow mx-6">
    <a href="#" class="block p-4 bg-tertiary border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h1 class="font-bold">Total notes</h1>
    <h5 class="mt-2 text-2xl font-bold text-center text-gray-900 dark:text-white">21</h5>
  </a></div>

  <div class="grow mx-6">
    <a href="#" class="block p-4 bg-tertiary border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h1 class="font-bold">Total notes</h1>
    <h5 class="mt-2 text-2xl font-bold text-center text-gray-900 dark:text-white">21</h5>
  </a></div>
  </div>


  <div class="flex mt-16">
   
  <div class="mx-6 basis-1/3">
    <h1 class="font-bold text-left">Latest Schedule</h1>
    <div>
      <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center">
              <thead class="border-b  bg-tertiary ">
                <tr class="text-primary">
                  <th scope="col" class="text-sm font-bold px-6 py-4">
                    Date
                  </th>
                  <th scope="col" class="text-sm font-bold  px-6 py-4">
                    Time
                  </th>
                  <th scope="col" class="text-sm font-bold px-6 py-4">
                    Description
                  </th>
                  </tr>
                </thead>
                  <tbody>
                    <tr class="bg-white border-b">
                        <td class="text-sm  font-light px-6 py-4 text-left ">1/23/2020</td>
                        <td class="text-sm  font-light px-6 py-4 text-left">
                          2:00pm
                        </td>
                        <td class="text-sm  font-light px-6 py-4 text-left">
                          android test
                        </td>
                      </tr>
                  </tbody>
                  <tr class="bg-tertiary"> <td colspan="3"><a class="font-light text-primary">see more</a></td></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  </div>

  <div class="mx-6 grow">
    <h1 class="font-bold text-left">Priority</h1>
    <div>
      <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center">
              <thead class="border-b  bg-tertiary">
                <tr  class="text-primary">
                  <th scope="col" class="text-sm font-bold px-6 py-4" >
                    Priority
                  </th>
                  <th scope="col" class="text-sm font-bold px-6 py-4">
                    Description
                  </th>
                  <th scope="col" class="text-sm font-bold  px-6 py-4">
                    Due date
                  </th>
                  <th scope="col" class="text-sm font-bold  px-6 py-4">
                    Status
                  </th>
                  </tr>
                </thead>
                  <tbody >
                    <tr class="bg-white border-b">
                        <td class="text-sm  font-light px-6 py-4 text-left"><div class="rounded bg-red-400 ml-5 p-[1px] h-3 w-3"></div></td>
                        <td class="text-sm  font-light px-6 py-4 text-left">
                          sumbit userapp
                        </td>
                        <td class="text-sm  font-light px-6 py-4 text-left">
                          11/3/4021
                        </td>
                        <td class="text-sm  font-light px-6 py-4 text-left">
                          some
                        </td>
                      </tr>
                  </tbody>
                  <tr class="bg-tertiary"> <td colspan="4"><a class="font-light text-primary">see more</a></td></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    
  </div>

  </div>



</template>

<script setup lang="ts">
const appSection = [
  {
    slug: "dashboard",
    name: "Dashboard",
    icon: "fluent:calendar-data-bar-20-regular",
  },
  { slug: "notes", name: "Notes", icon: "fluent:notepad-20-regular" },
  {
    slug: "assignments",
    name: "Assignments",
    icon: "fluent:book-letter-20-regular",
  }];</script>

<style lang="scss" scoped></style>
