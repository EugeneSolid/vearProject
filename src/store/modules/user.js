import router  from "@/router/router";

const state = {
    user: {}
};

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    }
};

const actions = {
    loginUser({ commit }, userData) {
        commit('SET_USER', userData);
        localStorage.setItem('user', JSON.stringify(userData));
    },

    async logoutUser({ commit }) {
        try {
            // await apiMethods.logout();

            commit('SET_USER', null);
            localStorage.removeItem('user');
            localStorage.removeItem('token');

            await router.push({name: 'login'});
        } catch (error) {
            console.error('Logout failed:', error);
        }
    },

    loadUserFromLocalStorage({ commit }) {
        const userData = localStorage.getItem('user');
        if (userData) {
            commit('SET_USER', JSON.parse(userData));
        }
    }
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isUserAuthenticated(state) {
        return !!state.user;
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};