<template>
    <div class="game">
        <div v-if="state == 0">
            <h1>Selecteer de kaarten voor dit spel</h1>
            <div class="card-list">
                <template v-for="(card, cardIndex) in cards" :key="cardIndex">
                    <div class="card-image-container" 
                        :class="[
                            card.selected ? '__isSelected' : '',
                        ]"	
                        v-if="card.type !== null"
                        @click="selectCard(cardIndex)"
                        :style="`background-image:url(${card.image})`"
                    >
                        <input class="card-amount" type="text" v-model.number="card.selected" v-if="card.selected > 0">

                        <div class="arrows" v-if="card.selected > 0">
                            <button class="arrow-up" @click="increaseSelected(card, $event)">↑</button>
                            <button class="arrow-down" @click="decreaseSelected(card, $event)">↓</button>
                        </div>

                    </div>
                </template>
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
            state: 0,
            cards: {},
        }
    },
    watch: {
    },
    mounted() {
        this.cards = Cards.getAll()
    },
    methods: {
        selectCard(cardIndex) {
           if (this.cards[cardIndex].selected) {
                this.cards[cardIndex].selected++
           } else {
               this.cards[cardIndex].selected = 1
           }
        },
        decreaseSelected(card, event) {
            event.preventDefault()
            card.selected-=2
        },
        increaseSelected(card, event) {
            event.preventDefault()
            // card.selected++
        }
    }
}

</script>

<style scoped lang="scss">
@import "./../assets/scss/variables.scss";

.game {
    h1 {
        text-align: center;
        display: inline-block;
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
        font-size: 20px;
    }
}

.card-list {
    display: flex;
    flex-flow: row wrap;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-between;
}

.card-image-container {
    margin: 0;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid transparent;
    overflow: hidden;
    border: 2px solid transparent;
    width: calc(20vw - 20px);
    height: calc(20vw - 20px);
    margin-bottom: 5px;
    &.__isSelected {
        border-color: #fff;
    }
}
.card-amount {
    background-color: transparent;
    color: #fff;
    text-align: center;
    width: 100%;
    border: 0 none transparent;
    font-size: 24px;
    text-shadow: 1px 1px 1px rgba(0,0,0,.3);
}
</style>