<script lang="ts">
import type { CiscoCommands } from '@/assets/types/cisco.ts';
import CommandsTable from '@/components/CommandsTable.vue';

export default {
  name: 'HomeView',
  components: {
    CommandsTable
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      Categorys: [
        /*         {
                  id: 'system-info',
                  name: 'Rendszer Információk',
                  description: 'Rendszerinformációkkal és állapottal kapcsolatos parancsok.',
                  keywords: ['verzió', 'állapot', 'info'],
                }, */
        {
          id: 'interface',
          name: 'Interfészek',
          description: 'Hálózati interfészekkel kapcsolatos parancsok.',
          keywords: ['port', 'interfész', 'ethernet'],
        },
        {
          id: 'routing',
          name: 'Útvonalválasztás',
          description: 'Routing protokollokkal és útvonalakkal kapcsolatos parancsok.',
          keywords: ['routing', 'útvonal', 'ospf', 'eigrp'],
        },
        {
          id: 'security',
          name: 'Biztonság',
          description: 'Biztonsági beállításokkal és hozzáférésvédelemmel kapcsolatos parancsok.',
          keywords: ['biztonság', 'acl', 'jelszó', 'password', 'titkosítás'],
        },
        /*         {
                  id: 'vlan',
                  name: 'VLAN',
                  description: 'VLAN konfigurációval kapcsolatos parancsok.',
                  keywords: ['vlan', 'trunk', 'kapcsolás'],
                }, */
        {
          id: 'basic-config',
          name: 'Alapkonfiguráció',
          description: 'Alapvető konfigurációs parancsok.',
          keywords: ['konfiguráció', 'beállítás', 'alapvető', 'hostname'],
        },
        {
          id: 'ipv6',
          name: 'IPv6',
          description: 'IPv6 protokollal kapcsolatos parancsok.',
          keywords: ['ipv6', 'routing', 'cím', 'unicast'],
        },
        {
          id: 'ssh',
          name: 'SSH',
          description: 'SSH kapcsolat beállítása és kezelése.',
          keywords: ['ssh', 'távoli', 'hozzáférés', 'titkosított'],
        },
        {
          id: 'dhcp',
          name: 'DHCP',
          description: 'DHCP szerver konfigurációja és kezelése.',
          keywords: ['dhcp', 'ip cím', 'kiosztás', 'pool', 'automatikus'],
        },
        /*         {
                  id: 'nat',
                  name: 'NAT',
                  description: 'Hálózati címfordítással kapcsolatos parancsok.',
                  keywords: ['nat', 'pat', 'címfordítás', 'fordítás', 'overload'],
                }, */
        /*         {
                  id: 'qos',
                  name: 'QoS',
                  description: 'Szolgáltatásminőséggel kapcsolatos parancsok.',
                  keywords: ['qos', 'policy', 'minőség', 'forgalomkezelés', 'prioritás'],
                }, */
        /*         {
                  id: 'stp',
                  name: 'Spanning Tree',
                  description: 'Feszítőfa protokoll konfigurációja és kezelése.',
                  keywords: ['stp', 'spanning-tree', 'rstp', 'hurok', 'kapcsolás'],
                }, */
        {
          id: 'troubleshooting',
          name: 'Hibaelhárítás',
          description: 'Hibaelhárítással és diagnosztikával kapcsolatos parancsok.',
          keywords: ['debug', 'hibaelhárítás', 'diagnosztika', 'teszt', 'ping'],
        },
        {
          id: 'modes',
          name: 'Üzemmódok',
          description: 'Cisco IOS üzemmódok és az azokba való belépés parancsai.',
          keywords: ['mód', 'üzemmód', 'belépés', 'kilépés', 'privilegizált'],
        },
      ],
      CiscoCommands: [
        {
          command: 'hostname',
          description: 'Állomásnév megváltoztatása',
          example: 'hostname name',
          category: 'basic-config',
          keywords: ['név', 'állomásnév', 'eszköznév', 'azonosító', 'változtatás'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'enable password',
          description: 'Enable jelszó beállítás (privilegizált mód)',
          example: 'enable password 12345',
          category: 'security',
          keywords: ['jelszó', 'enable', 'privilegizált', 'hozzáférés', 'védelem'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'enable secret',
          description: 'Enable titkosított jelszó beállítás',
          example: 'enable secret 12345',
          category: 'security',
          keywords: ['jelszó', 'titkosított', 'secret', 'védelem', 'privilegizált'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'line console password',
          description: 'Konzol jelszó beállítás',
          example: 'line console 0\npassword 12345\nlogin',
          category: 'security',
          keywords: ['konzol', 'jelszó', 'védelem', 'hozzáférés', 'helyi'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'line vty password',
          description: 'Virtuális terminálok jelszava',
          example: 'line vty 0 15\npassword 12345\nlogin',
          category: 'security',
          keywords: ['vty', 'telnet', 'jelszó', 'terminál', 'távoli'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'összes jelszó beállítása',
          description: 'Összes fontos jelszó beállítása egyben',
          example: 'enable secret Gyar1ena\nline console 0\npassword 12345678\nlogin\nexit\nline vty 0 15\npassword GYar1vty\nlogin',
          category: 'security',
          keywords: ['jelszó', 'konzol', 'vty', 'enable', 'védelem'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'service password-encryption',
          description: 'Jelszó titkosítás',
          example: 'service password-encryption',
          category: 'security',
          keywords: ['titkosítás', 'jelszó', 'védelem', 'biztonság', 'encryption'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ip default-gateway',
          description: 'Switch alapértelmezett átjáró',
          example: 'ip default-gateway 127.0.0.1',
          category: 'basic-config',
          keywords: ['átjáró', 'gateway', 'switch', 'alapértelmezett', 'ip'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'interface vlan config',
          description: 'Switch interface beállítás',
          example: 'interface vlan1\nip address 172.19.1.253 255.255.255.0\nno shutdown',
          category: 'interface',
          keywords: ['vlan', 'interface', 'ip', 'beállítás', 'management'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'router rip',
          description: 'RIP protokoll 2',
          example: 'router rip\nversion 2',
          category: 'routing',
          keywords: ['rip', 'routing', 'protokoll', 'version', 'konfiguráció'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'router ospf network',
          description: 'OSPF protokoll',
          example: 'router ospf 1\nnetwork 192.168.2.0 0.0.0.255 area 0\nnetwork 192.168.10.0 0.0.0.255 area 0',
          category: 'routing',
          keywords: ['ospf', 'routing', 'protokoll', 'area', 'hálózat'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'interface ip config',
          description: 'Router interface IP konfiguráció',
          example: 'int gi0/0\nip address 192.168.11.33 255.255.255.224\nno sh',
          category: 'interface',
          keywords: ['interface', 'ip', 'cím', 'konfiguráció', 'beállítás'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ipv6 interface config',
          description: 'Router interface IPv6 konfiguráció',
          example: 'int gi0/0\nipv6 enable\nipv6 address 2001:db8:acad:1::1/64\nipv6 address fe80::1 link-local\nno sh',
          category: 'ipv6',
          keywords: ['ipv6', 'interface', 'cím', 'konfiguráció', 'link-local'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ipv6 unicast-routing',
          description: 'Forgalomirányítón engedélyezzük az IPv6-os forgalomirányítást',
          example: 'ipv6 unicast-routing',
          category: 'ipv6',
          keywords: ['ipv6', 'unicast', 'routing', 'forgalomirányítás', 'engedélyezés'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'username',
          description: 'Helyi felhasználó létrehozása (jelszóval)',
          example: 'username admin password AdPass123',
          category: 'security',
          keywords: ['felhasználó', 'jelszó', 'helyi', 'hozzáférés', 'védelem'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'line vty login local',
          description: 'Virtuális vonalak védelme (helyi felhasználóval)',
          example: 'line vty 0 15\nlogin local',
          category: 'security',
          keywords: ['vty', 'helyi', 'felhasználó', 'hitelesítés', 'védelem'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ssh setup',
          description: 'SSH engedélyezése',
          example: 'ip domain-name proba.hu\ncrypto key generate rsa\nHow many bits in the modulus [512]: 1024\nline vty 0 15\ntransport input ssh',
          category: 'ssh',
          keywords: ['ssh', 'titkosítás', 'távoli', 'hozzáférés', 'kulcs'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'description',
          description: 'Interface-hez megjegyzés hozzáadása',
          example: 'int gi0/0\ndescription Office_LAN',
          category: 'interface',
          keywords: ['megjegyzés', 'leírás', 'interface', 'dokumentáció', 'azonosítás'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'banner motd',
          description: 'Napi üdvözlő üzenet',
          example: 'banner motd "Csak megfelelo jogosultsaggal hasznalja a kapcsolatot"',
          category: 'basic-config',
          keywords: ['üzenet', 'motd', 'figyelmeztetés', 'bejelentkezés', 'jogi'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'copy running-config startup-config',
          description: 'Futó konfiguráció mentése az indítási konfigurációs állományba',
          example: 'copy running-config startup-config',
          category: 'basic-config',
          keywords: ['mentés', 'konfiguráció', 'startup', 'running', 'tárolás'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'konzol vonal védelme',
          description: 'Konzol vonal védelme (globális jelszóval)',
          example: 'line console 0\npassword ConPass123\nlogin',
          category: 'security',
          keywords: ['konzol', 'jelszó', 'védelem', 'vonal', 'hozzáférés'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'enable',
          description: 'Privilegizált EXEC módba belépés',
          example: 'enable',
          category: 'modes',
          keywords: ['privilegizált', 'belépés', 'mód', 'exec', 'admin'],
          mode: 'Felhasználói EXEC'
        },
        {
          command: 'configure terminal',
          description: 'Belépés a globális konfigurációs módba',
          example: 'configure terminal',
          category: 'modes',
          keywords: ['globális', 'konfiguráció', 'belépés', 'mód', 'config'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'interface',
          description: 'Belépés az interfész konfigurációs módba',
          example: 'interface gigabitethernet 0/1',
          category: 'modes',
          keywords: ['interfész', 'konfiguráció', 'belépés', 'port', 'mód'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'exit',
          description: 'Kilépés a jelenlegi konfigurációs módból',
          example: 'exit',
          category: 'modes',
          keywords: ['kilépés', 'vissza', 'előző', 'mód', 'befejezés'],
          mode: 'Bármely Konfigurációs Mód'
        },
        {
          command: 'end',
          description: 'Kilépés közvetlenül a privilegizált EXEC módba',
          example: 'end',
          category: 'modes',
          keywords: ['kilépés', 'privilegizált', 'közvetlen', 'vissza', 'ctrl+z'],
          mode: 'Bármely Konfigurációs Mód'
        },
        {
          command: 'do',
          description: 'EXEC parancsok futtatása konfigurációs módból',
          example: 'do show ip interface brief',
          category: 'modes',
          keywords: ['exec', 'parancs', 'futtatás', 'konfiguráció', 'módból'],
          mode: 'Bármely Konfigurációs Mód'
        },
        {
          command: 'write memory',
          description: 'Konfiguráció mentése',
          example: 'write memory',
          category: 'basic-config',
          keywords: ['mentés', 'memória', 'konfiguráció', 'startup', 'tárolás'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'reload',
          description: 'Az eszköz újraindítása',
          example: 'reload',
          category: 'basic-config',
          keywords: ['újraindítás', 'reset', 'boot', 'indítás', 'restart'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'no shutdown',
          description: 'Interfész bekapcsolása',
          example: 'no shutdown',
          category: 'interface',
          keywords: ['bekapcsolás', 'aktiválás', 'interfész', 'port', 'engedélyezés'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'shutdown',
          description: 'Interfész kikapcsolása',
          example: 'shutdown',
          category: 'interface',
          keywords: ['kikapcsolás', 'deaktiválás', 'interfész', 'port', 'letiltás'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'ip dhcp pool',
          description: 'DHCP pool létrehozása és konfigurálása',
          example: 'ip dhcp pool LAN_POOL\nnetwork 192.168.1.0 255.255.255.0\ndefault-router 192.168.1.1\ndns-server 8.8.8.8\nlease 7',
          category: 'dhcp',
          keywords: ['dhcp', 'pool', 'ip', 'kiosztás', 'hálózat'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ping',
          description: 'ICMP echo kérés küldése kapcsolat teszteléséhez',
          example: 'ping 192.168.1.1\nping ipv6 2001:db8::1',
          category: 'troubleshooting',
          keywords: ['ping', 'teszt', 'elérhetőség', 'icmp', 'kapcsolat'],
          mode: 'Felhasználói EXEC / Privilegizált EXEC'
        },
        {
          command: 'show ?',
          description: 'Elérhető show parancsok listázása',
          example: 'show ?\nshow history\nshow terminal',
          category: 'basic-config',
          keywords: ['cli', 'súgó', 'parancsok', 'navigáció', 'terminál'],
          mode: 'Privilegizált EXEC'
        }
      ] as CiscoCommands[],
    };
  },
  computed: {
    filteredCommands(): CiscoCommands[] {
      const query = this.searchQuery.toLowerCase().trim();
      let filtered = this.CiscoCommands;

      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(cmd => cmd.category === this.selectedCategory);
      }

      if (query) {
        filtered = filtered.filter(command => {
          if (command.command.toLowerCase().includes(query)) return true;

          if (command.description.toLowerCase().includes(query)) return true;

          if (command.example.toLowerCase().includes(query)) return true;

          if (command.keywords.some(keyword => keyword.toLowerCase().includes(query))) return true;

          const category = this.Categorys.find(cat => cat.id === command.category);
          if (category && category.name.toLowerCase().includes(query)) return true;

          return false;
        });
      }

      return filtered;
    },
    categoryCount(): Record<string, number> {
      const counts: Record<string, number> = { all: this.CiscoCommands.length };

      this.Categorys.forEach(category => {
        counts[category.id] = this.CiscoCommands.filter(cmd => cmd.category === category.id).length;
      });

      return counts;
    }
  }
};
</script>

<template>
  <main class="container">
    <h1 class="page-title">Cisco parancsok</h1>

    <div class="filter-section">
      <div class="search-container">
        <div class="search-wrapper">
          <input type="text" v-model="searchQuery" class="search-input"
            placeholder="Keress parancsra, leírásra, vagy kulcsszóra..." aria-label="Keress" />
          <span class="search-icon">🔍</span>
          <button v-if="searchQuery" @click="searchQuery = ''" class="clear-button" aria-label="Clear search">
            ✕
          </button>
        </div>
      </div>

      <div class="category-filter">
        <div class="category-tabs">
          <button class="category-tab" :class="{ active: selectedCategory === 'all' }"
            @click="selectedCategory = 'all'">
            Összes ({{ categoryCount.all }})
          </button>
          <button v-for="category in Categorys" :key="category.id" class="category-tab"
            :class="{ active: selectedCategory === category.id }" @click="selectedCategory = category.id"
            :title="category.description">
            {{ category.name }} ({{ categoryCount[category.id] }})
          </button>
        </div>
      </div>

      <div class="filter-results">
        <p v-if="searchQuery && filteredCommands.length === 0" class="no-results">
          Nincs találat erre: "{{ searchQuery }}"
        </p>
        <p v-else-if="searchQuery || selectedCategory !== 'all'" class="results-count">
          {{ filteredCommands.length }} parancs található
        </p>
      </div>
    </div>

    <CommandsTable :filtered-commands="filteredCommands" v-model:search-query="searchQuery"
      @update:searchQuery="searchQuery = $event" />
  </main>
</template>

<style scoped>
.page-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.filter-section {
  margin-bottom: 2rem;
}

.search-container {
  margin-bottom: 1.5rem;
  width: 100%;
}

.search-wrapper {
  position: relative;
  max-width: 600px;
  margin: 0 auto 1rem auto;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.search-input:focus {
  outline: none;
  border-color: rgba(21, 101, 192, 0.7);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 2px rgba(21, 101, 192, 0.3);
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
}

.clear-button {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.no-results,
.results-count {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.no-results {
  color: rgba(255, 70, 70, 0.9);
}

.category-filter {
  margin: 1.5rem 0;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  justify-content: center;
}

.category-tab {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.category-tab:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.category-tab.active {
  background-color: rgba(21, 101, 192, 0.8);
  color: white;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(21, 101, 192, 0.5);
}

.category-tab:active {
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.filter-results {
  margin-top: 1rem;
}

.empty-table-message {
  text-align: center;
  padding: 2rem 0;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}

.table-container {
  width: 100%;
  overflow-x: auto;
}

.commands-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
}

.commands-table th,
.commands-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.commands-table th {
  background-color: rgba(255, 255, 255, 0.1);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

.commands-table tr:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.command-cell {
  font-weight: 500;
}

.example-cell {
  max-width: 350px;
}

.mode-cell {
  font-size: 0.9rem;
  font-style: italic;
  color: #8ae8ff;
}

pre {
  margin: 0;
  padding: 0;
}

code {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 0.7rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  display: block;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.5;
}

.keywords-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.keyword {
  display: inline-block;
  background-color: rgba(21, 101, 192, 0.7);
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.mode-cell {
  font-size: 0.9rem;
  font-style: italic;
  color: #8ae8ff;
  position: relative;
}

.mode-tooltip {
  position: relative;
  cursor: help;
  border-bottom: 1px dotted #8ae8ff;
}

.mode-tooltip::after {
  content: attr(data-original);
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.9);
  color: #ffffff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  white-space: nowrap;
  z-index: 100;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  border: 1px solid rgba(21, 101, 192, 0.5);
  font-style: normal;
  font-size: 0.85rem;
}

.mode-tooltip:hover::after {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 768px) {
  .commands-table {
    font-size: 0.9rem;
  }

  .commands-table th,
  .commands-table td {
    padding: 0.5rem;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .category-tab {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  .example-cell {
    max-width: 250px;
  }

  code {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }
}

@media (max-width: 480px) {
  .home-container {
    padding: 1rem 0.5rem;
  }

  .commands-table {
    font-size: 0.8rem;
  }

  .category-tabs {
    justify-content: flex-start;
    width: max-content;
  }

  .category-filter {
    margin: 1rem 0;
  }

  .example-cell {
    max-width: 200px;
  }
}
</style>
