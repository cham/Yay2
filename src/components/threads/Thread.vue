<template>
  <v-container v-if="threadFetchError" fill-height fluid>
    <v-row align="center" justify="center">
      {{threadFetchError}}
    </v-row>
  </v-container>
  <v-container v-else fluid>
    <v-progress-circular
      v-if="threadFetching"
      indeterminate
      color="primary"
      style="position:absolute;right:0"
    />
    <h1>{{name}}</h1>
    <v-divider/>
    <v-row align="center">
      <v-col cols="3">
        <v-pagination
          v-model="page"
          :length="numPages"
          :total-visible="7"
        />
      </v-col>
      <v-col>
        {{firstCommentIndex}} - {{lastCommentIndex}} of {{numcomments}} in
        <router-link to="/" class="ml-2">Threads</router-link>
        <span class="mx-2">&gt;</span>
        {{categories[0]}}
        <span class="mx-2">&gt;</span>
        <router-link :to="`/thread/${urlname}`">{{name}}</router-link>
      </v-col>
    </v-row>
    <v-divider/>
    <v-row
      v-for="comment in comments"
      :key="comment.id"
    >
      <v-col cols="2">
        {{comment.postedby}}
      </v-col>
      <v-col cols="10" v-html="comment.content"/>
      <v-col cols="12">
        <v-divider />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="3">
        <v-pagination
          v-model="page"
          :length="numPages"
          :total-visible="7"
        />
      </v-col>
      <v-col>
        {{firstCommentIndex}} - {{lastCommentIndex}} of {{numcomments}} in
        <router-link to="/" class="ml-2">Threads</router-link>
        <span class="mx-2">&gt;</span>
        {{categories[0]}}
        <span class="mx-2">&gt;</span>
        <router-link :to="`/thread/${urlname}`">{{name}}</router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <post-comment
          :urlname="urlname"
          @newComment="onNewComment"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PostComment from '@/components/threads/PostComment'

export default {
  name: 'Thread',
  components: {
    PostComment
  },
  props: {
    urlname: {
      type: String,
      required: true
    }
  },
  data: () => ({
    page: 1,
    pageSize: 50
  }),
  computed: {
    ...mapState('thread', [
      'threadFetching',
      'threadFetchError',
      'comments',
      'name',
      'numcomments',
      'categories'
    ]),
    numPages () {
      return Math.ceil(this.numcomments / this.pageSize)
    },
    firstCommentIndex () {
      return (this.page - 1) * this.pageSize + 1
    },
    lastCommentIndex () {
      return Math.min(this.page * this.pageSize, this.numcomments)
    }
  },
  methods: {
    ...mapActions('thread', [
      'fetchThread',
      'clearThreadState'
    ]),
    onNewComment () {
      const newCommentTotal = this.numcomments + 1
      const page = Math.ceil(newCommentTotal / this.pageSize)
      if (this.page === page) {
        this.fetchThread({ urlname: this.urlname, page })
      }
      this.page = page
    }
  },
  watch: {
    page () {
      this.fetchThread({ urlname: this.urlname, page: this.page })
    }
  },
  mounted () {
    this.fetchThread({ urlname: this.urlname })
  },
  beforeDestroy () {
    this.clearThreadState()
  }
}
</script>
