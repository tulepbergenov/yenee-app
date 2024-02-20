<script lang="ts" setup>
import VThemeToggler from "@/features/VThemeToggler.vue";
</script>

<template>
  <main class="flex-auto" id="main">
    <section>
      <div class="container">
        <div>
          <header class="flex items-center justify-between gap-3 py-5">
            <h1>Yenee</h1>
            <VThemeToggler />
          </header>
        </div>
      </div>
    </section>
  </main>
</template>
