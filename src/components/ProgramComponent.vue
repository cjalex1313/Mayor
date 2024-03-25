<template>
  <div v-if="props.items">
    <div v-for="item in props.items" :key="item.title" :id="item.id" class="mt-6">
      <img :src="item.image" alt="" class="aspect-[5/2] w-full object-cover xl:rounded-3xl mb-10" />
      <div class="mx-auto max-w-full lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight usr-color sm:text-4xl">{{ item.title }}</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          {{ item.intro }}
        </p>
      </div>
      <dl class="mx-auto mt-16 grid gap-x-8 gap-y-8 text-base leading-7 grid-cols-1">
        <div v-for="point in item.subpoints" :key="item.subTitle">
          <dt class="font-semibold usr-color">{{ point.subTitle }}</dt>
          <dd class="mt-1 text-gray-600">
            {{ point.text }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['items'])
</script>
