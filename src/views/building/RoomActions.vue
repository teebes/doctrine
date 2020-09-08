<template>
  <div>
    <Article>
      <template v-slot:title>ROOM ACTIONS</template>
      <template v-slot:content>
        <p>Room Actions are custom commands that builders can define in rooms. Each configurable field of a Room Action is explained below.</p>

        <div class="subtitle-1">Actions</div>

        <p>Actions are the commands that players use to trigger the Room Action. For example, a room could have an action called <code>jump pool</code>, which when entered by a player will transfer them into another swimming pool room. That pool may then have an action of its own, perhaps <code>exit pool</code>, to take the player back to their original room.</p>
        
        <p>Multiple actions can be defined with an 'or' keyword. For example, a builder may want both 'jump pool' and 'dive pool' to be acceptable actions to get into the pool. Using <code>jump pool or dive pool</code> as the action will do the trick.</p>

        <p>When creating an action, the 'Display Action in Room' box is checked by default. This will display an action button at the bottom of the room's description with the first defined action. In the pool example above, a single <code>jump pool</code> button will be displayed.</p>

        <p>If multiple Room Actions are defined for a room, the first action in each of the Room Actions will be displayed.</p>

        <div class="subtitle-1">Commands</div>

        <p>Commands are the commands that the <em>room</em> will execute after the player enters a matching action. For a list of room commands, refer to the <router-link to="/building/commands">Commands Page</router-link> for a list of available room commands.</p>

        <div class="subtitle-1">Conditions</div>

        <p>Room actions can be configured to only trigger if certain conditions are met. For more information on conditions, refer to the <router-link to="/building/conditions">conditions page</router-link>.</p>

        <p>If the 'Display Action in Room' is checked to display a room's avilable actions at the end of their look description, only the actions where conditions evaluate to True will be displayed.</p>

        <div class="subtitle-1">Failure Messages</div>

        <p>If a player does not satisfy the conditions of the Room Action, the "Show Failure Message" checkbox will determine what happens when the player tries to execute that action.</p>

        <p>If "Show Failure Message" is unchecked, a player will get the 'Unknown command' error message when trying the action.</p>
        
        <p>If it is checked, the game will either return the reason defined in the 'Failure Message' field, or if there is not one defined it will return the reason given by the condition, if any. Conditions will return error messages if there is either 1 condition, or if all of its components are chained with 'and'. If it sees an 'or' or a 'not', it will not attempt to return a reason. If the condition gives no adequate reason, there is no failure message defined and the 'show failure message' box is checked, the game will return a generic failure message of "Action could not be completed."</p>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "",
  components: { Article },
};
</script>

<style>
</style>