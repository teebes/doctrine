<template>
  <div>
    <Article>
      <template v-slot:title>FACTIONS</template>
      <template v-slot:content>
        <p>Factions are groups that player and mob character have a standing with. There are two kinds of factions, core and non-core.</p>

        <div class="subtitle-1">Core Factions</div>
        <p>A core faction is the lot that your character is born into, and not something they can normally change about themselves.</p>

        <p>A good example of a core faction is 'human'. Another core faction might be 'orc'. There is a presumption that members of a core faction generally stick together, and are hostile towards members of differing core factions. That is what is considered the 'normal' behavior (as it relates, for example, to a mob's aggression setting).</p>

        <div class="subtitle-1">Non-Core Factions</div>

        <p>A non-core faction is a group within the core faction, where characters can have a good or a bad standing.</p>

        <p>For example, you may build a world with an Illuminati or a Templars faction, where players have to gain a good reputation with them before being granted access to their secret areas.</p>

        <p>Faction standing is gained or lost by completing certain quests. Another way to lose standing within a faction is to kill one of its members.</p>

        <p>A player character is considered as belonging to a faction if they have at least a standing of 100 with it. A mob is considered as belonging to a faction if they have at least 1 standing with the faction.</p>

        <p>If a player's standing with a faction drops below 0, they will become attacked by any mob of that faction.</p>

        <p>If a player kills a mob of a non-core faction, they will lose as much standing as the mob had with the faction. For example, if a player with 100 standing kills a mob with 50 standing, they will be left with 50 standing.</p>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "Factions",
  components: { Article }
};
</script>

<style>
.my-title {
  /* Goal: implement 'title primary--text' */
  /* color: var(--v-primary-base); */
}
</style>