<template>
  <div>
    <Article>
      <template v-slot:title>FORMULAS</template>
      <template v-slot:content>
        <p>A number of formulas depend on a variable called L, for 'Level Factor', which increases with levels. For levels below 16, it is calculated as:</p>

        <p>
          <code>L = 5.5 * 1.1 ^ level</code>
        </p>

        <p>Above level 15, the values are adjusted to taper off in order to reduce stratification and ensure that players can take part in higher-level content without necessarily being at the level cap.</p>

        <p>Here are the values of L above 15:</p>

        <p>
          <v-simple-table>
            <thead>
              <th>Level</th>
              <th>L Value</th>
            </thead>
            <tbody>
              <tr>
                <td>16</td>
                <td>25.3</td>
              </tr>
              <tr>
                <td>17</td>
                <td>27.3</td>
              </tr>
              <tr>
                <td>18</td>
                <td>28.9</td>
              </tr>
              <tr>
                <td>19</td>
                <td>30.1</td>
              </tr>
              <tr>
                <td>20</td>
                <td>30.7</td>
              </tr>
            </tbody>
          </v-simple-table>
        </p>

        <div class="subtitle-1">Player Damage</div>

        <div class="subtitle-2">Physical Damage</div>

        <p>
          <code>damage = weapon damage + attack power / 16</code>
        </p>

        <p>In other words, increasing your attack power by 16 will do 1 more damage every physical attack.</p>

        <div class="subtitle-2">Magical Damage</div>

        <p>
          <code>magical damage = spell power / 10</code>
        </p>

        <p>In other words, increasing your spell power by 10 will deal or heal 1 damage.</p>

        <p>
          <strong>Note</strong>: wielding a two-handed weapon increases attack power and spell power by 50%.
        </p>

        <div class="subtitle-1">Weapon Damage</div>

        <p>Damage for 1-handed weapons:</p>

        <p>
          <code>1H damage = L / 2</code>
        </p>

        <p>Damage for 2-handed weapons:</p>

        <p>
          <code>2H damage = 1.5 * L / 2</code>
        </p>

        <p>Enchanted weapons get another 1.2x bonus damage per attack.</p>

        <div class="subtitle-1">Armor</div>

        <p>Non-weapon equipped items can give armor to the wearer when worn. How much armor depends on the L value as well as another called S, for 'Slot Constant', which is 1.25x for head, body &amp; legs items and 1x for shield, arms hands, waist and feet.</p>

        <p>
          <code>armor = L * S</code>
        </p>

        <p>Enchanted items give an extra 1.2x armor.</p>

        <div class="subtitle-1">Shields</div>

        <p>Shields reduce all damage taken (resilience) by 25%. In addition, they provide more armor than regular equipment, their armor value being:</p>

        <p>
          <code>Regular shield armor = L * 1.25 * 8</code>
        </p>

        <p>
          <code>Heavy shields armor = L * 1.25 * 12</code>
        </p>

        <div class="subtitle-1">Basic Attributes</div>

        <v-simple-table class="mb-4">
          <template v-slot:default>
            <thead>
              <th>Attribute</th>
              <th>Definition</th>
            </thead>
            <tbody>
              <tr>
                <td>Health</td>
                <td>Your life points. You die when it reaches 0. Regenerates at 1% per second standing and 3% per second resting.</td>
              </tr>
              <tr>
                <td>Stamina</td>
                <td>Your movement points. You can't move when it reaches 0. Regenerates at 1% per second standing and 3% per second resting.</td>
              </tr>
              <tr>
                <td>Mana</td>
                <td>Your magic points. Some classes consume mana when using abilities. Regenerates at 1% per second standing and 3% per second resting.</td>
              </tr>
              <tr>
                <td>Glory</td>
                <td>When you kill an enemy player, you receive 1/5th of their glory points, for a minimum of 1.</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <div class="subtitle-1">Stats</div>

        <v-simple-table class="mb-4">
          <thead>
            <th>Stat</th>
            <th>Description</th>
          </thead>
          <tbody>
            <tr>
              <td>Attack Power (AP)</td>
              <td>
                Determines physical damage
                <br />
                <code>AP / 16 = 1 damage</code>
              </td>
            </tr>
            <tr>
              <td>Spell Power (SP)</td>
              <td>
                Determines magical damage
                <br />
                <code>SP / 10 = 1 spell damage</code>
              </td>
            </tr>
            <tr>
              <td>Crit</td>
              <td>Chance to score a critical hit, which deals 1.5x damage.</td>
            </tr>
            <tr>
              <td>Dodge</td>
              <td>Chance to dodge a physical blow. Magical attacks cannot be dodged.</td>
            </tr>
            <tr>
              <td>Armor</td>
              <td>Reduces physical damage taken.</td>
            </tr>
            <tr>
              <td>Resilience</td>
              <td>Reduces all damage taken.</td>
            </tr>
            <tr>
              <td>Constitution (CON)</td>
              <td>
                Increases health and resilience.
                <Br />
                <code>1 CON = 2 Health, 1 Resilience</code>
              </td>
            </tr>
            <tr>
              <td>Strength (STR)</td>
              <td>
                Increases attack power and health. Primary stat for Warriors, who also gain critical chance with physical attacks.
                <br />
                <code>1 STR = 1 Health, 1 Attack Power, and for warriors 1 Crit.</code>
              </td>
            </tr>
            <tr>
              <td>Dexterity (DEX)</td>
              <td>
                Increases dodge and critical chance with physical attacks. Primary stat for Assassins, who also gain attack power.
                <br />
                <code>1 DEX = 1 Dodge, 1 Crit, and for assassins 1 Attack Power.</code>
              </td>
            </tr>
            <tr>
              <td>Intelligence (INT)</td>
              <td>
                Increases spell damage and mana pool. Primary stat for any spellcaster; physical classes get no benefit from Intelligence.
                <br />
                <code>1 INT = 2 Spell Power, 1 Mana</code>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
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

<style scoped>
.subtitle-1 {
  margin: 10px 0;
}
.subtitle-2 {
  margin: 10px 0;
}
</style>