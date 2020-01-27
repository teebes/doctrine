<template>
  <div>
    <Article>
      <template v-slot:title>FAQ</template>
      <template v-slot:content>
        <div class="headline mb-4">General</div>
        <div v-for="item in general" :key="item.question">
          <div class="subtitle-1">{{ item.question }}</div>
          <p>{{ item.answer }}</p>
        </div>
        <v-divider></v-divider>
        <div class="headline mb-4 mt-4">Playing</div>
        <div v-for="item in playing" :key="item.question">
          <div class="subtitle-1">{{ item.question }}</div>
          <p>{{ item.answer }}</p>
        </div>
        <v-divider></v-divider>
        <div class="headline mb-4 mt-4">Building</div>
        <div v-for="item in building" :key="item.question">
          <div class="subtitle-1">{{ item.question }}</div>
          <p>{{ item.answer }}</p>
        </div>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "FAQ",
  components: { Article },
  data() {
    return {
      general: [
        {
          question: "What is Written Realms?",
          answer:
            "Written Realms is a platform for interactive fiction games. It is a modern take on Multi-User Dungeons, but web-based and using websockets rather than telnet for the connection protocol."
        },
        {
          question: "What is a MUD?",
          answer:
            "MUD stands for multi-user dungeon, and they're games in which players can interact with each other, and the world, in a text-based medium."
        },
        {
          question: "Can I connect with my own MUD client through telnet?",
          answer:
            "At this time, clients can only connect through websockets.  While anyone can build their own websocket client to connect to the game, or fork the existing client, players primarily connect through the client found on WrittenRealms.com"
        }
      ],
      playing: [
        {
          question:
            "I could only start as a warrior.  How do I pick other classes?",
          answer:
            "Playing through the tutorial on the homepage will set your class as a warrior, and you'll be placed into the flagship world The Unbroken World upon completion of the tutorial.  To create a character of another class, visit the Worlds link and create a new character in the lobby of your chosen world."
        },
        {
          question: "I found a bug!  How do I report it?",
          answer:
            "Good work!  Head to the Written Realms Discord and let the staff know on the #bugs channel.  Screenshots or details on how you found the bug will be very helpful."
        }
      ],
      building: [
        {
          question: "How do I make my world multiplayer?",
          answer:
            "Multiplayer worlds are currently tied to a tier of a Patreon support.  Visit the Written Realms Patreon for more information."
        }
      ]
    };
  }
};
</script>

<style></style>
