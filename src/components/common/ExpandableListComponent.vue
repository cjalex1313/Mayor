<template>
  <div>
    <ExpadanbaleComponent
      v-for="elem in props.elementsProp"
      class="my-3"
      @expandToggled="toggleClicked"
      :key="elem.title"
      :title="elem.title"
      :text="elem.text"
      :id="elem.id"
      :openedId="openedId"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import va from '@vercel/analytics'
import ExpadanbaleComponent from './ExpadanbaleComponent.vue'
const props = defineProps(['elementsProp'])
const openedId = ref('')
const toggleClicked = (id) => {
  if (openedId.value == id) {
    openedId.value = ''
  } else {
    va.track('ProgramExpand', {
      id: id
    })
    openedId.value = id
  }
}
</script>
