<script>
    import MainColumn from '../_layout/MainColumn.vue';
    import SideColumn from '../_layout/SideColumn.vue';
    import FullColumn from '../_layout/FullColumn.vue';
    import PageLayout from '../_layout/PageLayout.vue';
    import Row from '../_layout/Row.vue';

    export default {
        name: 'HomePage',
        data: function() {
            return {
                blurb: `It's once again time to make our best guesses, let the autodrafter 
                    make it's best guesses, or to see how early we can draft Gronk in 
                    the effort to set up a winning season which is guaranteed to bring home our illustrious, 
                    soon-to-be covited, and not-so-unique trophey!`,
                subtitle: `
                    I made this website because I misunderstood the "custom URL" field on the Yahoo! fantasy league settings. 
                    I was honestly kind of burnt out writing unit tests for the front end code at work. It's ok because this
                    is a Vue app (Google it) so I am actually practicing stuff I need to know there anyway.
                `
            }
        },
        components: {
            PageLayout,
            MainColumn,
            SideColumn,
            FullColumn,
            Row
        }
    }
</script>

<template>
    <PageLayout >
        <Row>
            <FullColumn>
                <h1 class="page-title">Welcome to the Family Showdown!</h1>
                <p>{{subtitle}}</p>
            </FullColumn>
        </Row>
        
        <Row>
            <MainColumn>
                <div>
                    <h2>
                        <span class="article-title-image-container">
                            <img src="../../../public/img/money.png" class="img-fluid" alt="pile of cash">
                        </span>
                        Dues
                    </h2>
                    <p>
                        League dues will be <span>$20</span> again this year. Pay to Melissia or Jennifer. I'm lagging a bit behind (as usual) so I 
                        haven't set the playoff format but I'm thinking that 4 teams make it with the top two or three getting payout. 
                    </p>
                </div>
                <div class="mb-5">
                    <hr />
                </div>
                <div>
                    <h2>
                        <span class="article-title-image-container">
                            <img src="../../../public/img/Autodraft.png" class="img-fluid" alt="pile of cash">
                        </span>
                        Congrats to the Draft Winners!
                    </h2>
                    <p>
                        Congratulations to the autodraft; I mean, Chase and Renita; for earning scores of A- on their draft choices this year. Haha, just messing around.
                        Seriously tho, I hope everyone is aware that they are playing this year :) 
                    </p>
                    
                </div>
            </MainColumn>
            
            <SideColumn>
                <h2>
                    <span class="article-title-image-container">
                        <img src="../../../public/img/crown.png" class="img-fluid" alt="golden crown">
                    </span>
                    2020 Champ:
                </h2>
                <figure class="figure">
                    <img class="figure-img img-fluid rounded" src="../../../public/img/benita.jpeg" alt="Benita with the trophey">
                    <figcaption class="figure-caption text-end">Notice the wine glasses...</figcaption>
                </figure>
            </SideColumn>
            
        </Row>
        
    </PageLayout>
</template>

<style lang="scss" scoped>
    @import "../../scss/variables.scss";

    .page-title {
        color: $dark-blue;
    }

    h2 {
        color: $dark-blue;
    }

    
</style>