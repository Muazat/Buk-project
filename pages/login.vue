<template>
  <div>
    <main>
      <form class="login-form" action="" method="POST" novalidate>
        <!-- <h3>Welcome Back!</h3> -->
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
        <input type="hidden" name="" value="" />
        <button class="btn" type="submit">Login</button>
      </form>
      <div class="reset">
        <a href="reset_password.html">Reset Password</a>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/assets/css/form.css";
</style>
