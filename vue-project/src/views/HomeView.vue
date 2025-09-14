<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar tepada -->
    <Navbar />

    <!-- Asosiy content -->
    <section class="flex-grow">
      <div class="px-11">
        <h1 class="text-5xl font-bold">UZTELECOMdan <br />1C bulutli xizmati</h1>
        <p class="whitespace-pre-line text-base leading-relaxed pt-4">
          Buxgalteriya hisobini yuriting, savdo va <br />
          xizmatlaringizni dunyoning istalgan <br />
          nuqtasidan boshqaring.
        </p>
        <button
          class="mt-6 bg-main text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >30 kun bepul
        </button>
        <button class="mt-6 ml-4 border border-main text-main px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
          Batafsil
        </button>
      </div>
    </section>

    <!-- main content -->
    

    <!-- Footer pastda -->
    <FooterCustom />
  </div>
</template>

<script setup>
import Navbar from '@/components/NavbarComponent.vue'
import FooterCustom from '@/components/FooterComponent.vue'
</script>
