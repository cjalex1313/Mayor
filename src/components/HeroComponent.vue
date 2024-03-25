<template>
  <div class="hero-container grid grid-cols-1 sm:grid-cols-12 overflow-hidden">
    <div class="background-image"></div>
    <div class="sm:col-span-12 z-10">
      <!-- <div class="px-5 sm:px-10 md:px-20 lg:px-28"> -->
      <div class="flex justify-center items-center sm:translate-x-3 md:translate-x-0">
        <div class="flex flex-col justify-center sm:px-10">
          <img
            class="w-24 md:w-32 lg:w-40 mt-48 sm:mt-72 lg:mt-72"
            src="@/assets/images/usr-logo.png"
          />
          <img
            class="mt-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
            src="@/assets/images/nume.png"
          />
          <!-- <img
            class="mt-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
            src="@/assets/images/subtext.png"
          /> -->
          <div
            class="m-sub text-[25px] sm:text-[30px] md:text-[35px] lg:text-[42px] xl:text-[48px]"
          >
            Primar pentru Craiova
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="sm:col-span-5 z-10 flex justify-center items-center min-h-[500px]">
      <img
        @click="setYoutubeState(true)"
        class="w-28 h-28 cursor-pointer hover:scale-125 transition-all"
        src="@/assets/images/play.png"
      />
    </div>
    <YoutubeModal
      ref="ytModal"
      v-if="isYoutubeOpen"
      @click-outside="setYoutubeState(false)"
      @close="setYoutubeState(false)"
    /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import YoutubeModal from './common/YoutubeModal.vue'

const ytModal = ref(null)

const isYoutubeOpen = ref(false)
const setYoutubeState = (val) => {
  isYoutubeOpen.value = val
}

onClickOutside(ytModal, () => {
  setYoutubeState(false)
})
</script>

<style>
.hero-container {
  min-height: 800px;
  position: relative;
  z-index: 0;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets//images//primarie.png');
  background-size: cover;
  background-position: center;
  filter: blur(10px);
}

.m-name {
  font-family: Montserrat;
  font-weight: 900;
  line-height: 96px;
  letter-spacing: 0em;
  text-align: left;
  color: #002a59;
}

.m-sub {
  font-family: Montserrat;
  font-weight: 800;
  line-height: 48px;
  letter-spacing: 4px;
  text-align: left;
  color: #ff0021;
}

.hero-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6); /* Adjust the opacity as needed */
  z-index: 1; /* Ensure the pseudo-element is above the background image */
}
</style>
