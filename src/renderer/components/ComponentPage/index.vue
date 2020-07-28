<template>
  <div id="wrapper">
    <div class="doc">
      <button v-on:click.prevent.stop="loadHome">Home</button>
      <h1>Test Component</h1>
      <p>Lorem ipsum dolar sit amet...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-page",

  methods: {
    loadHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>