<template>
  <div>
    <Article>
      <template v-slot:title>PLAYING</template>
      <template v-slot:content>
        <blockquote class="blockquote">
          "Written Realms is a platform for interactive fiction games. It is a
          modern take on Multi-User Dungeons, but web-based and using websockets
          rather than telnet for the connection protocol. This, combined with
          its responsive front-end, makes the worlds of Written Realms playable
          anywhere: on a mobile browser to pass 5 minutes of free time, or on a
          computer for challenging encounters and longer play sessions."
        </blockquote>
        <p>
          The entries within this section deal offer guidance on playing in the
          worlds of Written Realms. As this is a platform for hosting numerous
          worlds, each with their own quests, items, creatures, and more, these
          guides only serve to hilight the common commands and conventions
          supported by the platform and shared across worlds. For questions on
          regarding a specific world, check out Written Realms on Discord, where
          you'll likely find the author(s) are more than willing to help!
        </p>
        <div class="subtitle-1">Getting Started</div>
        <p>
          If you've not yet made an account, you can jump right on and try out
          the platform by hitting the Play button on the homepage. This will put
          you into the tutorial, which will teach you the basics of interacting
          with the world. Upon completion, you'll be able to make an account and
          continue your adventures in The Unbroken World, the flagship game of
          Written Realms. Alternately, to explore the other worlds on the
          platform, hit the Worlds link after creating your account to view the
          list of player creations.
        </p>
        <div class="subtitle-1">Single and Multi-player Worlds</div>
        <p>
          Worlds can be either single player (by default) or multi-player
          (unlocked through Patreon). The Unbroken World is multi-player, and
          there you'll find the largest concentration of players on the
          platform.
        </p>
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

<style></style>
