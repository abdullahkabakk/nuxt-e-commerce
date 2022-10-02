<script setup>
const products = defineProps(["products"])
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4">
    <div v-for="product in products.products" :key="product">
      <ProductCard :product="product"/>
    </div>
  </div>
</template>


