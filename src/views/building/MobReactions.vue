<template>
  <div>
    <Article>
      <template v-slot:title>MOB REACTIONS</template>
      <template v-slot:content>

        <p>Reactions are ways for mobs to react to events around them, by issuing commands.</p>
        
        <div class='subtitle-1'>Room is entered</div>
        <p>
          React to a character entering the mob’s room. If an integer is defined in the option field, the reaction gating delay will be set to that. Otherwise, it will default to 10.
        </p>

        <div class='subtitle-1'>Something is said</div>
        <p>React to a character saying something.  If any of the said tokens match any of the tokens in the options field, the reactions will be run.</p>

        <div class='subtitle-1'>Item is received</div>
        <p>React to a character giving an item to a mob. The option field should be the ID of the item’s template.</p>

        <div class='subtitle-1'>Periodic</div>
        <p>Say a random command among the reaction commands at the interval defined by the option field. Defaults to 60 seconds.</p>

      </template>
    </Article>
  </div>
</template>

<script>
import Article from '@/components/Article.vue';

export default {
  name: 'Mob Reactions',
  components: {Article}
}
</script>

<style>
</style>