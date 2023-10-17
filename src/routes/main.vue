<template>
    <div class="main">
        <div class="search-container">
            <input class="search-input" type="text" v-model="query" @keyup="updateFilteredCards" />
        </div>
        <div class="card-list">
            <div class="card" v-for="(card, index) in filteredCards" 
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
            query: "",
            cards: [],
            filteredCards: []
        }
    },
    watch: {
    },
    mounted() {
        this.cards = Cards.getAll()
        this.updateFilteredCards()
    },
    methods: {
        goToCard(cardSlug) {
            this.closing = true
            this.$router.push({name: "card", params:{cardSlug: cardSlug}})
        },
        updateFilteredCards() {
            if (!this.query) {
                return this.filteredCards = this.cards
            }
            
            return this.filteredCards = this.cards.filter(card => {
                return  card.name.toLowerCase().includes(this.query.toLowerCase())
            })
        
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
    margin-bottom: 60px;
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
 
.search-container {
    width: 100%;
    position: fixed;
    bottom: 0;
    backdrop-filter: blur(8px);
    // box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    mask-image: linear-gradient(180deg, transparent 0,black 30px, black);
    -webkit-mask-image: linear-gradient(180deg, transparent 0,black 30px, black);
    mask-repeat: no-repeat;
}

.search-input {
    padding: 10px;
    font-size: 24px;
    border: 1px solid #333;
    width: calc(100% - 30px);
    border-radius: 10px;
    outline: none;
    margin: 30px 15px 15px;
}

</style>