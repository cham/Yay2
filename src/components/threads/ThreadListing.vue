<template>
  <v-container fill-height fluid>
    <v-row
      v-for="thread in threads"
      :key="thread.id"
    >
      <v-col cols="6">
        <router-link :to="`/thread/${thread.urlname}`">{{thread.name}}</router-link>
      </v-col>
      <v-col cols="2">
        {{thread.postedby}}
      </v-col>
      <v-col cols="2">
        {{thread.last_comment_by}}
      </v-col>
      <v-col cols="1">
        {{thread.numcomments}}
      </v-col>
      <v-col cols="1">
        +
        -
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ThreadListing',
  computed: mapState('threadlisting', [
    'threads'
  ]),
  methods: mapActions('threadlisting', [
    'fetchThreadListing'
  ]),
  mounted () {
    this.fetchThreadListing()
  }
}
</script>
