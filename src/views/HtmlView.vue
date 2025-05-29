<script lang="ts">
import CodeBlock from '@/components/CodeBlock.vue';

export default {
  name: 'PythonView',
  components: {
    CodeBlock
  },
  data() {
    return {
      link: '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">',
      examplebutton: '<button class=\" btn btn-primary\">Bootstrap gomb</button>`'
    };
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
      <h1></h1>

      <div class="part" id="alapok">
        <h2>Alapok</h2>
        <p>Ha esetleg nem lenne megadva az alap ágazati, amit kétlek. <b>De azért itt van</b> egy alap, hogy hogyan
          kell felépíteni egy HTML weblapot.</p>
        <CodeBlock
          :code="`<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n</body>\n</html>`" />
        <h3>Kimenet:</h3>
        <div class="iframe">
          <iframe srcdoc="<!DOCTYPE html>
          <html>
          <head>
            <title>Page Title</title>
          </head>
          <body>
            <h1>This is a Heading</h1>
            <p>This is a paragraph.</p>
          </body>
          </html>" frameborder="0">
          </iframe>
        </div>

        <h2>Alap tagek:</h2>
        <table class="ws-table-all notranslate"
          style="box-sizing: inherit; border-collapse: collapse; border-spacing: 0px; width: 914.156px; display: table; border: 1px solid rgb(204, 204, 204); margin: 20px 0px; color: rgb(0, 0, 0); font-family: Verdana, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
          <tbody style="box-sizing: inherit;">
            <tr
              style="box-sizing: inherit; border-bottom: 1px solid rgb(221, 221, 221); background-color: rgb(255, 255, 255);">
              <th
                style="box-sizing: inherit; padding: 8px 8px 8px 16px; display: table-cell; text-align: left; vertical-align: top;">
                Start tag</th>
              <th
                style="box-sizing: inherit; padding: 8px; display: table-cell; text-align: left; vertical-align: top;">
                Element content</th>
              <th
                style="box-sizing: inherit; padding: 8px; display: table-cell; text-align: left; vertical-align: top;">
                End tag</th>
            </tr>
            <tr
              style="box-sizing: inherit; border-bottom: 1px solid rgb(221, 221, 221); background-color: rgb(231, 233, 235);">
              <td
                style="box-sizing: inherit; padding: 8px 8px 8px 16px; display: table-cell; text-align: left; vertical-align: top;">
                &lt;h1&gt;</td>
              <td
                style="box-sizing: inherit; padding: 8px; display: table-cell; text-align: left; vertical-align: top;">
                My First Heading</td>
              <td
                style="box-sizing: inherit; padding: 8px; display: table-cell; text-align: left; vertical-align: top;">
                &lt;/h1&gt;</td>
            </tr>
            <tr
              style="box-sizing: inherit; border-bottom: 1px solid rgb(221, 221, 221); background-color: rgb(255, 255, 255);">
              <td
                style="box-sizing: inherit; padding: 8px 8px 8px 16px; display: table-cell; text-align: left; vertical-align: top;">
                &lt;p&gt;</td>
              <td
                style="box-sizing: inherit; padding: 8px; display: table-cell; text-align: left; vertical-align: top;">
                My first paragraph.</td>
              <td
                style="box-sizing: inherit; padding: 8px; display: table-cell; text-align: left; vertical-align: top;">
                &lt;/p&gt;</td>
            </tr>
            <tr
              style="box-sizing: inherit; border-bottom: 1px solid rgb(221, 221, 221); background-color: rgb(231, 233, 235);">
              <td
                style="box-sizing: inherit; padding: 8px 8px 8px 16px; display: table-cell; text-align: left; vertical-align: top;">
                &lt;br&gt;</td>
              <td
                style="box-sizing: inherit; padding: 8px; display: table-cell; text-align: left; vertical-align: top;">
                <em style="box-sizing: inherit;">none</em>
              </td>
              <td
                style="box-sizing: inherit; padding: 8px; display: table-cell; text-align: left; vertical-align: top;">
                <em style="box-sizing: inherit;">none</em>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

      <!-- CSS Basics Section -->
      <div class="part" id="css">
        <h2>CSS alapok</h2>
        <p>A CSS (Cascading Style Sheets) segítségével tudod formázni a HTML elemeket. Például színeket, betűméretet,
          elrendezést adhatsz meg.</p>
        <CodeBlock
          :code="`<!DOCTYPE html>\n<html>\n<head>\n<style>\nh1 { color: blue; }\np { color: green; font-size: 18px; }\n</style>\n</head>\n<body>\n<h1>Cím</h1>\n<p>Ez egy bekezdés.</p>\n</body>\n</html>`" />
        <h3>Kimenet:</h3>
        <div class="iframe">
          <iframe srcdoc="<!DOCTYPE html>
          <html>
          <head>
            <style>
              h1 { color: blue; }
              p { color: green; font-size: 18px; }
            </style>
          </head>
          <body>
            <h1>Cím</h1>
            <p>Ez egy bekezdés.</p>
          </body>
          </html>" frameborder="0"></iframe>
        </div>
        <h4>CSS beillesztése</h4>
        <ul>
          <li><b>Belső stílus:</b> &lt;style&gt; tag a &lt;head&gt;-ben</li>
          <li><b>Külső stíluslap:</b> &lt;link rel="stylesheet" href="style.css"&gt;</li>
          <li><b>Soron belüli stílus:</b> &lt;tag style="color: red;"&gt;Szöveg&lt;/tag&gt;</li>
        </ul>
      </div>

      <!-- Bootstrap Section -->
      <div class="part" id="bootstrap">
        <h2>Bootstrap használata</h2>
        <p>A <b>Bootstrap</b> egy népszerű CSS keretrendszer, amivel gyorsan készíthetsz modern, reszponzív
          weboldalakat.</p>
        <p>Bootstrap használatához illeszd be ezt a sort a &lt;head&gt;-be:</p>
        <CodeBlock :code="link" />
        <p>Példa egy Bootstrap gombra:</p>
        <CodeBlock :code="examplebutton" />
        <h3>Kimenet:</h3>
        <div class="iframe">
          <iframe srcdoc="<!DOCTYPE html>
          <html>
          <head>
            <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'>
          </head>
          <body>
            <button class='btn btn-primary'>Bootstrap gomb</button>
          </body>
          </html>" frameborder="0"></iframe>
        </div>
        <h4>További Bootstrap elemek:</h4>
        <ul>
          <li><code>&lt;div class="container"&gt;...&lt;/div&gt;</code> – középre igazított tartalom</li>
          <li><code>&lt;button class="btn btn-success"&gt;Zöld gomb&lt;/button&gt;</code></li>
          <li><code>&lt;input class="form-control"&gt;</code> – szépített űrlapmező</li>
        </ul>
        <p>További infó: <a href="https://getbootstrap.com/" target="_blank">getbootstrap.com</a></p>
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

.iframe {
  width: 100%;
  height: 200px;
  border: none;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
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
