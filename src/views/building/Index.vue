<template>
  <div>
    <Article>
      <template v-slot:title>WORLD EDITOR</template>
      <template v-slot:content>
        <p>Welcome to the world editor. You will find a list of relevant topics on the left, under the hamburger menu.</p>

        <p>
          This documentation is a work in progress, but the repository is open source. If there are topics you feel knowledgeable about and would like to contribute, we would gladly take the help:
          <a
            href="https://github.com/teebes/doctrine"
          >https://github.com/teebes/doctrine</a>.
        </p>

        <div class="subtitle-1">Builder Characters</div>

        <p>When you create a new world, it will come with one character already defined, called 'Builder'. This Builder Character will have access to a number of additional commands that regular characters do not have access to. To view builder commands, type 'help' in game on a builder character and look at the bottom row.</p>

        <p>
          One builder command in particular is extremely important when working on a world:
          <strong
            class="primary--text"
          >reset</strong>. This will restart the character to the beginning of the world, as if they were stepping into it in the shoes of a new user. You will use this command often when starting out to reset values on certain things.
        </p>

        <p>You are encouraged to read each help entry for builder commands in-game, especially: load, purge, regen, and force.</p>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "",
  components: { Article }
};
</script>

<style>
</style>