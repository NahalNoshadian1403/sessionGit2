const arr = [2, 4, 6, 3, 5, 2, 8]; // مثال

let product = 1;

for (let i = 2; i <= 5; i++) {
    product *= arr[i];
}

console.log("حاصل‌ضرب عناصر سوم تا ششم:", product);