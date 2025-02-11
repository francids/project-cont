import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  version: process.versions.electron,
  queryRNC: async (search: string) => await ipcRenderer.invoke("query-rnc", search),
});
