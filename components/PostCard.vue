<template>
  <article class="card">
    <PostThumbnail :post="post" size="post_grid" />
    <header class="card-header">
      <h3 class="card-header-title" v-html="title"></h3>
    </header>
    <div class="card-content">
      <time class="subtitle">{{ postDate }}</time>
      
      <div v-html="post.excerpt.rendered"></div>
    </div>
    <div class="card-footer">
      <nuxt-link class="card-footer-item" :to="{ path: `/${post.slug}` }">Read more</nuxt-link>
    </div>
  </article>
</template>

<script>
  import PostThumbnail from './PostThumbnail';
  import moment from 'moment';

  export default {
    name: 'PostCard',
    components: {
      PostThumbnail
    },
    computed: {
      postDate() {
        return this.capitalizeFirstLetter(moment( this.post.date ).fromNow());
      },
      title() {
        return this.post.title.rendered;
      },
    },
    methods: {
      capitalizeFirstLetter(string) {
       return string.charAt(0).toUpperCase() + string.slice(1);
      },
    },
    props: {
      post: {
        required: true,
        type: Object,
      },
    },
  }
</script>

<style lang="scss" scoped>
  .card {
    height: 100%;
    position: relative;
    padding-bottom: 50px;
  }

  .card-header {
    // height: 110px;
    align-items: flex-end;
    h3.card-header-title {
      line-height: 1.4;
      margin-bottom: 0;
    }
  }

  .subtitle {
    display: block;
    margin-bottom: 1rem;
  }

  .card-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
