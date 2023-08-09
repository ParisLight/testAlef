import { defineStore } from "pinia";

export const useChildrensStore = defineStore("children", {
  state: () => ({
    childrens: [],
    savedInfo: false
  }),
});
