<template>
  <v-card class="elevation-0">
    <h4>Hi, {{username}}</h4>
    <v-row class="mx-0">
      <v-col cols="2" class="pa-0">
        <v-img
          :src="`https://yayhooray.com/avatars/${urlname}`"
          width="16"
          height="16"
        />
      </v-col>
      <v-col cols="10" class="pa-0">
        <p class="mb-0">
          Preferences
        </p>
        <p class="mb-0">
          Logout
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserInfoBox',
  computed: mapState('user', [
    'username',
    'urlname'
  ])
}
</script>
