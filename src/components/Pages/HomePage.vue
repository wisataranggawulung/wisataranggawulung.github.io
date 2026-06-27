<script setup lang="ts">
import HeaderFragment from "../Fragments/HeaderFragment.vue";
import NavbarFragment from "../Fragments/NavbarFragment.vue";
import image_001 from "../../assets/images/image_001.jpeg";
import image_002 from "../../assets/images/image_002.jpeg";
import image_003 from "../../assets/images/image_003.jpeg";
import image_004 from "../../assets/images/image_004.jpeg";
import image_005 from "../../assets/images/image_005.jpeg";
import image_006 from "../../assets/images/image_006.jpeg";
import image_010 from "../../assets/images/image_010.jpeg";
import FooterFragment from "../Fragments/FooterFragment.vue";

const campingPackages = [
  {
    name: "Paket 1 Malam",
    price: "Rp 20.000",
    fires: 1,
    features: ["Area Camping Luas", "Akses MCK & Mushola", "Layanan Keamanan"],
  },
  {
    name: "Paket 2 Malam",
    price: "Rp 25.000",
    fires: 2,
    features: ["Area Camping Luas", "Akses MCK & Mushola", "Layanan Keamanan"],
  },
  {
    name: "Paket 3 Malam",
    price: "Rp 30.000",
    fires: 3,
    features: ["Area Camping Luas", "Akses MCK & Mushola", "Layanan Keamanan"],
  },
];
</script>

