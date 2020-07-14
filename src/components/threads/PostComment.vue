<template>
  <v-form ref="form">
    <v-textarea
      v-model="comment"
      :rules="[rules.required]"
    />
    <v-alert type="error" v-if="createError">{{createError}}</v-alert>
    <v-btn
      color="primary"
      class="mr-2 elevation-0"
      tile
      @click="onSubmit"
      :disabled="createFetching"
      :loading="createFetching"
    >
      Agree &amp; Post
    </v-btn>
    <v-btn
      class="elevation-0"
      tile
    >
      Preview
    </v-btn>
  </v-form>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PostComment',
  props: {
    urlname: {
      type: String,
      required: true
    }
  },
  data: () => ({
    comment: '',
    rules: {
      required: v => !!v || 'Required',
    }
  }),
  computed: mapState('comment', [
    'createFetching',
    'createError'
  ]),
  methods: {
    ...mapActions('comment', [
      'postComment'
    ]),
    onSubmit () {
      if (!this.$refs.form.validate()) {
        return
      }
      this.postComment({
        urlname: this.urlname,
        content: this.comment
      })
      .then(() => {
        if (!this.createError) {
          this.$emit('newComment', { comment: this.comment })
          this.comment = ''
          this.$refs.form.resetValidation()
        }
      })
    }
  }
}
</script>
