import { createWebHistory, createRouter } from "vue-router";
import Main from "./main.vue";
import CardDetails from "./card-details.vue";
import NewGame from "./new-game.vue";

const routes = [{
		name: "home",
		path: "/",
		component: Main,
	},
	{
        name: "card",
		path: "/card/:cardSlug",
		component: CardDetails,
	},
	{
        name: "nieuw-spel",
		path: "/nieuw-spel",
		component: NewGame,
	}
];


const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;