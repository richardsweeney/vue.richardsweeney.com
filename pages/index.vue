<template>
  <div class="container">
    <section class="columns is-multiline">
      <div v-if="posts.length" v-for="post in posts" :key="post.id" class="column is-4">
        <PostCard :post="post"/>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostCard from '../components/PostCard'

export default {
  components: {
    PostCard,
  },
  async asyncData ({ store }) {
    await store.dispatch('getPosts');
  },
  computed: {
    ...mapState(['posts']),
  },
}
</script>

<style scoped>
.column {
  align-content: stretch;
}
</style>
