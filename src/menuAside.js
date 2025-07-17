import {
  mdiViewDashboard,
  mdiCalendarCheck,
  mdiCashMultiple,
  mdiFileChart,
  mdiAccountGroup,
  mdiLogout,
} from '@mdi/js'

export default [
  {
    to: '/dashboard',
    icon: mdiViewDashboard,
    label: 'Dashboard',
  },
  {
    to: '/atendimentos',
    icon: mdiCalendarCheck,
    label: 'Atendimentos',
  },
  {
    to: '/financeiro',
    icon: mdiCashMultiple,
    label: 'Financeiro',
  },
  {
    to: '/relatorios',
    icon: mdiFileChart,
    label: 'Relatórios',
  },
  {
    to: '/usuarios',
    icon: mdiAccountGroup,
    label: 'Usuários',
  },
  {
    to: '/cadastro',
    label: 'Cadastro',
    icon: mdiAccountGroup,
  },
 {
    to: '/dashboard',
    label: 'dashboard',
    icon: mdiAccountGroup,
  },
]
