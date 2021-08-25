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

<style>

  body {
    height: 1vh;
    background: #ECECEC !important;
    
  }

  
</style>
