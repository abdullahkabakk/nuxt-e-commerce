<template>
  <div>
    <Products :products="products.product"/>
    <Pagination :pageCount="pageCount" @changePage="getProducts" :activePage="activePage.count"/>
  </div>
</template>

<script setup>
import {useProductStore} from "~/store/product";
import {reactive} from "vue";

const store = useProductStore()
const token = await store.getToken;
await store.fetchProducts(token);
const pageCount = store.getPageCount
const productPerPage = store.productPerPage
const products = reactive({product: store.getProducts(store.productPerPage)})
let activePage = reactive({count:1});
function getProducts(state) {
  products.product = store.getProducts(productPerPage * state)
  activePage.count = state
  console.log(products.product)
}

</script>
