import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    movies: [],
    movie: {}  
  },
  mutations: {
    addMovies(state, data) {
      state.movies = data
    },
    addMovie(state, data) {
      state.movie = data
    }  
  },
  actions: {
    async getMovies({commit, dispatch}) {
      const data = await axios.get('/movies.json')
      commit('addMovies', data.data.items)
    },
    async getMovie({commit, dispatch}) {
      const data = await axios.get('/detail.json')
      commit('addMovie', data.data)
    },
  },
  getters: {
    movies(state) {
      return state.movies
    },
    movie(state) {
      return state.movie
    }  
  }
})
