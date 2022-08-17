<template>
  <div class="text-orange">
    Round: {{ trivia.round }} - Question: {{ trivia.question }}
  </div>
</template>

<script>
export default {
  name: "Debug",
  props: ["trivia"],
};
</script>
