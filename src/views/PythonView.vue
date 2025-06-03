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
      <a href="#adattipusok"><button>Adattípusok</button></a>
      <div class="line"></div>
      <a href="#while"><button>While ciklus</button></a>
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
          :code="`szam=10\nif szam> 5:\n print('A szám nagyobb, mint 5')\nelif szam == 5:\n print('A szám egyenlő 5-tel')\nelse:\n print('A szám kisebb, mint 5') `" />
        <h3>Kimenet:</h3>
        <CodeBlock :code="`A szám nagyobb, mint 5`" />
      </div>

      <div class="part" id="random-if-else">
        <h2>Random</h2>
        <p>A random modul segítségével véletlenszámokat generálhatunk.</p>
        <CodeBlock
          :code="`import random\n\nveletlen_szam=random.randint(1, 100)\nprint('Véletlenszám:', veletlen_szam)`" />
        <h3>Kimenet:</h3>
        <CodeBlock :code="`Véletlenszám: 42`" />

        <p>Pozitív, vagy páros szám.</p>
        <CodeBlock
          :code="`import random\n\nszam=random.randint(-5, 5)\nprint(f'A generált szám: {szam}')\n\nif szam> 0:\n print('A szám pozitív.')\nif szam % 2 == 0:\n print('A szám páros.')\n# Például a 2 pozitív és páros is.`" />
        <h3>Kimenet:</h3>
        <CodeBlock :code="`A generált szám: 2\nA szám pozitív.\nA szám páros.`" />
      </div>
    </div>

    <hr class="line" />

    <div class="box">
      <h1 id="adattipusok">Python-ban használt adattípusok</h1>
      <div class="part">
        <h2>Alapvető adattípusok</h2>
        <p>Python-ban számos alaptípus létezik az adatok tárolására:</p>

        <h3>int (egész számok)</h3>
        <CodeBlock
          :code="`# Egész számok\na=10\nb=-5\nosszeg=a + b\nprint(f'Az összeg: {osszeg}')\nprint(f'Típus: {type(osszeg)}')`" />
        <h4>Kimenet:</h4>
        <CodeBlock :code="`Az összeg: 5\nTípus: <class 'int'>`" />

        <h3>float (tizedes törtek)</h3>
        <CodeBlock
          :code="`# Tizedes törtek\nx=3.14\ny=2.5\nszorzat=x * y\nprint(f'A szorzat: {szorzat}')\nprint(f'Típus: {type(szorzat)}')`" />
        <h4>Kimenet:</h4>
        <CodeBlock :code="`A szorzat: 7.85\nTípus: <class 'float'>`" />

        <h3>complex (komplex számok)</h3>
        <CodeBlock
          :code="`# Komplex számok\nc1=3 + 4j\nc2=2 - 1j\nc3=c1 + c2\nprint(f'Komplex számok összeadása: {c3}')\nprint(f'Valós rész: {c3.real}, Képzetes rész: {c3.imag}')`" />
        <h4>Kimenet:</h4>
        <CodeBlock :code="`Komplex számok összeadása: (5+3j)\nValós rész: 5.0, Képzetes rész: 3.0`" />

        <h3>str (sztringek)</h3>
        <CodeBlock
          :code="`# Szövegek\nnev='Python' \nuzenet='Programozni tanulok' \nteljes=nev + ' nyelven ' + uzenet.lower()\nprint(teljes)\nprint(f'A szöveg hossza: {len(teljes)} karakter')`" />
        <h4>Kimenet:</h4>
        <CodeBlock :code="`Python nyelven programozni tanulok\nA szöveg hossza: 33 karakter`" />

        <h3>bool (logikai típus)</h3>
        <CodeBlock
          :code="`# Logikai értékek\nigaz=True\nhamis=False\nprint(f'igaz ÉS hamis: {igaz and hamis}')\nprint(f'igaz VAGY hamis: {igaz or hamis}')\nprint(f'igaz értékének tagadása: {not igaz}')`" />
        <h4>Kimenet:</h4>
        <CodeBlock :code="`igaz ÉS hamis: False\nigaz VAGY hamis: True\nigaz értékének tagadása: False`" />

        <h3>list (lista)</h3>
        <CodeBlock
          :code="`# Listák - módosítható elemsorozatok\nszamok=[1, 2, 3, 4, 5]\nnevek=['Anna', 'Béla', 'Cecil' ]\nvegyes=[1, 'alma' , True, 3.14]\n\nprint(f'Számok: {szamok}')\nprint(f'Második név:{nevek[1]}')\nprint(f'Vegyes lista első eleme: {vegyes[0]}')\n\n# Lista módosítása\nszamok.append(6) # Újelem hozzáadása\nprint(f'Bővített lista: {szamok}')`" />
        <h4>Kimenet:</h4>
        <CodeBlock
          :code="`Számok: [1, 2, 3, 4, 5]\nMásodik név: Béla\nVegyes lista első eleme: 1\nBővített lista: [1, 2, 3, 4, 5, 6]`" />

        <h3>tuple</h3>
        <CodeBlock
          :code="`# Tuple - nem módosítható elemsorozat\nkoordinatak=(10, 20)\nrgb=(255, 0, 128)\n\nprint(f'Koordináták: {koordinatak}')\nprint(f'X koordináta: {koordinatak[0]}')\nprint(f'RGB szín: {rgb}')`" />
        <h4>Kimenet:</h4>
        <CodeBlock :code="`Koordináták: (10, 20)\nX koordináta: 10\nRGB szín: (255, 0, 128)`" />

        <h3>set (halmaz)</h3>
        <CodeBlock
          :code="`# Halmaz - nem rendezett, egyedi elemeket tartalmaz\ngyumolcsok={'alma', 'körte' , 'szilva' , 'alma' }\nzoldsegek={'répa', 'káposzta' , 'hagyma' }\n\nprint(f'Gyümölcsök: {gyumolcsok}') # Az ismétlődő elemek csak egyszer szerepelnek\nprint(f'Unió: {gyumolcsok.union(zoldsegek)}')\nprint(f'Tartalmazza a szilvát? {'szilva' in gyumolcsok}')`" />
        <h4>Kimenet:</h4>
        <CodeBlock
          :code="`Gyümölcsök: {'alma', 'körte' , 'szilva' }\nUnió: {'alma', 'körte' , 'szilva' , 'répa' , 'káposzta' , 'hagyma' }\nTartalmazza a szilvát? True`" />
      </div>
    </div>

    <hr class="line" />

    <div class="box">
      <h1 id="while">While ciklus</h1>
      <div class="part">
        <h2>While ciklus alapjai</h2>
        <p>A while ciklus addig fut, amíg a feltétel igaz. A while magyarul azt jelenti: amíg.</p>

        <h3>1. példa: Számok kiírása</h3>
        <CodeBlock :code="`szam=1\nwhile szam <=10:\n print(szam)\n szam=szam + 1`" />
        <h4>Kimenet:</h4>
        <CodeBlock :code="`1\n2\n3\n4\n5\n6\n7\n8\n9\n10`" />

        <h3>2. példa: Szöveg ismétlése (5x ismétli)</h3>
        <CodeBlock :code="`szamlalo=1\nwhile szamlalo <=5:\n print('Programozni jó!')\n szamlalo=szamlalo + 1`" />
        <h4>Kimenet:</h4>
        <CodeBlock :code="`Programozni jó!\nProgramozni jó!\nProgramozni jó!\nProgramozni jó!\nProgramozni jó!`" />

        <h3>3. példa: Felhasználói interakció</h3>
        <CodeBlock
          :code="`folytatja=True\nwhile folytatja:\n print('Vidd ki a szemetet!')\n valasz=input('Mondjam még egyszer? (i/n)')\n if valasz=='n' :\n folytatja=False\nprint('>> Program vége! <<')`" />
        <h4>Kimenet (példa):</h4>
        <CodeBlock
          :code="`Vidd ki a szemetet!\nMondjam még egyszer? (i/n) i\nVidd ki a szemetet!\nMondjam még egyszer? (i/n) i\nVidd ki a szemetet!\nMondjam még egyszer? (i/n) n\n>> Program vége! <<`" />

        <h3>Adatbekérés while-ciklussal (szám bekérése megadott intervallumban)</h3>
        <CodeBlock
          :code="`szam=int(input('Adj meg egy számot 5 és 10 között! '))\n\n# while szam < 5 or 10 < szam:\nwhile not 5 <= szam <= 10:\n    szam = int(input(' Helytelen érték! Adj meg egy számot 5 és 10 között! '))\n\nprint(' Rendben!')`" />
        <h4>Kimenet (példa):</h4>
        <CodeBlock
          :code="`Adj meg egy számot 5 és 10 között! 3\nHelytelen érték! Adj meg egy számot 5 és 10 között! 12\nHelytelen érték! Adj meg egy számot 5 és 10 között! 7\nRendben!`" />

        <h3>Adatbekérés while-ciklussal (adatkérés megszakítása ENTER-rel)</h3>
        <CodeBlock
          :code="`szo=None\nwhile szo !='' :\n szo=input('Adj meg szavakat! Ha kilépnél, a szó helyett csak egy ENTER-t üss! ')\n\nprint(' Program vége!')`" />
        <h4>Kimenet (példa):</h4>
        <CodeBlock
          :code="`Adj meg szavakat! Ha kilépnél, a szó helyett csak egy ENTER-t üss! alma\nAdj meg szavakat! Ha kilépnél, a szó helyett csak egy ENTER-t üss! körte\nAdj meg szavakat! Ha kilépnél, a szó helyett csak egy ENTER-t üss! \nProgram vége!`" />
      </div>
    </div>

    <hr class="line" />

    <div class="box">
      <h1>Fájlok</h1>

      <!-- Existing file sections remain unchanged -->
      <div class="part" id="file-read">
        <h2>Fájl beolvasás</h2>
        <p>Ez a kód megnyit egy fájlt olvasási módban, és soronként kiírja a tartalmát.</p>
        <CodeBlock :code="`with open('adatok.txt', 'r' ) as file:\n for sor in file:\n print(sor.strip()) `" />
        <h3>Kimenet:</h3>
        <CodeBlock :code="`Sor 1\nSor 2\nSor 3`" />
      </div>

      <div class="part" id="file-write">
        <h2>Fájl írása</h2>
        <p>Ez a kód létrehoz egy új fájlt, és beleírja a megadott szöveget.</p>
        <CodeBlock :code="`with open('uj_adatok.txt', 'w' ) as file:\n file.write('Ez egy új fájl.') `" />
        <h3>Kimenet:</h3>
        <CodeBlock :code="`# Nincs kimenete, de létrehozza az 'uj_adatok.txt' fájlt a megadott tartalommal`" />
      </div>

      <div class="part" id="file-append">
        <h2>Fájl hozzáírás</h2>
        <p>Ez a kód hozzáfűz egy új sort egy létező fájlhoz. Új sort a \n hozzáadásval tudsz.</p>
        <CodeBlock :code="`with open('adatok.txt', 'a' ) as file:\n file.write('\Ez egy új sor.') `" />
        <h3>Kimenet:</h3>
        <CodeBlock :code="`# Nincs kimenete, de az 'adatok.txt' fájlhoz hozzáadja az új sort`" />
      </div>

      <div class="part" id="json">
        <h2>Json lekezelés</h2>
        <p><b>ha jól tudom lehet ilyen is az agazatiban, szoval ezt itt hagyom:</b></p>

        <p>Json fájl beolvasása</p>
        <CodeBlock
          :code="`import json\n\nwith open('adatok/diakok.json', encoding='utf-8' ) as diak_adatok:\n adatok=json.load(diak_adatok)\n\nprint(type(adatok))\nfor diak in adatok['diakok']:\n print(diak)`" />
        <h3>Kimenet:</h3>
        <CodeBlock
          :code="`<class 'dict'>\n{'név': 'Kis Péter', 'e-mail': ['kiss@suli.hu', 'petike@otthoni.hu'], 'kollegista': False}\n{'név': 'Nagy Zoé', 'e-mail': None, 'kollegista': False}`" />
      </div>
    </div>

    <hr class="line" />

    <div class="box">
      <h1>Listák</h1>
      <div class="part" id="list">
        <h2>Lista Létrehozása</h2>
        <CodeBlock
          :code="`honapok=['január', 'február' , 'március' , 'április' ]\n\n# lista kiíratása\nprint(honapok)\n\n# join(): a lista elemeit egy sztringgé fűzi össze)\n# a megadott elválasztó karakterekkel tagolva\nprint(', '.join(honapok))\n\n# lista hossza: len( )\nprint(len(honapok))\n\n# a 0. indexű az első elem\nprint(honapok[0])\n\n# jelen esetben a 3. indexű az utolsó elem\nprint(honapok[3]) \n\n# túlindexelés, hibát okoz!\n# ebben a listában az utolsó elem indexe: 3\n# print(honapok[4]) <- HIBÁS!!!\n# az 1-es és 2-es indexű elemek kiíratása\nprint(honapok[1:3])\n\n# az elejétől a 2-es indexű elemmel bezárólag\nprint(honapok[:3])\n\n# 2-es indexű elemtől a végéig\nprint(honapok[2:])\n\n# hátulról az első, vagyis az utolsó elem\nprint(honapok[-1])    `" />
        <h3>Kimenet:</h3>
        <CodeBlock
          :code="`[' január', 'február' , 'március' , 'április' ]\njanuár, február, március, április\n4\njanuár\náprilis\n['február', 'március' ]\n['január', 'február' , 'március' ]\n['március', 'április' ]\náprilis`" />
      </div>
    </div>
  </main>
</template>

<style scoped>
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
