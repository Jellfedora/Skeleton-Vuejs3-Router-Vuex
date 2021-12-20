

export default {
    state: {
        test: 'Coucou tu veut voir ma ****'
    },
    getters: {
        getTest: (state) => () => {
            return state.test
        }
    },
    mutations: {
        setTest (state, statut) {
            state.formOpen = statut
        }
    },
    actions: {
        SET_TEST (context, statut) {
            context.commit('setTest', statut)
        }
    }
}