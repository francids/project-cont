import { app, BrowserWindow, ipcMain } from "electron";
import { readFile } from "fs/promises";
import path from "path";
import { initDatabase } from "./database/database";

function createWindow() {
  const iconPath = process.platform === "win32"
    ? path.join(process.cwd(), "src", "assets", "Logo.ico")
    : path.join(process.cwd(), "src", "assets", "Logo.svg");

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
  win.maximize();

  ipcMain.handle("query-rnc", async function (_event, search: string) {
    try {
      const fileName = "DGII_RNC.txt";
      const filePath = process.env.NODE_ENV === "development"
        ? path.join(app.getAppPath(), "resources", fileName)
        : path.join(process.resourcesPath, fileName);
      const content = await readFile(filePath, "utf-8");

      const results = content
        .split("\n")
        .filter(function (line) {
          const [rnc, razonSocial] = line.split("|");
          if (!rnc || !razonSocial) return false;
          const searchLower = search.toLowerCase();
          return rnc.includes(search) ||
            razonSocial.toLowerCase().includes(searchLower);
        })
        .slice(0, 10);

      return results
        .map(function (line) {
          const [rnc, razonSocial, nombreComercial, actividad, , , , , fecha, estado, regimen] = line.split("|");
          return {
            rnc,
            razonSocial: razonSocial.trim(),
            nombreComercial: nombreComercial.trim(),
            actividad: actividad.trim(),
            fecha: fecha.trim(),
            estado: estado.trim(),
            regimen: regimen.trim()
          };
        });
    } catch (error) {
      console.error("Error al consultar RNC: ", error);
      throw error;
    }
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173")
  } else {
    win.loadFile(path.join(__dirname, "../renderer/index.html"))
  }
}

app.whenReady().then(async function () {
  await initDatabase();
  createWindow();
});
