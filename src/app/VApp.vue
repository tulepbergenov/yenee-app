<script lang="ts" setup>
import VAppLayout from "./layouts/VAppLayout.vue";
</script>

<template>
  <VAppLayout>
    <RouterView v-slot="{ Component, route }">
      <Transition mode="out-in" name="wrapper" appear>
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </VAppLayout>
</template>

<style scoped>
.wrapper-enter-active,
.wrapper-leave-active {
  transition: all 0.2s ease 0s;
}

.wrapper-enter-from,
.wrapper-leave-to {
  opacity: 0;
}
</style>
