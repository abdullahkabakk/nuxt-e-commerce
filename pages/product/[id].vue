<script setup>
import {useRoute} from "nuxt/app";

const route = useRoute()

const randomNumber = Math.ceil(Math.random() * 10)
const name = route.query.name
const price = route.query.price
const stock = route.query.stock
const currency = route.query.currency
</script>

<template>
  <div class="flex justify-center mt-5">
    <span class="flex flex-col items-center rounded-lg w-full border border-logo/50 md:flex-row md:max-w-2xl">
      <img class="object-cover w-full h-96 rounded-lg md:h-auto"
           :src="`https://picsum.photos/id/${randomNumber}/100/75`"
           :alt="randomNumber">
      <div class="flex flex-col justify-between p-4">
        <h5 class="mb-2 text-2xl font-bold">
          {{ name }}
        </h5>
        <p class="mb-3">
          {{ price }} {{ currency }}
        </p>
        <p class="mb-3">
          Stok adedi: {{ stock }}
        </p>
        <button class="flex text-secondary justify-center py-2 px-3 bg-primary rounded-lg hover:bg-primary/75">
            Sepete Ekle
        </button>
      </div>
    </span>
  </div>
</template>