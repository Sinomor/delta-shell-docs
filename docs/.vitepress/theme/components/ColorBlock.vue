<script setup>
const props = defineProps({
  color: { type: String, required: true },
  width: { type: String, default: '15px' },
  height: { type: String, default: '15px' }
})
</script>

<template>
  <div
    :style="{
      display: 'inline-block',
      backgroundColor: color,
      width,
      height,
      borderRadius: '4px',
      verticalAlign: 'middle'
    }"
  ></div>
</template>

