<template>
  <div>
    <Article>
      <template v-slot:title>MOB ITEMS</template>
      <template v-slot:content>

        <!-- <p>Mobs are almost just like player characters, except they are controlled by the game. But they otherwise behave the same way: they exist within the boundaries of a room, and can execute almost every command that a player can. They can move, fight, pick up stuff. They even have access to some of the builder commands.</p> -->

        <p>There are three ways to load items on to mob when they spawn: equipment profiles, random loads and mob inventory.</p>
        
        <div class='subtitle-1'>Equipment Profiles</div>
        <p>Equipment profiles define what should go into each equipment slot of a mob. Each slot can be either an item template or a set of declarative attributes to define a random item to load in it.</p>

        <p>Example, a soldier could have a profile with:</p>

        <ul class='mb-4'>
        <li>head slot, load 'a helmet' item template</li>
        <li>body slot, load a random item that has a 50% chance to be imbued.</li>
        </ul>

        <p>Mobs can have multiple profiles, which stack according to their priority. </p>

        <p>For example, an officer could have the above soldier's equipment profile, as well as its own profile, which defines:</p>

        <ul class='mb-4'>
        <li>body slot, 'an ornate breastplate' item template</li>
        <li>weapon slot, 100% imbued 25% enchanted item</li>
        </ul>

        <p>Assuming the officer's profile has a higher priority than the soldier's, the officer will load with a helmet, an ornate breastplate and a random weapon. His body slot will take precedence over the soldier's body slow.</p>
        <div class='subtitle-1'>Random Loads</div>
        <p>This is a much easier way to add random loads to a mob than equipment profiles, though less powerful.</p>

        <p>Rather than having to specify how is slow is loaded, this declarative structure simply wants to know how many items to load, the % chance they will be enchanted / imbued, as well as an optional load specification (for example heavy armor only, or two-handers only, etc).</p>

        <p>If an item slot is not already occupied by something loaded by an equipment profile, it will be equipped. Otherwise it will still load, but in inventory.</p>

        <p>Fields on a random load definition:</p>
        <ul class='mb-4'>
        <li>Number of items to load</li>
        <li>Chance that are imbued</li>
        <li>Chance they are enchanted</li>
        <li>Load speficiation</li>
        </ul>
        <div class='subtitle-1'>Mob Inventory</div>
        <p>This is to load specific templates into a mob's inventory. If they are equippable, they will be equipped, unless the slot is already occupied by something loaded by a profile or a random load.</p>



      </template>
    </Article>
  </div>
</template>

<script>
import Article from '@/components/Article.vue';

export default {
  name: 'Mob Items',
  components: {Article}
}
</script>

<style>
</style>