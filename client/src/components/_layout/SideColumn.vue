<script>
  export default {
    name: 'SideColumn',
  }
</script>

<template>
  <div class="col-4">
    <div class="shadow card p-4">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../scss/variables.scss";

  .card {
    background: $column-background;
    border-radius: 4px;

    color: white;
  }
</style>