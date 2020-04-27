<template>
  <v-card>
    <h5>Not a member?</h5>
    <small><a href="">Click to register, n00b!</a></small>
    <v-form ref="loginform">
      <v-row>
        <v-col cols="8">
          <v-text-field
            v-model="username"
            label="Username"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col cols="4">
          <v-btn
            small
            @click="onClickLogin"
          >
            Booya!
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-text-field
            v-model="password"
            label="Password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required, rules.min]"
            counter
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <small><a href="">Forgot it?</a></small>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginForm',
  data: () => ({
    username: '',
    password: '',
    showPassword: false,
    rules: {
      required: v => !!v || 'Required',
      min: v => v.length >= 8 || 'Min 8 characters'
    }
  }),
  methods: {
    ...mapActions('user', [
      'login'
    ]),
    onClickLogin () {
      if (!this.$refs.loginform.validate()) {
        return
      }
      this.login({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
