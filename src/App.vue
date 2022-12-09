<template>
  <div id="app">
    <TheSiteHeader/>
    <ProductView product-id="114" />
  </div>
</template>

<script>
import ProductView from './components/ProductView.vue'
import TheSiteHeader from './components/TheSiteHeader.vue'

export default {
  name: 'App',
  components: {
    ProductView,
    TheSiteHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
