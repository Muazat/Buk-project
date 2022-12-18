<template>
    <h1 class="mt-4 text-center text-primary text-2xl font-bold">Sign Up !!</h1>
  <div class=" mt-3 flex justify-center text-primary font-semibold">
    <main class=" rounded bg-tertiary  border border-primary md:p-6 ">
      <form class="login-form " action="" method="POST" novalidate>
        <div class="form-control">
          <label for="email">Username</label>
          <input class="" type="username" name="username" id="username" value="" />
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input class="" type="email" name="email" id="email" value="" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            class=""
            type="password"
            name="password"
            id="password"
            value=""
          />
        </div>
        <div class="form-control">
          <label for="confirmPassword">Confirm Password</label>
          <input
            class=""
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value=""
          />
        </div>
          <input
          type="hidden"
          name=""
          value=""
        />
      <Mbutton class="btn" type="submit">SignUp</Mbutton>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "website",
});

</script>

<style scoped>
@import "@/assets/css/form.css";
</style>
