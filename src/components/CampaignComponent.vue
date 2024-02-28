<template>
  <div
    class="pt-12 min-h-[450px] relative campaign-container overflow-hidden -translate-y-24 pb-24"
  >
    <div class="campaign-bg"></div>
    <div class="z-20 relative mt-28">
      <div
        class="px-6 md:px-16 lg:px-36 xl:px-52 text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center cta"
      >
        Cum vom face din Craiova un oraș modern
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
    title: 'Creșterea venitului net',
    text: 'Promovăm dezvoltarea afacerilor existente și a celor noi pentru a stimula investițiile și a crea mai multe oportunități de angajare, în timp ce reducem impozitele locale, consolidăm bugetul orașului și gestionăm eficient cheltuielile.'
  },
  {
    title: 'Îmbunătățirea educației pentru copiii noștri',
    text: 'Facilităm accesul la grădinițe, creșe și programe după școală, garantând în același timp că școlile existente dispun de infrastructura adecvată, personal calificat, resurse și curriculum pentru a oferi o educație sigură și de calitate. În plus, oferim cursuri tehnice și profesionale de înaltă calitate, adaptate nevoilor pieței muncii.'
  },
  {
    title: 'Asistență medicală mai bună',
    text: 'Construim un spital pentru copii, un proiect esențial pentru sănătatea și binele comunității noastre.'
  },
  {
    title: 'Îmbunătățirea vieții sociale și a cartierelor',
    text: 'Ne concentrăm pe multiple aspecte pentru a crea un oraș mai plăcut și mai funcțional pentru toți locuitorii. Astfel, ne propunem să cream și să îmbunătățim facilitățile sportive, zonele de joacă, spațiile verzi și centrele sociale. În același timp, ne dorim să reducem congestia de trafic și să rezolvăm problemele legate de parcările insuficiente. De asemenea, ne angajăm să reducem nivelul poluării aerului, al gunoiului și al zgomotului în oraș. În plus, ne concentrăm eforturile spre furnizarea și îmbunătățirea serviciilor de bază, precum energia electrică, asfaltul și canalizarea.'
  },
  {
    title: 'O primarie care lucreaza pentru craioveni',
    text: 'Ne angajăm să simplificăm procedurile administrative și să promovăm digitalizarea, în timp ce suntem prezenți pentru a asculta și a rezolva rapid și eficient problemele dumneavoastră, și să aplicăm politici de angajare și promovare bazate pe competență și transparență, nu pe nepotism.'
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
