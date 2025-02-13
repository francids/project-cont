import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";
import path from "path";
import { app } from "electron";
import { createIndexes } from "./database.indexes";

PouchDB.plugin(PouchDBFind);

const dbPath = process.env.NODE_ENV === "development"
  ? path.join(process.cwd(), "data")
  : path.join(app.getPath("userData"), "data");

export const db = new PouchDB(path.join(dbPath, "projectcont.db"));

export async function initDatabase() {
  try {
    await createIndexes();
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}
