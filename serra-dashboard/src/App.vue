<script lang="ts">
import { defineComponent } from 'vue';
import DashboardView from './views/dashboard-view.vue';

export default defineComponent({
  'name': 'app',
  'components': { DashboardView }
})
</script>

<template>
  <div class="app">
    <dashboard-view />
  </div>
</template>

<style lang="scss">
.app {
  @apply flex;
  @apply justify-center;

  @apply bg-gray-50;
}
</style>
