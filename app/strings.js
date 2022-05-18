exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {},

  wordWrap: function (str, cols) {},

  reverseString: function (str) {
    // eslint-disable-next-line newline-per-chained-call
    return str.split("").reverse().join("");
  },
};
