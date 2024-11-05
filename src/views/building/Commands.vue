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
          <li>/at</li>
          <li>/award</li>
          <li>/cast</li>
          <li>/clearfact</li>
          <li>/close</li>
          <li>/damage</li>
          <li>/delay</li>
          <li>/despawn</li>
          <li>/echo</li>
          <li>/force</li>
          <li>/gecho</li>
          <li>/incfact</li>
          <li>/incmark</li>
          <li>/invisible</li>
          <li>/jump</li>
          <li>/load</li>
          <li>/lock</li>
          <li>/mark</li>
          <li>/open</li>
          <li>/purge</li>
          <li>/regen</li>
          <li>/roam</li>
          <li>/send</li>
          <li>/sendexcept</li>
          <li>/setattr</li>
          <li>/setfact</li>
          <li>/take</li>
          <li>/transfer</li>
          <li>/unmark</li>
          <li>/zecho</li>
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
                <td>/at</td>
                <td>room, command</td>
                <td>
                  Execute a command in a different room.<br>
                  Example - Damage all mobs in room 2: <code>/at 2 /damage all.mob 200</code>
                </td>
              </tr>
              <tr>
                <td>/award</td>
                <td>target, reward, qty</td>
                <td>
                  Award a player with gold, medals, glory or faction standing. If awarding standing, the format for the reward is 'standing.faction_code'. Can pass negative values.<br/>
                  Example - <code>/award John gold 10</code><br/>
                  Example - <code>/award John medals -1</code><br/>
                  Example - <code>/award John standing.legion 100</code>
                </td>
              </tr>
              <tr>
                <td>/cast</td>
                <td>actor, spell, [target]</td>
                <td>
                  Make an actor invoke a custom skill, whether or not they have it learned.<br/>
                  Example - <code>/cast John invisibility</code><br/>
                  Example - <code>/cast John fireball soldier</code>
                </td>
              </tr>
              <tr>
                <td>/clearfact</td>
                <td>fact</td>
                <td>
                  Clear a world fact. <br/>
                  Example - <code>/clearfact weather</code>
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
                <td>/damage</td>
                <td>target, amount, message</td>
                <td>
                  Inflicts damage on a target by a room rather than a mob. Target can either be singular or a group. Room damage cannot be mitigated by armor or resilience, cannot be dodged, and it can kill its targets. It can however be absorbed (with Clerics' shield, for example).<br>
                  Example -  Deal 100 damage to 'pat' with the message 'A spike impales you!': <code>/damage pat 100 A spike impales you!</code><br/>
                  Example -  Deal 100 damage to action initiator: <code>/damage <span v-pre>{{</span> actor <span v-pre>}}</span> 100</code><br/>
                  Example -  Deal 100 damage to all mobs in the room: <code>/damage all.mob 100</code><br/>
                  Example -  Deal 100 damage to all players in the room: <code>/damage all.player 100</code><br/>
                  Example -  Deal 100 damage to all mobs and players in the room: <code>/damage all 100</code>
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
                <td>/despawn</td>
                <td></td>
                <td>Despawn a mob from the world.</td>
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
                <td>/force</td>
                <td>target, cmds</td>
                <td>
                  Forces a mob to execute a certain command string. <br>
                  Example - <code>/force soldier kill bear</code>
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
                <td>/incfact</td>
                <td>target, fact, value</td>
                <td>
                  Increment the value of a fact by the specified amount. Negative values are allowed. Works for both integers and floats.<br/>
                  Example - Increment the 'balance' fact by 1.5: <code>/incfact balance 1.5</code><br/>
                  Example - Decrement the 'balance' fact by 5: <code>/incfact balance -5</code>
                </td>
              </tr>
              <tr>
                <td>/incmark</td>
                <td>target, mark, value</td>
                <td>
                  Increment the value of a mark by the specified amount. Negative values are allowed. Works for both integers and floats.<br/>
                  Example - Increment the 'counter' mark on the player 'joe' by 5: <code>/incmark joe counter 5</code><br/>
                  Example - Decrement the 'counter' mark on the player 'joe' by 4.5: <code>/incmark joe counter -4.5</code>
                </td>
              </tr>
              <tr>
                <td>/invisible</td>
                <td></td>
                <td>
                  Make the mob invisible. Invisible mobs will not be seen by players (except builders), other mobs, or actions.
                </td>
              </tr>
              <tr>
                <td>/jump</td>
                <td>room_id</td>
                <td>
                  Move a mob to a different room. <br/>
                  Example - move a mob to room 2: <code>/jump 2</code>
                </td>
              </tr>
              <tr>
                <td>/load</td>
                <td>type, id, [cmd]</td>
                <td>
                  Load an item or mob into the world, or a certain amount of gold in your inventory. Optionally can take as a last argument a command that will be executed by the mob upon loading when loading a mob, or by the actor when loading an item.<br/>
                  Example - load mob template ID 456: <code>/load mob 456</code>.<br/>
                  Example - load item template ID 789: <code>/load item 789</code>.<br/>
                  Example - load 10 gold: <code>/load gold 10</code>.<br/>
                  Example - /load mob 456 say Hello there!
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
                <td>/mark</td>
                <td>player, mark, value</td>
                <td>
                  Sets a mark on a player.<br/>
                  Example - add a 'initiated' mark to the player 'John': <code>/mark john initiated true</code>
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
                <td>/regen</td>
                <td>[target], [resource]</td>
                <td>
                  Restore health, mana & stamina to 100%. If a target is specified, will regen that target's resources. If a resource is specified, will only regen that resource.<br/>
                  Example - regen all resources for the caster: <code>/regen</code>
                  Example - regen all resources for player john: <code>/regen john</code>
                  Exampe - regen 'soldier' mob's health: <code>/regen soldier health</code>
                </td>
              </tr>
              <tr>
                <td>/roam</td>
                <td></td>
                <td>
                  Move a mob to one of the exits out of their current room.
                </td>
              </tr>
              <tr>
                <td>/send</td>
                <td>player, text</td>
                <td>
                  Send a string of text to a connected player. <br>
                  Example - send 'You feel groggy.' to Joe: <code>/send joe You feel groggy.</code>
                </td>
              </tr>
              <tr>
                <td>/sendexcept</td>
                <td>player, text</td>
                <td>
                  Send a string of text to all other players in a player's room except for the targeted player. This is useful when paired with 'send' to have one 'first person point-of-view' message and one 'third person' message. <br>
                  Example - send 'Joe feels groggy.' to everyone in Joe's room but him: <code>/sendexcept joe Joe feels groggy.</code>
                </td>
              </tr>
              <tr>
                <td>/setattr</td>
                <td>target, attr, value</td>
                <td>
                  Set the attribute of a character or a room to the specified value.<br/>
                  Example - changed a mob's name: <code>/setattr mob name a wounded soldier</code>.
                </td>
              </tr>
              <tr>
                <td>/setfact</td>
                <td>name, value</td>
                <td>
                  Set a fact on a world to the specified value.<br>
                  Example - set a 'weather' fact to 'rain': <code>/setfact weather rain</code>
                </td>
              </tr>
              <tr>
                <td>/take</td>
                <td>item, target, qty</td>
                <td>
                  Remove items from a character's inventory. The quantity parameter is optional and defaults to 1. If the character has some of the items but not as many as specified by quantity, as many as can be found will be removed.<br>
                  Example - remove an apple from joe's inventory: <code>/take apple joe</code><br>
                  Example - remove an item of template id 456 from joe's inventory: <code>/take it:456 joe</code><br>
                  Example - remove 2 apples from joe's inventory: <code>/take apple joe 2</code><br>
                </td>
              </tr>
              <tr>
                <td>/transfer</td>
                <td>name, room_id</td>
                <td>
                  Transfers a character to the designated <code>room_id</code>. <br>
                  Example - transfer Joe to room 2: <code>/transfer joe 2</code>
                </td>
              </tr>
              <tr>
                <td>/unmark</td>
                <td>player, name</td>
                <td>
                  Delete a mark on a player.<br/>
                  Example - delete a 'special_quest_complete' mark on a player: <code>/unmark joe special_quest_complete</code>
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
                <td>pass</td>
                <td></td>
                <td>
                  Do nothing. This can be a useful command in a dialog, to introduce pauses.
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