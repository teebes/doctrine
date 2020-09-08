<template>
  <div>
    <Article>
      <template v-slot:title>ITEMS</template>
      <template v-slot:content>
        <p>Items are objects that can be interacted with in game. They can be carried, equipped, dropped in a room, and be used as quest objectives or rewards.</p>

        <div class="subtitle-1">Naming</div>

        <p>A best practice when naming items is to start the item name with a lowercase article, for example 'a rock'. This will ensure that when the game constructs sentences with the item, the syntax is correct.</p>

        <p>For example, 'You pick up a rock.' is a correct english sentence. If the item is named 'Big Rock', the game will print 'You pick up Big Rock.'. This can be a desired effect every once in a while, but most of the time a lowercased article should be used.</p>

        <div class="subtitle-1">Stats</div>

        <p>Equippable items can be worn on equipment slots, as long as the item's level is not more than 3 above that of the wearer.</p>

        <p>Equippable items can also grant bonuses to the stats of the wearer, and those are referred to as 'imbued'. They appear in yellow in game.</p>

        <p>When an item is imbued, it will be given a 'Item Power' percentage in the Stats Bonuses panel on the right-hand side of the item management screen. This indicator represents how strong this item's stat bonuses are compared to a randomly generated item of the same level.</p>

        <p>Items that have an item power greater than 120% are referred to as 'enchanted'. They receive a 20% bonus to armor and damage.</p>

        <p>Equippable items automatically grant armor, proportionally to the items's level, quality (normal &amp; imbued vs enchanted), and its armor class. Items of the 'heavy' armor class grant 4 times more armor than regular items, but can only be worn by warriors.</p>

        <div class="subtitle-1">Item Loading</div>

        <p>Items can either be loaded on the ground in a room, or in a character's inventory, or in another item. If an item loads in a mob's inventory and is equippable, the mob will automatically equip it.</p>

        <p>For items loaded on characters, they can be loaded in two ways:</p>

        <ol>
          <li>
            By selecting the item as part of a mob template's inventory. This will make the mob
            <em>always</em> load that item.
          </li>
          <li>By adding a loader rule that targets the output of a mob loading rule. This will make the mob load the item every time the rule is run.</li>
        </ol>

        <p>Items can be loaded in other items via loaders, by having a rule target the output of a previous item loading rule.</p>

        <p>Items can be loaded directly on the ground via loaders, either in a specific room if that is the selected target or in a random room within a zone or path if those are targeted.</p>

        <p>When an item is loaded to the ground, picking it up will queue another item load to replace it, if the loader is set to respawn.</p>

        <div class="subtitle-1">Random Items</div>

        <p>Creating equipment items can be a tedious and time-consuming task, especially if you are trying to establish a careful balance. To help with this, the world editor offers an option to automatically generate equipment.</p>

        <p>Random items are enabled in the mob template screen, by checking the 'Load Random Items' in the 'Load Items' section. You can then select how many items to load, which will be of the same level as the mob.</p>

        <p>Random items can be restricted to only generate certain equipment slots, for example weapons or helmets.</p>

        <div class="subtitle-1">Item Upgrades</div>

        <p>Items that are imbued or enchanted can be upgraded at workshops. Upgrades have a 50% chance to fail, in which case the item is destroyed. If the upgrade succeeds, the stats on the item will be boosted by 20%.</p>

        <p>Imbued items can be upgraded once and enchanted items can be upgraded up to 3 times.</p>

        <!-- containers -->
        <!-- quest items, boats, trash, etc -->
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