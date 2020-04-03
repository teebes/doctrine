<template>
  <div>
    <Article>
      <template v-slot:title>MOBS</template>
      <template v-slot:content>
        <p>
          Mobs are almost just like player characters, except they are
          controlled by the game. But they otherwise behave the same way: they
          exist within the boundaries of a room, and can execute almost every
          command that a player can. They can move, fight, pick up stuff. They
          even have access to some of the builder commands.
        </p>

        <div class="subtitle-1">Roaming</div>
        <p>
          Mobs can move around ('mob' is originally short for 'mobile'). Their
          roaming behavior depends on how they were loaded.
        </p>

        <ul>
          <li>
            A mob loaded by a rule targeting a room will remain in that room,
            unless forced to move.
          </li>
          <li>
            A mob loaded by a rule targeting a path will roam anywhere within
            that path.
          </li>
          <li>
            A mob loaded by a rule targeting a zone will roam anywhere in that
            zone except in No Roam rooms (which is a flag on the room level).
          </li>
        </ul>

        <div class="subtitle-1">Aggression</div>

        <p>
          Whether a mob will attack another character depends on its
          'aggression' setting, as well as on its faction standing relative to
          the other character.
        </p>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Setting</th>
                <th class="text-left">Definition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Passive</td>
                <td>
                  Mob will never initiate an attack. When a mob is passive,
                  their quest are available to other factions even if they
                  otherwise would be hostile. For example, a passive orc can
                  have a quest that a human can activate. Note that, unless you
                  unselect "Fights Back" in the mob template, a passive mob will
                  still defend itself.
                </td>
              </tr>

              <tr>
                <td>Normal</td>
                <td>
                  Aggression will be determined by faction standing. If the
                  character being considered has a core faction, and the mob has
                  a different core faction, the mob will aggro. Otherwise, it
                  will only attack characters who have a negative standing with
                  one of their non-core factions.
                </td>
              </tr>

              <tr>
                <td>Players</td>
                <td>Will attack all players that enter its room.</td>
              </tr>

              <tr>
                <td>All</td>
                <td>Will attack any other character that enters its room.</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
  
        <div class="subtitle-1 mt-4">Stats</div>

        <p>The level of a mob (max 20) determines:</p>

        <ul>
          <li>
            How much armor it has: Mobs get 10.25 * L armor, and warrior mobs
            get triple that amount.
          </li>
          <li>
            How much damage it deals: If not wielding a weapon, a mob deals L /
            2 physical damage.
          </li>
          <li>
            How much experience it gives when being slain. Refer to the
            <router-link to="/playing/experience">Experience Table</router-link>
            to view how much experience per mob.
          </li>
          <li>Its health &amp; stats if using default stats.</li>
        </ul>

        <p>If a mob is 'elite', its health will increase 6 fold.</p>

        <div class="subtitle-1 mt-4">Builder Commands</div>

        <p>
          Mobs are able to execute some of the commands that a builder is able
          to do:
        </p>

        <ul>
          <li>echo</li>
          <li>force</li>
          <li>setattr</li>
          <li>winvisible</li>
          <li>load</li>
          <li>purge</li>
          <li>jump</li>
          <li>transfer</li>
        </ul>

        <div class="subtitle-1 mt-4">Mob Damage</div>

        <p>Like players, a mob's physical damage is determined by its weapon and ap. If the mob is not wielding a weapon, weapon damage is L(mob level) / 2 (refer to the <router-link to="/playing/formulas">formulas page</router-link> for more information on L).</p>

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

<style></style>
