import { createStore } from 'vuex';
export default createStore({
    state: { 
        isAuthenticated: false,
        user: null,
        usertype: null,
        providers: [
            {
              id: 'provider1',
              name: 'Provider One',
              description: 'Provider One is known for excellent elderly care and friendly staff.',
              ratings: [],
            },
            {
              id: 'provider2',
              name: 'Provider Two',
              description: 'Provider Two offers state-of-the-art medical equipment and specialized care.',
              ratings: [],
            },
            {
              id: 'provider3',
              name: 'Provider Three',
              description: 'Provider Three is renowned for their comprehensive mental health services.',
              ratings: [],
            },
            {
              id: 'provider4',
              name: 'Provider Four',
              description: 'Provider Four provides affordable and accessible healthcare to all.',
              ratings: [],
            },
        ],
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
        addRating(state, {providerId, rating}) {
            const provider = state.providers.find(p => p.id === providerId);
            if (provider) { //if the provider exist
              provider.ratings.push(rating); // add the new rating to the rating list
            }
        }
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
        updateRating({ commit }, { providerId, rating }) {
            commit('addRating', { providerId, rating });
            console.log('Rating updated:', rating);
        }
    }
});
