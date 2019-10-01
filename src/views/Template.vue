<template>
  <div>
    <Article>
      <template v-slot:title>TITLE</template>
      <template v-slot:content>
        CONTENT
      </template>
    </Article>
  </div>
</template>

<script>
import Article from '@/components/Article.vue';

export default {
  name: '',
  components: {Article}
}
</script>

<style>
</style>