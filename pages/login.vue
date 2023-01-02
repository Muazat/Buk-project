<template>
  <div class="">
    <h1 class="mt-4 text-center text-2xl font-bold text-primary">
      Welcome Back!
    </h1>
    <div class="mt-3 flex justify-center font-semibold text-primary">
      <main class="rounded border border-primary bg-tertiary md:p-6">
        <form
          class="login-form"
          action=""
          method="POST"
          novalidate
          @submit.prevent="loginUser"
        >
          <!-- <h3>Welcome Back!</h3> -->
          <div class="form-control">
            <label for="email">Email</label>
            <MInput type="email" name="email" v-model="email" id="email" />
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
            />
          </div>
          <input type="hidden" name="" value="" />
          <Mbutton class="btn" type="submit">Login</Mbutton>
        </form>
        <div class="reset">
          <NuxtLink class="active muaxxa mb-1" to="/reset-password"
            >Reset Password</NuxtLink
          >
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import MInput from "~~/components/MInput.vue";

const { auth } = useSupabaseClient();

definePageMeta({
  layout: "website",
});
const email = ref("");
const password = ref("");
async function loginUser() {
  try {
    await auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    return navigateTo("/dashboard");
  } catch (error) {
    console.log({ error });
  }
}
</script>

<style scoped>
@import "@/assets/css/form.css";
</style>
