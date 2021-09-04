<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style lang="scss">
  @import "./scss/variables.scss";
  @import "./scss/global.scss";

  body {
    height: 1vh;
    background: $light-blue !important;
  }
</style>
