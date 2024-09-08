import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  // Simulate a slow database query
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("Could not fetch meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferImage), (error) => {
    if (error) {
      throw new Error("Could not save image");
    }
  });
  meal.image = `/images/${filename}`;

  db.prepare(
    `
    INSERT INTO meals
    (title, summary, instructions, image, creator, creator_email, slug)
    VALUES
    (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
  `
  ).run(meal);
}
