<template>
  <div class="absolute inset-x-1/3 mt-16 bg-white w-fit p-8 rounded">
    <main>
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
        <NuxtLink class="active muaxxa" to="/reset-password"
          >Reset Password</NuxtLink
        >
      </div>
    </main>
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

<style lang="scss" scoped>

@import "@/assets/css/form.css";
</style>
