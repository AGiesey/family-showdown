<script>
    import DraftTimer from './DraftTimer.vue';
    export default {
        name: 'HomePage',
        components: {
            DraftTimer
        }
    }
</script>

<template>
    <div class="container">
        <div class="row mt-3 mb-5">
            <h1 class="text-center">Welcome to the Family Showdown!</h1>
        </div>
        <div class="row mt-5">
            <div class="col-6 text-center">
                <img src="../../public/img/draft.png" height="300" alt="nfl draft logo">
                <DraftTimer />
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-7">
                        <figure>
                            <img class="img-fluid rounded" src="../../public/img/benita.jpeg" alt="Benita with the trophey">
                                <figcaption>The reigning 2020 champ!</figcaption>
                        </figure>
                    </div>
                    <!-- <div class="col-6">
                        <p>Imagine a wonderful write up about all of Benita's victories from last year...</p>
                    </div> -->
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        color: #333333;
    }

    .fit-image {
        width: 95%;
        max-width: 95%;
    }
</style>