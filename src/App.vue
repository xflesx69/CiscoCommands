<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar">
    <RouterLink to="/"><button>Cisco</button></RouterLink>
    <RouterLink to="/python"><button>Python</button></RouterLink>
    <RouterLink to="/html"><button>HTML</button></RouterLink>
    <div class="line"></div>
    <a href="https://sulipy.hu/" target="_blank"><button>sulipy.hu</button></a>
    <a href="https://www.w3schools.com/" target="_blank"><button>w3</button></a>
  </div>
  <transition name="slide" mode="out-in">
    <RouterView />
  </transition>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
