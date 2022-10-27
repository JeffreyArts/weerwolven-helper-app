import { defineStore } from 'pinia'
import Cards from '../services/cards.js'

export const useGameStore = defineStore('game', {
  state: () => {
    return { 
      players: [],
      activeCards: [], 
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addPlayer(cardIndex, playerName) {
      this.players.push({
        cardIndex: cardIndex,
        name: playerName,
      })
    },
    addCard(cardIndex) {
      this.activeCards.push(cardIndex)
      // order by order-first-night property
      this.activeCards.sort((a, b) => Cards[a].orderFirstNight - Cards[b].orderFirstNight)
    },

  },
})