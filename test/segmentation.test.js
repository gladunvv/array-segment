const assert = require("assert");

const { segmentation } = require("../segmentation");

describe("Segmentation", function () {
  describe("При передачи массива должен вернуть строоку отрезков", function () {
    it("Массив [1, 3, 4, 5, 6, 7, 8] вернёт 1,3-8", async function () {
      const result = await segmentation([1, 3, 4, 5, 6, 7, 8]);
      assert.strictEqual(result, "1,3-8");
    });
    it("Массив [1, 3, 4, 5, 6, 7, 8, 10, 11, 12] вернёт 1,3-8,10-12", async function () {
      const result = await segmentation([1, 3, 4, 5, 6, 7, 8, 10, 11, 12]);
      assert.strictEqual(result, "1,3-8,10-12");
    });
    it("Массив [1, 2, 3] вернёт 1-3", async function () {
      const result = await segmentation([1, 2, 3]);
      assert.strictEqual(result, "1-3");
    });
    it("Массив [1, 2] вернёт 1,2", async function () {
      const result = await segmentation([1, 2]);
      assert.strictEqual(result, "1,2");
    });
    it("Массив [1, 2, 4] вернёт 1,2,4", async function () {
      const result = await segmentation([1, 2, 4]);
      assert.strictEqual(result, "1,2,4");
    });
    it("Массив [1, 2, 4, 5, 6] вернёт 1,2,4-6", async function () {
      const result = await segmentation([1, 2, 4, 5, 6]);
      assert.strictEqual(result, "1,2,4-6");
    });
    it("Массив [1, 2, 3, 7, 8, 9, 15, 17, 19, 20, 21] вернёт 1-3,7-9,15,17,19-21", async function () {
      const result = await segmentation([1, 2, 3, 7, 8, 9, 15, 17, 19, 20, 21]);
      assert.strictEqual(result, "1-3,7-9,15,17,19-21");
    });
    it("Массив [1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002,] вернёт 1-6,100,1091,1999-2002", async function () {
      const result = await segmentation([
        1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002,
      ]);
      assert.strictEqual(result, "1-6,100,1091,1999-2002");
    });
    it("Массив [1] вернёт 1", async function () {
      const result = await segmentation([1]);
      assert.strictEqual(result, "1");
    });
    it("Массив [1, 3, 5, 7, 9, 11] вернёт 1,3,5,7,9,11", async function () {
      const result = await segmentation([1, 3, 5, 7, 9, 11]);
      assert.strictEqual(result, "1,3,5,7,9,11");
    });
    it("Массив [] вернёт пустую строку", async function () {
      const result = await segmentation([]);
      assert.strictEqual(result, "");
    });
  });
  describe("Обработка ошибок при передачи неверных параметров", function () {
    it("Параметр типа srting", async function () {
      const arg = "[1, 3, 5, 7, 9, 11]";
      await assert.rejects(segmentation(arg), {
        message: `Текущий тип параметра ${typeof arg}, должен передоваться array`,
      });
    });
    it("Параметр типа number", async function () {
      const arg = 1;
      await assert.rejects(segmentation(arg), {
        message: `Текущий тип параметра ${typeof arg}, должен передоваться array`,
      });
    });
    it("Параметр типа object не являющийся массивом", async function () {
      const arg = {
        0: 0,
        1: 1,
        2: 2,
      };
      await assert.rejects(segmentation(arg), {
        message: `Текущий тип параметра ${typeof arg}, должен передоваться array`,
      });
    });
  });
});
