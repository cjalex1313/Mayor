<template>
  <div>
    <ExpadanbaleComponent
      v-for="elem in props.elementsProp"
      class="my-3"
      :key="elem.title"
      :title="elem.title"
      :text="elem.text"
      :id="elem.id"
    />
  </div>
</template>

<script setup>
import ExpadanbaleComponent from './ExpadanbaleComponent.vue'
const props = defineProps(['elementsProp'])
</script>
