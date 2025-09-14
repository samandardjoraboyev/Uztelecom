<template>
  <nav class="flex items-center justify-between px-10 py-3 bg-white border-b border-gray-200">
    <div class="flex items-center space-x-2">
      <img src="@/assets/img/uztelecom-logo.svg" alt="Logo" class="h-10" />
    </div>

    <div class="hidden lg:block">
      <NavbarLinks />
    </div>

    <div class="flex items-center space-x-3">
      <button class="hidden lg:block md:block px-6 py-2 bg-[#174880] text-white rounded-md">
        Kirish
      </button>

      <div class="relative group hidden lg:block md:block">
        <button class="px-3 py-1 border rounded-md">O‘zbek</button>
        <div
          class="absolute hidden group-hover:block bg-white border rounded-md shadow mt-1 w-full"
        >
          <a href="#" class="block px-3 py-1 hover:bg-gray-100">Русский</a>
        </div>
      </div>
      <div class="hidden md:block lg:hidden p-2 rounded-full hover:bg-gray-100">
        <img src="@/assets/img/burger.svg" alt="Burger" />
      </div>

      <button class="hidden lg:block p-2 rounded-full hover:bg-gray-100">
        <img src="@/assets/img/moon.svg" alt="" />
      </button>
      <button class="block md:hidden p-2 rounded-full hover:bg-gray-100">
        <img src="@/assets/img/star.svg" alt="" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import NavbarLinks from './NavbarLinks.vue'
</script>
