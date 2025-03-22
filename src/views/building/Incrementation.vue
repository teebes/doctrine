<template>
  <div>
    <Article>
      <template v-slot:title>INCREMENTATION</template>
      <template v-slot:content>
        <p>The commands <code>/incmark</code> and <code>/incfact</code> allow builders and mobs to increment a mark or a fact by the provided value.</p>

        <p>For example, a player has a counter mark with a value of 5. <code>/incmark player counter 1</code> would update the counter value to 6.</p>

        <p>Negative values can be used to decrease the mark's value. For example, <code>/incmark player counter -2</code> would decrease the counter value by 2.</p>

        <p>/incmark and /incfact work with both integers and decimal values. For example, if a balance fact is 1.1, running <code>/incfact balance 0.5</code> will set it to 1.6.</p>

        <p><strong>Note:</strong> a numerical mark or fact doesn't have to exist already in order to increment it. For example, if the fact <code>bosses_killed_count</code> hadn't been set yet, running <code>/incfact bosses_killed_count 1</code> would set <code>bosses_killed_count</code> as a fact and add 1 as its value.</p>

        <div class="subtitle-1">Use Cases</div>

        <p>Increment marks and facts reduce the need to set a brand new mark or fact every time something changes. Some useful cases include:</p>
        <ul class="mb-4">
          <li>Loading a certain amount of mobs and setting an increment fact with the same value as the amount of mobs. Each time that mob is killed, the mob counting fact could be lowered by 1 until it reaches 0, where something new occurs.</li>
          <li>Increment marking a player each time they kill a certain mob. If they pass a certain threshold, something different might happen.</li>
          <li>Likewise, increment marking a player each time they trigger a certain action. Perhaps once a threshold is passed, they can access something new.</li>
        </ul>

        <div class="subtitle-1">Increment Conditions</div>

        <p>The conditions <code>mark_above</code> and <code>fact_above</code> are essential for checking whether a mark or fact has reached the desired value. Conversely, adding 'not' before 'mark_above' and 'fact_above' means the condition qualify when the mark or fact is below the stated value.</p>

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
