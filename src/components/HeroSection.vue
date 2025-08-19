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

      <aside class="container flex justify-center lg:justify-end mt-20 lg:mt-0 items-center flex-wrap">
        <figure class="card relative m-[30px] w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
          <div
            class="relative w-[90%] h-[90%] mx-auto my-auto flex items-center justify-center z-[2] translate-y-[20px] translate-x-[5px]">
            <img src="/images/selfie2.jpg" alt="Photo of Qikun"
              class="w-full h-full object-cover rounded-[inherit]" loading="lazy" />
          </div>
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


<!-- check for errors: <template >
    <section class = "flex justify-centre items-centre dark:text-white min-h-screen mt-20 lg:mt-0">
        <header class = "absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc]
        via[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block">
        </header>
        <header class = "absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc]
        via[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block">
        </header>
        <main class="absolute grid lg:grid-cols-2 grid-cols-1 items-centre p-2 lg:p-8">
            <header class="text-centre lg:text-left" >
                <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
                    Hi, I'm <span class="text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary">Qikun</span>
                </h1>
                <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
                    idjwidjdoiwjdweidjwidjw
                </p>
                <div class = "mt-6 flex justify-centre lg:justify-start">
                    <Button label="Hire me" />
                    <a href="" class="font-semibold text-lg w-[10rem] h-[55px] dark:text-secondary rounded-full ml-2 border-2 
                    dark:border-secondary hover:scale-105 bg-white dark:bg-transparent flex justify-center items-center text-primary border-primary">
                <Icon icon="line-md:download-loop" class="text-3xl"/>
                <span class="ml-1">Resume</span>
                </a>
                </div>


            </header>
            <aside class="container flex justify-center lg:justify-end mt-20 lg:mt-0 items-center flex-wrap">
                <figure class="card relative m-[30px] md:w-[420px] md:h-[420px] md:before:w-[450px] md:before:h-[450px] w-[280px] h-[350px]
                before:w-[300px] before:h-[300px] before:border-[25px] before:border-primary before:shadow-[7px_7px_21px_primary,_-7px_-7px_21px_primary] dark:before:border-secondary dark:before:shadow-[7px_7px_21px_secondary,_-7px_-7px_21px_secondary]">
                <div class="relative w-full h-full bg-cover transform translate-x-[10px] translate-y-[10px] ">
                    <img src = "@/assets/images/selfie2.jpg" alt="Hero picture" class="max-w-1/2" loading="lazy">
                </div>
            </figure>
            </aside>
        </main>
        <svg class="hidden">
            <filter id="wavy1">
                <feTurbulence x="0" y="0" basefrequency="0.2" numOctaves="5" seed="1"></feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="30" />


            </filter>
        </svg>
    </section>
   
</template>
<script setup>
import Button from '@/components/UI/Button.vue';
</script>
<style scoped>
.container .card :before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    z-index:1;
    background:transparent;
}
.container .card:nth-of-type(1)::before{
    filter: url(#wavy1)
}


</style> -->