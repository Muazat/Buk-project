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
      <tr v-for="assignment in assignments" :key="assignment.id" class="border">
        <TableData>
          <div class="inline-flex">
            <div class="mr-6 font-bold text-blue-500 hover:text-blue-300">
              <nuxt-link to="view-assignment">
                <Icon
                  name="material-symbols:attach-file-add-rounded"
                  class="h-6 w-6 text-green-600"
                />
              </nuxt-link>
            </div>
          </div>
        </TableData>
        <TableData>{{ dayjs(assignment.due_date).fromNow() }}</TableData>
        <TableData>{{ assignment.category }}</TableData>
        <TableData>{{ assignment.title }}</TableData>
        <TableData class="font-semibold text-green-500">
          {{ assignment.status }}
        </TableData>
        <TableData>
          <div class="inline-flex gap-6">
            <Icon
              name="material-symbols:edit-document"
              class="h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-300"
            />
            <Icon
              name="ic:baseline-delete"
              @click="deleteNote(assignment.id)"
              class="h-6 w-6 cursor-pointer text-red-500 hover:text-red-300"
            />
          </div>
        </TableData>
      </tr>
      <TableEnd>
        <Pagination> </Pagination>
      </TableEnd>
    </Table>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Database } from "~~/types/supabase";
dayjs.extend(relativeTime);

const supabaseClient = useSupabaseClient<Database>();

const { data: assignments } = useAsyncData("assignments", async () => {
  const { data } = await supabaseClient
    .from("Assignments")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);
  return data;
});

const deleteNote = async (id: number) => {
  const { data, error } = await supabaseClient
    .from("Assignments")
    .delete()
    .match({ id });
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
};
</script>

<style lang="scss" scoped></style>
