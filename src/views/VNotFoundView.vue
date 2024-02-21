<script lang="ts" setup>
import { useAppTitle } from "@/shared/hooks";
import { useRouter } from "vue-router";

useAppTitle("Not Found");
const router = useRouter();

const onGoBack = () => {
  router.back();
};
</script>

<template>
  <section>
    <div class="container">
      <header class="px-5">
        <h1 class="text-2xl font-bold">Not Found</h1>
        <button
          @click="onGoBack"
          class="mt-3 inline-block underline transition-colors duration-300 ease-in-out active:text-app-clr-primary md:hover:text-app-clr-primary"
          type="button"
        >
          Go Back
        </button>
      </header>
    </div>
  </section>
</template>
