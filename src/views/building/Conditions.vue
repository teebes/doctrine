<template>
  <div>
    <Article>
      <template v-slot:title>CONDITIONS</template>
      <template v-slot:content>
        <p>Conditions are logical expressions that can be applied to Room Actions. Each condition consists of a condition name followed by one or more arguments.</p>

        <p>Conditions are evaluated against the actor that is triggering the action gated by the condition. In the case of a Room Action, it is evaluating the player that executed the action.</p>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Condition</th>
                <th class="text-left">Arguments</th>
                <th class="text-left">Definition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>level_above</td>
                <td>level_number</td>
                <td>
                  Returns true if the actor is above <code>level_number</code>. <br>
                  Example - Player must be above level 10: <code>level_above 10</code>.
                </td>
              </tr>

              <tr>
                <td>level_below</td>
                <td>level_number</td>
                <td>
                  Returns true if the actor is below <code>level_number</code>. <br>
                  Example - Player must be below level 10: <code>level_below 10</code>.
                </td>
              </tr>

              <tr>
                <td>item_in_room</td>
                <td>template_id</td>
                <td>
                  Returns true if an item of the specified <code>template_id</code> is in the actor's room. <br>
                  Example - Item from template ID 1 must be in the room: <code>item_in_room 1</code>
                </td>
              </tr>

              <tr>
                <td>item_in_inv</td>
                <td>template_id quantity</td>
                <td>
                  Returns true if <code>quantity</code> items of the specified <code>template_id</code> are in the actor's inventory. <br>
                  Example - 2 items from template ID 1 must be in the actor's inventory: <code>item_in_inv 1 2</code>
                </td>
              </tr>

              <tr>
                <td>archetype</td>
                <td>archetype</td>
                <td>
                  Returns true if the actor's archetype is <code>archetype</code>. <br>
                  Example - Player is a mage: <code>archetype mage</code>
                </td>
              </tr>

              <tr>
                <td>mob_in_room</td>
                <td>template_id</td>
                <td>
                  Return true if a mob of the specified <code>template_id</code> is in the actor's room. <br>
                  Example - Mob from template ID 1 must be in the actor's room: <code>mob_in_room 1</code>
                </td>
              </tr>

              <tr>
                <td>quest_complete</td>
                <td>quest_id</td>
                <td>
                  Return true if the actor has completed quest <code>quest_id</code>. <br>
                  Example - Player must have completed quest ID 1: <code>quest_complete 1</code>
                </td>
              </tr>

              <tr>
                <td>core_faction</td>
                <td>faction_code</td>
                <td>
                  Return true if the actor's core faction code is <code>faction_code</code>. <br>
                  Example - Player must be orc: <code>core_faction orc</code>
                </td>
              </tr>

              <tr>
                <td>standing_above</td>
                <td>faction_code standing</td>
                <td>
                  Return true if the actor's standing within faction code <code>faction_code</code> is at least <code>standing</code>. <br>
                  Example - Player must have 100 templar standing: <code>standing_above templar 100</code>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <div class="subtitle-1 mt-8">Multiple Conditions</div>

        <p>Multiple conditions can be combined in logical expressions using and, or, not and parentheses.</p>

        <p>For example, to define a Room Action available only to mages and clerics level 10 or above:</p>

        <p><code>level_above 10 and (archetype mage or archetype cleric)</code></p>

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