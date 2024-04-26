<template>
  <div>
    <Article>
      <template v-slot:title>COMMUNICATION</template>
      <template v-slot:content>

        <p>There are many ways to communicate within worlds. Although each command works the same way across worlds,
          different builders may have different moderation criteria so always check with your builder if you have
          etiquette questions</p>

        <div class="subtitle-1">Muting</div>

        <p>If for any reason you want to stop receiving messages from a particular player character, you can use the
          <code>mute</code> command. This will shield you from all their communications.
        </p>

        <div class="subtitle-1">Tell</div>

        <p>The <code>tell</code> command (shorthand <code>t</code>) sends a direct, private message to another character.</p>

        <p>Note: Staff Members are able to view all commands, including tells, so that they may investigate and address abuse and harassment claims when they are raised.</p>

        <div class="subtitle-1">Reply</div>

        <p>The <code>reply</code> command (shorthand <code>rep</code>) sends a direct message to the last character who sent you a tell.</p>

        <div class="subtitle-1">Say</div>

        <p>The <code>say</code> (shorthand <code>sa</code>) command will make your character speak to everyone in the room. Characters of all core
          factions
          will see that you said something, though depending on world configuration they may not be able to understand
          what you're saying.</p>

        <div class="subtitle-1">Emote</div>

        <p>The <code>emote</code> command (shorthand <code>em</code>) will emote an action to everyone in the room. For
          example if a character named
          'john' enters <code>emote sits down.</code>, everyone in the room will see a message saying "John sits down."
          Characters of all core factions will see that you emoted something, though depending on world configuration
          they
          may not actually see what you did and instead will read a message that you gesticulated strangely.</p>

        <div class="subtitle-1">Yell</div>

        <p>The <code>yell</code> command (shorthand <code>y</code>) will make your character yell something to everyone
          in your zone. Characters of
          all core factions
          will see that you yelled something, though depending on world configuration they may not be able to understand
          what you said.</p>

        <div class="subtitle-1">Chat</div>

        <p>The <code>chat</code> command (shorthand <code>ch</code>) will send a message to everyone in the game that
          shares your core faction. All
          player characters
          start out listening to the chat channel and you should be mindful that not everyone may want to hear your
          every thought. The chat
          channel may be moderated, at the discretion of the builder.</p>

        <p>If you ever want to stop listening to chat (or re-enable it), you can use the <code>listen chat</code>
          command.</p>

        <div class="subtitle-1">Gossip</div>

        <p>The <code>gossip</code> command (shorthand <code>go</code>) will send a message to everyone in the game that
          shares your core faction.
          Unlike chat, gossip has to be opted into via the <code>listen</code> command and therefore tends to be less
          moderated. It is a good place for non-game related banter.</p>

        <div class="subtitle-1">Clan Chat</div>

        <p>The <code>cchat</code> command (shorthand <code>cc</code>) will send a message to everyone in your clan. It
          is generally not moderated, leaving it up to the clan leader to pick and enforce rules.</p>


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