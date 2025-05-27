<script lang="ts">
import type { CiscoCommands } from '@/assets/types/cisco.ts';
import CodeBlock from '@/components/CodeBlock.vue';

export default {
  name: 'CommandsTable',
  components: {
    CodeBlock
  },
  props: {
    filteredCommands: {
      type: Array as () => CiscoCommands[],
      required: true
    },
    searchQuery: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateSearchQuery(value: string) {
      this.$emit('update:searchQuery', value);
    }
  }
};
</script>

<template>
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
            <CodeBlock :code="command.example" :copybutton="false" />
          </td>
          <td class="mode-cell">
            <span class="mode-tooltip" :data-original="command.mode" @click="updateSearchQuery(command.mode)">
              {{ command.mode }}
            </span>
          </td>
          <td>
            <div class="keywords-container">
              <span v-for="(keyword, kIndex) in command.keywords" :key="kIndex" @click="updateSearchQuery(keyword)"
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
</template>

<style scoped>
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
  cursor: pointer;
}

.empty-table-message {
  text-align: center;
  padding: 2rem 0;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}

@media (max-width: 768px) {
  .commands-table {
    font-size: 0.9rem;
  }

  .commands-table th,
  .commands-table td {
    padding: 0.5rem;
  }

  .example-cell {
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  .example-cell {
    max-width: 200px;
  }
}
</style>
