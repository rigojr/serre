<script lang="ts">
import { defineComponent } from 'vue';

/**
 * Setups the component.
 */
function setup(): Record<string, unknown> {
  return {};
}

export default defineComponent({
  'name': 'nav-bar-widget',
  'setup': setup
});
</script>

<template>
  <nav class="nav-bar-widget">
    <div class="nav-bar-widget__left-content">
      <h1 class="nav-bar-widget__title">
        Serre
      </h1>
      <p class="nav-bar-widget__tag-line">
        by @rigojr
      </p>
    </div>
    <div class="nav-bar-widget__right-content">
      <button class="nav-bar-widget__button">
        About
      </button>
    </div>
  </nav>
</template>

<style lang="scss">
.nav-bar-widget {
  @apply prose;

  @apply navbar;
  @apply justify-between;

  @apply max-w-none;
  @apply w-full;
  @apply max-w-4xl;
  @apply mx-auto;
  @apply my-2;

  &__title { // TODO: should apply for all titles h* for that I need to add ITCSS
    @apply pe-2;
    @apply m-0;
    @apply text-primary;
  }

  &__tag-line {
    @apply self-end;

    @apply m-0;

    @apply text-xs;
  }

  &__button {
    @apply btn;
    @apply btn-primary;
  }
}
</style>