<template>
  <div>
    <div class="flex flex-col min-h-screen">
      <!-- Navbar -->
      <Navbar />

      <!-- main content -->
      <section class="flex-grow">
        <div class="px-11">
          <router-view />
        </div>
      </section>

      <!-- Footer  -->
      <FooterCustom />
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import Navbar from '@/components/NavbarComponent.vue'
import FooterCustom from '@/components/FooterComponent.vue'
</script>
