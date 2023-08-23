<template>
  <div>
    <Article>
      <template v-slot:title>CONDITIONS</template>
      <template v-slot:content>
        <p>Conditions are logical expressions that can be applied to Quests, Mob Reactions, Room Actions and Room Checks. Each condition consists of a condition name followed by one or more arguments.</p>

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
                <td>archetype</td>
                <td>archetype</td>
                <td>
                  Returns true if the actor's archetype is <code>archetype</code>. <br>
                  Example - Player is a mage: <code>archetype mage</code>
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
                <td>fact_check</td>
                <td>fact value</td>
                <td>
                  Return true if the the specified fact is set to the specified value.<br>
                </td>
              </tr>
              <tr>
                <td>gender</td>
                <td>gender</td>
                <td>
                  Return true if the actor is of the designated gender. Example - actor must be male: <code>gender male</code>.
                </td>
              </tr>
              <tr>
                <td>gold</td>
                <td>amount</td>
                <td>
                  Return true if the actor has at least the specified amount of gold. Example - Player must have 100 gold: <code>gold 100</code>
                </td>
              </tr>
              <tr>
                <td>has_shield</td>
                <td></td>
                <td>
                  Return true if the actor has a shield equipped. Example: <code>has_shield</code>.
                </td>
              </tr>
              <tr>
                <td>has_weapon</td>
                <td></td>
                <td>
                  Return true if the actor has any weapon equipped. Example: <code>has_weapon</code>.
                </td>
              </tr>
              <tr>
                <td>health_below</td>
                <td>percentage</td>
                <td>
                  Return true if the actor's health is less than the specified percentage, compared to their max health. Example - Player must be below 50% health: <code>health_below 50</code>
                </td>
              </tr>
              <tr>
                <td>in_combat</td>
                <td></td>
                <td>
                  Return true if the actor is in combat. Optionally, a second argument can require a specific target. Example - actor must be in combat: <code>in_combat</code>. Actor must be in combat versus a tiger: <code>in_combat tiger</code>.
                </td>
              </tr>
              <tr>
                <td>item_in_eq</td>
                <td>template_id</td>
                <td>
                  Return true if the actor is wearing an item of the specified <code>template_id</code>. Example - Player must have item from template ID 1 equipped: <code>item_in_eq 1</code>
                </td>
              </tr>
              <tr>
                <td>item_in_inv</td>
                <td>template_id</td>
                <td>
                  Returns true if an item of the specified <code>template_id</code> is in the actor's inventory. Optionally, a second argument can require that a certain number of the items be in the room.<br>
                  Example - Item from template ID 1 must be in the actor's inventory: <code>item_in_inv 1</code>. Two items of template ID 1 in inventory: <code>item_in_inv 1 2</code>.
                </td>
              </tr>
              <tr>
                <td>item_in_room</td>
                <td>template_id</td>
                <td>
                  Returns true if an item of the specified <code>template_id</code> is in the actor's room. Optionally, a second argument can require that a certain number of the items be in the room.<br>
                  Example - Item from template ID 1 must be in the room: <code>item_in_room 1</code>. Two items of template ID 1: <code>item_in_room 1 2</code>.
                </td>
              </tr>
              <tr>
                <td>level</td>
                <td>level</td>
                <td>Returns true if the actor is at or above the specified level.</td>
              </tr>
              <tr>
                <td>marked</td>
                <td>mark value</td>
                <td>
                  Return true if the actor has a mark of the given value. Example - actor must have the 'beta' mark set to 'on': <code>marked beta on</code>.
                </td>
              </tr>
              <tr>
                <td>medals</td>
                <td>amount</td>
                <td>
                  Return true if the actor has at least the specified amount of medals. Example - Player must have 3 medals: <code>medals 3</code>
                </td>
              </tr>
              <tr>
                <td>mob_in_room</td>
                <td>template_id</td>
                <td>
                  Return true if a mob of the specified <code>template_id</code> is in the actor's room. Optionally, a second argument can require that a certain number of the mobs be in the room.<br>
                  Example - Mob from template ID 1 must be in the actor's room: <code>mob_in_room 1</code>. 2 mobs from template ID 1: <code>mob_in_room 1 2</code>.
                </td>
              </tr>
              <tr>
                <td>player_in_room</td>
                <td></td>
                <td>
                  Return true if player is in the room.<br>
                  Example - Player is in room: <code>player_in_room</code>
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
                <td>standing</td>
                <td>faction_code standing</td>
                <td>
                  Return true if the actor's standing within faction code <code>faction_code</code> is at least <code>standing</code>. <br>
                  Example - Player must have 100 templar standing: <code>standing templar 100</code>
                </td>
              </tr>
              <tr>
                <td>wields_weapon_type</td>
                <td>weapon_type</td>
                <td>
                  Return true if the actor is wielding a weapon of the designated weapon type. Example - actor must be wielding a dagger: <code>wields_weapon_type dagger</code>.
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <div class="subtitle-1 mt-8">Multiple Conditions</div>

        <p>Multiple conditions can be combined in logical expressions using and, or, not and parentheses.</p>

        <p>For example, to define a Room Action available only to mages and clerics level 10 or above:</p>

        <p><code>level 10 and (archetype mage or archetype cleric)</code></p>

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
