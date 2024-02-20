<script lang="ts" setup>
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "html",
  attribute: "data-theme",
  valueDark: "dark",
  valueLight: "light",
});

const onToggleDark = useToggle(isDark);
</script>

<template>
  <button
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    :title="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="onToggleDark()"
    class="relative flex h-6 w-6 items-center justify-center transition-colors duration-300 ease-in-out active:text-app-clr-primary md:hover:text-app-clr-primary"
    type="button"
  >
    <Transition name="sun">
      <SunIcon
        class="absolute left-2/4 top-2/4 h-full w-full -translate-x-2/4 -translate-y-2/4"
        v-if="!isDark"
      />
    </Transition>
    <Transition name="moon">
      <MoonIcon
        class="absolute left-2/4 top-2/4 h-full w-full -translate-x-2/4 -translate-y-2/4"
        v-if="isDark"
      />
    </Transition>
  </button>
</template>

<style scoped>
.sun-enter-active,
.sun-leave-active {
  @apply transition-[opacity,transform] duration-300 ease-in-out;
}

.sun-enter-from,
.sun-leave-to {
  @apply translate-x-2 opacity-0;
}

.moon-enter-active,
.moon-leave-active {
  @apply transition-[opacity,transform] duration-300 ease-in-out;
}

.moon-enter-from,
.moon-leave-to {
  @apply -translate-y-6 opacity-0;
}
</style>
