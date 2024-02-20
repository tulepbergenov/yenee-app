<script lang="ts" setup>
import VThemeToggler from "@/features/VThemeToggler.vue";
</script>

<template>
  <header>
    <div class="container">
      <div
        class="flex items-center justify-between border-b border-b-app-clr-dark px-5 py-5 dark:border-b-app-clr-light"
      >
        <div class="flex items-center gap-5">
          <RouterLink
            class="text-xl font-bold transition-colors duration-300 ease-in-out active:text-app-clr-primary md:hover:text-app-clr-primary"
            to="/"
            >ᓚᘏᗢ
          </RouterLink>
          <RouterLink to="/about"> Not Found </RouterLink>
        </div>
        <VThemeToggler />
      </div>
    </div>
  </header>
</template>
