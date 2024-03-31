<template>
  <div
    class="expandable-container p-6 rounded-lg shadow-md"
    @click="toggleExpand()"
    :class="{ 'not-expanded': !isExpanded, expanded: isExpanded }"
  >
    <div
      class="expandable-header text-lg md:text-xl lg:text-2xl xl:text-4xl flex justify-between items-center"
    >
      <h2>{{ props.title }}</h2>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 cursor-pointer transition-transform"
          :class="{ 'rotate-180': isExpanded }"
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
      class="expandable-body text-sm sm:text-base md:text-lg lg:text-xl mt-4 transition-all"
    >
      <p>{{ props.text }}</p>
      <div class="text-center mt-4">
        <button @click.stop="goToSection" type="button" class="citeste-button">
          Afla mai multe
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  title: String,
  text: String,
  id: String,
  openedId: String
})

const emits = defineEmits(['expandToggled'])

const isExpanded = computed(() => props.id === props.openedId)

const toggleExpand = () => {
  emits('expandToggled', props.id)
}

const goToSection = () => {
  router.push({ path: '/despre', query: { id: props.id } })
}
</script>

<style scoped>
.expandable-container {
  transition: background-color 0.3s;
  cursor: pointer;
  border: 1px solid #eaeaea;
  background-color: #f8f9fa;
}

.expandable-header {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #002a59;
  gap: 10px;
}

.rotate-180 {
  transform: rotate(180deg);
}

.expandable-body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #002a59;
}

.not-expanded:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.expanded {
  background-color: #ffffff;
}

.citeste-button {
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  border-radius: 0.375rem;
  transition:
    background-color 0.3s,
    transform 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #002a59;
  color: white;
}

.citeste-button:hover {
  background-color: #004080;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}
</style>
