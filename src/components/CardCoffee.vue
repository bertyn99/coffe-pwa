<template>
  <RouterLink :to="`/coffee/${coffee.title}`">
    <article class="w-full h-64 rounded-md overflow-hidden relative">
      <img
        :src="props.coffee.url"
        :alt="props.coffee.title"
        class="absolute w-full h-full object-fill"
      />
    </article>
  </RouterLink>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps(["coffee"]);
</script>
