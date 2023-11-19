var dolap = ["Shirt", "Pant", "TShirt"];

// 1. Soru: Dolap arrayindeki son elemanı silip consola yazdırın
dolap.pop();
console.log(dolap);

// 2. Soru: Dolap arrayindeki ilk elamanı silip yerine “Hat” elemanını gönderip consola yazdır
dolap.shift();
dolap.unshift("Hat");
console.log(dolap);

// 3. Soru: Dolap değişkeninin array olup olmadığını kontrol edin ve sonucu bir değişkene eşitleyin
var isArray = Array.isArray(dolap);
console.log(isArray);

// 4. Soru: Dolap arrayinde “Pant” elemanın olup olmadığını 3 farklı method ile kontrol edin
var includesMethod = dolap.includes("Pant");
var indexOfMethod = dolap.indexOf("Pant") !== -1;
var findMethod = dolap.find(item => item === "Pant") !== undefined;
console.log(includesMethod, indexOfMethod, findMethod);

// 5. Soru: Dolap arrayindeki elemanların karakter sayısını toplayıp geriye döndürecek fonksiyonu yazın
function toplamKarakterSayisi(arr) {
  return arr.reduce((total, item) => total + item.length, 0);
}

console.log(toplamKarakterSayisi(dolap));

// 6. Soru: Dolap arrayindki tüm elemanları büyük harfe çevirip yeni bir değişkene 3 farklı yöntemle atayın
var uppercasedArray1 = dolap.map(item => item.toUpperCase());
var uppercasedArray2 = dolap.join(',').toUpperCase().split(',');
var uppercasedArray3 = dolap.reduce((acc, item) => {
  acc.push(item.toUpperCase());
  return acc;
}, []);

console.log(uppercasedArray1, uppercasedArray2, uppercasedArray3);

// 7. Soru: Dolap arrayini index sayıları key olacak şekilde objeye çeviriniz
var dolapObjesi = {};
dolap.forEach((item, index) => {
  dolapObjesi[index] = item;
});

console.log(dolapObjesi);



// Slice Orijinal array'i değiştirmez, belirtilen aralıktaki elemanları kopyalar.
// Splice Orijinal array'i değiştirir, belirtilen aralıktaki elemanları çıkarır ve/veya yeni elemanlar ekler.

var orijinalArray = [1, 2, 3, 4, 5];
var slicedArray = orijinalArray.slice(1, 4); // 2, 3, 4
console.log(slicedArray); // [2, 3, 4]
console.log(orijinalArray); // [1, 2, 3, 4, 5]

var splicedArray = orijinalArray.splice(1, 3, 6, 7, 8); // 2, 3, 4
console.log(splicedArray); // [2, 3, 4]
console.log(orijinalArray); // [1, 6, 7, 8, 5]


// Array'deki yinelenen sayıları bulma:
const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];

const duplicates = arr.filter((value, index, self) => {
  return self.indexOf(value) !== index;
});

console.log("Yinelenen sayılar:", duplicates);

// Array'deki tüm yinelenen sayıları silip yeni bir array oluşturma (2 farklı method ile):
// Method 1
const uniqueArray1 = Array.from(new Set(arr));

// Method 2
const uniqueArray2 = [...new Set(arr)];

console.log("Tekil array (Method 1):", uniqueArray1);
console.log("Tekil array (Method 2):", uniqueArray2);

// Array'deki en yüksek ve en düşük değeri bulma (2 farklı method ile):
// Method 1
const max1 = Math.max(...arr);
const min1 = Math.min(...arr);

// Method 2
const max2 = Math.max.apply(null, arr);
const min2 = Math.min.apply(null, arr);

console.log("En yüksek değer (Method 1):", max1);
console.log("En düşük değer (Method 1):", min1);
console.log("En yüksek değer (Method 2):", max2);
console.log("En düşük değer (Method 2):", min2);

// Örnek 1
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 4");
  });

// Örnek 2
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise2 = job(true);

promise2
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return new Error("test");
  })
  .then(function (data) {
    console.log("Success:", data.message);
  })
  .catch(function (data) {
    console.log("Error:", data.message);
  });
