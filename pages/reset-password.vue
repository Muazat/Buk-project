<template>
  <div>
    <main>
      <form class="login-form" action="" method="POST">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <input type="hidden" name="" value="" />
        <Mbutton>Submit</Mbutton>
      </form>
      <br />
      <p class="centered">
        Instructions for resetting your password will be sent to the email you
        provide.
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "website",
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/form.css";
</style>
