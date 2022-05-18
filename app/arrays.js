exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    console.log(arr, "array");
    console.log(item, "item");
    for (var i = 0, len = arr.length; i < len; i++) {
      console.log(len);
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum: function (arr) {
    var sum = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
      sum +=
        arr[i]; /* += operator adds value to the right operand and then sums*/
    }
    console.log(sum, "sum");
    return sum;
  },

  remove: function (arr, item) {
    console.log(arr, "array");
    console.log(item, "item");

    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        /* not equal value or not equal type */
        ret.push(arr[i]);
      }
    }
    console.log(ret);

    return ret;
  },

  removeWithoutCopy: function (arr, item) {},

  append: function (arr, item) {},

  truncate: function (arr) {},

  prepend: function (arr, item) {},

  curtail: function (arr) {},

  concat: function (arr1, arr2) {},

  insert: function (arr, item, index) {},

  count: function (arr, item) {},

  duplicates: function (arr) {},

  square: function (arr) {},

  findAllOccurrences: function (arr, target) {},
};
