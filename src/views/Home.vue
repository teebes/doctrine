<template>
  <div>
    <Article>
      <template v-slot:title>Written Realms Documentation</template>
      <template v-slot:content>
        <p class="mt-12">
          Welcome to the documentation for Written Realms, a platform for
          <router-link to="/playing">playing</router-link>&nbsp;and
          <router-link to="/building">building</router-link>&nbsp;text-based adventure games. What would you like to know more about?
        </p>

        <div class="d-flex mx-auto doc-sections">
          <div class="d-flex flex-grow-1 flex-column justify-center align-center" style="flex: 1">
            <router-link to="/playing">
              <v-icon x-large>mdi-sword</v-icon>
              <div>Playing</div>
            </router-link>
          </div>

          <div class="d-flex flex-grow-1 flex-column justify-center align-center" style="flex: 1">
            <router-link to="/building">
              <v-icon x-large>mdi-wrench</v-icon>
              <div>Building</div>
            </router-link>
          </div>
        </div>

        <div class="pt-12">
          <p>
            If you find gaps and would like to contribute, the repository for this codebase is open source, at
            <a
              href="https://github.com/teebes/doctrine"
            >https://github.com/teebes/doctrine</a>. Feel free to submit a pull request!
          </p>
        </div>
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

<style lang='scss'>
.doc-sections {
  width: 300px;
  margin: 100px 0;
  a > div {
    color: white;
  }
  a:hover > div {
    color: inherit;
  }
}
</style>