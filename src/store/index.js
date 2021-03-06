import Vue from 'vue'
import Vuex from 'vuex'
import {auth, db} from '@/firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: ''
  },
  mutations: {
    nuevoUsuario(state, payload) {
      if(payload === null){
        state.usuario = ''
      }else{
        state.usuario = payload
      }
    }
  },
  actions: {
    async setUsuario({ commit }, user) {
      try {
        const doc = await db.collection('usuarios').doc(user.uid).get()
        if(doc.exists){
          var user = doc.data();
          commit('nuevoUsuario', user.usuario)
        }else{
          const usuario = {
            nombre: user.displayName,
            email: user.email,
            uid: user.uid,
            foto: user.photoURL
          };
          await db.collection('usuarios').doc(usuario.uid).set({
            usuario
          });
          commit('nuevoUsuario', usuario); 
        }
      } catch (error) {
        console.log(error)
      }
    },
    cerrarSesion({commit}){
      auth.signOut()
      commit('nuevoUsuario', null)
      router.push({name: 'Ingreso'})
    }
  },
  modules: {
  }
})
