import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Produto from '../views/Produto.vue'
import Login from '../views/Login.vue'
import Usuario from '@/views/usuario/Usuario.vue'
import UsuarioProdutos from '@/views/usuario/UsuarioProdutos.vue'
import UsuarioVendas from '@/views/usuario/UsuarioVendas.vue'
import UsuarioCompras from '@/views/usuario/UsuarioComprar.vue'
import UsuarioEditar from '@/views/usuario/UsuarioEditar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: Produto,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/usuario',
    component: Usuario,
    children: [
      {
        path: "usuario",
        name: "usuario",
        component: UsuarioProdutos
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
})

export default router
