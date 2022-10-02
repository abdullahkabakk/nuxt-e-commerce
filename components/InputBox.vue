<script setup>
const props = defineProps(["name", "placeholder", "label", "type"])
</script>

<template>
  <div>
    <label :for="name" class="block mb-2 text-sm font-medium text-primary">{{ label }}</label>
    <input :type="type" :name="name"
           class="border border-primary/100 text-sm rounded-lg w-full p-2.5"
           :placeholder="placeholder" required>
  </div>
</template>