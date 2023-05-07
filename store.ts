import { defineStore, acceptHMRUpdate } from "pinia";
// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore("main", {
  // a function that returns a fresh state
  state: () => ({
    loadedAssignment: {},
    loadedNote: {},
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    getLoadedAssignment: (state) => state.loadedAssignment,
    // use getters in other getters
    getLoadedNote(state) {
      return state.loadedNote;
    },
  },
  // optional actions
  actions: {
    setLoadedAssignment(assignment) {
      this.loadedAssignment = assignment;
    },
    setLoadedNote(note) {
      this.loadedNote = note;
    },
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
