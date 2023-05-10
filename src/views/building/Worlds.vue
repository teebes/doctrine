<template>
  <div>
    <Article>
      <template v-slot:title>WORLDS OVERVIEW</template>
      <template v-slot:content>

        <p>When you create a new world, it will start out as private by default. Only the world's creator, the builders they've appointed and players with a character already created in the world will be able to access it.</p>

        <p>Setting a world to public will make it searchable, and accessible by anyone with a link to it.</p>

        <div class="subtitle-1">World Publishing</div>

        <p>Published worlds are featured in the Written Realms lobby, and highlighted in the search results. For a world to be published it has to be reviewed by a staff member, who will either approve it or provide notes with suggested improvements. Here's the workflow:</p>

        <p>All worlds start in Unpublished status. The world's author or any of its builders is able to submit it for review, which moves it to Under Review status.</p>

        <ul>
          <li>All worlds start in Unpublished status. </li>
          <li>A builder is able to submit a world for review, which will move it to Under Review.</li>
          <li>Once a Staff member has reviewed the world, it will be moved to either 'Approved' or 'Reviewed'.</li>
          <li>Approved worlds are published and featured in the Lobby.</li>
          <li>Reviewed worlds will include comments on how to move the world towards to approval.</li>
        </ul>        

      </template>
    </Article>
  </div>
</template>

<script>
import Article from '@/components/Article.vue';

export default {
  name: '',
  components: { Article }
}
</script>

<style></style>