import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import PostType from "interfaces/post";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // type Items = {
  //   [key: string]: string;
  // };

  // Ensure only the minimal needed data is exposed

  return fields.reduce((sum, field) => {
    if (field === "slug") {
      sum[field] = realSlug;
    }
    if (field === "content") {
      sum[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      sum[field] = data[field];
    }

    return sum;
  }, {}) as PostType;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    );
  return posts;
}
