const SegmentManager = require("./SegmentManager");

exports.segmentation = async function (array) {
  const promise = new Promise(function (resolve, reject) {
    if (!Array.isArray(array)) {
      reject(
        new Error(
          `Текущий тип параметра ${typeof array}, должен передоваться array`
        )
      );
    }
    const segments = new SegmentManager();

    for (let i = 0; i <= array.length; i++) {
      if (array[i] + 1 === array[i + 1]) {
        segments.addValueInSegment(array[i]);
      } else if (array[i]) {
        segments.addValueInSegment(array[i]);
        segments.addSegmentInArray();
        segments.clearSegment();
      }
    }

    const result = segments.getResult();
    resolve(result);
  });

  return await promise;
};
