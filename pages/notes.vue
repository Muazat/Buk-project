<template>
  <div>
    <PageTitle>Notes</PageTitle>
    <AddButton class="md:float-right">
      <NuxtLink to="add-note">+ADD NOTE</NuxtLink>
    </AddButton>

    <div class="mt-4 md:mt-16 md:flex">
      <Table class="md:ml-16 md:basis-4/5">
        <TableHead>
          <TableData class="font-bold"></TableData>
          <TableData class="font-bold">Category</TableData>
          <TableData class="font-bold">Title</TableData>
          <TableData class="font-bold">Created on</TableData>
          <TableData class="font-bold">Action</TableData>
        </TableHead>
        <tr v-for="note in notes" class="border">
          <TableData>
            <div class="inline-flex items-center">
              <div class="mr-6 font-bold text-blue-500 hover:text-blue-300">
                <div title="Add File" to="view-note">
                  <Icon
                    name="material-symbols:attach-file-add-rounded"
                    class="h-6 w-6 text-green-600"
                  />
                </div>
              </div>
            </div>
          </TableData>
          <TableData>{{ note.category }}</TableData>
          <TableData>{{ note.title }}</TableData>
          <TableData>{{ dayjs(note.created_at).fromNow() }}</TableData>
          <TableData>
            <div class="inline-flex gap-6">
              <Icon
                name="material-symbols:edit-document"
                class="h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-300"
              />
              <Icon
                name="ic:baseline-delete"
                @click="deleteNote(note.id)"
                class="h-6 w-6 cursor-pointer text-red-500 hover:text-red-300"
              />
            </div>
          </TableData>
        </tr>
        <TableEnd>
          <!-- <button @click="refreshPage()">Refresh Page</button> -->
          <Pagination></Pagination>
        </TableEnd>
      </Table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Database } from "~~/types/supabase";
dayjs.extend(relativeTime);

const supabaseClient = useSupabaseClient<Database>();

const { data: notes } = useAsyncData("notes", async () => {
  const { data } = await supabaseClient
    .from("Notes")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);
  return data;
});

const deleteNote = async (id: number) => {
  const { data, error } = await supabaseClient
    .from("Notes")
    .delete()
    .match({ id });
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
  location.reload();
};
</script>

<style lang="scss" scoped></style>
