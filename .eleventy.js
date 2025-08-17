const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("scripts.js");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addNunjucksFilter("date", function(dateObj, format = "yyyy-MM-dd") {
    if(typeof dateObj === "string") {
      dateObj = new Date(dateObj);
    }
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  // Products collection
  eleventyConfig.addCollection("products", function(collection) {
    return collection.getFilteredByGlob("./src/products/*.md");
  });

  // Shop collection
  eleventyConfig.addCollection("shop", function(collection) {
    return collection.getFilteredByGlob("./src/shop/*.md");
  });

  // Archive collection
  eleventyConfig.addCollection("archives", function(collection) {
    return collection.getFilteredByGlob("./src/archive/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "/_includes",
      output: "_site"
    },
    // Add defaults here
    frontMatterDefaults: [
      {
        scope: {
          path: "products" // applies to all .md inside src/products/
        },
        values: {
          layout: "product-card.njk"
        }
      }
    ]
  };
};
