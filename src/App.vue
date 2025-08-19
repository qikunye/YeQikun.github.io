<template>
  <div class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
    <Suspense>
      <template #default>
        <div>
          <Navbar />
          <HeroSection />
          <Counter />
          <Services />
          <Skills />
          <Whyme />
          <Projects />
          <Contact />
          <Footer />
          <BackToTop />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      </template>
    </Suspense>

  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const Navbar = defineAsyncComponent(() => import('@/components/Navbar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const Counter = defineAsyncComponent(() => import('@/components/Counter.vue'));
const Services = defineAsyncComponent(() => import('@/components/Services.vue'));
const Skills = defineAsyncComponent(() => import('@/components/Skills.vue'));
const Whyme = defineAsyncComponent(() => import('@/components/Whyme.vue'));
const Projects = defineAsyncComponent(() => import('@/components/Projects.vue'));
const Contact = defineAsyncComponent(() => import('@/components/Contact.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'));
import LoadingSpinner from '@/components/LoadingSpinner.vue';
</script>

