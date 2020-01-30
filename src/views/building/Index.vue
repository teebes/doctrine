<template>
  <div>
    <Article>
      <template v-slot:title>WORLD EDITOR</template>
      <template v-slot:content>
        <p>Written Realms lets you create your own text-based worlds. You don't need to know how to program, or to download anything. All of the world editing is done right in the browser, and it even works great on mobile.</p>

        <div class="subtitle-1">Builder Characters</div>

        <p>When you create a new world, it will come with one character already defined, called 'Builder'. This Builder Character will have access to a number of additional commands that regular characters do not have access to. To view builder commands, type 'help' in game on a builder character and look at the bottom row.</p>

        <p>
          One builder command in particular is extremely important when working on a world:
          <kbd>reset</kbd>. This will restart the character to the beginning of the world, as if they were stepping into it in the shoes of a new user. You will use this command often when starting out to reset values on certain things.
        </p>

        <p>
          You are encouraged to read each help entry for builder commands in-game, especially:
          <kbd>load</kbd>,
          <kbd>purge</kbd>,
          <kbd>regen</kbd>, and
          <kbd>force</kbd>.
        </p>
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