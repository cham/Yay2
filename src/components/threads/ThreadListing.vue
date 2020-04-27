<template>
  <v-container>
    <v-row
      v-for="thread in threads"
      :key="thread.id"
    >
      {{thread.name}}
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ThreadListing',
  computed: mapState('threadlisting', [
    'threads'
  ])
}
</script>
