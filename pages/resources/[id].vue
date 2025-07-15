<script setup lang="tsx">
definePageMeta({
  layout: 'detail',
})

const { params } = useRoute()
if (!('id' in params) || typeof params.id !== 'string')
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })

const markdown = await queryCollection('resources').where('title', '=', params.id).first()
if (!markdown)
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
</script>

<template>
  <div>
    <h1>{{ markdown.title }}</h1>
    <div v-for="(item, index) in markdown.sources ?? []" :key="index">
      {{ item.sourceType }}
    </div>
  </div>
</template>
