<template>
  <div class="grid grid-cols-1 md:grid-cols-2 py-8 px-4 sm:px-6 md:px-10 lg:px-16">
    <div class="flex justify-center md:justify-start">
      <div class="text-center md:text-left">
        <img class="mx-auto md:mx-0" src="@/assets/images/usr-logo.png" />
        <div class="nume mt-2">Emilia Neagu</div>
      </div>
    </div>
    <div class="flex items-end justify-center md:justify-end">
      <ul role="list" class="mt-6 flex justify-center gap-x-6">
        <li>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Facebook</span>
            <img class="h-5 w-5" src="@/assets/images/facebook.png" />
          </a>
        </li>
        <li>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Instagram</span>
            <img class="h-5 w-5" src="@/assets/images/instagram.png" />
          </a>
        </li>
        <li>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">TikTok</span>
            <img class="h-5 w-5" src="@/assets/images/tiktok.png" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.nume {
  font-family: Montserrat;
  font-size: 42px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  color: #002a59;
}
</style>
