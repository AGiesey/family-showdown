<script>
    import DraftTimer from './DraftTimer.vue';
    import MainColumn from './MainColumn.vue';
    import SideColumn from './SideColumn.vue';
    import FullColumn from './FullColumn.vue';
    import Row from './Row.vue';

    export default {
        name: 'HomePage',
        data: function() {
            return {
                blurb: `It's once again time to make our best guesses, let the autodrafter 
                    make it's best guesses, or to see how early we can draft Gronk in 
                    the effort to set up a winning season which is guaranteed to bring home our illustrious, 
                    soon-to-be covited, and not-so-unique trophey!`
            }
        },
        components: {
            DraftTimer,
            MainColumn,
            SideColumn,
            FullColumn,
            Row
        }
    }
</script>

<template>
    <div class="container px-4">
        <Row>
            <FullColumn>
                <h1 class="page-title">Welcome to the Family Showdown!</h1>
            </FullColumn>
        </Row>
        
        <Row>
            <MainColumn>
                <h2>
                    <span class="logo-container">
                        <img src="../../public/img/draft.png" class="img-fluid" alt="nfl draft logo">
                    </span>
                    Get ready for draft day!! 
                </h2>
                <p>{{blurb}}</p>
                <DraftTimer />
                
                
            </MainColumn>
            <SideColumn>
                <h2>2020 Champ:</h2>
                <figure class="figure">
                    <img class="figure-img img-fluid rounded" src="../../public/img/benita.jpeg" alt="Benita with the trophey">
                    <figcaption class="figure-caption text-end">Notice the wine glasses in the background</figcaption>
                </figure>
            </SideColumn>
        </Row>
    </div>
</template>

<style lang="scss" scoped>
    @import "../scss/variables.scss";

    .page-title {
        color: $dark-blue;
    }

    h2 {
        color: $dark-blue;
    }

    .logo-container {
        display: inline-block;
        width: 100px;
    }
</style>