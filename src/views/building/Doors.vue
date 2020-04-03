<template>
  <div>
    <Article>
      <template v-slot:title>DOORS</template>
      <template v-slot:content>
        <p>Doors can be created between two-rooms, or in the case of one-way exits from one room to the next.</p>

        <p>A door can be in three states: open, closed or locked. If it is locked, a key is required to open it. It is possible to define a locked door without a key however, in case of which a room action is required to open it. This can be useful to define mechanisms such as a 'pull lever to unlock door' situation.</p>

        <p>To use a key, create an item template using the 'key' item type. Using the 'Destroy key on use' will make the key snap in two when either locking or unlocking a door.</p>

        <div class="subtitle-1">Set and Clear Doors</div>

        <p>To add or edit a door, click on the '+' sign in the room management screen in the direction that you want it. Then, click on 'set door'. To clear the door, click 'clear door' instead.</p>

        <div class="subtitle-1">Default State</div>

        <p>In multiplayer worlds, doors reset based on the zone's respawn time. When the zone respawns, all doors in it will be brought back to their default state.</p>

        <p>Take caution when creating locked door systems that players have a way to exit a zone after it's reset given the door's default states.</p>

        <p>One way to handle this is to have a door which on one side has a default state of 'locked' with a key, and on the other has a default state of closed. This will ensure that a user does not stay locked in if the zone resets while they are in it.</p>        

        <div class="subtitle-1">Symmetry</div>

        <p>Doors usually exist between two rooms that are mutually connected. For this reason, when creating a door on a two-way exit, the same door name,default state and key settings will be created on both sides of the door.</p>

        <p>It is however possible to have different names and states on each site of the door. To do that, create a door (which will create both sides) and then edit one side of it only.</p>

        <p><strong>Note:</strong> Disconnecting a room from another, or changing a connection from one-way to two-ways, will remove both sides of the door. Changing a connection from two-ways to one-way will remove the side of the door that no longer connects back.</p>
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