<script>

export default {
    name: 'header',
}
</script>

<template>
    <nav class="navbar navbar-expand-lg mb-5">
        <div class="container">
            <a href="#" class="navbar-brand">
                <img src="../../public/img/Logo.png" alt="Fantasy Football" width="70">&nbsp;
                The Family Showdown
            </a>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    @import "../scss/variables.scss";
    @import "../scss/mixins.scss";

    .navbar {
        background: $primary;
        @include shadow;
    }

    .navbar-brand,
    .navbar-brand:hover,
    .navbar-brand:active,
    .navbar-brand:visited {
        color: $dark-blue;
        font-size: 1.4em;
        font-weight: bold;
    }
</style>
