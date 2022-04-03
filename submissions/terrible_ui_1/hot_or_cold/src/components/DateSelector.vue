<template>
  <div>
    <h3>Is this your {{ props.type }}?</h3>
    <p>{{ props.type != "month" ? getMiddle : getMonth }}</p>
    <span>
      <button
        :disabled="minButtonDisabled"
        @click="store.setMin({ type: props.type, value: getMiddle })"
      >
        Too Low
      </button>
      <button
        :disabled="store[props.type].isSet"
        @click="store.setDate({ type: props.type, value: getMiddle })"
      >
        Yes
      </button>
      <button
        :disabled="maxButtonDisabled"
        @click="store.setMax({ type: props.type, value: getMiddle })"
      >
        Too High
      </button>
    </span>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/mainStore";
import { computed } from "vue";

const store = useMainStore();
const props = defineProps(["type"]);

const getMiddle = computed(() => {
  return Math.floor((store[props.type].max + store[props.type].min) / 2);
});

const getMonth = computed(() => {
  switch (Math.floor((store[props.type].max + store[props.type].min) / 2)) {
    case 1:
      setDay(31);
      return "January";
    case 2:
      store.year.value % 4 === 0 ? setDay(29) : setDay(29);
      return "February";
    case 3:
      setDay(31);
      return "March";
    case 4:
      setDay(30);
      return "April";
    case 5:
      setDay(31);
      return "May";
    case 6:
      setDay(30);
      return "June";
    case 7:
      setDay(31);
      return "July";
    case 8:
      setDay(31);
      return "August";
    case 9:
      setDay(30);
      return "September";
    case 10:
      setDay(31);
      return "October";
    case 11:
      setDay(30);
      return "November";
    case 12:
      setDay(31);
      return "December";
    default:
      return "";
  }
});

const minButtonDisabled = computed(() => {
  return (
    store[props.type].min === store[props.type].max ||
    Math.floor((store[props.type].max + store[props.type].min) / 2) == store[props.type].max ||
    store[props.type].isSet
  );
});

const maxButtonDisabled = computed(() => {
  return (
    store[props.type].min == Math.floor((store[props.type].max + store[props.type].min) / 2) ||
    store[props.type].max === store[props.type].min ||
    store[props.type].isSet
  );
});

const setDay = (value) => {
  store.setMax({ type: "day", value: value });
};
</script>
