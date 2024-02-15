<template>
  <div class="hero-container grid grid-cols-1 sm:grid-cols-12">
    <div class="bg-red-400 opacity-50 sm:col-span-7">Text</div>
    <div class="bg-blue-400 opacity-50 sm:col-span-5">Video</div>
  </div>
</template>

<script setup></script>

<style>
.hero-container {
  min-height: 800px;
  background-image: url('../assets//images//primarie.png');
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  z-index: 0;
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
