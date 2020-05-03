<template>
  <v-app>
    <v-navigation-drawer
      permanent
      app
      floating
    >
      <user-info-box v-if="loggedIn" class="ma-4" />
      <login-form v-else class="ma-4" />

      <messages-summary v-if="loggedIn" class="ma-4" />

      <threads-nav class="ma-4" />

      <online-buddies v-if="loggedIn" class="ma-4" />
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import UserInfoBox from '@/components/users/UserInfoBox'
import LoginForm from '@/components/users/LoginForm'
import MessagesSummary from '@/components/messages/MessagesSummary'
import ThreadsNav from '@/components/navigation/ThreadsNav'
import OnlineBuddies from '@/components/users/OnlineBuddies'

export default {
  name: 'App',
  components: {
    UserInfoBox,
    LoginForm,
    MessagesSummary,
    ThreadsNav,
    OnlineBuddies
  },
  computed: mapState('user', [
    'loggedIn'
  ])
}
</script>
