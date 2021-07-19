module.exports = class SegmentManager {
  constructor() {
    this.segmentsArray = [];
    this.segment = [];
  }

  addNewSegment() {
    this.segmentsArray.push([]);
  }

  addValueInSegment(value) {
    this.segment.push(value);
  }

  addSegmentInArray() {
    this.segmentsArray.push(this.segment);
  }

  clearSegment() {
    this.segment = [];
  }

  getResult() {
    const result = this.segmentsArray
      .map((el) => {
        if (el.length > 2) return `${el[0]}-${el[el.length - 1]}`;

        return el.length > 1 ? `${el[0]},${el[1]}` : `${el[0]}`;
      })
      .join(",");
    return result;
  }
};
