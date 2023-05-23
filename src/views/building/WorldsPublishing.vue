<template>
  <div>
    <Article>
      <template v-slot:title>WORLD PUBLISHING</template>
      <template v-slot:content>

        <p>Published worlds are featured in the Written Realms lobby, and highlighted in the search results. For a world to be published it has to be reviewed by a staff member, who will either approve it or provide notes with suggested improvements. Here's the workflow:</p>

        <p>All worlds start in Unpublished status. The world's author or any of its builders is able to submit it for review, which moves it to Under Review status.</p>

        <ul>
          <li>All worlds start in Unpublished status. </li>
          <li>A builder is able to submit a world for review, which will move it to Under Review.</li>
          <li>Once a Staff member has reviewed the world, it will be moved to either 'Approved' or 'Reviewed'.</li>
          <li>Approved worlds are published and featured in the Lobby.</li>
          <li>Reviewed worlds will include comments on how to move the world towards to approval.</li>
        </ul>

        <div class="subtitle-1">Review Guidelines</div>

        <p>One human's review of another's work is inherently subjective. But we do try to be as objective as possible,
          and to that end follow the set of guidelines below.</p>

        <p>First and foremost, the world should be compelling to those who experience it. You want your players to walk
          away with a feeling that it was time well spent. While it is a very open-ended goal, it is a fundamental one.
          You can create any world you want and make it exactly how you want it for yourself. But if you mean to publish
          it to others, then you have to try to put yourself in the shoes of your players. Something about your world has
          draw them in and keep them playing.</p>

        <p>We look for the following:</p>

        <ol>
          <li>Polish - A published world should have a level of polish that clearly indicates it as having graduated from
            a work in progress. It should have an overarching structure or idea. It should have card and banner artwork,
            as well as a world description with RP guidelines if applicable.</li>
          <li>Coherence - A world should be relatively uniform in theme and style. This can vary as a player progresses
            through it, but the variations should be deliberately paced and happen for good reasons.</li>
        <li>Introduction - There should be a deliberate exposition of the world to new players. Even if there is a
          stylistic choice of dropping a player out in an unfamiliar environment with no instructions, there should
          still be thought that goes behind their initial experience, and a creative rationale for how it is done.</li>
        <li>Completion - A published world needs either one or more definitive endings, or it needs an endgame loop. The
          players should be able to rapidly develop a sense for which of the two they are in, and the world needs to be
          built with that end in mind.</li>
        <li>Consistency - Some worlds may choose to have elaborate room descriptions, some may opt for pithy one-liners.
          Others may omit room descriptions altogether and only go with room names, mob & item descriptions, and echo
          messages. Any of those choices are fine but a world should not be all over the place switching from one
          fundamental style to another.</li>
        <li>Intellectual Property Rights - A published world can't contain copyrighted intellectual property (for
          example worlds that take place in a proprietary universe such as Star Wars, Harry Potter, Lord of the Rings,
          etc). Either create original work, or make sure you have the rights to the IP before publishing a world.</li>
      </ol>

      <p>Our ultimate aim is to curate a collection of worlds that captivate, inspire, and engage players. We understand
        and fully embrace the subjectivity of what constitutes a "good" world, and we recognize that not every criterion
        can be neatly encapsulated within our six established sections.</p>

      <p>Every world has its own unique charm and character, and sometimes, it's the indefinable qualities that make a
        world truly stand out. It's these nuances that guide our final decision in the review process. Therefore, please
        note that we reserve the right to deny approval for any world, even if it seemingly meets all the stated
        guidelines. There may be other factors at play that don't fit neatly into our outlined criteria.</p>


    </template>
  </Article>
</div></template>

<script>
import Article from '@/components/Article.vue';

export default {
  name: '',
  components: { Article }
}
</script>

<style></style>