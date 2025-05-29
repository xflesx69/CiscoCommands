<script lang="ts">
export default {
  name: 'CodeBlock',
  props: {
    code: {
      type: String,
      required: true
    },
    copybutton: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      copied: false,
      copyTimeout: null as number | null
    };
  },
  methods: {
    formatCode(code: string): string {
      return this.escapeHtml(code);
    },

    escapeHtml(code: string): string {
      return code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    },

    copyCode() {
      const textToCopy = this.code
        .replace(/<br\s*\/?>/gi, '\n') // Convert <br> tags to newlines
        .replace(/&lt;/g, '<')          // Replace &lt; with <
        .replace(/&gt;/g, '>')          // Replace &gt; with >
        .replace(/&amp;/g, '&')         // Replace &amp; with &
        .replace(/&quot;/g, '"')        // Replace &quot; with "
        .replace(/&#39;/g, "'");        // Replace &#39; with '

      navigator.clipboard.writeText(textToCopy).then(() => {
        this.copied = true;

        if (this.copyTimeout) {
          clearTimeout(this.copyTimeout);
        }

        this.copyTimeout = setTimeout(() => {
          this.copied = false;
        }, 2000) as unknown as number;
      });
    }
  }
};
</script>

<template>
  <div class="code-block-container">
    <button @click="copyCode" v-if="copybutton" class="copy-button" :class="{ 'copied': copied }"
      title="Copy to clipboard">
      <span v-if="!copied">Másolás</span>
      <span v-else>Másolva!</span>
    </button>
    <pre><code v-html="formatCode(code)"></code></pre>
  </div>
</template>

<style scoped>
.code-block-container {
  position: relative;

  .copy-button {
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: rgba(70, 130, 180, 0.8);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 0.8rem;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.2s ease;
    z-index: 5;
    display: none;

    &:hover {
      opacity: 1;
      background-color: rgba(70, 130, 180, 1);
    }

    &.copied {
      background-color: #4caf50;
      opacity: 1;
    }
  }

  &:hover .copy-button {
    display: block;
  }
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

@media (max-width: 768px) {
  code {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }

  .copy-button {
    font-size: 0.7rem;
    padding: 3px 8px;
  }
}
</style>
