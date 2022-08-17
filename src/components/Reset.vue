<template>
  <div class="absolute top-1 right-1">
    <button v-on:click="reset" class="bg-transparent text-pink">
      <span class="material-symbols-outlined">cached</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Reset",
  methods: {
    reset: function () {
      this.$emit("reset", true);
    },
  },
};
</script>
