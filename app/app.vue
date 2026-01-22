<script setup lang="ts">

</script>

<template>
  <NuxtLoadingIndicator
    color="#EC8C2E"
    :height="3"
    :duration="2500"
    :throttle="0"
  />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
  </NuxtLayout>
</template>
