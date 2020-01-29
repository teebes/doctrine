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

              <tr>
                <td>direction</td>
                <td>Only applicable for 'exit' prevents. If defined, specifies which exit is blocked by the room check.</td>
              </tr>

              <tr>
                <td>check</td>
                <td>
                  Which check to perform.
                  <br />in inventory - whether item template id 'argument' is in the actor's inventory.
                  <br />not in inventory - opposite of in_inv
                  <br />equipped - whether item template id 'argument' is equipped by the actor.
                  <br />not equipped - opposite of equipped
                  <br />mob is present - whether a mob with template id 'argument' in the room is present. If 'argument2' is specified as a faction, that faction will be exempt from the check.
                  <br />faction below - whether a character's standing in faction 'argument' is below 'argument2'
                  <br />health below - whether a character’s health is below a 'argument' threshold, in % of their max health.
                  <br />quest completed - whether a character has completed quest id 'argument'
                  <br />quest not completed - whether a character has not completed quest id 'argument'
                </td>
              </tr>

              <tr>
                <td>argument</td>
                <td>Parameter depending on the type of check</td>
              </tr>

              <tr>
                <td>argument2</td>
                <td>Parameter depending on the type of check</td>
              </tr>

              <tr>
                <td>failure_msg</td>
                <td>The message to display if the check was true, meaning the action was prevented.</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <p class="mt-12">Below are examples of configurations that make sense</p>

        <div class="subtitle-1">Only allow members of the Mountaineers clan to enter a room.</div>

        <p>
          prevent: entry
          <br />check: faction_below
          <br />argument: mountaineer
          <br />argument2: 100
          <br />failure_msg: Entry is reserved to members of the Mountaineers.
        </p>

        <div class="subtitle-1">Prevent going east when a mob is present</div>

        <p>
          prevent: exit
          <br />check: mob_is_present
          <br />argument: mob_template_id
          <br />direction: east
          <br />failure_msg: A soldier blocks the way east.
        </p>

        <div
          class="subtitle-1"
        >Prevent from entering room unless wearying a specific piece of equipment</div>

        <p>
          prevent: entry
          <br />check: not_equipped
          <br />argument: equipment_template_id (for example a cloak or a bandana)
          <br />failure_msg: You are not welcome here.
        </p>

        <div class="subtitle-1">Prevent character from exiting room unless their health is full</div>

        <p>
          prevent: exit
          <br />check: health_below
          <br />argument: 100
          <br />failure_msg: You cannot leave until you are fully rested.
        </p>

        <p>Note: adding ‘direction: east’ here would allow a west connection to be created to another part of the recovering area.</p>

        <div class="subtitle-1">Must carry key / torch before entering a room</div>

        <p>
          prevent: entry
          <br />check: not_in_inv
          <br />argument: key template id
        </p>

        <p>Note that for a torch type situation, it may make sense to have each of the rooms in the ‘dark’ section prevent entry, and for the room at the edges of the dark zone prevent exit if not carried as well, unless there is a clear established way for the player to get another torch outside of it. Otherwise, the player could drop the torch in the last dark room and exit, not ever being able to re-enter it.</p>

        <p>In the case of a key, it really doesn't make sense to have one key be required for every single room. Dropping a key in a room that would require that key to re-enter is a silly thing to do, but that does happen in real life, and it's not something we should try to prevent at all costs.</p>

        <div class="subtitle-1">Fleeing</div>

        <p>Fleeing is considered moving, and therefore all room checks apply to fleeing as well. The issue is that the checks need to be done before the fleeing location has been chosen, because if there are 3 exits but two of them are prevented, it should always flee to the one available one. And if there is only 1 exit and it’s unavailable, fleeing should then not be an option.</p>
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

<style scoped>
</style>