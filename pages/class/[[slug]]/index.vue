<template>
  <div>
    <PageTitle>Course Resources</PageTitle>
    <AddButton class="md:float-right" v-if="isLecturer">
      <NuxtLink :to="`${course_access_code}/add-resources`">
        +ADD RESOURCES
      </NuxtLink>
    </AddButton>

    <div class="mt-4 flex-col md:mt-16 md:flex">
      <div
        v-if="!isLecturer"
        class="flex flex-col justify-end gap-3 md:flex-row"
      >
        <input
          type="text"
          v-model="course_access_code"
          class="float-right w-fit rounded-md border border-gray-300 px-4 py-2 md:basis-2/5"
          placeholder="Input Course Access Code"
        />
        <Mbutton @click="refresh" class="!my-0 whitespace-nowrap">
          Get Resources
        </Mbutton>
      </div>
      <Table class="md:basis-4/5">
        <TableHead>
          <TableData class="font-bold"></TableData>
          <TableData class="font-bold">Title</TableData>
          <TableData class="font-bold">Created on</TableData>
          <TableData class="font-bold">Action</TableData>
        </TableHead>
        <tr v-for="resource in resources" class="border">
          <TableData>
            <div class="inline-flex items-center">
              <div class="mr-6 font-bold text-blue-500 hover:text-blue-300">
                <button
                  @click="downloadFile(resource)"
                  title="Download File"
                  to="view-note"
                >
                  <Icon
                    name="material-symbols:attach-file-add-rounded"
                    class="h-6 w-6"
                    :class="[
                      resource.has_attachment && resource.file_ext
                        ? 'cursor-pointer text-blue-500 hover:text-blue-300'
                        : 'cursor-not-allowed text-gray-300',
                    ]"
                  />
                </button>
              </div>
            </div>
          </TableData>
          <TableData class="whitespace-nowrap">{{ resource.title }}</TableData>
          <TableData class="whitespace-nowrap">{{
            dayjs(resource.created_at).fromNow()
          }}</TableData>
          <TableData>
            <div class="inline-flex gap-6">
              <Icon
                name="material-symbols:edit-document"
                class="h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-300"
              />
              <Icon
                name="ic:baseline-delete"
                @click="deleteNote(resource.id)"
                class="h-6 w-6 cursor-pointer text-red-500 hover:text-red-300"
              />
            </div>
          </TableData>
        </tr>
        <TableEnd>
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

const course_access_code = ref(useRoute().params.slug);
const { data: resources, refresh } = useAsyncData("resources", async () => {
  const { data } = await supabaseClient
    .from("Lecturer's resources")
    .select("*")
    .eq("access_code", course_access_code.value)
    .order("created_at", { ascending: false });
  return data;
});

const deleteNote = async (id: number) => {
  const { data, error } = await supabaseClient
    .from("Lecturer's resources")
    .delete()
    .match({ id });
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
};
const isLecturer = computed(() => {
  return useSupabaseUser().value?.user_metadata?.isInstructor;
});

var saveData = function () {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  return function (data, fileName) {
    var json = JSON.stringify(data),
      blob = new Blob([json], { type: "octet/stream" }),
      url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
};

const downloadFile = async (resource) => {
  const { data, error } = await supabaseClient.storage
    .from("lecturers-record")
    .download(
      `${useSupabaseUser().value?.id}/resources/${resource.id}.${
        resource.file_ext
      }`
      //   {
      // transform: {
      //   width: 100,
      //   height: 100,
      //   quality: 80
      // }
    );
  // if (data) {
  //   // download the file
  //   console.log(data);

  //   saveData(data, `${resource.id}.${resource.file_ext}`);
  // }
};
</script>

<style lang="scss" scoped></style>
