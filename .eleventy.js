import { DateTime } from "luxon";
import pluginSitemap from "@quasibit/eleventy-plugin-sitemap";
import path from "node:path";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  // --- Image Plugin Configuration ---
  eleventyConfig.watchIgnores.add("img/**");
eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
  failOnError: false,
  formats: ["avif", "webp", "jpeg"],
  widths: [368, 736, 900],
  // This line tells the plugin only to transform local files, 
  // and ignore things starting with http or https
  shouldTransformDOMElement: (el) => {
    const src = el.getAttribute("src");
    // If there's no src, or it's an external link, or it's a .ico file, skip it.
    if (!src || src.startsWith("http") || src.startsWith("//") || src.endsWith(".ico") || src.endsWith(".gif")) {
      return false;
    }
    return true;
  },
  htmlOptions: {
    imgAttributes: {
      loading: "lazy",
      decoding: "async",
      },
    },
    filenameFormat: function (id, src, width, format) {
      if (!src) return `${id}-${width}.${format}`;
      const filename = path.basename(src, path.extname(src));
      return `${filename}-${width}.${format}`;
    }
  });

  // --- Passthrough File Copies ---
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("scripts.js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  eleventyConfig.addPassthroughCopy("_redirects");

  // --- Sitemap Plugin ---
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: "https://www.gr8success.xyz",
    },
  });

  // --- Filters ---
  eleventyConfig.addNunjucksFilter("date", function(dateObj, format = "yyyy-MM-dd") {
    if(typeof dateObj === "string") {
      dateObj = new Date(dateObj);
    }
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  // --- Collections ---
  eleventyConfig.addCollection("shop", function(collection) {
    return collection.getFilteredByGlob("./src/shop/*.md");
  });

  eleventyConfig.addCollection("archives", function(collection) {
    return collection.getFilteredByGlob("./src/archive/*.md");
  });
  
  eleventyConfig.addCollection("products", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/products/*.md")
      .sort((a, b) => {
        const ao = a.data.order ?? 9999;
        const bo = b.data.order ?? 9999;
        return ao - bo;
      });
  });

  // --- Directory Settings ---
  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "_site"
    }
  };
}