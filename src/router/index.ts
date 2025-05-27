import { createRouter, createWebHistory } from 'vue-router'
import CiscoCommands from '../views/CiscoCommands.vue'
import PythonView from '../views/PythonView.vue'

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
  ],
})

export default router
