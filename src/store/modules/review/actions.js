/* eslint-disable */
import axios from 'axios'
import { get } from 'lodash'

const userData = {
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDE0NTY3Njg3ODIzNjZlZDhjZDc0MTY1YTkyN2RlNDA3NDBmNDMxODlhYjcyNGJmMzk4YTQzNzRmZjFhZjY5YjRjNjIyY2UzZWUwNTAyZTgiLCJpYXQiOjE2NTAwOTUwNzYuNjA1NjYzLCJuYmYiOjE2NTAwOTUwNzYuNjA1NjYzLCJleHAiOjE2ODE2MzEwNzYuNjAyOTMyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.YwNcHBrIX7C_25QrGJ0XiNORwX6OCHaWGF3tsd2ZDbmRM9rwtZXSbFGfuZCvIG8P-GBdFlGNPN4oU5xlLEim0vJqIBhYAi-MM1xnq6LvYQPmyYCwIK-kGpp_NTlfg45HEWd3nXJ_lcl1gPcXEYuOLokRyzmhYnAjkv6UdOaRvKaF367rvA8F1R1-a-qP5e6DOTLyiu5zdg_xsUfGdRnPl8Zx32c539vOBXeTZmoL6J8pNYkSMo_2WKEz0R-d8TsIBfVIxbOEWfT2MX5_dtr5Txg_Sw0HlVZmgk1ZRxiSafMPsNRHoV7PYsgMURQINVqW6sLxITEgQV-XCTGBQyDOEvCkdWuLApC8_YBwDvEJyCVZ4tk5ZAmOmqhmWEpFk8Jjv8vyBUIxFbbNz24hI6FKwNRBXvzJdY453Eoj-Ib8enwf3Ygyv9EVkB3EdmeD2lrWwkU55FRkXjT-iGKnlphRHvkjxnEc1236q16mbWak7sY9v0M2IIMy8WatYqVnOVtm_04NhiHm74juCC4orq_ZhDotkpIyMlHHi_ZDhrV_8hyAdS7PPX5Wz-8m5HizT-8nRkeC2QdrcCO2O2lK90oi0fUNs0h90fq4UikvxjXzupqsa2t0sDZqzKsaE0doBNlbjor0FrsvvI9cxmYQKvp6nLUX87o2pRFLRRd4cyggaqc',
  id: 1,
  name: 'Admin'
}

export default {
  loadReviews: async ({ commit }, payload) => {
    await axios({
      url: process.env.VUE_APP_API_URL + '/api/reviews/' + payload,
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + userData.token }
    })
    .then(response => {
      commit('SET_REVIEWS', get(response, ['data', 'data'], []))
      return Promise.resolve(response)
    })
    .catch(error => {
      return Promise.reject(error)
    })
  },
  addReview: async ({}, payload) => {
    let data = {
      ...payload,
      idUser: userData.id,
      name: userData.name
    }
    let response = await axios({
      url: process.env.VUE_APP_API_URL + '/api/reviews',
      method: 'POST',
      data: data,
      headers: { 'Authorization': 'Bearer ' + userData.token }
    })

    return response
  }
}