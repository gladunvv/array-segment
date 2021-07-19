# array-segment
Пакет предоставляет функцию которая преобразует отсортированный массив чисел в строку отрезков

## Зависимости    
* Mocha




## Использование    
Пакет можно установить с помощью пакетного менеджера npm
```
npm install array-segment
```
Или загрузить из репозитория
```
git clone https://github.com/gladunvv/array-segment.git
cd array-segment
npm install
```




## Пример
Основная функция segmentation пакета array-segment, преобразует отсортированный массив чисел в строку содержащую отрезки последовательностей.         
Важно! Функция segmentation является асинхронной и возвращает промис

```js
const { segmentation } = require('array-segment');

async function main() {
  const arr = [1,2,3,4,5,6,100,1091,1999,2000,2001,2002];
  const segments = await segmentation(arr);

  return segments;
}
console.log(main());
// 1-6,100,1091,1999-2002
```


## Тесты         
Тесты можно запустить командой `npm test`

