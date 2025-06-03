<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <div class="navbar">
      <RouterLink to="/"><button>Cisco</button></RouterLink>
      <RouterLink to="/python"><button>Python</button></RouterLink>
      <RouterLink to="/html"><button>HTML</button></RouterLink>
      <div class="line"></div>
      <a href="https://sulipy.hu/" target="_blank"><button>sulipy.hu</button></a>
      <a href="https://www.w3schools.com/" target="_blank"><button>w3</button></a>
    </div>
    <main class="content">
      <transition name="slide" mode="out-in">
        <RouterView />
      </transition>
    </main>
    <footer>
      <p>Made with ❤️ by <a href="https://xflesx.hu/" target="_blank">Nono</a></p>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  position: relative;
  overflow: hidden;
}

footer {
  position: relative;
  text-align: center;
  padding: 10px;
  background-color: #080808;

  a {
    color: #00bcd4;
    text-decoration: none;
  }
}

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
