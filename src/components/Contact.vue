<template>
  <section class="mt-32" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <div class="flex justify-center space-x-8 md:space-x-16">
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/ye-qikun-887aa0265"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-600 hover:text-blue-700 transition-transform transform hover:scale-125"
        >
          <Icon icon="fa-brands:linkedin" style="font-size: 2.8rem" />
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/qikunye"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-125"
        >
          <Icon icon="fa-brands:github" style="font-size: 2.8rem" />
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com/kunsanity?igsh=MTRlb2FsYjh6bng4cg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-600 hover:text-pink-500 transition-transform transform hover:scale-125"
        >
          <Icon icon="fa-brands:instagram" style="font-size: 2.8rem" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
import { Icon } from '@iconify/vue';
</script>

