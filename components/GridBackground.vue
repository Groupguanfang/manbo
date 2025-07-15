<script setup lang="ts">
const props = defineProps({
  size: {
    type: Number,
    default: 30,
  },
  color: {
    type: String,
    default: 'rgb(0 0 0 / 16%)',
  },
  lineWidth: {
    type: Number,
    default: 1,
  },
})

const gridStyle = computed(() => ({
  '--grid-size': `${props.size}px`,
  '--grid-color': props.color,
  '--line-width': `${props.lineWidth}px`,
}))
</script>

<template>
  <div class="grid-container" :style="gridStyle">
    <div class="grid-pattern" />
  </div>
</template>

<style scoped>
.grid-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(var(--grid-color) var(--line-width), transparent var(--line-width)),
    linear-gradient(90deg, var(--grid-color) var(--line-width), transparent var(--line-width));
  background-size: var(--grid-size) var(--grid-size);
  background-position: calc(var(--line-width) * -0.5) calc(var(--line-width) * -0.5);
}
</style>
