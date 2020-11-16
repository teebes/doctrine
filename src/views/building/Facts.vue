<template>
  <div>
    <Article>
      <template v-slot:title>FACTS</template>
      <template v-slot:content>
        <p>Facts are key/value pairs that can be set by builders, mobs, and the Fact Schedule system. Facts can then be evaluated in <router-link to="/building/conditions">conditions</router-link> using the <code>fact_check</code> operator, thereby creating conditional Room Actions, Room Checks, Loaders, Quests and Reactions.</p>

        <p>Facts can be set by builders and mobs using the <code>setfact</code> and the <code>clearfact</code> commands, and by the system itself using with the Fact Scheduler. Below is a description for each field in a Fact Schedule entry:</p>

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
                <td>Name</td>
                <td>Name for the schedule entry.</td>
              </tr>

              <tr>
                <td>Fact</td>
                <td>The name of the fact</td>
              </tr>

              <tr>
                <td>Value</td>
                <td>Value to set the fact to. Can take multiple tokens, in case of which the selection will depend on the value selected in the 'Value Selection' field.</td>
              </tr>

              <tr>
                <td>Value Selection</td>
                <td>
                  If multiple values are passed in the 'Value' field, determines which of them gets assigned to the fact:<br/>
                  <strong>Default</strong> - Fact will be set to the first value.<br/>
                  <strong>Cycle</strong> - Fact will be set to the next value in the list. For example, if the value of a 'season' fact is set to 'summer fall winter spring', and the fact is currently set to 'fall', 'winter' will be set as the next fact.<br/>
                  <strong>Random</strong> - Fact will be set to a random value in the list.

                </td>
              </tr>

              <tr>
                <td>Schedule</td>
                <td>How often to set the fact. Behavior depends on 'Schedule Type' selection.</td>
              </tr>

              <tr>
                <td>Schedule Type</td>
                <td>
                  How to interpret the 'schedule' value:<br/>
                  <strong>Interval</strong> - number of seconds between each fact setting.<br/>
                  <strong>Cron</strong> - <a href='https://en.wikipedia.org/wiki/Cron'>Cron</a> entry describing when the fact should be set.
                </td>
              </tr>

              <tr>
                <td>Change Message</td>
                <td>
                  Message to display when the fact is changed. Accepts the special variables 
                  <code><span v-pre>{{</span> fact <span v-pre>}}</span></code>,
                  <code><span v-pre>{{</span> old_value <span v-pre>}}</span></code>
                  and
                  <code><span v-pre>{{</span> new_value <span v-pre>}}</span></code>
                  which will be substituted with the appropriate values.

                  <!-- Message to display when the fact is changed. Accepts the special variables {{ fact }}, {{ old_value }} and {{ new_value }} which will be substituted with the appropriate values. -->
                </td>
              </tr>

            </tbody>
          </template>
        </v-simple-table>

        <p class='mt-12'>For more background on Facts and example Scheduler setups, refer to <a href='https://blog.writtenrealms.com/facts'>The Facts Blog Post</a>.</p>

      </template>
    </Article>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "Facts",
  components: { Article },
};
</script>

<style scoped>
</style>