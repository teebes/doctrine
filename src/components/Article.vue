<template>
  <v-row justify="center">
    <v-col cols="10">
      <div class="title text-center">
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
.title {
  margin: 32px 0;
  text-align: center;
}
.subtitle-1 {
  color: #f5c983;
}
.subtitle-2 {
  text-transform: uppercase;
  font-weight: bold;
}
ul {
  margin-bottom: 16px;
}
</style>