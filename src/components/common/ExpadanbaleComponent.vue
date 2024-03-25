<template>
  <div
    class="expandable-container p-4 rounded-lg"
    @click="toggleExpand()"
    :class="{
      'not-expanded': !isExpanded,
      expanded: isExpanded
    }"
  >
    <div class="expandable-header text-lg md:text-xl lg:text-2xl xl:text-4xl flex justify-between">
      <div>
        {{ props.title }}
      </div>
      <div class="mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-9 h-9 transition"
          :class="{
            'icon-rotate': isExpanded
          }"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div
      v-if="isExpanded"
      class="expandable-body text-sm sm:text-base md:text-lg lg:text-xl transition"
    >
      <div>
        {{ props.text }}
      </div>
      <div class="text-center">
        <button
          @click="goToSection"
          type="button"
          class="bg-[#002a59] text-white py-2 px-4 afla-button rounded-lg"
        >
          Afla mai multe
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  title: String,
  text: String,
  id: String
})

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const goToSection = () => {
  router.push({ path: '/despre', query: { id: props.id } })
}
</script>

<style scoped>
.expandable-header {
  font-family: Montserrat;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  color: #002a59;
}

.icon-rotate {
  transform: rotate(45deg);
}

.expandable-container {
  position: relative;
}

.not-expanded:hover {
  background-color: rgba(255, 255, 255, 0.6);
}

.expanded {
  background-color: #ffffff;
}

.expandable-body {
  font-family: Montserrat;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  color: #002a59;
}

.afla-button {
  font-family: Montserrat;
  font-weight: 500;
}
</style>
