import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)

let baseUrl = location.host.includes('localhost') ? '//localhost:5000/' : '/'

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    keeps: [],
    userKeeps: [],
    vaults: [],
    vaultKeeps: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    resetState(state) {
      //clear the entire state object of user data
      state.user = {}
    },
    setKeeps(state, keep) {
      state.keeps = keep
    },
    setUserKeeps(state, userKeep) {
      state.userKeeps = userKeep
    },
    setVaults(state, vault) {
      state.vaults = vault
    },
    setVaultKeeps(state, vaultKeep) {
      state.vaultKeeps = vaultKeep
    },
    addVaultKeep(state, vaultKeep) {
      state.vaultKeeps.push(vaultKeep)
    },
    addKeep(state, keep) {
      state.keeps.push(keep)
    },
    addVault(state, vault) {
      state.vaults.push(vault)
    }
  },
  actions: {
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //KEEPS
    getKeeps({ commit, dispatch }) {
      api.get('keeps')
        .then(res => {
          commit('setKeeps', res.data)
        })
    },
    getUserKeeps({ commit, dispatch, }) {
      api.get('keeps/' + 'user')
        .then(res => {
          commit('setUserKeeps', res.data)
        })
    },
    async createKeep({ commit, dispatch }, data) {
      try {
        let res = await api.post('keeps', data)
        dispatch('getKeeps')
      } catch (error) { console.error(error) }
    },
    async addKeep({ commit, dispatch }, payload) {
      try {
        let res = await api.post("vaultkeeps", payload)
        dispatch('getKeeps', payload.vaultId)
        dispatch('getKeeps')
        console.log(res)
      } catch (error) { console.error(error) }
    },
    deleteKeep({ commit, dispatch }, keepId) {
      api.delete("keeps/" + keepId)
        .then(res => {
          dispatch('getKeeps')
        })
    },

    //VAULTS
    getVaults({ commit, dispatch }) {
      api.get('vaults')
        .then(res => {
          commit('setVaults', res.data)
        })
    },
    async createVault({ commit, dispatch }, data) {
      try {
        let res = await api.post('vaults', data)
        dispatch('getVaults')
      } catch (error) { console.error(error) }
    },
    deleteVault({ commit, dispatch }, vaultId) {
      api.delete("vaults/" + vaultId)
        .then(res => {
          dispatch('getVaults')
        })
    },
    getVaultKeeps({ commit, dispatch, }, vaultId) {
      // debugger
      api.get('/vaultkeeps/' + vaultId)
        .then(res => {
          commit('setVaultKeeps', res.data)
        })
    },
    removeKeep({ commit, dispatch }, vaultKeep) {
      api.put('/vaultkeeps', vaultKeep)
        .then(res => {
          dispatch('getVaultKeeps', vaultKeep.vaultId)
        })
    },

  }
})
