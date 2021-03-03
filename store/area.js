export const state = () => ({
    result: [],
    keyword: '',
    orderBy: true,
})

export const getters = {
    getData: (state) => {
        return state.result;
    },
    getKeyword: (state) => {
        return state.keyword;
    },
    getOrderBy: (state) => {
        return state.orderBy
    },
}

export const mutations = {
    setResult: (state, value) => {
        state.result = value;
    },
    setKeyword: (state, value) => {
        state.keyword = value;
    },
    setOrderBy: (state, value) => {
        state.orderBy = value;
    },
}

export const actions = {
    fetchAreas({ commit }, payload) {
        return this.$axios.$get('/areas', { params: { keyword: payload.keyword, orderBy: payload.orderBy } })
            .then(response => {
                commit('setResult', response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    addArea({ commit }, payload) {
        return this.$axios.$post('/areas', { name: payload.name, sequence: payload.sequence })
            .then(response => {
                commit('setResult', response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    setKeyword({ commit }, payload) {
        commit('setKeyword', payload);
    },
    setOrderBy({ commit }, payload) {
        commit('setOrderBy', payload);
    }
}