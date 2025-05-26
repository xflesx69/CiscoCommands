<script lang="ts">
import type { CiscoCommands } from '@/assets/types/cisco.ts';
export default {
  name: 'HomeView',
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      // translation mapok
      /*       modeTranslations: {
              'User EXEC': 'Felhasználói EXEC',
              'Privileged EXEC': 'Privilegizált EXEC',
              'Global Configuration': 'Globális Konfiguráció',
              'Interface Configuration': 'Interfész Konfiguráció',
              'Line Configuration': 'Vonal Konfiguráció',
              'Router Configuration': 'Router Konfiguráció',
              'VLAN Configuration': 'VLAN Konfiguráció',
              'Any Configuration Mode': 'Bármely Konfigurációs Mód',
              'User EXEC / Privileged EXEC': 'Felhasználói EXEC / Privilegizált EXEC'
            }, */
      Categorys: [
        {
          id: 'system-info',
          name: 'Rendszer Információk',
          description: 'Rendszerinformációkkal és állapottal kapcsolatos parancsok.',
          keywords: ['verzió', 'állapot', 'info'],
        },
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
        {
          id: 'vlan',
          name: 'VLAN',
          description: 'VLAN konfigurációval kapcsolatos parancsok.',
          keywords: ['vlan', 'trunk', 'kapcsolás'],
        },
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
        {
          id: 'nat',
          name: 'NAT',
          description: 'Hálózati címfordítással kapcsolatos parancsok.',
          keywords: ['nat', 'pat', 'címfordítás', 'fordítás', 'overload'],
        },
        {
          id: 'qos',
          name: 'QoS',
          description: 'Szolgáltatásminőséggel kapcsolatos parancsok.',
          keywords: ['qos', 'policy', 'minőség', 'forgalomkezelés', 'prioritás'],
        },
        {
          id: 'stp',
          name: 'Spanning Tree',
          description: 'Feszítőfa protokoll konfigurációja és kezelése.',
          keywords: ['stp', 'spanning-tree', 'rstp', 'hurok', 'kapcsolás'],
        },
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
          command: 'show version',
          description: 'Megjeleníti az eszköz verzió információit.',
          example: 'show version',
          category: 'system-info',
          keywords: ['verzió', 'állapot', 'info', 'cisco ios', 'hardver', 'szoftver'],
          mode: 'Felhasználói EXEC / Privilegizált EXEC'
        },
        {
          command: 'show running-config',
          description: 'Megjeleníti az eszköz aktuális konfigurációját.',
          example: 'show running-config',
          category: 'system-info',
          keywords: ['konfiguráció', 'beállítás', 'futó', 'aktuális', 'config'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show interface',
          description: 'Megjeleníti az interfészek állapotát és statisztikáit.',
          example: 'show interface gi0/1',
          category: 'interface',
          keywords: ['interfész', 'port', 'állapot', 'statisztika', 'ethernet'],
          mode: 'Felhasználói EXEC / Privilegizált EXEC'
        },
        {
          command: 'interface gigabitethernet',
          description: 'Belépés az interfész konfigurációs módba.',
          example: 'interface gigabitethernet 0/1',
          category: 'interface',
          keywords: ['interfész', 'konfiguráció', 'gigabit', 'port', 'belépés'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'show ip route',
          description: 'Megjeleníti az IP routing táblát.',
          example: 'show ip route',
          category: 'routing',
          keywords: ['route', 'útvonal', 'ip', 'routing', 'tábla'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'router ospf',
          description: 'OSPF routing protokoll konfigurálása.',
          example: 'router ospf 1',
          category: 'routing',
          keywords: ['ospf', 'routing', 'protokoll', 'konfiguráció', 'area'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'access-list',
          description: 'Hozzáférési lista létrehozása forgalomszűréshez.',
          example: 'access-list 101 permit ip any any',
          category: 'security',
          keywords: ['acl', 'biztonság', 'szűrés', 'forgalom', 'engedélyezés'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'vlan',
          description: 'VLAN létrehozása és konfigurálása.',
          example: 'vlan 10',
          category: 'vlan',
          keywords: ['vlan', 'hálózat', 'szegmentálás', 'virtuális', 'lan'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'switchport mode trunk',
          description: 'Interfész beállítása trunk módba.',
          example: 'switchport mode trunk',
          category: 'vlan',
          keywords: ['trunk', 'vlan', 'kapcsoló', 'port', 'több vlan'],
          mode: 'Interfész Konfiguráció'
        },
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
          command: 'show clock',
          description: 'Megjeleníti a jelenlegi rendszeridőt az eszközön.',
          example: 'show clock',
          category: 'system-info',
          keywords: ['idő', 'dátum', 'óra', 'rendszeridő', 'időzóna'],
          mode: 'Felhasználói EXEC'
        },
        {
          command: 'show processes cpu',
          description: 'Megjeleníti a CPU használati statisztikákat és folyamatokat.',
          example: 'show processes cpu',
          category: 'system-info',
          keywords: ['cpu', 'folyamat', 'terhelés', 'használat', 'statisztika'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show memory',
          description: 'Megjeleníti a memóriahasználati statisztikákat.',
          example: 'show memory',
          category: 'system-info',
          keywords: ['memória', 'ram', 'használat', 'foglalt', 'szabad'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show inventory',
          description: 'Megjeleníti az eszköz hardver leltárát.',
          example: 'show inventory',
          category: 'system-info',
          keywords: ['hardver', 'eszköz', 'sorozatszám', 'modell', 'leltár'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show tech-support',
          description: 'Átfogó diagnosztikai információkat gyűjt az eszközről.',
          example: 'show tech-support',
          category: 'system-info',
          keywords: ['diagnosztika', 'támogatás', 'információ', 'hibaelhárítás', 'technikai'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show ip interface brief',
          description: 'Rövid áttekintést ad az interfészek IP konfigurációjáról és állapotáról.',
          example: 'show ip interface brief',
          category: 'interface',
          keywords: ['interfész', 'állapot', 'ip', 'áttekintés', 'gyors'],
          mode: 'Felhasználói EXEC'
        },
        {
          command: 'interface range',
          description: 'Több interfész egyidejű konfigurálása.',
          example: 'interface range gigabitethernet 0/1-24',
          category: 'interface',
          keywords: ['interfész', 'tartomány', 'több', 'köteg', 'csoport'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'speed',
          description: 'Interfész sebességének beállítása.',
          example: 'interface gigabitethernet 0/1<br>speed 100',
          category: 'interface',
          keywords: ['sebesség', 'port', 'beállítás', 'mbps', 'gigabit'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'duplex',
          description: 'Interfész duplex módjának beállítása.',
          example: 'interface gigabitethernet 0/1<br>duplex full',
          category: 'interface',
          keywords: ['duplex', 'full', 'half', 'kommunikáció', 'adatátvitel'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'mdix auto',
          description: 'Automatikus MDIX képesség be- vagy kikapcsolása.',
          example: 'interface fastethernet 0/1<br>mdix auto',
          category: 'interface',
          keywords: ['mdix', 'kábel', 'kereszt', 'automatikus', 'érzékelés'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'ip route',
          description: 'Statikus útvonal konfigurálása.',
          example: 'ip route 192.168.10.0 255.255.255.0 192.168.1.2',
          category: 'routing',
          keywords: ['statikus', 'útvonal', 'konfiguráció', 'alapértelmezett', 'hálózat'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'show ip protocols',
          description: 'Az aktív routing protokollok információit jeleníti meg.',
          example: 'show ip protocols',
          category: 'routing',
          keywords: ['protokoll', 'routing', 'konfiguráció', 'időzítő', 'állapot'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'router eigrp',
          description: 'EIGRP routing protokoll konfigurálása.',
          example: 'router eigrp 100<br>network 192.168.1.0 0.0.0.255',
          category: 'routing',
          keywords: ['eigrp', 'routing', 'protokoll', 'konfiguráció', 'autonóm-rendszer'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'redistribute',
          description: 'Útvonalak újraelosztása különböző routing protokollok között.',
          example: 'router ospf 1<br>redistribute eigrp 100 subnets',
          category: 'routing',
          keywords: ['újraelosztás', 'routing', 'protokoll', 'forgalom', 'konverzió'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'default-information originate',
          description: 'Alapértelmezett útvonal hirdetése egy routing protokollban.',
          example: 'router ospf 1<br>default-information originate always',
          category: 'routing',
          keywords: ['alapértelmezett', 'útvonal', 'hirdetés', 'originate', 'routing'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ip access-list',
          description: 'Nevesített hozzáférési lista létrehozása.',
          example: 'ip access-list extended BLOCK_WEB<br>deny tcp any any eq 80<br>permit ip any any',
          category: 'security',
          keywords: ['acl', 'hozzáférés', 'szűrés', 'biztonság', 'szabály'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'aaa new-model',
          description: 'AAA (Authentication, Authorization, and Accounting) engedélyezése.',
          example: 'aaa new-model',
          category: 'security',
          keywords: ['aaa', 'hitelesítés', 'jogosultság', 'elszámolás', 'biztonság'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'port-security',
          description: 'Port biztonság konfigurálása MAC-cím alapján.',
          example: 'interface fastethernet 0/1<br>switchport mode access<br>switchport port-security<br>switchport port-security maximum 2',
          category: 'security',
          keywords: ['port', 'biztonság', 'mac', 'korlátozás', 'hozzáférés'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'login block-for',
          description: 'Automatikus kizárás sikertelen bejelentkezési kísérletek után.',
          example: 'login block-for 300 attempts 3 within 120',
          category: 'security',
          keywords: ['bejelentkezés', 'blokkolás', 'védelem', 'kizárás', 'kísérlet'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ip dhcp snooping',
          description: 'DHCP snooping engedélyezése a hálózati támadások megakadályozására.',
          example: 'ip dhcp snooping<br>ip dhcp snooping vlan 10,20',
          category: 'security',
          keywords: ['dhcp', 'snooping', 'biztonság', 'támadás', 'védelem'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'show vlan',
          description: 'VLAN információk megjelenítése.',
          example: 'show vlan',
          category: 'vlan',
          keywords: ['vlan', 'lista', 'port', 'hozzárendelés', 'állapot'],
          mode: 'Felhasználói EXEC'
        },
        {
          command: 'switchport access vlan',
          description: 'Port hozzárendelése egy VLAN-hoz.',
          example: 'interface gigabitethernet 0/1<br>switchport mode access<br>switchport access vlan 10',
          category: 'vlan',
          keywords: ['vlan', 'hozzárendelés', 'port', 'access', 'kapcsoló'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'vtp',
          description: 'VLAN Trunking Protocol konfigurálása.',
          example: 'vtp mode server<br>vtp domain CISCO_DOMAIN<br>vtp password VtpP@ss',
          category: 'vlan',
          keywords: ['vtp', 'domain', 'szerver', 'kliens', 'vlan'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'switchport voice vlan',
          description: 'Hang VLAN beállítása egy interfészen.',
          example: 'interface gigabitethernet 0/1<br>switchport voice vlan 20',
          category: 'vlan',
          keywords: ['voice', 'vlan', 'telefon', 'hang', 'ip telefon'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'switchport trunk allowed vlan',
          description: 'Engedélyezett VLAN-ok megadása egy trunk porton.',
          example: 'interface gigabitethernet 0/1<br>switchport trunk allowed vlan 10,20,30',
          category: 'vlan',
          keywords: ['trunk', 'vlan', 'engedélyezett', 'lista', 'szűrés'],
          mode: 'Interfész Konfiguráció'
        },

        {
          command: 'clock set',
          description: 'Rendszeróra beállítása.',
          example: 'clock set 15:30:00 Jul 15 2023',
          category: 'basic-config',
          keywords: ['óra', 'idő', 'dátum', 'beállítás', 'rendszeridő'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'exec-timeout',
          description: 'Konzol időtúllépés beállítása.',
          example: 'line console 0<br>exec-timeout 10 0',
          category: 'basic-config',
          keywords: ['időtúllépés', 'konzol', 'automatikus', 'kilépés', 'biztonsági'],
          mode: 'Vonal Konfiguráció'
        },
        {
          command: 'logging',
          description: 'Rendszernaplózás konfigurálása.',
          example: 'logging host 192.168.1.100<br>logging trap notifications',
          category: 'basic-config',
          keywords: ['naplózás', 'syslog', 'hibajelentés', 'esemény', 'követés'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ntp server',
          description: 'NTP szerver beállítása az idő szinkronizálásához.',
          example: 'ntp server 192.168.1.5',
          category: 'basic-config',
          keywords: ['ntp', 'idő', 'szinkronizálás', 'szerver', 'hálózati'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'no ip domain-lookup',
          description: 'DNS keresés kikapcsolása a hibás parancsokhoz.',
          example: 'no ip domain-lookup',
          category: 'basic-config',
          keywords: ['dns', 'domain', 'keresés', 'kikapcsolás', 'gyorsítás'],
          mode: 'Globális Konfiguráció'
        },

        {
          command: 'ipv6 route',
          description: 'IPv6 statikus útvonal konfigurálása.',
          example: 'ipv6 route 2001:db8::/64 2001:db8:0:1::1',
          category: 'ipv6',
          keywords: ['ipv6', 'útvonal', 'statikus', 'routing', 'konfiguráció'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'show ipv6 interface',
          description: 'IPv6 interfész részletek megjelenítése.',
          example: 'show ipv6 interface gigabitethernet 0/0',
          category: 'ipv6',
          keywords: ['ipv6', 'interfész', 'állapot', 'cím', 'konfiguráció'],
          mode: 'Felhasználói EXEC'
        },
        {
          command: 'ipv6 access-list',
          description: 'IPv6 hozzáférési lista létrehozása.',
          example: 'ipv6 access-list BLOCK_TELNET<br>deny tcp any any eq 23<br>permit ipv6 any any',
          category: 'ipv6',
          keywords: ['ipv6', 'acl', 'hozzáférés', 'lista', 'szűrés'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ipv6 dhcp server',
          description: 'IPv6 DHCP szerver konfigurálása.',
          example: 'ipv6 dhcp pool IPV6_POOL<br>dns-server 2001:db8::8888<br>domain-name example.com',
          category: 'ipv6',
          keywords: ['ipv6', 'dhcp', 'szerver', 'cím', 'kiosztás'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ipv6 ospf',
          description: 'OSPFv3 protokoll engedélyezése IPv6-hoz.',
          example: 'interface gigabitethernet 0/0<br>ipv6 ospf 1 area 0',
          category: 'ipv6',
          keywords: ['ipv6', 'ospf', 'ospfv3', 'routing', 'protokoll'],
          mode: 'Globális Konfiguráció'
        },

        {
          command: 'ip ssh version 2',
          description: 'SSH verzió beállítása verziószámmal.',
          example: 'ip ssh version 2',
          category: 'ssh',
          keywords: ['ssh', 'verzió', 'biztonság', 'protokoll', 'beállítás'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ip ssh authentication-retries',
          description: 'SSH hitelesítési újrapróbálkozások számának beállítása.',
          example: 'ip ssh authentication-retries 3',
          category: 'ssh',
          keywords: ['ssh', 'hitelesítés', 'újrapróbálás', 'biztonság', 'belépés'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ip ssh time-out',
          description: 'SSH időtúllépés beállítása másodpercben.',
          example: 'ip ssh time-out 60',
          category: 'ssh',
          keywords: ['ssh', 'időtúllépés', 'idő', 'kapcsolat', 'biztonsági'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ip ssh maxstartups',
          description: 'Maximális párhuzamos SSH kapcsolatok számának beállítása.',
          example: 'ip ssh maxstartups 5',
          category: 'ssh',
          keywords: ['ssh', 'kapcsolat', 'párhuzamos', 'maximum', 'korlátozás'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ip dhcp pool',
          description: 'DHCP pool létrehozása.',
          example: 'ip dhcp pool LAN_POOL<br>network 192.168.1.0 255.255.255.0<br>default-router 192.168.1.1<br>dns-server 8.8.8.8',
          category: 'dhcp',
          keywords: ['dhcp', 'pool', 'ip', 'kiosztás', 'automatikus'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ip dhcp excluded-address',
          description: 'IP címek kizárása a DHCP kiosztásból.',
          example: 'ip dhcp excluded-address 192.168.1.1 192.168.1.10',
          category: 'dhcp',
          keywords: ['dhcp', 'kizárás', 'cím', 'tartomány', 'foglalt'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'show ip dhcp binding',
          description: 'DHCP kiosztások megjelenítése.',
          example: 'show ip dhcp binding',
          category: 'dhcp',
          keywords: ['dhcp', 'kiosztás', 'bérlés', 'mac', 'ip'],
          mode: 'Felhasználói EXEC'
        },
        {
          command: 'ip helper-address',
          description: 'DHCP továbbítás konfigurálása.',
          example: 'interface gigabitethernet 0/0<br>ip helper-address 192.168.2.10',
          category: 'dhcp',
          keywords: ['dhcp', 'relay', 'továbbítás', 'segítő', 'broadcast'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'ip dhcp relay information trusted',
          description: 'DHCP relay opció 82 bizalmi konfiguráció.',
          example: 'interface gigabitethernet 0/0<br>ip dhcp relay information trusted',
          category: 'dhcp',
          keywords: ['dhcp', 'relay', 'bizalmi', 'opció', 'információ'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'ip nat inside',
          description: 'Belső NAT interfész meghatározása.',
          example: 'interface gigabitethernet 0/0<br>ip nat inside',
          category: 'nat',
          keywords: ['nat', 'belső', 'interfész', 'hálózat', 'címfordítás'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ip nat outside',
          description: 'Külső NAT interfész meghatározása.',
          example: 'interface gigabitethernet 0/1<br>ip nat outside',
          category: 'nat',
          keywords: ['nat', 'külső', 'interfész', 'internet', 'címfordítás'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ip nat inside source list',
          description: 'Dinamikus NAT/PAT konfigurálása.',
          example: 'ip nat inside source list 1 interface gigabitethernet 0/1 overload',
          category: 'nat',
          keywords: ['nat', 'pat', 'túlterhelés', 'source', 'fordítás'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'ip nat inside source static',
          description: 'Statikus NAT konfigurálása.',
          example: 'ip nat inside source static 192.168.1.10 203.0.113.5',
          category: 'nat',
          keywords: ['nat', 'statikus', 'fordítás', 'cím', 'leképezés'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'show ip nat translations',
          description: 'NAT fordítási tábla megjelenítése.',
          example: 'show ip nat translations',
          category: 'nat',
          keywords: ['nat', 'fordítás', 'tábla', 'állapot', 'kapcsolat'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'class-map',
          description: 'Forgalmi osztály létrehozása QoS-hez.',
          example: 'class-map match-all VOICE_TRAFFIC<br>match protocol rtp<br>match dscp ef',
          category: 'qos',
          keywords: ['qos', 'osztály', 'forgalom', 'minőség', 'politika'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'policy-map',
          description: 'QoS szabályzat létrehozása.',
          example: 'policy-map QOS_POLICY<br>class VOICE_TRAFFIC<br>priority 256',
          category: 'qos',
          keywords: ['qos', 'szabályzat', 'politika', 'szolgáltatás', 'minőség'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'service-policy',
          description: 'QoS szabályzat alkalmazása egy interfészen.',
          example: 'interface gigabitethernet 0/0<br>service-policy output QOS_POLICY',
          category: 'qos',
          keywords: ['qos', 'szolgáltatás', 'alkalmazás', 'szabályzat', 'interfész'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'mls qos',
          description: 'QoS engedélyezése a kapcsolón.',
          example: 'mls qos',
          category: 'qos',
          keywords: ['qos', 'mls', 'kapcsoló', 'engedélyezés', 'minőség'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'auto qos voip',
          description: 'Automatikus QoS beállítása VoIP forgalomhoz.',
          example: 'interface gigabitethernet 0/1<br>auto qos voip cisco-phone',
          category: 'qos',
          keywords: ['qos', 'auto', 'voip', 'telefon', 'hang'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'spanning-tree mode',
          description: 'Spanning Tree protokoll módjának beállítása.',
          example: 'spanning-tree mode rapid-pvst',
          category: 'stp',
          keywords: ['stp', 'spanning-tree', 'mód', 'rstp', 'pvst'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'spanning-tree vlan priority',
          description: 'VLAN Spanning Tree prioritás beállítása.',
          example: 'spanning-tree vlan 10 priority 4096',
          category: 'stp',
          keywords: ['stp', 'prioritás', 'gyökér', 'híd', 'vlan'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'spanning-tree portfast',
          description: 'PortFast engedélyezése egy interfészen.',
          example: 'interface gigabitethernet 0/1<br>spanning-tree portfast',
          category: 'stp',
          keywords: ['stp', 'portfast', 'gyors', 'konvergencia', 'állomás'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'spanning-tree bpduguard',
          description: 'BPDU Guard engedélyezése egy interfészen.',
          example: 'interface gigabitethernet 0/1<br>spanning-tree bpduguard enable',
          category: 'stp',
          keywords: ['stp', 'bpduguard', 'védelem', 'hurok', 'biztonság'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'show spanning-tree',
          description: 'Spanning Tree információk megjelenítése.',
          example: 'show spanning-tree',
          category: 'stp',
          keywords: ['stp', 'állapot', 'információ', 'port', 'gyökér'],
          mode: 'Felhasználói EXEC'
        },
        {
          command: 'ping',
          description: 'ICMP echo kérés küldése egy címre.',
          example: 'ping 192.168.1.1',
          category: 'troubleshooting',
          keywords: ['ping', 'elérhetőség', 'teszt', 'icmp', 'kapcsolat'],
          mode: 'Felhasználói EXEC'
        },
        {
          command: 'traceroute',
          description: 'Útvonal követése egy célállomáshoz.',
          example: 'traceroute 8.8.8.8',
          category: 'troubleshooting',
          keywords: ['nyomkövetés', 'útvonal', 'hop', 'követés', 'cél'],
          mode: 'Felhasználói EXEC'
        },
        {
          command: 'debug',
          description: 'Hibakeresés különböző protokollokhoz és folyamatokhoz.',
          example: 'debug ip ospf events',
          category: 'troubleshooting',
          keywords: ['hibakeresés', 'debug', 'követés', 'elemzés', 'diagnosztika'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show tech-support',
          description: 'Részletes műszaki támogatási információk megjelenítése.',
          example: 'show tech-support',
          category: 'troubleshooting',
          keywords: ['támogatás', 'technikai', 'diagnosztika', 'információ', 'hiba'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show log',
          description: 'Rendszernaplózási üzenetek megjelenítése.',
          example: 'show log',
          category: 'troubleshooting',
          keywords: ['napló', 'log', 'hiba', 'üzenet', 'esemény'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'enable',
          description: 'Privilegizált EXEC módba belépés. A # jel megjelenése jelzi, ha ebben a módban vagyunk.',
          example: 'Router> enable\nRouter#',
          category: 'modes',
          keywords: ['privilegizált', 'belépés', 'mód', 'exec', 'admin'],
          mode: 'Felhasználói EXEC'
        },
        {
          command: 'disable',
          description: 'Kilépés a privilegizált EXEC módból és visszatérés a felhasználói EXEC módba.',
          example: 'Router# disable\nRouter>',
          category: 'modes',
          keywords: ['kilépés', 'visszatérés', 'mód', 'felhasználói', 'user'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'configure terminal',
          description: 'Belépés a globális konfigurációs módba.',
          example: 'Router# configure terminal\nRouter(config)#',
          category: 'modes',
          keywords: ['globális', 'konfiguráció', 'belépés', 'mód', 'config'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'exit',
          description: 'Kilépés a jelenlegi konfigurációs módból, vagy kapcsolat bontása.',
          example: 'Router(config)# exit\nRouter#',
          category: 'modes',
          keywords: ['kilépés', 'vissza', 'előző', 'mód', 'befejezés'],
          mode: 'Bármely Konfigurációs Mód'
        },
        {
          command: 'end',
          description: 'Kilépés bármely konfigurációs módból közvetlenül a privilegizált EXEC módba.',
          example: 'Router(config-if)# end\nRouter#',
          category: 'modes',
          keywords: ['kilépés', 'privilegizált', 'közvetlen', 'vissza', 'ctrl+z'],
          mode: 'Bármely Konfigurációs Mód'
        },
        {
          command: 'interface',
          description: 'Belépés az interfész konfigurációs módba.',
          example: 'Router(config)# interface gigabitethernet 0/1\nRouter(config-if)#',
          category: 'modes',
          keywords: ['interfész', 'konfiguráció', 'belépés', 'port', 'mód'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'line',
          description: 'Belépés a vonal (line) konfigurációs módba.',
          example: 'Router(config)# line console 0\nRouter(config-line)#',
          category: 'modes',
          keywords: ['vonal', 'konzol', 'vty', 'konfiguráció', 'mód'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'router',
          description: 'Belépés a routing protokoll konfigurációs módba.',
          example: 'Router(config)# router ospf 1\nRouter(config-router)#',
          category: 'modes',
          keywords: ['routing', 'protokoll', 'ospf', 'eigrp', 'konfiguráció'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'vlan',
          description: 'Belépés a VLAN konfigurációs módba (kapcsolón).',
          example: 'Switch(config)# vlan 10\nSwitch(config-vlan)#',
          category: 'modes',
          keywords: ['vlan', 'konfiguráció', 'virtuális', 'lan', 'kapcsoló'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'do',
          description: 'EXEC parancsok futtatása konfigurációs módból.',
          example: 'Router(config)# do show ip interface brief',
          category: 'modes',
          keywords: ['exec', 'parancs', 'futtatás', 'konfiguráció', 'módból'],
          mode: 'Bármely Konfigurációs Mód'
        },
        {
          command: 'write memory',
          description: 'Aktuális konfiguráció mentése (a copy running-config startup-config parancs alternatívája).',
          example: 'Router# write memory',
          category: 'basic-config',
          keywords: ['mentés', 'memória', 'konfiguráció', 'startup', 'tárolás'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show startup-config',
          description: 'Az indítási konfiguráció megjelenítése.',
          example: 'Router# show startup-config',
          category: 'system-info',
          keywords: ['indítás', 'konfiguráció', 'startup', 'nvram', 'mentett'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'erase startup-config',
          description: 'Az indítási konfiguráció törlése (gyári visszaállításhoz).',
          example: 'Router# erase startup-config',
          category: 'basic-config',
          keywords: ['törlés', 'gyári', 'visszaállítás', 'reset', 'alaphelyzet'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'reload',
          description: 'Az eszköz újraindítása.',
          example: 'Router# reload',
          category: 'basic-config',
          keywords: ['újraindítás', 'reset', 'boot', 'indítás', 'restart'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show cdp neighbors',
          description: 'CDP szomszédok megjelenítése (más Cisco eszközök a hálózatban).',
          example: 'Router# show cdp neighbors',
          category: 'system-info',
          keywords: ['cdp', 'szomszéd', 'discovery', 'detektálás', 'eszköz'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show protocols',
          description: 'Az eszközön konfigurált L3 protokollok állapotának megjelenítése.',
          example: 'Router# show protocols',
          category: 'system-info',
          keywords: ['protokoll', 'állapot', 'l3', 'hálózati', 'interfész'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show flash',
          description: 'A flash memória tartalmának megjelenítése.',
          example: 'Router# show flash',
          category: 'system-info',
          keywords: ['flash', 'memória', 'ios', 'image', 'tárhely'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show vtp status',
          description: 'VTP konfiguráció és állapot megjelenítése.',
          example: 'Switch# show vtp status',
          category: 'vlan',
          keywords: ['vtp', 'állapot', 'verzió', 'domain', 'konfiguráció'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'show arp',
          description: 'ARP tábla megjelenítése.',
          example: 'Router# show arp',
          category: 'troubleshooting',
          keywords: ['arp', 'tábla', 'mac', 'ip', 'cím'],
          mode: 'Privilegizált EXEC'
        },
        {
          command: 'switchport port-security violation',
          description: 'Port biztonsági szabálysértés kezelési módjának beállítása.',
          example: 'Switch(config-if)# switchport port-security violation shutdown',
          category: 'security',
          keywords: ['port', 'biztonság', 'szabálysértés', 'shutdown', 'restrict'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'ip dhcp client',
          description: 'DHCP kliens beállítása interfészhez.',
          example: 'Router(config-if)# ip address dhcp',
          category: 'dhcp',
          keywords: ['dhcp', 'kliens', 'automatikus', 'ip', 'cím'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'ip domain-name',
          description: 'Az eszköz domain nevének beállítása.',
          example: 'Router(config)# ip domain-name halozat.local',
          category: 'basic-config',
          keywords: ['domain', 'név', 'dns', 'hálózat', 'azonosító'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'clock timezone',
          description: 'Időzóna beállítása a rendszerórához.',
          example: 'Router(config)# clock timezone CET 1',
          category: 'basic-config',
          keywords: ['időzóna', 'óra', 'idő', 'rendszer', 'beállítás'],
          mode: 'Globális Konfiguráció'
        },
        {
          command: 'no shutdown',
          description: 'Interfész bekapcsolása.',
          example: 'Router(config-if)# no shutdown',
          category: 'interface',
          keywords: ['bekapcsolás', 'aktiválás', 'interfész', 'port', 'engedélyezés'],
          mode: 'Interfész Konfiguráció'
        },
        {
          command: 'shutdown',
          description: 'Interfész kikapcsolása.',
          example: 'Router(config-if)# shutdown',
          category: 'interface',
          keywords: ['kikapcsolás', 'deaktiválás', 'interfész', 'port', 'letiltás'],
          mode: 'Interfész Konfiguráció'
        },
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
  },
  methods: {
    formatExample(example: string): string {
      return example.replace(/\n/g, '<br>');
    },
  }
};
</script>

<template>
  <main class="home-container">
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

    <div class="table-container">
      <table class="commands-table">
        <thead>
          <tr>
            <th>Parancs</th>
            <th>Leírás</th>
            <th>Példa</th>
            <th>Mód</th>
            <th>Kulcsszavak</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(command, index) in filteredCommands" :key="index">
            <td class="command-cell"><code>{{ command.command }}</code></td>
            <td>{{ command.description }}</td>
            <td class="example-cell">
              <pre><code v-html="formatExample(command.example)"></code></pre>
            </td>
            <td class="mode-cell">
              <span class="mode-tooltip" :data-original="command.mode" @click="searchQuery = command.mode">
                {{ command.mode }}
              </span>
            </td>
            <td>
              <div class="keywords-container">
                <span v-for="(keyword, kIndex) in command.keywords" :key="kIndex" @click="searchQuery = keyword"
                  class="keyword">
                  {{ keyword }}
                </span>
              </div>
            </td>
          </tr>
          <tr v-if="filteredCommands.length === 0">
            <td colspan="5" class="empty-table-message">Nincsenek találatok</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  color: white;
}

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
