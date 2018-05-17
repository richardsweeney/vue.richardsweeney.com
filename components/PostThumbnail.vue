<template>
  <div class="card-image" v-if="hasThumbnail">
    <nuxt-link :to="{ path: `/${post.slug}` }">
      <img :src="thumbnailSrc" :alt="altText">
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'PostThumbnail',
    props: {
      post: {
        required: true,
        type: Object,
      },
      size: {
        required: true,
        type: String,
      }
    },
    computed: {
      thumbnailSrc() {
        return (this.hasThumbnail())
          ? this.post._embedded['wp:featuredmedia'][0].media_details.sizes[ this.size ].source_url
          : '';
      },
      altText() {
        return (this.hasThumbnail())
          ? this.post._embedded['wp:featuredmedia'][0].alt_text
          : '';
      }
    },
    methods: {
      hasThumbnail() {
        return this.post._embedded.hasOwnProperty('wp:featuredmedia')
          && this.post._embedded['wp:featuredmedia'][0].media_details.sizes.hasOwnProperty( this.size );
      },
    },
  }
</script>

<style scoped>

</style>
