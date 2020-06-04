<template>
  <div>
    <Article>
      <template v-slot:title>CLASSES</template>
      <template v-slot:content>
        <div
          class="mb-8"
        >There are four playable classes: warrior, mage, cleric, and assassin. Each class has access at any given time to 5 core skills and 3 flex skills. The 3 flex skills are learned from a larger pool of available skills.</div>

      <div class='my-4'>
        <a @click="$vuetify.goTo('#warrior')">Warrior</a><br/> 
        <a @click="$vuetify.goTo('#mage')">Mage</a><br/> 
        <a @click="$vuetify.goTo('#assassin')">Assassin</a><br/> 
        <a @click="$vuetify.goTo('#cleric')">Cleric</a><br/> 
      </div>

        <div v-for="(archetype, index) in archetypes" :key="index" class="mb-8">
          <a :id="archetype" class="subtitle-1">{{ archetype.toUpperCase() }}S</a>

          <div class="class-description">
            <template v-if="archetype === 'warrior'">
              <p>Classic brawler, the default class for new characters. Easiest to learn, but offers plenty of depth and choices.</p>
              <p>It is the only class that can wear heavy armor, and functions well either wielding a two-handed weapon or with a sword & shield setup.</p>
              <p>Primary stat is strength.</p>
            </template>
            <template v-if="archetype === 'mage'">
              <p>Mages are offensive magic users. They are capable of quick burst damage and crowd control, and typically use two-handed weapons.</p>
              <p>Primary stat is intelligence.</p>
            </template>
            <template v-if="archetype === 'cleric'">
              <p>Clerics are defensive magic users, and the only class that can heal other characters. They are the most difficult class to go through the lower levels with, or at least the slowest. They typically use two-handed weapons.</p>
              <p>Primary stat is intelligence.</p>
            </template>
            <template v-if="archetype === 'assassin'">
              <p>Masters of stealth and ambushes, and the only class that can dual wield, assassins are unique in that which skills are available to them depends on their 'stance', which is initially 'Breeze'.</p>
              <p>From Breeze, there are three branches of the core skills tree:</p>
              <ol class="mb-4">
                <li>Sneak</li>
                <li>Gale, Hurricane</li>
                <li>Wind, Storm</li>
              </ol>
              <p>Assassins thus spend their time dancing from stance to stance to use a variety of potent skills.</p>
              <p>Primary stat is dexterity.</p>
            </template>
          </div>

          <template v-if="skills_data">
            <div class="subtitle-2">Core Skills</div>

            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Skill</th>
                    <th>Format</th>
                    <th>Definition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="skill_data in skills_data[archetype].core" :key="skill_data.code">
                    <td>{{ skill_data.level }}</td>
                    <td class="text-no-wrap">{{ skill_data.name }}</td>
                    <td class="text-no-wrap">
                      <div
                        v-for="(line, index) in skill_data.format.split('|')"
                        :key="index"
                      >{{ line }}</div>
                    </td>
                    <td>{{ skill_data.description }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <div class="subtitle-2 mt-6">Flex Skills</div>

            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Skill</th>
                    <th>Format</th>
                    <th>Definition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="skill_data in skills_data[archetype].flex" :key="skill_data.code">
                    <td>{{ skill_data.level }}</td>
                    <td class="text-no-wrap">{{ skill_data.name }}</td>
                    <td class="text-no-wrap">
                      <div
                        v-for="(line, index) in skill_data.format.split('|')"
                        :key="index"
                      >{{ line }}</div>
                    </td>
                    <td>{{ skill_data.description }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
        </div>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";
import axios from "axios";

export default {
  name: "",
  components: { Article },
  data() {
    return {
      archetypes: ["warrior", "mage", "cleric", "assassin"],
      skills_data: null
    };
  },

  created: async function() {
    const resp = await axios.get(`/public/skills`);
    this.skills_data = resp.data;
  }
};
</script>

<style></style>
