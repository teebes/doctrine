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

        <p>Commands are the commands that the <em>room</em> will execute after the player enters a matching action.</p>

        <p>Room commands are different from player commands, though there is overlap in them. Below is a table with the available room commands:</p>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Command</th>
                <th class="text-left">Arguments</th>
                <th class="text-left">Definition</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>transfer</td>
                  <td>name, room_id</td>
                  <td>
                    Transfers a character to the designated <code>room_id</code>. <br>
                    Example - transfer Joe to room 2: <code>transfer joe 2</code>
                  </td>
                </tr>
                <tr>
                  <td>send</td>
                  <td>player, text</td>
                  <td>
                    Send a string of text to a connected player. <br>
                    Example - send 'You feel groggy.' to Joe: <code>send joe You feel groggy.</code>
                  </td>
                </tr>
                <tr>
                  <td>sendexcept</td>
                  <td>player, text</td>
                  <td>
                    Send a string of text to all other players in a player's room except for the targeted player. This is useful when paired with 'send' to have one 'first person point-of-view' message and one 'third person' message. <br>
                    Example - send 'Joe feels groggy.' to everyone in Joe's room but him: <code>sendexcept joe Joe feels groggy.</code>
                  </td>
                </tr>
                <tr>
                  <td>echo</td>
                  <td>message</td>
                  <td>
                    Send a string of text to all players in a room. <br>
                    Example - send 'You feel groggy.' to everyone in the room: <code>echo You feel groggy.</code> 
                  </td>
                </tr>
                <tr>
                  <td>zecho</td>
                  <td>message</td>
                  <td>
                    Send a string of text to all players in the room's zone. <br>
                    Example - send 'The church bells ring.' to everyone in the room's one: <code>zecho The church bells ring.</code> 
                  </td>
                </tr>                
                <tr>
                  <td>load</td>
                  <td>template_type, template_id</td>
                  <td>
                    Load a tempate of type <code>template_type</code> (either 'mob' or 'item') of the specified <code>template_id</code>.
                    Example - load mob template ID 1: <code>load mob 1</code>
                  </td>
                </tr>
                <tr>
                  <td>purge</td>
                  <td>target</td>
                  <td>
                    Remove the specified target from the world. If no target is specified, will purge the whole room. <br>
                    Example - remove an apple from the ground: <code>purge apple</code>
                  </td>
                </tr>
                <tr>
                  <td>give</td>
                  <td>item, recipient</td>
                  <td>
                    Transfer an item from the room to a recipient. Most useful when paired with the 'load' command. <br>
                    Example - move an apple from the room to Joe's inventory <code>give apple joe</code>
                  </td>
                </tr>
                <tr>
                  <td>take</td>
                  <td>target, type, template, qty</td>
                  <td>
                    Remove  items, or a certain currency amount, from a player's inventory. The <code>type</code> parameter can be either 'item' or 'currency'. If 'currency', the 'template' attribute must be either 'gold', 'medals' or 'glory'. <br>
                    Example - remove an item of template id 1 from joe's inventory: <code>take joe item 1</code><br>
                    Example - remove 2 items of template id 1 from joe's inventory: <code>take joe item 1 2</code><br>
                    Example - remove 100 gold from joe's account: <code>take joe currency gold 100</code>
                  </td>
                </tr>                
                <tr>
                  <td>/open</td>
                  <td>direction</td>
                  <td>
                    Opens a door in the specified direction, if there is one.<br>
                    Example - open north door: <code>/open north</code>
                  </td>
                </tr>
                <tr>
                  <td>/close</td>
                  <td>direction</td>
                  <td>
                    Opens a door in the specified direction, if there is one.<br>
                    Example - close north door: <code>/close north</code>
                  </td>
                </tr>
                <tr>
                  <td>/lock</td>
                  <td>direction</td>
                  <td>
                    Locks a door in the specified direction, if there is one.<br>
                    Example - lock north door: <code>/lock north</code>
                  </td>
                </tr>
            </tbody>
          </template>
        </v-simple-table>        

        <p class="mt-4">For all of these commands, double curly brackets can be used to refer to the name of the actor. For example, the following room command will send a "Welcome!" message to the player who invoked the room action: <code>send <span v-pre>{{</span> actor <span v-pre>}}</span> Welcome!</code></p>

        <p>Multiple room commands can be entered per room action, in case of which they will be executed 1 per line, 2 seconds apart. To instead have multiple room commands be executed at the same time, the <code>;</code> symbol may be used to chain them together.</p>

        <p>For example: <code>transfer <span v-pre>{{</span> actor <span v-pre>}}</span> 1 ; send <span v-pre>{{</span> actor <span v-pre>}}</span> You jump into the pool ; sendexcept <span v-pre>{{</span> actor <span v-pre>}}</span> <span v-pre>{{</span> actor <span v-pre>}}</span> jumps into the pool</code> will execute all three commands as close to simultaneously as the game is able.</p>

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
  components: { Article }
};
</script>

<style>
</style>