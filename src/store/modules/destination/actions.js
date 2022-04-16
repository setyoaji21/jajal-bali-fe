/* eslint-disable */
import axios from 'axios'
import { get } from 'lodash'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDBiOTVjODYzMTU5YjlkYzgxYWEzYzk1ZDZlNTMwZjEzNDk0ZTkzNTY5NjUxODU1ZTllODY1NGUxZDgxZmU5ZTM2YzI2ZTJlYWI3NmI3YjgiLCJpYXQiOjE2NTAwNzI5ODEuNTI2NzQ3LCJuYmYiOjE2NTAwNzI5ODEuNTI2NzQ4LCJleHAiOjE2ODE2MDg5ODEuNTI0MzkyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.DnOqWcDABUsA5vaetAF7EAKrCXn1H28UJPNaAvPxXS0YFlmOjvpsndh0qBMN_UKcZGyFVnpDfxw3hAQArPwAd_ICQEeHv472PSxwPLIyi7rHn5WpmUKeIXmxZOOh_l0QVNb5__-lVXBXEZRLeW8aZ15FaaNRD6x8pz9hDgpjJ7OmI48BbTZF8I1UryE7Y2n1R_12q6zbKcmsdxrHPst5E0STlFktu74xYpExX0ONHwJ6P8zDdOXT6NHy3t9jtxMqiSmrEXxgAXpquOAAnGrYBuIm-0-3BLwhxEyeAz9vgRVfREzxUhowkuPG5RrMYFvNFPgNdGMz-Vv_KngrwsjM0m_ySoajZ0WQkuQF1oLouTpdouVNj9LJASB56o51ucEGiQVxkKiXrGKaPhKyYZHPevvcXW4NQe1ezJJlKCV2LkNDJohWth-EEj1Lp2F-1joEui2iTfJs_oLDiwrwRcIM6GI5ZwNs46pik7fP-KHN0Sljbf1gvWGPJp0pfPvlNZ0DWnvP9J3EhgTUwSzxCj62F7I8ZG3GAx0F5_6pV6Ayug3_RxnDdnRvLY8LiaoLrXQc9x00H-5QHEYJhiEL3GPdfkH6y9bzQwTIZZN7kdCT4V_Nwb44VcL_PwM1qW28blQF7nxvrXsq0Z01M4OawwtJqjt5RmLeXdmLbSST5eqrjOQ'

export default {
  loadDestinations: async ({ commit }) => {
    await axios({
      url: process.env.VUE_APP_API_URL + '/api/destinations',
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(response => {
        commit('SET_DESTINATIONS', get(response, ['data', 'data'], []))
        return Promise.resolve(response)
      })
      .catch(error => {
        return Promise.reject(error)
      })
  },
  loadDestination: async ({ commit }, payload) => {
    await axios({
      url: process.env.VUE_APP_API_URL + '/api/destinations/' + payload,
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
    .then(response => {
      commit('SET_DESTINATION', get(response, ['data', 'data'], null))
      return Promise.resolve(response)
    })
    .catch(error => {
      return Promise.reject(error)
    })
  },
  addDestination: async ({}, payload) => {
    let response = await axios({
      url: process.env.VUE_APP_API_URL + '/api/destinations',
      method: 'POST',
      data: payload,
      headers: { 'Authorization': 'Bearer ' + token }
    })

    return response
  },
  updateDestination: async ({}, payload) => {
    let response = await axios({
      url: process.env.VUE_APP_API_URL + '/api/destinations/' + payload.id,
      method: 'PUT',
      data: payload.data,
      headers: { 'Authorization': 'Bearer ' + token }
    })

    return response
  },
  removeDestination: async({}, payload) => {
    let response = await axios({
      url: process.env.VUE_APP_API_URL + '/api/destinations/' + payload,
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + token }
    })

    return response
  }
}