<script setup>
defineProps(["title", "buttonText", "signUp"])
</script>

<template>
  <div class="p-4 w-full max-w-sm rounded-lg border border-primary sm:p-6 md:p-8">
    <form class="space-y-6" @submit.prevent="">
      <h5 class="text-xl font-medium text-primary text-center">{{ title }}</h5>
      <slot></slot>
      <button type="submit"
              class="w-full text-secondary bg-primary hover:bg-primary/75 rounded-lg px-5 py-2.5 text-center">
        {{ buttonText }}
      </button>
    </form>
  </div>
</template>