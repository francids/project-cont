import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  version: process.versions.electron,
  queryRNC: async (search: string) => await ipcRenderer.invoke("query-rnc", search),
});

contextBridge.exposeInMainWorld("app", {
  version: async function () {
    return await ipcRenderer.invoke("version-app");
  }
});

contextBridge.exposeInMainWorld("theme", {
  get: async function () {
    return await ipcRenderer.invoke("get-theme");
  },
  onUpdated: function (listener) {
    ipcRenderer.on("theme-updated", function (_event, darkMode) {
      listener(darkMode);
    });
  },
});
