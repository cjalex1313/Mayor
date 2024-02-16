<template>
  <div
    class="about-me-container overflow-hidden text-white pt-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-36 xl:gap-56 sm:pb-20 md:pb-44 mb-10"
  >
    <div
      class="avatar-background rounded-[10%] md:rounded-[50%] flex justify-center overflow-hidden md:scale-125 lg:scale-110 md:-translate-x-4 lg:-translate-x-6 xl:-translate-x-10 2xl:-translate-x-14 lg:mt-16 aspect-square"
    >
      <img src="@/assets/images/emilia.png" class="max-w-[70vw] md:max-w-[31vw] object-cover" />
    </div>
    <div class="usr-font lg:mt-16 flex flex-col justify-center p-5 md:pb-20">
      <div class="text-5xl font-bold">Despre mine</div>
      <div class="text-xl mt-12 font-medium max-h-40 sm:max-h-none line-clamp-6 sm:line-clamp-[10]">
        Ca pasionată de dezvoltarea comunității și având o experiență solidă în domeniul imobiliar,
        înțeleg profund impactul pe care spațiile în care trăim și lucrăm îl au asupra calității
        vieții noastre. În calitatea mea de candidat pentru Primăria Craiova, mă angajez să folosesc
        cunoștințele și experiența mea pentru a transforma orașul într-un loc unde inovația,
        sustenabilitatea și comunitatea se întâlnesc pentru a crea un mediu de viață excepțional
        pentru toți craiovenii. Am văzut din interior provocările și oportunitățile pe care le aduce
        dezvoltarea urbană și sunt convinsă că, împreună. Ca pasionată de dezvoltarea comunității și
        având o experiență solidă în domeniul imobiliar, înțeleg profund impactul pe care spațiile
        în care trăim și lucrăm îl au asupra calității vieții noastre. În calitatea mea de candidat
        pentru Primăria Craiova, mă angajez să folosesc cunoștințele și experiența mea pentru a
        transforma orașul într-un loc unde inovația, sustenabilitatea și comunitatea se întâlnesc
        pentru a crea un mediu de viață excepțional pentru toți craiovenii. Am văzut din interior
        provocările și oportunitățile pe care le aduce dezvoltarea urbană și sunt convinsă că,
        împreună.
      </div>
      <div class="mt-8">
        <button class="rounded-md bg-white citeste px-5 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-6 w-6 inline mr-1 translate-y-[-1px]"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="font-bold text-base"> Citeste mai departe </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style>
.about-me-container {
  background: #002a59;
}

@media (min-width: 768px) {
  .about-me-container {
    clip-path: ellipse(150% 100% at 50% 0);
  }
}

.citeste {
  color: #002a59;
}

.avatar-background {
  background: #d9d9d9;
  /* border-radius: 50%; */
}

.despre {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.usr-font {
  font-family: Montserrat;
}
</style>
