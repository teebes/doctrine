<template>
  <div>
    <Article>
      <template v-slot:title>WORLDS OVERVIEW</template>
      <template v-slot:content>
        
        <p>The world is the fundamental unit of building in Written Realms. Each world is isolated from all others, and is broken down by zones and rooms. The room is the unit of space where characters and items reside, and a zone is a grouping of rooms for the purposes of managing quests, loads and paths.</p>

        <div class="subtitle-1">Single or Multi Player</div>

        <p>The first decision you have to make when creating a new world is whether it is single player or multi player. Though similar in a lot of ways, they have important differences:</p>

        <ul>
          <li>Each player entering a single player world spawns an instance of that world unique to the player. If there is a dragon guarding the entrance to a cave, each player will see its own copy of the dragon.</li>
          <li>Players in multiplayer worlds share the same environment. If player A slays the dragon at the entrance of the cave, it will be dead for player B as well, until it respawns.</li>
          <li>A player exiting a single player world will immediately spin down and store that world away. When they log back in, the world will be restored just as it was before they logged out. By contrast, a multiplayer world keeps running after one of its player disconnects.</li>
          <li>Multiplayer worlds must continually respawn their items and mobs so that new players are able to collect and slay them. Single player worlds can have respawning loads too but additionally it often makes sense for them to define some loaders that never respawn, marking key steps of progression.</li>
          <li>Multiplayer worlds are inherently more open-ended, and tend to rely more on endgame loops. A single player world on the other hand can have a definite end, or perhaps a fork of possible endings but with a fixed quantity of mobs and items defined in their environment.</li>
        </ul>

        <p>Overall, single player worlds are a little more predictable. It's easier to anticipate what the player will encounter when, and to control their progression. Single player world instances can be reset to their initial state, which is a great testing tool for ensuring that a new player's experience is smooth.</p>

        <p>Multiplayer worlds are inherently more chaotic, and the added layer of social interactions can greatly alter the experienced gameplay. They require more systemic planning to ensure that the world is able to supply its players with the loads and drops that they need under varying population density.</p>

        <div class="subtitle-1">World Visibility</div>

        <p>All worlds start out private. A private world can only be viewed by:</p>

        <ul>
          <li>the author</li>
          <li>the builders</li>
          <li>players with a character in the world</li>
        </ul>

        <p>Private worlds are not listed in the public sections of the lobby, and are not indexed by the world search.</p>

        <p>Setting a world to public will make it searchable, and accessible by anyone with a link to it (even someone without a Written Realms account).</p>

        <div class="subtitle-1">World Publishing</div>

        <p>Certain worlds are featured by Written Realms in the lobby and search results. For more information, refer to the <router-link to="/building/worlds/publishing">World Publishing</router-link> page.</p>
   
      </template>
    </Article>
  </div>
</template>

<script>
import Article from '@/components/Article.vue';

export default {
  name: '',
  components: { Article }
}
</script>

<style></style>