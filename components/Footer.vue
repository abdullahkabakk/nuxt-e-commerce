<script setup>
const data = {
  "Kurumsal": ["Hakkımızda", "Kampanyalar", "Banka Hesap Numaraları", "Blog", "Haberler"],
  "Müşteri Hizmetleri": ["Sipariş Sorgulama", "Teslimat ve Kargo", "İade ve Değişim", "Üyelik Sözleşmesi", "Gizlilik ve Güvenlik"],
  "Yardım": ["İletişim Bilgileri", "Sıkça Sorulan Sorular"],
  "İletişim": ["Adres: 1376 Sok. No: 1/43 Boran Plaza, Halkapınar, Konak/İzmir", "Telefon:08505555555"],
  "Bizi Takip Edin": ["assets/svg/Facebook.svg", "assets/svg/Twitter.svg", "assets/svg/Youtube.svg", "assets/svg/Instagram.svg",]
}
</script>

<template>
  <footer class="p-4 bg-logo/5 mt-10">
    <div class="md:flex md:justify-between">
      <div class="grid grid-cols-2 gap-6 sm:grid-cols-5">
        <div v-for="(valueList,key) in data">
          <h2 class="mb-5 font-semibold">{{ key }}</h2>
          <ul class="text-logo" v-for="value in valueList">
            <li class="mb-2">
              <a href="#" class="hover:underline">
                <span v-if="key === 'Bizi Takip Edin'">
                  <img :src="value" :alt="value"/>
                </span>
                <span v-else>
                  {{ value }}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-2 border-logo">
    <div class="flex items-center justify-between text-logo text-sm">
      <span> Copyright © 2022 Karma - Kırmızı </span>
      <div class="hidden md:flex"> Abdullah Kabak</div>
    </div>
  </footer>
</template>