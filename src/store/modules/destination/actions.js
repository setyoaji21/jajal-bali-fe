import axios from 'axios'
import { get } from 'lodash'

const token = ''

export default {
  loadDestinations: async ({ commit }, payload) => {
    await axios({
      url: process.env.VUE_APP_API_URL + '/api/destinations',
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(response => {
        commit('SET_DESTINATIONS', get(response, 'data', []))
        return response
      })
      .catch(error => {
        return Promise.reject(error)
      })
  }
}