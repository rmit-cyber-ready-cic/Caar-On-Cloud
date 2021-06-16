import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Profile from "@/components/Profile.vue";
import Chatbot from "@/components/Chatbot.vue";
import Team from "@/components/Team.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
    {
    path: "/chatbot",
    name: "chatbot",
    component: Chatbot,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;