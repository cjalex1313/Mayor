<template>
  <div
    class="about-me-container relative text-white pt-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 mb-10 z-20"
  >
    <div class="avatar-background flex justify-center overflow-hidden aspect-square z-10">
      <img src="@/assets/images/EmiliaSquare.jpg" class="object-cover md:rounded-full" />
    </div>
    <div class="usr-font flex flex-col justify-center p-5">
      <div class="text-5xl font-bold text-[#002a59]">Despre mine</div>
      <div class="text-xl mt-12 font-medium text-gray-700">
        <p>
          Asemenea oricărui cetățean al municipiului, am întâmpinat dificultăți în interacțiunile cu
          administrația locală şi am cunoscut neajunsurile unui oraș în care interesul politic și
          nepotismul primează în faţa competenţei. Am văzut taxare excesivă și direcţionarea banilor
          publici către companii private, fără transparență. Am privit cum craiovenii părăseau
          orașul nostru pentru a găsi în alte locuri un trai mai bun. De aceea, mulți cred că este
          inutil să votezi pentru că toți politicienii sunt la fel! Dar eu sunt altfel, iar votul
          tău este ocazia de a spune că te-ai săturat de actuala administrație.
        </p>
        <!-- More text content here -->
      </div>
      <div class="mt-8">
        <button
          type="button"
          @click="goToAbout()"
          class="citeste-button bg-[#002a59] text-white hover:bg-[#004080]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            class="h-6 w-6 inline-block mr-2 align-text-top"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          Citeste mai departe
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToAbout = () => {
  router.push({ name: 'despre' })
}
</script>

<style>
.about-me-container {
  background-color: white;
}

@media (max-width: 768px) {
  .avatar-background {
    justify-content: flex-start;
  }
}

@media (min-width: 768px) {
  .avatar-background {
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .avatar-background img {
    height: 80%;
    width: auto;
    border-radius: 50%;
  }
}

.citeste-button {
  padding: 1rem 2rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  border-radius: 0.5rem;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.citeste-button:hover {
  background-color: #002a59;
  color: white;
}

.avatar-background {
  background-color: white;
}

.usr-font {
  font-family: Montserrat;
  color: #002a59;
}
</style>
