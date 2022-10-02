<template>
  <div class="flex text-center justify-center">
    <div v-for="num in count.pageCount" >
      <button class=" bg-black text-white p-2 m-2 rounded-full"
              :class="{'bg-primary': num === activePage, 'text-secondary': num===activePage}" @click="page(num)">
        {{ num }}
      </button>
    </div>
  </div>
</template>

<script setup>
const count = defineProps(["pageCount", "activePage"])
const emit = defineEmits(['changePage'])

function page(num) {
  emit("changePage", num)
}
</script>