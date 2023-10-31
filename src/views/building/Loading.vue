<template>
  <div>
    <Article>
      <template v-slot:title>LOADING</template>
      <template v-slot:content>
        <p>Worlds start out empty. To populate them, we create item and mob templates which define how they will appear and behave. Once a template has been created, there are two ways to load it: the load command, and loaders.</p>

        <div class="subtitle-1">The Load Command</div>

        <p>The simplest way to load a template is to be logged in on a builder and use the <code>/load</code> command.</p>

        <p>Let's assume for example that we have an item template with ID 234 that we nee to load on the ground. First, we load the item in the builder's inventory:</p>

        <p><code>/load item &lt;template_id&gt;</code></p>

        <p>Then we drop it onto the ground:</p>

        <p><code>drop apple</code></p>

        <p>Using the <code>load</code> command works well where there is a game master running a live session, but if we want worlds to refresh their population without a builder online to keep up, we need a system to define rules and execute them on a schedule.</p>

        <div class="subtitle-1">Loaders</div>

        <p>Loaders are sets of rules that dictate how items and mobs should be loaded. Every 15 seconds, each world examines its current state against its loader rules and updates the world accordingly.</p>

        <p>When deciding whether or not to load new templates into a world, a loader considers three things:</p>

        <ol>
          <li>Respawn wait - Loaders are grouped by zone, and each zone has a default respawn wait. By default, a loader will inherit its zone's respawn wait, but can also be configured to specify its own respawn wait if needed, which will take precedence of the zone's if defined.</li>
          <li>Population counts - Each rule defines a 'number of copies' attribute, defaulting to 1, which specifies how many of each template there should be per specified target. This can be multiplicative, for example if rule #1 loads 2 soldiers and rule #2 loads 3 apples into the output of rule #1, 6 apples will be loaded.</li>
          <li>Conditions - If one or more conditions is defined, they must evaluate to true for the loader to run. For example to only load a vampire mob during at night, there might be a condition like <code>fact_check timeofday night</code>.</li>
        </ol>

        <p>If the respawn wait threshold has been met, the conditions pass and the population counts show that more templates need to be loaded, the loaders will spawn the necessary item & mob instances.</p>

        <div class="subtitle-1">Repopulate</div>

        <p>Loaders called as part of the world's 15-second repopulation cycle will always respect the prescribed respawn wait times. But there may be situations where as a builder you need to repopulate a zone right away, perhaps to test something.</p>

        <p>The <code>/repop</code> command lets you run all of the loaders for a zone whether or not their respawn time is up. Population counts will remain observed, and conditions evaluated.</p>

        <div class="subtitle-1">Mob Load Reaction</div>

        <p>Any mob that loads will fire off its "Mob Loads" reaction once it is spawned into the world.</p>

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