<template>
  <NuxtExample
    dir="routing/pages"
    :nav="nav"
    current-route
  >
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtExample>
</template>

<script setup lang="ts">
import '@provetcloud/css'
import '@provetcloud/web-components'

const router = useRouter()

const nav = [
  { label: 'Signup', to: '/' },
]
</script>

