<template>
  <button>
    {{ copy }}
  </button>
</template>

<script>
export default {
  props: {
    productId: String
  },
  setup() {
    /** The button copy. */
    const copy = 'Some Text Here';

    return {
      copy,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ProductView_Container {
  padding-top: var(--spacing-8x);
}

.ProductView_Heading {
  margin: 40px 0 0;
}

.ProductView_Image {
  max-width: 400px;
}
</style>
