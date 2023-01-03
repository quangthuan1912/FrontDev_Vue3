import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    products: [],
    product: null,
    transactions: []
  },
  getters: {
    trans: state => state.transactions
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    SET_PRODUCT(state, product) {
      state.product = product;
    },

    loadTransactions(state, payload) {
      state.transactions = payload;
    }
  },
  actions: {
    getProducts({ commit }) {
      axios.get('http://localhost:3000/products/')
        .then(response => {
            commit('SET_PRODUCTS', response.data);
      })
    },

    getProduct({ commit }, productId){
      axios.get(`http://localhost:3000/products/${productId}`)
        .then(response => {
          commit('SET_PRODUCT', response.data);
      })
    },

    loadTrans(context) {
      axios.get('http://localhost:3000/products/').then(response => { 
        let reversed = response.data.reverse();
        context.commit('loadTransactions', reversed)
      })
    }
  },
  modules: {
  }
})
