<template>
  <div class="md:ml-9" ref="body">
    <div class="mt-10 mb-2 font-semibold">Note Category</div>
    <Mselect v-model="category" :options="['One', 'Two']"></Mselect>
    <div class="mt-4 mb-2 font-semibold">Title</div>
    <TextInput v-model="title"></TextInput>

    <div class="mt-4 mb-2 font-semibold">Content</div>
    <NoteField v-model="description"></NoteField>
    <div class="mt-4 mb-2 font-semibold">Attachments</div>
    <div class="mb-0 w-4/5 md:w-2/3">
      <FileInput v-model="file"></FileInput>
    </div>
  </div>
  <div class="w-4/5 md:w-2/3">
    <AddButton
      class="float-right mb-10 bg-green-500 p-2 font-semibold text-white"
      @click="submitHandler"
    >
      ADD NOTE
    </AddButton>
  </div>

  <!-- work on this code to add categories to options easily -->
  <!-- <div class="hidden opacity-100 " ref="category">
    <CreateCategory></CreateCategory>
</div> -->
  <!-- <a class="text-primary md:float-right md:w-1/2" @click="categoryClickHandler">Create New Category</a> -->
</template>

<script setup lang="ts">
import { Database } from "~~/types/supabase";
const supabaseClient = useSupabaseClient<Database>();

// const category = ref<HTMLDivElement>(null);
// const body = ref<HTMLDivElement>(null);

// function categoryClickHandler() {
//     category.value.style.display="block";
//     body.value.style.opacity="0.2";

// }

// function closeCategoryClickHandler() {
//     category.value.style.display="none";
//     body.value.style.opacity="1";
// }

const title = ref("");
const description = ref("");
const file = ref<FileList | null>(null);
const category = ref("");

const submitHandler = async () => {
  try {
    const { data: savedData, error } = await supabaseClient
      .from("Notes")
      .insert({
        title: title.value,
        description: description.value,
        has_attachment: file.value ? true : false,
        category: category.value,
      })
      .select("*");
    if (error) {
      console.log(error);
    }
    if (savedData) {
      console.log(savedData, file.value);

      if (file.value) {
        const { data, error } = await supabaseClient.storage
          .from("files")
          .upload(
            `${useSupabaseUser().value?.id}/notes/${
              savedData![0].id
            }.${file.value[0].name.split(".").at(-1)?.trim()}`,
            file.value[0]
          );
        if (error) {
          console.log(error);
        }
        if (data) {
          console.log(data);
        }
      }
    }
  } catch (error) {}
};
</script>

<style lang="scss" scoped></style>
