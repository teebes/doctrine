<template>
  <div>
    <Article>
      <template v-slot:title>MODERATION</template>
      <template v-slot:content>

        <p>In an ideal world, all players always behave and you never have to take punitive action. In practice, that
          never happens. To help with this, Builders have a few commands to moderate problematic actors.</p>

        <div class="subtitle-1">/nochat</div>

        <p>The tamest command, <code>/nochat</code> will prevent a character from using the 'chat' channel. They can
          still say, yell, tell, gossip and clan chat. But since chat is enabled for all players by default, this can be
          a good start in limiting harm.</p>

        <div class="subtitle-1">/mute</div>

        <p>The <code>/mute</code> command will prevent a character from using <i>any</i> communication method. The only
          thing a muted player is able to do is send tells to builders. This is useful when a player has gone ballistic
          and is using any and all possible channels to spam or harass.</p>

        <div class="subtitle-1">/ban</div>

        <p>The <code>/ban</code> command will prevent a character from entering a world altogether. It will not actually
          remove them from the world while they are in it though so it is often best used in conjunction with the
          <code>/kick</code> command.
        </p>

        <div class="subtitle-1">/kick</div>

        <p>The <code>/kick</code> command will kick a character out of a world. If they're not also banned though,
          they'll
          be able to rejoin - so this can be useful as a warning tool.</p>

        <div class="subtitle-1">Escalate to Staff</div>

        <p>All of the above commands only act on one given player character. If a user has multiple characters in
          your world (which is common), they may cycle through them or keep creating new characters to cause more grief. If that is the case,
          contact a Staff member on Discord. They are able to mute or ban entire user accounts, as well as IP ban.</p>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "Commands",
  components: { Article },
};
</script>

<style></style>