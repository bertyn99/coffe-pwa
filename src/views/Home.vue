<template>
  <main class="container px-6 mx-auto flex flex-col justify-center py-8">
    <h1
      class="text-5xl md:text-6xl font-bold font-sans text-indigo-900 inline-flex items-center justify-center mb-8"
    >
      <Icon icon="bx:coffee-togo" /><span>Maker</span>
    </h1>
    <div class="flex justify-center mb-10">
      <div class="flex w-2/3 h-12 mt-1">
        <input
          type="text"
          name="coffee"
          id="email"
          v-model="input"
          class="block w-3/4 h-full rounded-l-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-2.5"
          placeholder="Title of your coffe"
        />
        <button
          class="w-1/4 h-12 inline-flex justify-center items-center bg-indigo-300 rounded-r-full"
        >
          <Icon icon="akar-icons:search" class="w-7 h-7 text-indigo-700" />
        </button>
      </div>
    </div>
    <ListCoffee :list="filteredData" v-if="data" />
  </main>
</template>
<script setup>
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";
import ListCoffee from "../components/ListCoffee.vue";
const input = ref("");
const data = ref([
  { title: "Expresso", url: "./expresso.jpg" },
  { title: "Macciato", url: "./macchiato.jpg" },
  { title: "Americano", url: "./americano.jpg" },
  { title: "Cortado", url: "./cortado.webp" },
  { title: "Moccacino", url: "./moccacino.jpg" },
  { title: "Ristreto", url: "./ristreto.jpg" },
]);
const filteredData = computed(() => {
  return data.value.filter((coffee) =>
    coffee.title.toLowerCase().includes(input.value.toLowerCase())
  );
});
</script>
