
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const strict = false;

/**
 * Mutation declaration
 */
const SET_TOURNAMENT_LIST = 'SET_TOURNAMENT_LIST';

/**
 * Store attributes
 */
export const state = () => ({
    tournamentList: [],
});

/**
 * Actions (server calls & mutations)
 */
export const actions = {

    async FETCH_TOURNAMENT_LIST({ state, commit }) {
        try {
            const response = await this.$axios.$get('/api/tournament');
            console.log(response);
            
            commit(SET_TOURNAMENT_LIST, response);
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    },

    async ADD_TOURNAMENT_LIST({ dispatch, commit }, body) {
        try {
            console.log('waaaaaaaiIIII');
            
            await this.$axios.$post('/api/tournament', body);
            dispatch('FETCH_TOURNAMENT_LIST');
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    },
    async DELETE_TOURNAMENT({ dispatch, commit }, params) {
        try {
            await this.$axios.$delete(`/api/tournament/${params}`);
            dispatch('FETCH_TOURNAMENT_LIST');
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    },
    async UPDATE_TOURNAMENT({ dispatch, commit }, body) {
        try {
            const tournamentID = body._id;
            delete body._id;
            await this.$axios.$patch(`/api/tournament/${tournamentID}`, body);
            dispatch('FETCH_TOURNAMENT_LIST');
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    },

};

/**
 * Modify State
 */
export const mutations = {
    [SET_TOURNAMENT_LIST](state, payload) {
        state.tournamentList = payload;
    },
};

/**
 * Get state value from other .vue
 */
export const getters = {
    tournament_list: (state) => state.tournamentList,
};
