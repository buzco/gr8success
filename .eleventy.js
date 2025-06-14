module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("scripts.js");
  return {
    dir: {
      input: "src",
      includes: "../_includes", // This is needed if your _includes is outside src
      output: "_site"
    }
  };
};