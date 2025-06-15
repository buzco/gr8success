module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("scripts.js");
   eleventyConfig.addPassthroughCopy("admin");

  // Products collection
  eleventyConfig.addCollection("products", function(collection) {
    return collection.getFilteredByGlob("./src/products/*.md");
  });

  // Shop collection (if you have another folder, e.g., src/shop/*.md)
  eleventyConfig.addCollection("shop", function(collection) {
    return collection.getFilteredByGlob("./src/shop/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "_site"
    }
  };
};