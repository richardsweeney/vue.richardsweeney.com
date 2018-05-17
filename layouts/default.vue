<template>
  <div>
    <header>
      <nav class="navbar is-info is-centered">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <svg style="width:24px; height:24px" viewBox="0 0 24 24"> -->
              <path fill="#fff" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/about-me">About Me</nuxt-link>
        </div>
        <div class="navbar-item rico">
          <span class="rico-suave">Richard Sweeney.</span> PHP, WordPress, JavaScript, stuff like that.
        </div>
      </nav>

    </header>
    <main class="content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang="sass">
  @import '~bulma/sass/utilities/_all'
  @import '~bulma/sass/base/_all'
  @import "~bulma/sass/grid/_all"
  @import "~bulma/sass/components/card"
  @import "~bulma/sass/components/navbar"
  @import "~bulma/sass/elements/container"
  @import "~bulma/sass/elements/content"
  @import "~bulma/sass/elements/button"
  @import "~bulma/sass/elements/tag"

  .navbar
    justify-content: space-between
    a
      color: white
      margin-right: .5rem
      border-right: 1px solid rgba(white, .35)
      &:last-child
        border-right: none

    .navbar-brand
      // justify-content: space-between
      border-bottom: 1px solid rgba(white, .35)

  .rico-suave
    font-weight: bold
    padding-right: 5px

  .content
    padding: 1.5rem 1.5rem 5rem

  .navbar-container
    padding: 1.5rem
    justify-content: space-between
    align-item: center

  .navbar-item.rico
    color: white
    text-align: right

</style>
