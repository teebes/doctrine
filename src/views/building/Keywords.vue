<template>
  <div>
    <Article>
      <template v-slot:title>KEYWORDS</template>
      <template v-slot:content>
        <p>All item and mob templates have keywords that can be defined in the 'Keywords' section, located underneath 'Look Description' in the template's management screen. By default, keywords are automatically the same as the item or mob's name, except for words such as article nouns.</p>

        <p>All player commands that accept a target, as well as some builder commands like <code>/take</code> and <code>/purge</code>, require these defined keywords to target a specific item or mob. However, there are some general keywords that can't be changed, as seen below.</p>

        <div class="subtitle-1">General Keywords</div>
        <p>The following is a list of generic keywords that, by default, apply to many things:</p>

        <ul class="mb-4">
          <li>'item' applies to any item.</li>
          <li>'mob' applies to any mob.</li>
          <li>'player' applies to any player.</li>
          <li>'weapon' applies to any weapon.</li>
          <li>'armor' applies to any piece of armor, including accessories but not shields.</li>
          <li>'shield' applies to any shields.</li>
          <li>'normal' applies to any white-colored item.</li>
          <li>'imbued' applies to any yellow-colored items.</li>
          <li>'enchanted' applies to any orange-colored items.</li>
          <li>'container' applies to any container.</li>
          <li>'(core faction code)' applies to any mob in that core faction.</li>
        </ul>

        <p>Number prefixes can still be used to select a specific item that shares the same keyword. Additionally, prefixing with 'all.' can be used for bulk selection. When it comes to number prefixes, items in the room are counted first before identical items in your inventory.</p>

        <div class="subtitle-1">Template Keywords</div>
        <p>There are two particularly useful keywords, especially when it comes to building, that are handy for selecting specific templates that might otherwise be mistakenly selected with other keywords.</p>

        <div class="subtitle-2">Item Template Keyword</div> 
        <p>'it:(template_id)' selects only items with the specified item template. <strong>Example:</strong> <code>/take {{ actor }} it:12345</code> would only take an item from the actor's inventory with a template_id of 12345. Even if item 12345 shares the exact same keywords as another item in the actor's inventory, the <code>it:</code> keyword differentiates them. This reduces the chance of accidentally targeting the wrong item, especially when there are many similarly keyworded items.</p>

        <div class="subtitle-2">Mob Template Keyword</div>
        <p>'mt:(template_id)' selects only mobs with the specified mob template. <strong>Example:</strong> <code>/force mt:20166 say Would you like a cup of tea?</code> would only force a mob with a template_id of 20166 to say the dialogue. Likewise, this reduces the chance of accidentally targeting the wrong character.</p>

        <p><strong>Note:</strong> The <code>/load</code> command only accepts '(type) (template_id)' syntax and not other keywords. All other commands with a target accept varying keywords.</p>

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
