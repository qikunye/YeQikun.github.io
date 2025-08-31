<template>
  <section data-aos="zoom-in" class="flex justify-center items-center dark:text-white min-h-screen mt-20 lg:mt-0">
    <!-- Background gradient blob -->
    <div
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block">
    </div>

    <main class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8">
      <header class="text-center lg:text-left">
        <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
          Hi, I'm <span class="text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary">Qikun</span>
        </h1>
        <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
          A sophomore Information Systems student at SMU specializing in Business Analytics and AI. I’m
          passionate about leveraging large language models and prompt engineering to solve business challenges, with a
          strong interest in AI-driven stock analysis and quantitative research. I have hands-on experience building
          data pipelines, interactive dashboards, and practical AI solutions that deliver results.</p>
        <div class="mt-6 flex justify-center lg:justify-start">
          <Button label="Hire me" />
          <a href="https://drive.google.com/drive/u/0/folders/1QzO-9iAbfEiKkQ49N_AKcPczYtDkvPh1"
            class="font-semibold text-lg w-[10rem] h-[55px] dark:text-secondary rounded-full ml-2 border-2 dark:border-secondary hover:scale-105 bg-white dark:bg-transparent flex justify-center items-center text-primary border-primary">
            <Icon icon="line-md:download-loop" class="text-3xl" />
            <span class="ml-1">Resume</span>
          </a>
        </div>
      </header>

      <aside class="flex justify-center lg:justify-end mt-20 lg:mt-0 items-center">
  <figure class="relative group" aria-label="Portrait of Qikun Ye">
    <!-- Gradient “ring” wrapper -->
    <div
      class="relative w-[300px] md:w-[420px] aspect-square rounded-3xl p-[2px]
             bg-[conic-gradient(at_50%_50%,_#00c6cc_0deg,_#785ae4_140deg,_#00c6cc_320deg)]
             opacity-90"
    >
      <!-- Clean frame -->
      <div
        class="h-full w-full rounded-[inherit] overflow-hidden
               ring-1 ring-black/5 dark:ring-white/10
               shadow-xl shadow-black/10 dark:shadow-black/40
               bg-white dark:bg-zinc-900"
      >
        <!-- Actual image -->
        <img
          src="/images/selfie2.jpg"
          alt="Photo of Qikun"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover rounded-[inherit]
                 [transform:translateZ(0)]
                 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 420px, 300px"
        />
      </div>
    </div>

    <!-- Subtle ambient glow -->
    <div
      aria-hidden="true"
      class="absolute -inset-6 -z-10 rounded-[2.25rem]
             bg-gradient-to-tr from-[#00c6cc]/25 via-transparent to-[#785ae4]/25
             blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"
    />
  </figure>
</aside>


      
    </main>
    <!-- SVG filter definition -->
    <svg class="hidden">
      <filter id="wavy1">
        <feTurbulence x="0" y="0" baseFrequency="0.2" numOctaves="5" seed="1"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>
  </section>
</template>

<script setup>
import Button from '@/components/UI/Button.vue';
</script>
<style scoped>
.container .card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border: 20px solid yellow;
  /* you can change the border width or color */
  box-sizing: border-box;
  pointer-events: none;
  /* prevent it from blocking clicks */
}


.container .card:nth-of-type(1)::before {
  filter: url(#wavy1)
}
</style>


