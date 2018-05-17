<template>
  <section class="section">
    <div class="container" v-if="post">
      <article>
        <div class="featured-image">
          <PostThumbnail :post="post" size="large" />
        </div>
        <header>
          <h1 v-html="post.title.rendered"></h1>
        </header>
        <div v-html="post.content.rendered"></div>
        <footer>
          <div class="categories">
            <strong>Categories: </strong>
            <span v-for="(tag, i) in tags" class="tag" :key="i">{{ tag.name }}</span>
          </div>
        </footer>
      </article>
      <nuxt-link class="button" to="/">
        All posts
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex';
  import Prism from 'prismjs';
  import loadLanguages from 'prismjs/components/index';
  import PostThumbnail from '../../components/PostThumbnail';
  loadLanguages(['php', 'bash', 'json', 'javascript']);
  import 'prismjs/themes/prism.css';

  export default {
    async asyncData ({ store, params }) {
      await store.dispatch('getPost', params.slug);
    },
    components: {
      PostThumbnail,
    },
    computed: {
      ...mapState(['post']),
      imgSrc() {
        return (this.hasThumbnail())
          ? this.post._embedded['wp:featuredmedia'][0].media_details.sizes['large'].source_url
          : '';
      },
      altText() {
        return (this.hasThumbnail())
          ? this.post._embedded['wp:featuredmedia'][0].alt_text
          : '';
      },
      tags() {
        return this.post._embedded['wp:term'][0];
      },
    },
    mounted() {
      this.$nextTick(() => {
        const codeBlocks = document.getElementsByTagName( 'code' );
        for ( const block of codeBlocks ) {
          Prism.highlightElement( block );
        }
      });
    },
    methods: {
      hasThumbnail() {
        return this.post._embedded.hasOwnProperty('wp:featuredmedia')
          && this.post._embedded['wp:featuredmedia'][0].media_details.sizes.hasOwnProperty('large');
      },
    },
  }
</script>

<style scoped lang="scss">
  .container {
    padding-left: 1.5;
    max-width: 750px;
  }
  article {
    padding-bottom: 1.5rem;
  }
  .featured-image {
    padding-bottom: 1.5rem;
  }
  .categories {
    padding-top: 1.5rem;
    border-top: 2px solid #f5f5f5;
    margin-top: 2.5rem;
  }
  .tag {
    margin-right: .25rem;
  }
</style>
