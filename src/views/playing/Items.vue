<template>
  <div>
    <Article>
      <template v-slot:title>ITEMS</template>
      <template v-slot:content>
        <p>
          Across your journeys, you'll come across items of all sorts. They can
          be broadly categorized into four types:
        </p>

        <ul>
          <li>
            <span class="font-weight-bold">Equipment</span>: These are the
            weapons and armor that you'll be wearing.
          </li>
          <li>
            <span class="font-weight-bold">Containers</span>: Items that hold
            other items.
          </li>
          <li>
            <span class="font-weight-bold">Consumables</span>: Items that you
            eat or drink.
          </li>
          <li>
            <span class="font-weight-bold">Other</span>: These are quest items,
            trash dropped from creatures, or other items that you can't
            otherwise wear, put stuff in, or eat.
          </li>
        </ul>
        <div class="subtitle-1">Equipment Levels</div>
        <p>
          Equipment has levels, which roughly corresponds to the item's power
          level. Your can wear equipment up to three levels higher than your
          character's level. For example, a level 16 character can wear up to
          level 19 equipment, but not level 20.
        </p>
        <div class="subtitle-1">Randomly Generated versus Templated Items</div>
        <p>
          In addition to the item category, there are two broad types of items:
          randomly generated and templated. Randomly generated items are
          generally equipment found on merchants, dropped by creatures, or as
          quest rewards, while templated items are other items that have been
          hand-crafted by a builder. This is largely a backend distinction in
          the way that items are created, but it does have bearing on gameplay
          in the following ways:
        </p>
        <ul>
          <li>
            Randomly generated items can be upgraded at workshops. They do not
            stack in a player's inventory.
          </li>
          <li>
            Templated items cannot be upgraded. They do, however, stack in your
            inventory.
          </li>
        </ul>
        <div class="subtitle-1 mb-4">General Item Commands:</div>
        <v-simple-table class="mb-5">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Command</th>
                <th class="text-left">Usage</th>
                <th class="text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Get</td>
                <td>
                  <kbd
                    >get &lt;item&gt; | get &lt;item&gt; &lt;container&gt;</kbd
                  >
                </td>
                <td>
                  Get an item from the ground, or from a container like a sack,
                  a barrel or a corpse.
                </td>
              </tr>
              <tr>
                <td>Put</td>
                <td>
                  <kbd>put &lt;item&gt; &lt;container&gt;</kbd>
                </td>
                <td>
                  Put an item in a container. The container must either be on
                  the ground or in your inventory.
                </td>
              </tr>
              <tr>
                <td>Drop</td>
                <td>
                  <kbd>drop &lt;item&gt;</kbd>
                </td>
                <td>
                  Drop an item to the ground. Only items in inventory can be
                  dropped, not equipped or held items.
                </td>
              </tr>
              <tr>
                <td>Give</td>
                <td>
                  <kbd>give &lt;item&gt; &lt;character&gt;</kbd>
                </td>
                <td>
                  Give an item to a player or a mob. The item must be in your
                  inventory.
                </td>
              </tr>
              <tr>
                <td>Label</td>
                <td>
                  <kbd
                    >label &lt;item&gt; &lt;label&gt; | label &lt;item&gt;</kbd
                  >
                </td>
                <td>
                  Create a custom label for an item. Using the command without a
                  label argument will remove an existing label from an item.
                </td>
              </tr>
              <tr>
                <td>Eat</td>
                <td>
                  <kbd>eat &lt;item&gt;</kbd>
                </td>
                <td>
                  Eat a food item.
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="subtitle-1 mb-4">Equipment-Specific Commands:</div>
        <v-simple-table class="mb-4">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Command</th>
                <th class="text-left">Usage</th>
                <th class="text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wield</td>
                <td>
                  <kbd>wield &lt;weapon&gt; | wield &lt;weapon&gt; offhand</kbd>
                </td>
                <td>
                  Equip a weapon, gaining the bonuses associated with it. <br />
                  Only weapons in your inventory can be wielded, and trying to
                  wield with a weapon already equipped will swap the old item
                  for the new one. <br />
                  If your class is capable of dual-wielding, adding `offhand` to
                  the end of the command will attempt to put the item in your
                  offhand.
                </td>
              </tr>
              <tr>
                <td>Wear</td>
                <td>
                  <kbd>wear &lt;item&gt;</kbd>
                </td>
                <td>
                  Equip a wearable item, gaining the bonuses associated with it.
                  <br />
                  Only items in your inventory can be equipped, and trying to
                  equip to an occupied slot will swap the old item for the new
                  one.
                </td>
              </tr>
              <tr>
                <td>Remove</td>
                <td>
                  <kbd>remove &lt;item&gt;</kbd>
                </td>
                <td>
                  Removes an equipped item and places it in your inventory.
                </td>
              </tr>
              <tr>
                <td>Upgrade</td>
                <td>
                  <kbd>upgrade | upgrade &lt;item or num&gt;</kbd>
                </td>
                <td>
                  Attempt to upgrade a randomly generated item. There is a 50%
                  chance of failure, which will destroy the item with no gold
                  cost. <br />
                  If successful, the item's stats are boosted by 20% and the
                  gold cost is paid. This operation can be repeated, though it
                  doubles in cost each time. <br />
                  Upgrading can only be performed in rooms that have been
                  flagged as a workshop buy builders.
                  <br />
                  Imbued items can only be upgraded once, while enchanted items
                  can be upgraded up to three times.
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="subtitle-1">Inventory Limits</div>
        <p>
          You can hold up to 30 different items in your inventory, and
          containers can hold up 10 different items. Containers cannot hold
          other containers.
        </p>
        <div class="subtitle-1">Item Stacks</div>
        <p>
          Templated items can stack with each other, with the stack holding up
          to 30 copies of one item. This still only counts as one for inventory
          space.
        </p>
        <div class="subtitle-1">Selecting More Than One Item</div>
        <p>
          By default, any item command affects one item. To target all of an
          item instead, prefix the item name with 'all.'. Example: To give one
          rock to Bill, <kbd>give rock Bill</kbd>. To give all of your rocks to
          Bill, <kbd>give all.rock Bill</kbd>.
        </p>
        <div class="subtitle-1">Selecting a Specific Item</div>
        <p>
          When you have multiples of an item in your inventory, using any of the
          above commands will select the first instance of that item by default.
          For example, if you have multiple sacks, <kbd>drop sack</kbd> will
          always drop the first one listed. To select another instance of the
          item, prefix the item name with a number. <kbd>2.sack</kbd> will
          select the second sack, <kbd>3.sack</kbd> the third, and so on.
        </p>
        <div class="subtitle-1">Buying and Selling Items</div>
        <p>
          Items can be bought and sold at merchants with the following commands:
        </p>
        <v-simple-table class="mb-5">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Command</th>
                <th class="text-left">Usage</th>
                <th class="text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>List</td>
                <td>
                  <kbd>list | list &lt;merchant&gt;</kbd>
                </td>
                <td>
                  List the items that a merchant has for sale.
                </td>
              </tr>
              <tr>
                <td>Offer</td>
                <td>
                  <kbd>offer</kbd>
                </td>
                <td>
                  See how much the items in your inventory could sell for. Items
                  that do not have a sell value are not listed.
                </td>
              </tr>
              <tr>
                <td>Buy</td>
                <td>
                  <kbd
                    >buy &lt;item&gt; | buy &lt;item&gt; &lt;merchant&gt;</kbd
                  >
                </td>
                <td>
                  Buy an item from a merchant. The item can be referred to by a
                  keyword or by the index number of the item as given by the
                  LIST command.
                </td>
              </tr>
              <tr>
                <td>Sell</td>
                <td>
                  <kbd>sell &lt;item&gt;</kbd>
                </td>
                <td>
                  Sell an item to a merchant. Items can only be sold from your
                  inventory, and only if they have a sell price. The item can be
                  referred by a keyword or by the index number of the item as
                  given by the OFFER command.
                </td>
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
  name: "Items",
  components: { Article }
};
</script>

<style></style>
