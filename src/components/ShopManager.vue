<template>
   <div>
      <products-types />
      <products-list />
   </div>
</template>

<script>
import ProductsTypes from './ProductsTypes.vue'
import { products, banners } from '@/data/products'
import { mapActions } from 'vuex'
import ProductsList from './ProductsList.vue'
export default {
   name: 'ShopManager',
   components: {
      ProductsTypes,
      ProductsList,
   },
   methods: {
      ...mapActions(['setProducts', 'setBanners']),
   },
   created() {
      this.setProducts(products)
      this.setBanners(banners)
   },
}
</script>

<style lang="scss" scoped></style>
