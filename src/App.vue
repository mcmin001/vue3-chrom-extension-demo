<script setup>
import {ref} from "vue";

const color = ref("#ffffff");

function setColor() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: (color) => {
        document.body.style.backgroundColor = color;
      },
      args: [this.color]
    });
  });
}

</script>

<template>
  <div id="app">
    <h1>Set Background Color</h1>
    <input type="color" v-model="color" />
    <button @click="setColor">Set Color</button>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>
