<template>
  <v-container class="fill-height">
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
