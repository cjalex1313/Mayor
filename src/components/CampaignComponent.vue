<template>
  <div
    class="pt-12 min-h-[450px] relative campaign-container -z-10 overflow-hidden -translate-y-24"
  >
    <div class="campaign-bg"></div>
    <div class="z-20 relative mt-28">
      <div class="text-3xl md:text-7xl text-center cta">
        Un viitor mai bun pentru comunitatea noastră
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.campaign-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
