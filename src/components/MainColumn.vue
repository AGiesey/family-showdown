<script>
  export default {
    name: 'MainColumn',
  }
</script>

<template>
  <div class="col-8">
    <div class="shadow card p-4">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../scss/variables.scss";

  .card {
    background: $column-background;
    border-radius: 4px;
  }
</style>