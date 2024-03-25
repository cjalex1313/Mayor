<template>
  <nav class="fixed z-50 w-full bg-white">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <!-- Mobile menu button-->
          <button
            type="button"
            @click="toggleMenu"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#002a59] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="@/assets/images/usr-logo.png" alt="USR" />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="hamburgerOpen" id="mobile-menu">
      <div @click="toggleMenu" class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <!-- <a
          href="/"
          class="color-[#002a59] hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          aria-current="page"
          >Acasa</a
        > -->
        <RouterLink
          to="/"
          class="color-[#002a59] hover:bg-[#002a59] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >Acasa</RouterLink
        >
        <RouterLink
          to="/despre"
          class="color-[#002a59] hover:bg-[#002a59] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >Despre mine</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'maiMultiBani' } }"
          class="color-[#002a59] hover:bg-[#002a59] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >Mai Mulți Bani în Buzunarul Tău</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'pregatimCopilulTauPentruSucces' } }"
          class="color-[#002a59] hover:bg-[#002a59] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >Pregătim copilul tău pentru succes</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'cartierulPeCareIlMeriti' } }"
          class="color-[#002a59] hover:bg-[#002a59] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >Cartierul pe care îl meriți</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'sanatateInOrasulTau' } }"
          class="color-[#002a59] hover:bg-[#002a59] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >Sănătate în orașul tău</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'primariaInSlujbaTa' } }"
          class="color-[#002a59] hover:bg-[#002a59] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >Primăria în slujba ta</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'salvamPatrimoniul' } }"
          class="color-[#002a59] hover:bg-[#002a59] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >Salvăm patrimoniul cultural al Craiovei</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'orasCurat' } }"
          class="color-[#002a59] hover:bg-[#002a59] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >Oraș curat. Aer pur. Craioveni sănătoși.</RouterLink
        >
        <RouterLink
          :to="{ path: '/despre', query: { id: 'incluziune' } }"
          class="color-[#002a59] hover:bg-[#002a59] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >Incluziune pentru Persoanele cu Dizabilități</RouterLink
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
