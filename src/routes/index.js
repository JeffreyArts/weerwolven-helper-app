import { createWebHistory, createRouter } from "vue-router";
import Main from "./main.vue";
import CardDetails from "./card-details.vue";

const routes = [{
		name: "home",
		path: "/",
		component: Main,
	},
	{
        name: "card",
		path: "/card/:cardSlug",
		component: CardDetails,
	}
];


const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;