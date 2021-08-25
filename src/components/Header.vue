<script>

export default {
    name: 'header',
}
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a href="#" class="navbar-brand">
                <img src="../../public/img/Logo.png" alt="Fantasy Football" width="70">&nbsp;
                The Family Showdown!
            </a>
        </div>
    </nav>
</template>

<style scoped>
    .navbar {
        background: rgb(111,164,0);
        background: linear-gradient(0deg, rgba(111,164,0,1) 0%, rgba(22,144,0,1) 13%, rgba(0,139,79,1) 82%);
    }

    .navbar-brand,
    .navbar-brand:hover,
    .navbar-brand:active,
    .navbar-brand:visited {
        color: white
    }
</style>
