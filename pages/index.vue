<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <provet-button variant="primary" @click="count++">
    Count is: {{ count }}
  </provet-button>
  <provet-stack gap="s">
  <provet-badge>Neutral</provet-badge>
  <provet-badge variant="danger">Danger</provet-badge>
  <provet-badge variant="warning">Warning</provet-badge>
  <provet-badge variant="success">Success</provet-badge>
  <provet-badge variant="info">Info</provet-badge>
  <provet-badge variant="highlight">Highlight</provet-badge>
</provet-stack>
</template>