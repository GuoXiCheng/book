import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getSidebar() {
  const files = fs.readdirSync("./src").filter((file) => {
    // 正则匹配文件名: 以20开头的四位数字
    return /^\d{4}/.test(file);
  });

  files.sort((a, b) => {
    return parseInt(b) - parseInt(a);
  });

  const result = files.map((file) => {
    const temp = {
      text: file,
      items: [] as any[],
    };
    const images = fs.readdirSync(`./src/public/images/${file}`);
    fs.readdirSync(`./src/${file}`).forEach((name) => {
      if (name.endsWith(".md")) {
        const item = {};
        const filePath = path.join(`./src/${file}`, name);
        const content = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(content);

        item["text"] = data.title;
        item["link"] = `/${file}/${name.replace(/\.md$/, "")}`;
        item["author"] = data.author;

        const image = images.find((image) => image.startsWith(name.replace(/\.md$/, "")));
        if (image) {
          item["image"] = `/images/${file}/${image}`;
        }

        temp.items.push(item);
      }
    });
    return temp;
  });

  return result;
}
