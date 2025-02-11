import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

function createWindow() {
  const iconPath = process.platform === "win32"
    ? path.join(process.cwd(), "src/assets", "Logo.ico")
    : path.join(process.cwd(), "src/assets", "Logo.svg");

  const win = new BrowserWindow({
    title: "Project Cont",
    icon: iconPath,
    minWidth: 800,
    minHeight: 600,
    center: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.mjs"),
      devTools: (process.env.NODE_ENV === "development"),
      nodeIntegrationInWorker: true,
      sandbox: false,
    },
  });

  ipcMain.handle("query-rnc", async (_event, search) => {
    return "RNC query result " + search;
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173")
  } else {
    win.loadFile(path.join(__dirname, "../renderer/index.html"))
  }
}

app.whenReady().then(createWindow);
