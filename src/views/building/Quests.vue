<template>
  <div>
    <Article>
      <template v-slot:title>QUESTS</template>
      <template v-slot:content>
        <p>Quests are tasks that mobs can assign players. They require the completion of objectives, and they can give rewards.</p>

        <div class="subtitle-1">Active Quests</div>

        <p>Each quest is assigned to a mob, and although a single mob can have multiple quests, only one of those will be considered 'active' (in other words completable) at a time. Stacking multiple quests on a single mob allows the creation of quest chains.</p>

        <p>Another way to build quest chains is by setting the 'Requires Quest' field in the quest's configuration. When used, the quest will not be active for a player until the required one has been complete.</p>

        <div class="subtitle-1">Repeatable quests</div>

        <p>If a quest not repeatable, it can only be done once. If it is repeatable, the mob will wait the configured amount of time before becoming available to the player again. The configuration value is expressed in seconds. If it is set to 0, the quest is repeatable immediately upon completion.</p>

        <div class="subtitle-1">Lifecycle</div>

        <p>There are three phases to a quest:</p>

        <ol class="mb-4">
          <li>entrance</li>
          <li>enquire</li>
          <li>completion</li>
        </ol>

        <div class="subtitle-1">Entrance</div>

        <p>A quest mob can react to the entrance of a player to give them a hint that they have a task that can be completed</p>

        <p>When a player enters a room, a mob will issue commands defined in 'Enquire Entrance Commands' as long as it has been longer than 'Repeat Entrance Command After' seconds since the last time they've reacted to someone's entrance.</p>

        <div class="subtitle-1">Enquire</div>

        <p>To tell a player what they need to do in order to complete a quest, a mob will execute the commands defined in the 'Enquiring' section.</p>

        <p>The enquire commands can be triggered in two ways:</p>

        <ol class="mb-4">
          <li>Via the 'enquire' command if 'Enquire Command is Available' is checked</li>
          <li>If any of the words defined in 'Enquire Triggers' is said by a player in the mob's room. Tokens in 'Enquire Triggers' should be space delimited.</li>
        </ol>

        <p>It is therefore possible to make quests whose instructions are hidden until a player says the right thing, by unchecking 'Enquire Command is Available' and by defining at least one word in 'Enquire Triggers'.</p>

        <p>
          <strong>Note:</strong> the commands in the 'Enquire Commands' field should be mobs commands that would work as issued by a mob. This means that almost always they should start with either 'say' or 'emote'.
        </p>

        <div class="subtitle-1">Complete</div>

        <p>A quest can be completed if the player meets all of its objectives.</p>

        <p>If 'Despawn on Completion for' is set to a value greater than 0, the quest mob will go invisible for that number of seconds before reappearing.</p>

        <p>The 'Complete Silently' option will complete the quest without indicating to the player that this was a quest completion. The player will not see the 'you complete the quest' message.</p>

        <p>The 'Completion Action' field can define a command that can be used to complete a quest. For example if 'report' is defined as the completion action, a player will be able to complete the quest by typing 'report'. Multiple completion actions can be supplied separated by an 'or' keyword. For example "cut web or cut webbing or cut silk".</p>

        <p>Unsetting the 'Completion Command is Available' checkbox will remove 'complete' from a valid command to complete this quest. When doing so, only completion triggers or completion actions can be used to complete the quest.</p>

        <p>
          <strong>Note:</strong> the commands in the 'Completion Commands' field should be mobs commands that would work as issued by a mob. This means that almost always they should start with either 'say' or 'emote'.
        </p>
        <div class="subtitle-1">Objectives</div>
        <p>There are two kinds of objectives:</p>

        <ol class="mb-4">
          <li>item: one or more copies of an item must be in the player's inventory</li>
          <li>gold: the player must pay to complete the quest</li>
        </ol>A quest can have multiple objectives, for example a mob could want 3 oranges, 2 apple and 10 gold in exchange for a weapon.
        <div class="subtitle-1">Rewards</div>
        <p>There are four kind of rewards:</p>

        <ol class="mb-4">
          <li>gold: the player receives gold</li>
          <li>experience: the player receives experience</li>
          <li>item: the player receives an item of a certain template or random profile</li>
          <li>faction: change a player's standing with a faction</li>
        </ol>

        <p>For item and faction type rewards, the ``Reward.profile_type`` and ``Reward.profile_id`` fields have to be configured to form a variable reference. Below is the configuration for each reward type.</p>

        <div class="subtitle-2">Item template rewards</div>

        <ul class="mb-4">
          <li>type: item</li>
          <li>profile_type: 'item template'</li>
          <li>profile_id: ID of the item template</li>
        </ul>
        <div class="subtitle-2">Random item reward</div>
        <ul class="mb-4">
          <li>type: item</li>
          <li>profile_type: 'random item profile'</li>
          <li>profile_id: ID of the random profile</li>
        </ul>
        <div class="subtitle-2">Faction adjustment reward</div>
        <ul class="mb-4">
          <li>type: faction</li>
          <li>qty: faction score adjustment</li>
          <li>profile_type: 'faction'</li>
          <li>profile_id: ID of the faction</li>
        </ul>
        <div class="subtitle-2">Gold reward</div>
        <ul class="mb-4">
          <li>type: gold</li>
          <li>qty: hold much gold to receive</li>
        </ul>
        <div class="subtitle-2">Experience reward</div>
        <ul class="mb-4">
          <li>type: exp</li>
          <li>qty: how much experience to receive</li>
        </ul>

        <div class="subtitle-1">enquire-complete special case</div>

        <p>If a quest is completable but does not require any particular objectives, is it possible to make it so that enquiring it completes it. To do that, all of the below must be true:</p>
        <ul class="mb-4">
          <li>Quest must have no enquire commands</li>
          <li>Quest must have no objectives</li>
          <li>Quest must have enquire_cmd_available set to True</li>
        </ul>

        <p>This is useful to setup a mechanism where enquiring makes a mob give you an item and get you going on the quest, setting that quest as a complete, which means it can then be set as the pre-requisite for a subsequent quest.</p>
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