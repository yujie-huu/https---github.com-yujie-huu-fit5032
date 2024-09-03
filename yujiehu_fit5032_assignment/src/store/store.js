import { createStore } from 'vuex';
export default createStore({
    state: { 
        isAuthenticated: false,
        user: null,
        usertype: null,
        providerRatings: {}, // Object to store ratings by provider ID
    },
    mutations: {
        setAuthentication(state, status) {
            state.isAuthenticated = status;
        },
        setuser(state, user) {
            state.user = user;
        },
        setusertype(state, usertype) {
            state.usertype = usertype;
        },
    },
    actions: {
        login({ commit }, user, usertype) {
            commit('setAuthentication', true);
            commit('setUser', user);
            commit('setusertype', usertype);
        },
        logout({ commit }) {
            commit('setAuthentication', false);
            commit('setuser', null);
            commit('setusertype', null);
        },
    },
});
