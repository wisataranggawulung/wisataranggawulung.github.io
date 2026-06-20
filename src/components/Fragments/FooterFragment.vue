<script setup lang="ts">
import logo_institusi from "../../assets/images/logo_institusi.png";
</script>
<template>
  <!-- Footer Section -->
  <div class="mx-auto p-6 flex justify-center items-center">
    <img
      :src="logo_institusi"
      alt="Logo Institusi"
      class="w-72 md:w-140 h-auto"
    />
  </div>
  <footer
    class="bg-[#0b2611] text-white py-12 px-6 border-t border-white/10 mx-0"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6"
    >
      <!-- Brand / Slogan -->
      <div class="text-center md:text-left space-y-2">
        <h4 class="text-2xl font-normal font-google-dynapuff text-slate-50">
          Wisata Ranggawulung
        </h4>
        <p class="text-sm text-white/60 max-w-sm">
          Pengalaman wisata alam terbaik di Lebak, Banten untuk keluarga dan
          komunitas.
        </p>
      </div>

      <!-- Links and Copyright -->
      <div class="flex flex-col items-center md:items-end gap-4">
        <div class="flex flex-wrap justify-center gap-6 font-medium text-sm">
          <a href="#" class="hover:text-yellow-500 transition-colors"
            >Facebook</a
          >
          <a href="#" class="hover:text-yellow-500 transition-colors"
            >Instagram</a
          >
          <a
            href="https://wa.me/6287878798241"
            target="_blank"
            class="hover:text-yellow-500 transition-colors"
            >WhatsApp</a
          >
          <a href="#" class="hover:text-yellow-500 transition-colors">Lokasi</a>
        </div>
        <p class="text-xs text-center font-google-inter text-white/50">
          &copy; {{ new Date().getFullYear() }} Bumdes Ranggawulung Curugbitung.
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
