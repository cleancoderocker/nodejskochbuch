const postcss = require('postcss');
const tinycolor = require('tinycolor2');

module.exports = postcss.plugin('color-converter-plugin', opts => {
  opts = opts || {};

  return (root, result) => {
    root.walkRules(rule => {
      const { selector } = rule;
      rule.walk(node => {
        const { prop, value } = node;
        if (prop === 'background-color') {
          const color = tinycolor(value);
          node.value = `#${color.toHex()}`;
        }
      });
    });
  };
});
