const { DateTime } = require("luxon");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// output image formats
		formats: ["avif", "webp", "jpeg"],

		// output image widths
		widths: ["auto"],

		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
			pictureAttributes: {}
		},
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
