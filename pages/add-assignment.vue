<template>
  <div>
    <PageTitle>Add Assignment</PageTitle>
    <form @submit.prevent="addAssignment" class="ml-9" ref="body">
      <div>
        <div class="mb-2 mt-4 font-semibold">Assignment Category</div>
        <Mselect v-model="taskData.category" :options="categoryOptions" />
        <div class="mb-2 mt-4 font-semibold">Title</div>

        <TextInput v-model="taskData.title"></TextInput>
        <div class="mb-2 mt-4 font-semibold">Content</div>
        <NoteField v-model="taskData.content"></NoteField>
        <div class="mb-2 mt-4 font-semibold">Status</div>
        <Mselect v-model="taskData.status" :options="statusOptions"></Mselect>
        <div class="mb-2 mt-4 font-semibold">Priority</div>
        <Mselect v-model="taskData.priority" :options="priorityOptions" />
        <div class="mb-2 mt-4 font-semibold">Due Date</div>
        <DateInput v-model="taskData.dueDate"></DateInput>
        <div class="mb-2 mt-4 font-semibold">Attachments</div>
        <div class="mb-0 w-4/5 md:w-2/3">
          <FileInput v-model="taskData.file"></FileInput>
        </div>
      </div>
      <div class="w-4/5 md:w-2/3">
        <AddButton
          class="float-right mb-10 bg-green-500 p-2 font-semibold text-white"
        >
          ADD ASSIGNMENT
        </AddButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const categoryOptions = ["Category", "None"];
const statusOptions = ["Started", "Doing", "Done"];
const priorityOptions = ["High", "Medium", "Low"];

const taskData = reactive({
  title: "",
  file: null as FileList | null,
  content: "",
  status: "",
  priority: "",
  dueDate: "",
  category: "",
});

async function addAssignment() {
  try {
    const file_ext = taskData.file
      ? taskData.file[0].name.split(".").at(-1)?.trim()
      : null;
    const { data: savedData, error } = await useSupabaseClient<Database>()
      .from("Assignments")
      .insert({
        category: taskData.category,
        title: taskData.title,
        content: taskData.content,
        status: taskData.status,
        priority: taskData.priority,
        has_attachement: taskData.file ? true : false,
        due_date: new Date(taskData.dueDate),
        file_ext,
      })
      .select("*");
    if (error) {
      console.log(error);
    }
    if (savedData) {
      if (taskData.file) {
        const { data, error } = await useSupabaseClient()
          .storage.from("files")
          .upload(
            `${useSupabaseUser().value?.id}/assignment/${
              savedData[0].id
            }.${taskData.file[0].name.split(".").at(-1)?.trim()}`,
            taskData.file[0]
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
