<template>
  <div
    class="pt-12 min-h-[450px] relative campaign-container overflow-hidden -translate-y-24 pb-24"
  >
    <div class="campaign-bg"></div>
    <div class="z-20 relative mt-28">
      <div
        class="px-6 md:px-16 lg:px-36 xl:px-52 text-xl md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl text-center cta"
      >
        Transformăm Craiova în orașul în care oamenii își doresc să trăiască, să studieze, să
        lucreze și să investească
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
    title: 'Mai Mulți Bani în Buzunarul Tău',
    text: 'Reducerea taxelor locale și cheltuirea banului public cu responsabilitate și transparență sunt prioritare pentru noi.',
    id: 'maiMultiBani'
  },
  {
    title: 'Pregătim copilul tău pentru succes',
    text: 'Punem accent pe educație, pentru că vrem să fie ușor pentru fiecare copil să învețe și să crească. Ne angajăm să construim și să îmbunătățim creșe, grădinițe și școli moderne. Nu uităm nici de școlile tehnice pentru cei care visează la o carieră practică. Pe scurt, ne dorim ca toți copiii să aibă tot ce le trebuie pentru un start bun în viață.',
    id: 'pregatimCopilulTauPentruSucces'
  },
  {
    title: 'Cartierul pe care îl meriți',
    text: 'Fiecare cartier contează: Ne asigurăm că fiecare cartier al Craiovei beneficiază de infrastructură modernă și condiții de viață optime.',
    id: 'cartierulPeCareIlMeriti'
  },
  {
    title: 'Sănătate în orașul tău, mai aproape de tine',
    text: 'Prea mulți craioveni aleg să plece în Capitală sau în alte orașe atunci când au nevoie de servicii medicale. Acesta este cel mai important indicator că eforturile administrației locale în susținerea și dezvoltarea unităților medicale aflate în subordinea sa trebuie să continue. Există o serie de probleme de ordin sanitar cu care locuitorii Craiovei se confruntă în mod special, iar acestea au nevoie de un set amplu de măsuri.',
    id: 'sanatateInOrasulTau'
  },
  {
    title: 'Primăria în slujba ta',
    text: 'Facem Primăria total transparentă, modernă și eficientă, accesibilă online și prezentă în toate cartierele orașului.',
    id: 'primariaInSlujbaTa'
  },
  {
    title: 'Salvăm patrimoniul cultural al Craiovei',
    text: 'Ca parte a Craiovei noastre moderne, vom proteja, restaura și celebra moștenirea, tradițiile, talentele și monumentele noastre arhitecturale locale, prin experiențe educaționale, recreative și culturale unice.',
    id: 'salvamPatrimoniul'
  },
  {
    title: 'Oraș curat. Aer pur. Craioveni sănătoși',
    text: 'Poluarea aerului, gestionarea inadecvată a deșeurilor, praful rezultat din construcții și din necurățarea străzilor reprezintă probleme care ne afectează pe toți, ce au consecințe directe asupra sănătății și calității vieții tuturor locuitorilor Craiovei.',
    id: 'orasCurat'
  },
  {
    title: 'Incluziune pentru Persoanele cu Dizabilități',
    text: 'Îmbunătățim calitatea vieții persoanelor cu dizabilități prin accesibilizarea instituțiilor și a mediului public, organizând târguri pentru locuri de muncă și înființând un comitet dedicat analizei problemelor cu care se confruntă.',
    id: 'incluziune'
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
  background-size: cover;
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
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 1;
}

.cta {
  font-family: Montserrat;
  font-weight: 700;
  letter-spacing: 0em;
  color: #002a59;
}
</style>
