<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar">
    <RouterLink to="/"><button>Cisco</button></RouterLink>
    <RouterLink to="/python"><button>Python</button></RouterLink>
  </div>
  <RouterView />
</template>
