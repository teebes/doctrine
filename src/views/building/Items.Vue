<template>
  <div>
    <Article>
      <template v-slot:title>ITEMS</template>
      <template v-slot:content>
        <p>Items are objects that can be interacted within the game. They can be manipulated in a number of ways, from getting and dropping them in a room, to being equipped, or used as quest objectives or rewards.</p>

        <div class="subtitle-1">Templated Items</div>

        <p>Templated items are items whose attributes (name, stats) are all inherited from a template model. All items based on one same template will be identical. Templated items are added under the 'items' section in the world editor. This is as opposed to random items, which are each generated with random stats according to certain rules.</p>

        <p>Each templated item has a template ID number, referred to as <code>template_id</code> in certain conditions that require an item. For example: the condition <code>item_in_room template_id</code> requires the template ID of a certain item in order for the condition to carry through. Template IDs are required by other things such as quest objectives and rewards and more.</p>

        <p>Items of the same template ID will stack up if more than one of the same ID is lying on the ground, or in a character's inventory.</p>

        <div class="subtitle-1">Naming</div>

        <p>A best practice when naming items is to start the item name with a lowercase article, for example 'a rock'. This will ensure that when the game constructs sentences with the item, the syntax is correct.</p>

        <p>For example, 'You pick up a rock.' is a correct english sentence. If the item is named 'Big Rock', the game will print 'You pick up Big Rock.'. This can be a desired effect every once in a while, but most of the time a lowercased article should be used.</p>

        <div class="subtitle-1">Item Types</div>

        <p>There are numerous types of items with different purposes as listed below:</p>

        <div class="subtitle-2">Containers</div>

        <p>Containers are items that can hold other items within them. Containers cannot be put inside containers. Characters can use the 'put' and 'get' command to respectively put an item into the container and retrieve it again. All containers can hold 10 different items, where up to 30 of the same templated item will stack up and occupy only one of the ten slots.</p>

        <p><strong>Note:</strong> you can neither buy nor sell containers that have items in them.</p>

        <div class="subtitle-2">Trash Items</div>

        <p>Trash items are similar to containers, in that items can be put inside them. However, any item put into a trash item will be irrevocably <strong>deleted</strong> and unable to be retrieved outside of item restoration. This makes trash-type items a useful disposal method of getting rid of unwanted items.</p>

        <div class="subtitle-2">Inert Items</div>

        <p>Inert items have no special properties, other than an 'on_use' action or item action if available, and whatever configuration of the item's advanced settings. They are a useful item type to add flavour into your world. For example, if 'item_is_pickable' under the advanced section is turned off, and the unpickable item is loaded into a room, this allows the creation of monuments or large items that cannot be picked up, but serve as context or visual flavour.</p>

        <div class="subtitle-2">Quest Items</div>

        <p>Bearing no special properties, quest items are alike to inert-type items. However, quest items should be used to indicate that item is necessary for a quest. Looking at a quest item will display it is a quest item, and if the item's level is anything higher than 0, then the item will read as 'Level (item_level) quest'</p>

        <div class="subtitle-2">Equippable</div>

        <p>Equippable items can be worn on equipment slots, which is defined towards the bottom of the item management screen. The wearer must be no more than three levels below the equipment level in order to equip it. Equippable items have stats that grant bonuses to the stats of the wearer. See 'stats' for further information.</p>

        <div class="subtitle-2">Augments</div>

        <p>Augments are items that alter an equipment's stats if applied by the <code>augment</code> command. They can be restricted to only augment a specific equipment slot. If an equipped item already has an augment, applying a new augment will permanently delete the old one. See 'stats' for further information.</p>

        <div class="subtitle-2">Ammunition</div>

        <p>Custom skills with the template ID of an ammunition item defined in the 'Consumes' field then require the ammunition item to be in the character's inventory in order to use the skill. Upon executing the custom skill, the ammunition item is used up.</p>

        <div class="subtitle-2">Consumables</div>

        <p>Consumable items can be eaten with the <code>eat</code> or <code>drink</code> commands. Consumables restore either health, mana or stamina, selected by a drop-down menu. The 'quantity' field defines how much of the resource will be restored if the consumable is eaten. Negative quantities can be assigned.</p>

        <div class="subtitle-1">Stats</div>

        <p>An item with no stats is a 'normal' item, which can be use as a keyword to refer to the item. They appear as white in-game.</p>

        <p>Any item with even a single stat with a value above 0 are then 'imbued' and appear yellow in-game.</p>

        <p>When an item is imbued, it will be given an 'Item Power' percentage in the Stats Bonuses panel on the right-hand side of the item management screen. This indicator represents how strong this item's stat bonuses are compared to a randomly generated item of the same level.</p>

        <p>Items that have an item power greater than 120% are referred to as 'enchanted'. They appear as orange in-game and receive a 20% bonus to armor and damage.</p>

        <p>In the case of augment type items, their stats do not directly change the player's stats, as they are not equippable items. However, they can be applied to equippable items via the <code>augment</code> command, which changes the equippable item's stats by the augment item's stats and consumes the augment in the process.</p>

        <p>Equippable items automatically grant armor, proportionally to the item's level, quality (normal vs imbued vs enchanted), and its armor class. Items of the heavy armor class grant 4 times more armor than light armor, but can only be worn by warriors or characters with the <code>proficiency_heavy_armor</code> mark set to true. This armor stat is currently <em>not</em> adjustable.</p>

        <div class="subtitle-1">Item Loading</div>

        <p>Items can either be loaded on the ground in a room or in a mob's inventory. If an item loads in a mob's inventory and is equippable, the mob will automatically equip it.</p>

        <p>For items loaded on mobs, they can be loaded in two ways:</p>

        <ol>
          <li>
            By selecting the item as part of a mob template's inventory. This will make the mob <em>always</em> load that item.
          </li>
          <li>By adding a loader rule that targets the output of a mob loading rule. This will make the mob load the item every time the rule is run.</li>
        </ol>

        <p>Items can be loaded directly on the ground via loaders, either in a specific room if that is the selected target, or in a random room within a zone or path if those are selected.</p>

        <p>When an item is loaded on the ground, picking it up will queue another item load to replace it, if the loader is set to respawn.</p>

        <div class="subtitle-1">Random Items</div>

        <p>Creating equipment items can be a tedious and time-consuming task, especially if you are trying to establish a careful balance. To help with this, the world editor offers an option to automatically generate equipment.</p>

        <p>Random items have randomized names to a certain extent, pulled from a pool of keywords that vary depending on the item's level, armor type, slot type and stats. Random items also have randomly generated stats. See https://blog.writtenrealms.com/random for more information on how these stats are generated.</p>

        <p>Random items can be generated in a number of places. Mobs can sell randomly generated items by adding the ID number of a random item profile in their merchant inventory. Mobs will drop random items if the 'Load Random Items' checkbox is ticked in the 'Load Items' section. You can then define what equipment slot will load and how many items to load. All mob drops will be the same level as the mob.</p>

        <div class="subtitle-1">Random Item Profiles</div>

        <p>Random Item Profiles offer a way to define a random load. Use cases include:</p>
        <ul class="mb-4">
          <li>Merchants with a random sales inventory</li>
          <li>Random item quest rewards</li>
        </ul>
        <p>Random Item Profiles can be added in the 'Random Item Profile' section in the world's config screen. An item profile has the following fields that should be completed:

        <ul class="mb-4">
          <li>name: the name of the Random Item Profile.</li>
          <li>level: level of the randomly generated items.</li>
          <li>chance imbued: percentage chance of an imbued item to be generated.</li>
          <li>chance enchanted: percentage chance of an enchanted item to be generated.</li>
          <li>restriction: if desired, restrict the Random Item Profile to a certain equipment slot or armor type.</li>
        </ul>

        <p><strong>Note:</strong> it is recommended to have <code>chance_imbued</code> set to 100 in order to generate at least imbued items. Otherwise some normal items (statless equipment) will be generated.

        <p>Each Random Item Profile has an ID number that should be inputted into the ‘Item Profile’ field in these two situations. If loading a random sales inventory, ‘Random Item’ should be selected under ‘Merchant Inventory’ in the mob’s management screen, whereupon a field for Item Profile will appear along with quantity. Similarly for random item quest rewards, random item should be selected from the dropdown menu under ‘Rewards’, the desired <code>profile_id</code> defined in the Item Profile field, along with quantity of item rewards.

        <div class="subtitle-1">Item Upgrades</div>

        <p><strong>Note:</strong> only random items may be upgraded. Templated items cannot be upgraded.</p>

        <p>Items that are imbued or enchanted can be upgraded at an upgrader type mob. The chance of a successful upgrade is configurable per upgrader mob, but the default is a 50% chance of failure, in which case the item is destroyed and no upgrade cost is incurred. If the upgrade succeeds, the stats on the item will be boosted by 20% and a gold cost taken.</p>

        <p>Imbued items can be upgraded once and enchanted items can be upgraded up to 3 times.</p>

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
