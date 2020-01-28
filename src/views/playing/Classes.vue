<template>
  <div>
    <Article>
      <template v-slot:title>CLASSES</template>
      <template v-slot:content>
        <div v-for="(archetype, index) in archetypes" :key="index" class="mb-8">
          <div class="subtitle-1">{{ archetype.toUpperCase() }}S</div>

          <div class='class-description'>
            <template v-if="archetype === 'warrior'">
              <div>Warriors </div>
            </template>
          </div>

          <div>Core Skills</div>

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
                <tr
                  v-for="skill_data in skills_data[archetype].core"
                  :key="skill_data.code"
                >
                  <td>{{ skill_data.level }}</td>
                  <td class="text-no-wrap">{{ skill_data.name }}</td>
                  <td class="text-no-wrap">
                    <div
                      v-for="(line, index) in skill_data.format.split('|')"
                      :key="index"
                    >
                      {{ line }}
                    </div>
                    <!-- {{ skill_data.format }} -->
                  </td>
                  <td>{{ skill_data.description }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <!-- <div>Flex Skills</div> -->
        </div>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";
import axios from "axios";

const API_BASE = "http://localhost:8000/api/v1";

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
    const resp = await axios.get(`${API_BASE}/public/skills`);
    this.skills_data = resp.data;
  }
};
</script>

<style></style>
