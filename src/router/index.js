import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AtendimentosView from '@/views/AtendimentosView.vue'
import LivroCaixaView from '@/views/LivroCaixaView.vue'
import MassagistasView from '@/views/MassagistasView.vue'
import RelatoriosView from '@/views/RelatoriosView.vue'
import CadastroView from '@/views/CadastroView.vue'
import DashboardView from '@/views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: HomeView,
    meta: {
      title: 'Dashboard',
    },
  },
  {
    path: '/atendimentos',
    name: 'atendimentos',
    component: AtendimentosView,
    meta: {
      title: 'Atendimentos',
    },
  },
  {
    path: '/livro-caixa',
    name: 'livro-caixa',
    component: LivroCaixaView,
    meta: {
      title: 'Livro Caixa',
    },
  },
  {
    path: '/massagistas',
    name: 'massagistas',
    component: MassagistasView,
    meta: {
      title: 'Massagistas',
    },
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    component: RelatoriosView,
    meta: {
      title: 'Relatórios',
    },
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: RelatoriosView,
    meta: {
      title: 'Relatórios',
    },
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroView,
    meta: {
      title: 'Cadastro',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      title: 'Dashboard',
    },
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  },
})

export default router
