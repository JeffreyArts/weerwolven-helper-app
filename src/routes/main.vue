<template>
    <div class="main">
        <div class="card-list">
            <div class="card" v-for="(card, index) in cards" 
                :key="index"
                :class="[
                    card.type == 'weerwolf' ? '__isWeerwolf' : '',
                    card.type == 'burger' ? '__isBurger' : '',
                    card.type == 'dubieuze' ? '__isDubieuze' : '',
                    card.type == 'eenling' ? '__isEenling' : '',
                ]"
                @click="goToCard(card.slug)"
                >
                <div class="card-image-container">
                    <img :title="card.name" class="card-image" :src="card.image" />
                </div>

                <span class="card-name">{{card.name}}</span>
                
            </div>
        </div>
    </div>
</template>


<script>
import Cards from './../services/cards.js'
export default {
    name: "homePage",
    components: {},
    props: [],
    setup() {
    },
    data() {
        return {
            cards: [],
        }
    },
    watch: {
    },
    mounted() {
        this.cards = Cards.getAll()
    },
    methods: {
        goToCard(cardSlug) {
            this.closing = true
            console.log(cardSlug)
            this.$router.push({name: "card", params:{cardSlug: cardSlug}})
        }
    }
}

</script>

<style scoped lang="scss">
@import "./../assets/scss/variables.scss";

.card {
    width: 50%;
    padding: 0 5px;
    margin-bottom: 20px;
}

.card-list {
    display: flex;
    flex-flow: row wrap;
    padding-left: 10px;
    padding-right: 10px;
}

.card-image-container {
    margin: 0;
    border-radius: 10px;
    border: 2px solid transparent;
    overflow: hidden;
}
.card-image {
    max-width: 100%;
    display: block;
}

.card-name {
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 32px;
    line-height: 21px;
    font-family: 'Danger-night';
    text-transform: lowercase;
    padding: 10px 0;
}

</style>