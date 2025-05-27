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
      <a href="#random-if-else"><button>Random</button></a>
      <div class="line"></div>
      <a href="#file-read"><button>Fájl beolvasás</button></a>
      <a href="#file-write"><button>Fájl írása</button></a>
      <a href="#file-append"><button>Fájl hozzáírás</button></a>
      <a href="#json"><button>JSON lekezelés</button></a>
      <div class="line"></div>
      <a href="#list"><button>Listák</button></a>
    </div>
    <div class="box">
      <h1>If-else-random cuccok használata</h1>

      <div class="part" id="if-else">
        <h2>Elágazások</h2>
        <p>if szerkezet példa:</p>
        <CodeBlock
          code="szam = 10<br>if szam > 5:<br>  print('A szám nagyobb, mint 5')<br>elif szam == 5:<br>  print('A szám egyenlő 5-tel')<br>else:<br>  print('A szám kisebb, mint 5') " />
        <h3>Kimenet:</h3>
        <CodeBlock code="A szám nagyobb, mint 5" />
      </div>

      <div class="part" id="random-if-else">
        <h2>Random</h2>
        <p>A random modul segítségével véletlenszámokat generálhatunk.</p>
        <CodeBlock
          code="import random<br><br>veletlen_szam = random.randint(1, 100)<br>print('Véletlenszám:', veletlen_szam)" />
        <h3>Kimenet:</h3>
        <CodeBlock code="Véletlenszám: 42" />

        <p>Pozitív, vagy páros szám.</p>
        <CodeBlock
          code="import random<br><br>szam = random.randint(-5, 5)<br>print(f'A generált szám: {szam}')<br><br>if szam > 0:<br>  print('A szám pozitív.')<br>if szam % 2 == 0:<br>  print('A szám páros.')<br># Például a 2 pozitív és páros is." />
        <h3>Kimenet:</h3>
        <CodeBlock code="A generált szám: 2<br>A szám pozitív.<br>A szám páros." />
      </div>

    </div>

    <hr class="line" />

    <div class="box">
      <h1>Fájlok</h1>

      <div class="part" id="file-read">
        <h2>Fájl beolvasás</h2>
        <p>Ez a kód megnyit egy fájlt olvasási módban, és soronként kiírja a tartalmát.</p>
        <CodeBlock code="with open('adatok.txt', 'r') as file:<br>  for sor in file:<br>    print(sor.strip()) " />
        <h3>Kimenet:</h3>
        <CodeBlock code="Sor 1<br>Sor 2<br>Sor 3" />
      </div>

      <div class="part" id="file-write">
        <h2>Fájl írása</h2>
        <p>Ez a kód létrehoz egy új fájlt, és beleírja a megadott szöveget.</p>
        <CodeBlock code="with open('uj_adatok.txt', 'w') as file:<br>  file.write('Ez egy új fájl.') " />
        <h3>Kimenet:</h3>
        <CodeBlock code="# Nincs kimenete, de létrehozza az 'uj_adatok.txt' fájlt a megadott tartalommal" />
      </div>

      <div class="part" id="file-append">
        <h2>Fájl hozzáírás</h2>
        <p>Ez a kód hozzáfűz egy új sort egy létező fájlhoz.</p>
        <CodeBlock code="with open('adatok.txt', 'a') as file:<br>  file.write('\\nEz egy új sor.') " />
        <h3>Kimenet:</h3>
        <CodeBlock code="# Nincs kimenete, de az 'adatok.txt' fájlhoz hozzáadja az új sort" />
      </div>

      <div class="part" id="json">
        <h2>Json lekezelés</h2>
        <p><b>ha jól tudom lehet ilyen is az agazatiban, szoval ezt itt hagyom:</b></p>
        <p>Példa .JSON file</p>
        <CodeBlock
          code='{<br>    "diakok": [<br>        {<br>            "név": "Kis Péter",<br>            "e-mail": ["kiss@suli.hu", "petike@otthoni.hu"],<br>            "kollegista": false<br>        },<br>        {<br>            "név": "Nagy Zoé",<br>            "e-mail": null,<br>            "kollegista": false<br>        }<br>    ]<br>}' />

        <p>Json fájl beolvasása</p>
        <CodeBlock
          code="import json<br><br>with open('adatok/diakok.json', encoding='utf-8') as diak_adatok:<br> adatok = json.load(diak_adatok)<br><br>print(type(adatok))<br>for diak in adatok['diakok']:<br> print(diak)" />
        <h3>Kimenet:</h3>
        <CodeBlock
          code="<class 'dict'><br>{'név': 'Kis Péter', 'e-mail': ['kiss@suli.hu', 'petike@otthoni.hu'], 'kollegista': False}<br>{'név': 'Nagy Zoé', 'e-mail': None, 'kollegista': False}" />
      </div>
    </div>

    <hr class="line" />

    <div class="box">
      <h1>Listák</h1>
      <div class="part" id="list">
        <h2>Lista Létrehozása</h2>
        <CodeBlock
          code="honapok = ['január', 'február', 'március', 'április']<br><br># lista kiíratása<br>print(honapok)<br><br># join(): a lista elemeit egy sztringgé fűzi össze)<br># a megadott elválasztó karakterekkel tagolva<br>print(', '.join(honapok))<br><br># lista hossza: len( )<br>print(len(honapok))<br><br># a 0. indexű az első elem<br>print(honapok[0])<br><br># jelen esetben a 3. indexű az utolsó elem<br>print(honapok[3]) <br><br># túlindexelés, hibát okoz!<br># ebben a listában az utolsó elem indexe: 3<br># print(honapok[4]) <- HIBÁS!!!<br># az 1-es és 2-es indexű elemek kiíratása<br>print(honapok[1:3])<br><br># az elejétől a 2-es indexű elemmel bezárólag<br>print(honapok[:3])<br><br># 2-es indexű elemtől a végéig<br>print(honapok[2:])<br><br># hátulról az első, vagyis az utolsó elem<br>print(honapok[-1])    " />
        <h3>Kimenet:</h3>
        <CodeBlock
          code="['január', 'február', 'március', 'április']<br>január, február, március, április<br>4<br>január<br>április<br>['február', 'március']<br>['január', 'február', 'március']<br>['március', 'április']<br>április" />
      </div>
    </div>
  </main>
</template>

<style>
.navbar {
  position: sticky;
  top: 0;
  background-color: rgb(0, 0, 0);
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 10;

  .line {
    width: 1px;
    height: 1.5rem;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 0.5rem;
  }
}

.box {
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;

  .part {
    margin-bottom: 3.5rem;
  }
}

.line {
  width: 100%;
  margin: 2rem 0;
}
</style>
