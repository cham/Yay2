<template>
  <v-container>
    <v-row
      v-for="thread in threads"
      :key="thread.id"
    >
      <v-col>
        {{thread.name}}
      </v-col>
      <v-col>
        {{thread.postedby}}
      </v-col>
      <v-col>
        {{thread.last_comment_by}}
      </v-col>
      <v-col>
        {{thread.numcomments}}
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
