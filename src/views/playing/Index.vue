<template>
  <div>
    <Article>
      <template v-slot:title>PLAYING</template>
      <template v-slot:content>
        We are focusing on the world editor documentation right now, but this section will be fleshed out ASAP. If you would like to make contributions, however, the repository is open source so do not be shy:
        <a
          href="https://github.com/teebes/doctrine"
        >https://github.com/teebes/doctrine</a>.
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "Playing",
  components: { Article }
};
</script>

<style>
</style>