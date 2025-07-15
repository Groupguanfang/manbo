<script setup lang="tsx">
const error = useError()
</script>

<template>
  <div>
    <h1>Error {{ error?.statusCode }}</h1>
    <p>{{ error?.statusMessage }}</p>
    <NuxtLink to="/">
      Go back to home
    </NuxtLink>
  </div>
</template>
