import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      user: {
        info: {
          name: 'Leonel',
          role: 'admin',
        },
      },
    }),
    mutations: {
      changeRole(state, newRole) {
        state.user.info.role = newRole;
      },
    }
  })
}

export default createStore