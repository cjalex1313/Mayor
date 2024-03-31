<template>
  <nav class="fixed z-50 w-full bg-white nav-background">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <!-- Mobile menu button-->
          <button
            type="button"
            @click="toggleMenu"
            class="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-[#002a59] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-8 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              style="filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.25))"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 6h18M3 12h18m-18 6h18" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center">
          <div class="flex flex-shrink-0 items-center">
            <RouterLink to="/" class="flex items-center" style="height: 100%">
              <img
                src="@/assets/images/primar_pentru_craiova_logo.png"
                alt="Emilia Neagu - Primar pentru Craiova"
                style="max-height: 50px; width: auto"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="hamburgerOpen" id="mobile-menu" class="bg-white bg-opacity-90">
      <div @click="toggleMenu" class="space-y-1 px-2 pb-3 pt-2">
        <RouterLink
          to="/"
          class="block rounded-md px-3 py-2 text-base font-medium text-[#002a59] hover:bg-[#002a59] hover:text-white"
          >Acasa</RouterLink
        >
        <RouterLink
          to="/despre"
          class="block rounded-md px-3 py-2 text-base font-medium text-[#002a59] hover:bg-[#002a59] hover:text-white"
          >Despre mine</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'maiMultiBani' } }"
          class="block rounded-md px-3 py-2 text-base font-medium text-[#002a59] hover:bg-[#002a59] hover:text-white"
          >Mai mulți bani în buzunarul tău</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'pregatimCopilulTauPentruSucces' } }"
          class="block rounded-md px-3 py-2 text-base font-medium text-[#002a59] hover:bg-[#002a59] hover:text-white"
          >Pregătim copilul tău pentru succes</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'cartierulPeCareIlMeriti' } }"
          class="block rounded-md px-3 py-2 text-base font-medium text-[#002a59] hover:bg-[#002a59] hover:text-white"
          >Cartierul pe care îl meriți</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'sanatateInOrasulTau' } }"
          class="block rounded-md px-3 py-2 text-base font-medium text-[#002a59] hover:bg-[#002a59] hover:text-white"
          >Sănătate în orașul tău</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'primariaInSlujbaTa' } }"
          class="block rounded-md px-3 py-2 text-base font-medium text-[#002a59] hover:bg-[#002a59] hover:text-white"
          >Primăria în slujba ta</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'salvamPatrimoniul' } }"
          class="block rounded-md px-3 py-2 text-base font-medium text-[#002a59] hover:bg-[#002a59] hover:text-white"
          >Salvăm patrimoniul cultural al Craiovei</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'orasCurat' } }"
          class="block rounded-md px-3 py-2 text-base font-medium text-[#002a59] hover:bg-[#002a59] hover:text-white"
          >Oraș curat. Aer pur. Craioveni sănătoși.</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'incluziune' } }"
          class="block rounded-md px-3 py-2 text-base font-medium text-[#002a59] hover:bg-[#002a59] hover:text-white"
          >Incluziune pentru persoanele cu dizabilități</RouterLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const hamburgerOpen = ref(false)

const toggleMenu = () => {
  hamburgerOpen.value = !hamburgerOpen.value
}
</script>

<style>
.nav-background {
  background-image: url('@/assets/gradient_BKG_B.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

#mobile-menu {
  background-color: rgba(255, 255, 255, 0.9);
}

#mobile-menu .RouterLink {
  color: #002a59;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
}
</style>
