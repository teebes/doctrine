<template>
  <div>
    <Article>
      <template v-slot:title>CODE OF CONDUCT</template>
      <template v-slot:content>
        <div
          class="mb-8"
        ></div>

        <p>To ensure a safe, enjoyable, and friendly environment for everyone, we ask all Written Realms players and builders to adhere to the following Code of Conduct.</p>

        <ol class='ml-4'>
          <li class='mb-2'><strong>One Account Per Player</strong>: Each player is allowed only one Written Realms account.</li>
          <li class='mb-2'><strong>Respect and Inclusivity</strong>: Treat other players with respect. Racism, sexism, and any form of discrimination or harassment are strictly prohibited.</li>
          <li class='mb-2'><strong>Be Kind, Not Toxic</strong>: Engage positively with others. Avoid toxic behavior, trolling, or being intentionally disruptive.</li>
          <li class='mb-2'><strong>No Spamming</strong>: Do not spam in chat, yells, tells, Discord or any other communication channels.</li>
          <li class='mb-2'><strong>Fair Play</strong>: Exploiting bugs or glitches in the game for personal gain is not allowed.</li>
          <li class='mb-2'><strong>System Integrity</strong>: Do not intentionally try to cause lag, crashes, or otherwise harm the stability and performance of the platform.</li>
          <li class='mb-2'><strong>Moderate Language</strong>: Keep your language clean. Excessive swearing is not permitted.</li>
          <li class='mb-2'><strong>Privacy and Safety</strong>: Do not share personal information of yourself or others. Also, do not attempt to invade the privacy of other players.</li>
          <li class='mb-2'><strong>No Cheating</strong>: Using third-party software, macros, or any form of cheating to gain an unfair advantage is prohibited.</li>
          <li class='mb-2'><strong>Cooperate with Moderators</strong>: If a moderator addresses an issue with you, please cooperate and follow their guidance.</li>
          <li class='mb-2'><strong>Constructive Feedback</strong>: While criticism is allowed, it should be constructive. Avoid rude or abusive comments about the game or its developers.</li>
          <li class='mb-2'><strong>Respect Intellectual Property</strong>: Do not post or share content that infringes on the intellectual property rights of others.</li>
        </ol>

        <p>Violations of this Code of Conduct can result in penalties, including temporary suspensions or permanent bans, depending on the severity of the infringement.</p>

        <p>Last modified 2023/11/18</p>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";
import axios from "axios";

export default {
  name: "",
  components: { Article },
  data() {
    return {
      archetypes: ["warrior", "mage", "cleric", "assassin"],
      skills_data: null
    };
  },

  created: async function() {
    const resp = await axios.get(`/public/skills`);
    this.skills_data = resp.data;
  }
};
</script>

<style></style>
