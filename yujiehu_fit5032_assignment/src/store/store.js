import {createstore } from "vuex';
export default createStore({
    state: { 
        isAuthenticated: false,
        user: null,
    },
    mutations: {
        setAuthentication(state, status) {
            state.isAuthenticated = status;
        },
        setuser(state, user) {
            state.user = user;
        },
    },
    actions: {
        login({ commit }, user) {
            commit('setAuthentication', true);
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('setAuthentication', false);
            commit('setuser', null);
        },
    },
});
