import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

const state = {
    article: [],
    page_tolal: 0,
    total: 0

}
const getters = {
    getInit(state) {
        return state.article
    },
    getPageTotal(state) {
        return state.page_tolal

    }
}
const mutations = {
    init_article(state, data) {
        let limit = data.result.limit
        let total = data.result.total
        state.article = data.result.records
        state.total = data.result.limit
        state.page_tolal = Math.ceil(total / limit)
        console.log(data)
    }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,

})