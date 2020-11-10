const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

module.exports = ({ file }) => {
  let rootValue;
  // https://github.com/youzan/vant/issues/1181
  if (file && file.dirname && file.dirname.indexOf("vant") > -1) {
    rootValue = 37.5;
  } else {
    rootValue = 75;
  }
  return {
    plugins: [
      autoprefixer({
        browsers: ["Android >= 4.0", "iOS >= 8"]
      }),
      pxtorem({
        rootValue: rootValue,
        propList: ["*"],
        // selectorBlackList: ["van-"], //（数组）要忽略的选择器并保留为px。 过滤的类名
        minPixelValue: 2
      })
    ]
  };
};
