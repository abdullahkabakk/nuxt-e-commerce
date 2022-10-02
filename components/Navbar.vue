<script setup>
import {useProductStore} from "../store/product";

const store = useProductStore()
</script>

<template>
  <nav class="mx-5">
    <div class="flex justify-between items-center">
      <a href="/">
        <span class="text-2xl font-bold text-primary">
          Karma
        </span>
      </a>
      <div class="flex">
        <div :class="{'md:hidden': store.getSidebar}" class="hidden flex-row relative lg:w-80 xl:w-96 md:flex">
          <input type="text" id="search-navbar"
                 class="flex p-2 w-full text-logo border border-logo/25 hover:border-primary"
                 placeholder="Ne aramıştınız...">
          <button class="h-full bg-primary flex my-auto px-3">
            <img class="my-auto" src="assets/svg/search.svg" alt="Search Icon">
          </button>
        </div>

        <button data-collapse-toggle="navbar-search" type="button"
                class="flex items-center p-2 text-sm rounded-lg md:hidden hover:bg-logo/10"
                aria-controls="navbar-search" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3">
            <svg class="w-5 h-5  text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type="text" id="search-navbar"
                 class="block p-2 pl-10 w-full text-logo bg-logo/5 rounded-lg"
                 placeholder="Search...">
        </div>
        <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
          <li class="my-auto">
            <a href="#" @click="store.sideBarAction()"
               class="block py-2"
               aria-current="page">
              Kategoriler
            </a>
          </li>
          <li class="my-auto">
            <a href="/cart"
               class="block py-2 pr-2 pl-3 text-white"
               aria-current="page">
              Sepet
            </a>
          </li>
          <li>
            <a href="/signup"
               class="block bg-primary text-secondary p-2 rounded-lg">
              Kayıt Ol
            </a>
          </li>
          <li>
            <a href="/login"
               class="block outline outline-primary p-2 rounded-lg text-primary">
              Giriş Yap
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>