<template>
  <div class="relative min-h-screen">
    <NavbarFragment />
    <HeaderFragment />

    <!-- Content Placeholder -->
    <div class="py-12 md:py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <h2
        class="text-2xl sm:text-3xl md:text-5xl font-normal font-google-dynapuff text-[#13381a] text-center md:text-left mb-8 md:mb-12"
      >
        Ayo ke Wisata Alam <br />Ranggawulung ....
      </h2>
      <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div class="flex-1 space-y-4 text-center md:text-left">
          <p
            class="text-gray-600 text-sm sm:text-base leading-relaxed text-justify md:text-left"
          >
            Wisata Alam Ranggawulung (WAR) mempunyai luas 12 hektar dan
            berkonsep pada alam dan buatan. Tempat yang sangat cocok untuk
            mendapatkan ketenangan dan kesejukan di bawah naungan pohon durian,
            rambutan, kelapa, nangka, dan buah-buahan lainnya.
          </p>
          <p
            class="text-gray-600 text-sm sm:text-base leading-relaxed text-justify md:text-left"
          >
            Konsep buatan kami menghadirkan kolam renang yang sangat aman dan
            menyenangkan untuk anak-anak. Selain itu, fasilitas penunjang
            seperti MCK, gazebo, musola, kantin, hingga penginapan tersedia
            lengkap untuk kenyamanan Anda.
          </p>
        </div>
        <div
          class="flex-1 relative w-full h-[300px] md:h-[450px] flex items-center justify-center group select-none my-20 md:my-0"
        >
          <!-- Image 6 (Backmost) -->
          <div
            class="absolute w-40 h-48 md:w-64 md:h-72 bg-white p-2 md:p-3 rounded-lg shadow-md border border-gray-200 transition-all duration-500 ease-in-out origin-bottom transform rotate-[-12deg] group-hover:rotate-[-28deg] group-hover:-translate-x-16 group-hover:-translate-y-4 md:group-hover:-translate-x-24 md:group-hover:-translate-y-6 hover:!scale-105 hover:!z-[100] cursor-pointer z-10"
          >
            <img
              :src="image_006"
              class="w-full h-[80%] object-cover rounded"
              alt="Kesejukan Hutan"
            />
            <div
              class="text-center mt-1.5 md:mt-2 text-[10px] md:text-xs font-google-pacifico text-gray-700"
            >
              Kesejukan Hutan
            </div>
          </div>
          <!-- Image 5 -->
          <div
            class="absolute w-40 h-48 md:w-64 md:h-72 bg-white p-2 md:p-3 rounded-lg shadow-md border border-gray-200 transition-all duration-500 ease-in-out origin-bottom transform rotate-[-7deg] group-hover:rotate-[-18deg] group-hover:-translate-x-10 group-hover:-translate-y-2 md:group-hover:-translate-x-14 md:group-hover:-translate-y-3 hover:!scale-105 hover:!z-[100] cursor-pointer z-20"
          >
            <img
              :src="image_005"
              class="w-full h-[80%] object-cover rounded"
              alt="Segarnya Kolam"
            />
            <div
              class="text-center mt-1.5 md:mt-2 text-[10px] md:text-xs font-google-pacifico text-gray-700"
            >
              Segarnya Kolam
            </div>
          </div>
          <!-- Image 4 -->
          <div
            class="absolute w-40 h-48 md:w-64 md:h-72 bg-white p-2 md:p-3 rounded-lg shadow-md border border-gray-200 transition-all duration-500 ease-in-out origin-bottom transform rotate-[-2deg] group-hover:rotate-[-8deg] group-hover:-translate-x-3 group-hover:-translate-y-1 md:group-hover:-translate-x-4 md:group-hover:-translate-y-1 hover:!scale-105 hover:!z-[100] cursor-pointer z-30"
          >
            <img
              :src="image_004"
              class="w-full h-[80%] object-cover rounded"
              alt="Fasilitas Lengkap"
            />
            <div
              class="text-center mt-1.5 md:mt-2 text-[10px] md:text-xs font-google-pacifico text-gray-700"
            >
              Fasilitas Lengkap
            </div>
          </div>
          <!-- Image 3 -->
          <div
            class="absolute w-40 h-48 md:w-64 md:h-72 bg-white p-2 md:p-3 rounded-lg shadow-md border border-gray-200 transition-all duration-500 ease-in-out origin-bottom transform rotate-[3deg] group-hover:rotate-[2deg] group-hover:translate-x-4 group-hover:-translate-y-1 md:group-hover:translate-x-6 md:group-hover:-translate-y-1 hover:!scale-105 hover:!z-[100] cursor-pointer z-40"
          >
            <img
              :src="image_003"
              class="w-full h-[80%] object-cover rounded"
              alt="Gazebo Santai"
            />
            <div
              class="text-center mt-1.5 md:mt-2 text-[10px] md:text-xs font-google-pacifico text-gray-700"
            >
              Gazebo Santai
            </div>
          </div>
          <!-- Image 2 -->
          <div
            class="absolute w-40 h-48 md:w-64 md:h-72 bg-white p-2 md:p-3 rounded-lg shadow-md border border-gray-200 transition-all duration-500 ease-in-out origin-bottom transform rotate-[8deg] group-hover:rotate-[12deg] group-hover:translate-x-10 group-hover:-translate-y-2 md:group-hover:translate-x-16 md:group-hover:-translate-y-3 hover:!scale-105 hover:!z-[100] cursor-pointer z-40"
          >
            <img
              :src="image_002"
              class="w-full h-[80%] object-cover rounded"
              alt="Spot Foto Instagenic"
            />
            <div
              class="text-center mt-1.5 md:mt-2 text-[10px] md:text-xs font-google-pacifico text-gray-700"
            >
              Spot Foto Instagenic
            </div>
          </div>
          <!-- Image 1 (Frontmost) -->
          <div
            class="absolute w-40 h-48 md:w-64 md:h-72 bg-white p-2 md:p-3 rounded-lg shadow-xl border border-gray-200 transition-all duration-500 ease-in-out origin-bottom transform rotate-[12deg] group-hover:rotate-[22deg] group-hover:translate-x-16 group-hover:-translate-y-4 md:group-hover:translate-x-26 md:group-hover:-translate-y-6 hover:!scale-105 hover:!z-[100] cursor-pointer z-50"
          >
            <img
              :src="image_001"
              class="w-full h-[80%] object-cover rounded"
              alt="Gerbang Ranggawulung"
            />
            <div
              class="text-center mt-1.5 md:mt-2 text-[10px] md:text-xs font-google-pacifico text-gray-700"
            >
              Ranggawulung
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Villa Section -->
    <div class="py-10 px-6 max-w-7xl mx-auto">
      <div
        class="bg-[#13381a] rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-xl"
      >
        <!-- Left Side: Content -->
        <div
          class="flex-1 p-8 md:p-12 flex flex-col justify-between text-white space-y-6"
        >
          <div>
            <span
              class="inline-block bg-[#a16207] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
            >
              Terbatas
            </span>
            <h3
              class="text-xl md:text-3xl font-normal font-google-dynapuff mb-4"
            >
              Eksklusif: Paket Villa
            </h3>
            <p class="text-white/80 leading-relaxed text-sm md:text-base">
              Nikmati kenyamanan maksimal di Villa 6 x 8 m² (konsep los/tanpa
              kamar) yang asri. Cocok untuk liburan keluarga eksklusif di tengah
              hutan.
            </p>
          </div>

          <div
            class="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 border-t border-white/10"
          >
            <div>
              <span class="text-xs uppercase tracking-wider text-white/60"
                >Harga Per Malam</span
              >
              <div class="text-3xl md:text-4xl font-bold mt-1 text-white">
                Rp 250.000
              </div>
              <span class="text-xs text-white/60">(Maks. 5 orang)</span>
            </div>

            <div class="space-y-2 text-sm text-white/90">
              <div class="flex items-center gap-2">
                <v-icon name="hi-check" class="w-4 h-4 text-yellow-500" />
                <span>Luas Villa 6x8 m²</span>
              </div>
              <div class="flex items-center gap-2">
                <v-icon name="hi-check" class="w-4 h-4 text-yellow-500" />
                <span>Tambahan Rp 20rb/orang (&gt;5 org)</span>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <a
              href="https://wa.me/6287878798241?text=Halo%20saya%20tertarik%20untuk%20bertanya%20paket%20villa"
              target="_blank"
              class="block text-center bg-white cursor-pointer active:scale-95 text-[#13381a] hover:bg-yellow-600 hover:text-white transition-colors duration-300 font-bold py-3 px-8 rounded-xl shadow-lg"
            >
              Booking Villa Sekarang
            </a>
          </div>
        </div>

        <!-- Right Side: Image -->
        <div class="md:w-[50%] h-auto md:h-[470px] min-h-[350px] relative">
          <img
            :src="image_010"
            class="w-full h-full object-cover"
            alt="Eksklusif Villa"
          />
          <div class="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
        </div>
      </div>
    </div>

    <!-- Adventure Packages Section -->
    <div class="py-20 px-6 max-w-7xl mx-auto">
      <!-- Header Area -->
      <div
        class="flex flex-col lg:flex-row justify-between lg:items-center gap-8 mb-12"
      >
        <div class="max-w-2xl space-y-4">
          <h2
            class="text-3xl md:text-5xl font-normal font-google-dynapuff text-[#13381a]"
          >
            Pilih Paket Petualangan Anda
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Luas area camping mencapai &plusmn; 8.000 m&sup2; yang asri dengan
            udara sejuk dan nyaman, sangat cocok untuk keluarga dan rombongan
            besar.
          </p>
        </div>

        <!-- Kunjungan Biasa Card -->
        <div
          class="bg-amber-100 border border-amber-200 rounded-2xl p-6 flex flex-col justify-center min-w-[280px]"
        >
          <span class="text-amber-700 text-xs font-bold tracking-wider mb-2"
            >KUNJUNGAN BIASA</span
          >
          <div class="flex items-center justify-between gap-6">
            <div>
              <span class="text-xs text-gray-500 block">Dewasa</span>
              <span class="text-lg font-bold text-gray-800">Rp 10.000</span>
            </div>
            <div class="w-px h-10 bg-amber-200"></div>
            <div>
              <span class="text-xs text-gray-500 block">Anak-anak</span>
              <span class="text-lg font-bold text-gray-800">Rp 5.000</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Packages Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(pkg, index) in campingPackages"
          :key="index"
          class="bg-white rounded-3xl p-8 shadow-sm border-2 border-green-800 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
        >
          <div>
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-xl font-bold text-[#13381a]">{{ pkg.name }}</h3>
              <div class="flex gap-0.5">
                <v-icon
                  v-for="f in pkg.fires"
                  :key="f"
                  name="hi-fire"
                  class="w-6 h-6 text-amber-600"
                />
              </div>
            </div>

            <div class="mb-8">
              <div class="flex items-baseline gap-1 text-[#8f5a0c]">
                <span class="text-4xl font-bold">{{ pkg.price }}</span>
                <span class="text-gray-500 text-sm">/ orang</span>
              </div>
            </div>

            <ul class="space-y-4 mb-8">
              <li
                v-for="(feature, fIndex) in pkg.features"
                :key="fIndex"
                class="flex items-center gap-3 text-gray-600"
              >
                <div
                  class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600"
                >
                  <v-icon name="hi-check" class="w-3.5 h-3.5" />
                </div>
                <span class="text-sm">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <a
            :href="`https://wa.me/6287878798241?text=Halo%20saya%20tertarik%20untuk%20bertanya%20${encodeURIComponent(pkg.name)}`"
            target="_blank"
            class="block w-full text-center bg-[#13381a] hover:bg-amber-600 transition-all text-white font-bold py-3.5 px-6 rounded-2xl cursor-pointer active:scale-[0.98]"
          >
            Pilih Paket Ini
          </a>
        </div>
      </div>
    </div>

    <!-- Included in Package Section -->
    <div class="py-10 px-6 max-w-7xl mx-auto">
      <div
        class="bg-[#f0f1ed] rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-200/50"
      >
        <h3
          class="text-2xl md:text-3.5xl font-normal font-google-dynapuff text-[#13381a] mb-8"
        >
          Termasuk Dalam Paket:
        </h3>

        <!-- Grid of features -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(facility, i) in [
              'MCK 16 pintu',
              'Tempat Wudhu',
              'Aula Ranggawulung (12x18m)',
              'Aula Jayaraksa (6x8m)',
              'Gazebo',
              'Mushola',
              'Parkiran Luas',
              'Kantin',
              'Listrik Terjamin',
            ]"
            :key="i"
            class="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-gray-200/40 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-white/90"
          >
            <div
              class="flex-shrink-0 w-8 h-8 rounded-full bg-[#e6ece7] flex items-center justify-center text-[#13381a]"
            >
              <v-icon name="hi-check" class="w-4 h-4" />
            </div>
            <span class="text-gray-700 font-semibold text-sm md:text-base">{{
              facility
            }}</span>
          </div>
        </div>

        <!-- Warning bar -->
        <div
          class="mt-8 bg-[#fdf6e2] border border-yellow-200/60 rounded-2xl p-4 flex items-start gap-3"
        >
          <v-icon
            name="fa-exclamation-triangle"
            class="w-6 h-6 text-amber-600"
          />
          <span class="text-amber-800 text-sm md:text-base">
            Harga paket sudah termasuk fasilitas di atas (kecuali naik sepeda
            air/bebek air).
          </span>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-10 px-6 max-w-7xl mx-auto">
      <div
        class="bg-[#205128] rounded-[32px] p-8 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden"
      >
        <h3 class="text-xl md:text-3xl font-normal font-google-dynapuff">
          Siap Merasakan Kesejukan Alam?
        </h3>
        <p class="max-w-2xl mx-auto text-white/80 text-base md:text-lg">
          Segera hubungi pengelola untuk reservasi tempat atau informasi lebih
          lanjut mengenai paket rombongan dan event spesial.
        </p>

        <!-- Buttons group -->
        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="https://wa.me/6287878798241"
            target="_blank"
            class="bg-amber-800 hover:bg-amber-700 w-full md:w-auto transition-all flex items-center justify-center gap-3 text-white font-bold py-4 px-8 rounded-2xl shadow-lg text-lg"
          >
            <v-icon name="fa-whatsapp" class="w-6 h-6" />
            <span>0878 7879 8241</span>
          </a>

          <!-- Social media icons in green circle -->
          <a
            href="https://maps.app.goo.gl/7kbap5zoJ7MNmCbFA"
            target="_blank"
            class="w-12 h-12 rounded-2xl bg-white/15 hover:bg-white/25 transition-all flex items-center justify-center text-white"
            aria-label="Lokasi"
          >
            <v-icon name="fa-map-marker-alt" class="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/ranggawulungwisataalam/"
            target="_blank"
            class="w-12 h-12 rounded-2xl bg-white/15 hover:bg-white/25 transition-all flex items-center justify-center text-white"
            aria-label="Instagram"
          >
            <v-icon name="fa-instagram" class="w-6 h-6" />
          </a>
        </div>

        <p class="text-xs text-white/50 pt-2">
          Cari info lebih lanjut klik di sosial media (Wisata Alam Ranggawulung)
        </p>
      </div>
    </div>

    <FooterFragment />
  </div>
</template>
