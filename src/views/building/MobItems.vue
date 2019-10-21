<template>
  <div>
    <Article>
      <template v-slot:title>MOB ITEMS</template>
      <template v-slot:content>
        <p>Mobs can load with certain items in their inventory. They will equip the items that can they are able to equip, and the rest will go to their inventory, available via their corpse upon their death.</p>

        <p>There are two ways to load items on to mob when they spawn: random loads and mob inventory.</p>

        <div class="subtitle-1">Mob Inventory</div>
        <p>This is to load items based on template that a builder has created. To load a templated item, search for the template in the 'Item Template' field of the 'LOAD ITEMS' section, specify its load chance and then how many copies of it to load.</p>

        <div class="subtitle-1">Random Loads</div>

        <p>Random loads are an easy way to add equipment to your world without designing any items.</p>

        <p>When random loads are enabled, a mob will spawn with the specified number of items (if the chance to load is satisfied). The items will be of the mob's own level, and will be 'imbued', meaning it will provide a boost to the wearer's stats.</p>

        <p>To load random items, check the Loads Random Items checkbox. You be able to edit the random drop parameters.</p>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Field</th>
                <th class="text-left">Definition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Number of Items</td>
                <td>How many random items to load</td>
              </tr>

              <tr>
                <td>Load Specification</td>
                <td>By default, any kind of equipment can be generated. But it's also possible to restrict what kind of equipment will load. Specicy a load specification to do that.</td>
              </tr>

              <tr>
                <td>Chance to Load</td>
                <td>Chance that the item has to load on the mob.</td>
              </tr>

              <tr>
                <td>Chance Enchanted</td>
                <td>Chance that the item has to be enchanted, which grants it 20% more stats than if it was imbued.</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "Mob Items",
  components: { Article }
};
</script>

<style>
</style>