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
        addRating(state, providerId, rating) {
            const provider = state.providers.find(p => p.id === providerId);
            if (provider) {
              provider.ratings.push(rating);
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
    },
    getters: {
        averageRating: (state) => (providerId) => {
            const ratings = state.providerRatings[providerId] || [];
            if (ratings.length === 0) return 0;
            const total = ratings.reduce((sum, rating) => sum + rating, 0);
            return (total / ratings.length).toFixed(1); // Return average rating with one decimal place
        },
    }
});
