<script setup>
const product = defineProps(["product"])
const randomNumber = Math.ceil(Math.random() * 10)
</script>

<template>
  <div class="m-3 border border-logo/50">
    <nuxt-link
        :to="{path :`/product/${product.product.id}`,
        query: {
          name: `${product.product.name}`,
          price: `${product.product.price}`,
          stock: `${product.product.stock}`,
          currency: `${product.product.currency}`
        }}">
    <span class="flex justify-center mt-2">
      <img class="w-full mx-2" :src="`https://picsum.photos/id/${randomNumber}/100/75`" :alt="randomNumber"/>
    </span>
      <div class="p-4">
        <h5 class="text-lg text-center">
          {{ product.product.name }}
        </h5>
        <p class="mb-3 text-center font-semibold">
          {{ product.product.price }} {{ product.product.currency }}
        </p>
        <p class="mb-3 text-logo text-center">
          Stok adedi: {{ product.product.stock }}
        </p>
        <span class="flex text-secondary justify-center py-2 px-3 bg-primary rounded-lg hover:bg-primary/75">
          Sepete Ekle
        </span>
      </div>
    </nuxt-link>
  </div>
</template>