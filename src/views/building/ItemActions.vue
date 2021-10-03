<template>
  <div>
    <Article>
      <template v-slot:title>ITEM ACTIONS</template>
      <template v-slot:content>
        <p>Item actions are conceptually identical to <router-link to="/building/roomactions">Room Actions</router-link>, but tied to an item rather than to a room. They are defined at the item template level, and become associated with every item spawned by that template.</p>

        <p>Item actions will only be available for triggering when an item is on the ground. As such, it is often desirable to attach them to items that cannot be picked up.</p>

        <div class="subtitle-1">Example: fishing</div>

        <p>Imagine you want to add a 'fishing' action to a number of lakes and shorelines on your world. You could define a room action in each location where a player might want to fish, but would need to create as many actions as there fishign locations. Instead, you can create one item, named for example "A school of fish swims beneath the surface." with a 'fish' action tied to it, make the item non-pickable and load it everywhere you want players to be able to fish.</p>

      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "",
  components: { Article },
};
</script>

<style>
</style>