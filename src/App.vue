<template>
  <v-app>
    <v-navigation-drawer
      permanent
      app
    >
      <user-info-box />
      <messages-summary />
      <threads-nav />
      <online-buddies />
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import UserInfoBox from '@/components/users/UserInfoBox'
import MessagesSummary from '@/components/messages/MessagesSummary'
import ThreadsNav from '@/components/navigation/ThreadsNav'
import OnlineBuddies from '@/components/users/OnlineBuddies'

export default {
  name: 'App',
  components: {
    UserInfoBox,
    MessagesSummary,
    ThreadsNav,
    OnlineBuddies
  }
}
</script>
