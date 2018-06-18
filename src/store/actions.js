import axios from 'axios'
import router from '@/router'
const baseURL = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=15'
export default {
    init({ commit, state }) {
        axios.get(`${baseURL}`, {})
            .then(response => {
                // console.log(response)
                let data = response.data
                commit('init_article', data)
            })


    }
}