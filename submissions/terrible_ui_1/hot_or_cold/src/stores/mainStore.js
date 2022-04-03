import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => {
    return {
      year: {
        value: 1970,
        min: 1970,
        max: 2050,
        isSet: false,
      },
      month: {
        value: 1,
        min: 1,
        max: 12,
        isSet: false,
      },
      day: {
        value: 1,
        min: 1,
        max: 31,
        isSet: false,
      },
      hour: {
        value: 0,
        min: 0,
        max: 23,
        isSet: false,
      },
      minute: {
        value: 0,
        min: 0,
        max: 59,
        isSet: false,
      },
      second: {
        value: 0,
        min: 0,
        max: 59,
        isSet: false,
      },
    };
  },
  getters: {
    allDataSet() {
      return (
        this.year.isSet &&
        this.month.isSet &&
        this.day.isSet &&
        this.hour.isSet &&
        this.minute.isSet &&
        this.second.isSet
      );
    },
    getDate() {
      return new Date(
        this.year.value,
        this.month.value - 1,
        this.day.value,
        this.hour.value,
        this.minute.value,
        this.second.value
      ).toLocaleString("en-US");
    },
  },
  actions: {
    setMin(payload) {
      if (this[payload.type].max === payload.value) {
        this[payload.type].max = payload.value;
      } else {
        this[payload.type].min = payload.value + 1;
      }
    },
    setMax(payload) {
      if (this[payload.type].min === payload.value) {
        this[payload.type].max = payload.value;
      } else {
        this[payload.type].max = payload.value - 1;
      }
    },
    setDate(payload) {
      this[payload.type].value = payload.value;
      this[payload.type].isSet = true;
    },
  },
});
