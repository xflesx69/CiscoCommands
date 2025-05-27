import { createRouter, createWebHistory } from 'vue-router'
import CiscoCommands from '../views/CiscoCommands.vue'
import PythonView from '../views/PythonView.vue'
import HtmlView from '../views/HtmlView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cisco-commands',
      component: CiscoCommands,
    },
    {
      path: '/python',
      name: 'python-view',
      component: PythonView,
    },
    {
      path: '/html',
      name: 'html-view',
      component: HtmlView,
    },
  ],
})

export default router
