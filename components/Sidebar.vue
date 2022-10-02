<script setup>
const categories = {
  "Bebek Ürünleri": ["Bebek Bezi", "Bebek Arabası", "Bebek Kıyafetleri"],
  "Ayakkabı": ["Spor Ayakkabı", "Koşu Ayakkabısı", "Yürüyüş Ayakkabısı"],
  "Kıyafet": ["Gömlek", "Hırka", "Pantolon"],
}
</script>

<template>
  <aside class="w-64" aria-label="Sidebar">
    <div class="py-4 px-3">
      <h1 class="text-2xl text-center mb-3 text-primary font-bold">Kategoriler</h1>
      <ul v-for="(value, key) in categories">
        <li>
          <a href="#" class="text-primary font-semibold"> {{ key }} </a>
          <ul v-for="subcat in value">
            <li class="ml-4">
              <a href="#" class="text-primary"> -{{ subcat }} </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>