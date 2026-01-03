const { DateTime } = require("luxon");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

import path from "node:path";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.watchIgnores.add("img/**");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "jpeg"],
    widths: [368, 736, 900],
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
    filenameFormat: function (id, src, width, format) {
      // Added a check to ensure 'src' exists to prevent crashes
      const filename = path.basename(src, path.extname(src));
      return `${filename}-${width}.${format}`;
    }
  });
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("scripts.js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: "https://www.gr8success.xyz",
    },
  });

  eleventyConfig.addNunjucksFilter("date", function(dateObj, format = "yyyy-MM-dd") {
    if(typeof dateObj === "string") {
      dateObj = new Date(dateObj);
    }
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  // Shop collection
  eleventyConfig.addCollection("shop", function(collection) {
    return collection.getFilteredByGlob("./src/shop/*.md");
  });

  // Archive collection
  eleventyConfig.addCollection("archives", function(collection) {
    return collection.getFilteredByGlob("./src/archive/*.md");
  });
  
  // Products collection
  eleventyConfig.addCollection("products", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/products/*.md")
      .sort((a, b) => {
        const ao = a.data.order ?? 9999;
        const bo = b.data.order ?? 9999;
        return ao - bo;
      });
  });

 return {
  dir: {
    input: "src",
    includes: "../_includes",
    output: "_site"
  }
};
};
