<template>
  <div>
    <Article>
      <template v-slot:title>QUESTS</template>
      <template v-slot:content>
        <p>
          Across the worlds of Written Realms, you'll be offered the opportunity
          to partake in a wide variety of quests. Whether you're tasked with
          saving the world from a terrible dragon or getting strawberries for a
          delicious pie, the following guide will get you started on the first
          steps to adventure.
        </p>
        <div class="subtitle-1">Quest Overview</div>
        <p>
          Quests throughout Written Realms fall into two broad categories:
          One-time and repeatable. As the name implies, repeatable quests can be
          completed multiple times, though the time between available
          completions can vary between quests. Quests can also require other
          quests and have level requirements, so if you find yourself unable to
          start a new quest, explore around and come back once you've grown
          stronger.
        </p>
        <div class="subtitle-1">Starting Quests</div>
        <p>
          The most common way to start a quest is with the enquire command.
        </p>
        <p>
          Enquire - <kbd>enquire | enquire &lt;mob&gt;</kbd> - See whether any
          mob in your room has a quest available.
        </p>
        <p>
          Not all quests can be triggered this way, however, so pay attention to
          what an NPC might be saying, or clues within the room or inventory,
          for alternate ways to start a quest. More hidden quests might require
          that you say or do something specific.
        </p>
        <div class="subtitle-1">Quest Log</div>
        <p>
          After starting a quest, it will be added to your quest log. This is a
          list of all of your active quests, along with further information
          about each quest. Should you forget what you need to do (there's a lot
          of questing to be done, after all), you can refresh yourself here. The
          quest log can be found in the client's right sidebar in the desktop
          display, or within the menu on mobile.
        </p>
        <div class="subtitle-1">Completing Quests</div>
        <p>
          Once you've satisfied a quest's requirements, it can be completed with
          the following command:
        </p>
        <p>
          Complete - <kbd>complete | complete &lt;mob&gt;</kbd> - Attempt to
          complete a quest from a mob in the room that has one, and for which
          you have completed all the required objectives.
        </p>
        <p>
          You must be in the same room as the original quest giver, though not
          all quests can be completed simply with the command. Others may
          require you to do or say certain things. Refer to the quest log or the
          surrounding area/NPCs for clues.
        </p>
        <p>
          Note: If you're able to complete a quest immediately, you don't have
          to enquire first. You can simply complete it right away.
        </p>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "Quests",
  components: { Article }
};
</script>

<style></style>
