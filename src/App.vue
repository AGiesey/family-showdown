<template>
  <div id="app" class="container">
    <div class="row text-center mt-1">
      <div class="text-center">

        <img src="./Logo.png" alt="Fantasy Football" class="logo-image">
      </div>
    </div>
    <div class="row mt-1 mb-5">
      <h1 class="text-center">Welcome to the Family Showdown!</h1>
    </div>
    <div class="row mt-5 text-center">
      <DraftTimer />

    </div>
  </div>
</template>

<script>
import DraftTimer from './components/DraftTimer.vue'

export default {
  name: 'App',
  components: {
    DraftTimer
  }
}
</script>

<style>

  .logo-image {
    width: 400px;
  }
</style>
