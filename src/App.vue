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
        chrome.tabs.sendMessage(tabs[0].id, { action: "changeColor", color: this.color, tabTitle: tabs[0].title }, (response) => {
          console.log(response.status);
          console.log(response.tabTitle);
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