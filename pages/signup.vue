<template>
  <div>
    <main>
      <form class="login-form" action="" method="POST" novalidate>
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
          name="_csrf"
          value="waGIQjCV-8CxJhucOQZVtGBe66yaTlqWx3XA"
        />
        <button class="btn" type="submit">Sign Up</button>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/assets/css/form.css";
</style>
