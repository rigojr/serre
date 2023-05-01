<script lang="ts">
import { defineComponent } from 'vue';

import { cardWidgetProperties } from './card-widget-properties';

export default defineComponent({
  'name': 'card-widget',
  'props': cardWidgetProperties
});
</script>

<template>
  <div class="card-widget">
    <figure class="card-widget__figure">
      <img
        :src="image"
        alt="Shoes"
      />
    </figure>
  <div class="card-widget__body">
    <div class="card-widget__body-content">
      <h2 class="card-widget__title">{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
    <div class="card-widget__actions">
      <button class="card-widget__btn-action">{{ actionLabel }}</button>
    </div>
    <div class="card-widget__badges">
      <div
        v-for="badge in badges"
        class="card-widget__badge"
      >
        {{ badge }}
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.card-widget {
  @apply card;

  @apply w-80;

  @apply shadow-xl;

  &__body {
    @apply card-body;
  }

  &__title {
    @apply text-xl;
  }

  &__actions {
    @apply flex;
    @apply justify-end;
  }

  &__btn-action {
    @apply btn;
    @apply btn-primary;
    @apply btn-xs;
  }

  &__badge {
    @apply badge;
    @apply badge-secondary;

    @apply mx-1;
  }
}
</style>
