<template>
  <div class="grid">
    <h1>Date Picker</h1>
    <h2>{{ store.getDate }}</h2>
    <div class="container" v-if="!store.allDataSet">
      <DateSelector
        v-for="(type, index) in types"
        :key="index"
        :type="type"
        v-show="!store[type].isSet"
      />
    </div>
    <div class="container" v-if="store.allDataSet">
      <div>
        <h3>You're all set!</h3>
        <p></p>
        <button @click="store.$reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import DateSelector from "@/components/DateSelector";
import { useMainStore } from "./stores/mainStore";

const store = useMainStore();
const types = ["year", "month", "day", "hour", "minute", "second"];
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #0f172a;
  color: #f8fafc;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
}

div.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 48px 36px 1fr;
  grid-template-areas:
    "header"
    "date "
    ".";
}

h1 {
  grid-area: header;
  font-size: 36px;
  font-weight: 800;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  background-color: #334155;
}

h2 {
  grid-area: date;
  font-size: 24px;
  font-weight: 800;
  margin: 5px auto;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}

button {
  background-color: #475569;
  border: none;
  color: #f8fafc;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 8px;
  width: 25%;
  margin: 0 10px;
  margin-bottom: 30px;
}

button:hover {
  background-color: #64748b;
}

button:active {
  background-color: #64748b;
}

button:disabled {
  background-color: #334155;
  color: #64748b;
}

p {
  padding: 10px 0px;
  font-size: 24px;
}

.container {
  margin: 2% auto;
  width: 85%;
  background-color: #1e293b;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}

#yearContainer {
  grid-area: year;
}

#monthContainer {
  grid-area: month;
}

#dayContainer {
  grid-area: day;
}

#hourContainer {
  grid-area: hour;
}

#minuteContainer {
  grid-area: minute;
}

#secondContainer {
  grid-area: second;
}

@media screen and (max-width: 480px) {
  div.grid {
    display: flex;
    flex-direction: column;
  }
  .container {
    width: 91%;
    margin-top: 0px;
  }
}
</style>
