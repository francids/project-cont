import { app, BrowserWindow } from "electron";
import path from "path";

function createWindow() {
  const iconPath = process.platform === "win32"
    ? path.join(process.cwd(), "assets", "Logo.ico")
    : path.join(process.cwd(), "assets", "Logo.svg");

  const win = new BrowserWindow({
    title: "Project Cont",
    icon: iconPath,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      devTools: false
    }
  });

  win.menuBarVisible = false;

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173")
  } else {
    win.loadFile(path.join(__dirname, "../renderer/index.html"))
  }
}

app.whenReady().then(createWindow);
