<script>

export default {
    name: 'header',
}
</script>

<template>
    <nav class="navbar navbar-expand-lg mb-5">
        <div class="container">
            <a href="/" class="navbar-brand">
                <img src="../../public/img/Logo.png" alt="Fantasy Football" width="70">&nbsp;
                The Family Showdown
            </a>
        
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/league">League</a>
                    </li>
                </ul>
            </div>
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

    .nav-link,
    .nav-link:visited {
        color: $dark-blue
    }
</style>
