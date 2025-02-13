import { db } from "./database";

export async function createIndexes() {
  try {
    await db.createIndex({
      index: {
        fields: ["type", "rnc", "createdAt"]
      }
    });
    console.log("Indexes created successfully");
  } catch (error) {
    console.error("Error creating indexes:", error);
  }
}