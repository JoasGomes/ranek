import { api } from '@/services';
import { createStore } from 'vuex'

export default createStore({
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    }
  },
  getters: {
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = payload;
    }
  },
  actions: {
    getUsuario(context, payload) {
      api.get(`/usuario/${payload}`).then(response => {
        context.commit("UPDATE_USUARIO", response.data)
        context.commit("UPDATE_LOGIN", true)
      })
    }
  },
  modules: {
  }
})
