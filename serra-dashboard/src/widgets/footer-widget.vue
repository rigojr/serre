<script lang="ts">
import { defineComponent } from 'vue';

function setup(): Record<string, unknown>{
  return {
    'currentYear': new Date().getFullYear()
  }
}

export default defineComponent({
  'name': 'footer-widget',
  'setup': setup
});
</script>

<template>
  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <div>
      <p>Copyright © {{ currentYear }} - All right reserved by Aeros International LLC</p>
    </div>
  </footer>
</template>
