<template>
  <div id="app">
    <h1>Change Background Color</h1>
    <input v-model="color" type="color" />
    <button @click="changeColor">Change Color</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '#ffffff'
    };
  },
  methods: {
    changeColor() {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "changeColor", color: this.color }, (response) => {
          console.log(response.status);
        });
      });
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
}
</style>