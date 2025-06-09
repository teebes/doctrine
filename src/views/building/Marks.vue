<template>
  <div>
    <Article>
      <template v-slot:title>MARKS</template>
      <template v-slot:content>
        <p>Marks are like a lightweight tag that can be applied to a character via the <code>/mark</code> command. They have no visible effect, but are capable of defining whether a character can trigger item actions, room actions, reactions – anything where there is a Conditions field, through the 'marked' condition. (syntax for the marked condition: <code>marked &lt;mark name&gt; &lt;mark value&gt;</code>).</p>

        <p>Marks have two parts to them: the mark's name and its value. When marking someone, a good naming convention is to make the mark name based on something they have done. The mark's value could then show what state of progress the mark's name is in. Good mark names are easy to keep track of, especially if a character has many marks on them.</p>

        <p>For example, let's say a player has flicked some light switches on via a room action. A sensible mark to show the player has turned the lights on, would be something like <code>lights_turned_on true</code>.</p>

        <p>Another example could be a player unlocks a treasure chest through an item action. Upon opening the chest, we could mark the actor <code>/mark <span v-pre>{{</span> actor <span v-pre>}}</span> treasure_chest opened</code>.</p>

        <div class="subtitle-1">Marked Condition</div>

        <p>Expanding further on the treasure chest example, what if you only want the player to be able to open the treasure chest once? This extends to any situation where you want to limit the player from being able to repeatedly trigger an action or reaction.</p>

        <p>This is where <code>marked</code> condition comes into play. In the example with the treasure chest, adding this condition to the item action <code>not marked treasure_chest opened</code>, means the actor won't be able to open the chest after being marked, due to the 'not' placed before the condition, which reverses the meaning of the condition. In short, if the player has the mark, they no longer apply for the action and cannot trigger it.</p>

        <p>A final step to this one-time use action could be adding a custom failure message if the player attempts to perform the action again. By using another hidden action that is only available when the player is marked means you can send the actor a reason for why their repeated attempt failed.</p>

        <div class="subtitle-2">Full example of one-time only treasure chest</div>

        <p>Create two actions:</p>

        <v-simple-table>
            <template v-slot: default>
                <thead>
                    <tr>
                        <th class="text-left">Action Name</th>
                        <th class="text-left">Action</th>
                        <th class="text-left">Cmds</th>
                        <th class="text-left">Option</th>
                        <th class="text-left">Conditions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First chest opening</td>
                        <td>Open Treasure Chest</td>
                        <td>
                            <code>/award <span v-pre>{{</span> actor <span v-pre>}}</span> gold 100 ; /mark <span v-pre>{{</span> actor <span v-pre>}}</span> treasure_chest opened</code>
                        </td>
                        <td>10</td>
                        <td><code>player_in_room and not marked treasure_chest opened</code></td>
                    </tr>
                    <tr>
                        <td>Chest already opened</td>
                        <td>Open Treasure Chest</td>
                        <td><code>/send <span v-pre>{{</span> actor <span v-pre>}}</span> You have already opened this chest!</code></td>
                        <td>1</td>
                        <td><code>conditions: player_in_room and marked treasure_chest opened</code></td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

<!--         <p>action name: First chest opening</p>
        <p>action: Open Treasure Chest</p>
        <p>cmds: /award <span v-pre>{{</span> actor <span v-pre>}}</span> gold 100 ; /mark <span v-pre>{{</span> actor <span v-pre>}}</span></code> treasure_chest opened</p>
        <p>option: 10</p>
        <p>conditions: player_in_room and not marked treasure_chest opened</p>
 -->
<!--
        Action 2:

        <v-simple-table>
            <template v-slot: default>
                <thead>
                    <tr>
                        <th class="text-left">Action Name</th>
                        <th class="text-left">Action</th>
                        <th class="text-left">Cmds</th>
                        <th class="text-left">Option</th>
                        <th class="text-left">Conditions</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </template>
        </v-simple-table> -->


        <!-- <p>action name: Chest already opened</p>
        <p>action: Open Treasure Chest</p>
        <p>cmds: /send <span v-pre>{{</span> actor <span v-pre>}}</span></code> You have already opened this chest!</p>
        <p>option: 1</p>
        <p>conditions: player_in_room and marked treasure_chest opened</p> -->

        <p>However vice versa applies, and marks aren't only to be used to restrict players from being able to repeat an action or reaction. They can be used to enable a player to be able to do something instead by removing 'not' before the <code>marked</code> condition.</p>

        <p>Perhaps turning on a switch allows you to pass through a room check with the condition <code>marked switch_triggered true</code> that otherwise would block the way. Or maybe the act of killing a mighty beast triggers an on_death reaction that marks the actor as <code>beast_slain true</code>, whereupon entering the nearby village with this mark active hails a reward from the local villagers. Marks can be used in a myriad number of ways, only limited by your imagination.</p>

        <p><strong>Note:</strong> The only situation where the marked condition has no effect is in loader conditions, due to their inherent actor-less nature.</p>

        <div class="subtitle-1">Proficiency Marks</div>

        <p>There are some special marks, that when marked word-for-word, allows the marked character to be able to do certain things.</p>

        <p>Marking a classless character, or a non-warrior class with <code>proficiency_heavy_armor</code> set to <code>true</code> enables them to be able to wear heavy type armor.</p>

        <p>Marking a character with <code>proficiency_tracking</code> set to <code>true</code> unlocks the 'track' command for that character.</p>

        <!-- add language proficiency -->
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
