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
  <div class="view">
    <transition name="slide" mode="out-in">
      <RouterView />
    </transition>
  </div>
  <footer>
    <p>Made with ❤️ by <a href="https://xflesx.hu/" target="_blank">Nono</a></p>
  </footer>
</template>

<style>
footer {
  position: block;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: #080808;

  a {
    color: #00bcd4;
    text-decoration: none;
  }
}

.view {
  margin-bottom: 60px;
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
