<template>
  <div class="contact-container">
    <div class="contact-question text-white text-center pt-20 text-2xl md:text-4xl lg:text-5xl">
      Tu ce îți dorești pentru Craiova?
    </div>
    <div class="text-center mt-20">
      <a href="mailto:contact@emilianeagu.ro">
        <button type="button" class="mailto-button py-1 px-3 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 inline-block mr-2"
          >
            <path
              d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
            />
            <path
              d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
            />
          </svg>

          Scrie-ne părerea ta
        </button>
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style>
.contact-container {
  min-height: 350px;
  background: #002a59;
}

.contact-question {
  font-family: Montserrat;
  font-weight: 700;
  letter-spacing: 0em;
}

.mailto-button {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #002a59;
  background-color: #ffffff;
}
</style>
