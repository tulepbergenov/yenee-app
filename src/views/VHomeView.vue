<script lang="ts" setup>
import { useAppTitle } from "@/shared/hooks";
import VAddTickerForm from "@/widgets/VAddTickerForm.vue";

useAppTitle();
</script>

<template>
  <div>
    <section class="sr-only">
      <div class="container">
        <header>
          <h1>Yenne: Monitoring Cryptocurrency Changes</h1>
        </header>
      </div>
    </section>
    <VAddTickerForm />
  </div>
</template>
