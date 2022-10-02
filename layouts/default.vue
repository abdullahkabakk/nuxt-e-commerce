<script setup>
import {useProductStore} from "../store/product";
import {watch} from "vue";

const store = useProductStore()
watch(() => store.getSidebar, () => {
})
</script>

<template>
  <div class="flex">
    <div v-if="store.getSidebar">
      <Sidebar/>
    </div>
    <div class="flex flex-col w-screen h-screen justify-between">

      <div>
        <UpperNavBar/>
        <Navbar/>
      </div>
      <div>
        <NuxtPage/>

      </div>
      <Footer/>
    </div>
  </div>
</template>