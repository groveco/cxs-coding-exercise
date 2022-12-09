<template>
  <div class="ProductView_Container">
    <h2>This is a simple view of a product.</h2>
    <h1 class="ProductView_Heading">Mrs. Meyers - Full Bloom - Out of Stock</h1>
    <img alt="Product image" class="ProductView_Image" :src="productImageUrl" >
    <WaitlistButton :productId="productId" />
    <p v-if="isProductWaitlisted">
      You’ll be emailed when this item is back in stock.
    </p> 
  </div>
</template>

<script>
import WaitlistButton from './WaitlistButton';

import useWaitlist from '../composables/useWaitlist';

const HARDCODED_IMG = 'https://res.cloudinary.com/epantry/image/upload/f_auto,fl_progressive,h_368,w_auto,q_auto,dpr_auto,ar_1:1,c_pad,b_white/v1647012477/efrzular1ugmnlyvkmm4.png'

export default {
  components: {
    WaitlistButton
  },
  props: {
    productId: String
  },
  setup() {
    const toBeImplemented = useWaitlist();
    const isProductWaitlisted = undefined; // to be implemented
    const productImageUrl = HARDCODED_IMG;

    return {
      // Needs implementation:
      isProductWaitlisted,

      // Computed values:
      productImageUrl
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ProductView_Container {
  padding-top: var(--spacing-8x);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-8x);

}

.ProductView_Heading {
  margin: 40px 0 0;
}

.ProductView_Image {
  max-width: 400px;
}
</style>
