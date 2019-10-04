<template>
  <div>
    <Article>
      <template v-slot:title>Written Realms Docs</template>
      <template v-slot:content>

        <p>Welcome to the documentation for Written Realms, a work in progress.</p>

        <p>We are currently focusing on <router-link to="/building">documenting the world editor</router-link>, but will be adding gameplay documentation as soon as possible.</p>

        <p>
          If you find gaps and would like to contribute, the repository for this codebase is open source, at
          <a
            href="https://github.com/teebes/doctrine"
          >https://github.com/teebes/doctrine</a>. Feel free to submit a pull request!
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
