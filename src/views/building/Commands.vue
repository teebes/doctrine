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
say make yourself comfortable.
</code>

        <p>Each line will be executed with a 3 second interval. First the mob will say 'hello there', and 3 seconds later 'make yourself comfortable.'</p>

        <p>To execute multiple commands simultanously, place them on the same line and seperate them by a semicolon, like so:</p>

        <code class='mb-6'>say Behind you ; say Watch out!</code>

        <p>Both of these commands will be executed by the game engine as close to each other as possible.</p>

        <div class="subtitle-1">Command Substitutions</div>
        <p>All mob and room commands can substitue the name of the player or mob who triggered the action with the <code><span v-pre>{{</span> actor <span v-pre>}}</span></code> syntax.</p>

        <p>For example, if a mob has an entrance reaction of <code>say hello <span v-pre>{{</span> actor <span v-pre>}}</span></code> and the player who entered the room is named John, the mob will react by saying 'hello John'.</p>

        <div class="subtitle-1">Mob Commands</div>
        <p>Mobs can execute a subset of builder commands, as well as a <code>despawn</code> command that makes the mob delete itself.</p>

        <p>The commands available to mobs are:</p>

        <ul>
          <li>/close</li>
          <li>/delay</li>
          <li>/echo</li>
          <li>/gecho</li>
          <li>/invisible</li>
          <li>/load</li>
          <li>/lock</li>
          <li>/open</li>
          <li>/purge</li>
          <li>/take</li>
          <li>/zecho</li>
          <li>award</li>
          <li>despawn</li>
          <li>force</li>
          <li>jump</li>
          <li>load</li>
          <li>mark</li>
          <li>regen</li>
          <li>send</li>
          <li>sendexcept</li>
          <li>setattr</li>
          <li>transfer</li>
          <li>unmark</li>

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
                  <td>/close</td>
                  <td>direction</td>
                  <td>
                    Opens a door in the specified direction, if there is one.<br>
                    Example - close north door: <code>/close north</code>
                  </td>
                </tr>
                <tr>
                  <td>/delay</td>
                  <td>seconds, command</td>
                  <td>
                    Delay a command by the specified number of seconds.<br>
                    Example - echo something  5 seconds from now: <code>/delay 5 /echo The walls crumble.</code>
                  </td>
                </tr>
                <tr>
                  <td>/echo</td>
                  <td>message</td>
                  <td>
                    Send a string of text to all players in a room. <br>
                    Example - send 'You feel groggy.' to everyone in the room: <code>/echo You feel groggy.</code>
                  </td>
                </tr>
                <tr>
                  <td>/gecho</td>
                  <td>message</td>
                  <td>
                    Send a string of text to all players in a world. <br>
                    Example - send a 'Special event starting soon.' notification to everyone in a world: <code>/gecho Special event starting soon.</code>
                  </td>
                </tr>
                <tr>
                  <td>/load</td>
                  <td>type, id</td>
                  <td>
                    Load an item or mob into the world, or a certain amount of gold in your inventory.<br/>
                    Example - load mob template ID 456: <code>/load mob 456</code>.<br/>
                    Example - load item template ID 789: <code>/load item 789</code>.<br/>Example - load 10 gold: <code>/load gold 10</code>.
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
                <tr>
                  <td>/open</td>
                  <td>direction</td>
                  <td>
                    Opens a door in the specified direction, if there is one.<br>
                    Example - open north door: <code>/open north</code>
                  </td>
                </tr>
                <tr>
                  <td>/purge</td>
                  <td>target</td>
                  <td>
                    Remove the specified target from the world. If no target is specified, will purge the whole room. <br>
                    Example - remove an apple from the ground: <code>/purge apple</code>
                  </td>
                </tr>
                <tr>
                  <td>/take</td>
                  <td>item, target, qty</td>
                  <td>
                    Remove one or more items from a character's inventory.<br>
                    Example - remove an apple from joe's inventory: <code>/take apple joe</code><br>
                    Example - remove an item of template id 456 from joe's inventory: <code>/take it:456 joe</code><br>
                    Example - remove 2 apples from joe's inventory: <code>/take apple joe 2</code><br>
                    Example - remove 100 gold from joe's account: <code>/take joe currency gold 100</code>
                  </td>
                </tr>
                <tr>
                  <td>/zecho</td>
                  <td>message</td>
                  <td>
                    Send a string of text to all players in the room's zone. <br>
                    Example - send 'The church bells ring.' to everyone in the room's one: <code>/zecho The church bells ring.</code>
                  </td>
                </tr>

                <tr>
                  <td>award</td>
                  <td>target, reward, qty</td>
                  <td>
                    Award a player with gold, medals, glory or faction standing. If awarding standing, the format for the reward is 'standing.faction_code'. Can pass negative values.<br/>
                    Examples: <br>
                      <code>award John gold 1</code><br/>
                      <code>award John gold -5</code><br/>
                      <code>award John glory 1</code><br/>
                      <code>award John medals 2</code><br/>
                      <code>award John standing.legion 10</code><br/>
                      <code>award John experience 100</code>
                  </td>
                </tr>
                <tr>
                  <td>clearfact</td>
                  <td>fact</td>
                  <td>
                    Clears a fact from a world. Exmaple: <code>clearfact weather</code>.
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
                  <td>give</td>
                  <td>item, recipient</td>
                  <td>
                    Transfer an item from the room to a recipient. Most useful when paired with the 'load' command.<br/>
                    Example - move an apple from the room to Joe's inventory <code>give apple joe</code>
                  </td>
                </tr>
                <tr>
                  <td>mark</td>
                  <td>player, name, value</td>
                  <td>
                    Set a mark on a player to a given value.<br/>
                    Example - set a quest completion marker on a player: <code>mark joe special_quest_complete true</code>
                  </td>
                </tr>
                <tr>
                  <td>pass</td>
                  <td></td>
                  <td>
                    Do nothing. This can be a useful command in a dialog, to introduce pauses.
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
                  <td>setattr</td>
                  <td>target, attr, value</td>
                  <td>
                    Set the attribute of a character or a room to the specified value.<br/>
                    Example - changed a mob's name: <code>setattr mob name a wounded soldier</code>.
                  </td>
                </tr>
                <tr>
                  <td>setfact</td>
                  <td>name, value</td>
                  <td>
                    Set a fact on a world to the specified value.<br>
                    Example - set a 'weather' fact to 'rain': <code>setfact weather rain</code>
                  </td>
                </tr>
                <tr>
                  <td>transfer</td>
                  <td>name, room_id</td>
                  <td>
                    Transfers a character to the designated <code>room_id</code>. <br>
                    Example - transfer Joe to room 2: <code>transfer joe 2</code>
                  </td>
                </tr>
                <tr>
                  <td>unmark</td>
                  <td>player, name</td>
                  <td>
                    Delete a mark on a player.<br/>
                    Example - delete a quest completion marker on a player: <code>unmark joe special_quest_complete</code>
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