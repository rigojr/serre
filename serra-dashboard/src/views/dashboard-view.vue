<script lang="ts">
import { defineComponent } from 'vue';

import NavBarWidget from '@src/widgets/nav-bar-widget.vue';
import CardWidget from '@src/widgets/card-widget.vue';
import FooterWidget from '@src/widgets/footer-widget.vue';

/**
 * Setups the view.
 */
function setup(): Record<string, unknown> {
  return {};
}

export default defineComponent({
  'name': 'dashboard-view',
  'components': {
    NavBarWidget,
    CardWidget,
    FooterWidget
  },
  'setup': setup
});
</script>

<template>
  <div class="dashboard-view">
    <nav-bar-widget />
    <div class="dashboard-view__cards-container">
      <card-widget
        image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        title="Shoes"
        content="If a dog chews shoes whose shoes does he choose?"
        :badges="['netural', 'basic', 'theme']"
      />
    </div>
    <footer-widget />
  </div>
</template>

<style lang="scss">
.dashboard-view {
  @apply w-full;

  &__cards-container {
    @apply m-10;
  }
}
</style>
