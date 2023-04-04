<template>
  <PageTitle>Add Assignment</PageTitle>
  <form @submit.prevent="addAssignment" class="ml-9" ref="body">
    <div class="mb-2 mt-10 font-semibold">Assignment Category</div>
    <Mselect v-model="category" :options="categoryOptions"></Mselect>
    <div class="mb-2 mt-4 font-semibold">Title</div>

    <TextInput v-model="title"></TextInput>
    <div class="mb-2 mt-4 font-semibold">Content</div>
    <NoteField v-model="content"></NoteField>
    <div class="mb-2 mt-4 font-semibold">Status</div>
    <Mselect v-model="status" :options="statusOptions"></Mselect>
    <div class="mb-2 mt-4 font-semibold">Priority</div>
    <Mselect v-model="priority" :options="priorityOptions"></Mselect>
    <div class="mb-2 mt-4 font-semibold">Due Date</div>
    <DateInput v-model="dueDate"></DateInput>
    <div class="mb-2 mt-4 font-semibold">Attachments</div>
    <div class="mb-0 w-4/5 md:w-2/3">
      <FileInput v-model="file"></FileInput>
    </div>
    <div class="w-4/5 md:w-2/3">
      <AddButton
        class="float-right mb-10 bg-green-500 p-2 font-semibold text-white"
      >
        ADD ASSIGNMENT
      </AddButton>
    </div>
  </form>
</template>

<script setup lang="ts">
const categoryOptions = ["Category", "None"];
const statusOptions = ["Started", "Doing", "Done"];
const priorityOptions = ["High", "Medium", "Low"];
const title = ref("");
const file = ref<FileList | null>(null);
const content = ref("");
const status = ref("");
const priority = ref("");
const dueDate = ref("");
const category = ref("");

async function addAssignment() {
  try {
    console.log({
      title: title.value,
      content: content.value,
      status: status.value,
      priority: priority.value,
      due_date: new Date(dueDate.value),
    });

    const { data: savedData, error } = await useSupabaseClientT
      .from("Assignments")
      .insert({
        category: category.value,
        title: title.value,
        content: content.value,
        status: status.value,
        priority: priority.value,
        due_date: new Date(dueDate.value),
      })
      .select("*");
    if (error) {
      console.log(error);
    }
    if (savedData) {
      console.log(savedData, file.value);

      if (file.value) {
        const { data, error } = await useSupabaseClientT.storage
          .from("files")
          .upload(
            `${useSupabaseUser().value?.id}/assignment/${
              savedData[0].id
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
}
</script>

<style lang="scss" scoped></style>
