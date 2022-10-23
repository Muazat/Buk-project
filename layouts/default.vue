<template>
  <div>
    <div class="backdrop" ref="backDrop" @click="backdropClickHandler"></div>
    <header class="main-header">
      <button id="side-menu-toggle" @click="menuToggleClickHandler">
        Menu
      </button>
      <nav class="main-header__nav">
        <ul class="main-header__item-list">
          <li class="main-header__item">
            <NuxtLink class="active muaxxa" to="/">Muaxxa</NuxtLink>
          </li>
        </ul>
        <ul class="main-header__item-list">
          <li class="main-header__item">
            <NuxtLink class="" to="/login">Log In</NuxtLink>
          </li>
          <li class="main-header__item">
            <NuxtLink class="" to="/signup">Sign Up</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <nav ref="sideDrawer" class="mobile-nav">
      <ul class="mobile-nav__item-list">
        <li class="mobile-nav__item">
          <NuxtLink class="active muaxxa" to="/">Muaxxa</NuxtLink>
        </li>

        <li class="mobile-nav__item">
          <NuxtLink class="" to="/login">Log In</NuxtLink>
        </li>
        <li class="mobile-nav__item">
          <NuxtLink class="" to="/signup">Sign Up</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<script setup lang="ts">
const backDrop = ref<HTMLDivElement>(null);
const sideDrawer = ref<HTMLDivElement>(null);

function backdropClickHandler() {
  backDrop.value.style.display = "none";
  sideDrawer.value.classList.remove("open");
}

function menuToggleClickHandler() {
  backDrop.value.style.display = "block";
  sideDrawer.value.classList.add("open");
}
</script>

<style scoped></style>
