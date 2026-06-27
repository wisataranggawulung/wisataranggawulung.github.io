<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import image_001 from "../../assets/images/image_001.jpeg";
import image_002 from "../../assets/images/image_002.jpeg";
import image_003 from "../../assets/images/image_003.jpeg";
import image_011 from "../../assets/images/image_011.jpeg";

const images = [image_011, image_001, image_002, image_003];

const currentIndex = ref(0);
let interval: any;

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
<template>
  <!-- Slideshow Hero Section -->
  <div class="relative h-screen w-full overflow-hidden">
    <div
      v-for="(img, index) in images"
      :key="index"
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      :class="currentIndex === index ? 'opacity-100' : 'opacity-0'"
    >
      <img :src="img" class="w-full h-full object-cover" alt="Slideshow" />
      <div
        class="absolute inset-0 bg-black/30 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]"
      ></div>
    </div>

    <!-- Slideshow Indicators -->
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-10"
    >
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="currentIndex = index"
        class="h-1.5 transition-all duration-300 rounded-full"
        :class="
          currentIndex === index
            ? 'w-12 bg-white'
            : 'w-6 bg-white/50 hover:bg-white/80'
        "
        :aria-label="'Go to slide ' + (index + 1)"
      ></button>
    </div>

    <!-- Hero Content -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
    >
      <div
        class="bg-yellow-800/35 p-6 md:p-8 rounded-2xl md:rounded-[32px] text-white/90 max-w-[90%] md:max-w-3xl mx-auto border border-white/10"
      >
        <h1
          class="text-3xl sm:text-4xl md:text-6xl font-normal mb-4 font-google-dynapuff"
        >
          Wisata Alam Ranggawulung
        </h1>
        <p
          class="text-sm sm:text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Nikmati keindahan alam dan kesegaran udara di destinasi wisata terbaik
          kami.
        </p>
      </div>
    </div>
  </div>
</template>
