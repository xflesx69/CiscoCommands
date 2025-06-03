<script lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

export default {
  name: 'PythonView',
  components: {
    CodeBlock,
  },
  data() {
    return {
      link: '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">',
      examplebutton: '<button class=\" btn btn-primary\">Bootstrap gomb</button>`',
    }
  },
}
</script>

<template>
  <main class="container">
    <div class="navbar">
      <a href="#alapok"><button>Alapok</button></a>
      <a href="#css"><button>CSS</button></a>
      <a href="#bootstrap"><button>Bootstrap</button></a>
    </div>

    <div class="box">
      <div class="part" id="alapok">
        <h2>Alapok</h2>
        <p>HTML oldal alapstruktúrája:</p>
        <CodeBlock
          :code="`<!DOCTYPE html>\n<html>\n<head>\n<title>Oldal címe</title>\n</head>\n<body>\n<h1>Üdv!</h1>\n<p>Ez egy bekezdés.</p>\n</body>\n</html>`" />
        <h3>Kimenet:</h3>
        <div class="iframe">
          <iframe
            srcdoc="<!DOCTYPE html><html><head><title>Oldal címe</title></head><body><h1>Üdv!</h1><p>Ez egy bekezdés.</p></body></html>"
            frameborder="0"></iframe>
        </div>

        <h4>Gyakori HTML tagek</h4>
        <CodeBlock
          :code="`<h1>Főcím</h1>\n<h2>Alcím</h2>\n<p>Ez egy bekezdés.</p>\n<!-- Új sor -->\n<br>\n<!-- Link -->\n<a href='https://example.com'>Kattints ide!</a>\n<!-- Kép beszúrás -->\n<img src='https://via.placeholder.com/150' alt='Példa kép'>\n<!-- Lista -->\n<ul>\n  <li>Listaelem 1</li>\n  <li>Listaelem 2</li>\n</ul>\n<!-- Táblázat -->\n<table border='1'>\n  <tr><th>Név</th><th>Kor</th></tr>\n  <tr><td>Anna</td><td>16</td></tr>\n</table>`" />

        <h3>Kimenet:</h3>
        <div class="iframe">
          <iframe srcdoc="<!DOCTYPE html>
      <html>
      <body>
        <h1>Főcím</h1>
        <h2>Alcím</h2>
        <p>Ez egy bekezdés.</p>
        <!-- Új sor -->
        <br>
        <!-- Link -->
        <a href='https://example.com' target='_blank'>Kattints ide!</a>
        <!-- Új sor -->
        <br>
        <!-- Kép -->
        <img src='https://mozisarok.hu/img/logos/logo-w64.avif' alt='Példa kép'>
        <!-- Lista -->
        <ul>
          <li>Listaelem 1</li>
          <li>Listaelem 2</li>
        </ul>
        <!-- Táblázat -->
        <table border='1'>
          <tr><th>Név</th><th>Kor</th></tr>
          <tr><td>Anna</td><td>16</td></tr>
        </table>
      </body>
      </html>" frameborder="0"></iframe>
        </div>

        <h4>Magyarázat</h4>
        <ul>
          <li><code>&lt;h1&gt;</code> – főcímsor, <code>&lt;h2&gt;</code> – alcím</li>
          <li><code>&lt;p&gt;</code> – bekezdés (paragrafus)</li>
          <li><code>&lt;br&gt;</code> – sortörés</li>
          <li><code>&lt;a&gt;</code> – hivatkozás (link)</li>
          <li><code>&lt;img&gt;</code> – kép beszúrása</li>
          <li><code>&lt;ul&gt;</code> + <code>&lt;li&gt;</code> – rendezetlen lista</li>
          <li><code>&lt;table&gt;</code> + <code>&lt;tr&gt;</code> + <code>&lt;td&gt;</code>/<code>&lt;th&gt;</code> –
            táblázat</li>
        </ul>
      </div>
    </div>

    <hr class="line" />
    <!-- CSS -->
    <div class="box">
      <div class="part" id="css">
        <h2>CSS alapok</h2>
        <p>A CSS segítségével megformázhatjuk az elemeket. Például:</p>
        <CodeBlock
          :code="`h1 {\n  color: red;\n  text-align: center;\n}\n\np {\n  font-size: 18px;\n  background-color: #f0f0f0;\n  padding: 10px;\n}`" />
        <h3>Kimenet:</h3>
        <div class="iframe">
          <iframe srcdoc="<!DOCTYPE html>
            <html>
            <head>
              <style>
                h1 { color: red; text-align: center; }
                p { font-size: 18px; background-color: #f0f0f0; padding: 10px; }
              </style>
            </head>
            <body>
              <h1>Címsor</h1>
              <p>Formázott bekezdés</p>
            </body>
            </html>" frameborder="0">
          </iframe>
        </div>

        <h3>Hogyan is épül össze a css?</h3>
        <CodeBlock :code="`.pelda {\n color: red;\n text-align:center;\n}`"></CodeBlock>
        <p>Az előző példában a <code>.pelda</code> egy osztály, amit a HTML elemekhez rendelhetünk.</p>
        <p>Az osztályokat a HTML-ben a <code>class</code> attribútummal használjuk:</p>
        <CodeBlock :code="`<p class='pelda'>Ez egy példa bekezdés.</p>`" />
        <h3>Kimenet:</h3>
        <div class="iframe">
          <iframe srcdoc="<!DOCTYPE html>
            <html>
            <head>
              <style>
                .pelda { color: red; text-align: center; }
              </style>
            </head>
            <body>
              <p class='pelda'>Ez egy példa bekezdés.</p>
            </body>
            </html>" frameborder="0"></iframe>
        </div>

        <p>Egy css rész úgy áll össze hogy elsőnek megadjuk a nevét az adott osztálynak, id-nek vagy tag-nek.</p>
        <div style="font-weight: 800;">
          <p>Ha egy osztályról van szó akkor az osztály neve elején szerpel a <code>"pont"</code> például:
            <code>.pelda</code>
          </p>
          <p>Ha egy id-ről van szó akkor az id neve elején szerpel a <code>"hashtag"</code> például: <code>#pelda</code>
          </p>
          <p>Ha egy tag-ről van szó akkor csak a tag neve szerepel például: <code>p</code></p>
        </div>
        <br>

        <h4>További CSS stílus példák</h4>
        <CodeBlock
          :code="`div {\n  margin: 20px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0,0,0,0.2);\n  opacity: 0.9;\n}`" />

        <h4>Betűtípus és árnyék</h4>
        <CodeBlock :code="`h2 {\n  font-family: Arial, sans-serif;\n  text-shadow: 1px 1px 2px gray;\n}`" />

        <h4>Lebegtetés és szélesség</h4>
        <CodeBlock :code="`img {\n  float: right;\n  width: 150px;\n  height: auto;\n}`" />

        <h4>Hover effektus</h4>
        <CodeBlock :code="`button:hover {\n  background-color: #007bff;\n  color: white;\n}`" />
        <h3>Kimenet (hover és float):</h3>
        <div class="iframe">
          <iframe srcdoc="<!DOCTYPE html>
            <html>
            <head>
              <style>
                button:hover { background-color: #007bff; color: white; }
                img { float: right; width: 100px; margin-left: 10px; }
              </style>
            </head>
            <body>
              <img src='https://mozisarok.hu/img/logos/logo-w64.avif' alt='kép'>
              <p>Ez egy szöveg, ami mellé kép van lebegtetve.</p>
              <button>Hover próbája</button>
            </body>
            </html>" frameborder="0"></iframe>
        </div>
        <h4>Egyszerű animáció</h4>
        <CodeBlock
          :code="`@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.box {\n  animation: fadeIn 2s ease-in;\n}`" />
      </div>
    </div>
    <hr class="line" />
    <div class="box">
      <div class="part" id="bootstrap">
        <h2>Bootstrap használata</h2>
        <p>Illeszd be a következő sort a <code>&lt;head&gt;</code>-be:</p>
        <CodeBlock :code="link" />

        <h3>Gomb példa</h3>
        <CodeBlock :code="examplebutton" />
        <div class="iframe">
          <iframe
            srcdoc="<!DOCTYPE html><html><head><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'></head><body><button class='btn btn-primary'>Bootstrap gomb</button></body></html>"
            frameborder="0"></iframe>
        </div>

        <h4>Grid rendszer (rácselrendezés)</h4>
        <CodeBlock
          :code="`<div class='container'>\n  <div class='row'>\n    <div class='col'>1</div>\n    <div class='col'>2</div>\n    <div class='col'>3</div>\n  </div>\n</div>`" />
        <div class="iframe">
          <iframe
            srcdoc="<!DOCTYPE html><html><head><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'></head><body><div class='container'><div class='row'><div class='col bg-primary text-white'>1</div><div class='col bg-secondary text-white'>2</div><div class='col bg-success text-white'>3</div></div></div></body></html>"
            frameborder="0"></iframe>
        </div>

        <h4>Kártya komponens</h4>
        <CodeBlock
          :code="`<div class='card' style='width: 18rem;'>\n  <img src='https://mozisarok.hu/img/logos/logo-w64.avif' class='card-img-top'>\n  <div class='card-body'>\n    <h5 class='card-title'>Kártya címe</h5>\n    <p class='card-text'>Pár soros leírás.</p>\n    <a href='#' class='btn btn-primary'>Tovább</a>\n  </div>\n</div>`" />
        <div class="iframe">
          <iframe
            srcdoc="<!DOCTYPE html><html><head><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'></head><body><div class='card' style='width: 18rem;'><img src='https://mozisarok.hu/img/logos/logo-w64.avif' class='card-img-top'><div class='card-body'><h5 class='card-title'>Kártya címe</h5><p class='card-text'>Pár soros leírás.</p><a href='#' class='btn btn-primary'>Tovább</a></div></div></body></html>"
            frameborder="0"></iframe>
        </div>

        <h4>Alert (figyelmeztetés)</h4>
        <CodeBlock :code="`<div class='alert alert-warning' role='alert'>\n  Ez egy figyelmeztetés!\n</div>`" />
        <div class="iframe">
          <iframe
            srcdoc="<!DOCTYPE html><html><head><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'></head><body><div class='alert alert-warning' role='alert'>Ez egy figyelmeztetés!</div></body></html>"
            frameborder="0"></iframe>
        </div>

        <h4>Navigation bar</h4>
        <CodeBlock
          :code="`<nav class='navbar navbar-light bg-light'>\n  <a class='navbar-brand' href='#'>Navbar</a>\n</nav>`" />
        <div class="iframe">
          <iframe
            srcdoc="<!DOCTYPE html><html><head><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'></head><body><nav class='navbar navbar-light bg-light'><a class='navbar-brand' href='#'>Navbar</a></nav></body></html>"
            frameborder="0"></iframe>
        </div>

        <h4>Kép formázás</h4>
        <CodeBlock :code="`<img src='https://mozisarok.hu/img/logos/logo-w64.avif' class='img-fluid rounded'>`" />
        <div class="iframe">
          <iframe
            srcdoc="<!DOCTYPE html><html><head><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'></head><body><img src='https://mozisarok.hu/img/logos/logo-w64.avif' class='img-fluid rounded'></body></html>"
            frameborder="0"></iframe>
        </div>
      </div>
    </div>
    <hr class="line" />
    <div class="box">
      <h1 style="text-align: center;">Ha nem találsz meg valami akkor <span style="color: red;">skill issue</span>,
        esetleg
        próbálj meg <b>ctrl+f</b>-ben
        rákeresi kulcsszavakra,
        vagy
        látogass el más oldalkra.</h1>
    </div>
    <hr class="line">
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

.iframe {
  width: 100%;
  height: 200px;
  border: none;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
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
