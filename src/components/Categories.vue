<template>
  <div id="categories" class="my-6">
    <h2 class="my-6 text-3xl">Select Your Opponent's Category</h2>
    <div class="flex gap-6 justify-between mt-8">
      <div class="" v-for="opt in options" :key="opt.id">
        <button
          class="p-2 shadow-md rounded bg-purple text-dark hover:bg-dark hover:text-purple"
          v-on:click.prevent="selectCategory(opt.id)"
        >
          {{ opt.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../assets/data";
export default {
  name: "Categories",
  props: ["team", "trivia"],
  computed: {
    options: function () {
      const randomized = [];
      const categories = Object.create(data.categories);
      for (let i = 0; i < 4; i++) {
        const rand = Math.floor(Math.random() * categories.length);
        randomized.push(categories[rand]);
        categories.splice(rand, 1);
      }
      return randomized;
    },
  },
  methods: {
    selectCategory: async function (categoryId) {
      try {
        const response = await (await fetch(data.url + categoryId)).json();
        const questions = response.results;
        this.$emit("update-questions", questions);
      } catch (e) {
        alert("Something went wrong, check the console!");
        console.error(e);
      }
    },
  },
};
</script>
