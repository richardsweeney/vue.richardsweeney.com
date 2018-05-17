<template>
  <section class="section">
    <div class="container">
      <article>
        <header>
          <h1>About me</h1>
        </header>
        <div>
          <p class="is-size-4">I'm a full-stack dev. I'm Irish and I've been living in Malmö in Sweden since 2006.</p>
          <p>I work as a developer architect at <a target="_blank" href="https://angrycreative.se">Angry Creative</a> which builds awesome stuff mostly using WordPress and WooCommerce.</p>
          <p>Most of the time I work with Vue.js, React, Laravel, WordPress & WooCommerce and a large part of my work involves advising and assiging colleagues as well as product owners on various programming issues.</p>
          <p><strong>This site</strong> is built in <a target="_blank" href="https://vuejs.org/">Vue.js</a> (I do like React, but Vue is just a <em>teeny</em> bit cooler) - specificly <a target="_blank" href="https://nuxtjs.org/">Nuxt</a> which handles, SSR and routing really nicely. I use a headless WordPress as the backend and fetch content via the Rest API. I added one custom route to fetch posts via slug instead of ID. Nuxt is a really sweet framework that very much keeps in style with how clean and lovely Vue is to work with. You should try it!</p>
          <p>I used <a target="_blank" href="https://bulma.io/">Bulma</a> as a CSS framework (I'm <em>not</em> a designer), which is like Bootstrap, but <em>slightly</em> cooler.</p>
        </div>
      </article>
      <nuxt-link class="button" to="/">
        Back to the blog
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .container {
    padding-left: 1.5;
    max-width: 750px;
  }
  article {
    padding-bottom: 1.5rem;
    border-bottom: 2px solid #f5f5f5;
    margin-bottom: 1.5rem;
  }
</style>
