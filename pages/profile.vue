<template>
  <PageTitle>Profile</PageTitle>
  <div class="md:ml-9">
    <div class="mb-2 mt-4 font-semibold">Name</div>
    <TextInput v-model="name"></TextInput>
  </div>
  <div class="md:ml-9">
    <div class="mb-2 mt-4 font-semibold">Email</div>
    <TextInput v-model="email"></TextInput>
  </div>
  <div class="md:ml-9">
    <div class="mb-2 mt-4 font-semibold">Change Password</div>
    <TextInput
      class="mb-2"
      placeholder="Old password"
      v-model="oldPass"
    ></TextInput>
    <TextInput
      class="mb-2"
      placeholder="New password"
      v-model="newPass"
    ></TextInput>
    <TextInput
      class="mb-2"
      placeholder="Confirm password"
      v-model="confirmPass"
    ></TextInput>
    <!-- <TextInput placeholder= {{text}} v-model="text"></TextInput> -->
  </div>
  <div class="w-4/5 md:w-2/3">
    <AddButton
      class="float-right mb-10 bg-green-500 p-2 font-semibold text-white"
    >
      EDIT PROFILE
    </AddButton>
  </div>
</template>

<script setup lang="ts">
const name = ref("");
const email = ref("");
const oldPass = ref("");
const newPass = ref("");
const confirmPass = ref("");
</script>

<style lang="scss" scoped></style>
