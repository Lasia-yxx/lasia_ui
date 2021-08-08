<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Blog from './engine/index';

export default defineComponent({
  name: 'App',
  async mounted() {
    console.log(123123);
    console.log(
      await Blog.getTestData(),
    );
  },
});
</script>

<style>
* {
  margin: 0;
}

#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
