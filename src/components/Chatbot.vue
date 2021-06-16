<template>
<div id="bot">
    <amplify-chatbot
      bot-title="Cyber Buddy"
      bot-name="OrderFlowers_dev"
      welcome-message="Hello, how can I help you?"
      voice-enabled="true"
      conversationModeOn="true"
  />
</div>
  
</template>

<script>
  const handleChatComplete = (event) => {
    const {err} = event.detail;
    if (err) alert(err);
  };

  export default {
    name: "App",
    mounted() {
      const chatbotElement = this.$el.querySelector("amplify-chatbot");
      chatbotElement.addEventListener("chatCompleted", handleChatComplete);
    },
    beforeUnmount() {
      const chatbotElement = this.$el.querySelector("amplify-chatbot");
      chatbotElement.removeEventListener("chatCompleted", handleChatComplete);
    },
  };
</script>

<style>
    #bot {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }
    amplify-chatbot {
      --width: 30rem;
      --height: 40rem;
      --bot-background-color: rgb(90, 90, 129);
      --user-background-color: rgb(158, 101, 101);
      --header-color: rgb(10, 10, 66);

  }
</style>