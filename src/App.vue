<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="main_wrapper">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">General</RouterLink>
          <RouterLink to="/design">Design</RouterLink>
          <RouterLink to="/development">Development</RouterLink>
          <RouterLink to="/qa">QA</RouterLink>
          <!--<RouterLink to="/company">Company</RouterLink> -->
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style lang="scss">
/* 

Blue 1 - #ADD7F6
Blue 2 - #87BFFF
Blue 3 - #3F8EFC
Blue 4 - #2667FF
Blue 5 - #3B28CC

*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.5;
  font: 1rem/1.5 Roboto, sans-serif;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #3f8efc;
  }
}
body {
  background-color: black;
  color: #fff;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main_wrapper {
  width: 100%;
}
header {
  display: flex;
  justify-content: center;
  width: 100%;
  .wrapper {
    width: 100%;
    position: absolute;
    nav {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      padding: 1rem;
      a {
        display: inline-block;
        padding: 0 1rem;
        margin: 0 0.5rem;
        text-decoration: none;
        font-size: 1.25em;
        border-radius: 4px;
        color: #fff;
        &:hover {
          color: #87bfff;
        }
      }
      a.router-link-exact-active {
        color: #87bfff;
        border-bottom: solid 1px #87bfff;
        padding-bottom: 4px;
      }
    }
  }
}

/* Global Styles */
.presentation-chunk {
  height: 100vh;
  width: 95vw;
  padding: 1rem;
  margin-bottom: 100vh;
  display: flex;
  flex-direction: column;
  margin: 12px;
  &.intro-slide {
    display: flex;
    .main-heading {
      font-size: 14rem;
      line-height: 1.25em;
      margin-top: auto;
    }
  }
  .primary-heading {
    font-size: 4rem;
  }
}
</style>
