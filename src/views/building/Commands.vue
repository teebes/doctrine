<template>
  <div>
    <Article>
      <template v-slot:title>MOB &amp; ROOM COMMANDS</template>
      <template v-slot:content>
        <p>Mobs and rooms can both execute commands. Mob commands get executed via quests and reactions. Room commands get executed via room actions, and mob death reactions. Both types of commands share common syntax conventions.</p>

        <div class="subtitle-1">Command Timing</div>
        <p>Whenever mobs or rooms execute commands, builders can enter them over several lines. For example, if a mob's entrance reaction is:</p>

        <code class='mb-6'>
say hello there!
say make yourself comforatable.
</code>

        <p>Each line will be executed with a 3 second interval. First the mob will say 'hello there', and 3 seconds later 'make yourself comfortable.</p>

        <p>To execute multiple commands simultanously, place them on the same line and seperate them by a semicolon, like so:</p>

        <code class='mb-6'>say Behind you ; say Watch out!</code>

        <p>Both of these commands will be executed by the game engine as close to each other as possible.</p>

        <div class="subtitle-1">Command Substitutions</div>
        <p>All mob and room commands can substitue the name of the player or mob who triggered the action with the <code>{{ actor }}</code> syntax.</p>

        <p>For example, if a mob has an entrance reaction of <code>say hello {{ actor }}</code> and the player who entered the room is named John, the mob will react by saying 'hello John'.</p>

        <div class="subtitle-1">Mob Commands</div>
        <p>Mobs can execute a subset of builder commands, as well as a <code>despawn</code> command that makes the mob delete itself.</p>
        
        <p>The commands available to mobs are:</p>

        <ul>
          <li>award</li>
          <li>echo</li>
          <li>force</li>
          <li>gecho</li>
          <li>jump</li>
          <li>load</li>
          <li>purge</li>
          <li>regen</li>
          <li>send</li>
          <li>sendexcept</li>
          <li>setattr</li>
          <li>transfer</li>
          <li>winvisible</li>
          <li>/open</li>
          <li>/close</li>
          <li>/lock</li>
          <li>zecho</li>
        </ul>

        <p>For more information on any of these commands, try <code>help &lt;command name&gt;</code> in game.</p>

        <div class="subtitle-1">Room Commands</div>
        
        <p>Room commands work a lot like mob commands except that the actor is the room itself. There is a large overlap of mob and room commands. Below is a table with the available room commands:</p>

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
                  <td>force</td>
                  <td>keyword, command</td>
                  <td>
                    Forces the mob that matches the provided <code>keyword</code> to perform the specified <code>command</code>.
                    Example - force a soldier to say hello: <code>force soldier say hello</code>
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

<style>
</style>