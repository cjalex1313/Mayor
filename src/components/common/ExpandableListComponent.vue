<template>
  <div>
    <ExpadanbaleComponent
      v-for="elem in props.elementsProp"
      class="my-3"
      :key="elem.title"
      :title="elem.title"
      :text="elem.text"
    />
  </div>
</template>

<script setup>
import ExpadanbaleComponent from './ExpadanbaleComponent.vue'
const props = defineProps(['elementsProp'])
</script>
