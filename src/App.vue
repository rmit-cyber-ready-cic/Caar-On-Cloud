<template>
  <!-- 👇 Use <amplify-authenticator> as a web component -->
  <amplify-authenticator usernameAlias="username">
    <div id="nav">
      <NavBar></NavBar>
    </div>
    <router-view />
  </amplify-authenticator>

  <Footer />

</template>

<script>

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
};
</script>




