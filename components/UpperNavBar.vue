<script setup>
const socialMedia = ["Facebook", "Twitter", "Youtube", "Instagram"]
</script>

<template>
  <nav class="hidden md:block bg-logo/5 border-b border-b-logo/10">
    <div class="px-4">
      <div class="flex justify-between">
        <ul class="hidden md:flex flex-row space-x-6">
          <li class="my-auto" v-for="icons in socialMedia" :key="icons">
            <a href="#">
              <img :src="`assets/svg/${icons}.svg`" :alt="`${icons} Icon`">
              <span class="sr-only">{icons} page</span>
            </a>
          </li>
        </ul>
        <ul class="flex flex-row space-x-6 text-sm font-medium">
          <li class="text-logo my-auto">
            <a href="#">
              Yardım
            </a>
          </li>
          <li>
            <button class="bg-primary text-secondary px-3 py-2">
              Blog
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>