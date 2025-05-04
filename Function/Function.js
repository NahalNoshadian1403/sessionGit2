//  میانگین اعداد آرایه
function averageArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return arr.length === 0 ? 0 : sum / arr.length;
}

//  پیدا کردن بزرگ‌ترین عدد
function findMax(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

//  معکوس کردن رشته بدون
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

//  جابه‌جایی کلیدها و مقادیر آبجکت
function invertObject(obj) {
    const result = {};
    for (let key in obj) {
        result[obj[key]] = key;
    }
    return result;
}

//  ادغام ساده‌ی دو آبجکت
function mergeObjects(obj1, obj2) {
    for (let key in obj2) {
        obj1[key] = obj2[key];
    }
    return obj1;
}
// فراخوانی تابع میانگین
console.log(averageArray([10, 20, 30]));

// فراخوانی تابع بیشترین عدد
console.log(findMax([3, 9, 1, 15, 7]));

// فراخوانی تابع معکوس رشته
console.log(reverseString("salam"));

// فراخوانی تابع جابجایی کلید و مقدار
const originalObj = { a: 1, b: 2, c: 3 };
console.log(invertObject(originalObj));

// فراخوانی تابع ادغام دو آبجکت
const obj1 = { name: "Ali", age: 25 };
const obj2 = { city: "Tehran", age: 30 };
console.log(mergeObjects(obj1, obj2));

