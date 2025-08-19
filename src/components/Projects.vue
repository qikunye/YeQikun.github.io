<template>
    <section id="projects" class="relative w-11/12 px-16 mx-auto">
      <SectionHeader title="My Projects" />
  
      <!-- Custom Navigation Buttons -->
      <button class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
        <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
      </button>
      <button class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
        <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
      </button>
  
      <!-- Swiper Component -->
      <Swiper
        effect="coverflow"
        :grabCursor="true"
        :centeredSlides="true"
        slidesPerView="auto"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }"
        :navigation="navigationOptions"
        :loop="true"
        :pagination="true"
        :modules="[EffectCoverflow, Navigation]"
        class="max-w-full mt-32"
      >
        <SwiperSlide
          v-for="(project, index) in projects"
          :key="index"
          class="max-w-[300px]"
        >
          <ProjectCard
            :title="project.title"
            :description="project.description"
            :image="'/src/assets/images/' + project.image"
            :tags="project.tags"
            :codeLink="project.codeLink"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import SectionHeader from "@/components/UI/SectionHeader.vue";
  import ProjectCard from "@/components/UI/ProjectCard.vue";
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { EffectCoverflow, Navigation } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  
  const navigationOptions = {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  };
  
  const projects = ref([
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with HTML, CSS, and JavaScript.',
      image: 'selfie2.jpg',
      tags: ['HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/qikunye'
    },
    {
      title: 'Alpaca Live SMA Crossover Trading Bot',
      description: 'Using SMA(20/50) + Bollinger(1σ) with simple risk sizing.',
      image: 'trade_graph1.png',
      tags: ['API', 'Matplotlib', 'Pandas'],
  
      codeLink: 'https://github.com/qikunye/Alpaca-Live-TradingBot'
    },
    {
      title: 'ML Trading Bot ',
      description: 'ML ensemble backtests with XGBoost + LSTM',
      image: 'trade_graph2.png',
      tags: ['XGB', 'Tensorflow', 'Transformers'],
  
      codeLink: 'https://github.com/qikunye/-Multi-Asset-ML-Trading-Bot-XGBoost-LSTM-'
    },
    {
      title: 'Gold Price Prediction System ',
      description: 'Forecasts the next 5 days of gold prices using a 2-layered LSTM model in Tensorflow',
      image: 'gold_graph.png',
      tags: ['yfinance', 'Tensorflow', 'Pandas'],
  
      codeLink: 'https://github.com/qikunye/Gold-Price-Prediction-System'
    },
    {
      title: 'Retrieval-Augmented Generation (RAG) chatbot ',
      description: 'RAG Study Assistant (PDF)',
      image: 'chatbot.png',
      tags: ['langchain', 'OpenAI', 'Sentence-Transformers'],
  
      codeLink: 'https://github.com/qikunye/Education-Chatbot'
    }
  ]);
  </script>
  
  <style>
  .swiper-button-prev,
  .swiper-button-next {
    cursor: pointer;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  