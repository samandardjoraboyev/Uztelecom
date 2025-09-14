<template>
  <ul class="flex space-x-6 text-sm font-medium">
    <li v-for="(link, index) in links" :key="index">
      <router-link :to="link.path" class="hover:text-blue-600">
        {{ link.label }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue"

const links = ref([
  { label: "Xizmat haqida", path: "/xizmat" },
  { label: "Ariza yuborish", path: "/ariza" },
  { label: "Imkoniyatlar", path: "/imkoniyat" },
  { label: "Afzalliklar", path: "/afzallik" },
  { label: "Qanday boshlash kerak", path: "/boshlash" },
  { label: "Tariflar", path: "/tarif" },
])
</script>
