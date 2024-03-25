<script setup>
import HeroComponent from '../components/HeroComponent.vue'
import AboutMeComponent from '../components/AboutMeComponent.vue'
import CampaignComponent from '@/components/CampaignComponent.vue'
import TeamComponent from '@/components/TeamComponent.vue'
import ContactComponent from '@/components/ContactComponent.vue'
import FooterComponent from '@/components/Footre-component.vue'
import USRNavComponent from '@/components/USRNavComponent.vue'
</script>

<template>
  <div>
    <USRNavComponent />
    <HeroComponent />
    <AboutMeComponent />
    <CampaignComponent />
    <!-- <TeamComponent /> -->
    <ContactComponent class="mt-[-96px]" />
    <FooterComponent />
  </div>
</template>

<script setup></script>
