<script lang="ts" setup>
import VHeader from "@/widgets/VHeader.vue";
import VSkipLink from "@/features/VSkipLink.vue";
</script>

<template>
  <VSkipLink />
  <VHeader />
  <main class="flex-auto py-7" id="main">
    <slot />
  </main>
</template>
