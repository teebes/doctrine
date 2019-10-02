<template>
  <div>
    <Article>
      <template v-slot:title>EXPERIENCE</template>
      <template v-slot:content>

        <p>Experience is gained mostly by slaying mobs, though it can also be gained by completion quests.</p>

        <p>When grouped, each party member receives a 30% experience bonus.</p>

        <p>Below is the experience table for a default world, with two columns:</p>

        <p>
          <ul>
            <li>Experience Required: how much total experience is required to reach the given level</li>
            <li>Per Mob Kill: how much experience killing a mob of the given level will give its slayer</li>
          </ul>
        </p>

        <v-data-table
          :headers="headers"
          :items="levels"
          :disable-pagination="true"
          :disable-sort="true"
          :items-per-page="20"
          class="elevation-1"
        ></v-data-table>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "",
  components: { Article },
  data() {
    return {
      headers: [
        {
          text: "Level",
          align: "left",
          value: "level"
        },
        { text: "Experience Required", value: "experience" },
        { text: "Per Mob Kill", value: "per_mob" }
      ],
      levels: [
        {
          level: 1,
          experience: 1,
          per_mob: 16
        },
        {
          level: 2,
          experience: 30,
          per_mob: 25
        },
        {
          level: 3,
          experience: 100,
          per_mob: 40
        },
        {
          level: 4,
          experience: 400,
          per_mob: 61
        },
        {
          level: 5,
          experience: 1000,
          per_mob: 88
        },
        {
          level: 6,
          experience: 2500,
          per_mob: 121
        },
        {
          level: 7,
          experience: 5500,
          per_mob: 160
        },
        {
          level: 8,
          experience: 10000,
          per_mob: 205
        },
        {
          level: 9,
          experience: 15000,
          per_mob: 256
        },
        {
          level: 10,
          experience: 25000,
          per_mob: 313
        },
        {
          level: 11,
          experience: 40000,
          per_mob: 376
        },
        {
          level: 12,
          experience: 55000,
          per_mob: 445
        },
        {
          level: 13,
          experience: 75000,
          per_mob: 520
        },
        {
          level: 14,
          experience: 100000,
          per_mob: 601
        },
        {
          level: 15,
          experience: 135000,
          per_mob: 688
        },
        {
          level: 16,
          experience: 175000,
          per_mob: 781
        },
        {
          level: 17,
          experience: 225000,
          per_mob: 880
        },
        {
          level: 18,
          experience: 285000,
          per_mob: 985
        },
        {
          level: 19,
          experience: 370000,
          per_mob: 1096
        },
        {
          level: 20,
          experience: 500000,
          per_mob: 1213
        }
      ]
    };
  }
};
</script>

<style>
</style>