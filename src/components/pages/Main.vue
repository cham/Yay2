<template>
  <v-container fill-height fluid>
    <thread-listing/>
  </v-container>
</template>

<script>
import ThreadListing from '@/components/threads/ThreadListing'

export default {
  name: 'Main',
  components: {
    ThreadListing
  }
}
</script>
