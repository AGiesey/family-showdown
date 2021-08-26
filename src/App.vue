<template>
  <div id="app">
    <Header />
    <HomePage />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    Header,
    HomePage
  }
}
</script>

<style lang="scss">
  @import "./scss/variables.scss";

  body {
    height: 1vh;
    background: $light-blue !important;
  }
</style>
