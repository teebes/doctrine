<template>
  <v-row justify="center">
    <v-col cols="10">
      <div class="title text-center my-4 primary--text">
        <slot name="title"></slot>
      </div>

      <div class="content">
        <slot name="content"></slot>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Article"
};
</script>

<style>
.subtitle-1 {
  color: #f5c983;
}
</style>