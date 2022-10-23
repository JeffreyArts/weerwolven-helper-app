<template>
    <div class="card">
        <figure class="card-image-container">
            <img class="card-image" :src="card.image" :alt="card.name">
        </figure>
        <div class="card-content">
            <h2 class="card-name">{{card.name}}</h2>
            <strong class="card-type"
                :class="[
                    card.type == 'weerwolf' ? '__isWeerwolf' : '',
                    card.type == 'burger' ? '__isBurger' : '',
                    card.type == 'dubieuze' ? '__isDubieus' : '',
                    card.type == 'eenling' ? '__isEenling' : '',
                ]"
            >{{card.type}}</strong>
            <p class="card-description">{{card.description}}</p>
        </div>
        
        <hr>
        <div class="kampen">
                
            <h2 class="kampen-title">Overzicht kampen</h2>
            
            <strong class="card-type __isBurger">Burgers</strong>
            <p>Burgers hebben als doel om alle weerwolven te elimineren. Zij winnen wanneer ze dit succesvol hebben gedaan met minimaal 1 burger in leven.</p>
            
            <strong class="card-type __isWeerwolf">Weerwolven</strong>
            <p>Weerwolven hebben als doel alle spelers die geen weerwolf zijn te elimineren. Zij winnen wanneer zij dit succesvol hebben gedaan met tenminste 1 weerwolf in leven.</p>
            
            <strong class="card-type __isDubieus">Dubieuzen</strong>
            <p>Het doel van de dubieuzen is om te winnen met het kamp waartoe zij behoren. Let op! Dit kamp kan tijdens het spel veranderen.</p>
            
            <strong class="card-type __isEenling">Eenlingen</strong>
            <p>Eenlingen hebben hun eigen specifieke opdracht, deze dienen zij te voldoen onafhankelijk van hun kamp.</p>
        </div>
    </div>
</template>


<script>
import Cards from './../services/cards.js'
export default {
    name: "cardDetails",
    components: {},
    props: [],
    setup() {
    },
    data() {
        return {
            card: {},
        }
    },
    watch: {
    },
    mounted() {
        this.card = Cards.getBySlug(this.$route.params.cardSlug)
    },
    methods: {
        goToCard(cardSlug) {
            this.closing = true
            setTimeout(() => {
                this.$router.push({name: "Card", params:{cardSlug: cardSlug}})
            },640)
        }
    }
}

</script>

<style scoped lang="scss">
@import "./../assets/scss/variables.scss";
.card {
    margin: 0 30px;
}

.card-image-container {
    margin: 0;
    border-radius: 10px;
    width: 100%;
    border: 2px solid transparent;
    overflow: hidden;
}
.card-image {
    max-width: 100%;
    display: block;
}
.card-type {
    text-transform:capitalize;
    font-weight: normal;
    padding-left: 16px;
    line-height:24px;
    font-size: 18px;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 24px;
        background-color: currentColor;
        border-radius: 2px;
    }

    &.__isWeerwolf {
        color: red;
    }
    &.__isDubieus {
        color: purple;
    }
    &.__isEenling {
        color: yellow;
    }
}

.card-name {
    font-family: "Danger-night";
    font-size: 40px;
    line-height: 1;
    text-shadow: 1px 1px 1px rgba(0,0,0,.3);
    margin: -48px 0px 18px 10px;
}

hr {
    width: calc(100% - 60px);
    margin: 30px 30px;
    height: 1px;
    display: block;
    background-color: #eee;
    border: 0 none transparent;
}

.kampen-title {
    text-align: center;
}
</style>