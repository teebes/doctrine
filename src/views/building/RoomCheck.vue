<template>
  <div>
    <Article>
      <template v-slot:title>ROOM CHECKS</template>
      <template v-slot:content>
        <p>
          Room checks are an internal mechanism for
          <strong>preventing</strong> entering or leaving a room based on certain conditions. Room checks should be read as the action is denied if the checked condition holds true.
        </p>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Field</th>
                <th class="text-left">Definition</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="field in room_check_fields" :key="field.name"></tr> -->
              <tr>
                <td>prevent</td>
                <td>
                  Which action to prevent.
                  <br />
                  <strong>entry</strong> - look at the move’s destination room entry checks before allowing the actor to enter it.
                  <br />
                  <strong>exit</strong> - look at the move’s current room exit checks before allowing the actor to exit it.
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
  name: "Factions",
  components: { Article },
  computed: {
    room_check_fields: () => {
      return [];
    }
  }
};
</script>

<style>
.my-title {
  /* Goal: implement 'title primary--text' */
  /* color: var(--v-primary-base); */
}
</style>