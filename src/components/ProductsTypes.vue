<template>
   <div class="banners-body">
      <button
         v-for="(banner, indx) in banners"
         :key="banner.bannerTitle"
         @click="selectCategory(banner.categoty, indx, banner.bannerTitle)"
         :class="{ ['selected']: selectedIndx === indx }"
         class="banners-body__item"
      >
         <div class="banners-body__image"><img :src="banner.bannerIconScrc" alt="" /></div>
         <div>{{ banner.bannerTitle }}</div>
      </button>
   </div>
   <div v-if="selectedBannerTitle" class="title">{{ selectedBannerTitle }} в Україні</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
   name: 'ProductsTypes',
   data() {
      return {
         selectedIndx: null,
         selectedBannerTitle: null,
      }
   },
   computed: {
      ...mapGetters(['banners']),
   },
   methods: {
      ...mapActions(['setProductCategory']),
      selectCategory(category, indx, title) {
         this.setProductCategory(category)
         this.selectedIndx = indx
         this.selectedBannerTitle = title
      },
   },
}
</script>

<style lang="scss" scoped>
.banners-body {
   margin-bottom: 50px;
   display: flex;
   justify-content: space-between;
   // .banners-body__item
   &__item {
      cursor: pointer;
   }
   // .banners-body__image
   &__image {
      img {
         max-width: 200px;
      }
   }
   .selected {
      outline: 1px solid red;
   }
}
.title {
   margin-bottom: 30px;
   font-size: 30px;
}
</style>
