<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar">
    <RouterLink to="/"><button>Cisco</button></RouterLink>
    <RouterLink to="/python"><button>Python</button></RouterLink>
    <RouterLink to="/html"><button>HTML</button></RouterLink>
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
