import { acceptHMRUpdate, defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () =>
    ({
      loadedAssignments: {},
    } as unknown),
  actions: {},
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
