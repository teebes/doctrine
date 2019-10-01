<template>
  <div>
    <Article>
      <template v-slot:title>DOCTRINE</template>
      <template v-slot:content>
        <p>Welcome to the documentation for Written Realms, which is still in construction.</p>

        <p>
          If you find gaps and would like to contribute, the repository for this codebase is open source at
          <a
            href="https://github.com/teebes/doctrine"
          >https://github.com/teebes/doctrine</a>. Feel free to submit a PR!
        </p>

        <p>We are currently focusing on documenting the world editor, but will be adding gameplay documetation as soon as possible.</p>

        <p>
          View the world editor documentation
          <router-link to="/building">here</router-link>.
        </p>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "Home",
  components: {
    Article
  }
};
</script>
