<template>
  <div class="">
  <h1 class="mt-4 text-center text-primary text-2xl font-bold">Welcome Back!</h1>
  <div class=" mt-3 flex justify-center text-primary font-semibold">
    <main class=" rounded bg-tertiary  border border-primary md:p-6 ">
      <form class="login-form" action="" method="POST" novalidate>
        <!-- <h3>Welcome Back!</h3> -->
        <div class="form-control">
          <label for="email">Email</label>
          <m-input type="email" name="email" id="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            class=""
            type="password"
            name="password"
            id="password"
            v-model="password"
            @mouseout="printPassword"
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
definePageMeta({
  layout: "website",
});

const password = ref("");
function printPassword() {
  console.log(password.value);
}
</script>

<style scoped>
@import "@/assets/css/form.css";
</style>
