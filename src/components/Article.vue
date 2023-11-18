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

<style lang='scss'>
p, li, div { color: #ebebeb; }

.title {
  margin: 32px 0;
  text-align: center;
}
.subtitle-1 {
  color: #f5c983;
  font-size: 1.2rem !important;
}
.subtitle-2 {
  text-transform: uppercase;
  font-weight: bold;
  color: #999;
}
ul, ol {
  margin-bottom: 16px;
}

code {
  background: #212121 !important;
  color: #c5c5c5 !important;
  padding: 3px 5px;
  margin: 0 5px;
  border: 1px solid #2b2b2b;
}

table {
  code {
    border: inherit;
    background: #555 !important;
    padding: 3px;
    margin: 5px 0;
    box-shadow: none;
  }
}
</style>