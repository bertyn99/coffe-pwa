<template>
  <section class="w-full">
    <div
      class="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4"
      v-if="props.list !== null"
    >
      <CardCoffee
        v-for="coffee in props.list"
        :key="coffee.title"
        :coffee="coffee"
      />
    </div>
  </section>
</template>

<script setup>
import CardCoffee from "./CardCoffee.vue";

const props = defineProps(["list"]);
console.log(props.list);
</script>
