<template>
  <v-container>
    {{urlname}}
  </v-container>
</template>

<script>
export default {
  name: 'Thread',
  props: {
    urlname: {
      type: String,
      required: true
    }
  }
}
</script>
