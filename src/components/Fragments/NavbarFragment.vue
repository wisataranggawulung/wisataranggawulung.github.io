<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import logo from "../../assets/images/logo.png";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  // Change background after scrolling past the hero section (100vh)
  // Subtracting a small offset (e.g., 80px for navbar height) to trigger slightly earlier
  if (window.scrollY >= window.innerHeight - 700) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-[200] transition-colors duration-300 px-6 py-4',
      isScrolled
        ? 'bg-white shadow-md text-yellow-600'
        : isMenuOpen
          ? 'bg-white text-yellow-600 md:bg-transparent md:text-white'
          : 'bg-transparent text-white',
    ]"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="flex items-center gap-2">
        <img :src="logo" alt="Logo" class="h-10 w-auto" />
        <span
          :class="isScrolled ? 'text-yellow-600' : 'text-white'"
          class="text-sm sm:text-base md:text-xl font-google-dynapuff"
          >Wisata Ranggawulung</span
        >
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6 font-bold">
        <router-link
          to="/"
          class="hover:opacity-70 pb-1 border-b-2 border-transparent transition-all"
          exact-active-class="border-yellow-500 text-yellow-500"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="hover:opacity-70 pb-1 border-b-2 border-transparent transition-all"
          exact-active-class="border-yellow-500 text-yellow-500"
          >About</router-link
        >
        <a
          href="#"
          class="hover:opacity-70 pb-1 border-b-2 border-transparent transition-all"
          >Gallery</a
        >
        <a
          href="#"
          class="hover:opacity-70 pb-1 border-b-2 border-transparent transition-all"
          >Contact</a
        >
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col p-6 space-y-4 text-black border-t"
    >
      <router-link
        to="/"
        @click="isMenuOpen = false"
        class="hover:text-green-600 font-medium"
        >Home</router-link
      >
      <router-link
        to="/about"
        @click="isMenuOpen = false"
        class="hover:text-green-600 font-medium"
        >About</router-link
      >
      <a
        href="#"
        @click="isMenuOpen = false"
        class="hover:text-green-600 font-medium"
        >Gallery</a
      >
      <a
        href="#"
        @click="isMenuOpen = false"
        class="hover:text-green-600 font-medium"
        >Contact</a
      >
    </div>
  </nav>
</template>
