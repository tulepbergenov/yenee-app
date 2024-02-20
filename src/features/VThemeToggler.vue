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
    class="flex h-6 w-6 items-center justify-center"
    type="button"
  >
    <SunIcon v-if="isDark" />
    <MoonIcon v-if="!isDark" />
  </button>
</template>
