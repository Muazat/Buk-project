<template>
  <h1 class="mt-4 text-center text-2xl font-bold text-primary">Sign Up !!</h1>
  <div class="mt-3 flex justify-center font-semibold text-primary">
    <main class="rounded border border-primary bg-tertiary md:p-6">
      <form
        class="login-form"
        action=""
        method="POST"
        novalidate
        @submit.prevent="signUpUser"
      >
        <div class="form-control">
          <label for="email">Username</label>
          <input
            class=""
            type="username"
            name="username"
            id="username"
            v-model="userDetails.username"
          />
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input
            class=""
            type="email"
            name="email"
            id="email"
            v-model="userDetails.email"
          />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            class=""
            type="password"
            name="password"
            id="password"
            v-model="userDetails.password"
          />
        </div>
        <div class="form-control">
          <label for="confirmPassword">Confirm Password</label>
          <input
            class=""
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            v-model="userDetails.confirmPassword"
          />
        </div>
        <Mbutton class="btn" type="submit"> SignUp </Mbutton>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import Mbutton from "~~/components/Mbutton.vue";

definePageMeta({
  layout: "website",
});
const userDetails = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const { auth } = useSupabaseClient();
const signUpUser = () => {
  auth.signUp({
    email: userDetails.email,
    password: userDetails.password,
    options: {
      data: {
        username: userDetails.username,
      },
    },
  });
};
</script>

<style scoped>
@import "@/assets/css/form.css";
</style>
