<template>
    <div>
      <Article>
        <template v-slot:title>RANDOMIZATION</template>
        <template v-slot:content>
          <p>Executing the same commands each time something is triggered can become stale. Adding randomization introduces unpredictability, which can make it more engaging for the player.</p>

          <div class="subtitle-1">How To Randomize</div>
          <p>In order to randomize what commands will be output, place the desired commands to be randomized on a single line, each separated with a comma <code>,</code> with the entire section enclosed within square brackets <code>[ ]</code>.</p>

          <p>For example, if a mob has an enter reaction with the commands: <code>[say Hi there. , say How are you?]</code> the mob will toss up a 50/50 chance of saying either 'Hi there.' or 'How are you?' when a player enters the room. Randomization isn't limited to mob reactions; it can be used in any command field.</p>

          <p>Additionally, if the commands have a comma in them, the syntax <code>[&lt;cmd A&gt; , &lt;cmd B&gt;&lt;/cmd&gt;]</code> can be used, ensuring commas still show. Example: <code>[&lt;say Hello, John&gt; , &lt;say How are you, John?&gt;]</code> will toss up a 50/50 chance of saying 'Hello, John' or 'How are you, John?'.</p>

          <div class="subtitle-1">Probability Chances</div>

          <p>In the two examples above, each command has an equal chance of being executed. For example, with 3 variable commands, each would have a 33% chance of being executed. With 4 commands, each would have a 25% chance, and so on.</p>

          <p>You can adjust these chances using the bracket syntax<code>[probability, &lt;if true cmd&gt;, &lt;else cmd&gt;]</code>.</p>

          <p>Example: <code>[70, /echo Correct , /echo Incorrect]</code> will echo 'Correct' 70% of the time and echo 'Incorrect' 30% of the time.</p>

          <p>If the else cmd part is omitted, the game will do nothing if the probability isn't hit. Example:<code>[70, /echo Correct]</code> will toss up a 70% chance of echoing 'Correct' or doing nothing.</p>

          <p>However, the if/else syntax only affects two commands, leaving situations where you may want to be able to affect the chance of each command where there are multiple commands within the brackets. This can be achieved by repeating commands again in the brackets, increasing the chances of that command being executed.</p>

          <p>For example, if a spin-the-wheel item awards 100 gold half of the time, 1000 gold a quarter of the time and nothing for the other quarter, the item action's commands might look like: <code>[/award {{ actor }} gold 1000 , /award {{ actor }} gold 100 , /award {{ actor }} gold 100 , /send {{ actor }} You receive nothing.]</code></p>

          <div class="subtitle-1">Semi-Colon Usage</div>

          <p>Randomizing brackets work with semi-colons outside of the brackets. For example, an arrow trap executes <code>/echo An arrow fires. ; [/damage {{ actor }} 100 An arrow hits , /echo The arrow misses!]</code>. In every case, there'll be an echo saying the arrow fires, but then a 50% chance of either damaging or missing the actor executed almost simultaneously after the echo.</p>

          <p>More than one pair of randomising brackets can be joined via semi-colons. An example of randomized fishing might look like this : <code>[/echo You feel a tug on the fishing rod. , /echo A fish takes the bait.] ; [/load item 1 give it:1 {{ actor }}, /load item 2 give it:2 {{ actor }}]</code></p>

          <p>Finally, semi-colons can be used within the brackets to simulate randomizing a large chunk of commands entered over several lines, as opposed to one command on a single line, even though randomizing does happen on the same line.</p>

          <p>Example: an action to pray might look like <code>[/echo You pray. ; /delay 3 /echo The ground rumbles. ; /delay 6 /load item 1 give it:1 {{ actor }} , /echo You pray. ; /delay 3 /echo The place is silent. ; /delay 6 /echo Nothing seems to happen.]</code>. By chaining commands together and delaying each one by 3 seconds, this recreates a normal pause executed between commands on a different line.</p>

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