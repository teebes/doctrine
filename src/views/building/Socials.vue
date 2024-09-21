<template>
  <div>
    <Article>
      <template v-slot:title>SOCIALS</template>
      <template v-slot:content>
        <p>Socials are a staple of Multi User Dungeons. They are templated emotes defined by the world's builders that players and mobs can use to socially interact with each other. Some examples might be  nod, shrug, wave, smile, laugh, sigh, shake, or slap. They can add a lot of personalized flavor to your world.</p>

        <p>Mobs are able to use all of the same emotes that are available to player.</p>

        <div class="subtitle-1">Command</div>

        <p>When creating a social, the first thing to define is what the actual command is. For example for a social that makes a character smile, you would define a <code>smile</code> social. If you want them to laugh, you could define a <code>laugh</code> social. Defining a social adds a command to that world, and a player or mob executing that command will trigger the emote as defined by the social.</p>

        <p>Socials can be used with or without arguments. For example, if a player enters <code>smile</code>, they might see a message that reads "You smile happily.", while everyone in their room might see "John smiles happily." However if they enter <code>smile soldier</code>, the player might see "You smile at a soldier.", the soldier might see "John smiles at you.", and everyone else in the room might see "John smiles at a soldier." For this reason, 5 different message fields can be defined per social command, one per possible output.</p>

        <div class="subtitle-1">Social Messages</div>

        <p>Socials can be designed to work with and without an argument, or to not take an argument, or to require an argument. To be able to take no arguments, the (Standalone, Self) and (Standalone, Other) messages must both be defined. To be able to take an argument, the (Targeted, Self), (Targeted, Target) and (Targeted, Other) messages must all be defined.</p>

        <p>If a social only has the Standalone messages defined and is invoked with an argument, it will behave as if it'd been invoked without the argument. If a social only has the Targeted messaged defined and is invoked without an argument, an error will be returned specifying that a target needs to be passed in.</p>

        <p>The 5 different message fields that can be defined ensure that all of the involved characters receieve the correct text, as defined below.</p>

        <div class="subtitle-2">Message (Standalone, Self)</div>

        <p>This is the message that the character executing the social will see if they do so without an argument, for example invoking <code>smile</code> without specifying a target.</p>

        <div class="subtitle-2">Message (Standalone, Room)</div>

        <p>This is the message that the other characters in the room will see when someone executes the social command without an argument, for example invoking <code>smile</code> without specifying a target.</p>

        <div class="subtitle-2">Message (Targeted, Self)</div>

        <p>This is the message that the character executing the social will see if they do so with an argument, for example invoking <code>smile john</code>.</p>

        <div class="subtitle-2">Message (Targeted, Target)</div>

        <p>This is the message that the target of the social will see when someone executes the command with an argument, for example invoking <code>smile john</code>. This message is the one that John will see.</p>

        <div class="subtitle-2">Message (Targeted, Others)</div>

        <p>This is the message that the other characters in the room will see when someone executes the social command with an argument, for example invoking <code>smile john</code>. This message is the one that the characters in the room who are neither the player invoking the command nor the target will see.</p>

        <div class="subtitle-1">Message Substitutions</div>

        <p>Reference variables to both the actor of the social and its target can be inserted into the messages. Those variables will be converted to the right values at runtime.</p>

        <div class="subtitle-2">Actor References</div>

        <ul class="mb-4">
          <li><code><span v-pre>{{</span> actor <span v-pre>}}</span></code> - the actor's name</li>
          <li><code><span v-pre>{{</span> Actor <span v-pre>}}</span></code> - the actor's name with the first letter capitalized</li>
          <li><code><span v-pre>{{</span> actor_title <span v-pre>}}</span></code> - the actor's title</li>
          <li><code><span v-pre>{{</span> actor_marks.&lt;mark&gt; <span v-pre>}}</span></code> - any of the actor's marks (replace &lt;mark&gt; with the mark's name)</li>
          <li><code><span v-pre>{{</span> actor_subject_pronoun <span v-pre>}}</span></code> - he, she, they</li>
          <li><code><span v-pre>{{</span> actor_object_pronoun <span v-pre>}}</span></code> - him, her, them</li>
          <li><code><span v-pre>{{</span> actor_possessive_adjective <span v-pre>}}</span></code> - his, her, their</li>
          <li><code><span v-pre>{{</span> actor_possessive_pronoun <span v-pre>}}</span></code> - his, hers, theirs</li>
          <li><code><span v-pre>{{</span> actor_reflexive_pronoun <span v-pre>}}</span></code> - himself, herself, themselves</li>
        </ul>

        <div class="subtitle-2">Target References</div>

        <ul class="mb-4">
          <li><code><span v-pre>{{</span> target <span v-pre>}}</span></code> - the target's name</li>
          <li><code><span v-pre>{{</span> Target <span v-pre>}}</span></code> - the target's name with the first letter capitalized.</li>
          <li><code><span v-pre>{{</span> target_title <span v-pre>}}</span></code> - the target's title</li>
          <li><code><span v-pre>{{</span> target_marks.&lt;mark&gt; <span v-pre>}}</span></code> - any of the target's marks (replace &lt;mark&gt; with the mark's name)</li>
          <li><code><span v-pre>{{</span> target_subject_pronoun <span v-pre>}}</span></code> - he, she, they</li>
          <li><code><span v-pre>{{</span> target_object_pronoun <span v-pre>}}</span></code> - him, her, them</li>
          <li><code><span v-pre>{{</span> target_possessive_adjective <span v-pre>}}</span></code> - his, her, their</li>
          <li><code><span v-pre>{{</span> target_possessive_pronoun <span v-pre>}}</span></code> - his, hers, theirs</li>
          <li><code><span v-pre>{{</span> target_reflexive_pronoun <span v-pre>}}</span></code> - himself, herself, themselves</li>
        </ul>

        <div class="subtitle-1">Full Example</div>

        <p>Here is a full example of a <code>frown</code> social meant to describe someone frowning.</p>

        <ul class="mb-4">
          <li>cmd: <code>frown</code></li>
          <li>Message (Standalone, Self): <code>What's wrong?</code></li>
          <li>Message (Standalone, Other): <code><span v-pre>{{</span> Actor <span v-pre>}}</span> frowns.</code></li>
          <li>Message (Targeted, Self): <code>You frown at <span v-pre>{{</span> target <span v-pre>}}</span>... trying to tell <span v-pre>{{</span> target_object_pronoun <span v-pre>}}</span> something?</code></li>
          <li>Message (Targeted, Target): <code><span v-pre>{{</span> Actor <span v-pre>}}</span> frowns at you... is <span v-pre>{{</span> actor_subject_pronoun <span v-pre>}}</span> trying to tell you something?</code></li>
          <li>Message (Targeted, Other): <code><span v-pre>{{</span> Actor <span v-pre>}}</span> frowns at <span v-pre>{{</span> target <span v-pre>}}</span>... is <span v-pre>{{</span> actor_object_pronoun <span v-pre>}}</span> trying to tell <span v-pre>{{</span> target_object_pronoun <span v-pre>}}</span> something?</code></li>
        </ul>

        <p>In the above setup, if John enters <code>frown</code> with no arguments:</p>

        <ul class="mb-4">
          <li>John will see a message saying "What's wrong?"</li>
          <li>Everyone else in the room will see a message saying "John frowns."</li>
        </ul>

        <p>If John enters <code>shrug mary</code>:</p>

        <ul class="mb-4">
          <li>John will see a message saying "You frown at Mary... trying to tell her something?"</li>
          <li>Jack will see a message saying "John frowns at you... is he trying to tell you something?"</li>
          <li>Everyone else in the room will see a message saying "John frowns at Mary... is he trying to tell her something?"</li>
        </ul>

        <!-- <div class="subtitle-1">Priority</div>

        <p>Assume you've defined two socials <code>smite</code> and <code>smile</code>. Written Realms always recognizes partial commands typed with fewer letters as long as the result i unambiguous. For example <code>smite</code> and <code>smit</code> will both resolve to the same <code>smite</code> command.</p>

        <p>But what if a player enters <code>smi</code>? Will that resolve to <code>smite</code> or <code>smile</code>? By default, it will be <code>smile</code> because it comes first alphabetically (l before t). If you want <code>smi</code> to resolve <code>smite</code> instead, you would assign priority 1 to <code>smite</code> and priority 2 to <code>smile</code>.</p>

        <p>This is sort of a rare concern so most of the time you can just ignore the priority field.</p> -->

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