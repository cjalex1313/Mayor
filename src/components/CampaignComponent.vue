<template>
  <div
    class="pt-12 min-h-[450px] relative campaign-container overflow-hidden -translate-y-24 pb-24"
  >
    <div class="campaign-bg"></div>
    <div class="z-20 relative mt-28">
      <div
        class="px-6 md:px-16 lg:px-36 xl:px-52 text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center cta"
      >
        Un viitor mai bun pentru comunitatea noastră
      </div>
      <ExpandableListComponent
        class="px-9 md:px-20 lg:px-40 xl:px-60 2xl:px-80 mt-12"
        :elementsProp="elements"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ExpandableListComponent from './common/ExpandableListComponent.vue'

const elements = ref([
  {
    title: 'Promovarea culturii și a patrimoniului local',
    text: 'Oferirea de mai multe spații verzi și parcuri bine întreținute poate îmbunătăți calitatea vieții, oferind locuitorilor locuri de relaxare și recreere, precum și îmbunătățind calitatea aerului în oraș.'
  },
  {
    title: 'Sprijin pentru antreprenoriatul local',
    text: 'Oferirea de mai multe spații verzi și parcuri bine întreținute poate îmbunătăți calitatea vieții, oferind locuitorilor locuri de relaxare și recreere, precum și îmbunătățind calitatea aerului în oraș.'
  },
  {
    title: 'Dezvoltarea spațiilor verzi și a parcurilor',
    text: 'Oferirea de mai multe spații verzi și parcuri bine întreținute poate îmbunătăți calitatea vieții, oferind locuitorilor locuri de relaxare și recreere, precum și îmbunătățind calitatea aerului în oraș.'
  }
])
</script>

<style>
.campaign-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background-image: url('../assets//images/campanie.png');
  background-size: contain;
  background-position: center;
  filter: blur(10px);
}

.campaign-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6); /* Adjust the opacity as needed */
  z-index: 1; /* Ensure the pseudo-element is above the background image */
}

.cta {
  font-family: Montserrat;
  font-weight: 700;
  letter-spacing: 0em;
  color: #002a59;
}
</style>
