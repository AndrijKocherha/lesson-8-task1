<template>
   <div class="products-body">
      <div v-for="product in productsToShow" :key="product.id" class="products-body__item">
         <div class="products-body__image"><img :src="product.imageSrc" alt="" /></div>
         <div class="products-body__content">
            <h3 class="products-body__title">{{ product.title }}</h3>
            <div :class="{ 'on-sale': product.oldPrice }" class="products-body__price">{{ product.price }} ₴</div>
            <div v-if="product.oldPrice" class="products-body__ald-price">{{ product.oldPrice }} ₴</div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   name: 'ProductsList',
   computed: {
      ...mapGetters(['productsToShow']),
   },
}
</script>

<style lang="scss" scoped>
.products-body {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
   align-items: center;
   gap: 20px;
   // .products-body__item
   &__item {
      border: 1px solid #000;
      display: flex;

      width: 100%;
      height: 100%;
      padding: 10px;
      gap: 10px;
   }
   // .products-body__image
   &__image {
      position: relative;
      img {
         max-width: 150px;
      }
   }
   // .products-body__content
   &__content {
   }
   // .products-body__title
   &__title {
   }
   // .products-body__price
   &__price {
      font-size: 18px;
      &:not(:last-child) {
         margin-bottom: 10px;
      }
   }
   // .products-body__ald-price
   &__ald-price {
   }
}
.on-sale {
   font-size: 20px;
   color: red;
}
</style>
