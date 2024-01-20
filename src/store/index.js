import { createStore } from 'vuex'

export default createStore({
   state: {
      products: [],
      banners: [],
      productCategory: null,
      productsToShow: null,
   },
   getters: {
      products: ({ products }) => products,
      banners: ({ banners }) => banners,
      productsToShow: (state) => {
         let list = state.products[state.productCategory]
         if (list) return list
         else return null
      },
   },
   mutations: {
      onSetProducts(state, list) {
         state.products = list
      },
      onSetBanners(state, list) {
         state.banners = list
      },
      onSetProductCategory(state, category) {
         state.productCategory = category
      },
   },
   actions: {
      setProducts({ commit }, list) {
         commit('onSetProducts', list)
      },
      setBanners({ commit }, list) {
         commit('onSetBanners', list)
      },
      setProductCategory({ commit }, category) {
         commit('onSetProductCategory', category)
      },
   },
})
