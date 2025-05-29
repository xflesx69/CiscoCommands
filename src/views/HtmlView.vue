<script lang="ts">
import CodeBlock from '@/components/CodeBlock.vue';

export default {
  name: 'PythonView',
  components: {
    CodeBlock
  },
  data() {
    return {
    };
  },
}
</script>

<template>
  <main class="container">
    <div class="navbar">
      <a href="#if-else"><button>If-else</button></a>
    </div>
    <div class="box">
      <h1></h1>

      <div class="part" id="if-else">
        <h2>Alapok</h2>
        <p>Ha esetleg nem lenne megadva az alap ágazati, amit kétlek. <b>De azért itt van</b> egy alap, hogy hogyan
          kell felépíteni egy HTML weblapot.</p>
        <CodeBlock
          :code="`<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n</body>\n</html>`" />
        <h3>Kimenet:</h3>
        <CodeBlock code="" />
      </div>
    </div>
    <hr class="line" />
  </main>
</template>

<style>
.navbar {
  position: sticky;
  top: 0;
  background-color: #111;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  border-bottom: 1px solid #222;
  z-index: 100;
}

.navbar a button {
  background-color: transparent;
  border: 1px solid #333;
  color: #ccc;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  cursor: pointer;
}

.navbar a button:hover {
  background-color: #222;
  color: #fff;
  border-color: #555;
}

.navbar .line {
  width: 1px;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.15);
}

.box {
  background-color: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.03);
  margin-bottom: 2rem;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: #ffffff;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
}

h2 {
  font-size: 1.4rem;
  margin-top: 2rem;
  color: #90cdf4;
}

h3 {
  font-size: 1.1rem;
  margin-top: 1rem;
  color: #63b3ed;
}

h4 {
  font-size: 0.95rem;
  margin-top: 0.75rem;
  color: #4299e1;
  font-style: italic;
}

p {
  margin: 0.75rem 0;
  line-height: 1.6;
  color: #ddd;
}

hr.line {
  border: none;
  border-top: 1px solid #333;
  margin: 3rem 0;
}

.part {
  margin-bottom: 3rem;
}
</style>
