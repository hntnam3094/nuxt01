<template>
  <div>
    <NuxtLink to="/04/"> 04-Demo use vuex </NuxtLink> <br>
    <NuxtLink to="/05/"> 05-Demo don't use vuex</NuxtLink><br>
    <NuxtLink to="/06/"> 06-List Customer</NuxtLink><br>
    <NuxtLink to="/07/"> 07-Demo Router.Push</NuxtLink>
    <hr />
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
          integrity:
            "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href:
            "https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css",
        },
      ],
      script: [
        {
          src:
            "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",
          crossorigin: "anonymous",
        },
      ],
    };
  },
};
</script>

<style>
.form-check-input:hover {
  cursor: pointer;
}
</style>
