<template>
  <PageTitle>Add Credential</PageTitle>
  <form @submit.prevent="addCredential">
    <div class="md:ml-9">
      <div class="mb-2 mt-4 font-semibold">Title</div>
      <TextInput v-model="fileName" />
      <div class="mb-2 mt-4 font-semibold">Attachments</div>
      <div class="mb-0 w-4/5 md:w-2/3">
        <FileInput v-model="file"></FileInput>
      </div>
    </div>
    <div class="w-4/5 md:w-2/3">
      <AddButton
        class="float-right mb-10 bg-green-500 p-2 font-semibold text-white"
        >ADD CREDENTIAL
      </AddButton>
    </div>
  </form>
</template>

<script setup lang="ts">
const fileName = ref("");
const file = ref<FileList | null>(null);

async function addCredential() {
  try {
    console.log({
      title: fileName.value,
    });

    const { data: savedData, error } = await useSupabaseClientT
      .from("Credentials")
      .insert({
        title: fileName.value,
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
            `${useSupabaseUser().value?.id}/credentials/${
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
  } catch (error) {
    console.log(error);
  }
}
</script>

<style lang="scss" scoped></style>
