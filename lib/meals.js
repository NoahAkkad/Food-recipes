import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  // Simulate a slow database query
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("Could not fetch meals");
  return db.prepare("SELECT * FROM meals").all();
}


export  function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}