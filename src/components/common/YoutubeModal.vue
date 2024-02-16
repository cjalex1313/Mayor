<template>
  <BaseModal @close="emit('close')">
    <template #body>
      <iframe
        class="yt-vid w-full sm:min-w-[50vw] min-h-[70vh] sm:min-h-[50vh]"
        src="https://www.youtube.com/embed/ZJ6ocbYIVvA?si=Kd30gOSUoJ6KYs-S"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </template>
  </BaseModal>
</template>

<script setup>
import BaseModal from './BaseModal.vue'
const emit = defineEmits(['close'])
</script>

<style>
@media screen and (orientation: portrait) {
  /* iframe {
    transform: rotate(90deg);
    height: 90vh;
    width: 90vw;
  } */
}

/* @media screen and (orientation:landscape) {
    // CSS applied when the device is in landscape mode
} */
</style>
